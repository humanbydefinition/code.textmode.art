#!/usr/bin/env node

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

export const START_MARKER = "<!-- TEXTMODE-CONTRIBUTORS:START -->";
export const END_MARKER = "<!-- TEXTMODE-CONTRIBUTORS:END -->";

const CONTRIBUTORS_REGISTRY_URL =
  "https://github.com/humanbydefinition/code.textmode.art/blob/main/.vitepress/data/contributors.json";
const CONTRIBUTION_TYPES_URL =
  "https://github.com/humanbydefinition/code.textmode.art/blob/main/.vitepress/data/contribution-types.json";
const CONTRIBUTORS_URL = "https://code.textmode.art/docs/contributors";
const ALLOWED_LINK_ICONS = [
  "website",
  "github",
  "instagram",
  "twitter",
  "mastodon",
  "bluesky",
  "discord",
];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function assertObject(value, label) {
  assert(
    value !== null && typeof value === "object" && !Array.isArray(value),
    `${label} must be an object`,
  );
}

function assertNonEmptyString(value, label) {
  assert(
    typeof value === "string" && value.trim().length > 0,
    `${label} must be a non-empty string`,
  );
}

function assertHttpsUrl(value, label) {
  assertNonEmptyString(value, label);

  let url;
  try {
    url = new URL(value);
  } catch {
    throw new Error(`${label} must be a valid URL`);
  }

  assert(url.protocol === "https:", `${label} must use HTTPS`);
  assert(
    url.username === "" && url.password === "",
    `${label} must not contain credentials`,
  );
}

function assertKnownKeys(object, allowedKeys, label) {
  for (const key of Object.keys(object)) {
    assert(
      allowedKeys.includes(key),
      `${label} contains unknown property "${key}"`,
    );
  }
}

export function validateContributionTypes(catalog) {
  assertObject(catalog, "contribution type catalog");
  assertKnownKeys(
    catalog,
    ["$schema", "schemaVersion", "contributionTypes"],
    "contribution type catalog",
  );
  assert(
    catalog.schemaVersion === 1,
    `unsupported contribution types schema version: ${catalog.schemaVersion}`,
  );

  assert(
    Array.isArray(catalog.contributionTypes) &&
      catalog.contributionTypes.length > 0,
    "contributionTypes must be a non-empty array",
  );
  const seenKeys = new Set();

  for (const [index, definition] of catalog.contributionTypes.entries()) {
    const label = `contributionTypes[${index}]`;
    assertObject(definition, label);
    assertKnownKeys(
      definition,
      ["key", "emoji", "label", "description"],
      label,
    );
    assertNonEmptyString(definition.key, `${label}.key`);
    assert(
      /^[A-Za-z][A-Za-z0-9]*$/.test(definition.key),
      `${label}.key is invalid`,
    );
    const normalizedKey = definition.key.toLowerCase();
    assert(
      !seenKeys.has(normalizedKey),
      `duplicate contribution type key "${definition.key}"`,
    );
    seenKeys.add(normalizedKey);
    assertNonEmptyString(definition.emoji, `${label}.emoji`);
    assertNonEmptyString(definition.label, `${label}.label`);
    assertNonEmptyString(definition.description, `${label}.description`);
  }

  return catalog;
}

