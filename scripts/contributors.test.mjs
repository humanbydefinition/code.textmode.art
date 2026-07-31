import assert from "node:assert/strict";
import { test } from "node:test";

import {
  END_MARKER,
  START_MARKER,
  escapeHtml,
  renderContributorsSection,
  replaceContributorsSection,
  validateContributionTypes,
  validateRegistry,
} from "./contributors.mjs";

function createCatalog(overrides = {}) {
  return {
    schemaVersion: 1,
    contributionTypes: [
      {
        key: "code",
        emoji: "💻",
        label: "Code",
        description: "Commits and pull requests",
      },
      {
        key: "doc",
        emoji: "📖",
        label: "Documentation",
        description: "Documentation improvements",
      },
    ],
    ...overrides,
  };
}

function createRegistry(overrides = {}) {
  return {
    schemaVersion: 1,
    contributors: [
      {
        login: "octocat",
        name: "Octo Cat",
        contributions: ["code", "doc"],
        links: [{ icon: "website", url: "https://example.com" }],
      },
    ],
    ...overrides,
  };
}

test("renders deterministically and is idempotent", () => {
  const registry = createRegistry();
  const catalog = createCatalog();
  const section = renderContributorsSection(registry, catalog);
  const readme = `# Example\n\n${START_MARKER}\nold\n${END_MARKER}\n`;
  const rendered = replaceContributorsSection(readme, section);

  assert.equal(replaceContributorsSection(rendered, section), rendered);
  assert.match(rendered, /Octo Cat/);
  assert.match(rendered, /Code: Commits and pull requests/);
});

test("wraps contributor cards after seven entries in registry order", () => {
  const contributors = Array.from({ length: 8 }, (_, index) => ({
    login: `person-${index}`,
    name: `Person ${index}`,
    contributions: ["code"],
  }));
  const section = renderContributorsSection(
    createRegistry({ contributors }),
    createCatalog(),
  );

  assert.equal(section.match(/<tr>/g)?.length, 2);
  assert.ok(section.indexOf("Person 0") < section.indexOf("Person 7"));
});

test("rejects duplicate logins regardless of case", () => {
  const registry = createRegistry({
    contributors: [
      { login: "octocat", contributions: ["code"] },
      { login: "OctoCat", contributions: ["code"] },
    ],
  });

  assert.throws(
    () => validateRegistry(registry, createCatalog()),
    /duplicate contributor login/,
  );
});

test("rejects unknown and out-of-order contribution types", () => {
  assert.throws(
    () =>
      validateRegistry(
        createRegistry({
          contributors: [{ login: "octocat", contributions: ["unknown"] }],
        }),
        createCatalog(),
      ),
    /unknown contribution type/,
  );
  assert.throws(
    () =>
      validateRegistry(
        createRegistry({
          contributors: [{ login: "octocat", contributions: ["doc", "code"] }],
        }),
        createCatalog(),
      ),
    /catalog order/,
  );
});

test("rejects unsupported schema versions, insecure URLs, and unsupported link icons", () => {
  assert.throws(
    () =>
      validateRegistry(createRegistry({ schemaVersion: 2 }), createCatalog()),
    /unsupported/,
  );
  assert.throws(
    () =>
      validateRegistry(createRegistry(), createCatalog({ schemaVersion: 2 })),
    /unsupported/,
  );
  assert.throws(
    () =>
      validateRegistry(
        createRegistry({
          contributors: [
            {
              login: "octocat",
              contributions: ["code"],
              links: [{ icon: "website", url: "http://example.com" }],
            },
          ],
        }),
        createCatalog(),
      ),
    /must use HTTPS/,
  );
  assert.throws(
    () =>
      validateRegistry(
        createRegistry({
          contributors: [
            {
              login: "octocat",
              contributions: ["code"],
              links: [{ icon: "untrusted", url: "https://example.com" }],
            },
          ],
        }),
        createCatalog(),
      ),
    /icon is unsupported/,
  );
});

test("rejects duplicate contribution type keys regardless of case", () => {
  const catalog = createCatalog({
    contributionTypes: [
      {
        key: "code",
        emoji: "💻",
        label: "Code",
        description: "Code",
      },
      {
        key: "Code",
        emoji: "✨",
        label: "Other code",
        description: "Other code",
      },
    ],
  });

  assert.throws(
    () => validateContributionTypes(catalog),
    /duplicate contribution type key/,
  );
});

test("fails closed for absent, duplicate, and reversed markers", () => {
  const section = renderContributorsSection(createRegistry(), createCatalog());
  assert.throws(
    () => replaceContributorsSection("# Missing\n", section),
    /exactly one/,
  );
  assert.throws(
    () =>
      replaceContributorsSection(
        `${START_MARKER}\n${START_MARKER}\n${END_MARKER}`,
        section,
      ),
    /exactly one/,
  );
  assert.throws(
    () => replaceContributorsSection(`${END_MARKER}\n${START_MARKER}`, section),
    /out of order/,
  );
});

test("escapes HTML-sensitive contributor content", () => {
  const registry = createRegistry({
    contributors: [
      {
        login: "octocat",
        name: 'Miyuki <script>"雪"&</script>',
        contributions: ["code"],
      },
    ],
  });
  const section = renderContributorsSection(registry, createCatalog());

  assert.doesNotMatch(section, /<script>/);
  assert.match(
    section,
    /Miyuki &lt;script&gt;&quot;雪&quot;&amp;&lt;\/script&gt;/,
  );
  assert.equal(escapeHtml(`&<>"'`), "&amp;&lt;&gt;&quot;&#39;");
});
