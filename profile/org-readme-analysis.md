# Org README Analysis

## Scope

This review evaluates the proposed GitHub organization README against the current `textmode.js` docs and ecosystem positioning in this repository.

Primary grounding:

- `index.md:3`, `index.md:20-41`, `index.md:56-62`
- `docs/introduction.md:8-10`, `docs/introduction.md:15-23`, `docs/introduction.md:43-52`
- `docs/framework-integration.md:8-19`, `docs/framework-integration.md:80-82`
- `docs/live-coding.md:18-32`
- `docs/installation.md:12-23`
- `api/textmode.export.js/index.md:13-17`
- `api/textmode.filters.js/index.md:13-16`
- `api/textmode.synth.js/index.md:15-18`

## Overall Assessment

The draft is strong. It correctly presents `textmode.art` as more than a single library and does a good job mapping the surrounding repos, tools, and entry points.

The main issues are not factual gaps. They are:

1. positioning inconsistency,
2. mixed information hierarchy,
3. a few wording choices that undersell or slightly blur the ecosystem.

## Findings

### 1. The opening sentence is good, but it no longer matches the org description you chose

You selected:

> `textmode.art is a browser-native creative coding ecosystem for real-time ASCII and textmode graphics.`

Your README currently says:

> `textmode.art` is the home of `textmode.js` and the tools growing around it: a framework-agnostic ecosystem for real-time ASCII and textmode graphics on the web.

Why this matters:

- `browser-native creative coding ecosystem` is more ownable than `framework-agnostic ecosystem`
- `framework-agnostic` is true, but it describes compatibility, not identity
- the docs repeatedly emphasize browser-native surfaces: editor, live coding, web integrations, browser-based workflows

Recommendation:

- Reuse the org description verbatim or very close to it in the first paragraph
- Keep `framework-agnostic` as a supporting trait later, not the lead identity

### 2. The README mixes repositories, packages, and hosted products in one flat list

`What lives here` currently combines:

- GitHub repositories
- npm packages
- hosted sites
- hosted apps

That is all valid, but the list reads as a catalog rather than a system.

Recommendation:

- Split this into 2 groups:
  - `Core projects`
  - `Surfaces and tools`

This makes the organization feel more deliberate and easier to scan.

### 3. The intro can state the ecosystem value more directly

The draft says this org is the home of `textmode.js` and tools growing around it. That is true, but slightly passive.

The docs support a more explicit claim:

- real-time rendering
- live coding
- media conversion
- plugins
- exports
- docs/examples/editor

Recommendation:

- Make the first paragraph describe what the ecosystem enables, not only what it contains
- Good verbs here are `create`, `perform`, `experiment`, `share`, `export`

### 4. `textmode (dot) art` is weaker than `textmode.art`

The heading style is readable, but on a GitHub org profile it likely adds friction rather than personality.

Why:

- GitHub already displays the org name
- `textmode.art` is cleaner and more memorable
- `(dot)` reads playful, but the rest of the README is otherwise direct and serious

Recommendation:

- Use `## textmode.art` or remove the heading entirely

### 5. `editor.textmode.art` should be linked the same way as the other entries

In `What lives here`, every repo item is linked except `editor.textmode.art`.

Recommendation:

- Make it a normal markdown link for consistency

Example:

- `[editor.textmode.art](https://editor.textmode.art) for zero-setup sketching in the browser`

### 6. `synth.textmode.art` may need more precise framing

The docs in this repo explicitly position `flok.cc` as the live coding environment currently documented for `textmode.js`.

That does not make your `synth.textmode.art` line wrong, but it does mean the wording should be exact.

Risk:

- readers may infer that `synth.textmode.art` is the primary or only live coding surface across the ecosystem

Recommendation:

- if `synth.textmode.art` is specifically a browser synth/live-coding surface for `textmode.js` + `textmode.synth.js`, say that clearly
- avoid phrasing that accidentally conflicts with the documented `flok.cc` integration story

Possible revision:

- `for browser-based synthesis and live experimentation with textmode.js and textmode.synth.js`

### 7. `Why this exists` is solid, but the opening line is slightly combative

Current:

> Textmode graphics deserve first-class tools, not one-off hacks.

This has punch, but it frames the ecosystem against inferior alternatives before it tells readers what it is for.

Recommendation:

- keep the conviction, reduce the edge slightly
- let the rest of the paragraph carry the ambition

Possible alternatives:

- `Textmode graphics deserve first-class tools.`
- `Textmode graphics deserve a coherent modern toolchain.`

### 8. The README should foreground the “browser-native” and “creative coding” identity earlier

The documentation consistently frames the ecosystem around:

- browser-based creation
- real-time rendering
- creative coding workflows
- live experimentation

Your draft gets there, but only after the first sentence and repo list.

Recommendation:

- use the first two lines to establish:
  - what this ecosystem is
  - what people can do with it

### 9. The lineage note is useful, but it should stay brief

The lineage section works because it gives historical context and explains the move beyond `p5.asciify`.

The only risk is overemphasizing the predecessor in a profile that should primarily market the current ecosystem.

Recommendation:

- keep it
- trim it slightly if you want a tighter profile page

## What Is Working Well

- The repo inventory is concrete and useful.
- The ecosystem is presented as a stack, not a single package.
- `Start here` is practical and gives immediate entry points.
- The mission paragraph already captures the right direction: rendering, APIs, experimentation, add-ons, docs.
- The lineage section helps explain the shift from plugin-style thinking to a broader platform.

## Suggested Structural Revision

Recommended order:

1. short identity paragraph
2. `Start here`
3. `Core projects`
4. `Surfaces and tools`
5. `Why this exists`
6. `Community`
7. `Lineage`

Why this order:

- users first need orientation
- then an immediate path in
- then the repo map
- then mission/context

## Suggested Rewrite

```md
## textmode.art

`textmode.art` is a browser-native creative coding ecosystem for real-time ASCII and textmode graphics.

It brings together the core rendering library, official add-ons, browser-based tools, and public docs needed to create, experiment with, perform, and share textmode work on the modern web.

### Start here

- Docs: [code.textmode.art](https://code.textmode.art)
- API: [code.textmode.art/api](https://code.textmode.art/api)
- Web editor: [editor.textmode.art](https://editor.textmode.art)
- Core package: [`textmode.js` on npm](https://www.npmjs.com/package/textmode.js)
- Starter CLI: [`create-textmode` on npm](https://www.npmjs.com/package/create-textmode)

### Core projects

- [`humanbydefinition/textmode.js`](https://github.com/humanbydefinition/textmode.js) for drawing, animation, layering, shaders, media conversion, and interaction
- [`humanbydefinition/textmode.export.js`](https://github.com/humanbydefinition/textmode.export.js) for TXT, SVG, image, GIF, and WebM export
- [`humanbydefinition/textmode.filters.js`](https://github.com/humanbydefinition/textmode.filters.js) for GPU-powered post-processing effects
- [`humanbydefinition/textmode.synth.js`](https://github.com/humanbydefinition/textmode.synth.js) for Hydra-inspired visual synthesis and procedural pattern generation
- [`humanbydefinition/create-textmode`](https://github.com/humanbydefinition/create-textmode) for scaffolding new projects quickly

### Surfaces and tools

- [`humanbydefinition/code.textmode.art`](https://github.com/humanbydefinition/code.textmode.art) for documentation, examples, gallery, and API reference
- [`humanbydefinition/synth.textmode.art`](https://github.com/humanbydefinition/synth.textmode.art) for browser-based synthesis and live experimentation with `textmode.js` and `textmode.synth.js`
- [editor.textmode.art](https://editor.textmode.art) for zero-setup sketching in the browser

### Why this exists

Textmode graphics deserve first-class tools.

This organization exists to build a coherent stack for text-based visual work on the modern web: fast rendering, approachable APIs, live experimentation, reusable add-ons, and a public documentation surface that makes the ecosystem easy to learn.

### Community

- Share work with `#textmodejs`
- Join the Discord: [discord.gg/sjrw8QXNks](https://discord.gg/sjrw8QXNks)
- Explore examples: [code.textmode.art/docs/examples](https://code.textmode.art/docs/examples)

### Lineage

`textmode.js` grew out of lessons learned from [`humanbydefinition/p5.asciify`](https://github.com/humanbydefinition/p5.asciify), but it is now an independent, framework-agnostic system designed for vanilla canvas workflows as well as tools like p5.js, Three.js, Hydra, video, and live-coding environments.
```

## Shorter Variant

If you want a tighter org profile, this is the condensed version I would use:

```md
## textmode.art

`textmode.art` is a browser-native creative coding ecosystem for real-time ASCII and textmode graphics.

It brings together `textmode.js`, official add-ons, browser-based tools, and public docs for creating, experimenting with, and sharing textmode work on the modern web.

### Start here

- Docs: [code.textmode.art](https://code.textmode.art)
- API: [code.textmode.art/api](https://code.textmode.art/api)
- Web editor: [editor.textmode.art](https://editor.textmode.art)
- Core package: [`textmode.js` on npm](https://www.npmjs.com/package/textmode.js)

### Core projects

- [`humanbydefinition/textmode.js`](https://github.com/humanbydefinition/textmode.js)
- [`humanbydefinition/textmode.export.js`](https://github.com/humanbydefinition/textmode.export.js)
- [`humanbydefinition/textmode.filters.js`](https://github.com/humanbydefinition/textmode.filters.js)
- [`humanbydefinition/textmode.synth.js`](https://github.com/humanbydefinition/textmode.synth.js)
- [`humanbydefinition/code.textmode.art`](https://github.com/humanbydefinition/code.textmode.art)
- [`humanbydefinition/create-textmode`](https://github.com/humanbydefinition/create-textmode)

### Community

- `#textmodejs`
- [Discord](https://discord.gg/sjrw8QXNks)
```

## Bottom Line

Your draft is already close. I would not rethink the content from scratch.

I would make three main changes:

1. align the opening with the new org description,
2. separate repos from hosted surfaces,
3. tighten wording where the current draft is slightly softer or less precise than the ecosystem actually is.