export function validateRegistry(registry, catalog) {
  validateContributionTypes(catalog);
  assertObject(registry, "registry");
  assertKnownKeys(
    registry,
    ["$schema", "schemaVersion", "contributors"],
    "registry",
  );
  assert(
    registry.schemaVersion === 1,
    `unsupported contributors schema version: ${registry.schemaVersion}`,
  );

  const contributionTypeIds = catalog.contributionTypes.map(
    (definition) => definition.key,
  );
  const contributionTypeKeys = new Set(contributionTypeIds);

  assert(Array.isArray(registry.contributors), "contributors must be an array");
  const seenLogins = new Set();

  for (const [index, contributor] of registry.contributors.entries()) {
    const label = `contributors[${index}]`;
    assertObject(contributor, label);
    assertKnownKeys(
      contributor,
      ["login", "name", "profileUrl", "avatarUrl", "contributions", "links"],
      label,
    );
    assertNonEmptyString(contributor.login, `${label}.login`);
    assert(
      /^[A-Za-z0-9](?:[A-Za-z0-9-]{0,37}[A-Za-z0-9])?$/.test(contributor.login),
      `${label}.login is not a valid GitHub login`,
    );

    const normalizedLogin = contributor.login.toLowerCase();
    assert(
      !seenLogins.has(normalizedLogin),
      `duplicate contributor login "${contributor.login}"`,
    );
    seenLogins.add(normalizedLogin);

    if (contributor.name !== undefined) {
      assertNonEmptyString(contributor.name, `${label}.name`);
    }
    if (contributor.profileUrl !== undefined) {
      assertHttpsUrl(contributor.profileUrl, `${label}.profileUrl`);
    }
    if (contributor.avatarUrl !== undefined) {
      assertHttpsUrl(contributor.avatarUrl, `${label}.avatarUrl`);
    }

    assert(
      Array.isArray(contributor.contributions) &&
        contributor.contributions.length > 0,
      `${label}.contributions must be a non-empty array`,
    );

    const seenContributions = new Set();
    let previousContributionIndex = -1;
    for (const contribution of contributor.contributions) {
      assertNonEmptyString(contribution, `${label}.contributions entry`);
      assert(
        contributionTypeKeys.has(contribution),
        `${label} references unknown contribution type "${contribution}"`,
      );
      assert(
        !seenContributions.has(contribution),
        `${label} repeats contribution type "${contribution}"`,
      );
      seenContributions.add(contribution);

      const contributionIndex = contributionTypeIds.indexOf(contribution);
      assert(
        contributionIndex > previousContributionIndex,
        `${label}.contributions must follow contribution type catalog order`,
      );
      previousContributionIndex = contributionIndex;
    }

    if (contributor.links !== undefined) {
      assert(
        Array.isArray(contributor.links),
        `${label}.links must be an array`,
      );
      const seenLinks = new Set();
      let previousLinkIndex = -1;

      for (const [linkIndex, link] of contributor.links.entries()) {
        const linkLabel = `${label}.links[${linkIndex}]`;
        assertObject(link, linkLabel);
        assertKnownKeys(link, ["icon", "url"], linkLabel);
        assert(
          ALLOWED_LINK_ICONS.includes(link.icon),
          `${linkLabel}.icon is unsupported`,
        );
        assertHttpsUrl(link.url, `${linkLabel}.url`);

        const identity = `${link.icon}\u0000${link.url}`;
        assert(!seenLinks.has(identity), `${label}.links contains a duplicate`);
        seenLinks.add(identity);

        const currentLinkIndex = ALLOWED_LINK_ICONS.indexOf(link.icon);
        assert(
          currentLinkIndex > previousLinkIndex,
          `${label}.links must follow the supported icon order`,
        );
        previousLinkIndex = currentLinkIndex;
      }
    }
  }

  return registry;
}

export function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getProfileUrl(contributor) {
  return contributor.profileUrl ?? `https://github.com/${contributor.login}`;
}

function getAvatarUrl(contributor, size) {
  const url = new URL(
    contributor.avatarUrl ?? `https://github.com/${contributor.login}.png`,
  );
  url.searchParams.set("s", String(size));
  return url.toString();
}

export function renderContributorsSection(registry, catalog) {
  validateRegistry(registry, catalog);
  const contributionTypes = new Map(
    catalog.contributionTypes.map((definition) => [definition.key, definition]),
  );

  const rows = [];
  for (let index = 0; index < registry.contributors.length; index += 7) {
    const cells = registry.contributors
      .slice(index, index + 7)
      .map((contributor) => {
        const name = contributor.name ?? contributor.login;
        const profileUrl = getProfileUrl(contributor);
        const contributions = contributor.contributions
          .map((type) => {
            const definition = contributionTypes.get(type);
            const title = `${definition.label}: ${definition.description}`;
            return `<span title="${escapeHtml(title)}" aria-label="${escapeHtml(title)}">${escapeHtml(definition.emoji)}</span>`;
          })
          .join(" ");

        return [
          '      <td align="center" valign="top" width="14.28%">',
          `        <a href="${escapeHtml(profileUrl)}">`,
          `          <img src="${escapeHtml(getAvatarUrl(contributor, 100))}" width="100px" alt="${escapeHtml(name)} avatar" />`,
          `          <br /><sub><b>${escapeHtml(name)}</b></sub>`,
          "        </a>",
          `        <br />${contributions}`,
          "      </td>",
        ].join("\n");
      });

    rows.push(["    <tr>", ...cells, "    </tr>"].join("\n"));
  }

  return [
    START_MARKER,
    "<!-- prettier-ignore-start -->",
    `<!-- Generated from ${CONTRIBUTORS_REGISTRY_URL} and ${CONTRIBUTION_TYPES_URL}. Do not edit this section directly. -->`,
    "## Contributors",
    "",
    "Thanks to the people who contribute code, documentation, design, examples, ideas, infrastructure, and care",
    "across the textmode.js ecosystem.",
    "",
    "<!-- markdownlint-disable MD033 -->",
    "<table>",
    "  <tbody>",
    ...rows,
    "  </tbody>",
    "</table>",
    "<!-- markdownlint-enable MD033 -->",
    "",
    `Contribution details and profile links are maintained on the [textmode.js contributors page](${CONTRIBUTORS_URL}).`,
    "<!-- prettier-ignore-end -->",
    END_MARKER,
  ].join("\n");
}

export function replaceContributorsSection(readme, renderedSection) {
  const startCount = readme.split(START_MARKER).length - 1;
  const endCount = readme.split(END_MARKER).length - 1;
  assert(
    startCount === 1,
    `README must contain exactly one ${START_MARKER} marker`,
  );
  assert(
    endCount === 1,
    `README must contain exactly one ${END_MARKER} marker`,
  );

  const startIndex = readme.indexOf(START_MARKER);
  const endIndex = readme.indexOf(END_MARKER);
  assert(startIndex < endIndex, "README contributor markers are out of order");

  const afterEnd = endIndex + END_MARKER.length;
  return `${readme.slice(0, startIndex)}${renderedSection}${readme.slice(afterEnd)}`;
}

async function loadJson(jsonPath, label) {
  const source = await readFile(jsonPath, "utf8");
  try {
    return JSON.parse(source);
  } catch (error) {
    throw new Error(`invalid ${label} JSON: ${error.message}`);
  }
}

export async function loadContributorData(registryPath, contributionTypesPath) {
  const [registry, catalog] = await Promise.all([
    loadJson(registryPath, "contributor registry"),
    loadJson(contributionTypesPath, "contribution type catalog"),
  ]);
  validateRegistry(registry, catalog);
  return { registry, catalog };
}

function parseArguments(argv) {
  const [command, ...rest] = argv;
  const options = {};

  for (let index = 0; index < rest.length; index += 1) {
    const argument = rest[index];
    assert(argument.startsWith("--"), `unexpected argument "${argument}"`);
    const name = argument.slice(2);
    const value = rest[index + 1];
    assert(value && !value.startsWith("--"), `missing value for --${name}`);
    options[name] = value;
    index += 1;
  }

  return { command, options };
}

export async function runCli(argv) {
  const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
  const projectRoot = path.resolve(scriptDirectory, "..");
  const { command, options } = parseArguments(argv);
  const registryPath = path.resolve(
    options.registry ??
      path.join(projectRoot, ".vitepress/data/contributors.json"),
  );
  const contributionTypesPath = path.resolve(
    options.types ??
      path.join(projectRoot, ".vitepress/data/contribution-types.json"),
  );
  const readmePath = path.resolve(
    options.readme ?? path.join(projectRoot, "README.md"),
  );
  const { registry, catalog } = await loadContributorData(
    registryPath,
    contributionTypesPath,
  );

  if (command === "validate") {
    return;
  }

  assert(
    command === "render" || command === "check",
    "usage: contributors.mjs <validate|render|check> [--registry path] [--types path] [--readme path]",
  );
  const readme = await readFile(readmePath, "utf8");
  const rendered = replaceContributorsSection(
    readme,
    renderContributorsSection(registry, catalog),
  );

  if (command === "check") {
    assert(
      rendered === readme,
      `${readmePath} contributor section is out of date`,
    );
    return;
  }

  if (rendered !== readme) {
    await writeFile(readmePath, rendered);
  }
}

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  runCli(process.argv.slice(2)).catch((error) => {
    console.error(`contributors: ${error.message}`);
    process.exitCode = 1;
  });
}
