---
title: Installation
description: Install textmode.js and its official add-ons with npm or browser-ready UMD bundles.
---

# Installation

Install `textmode.js` with npm for a modern JavaScript or TypeScript project, or load its UMD bundle directly
in the browser. Official add-ons use the same plugin setup in either environment. (ง •̀\_•́)ง

## Try it online first

Want to experiment before setting up a project? Open
[editor.textmode.art](https://editor.textmode.art) to write, preview, save, and share `textmode.js` sketches
directly in your browser.

The editor includes examples and the official add-ons, so it is a quick way to learn the API or prototype an
idea without installing anything.

## Requirements

- A modern browser with [`WebGL2`](https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext)
  support
- [Node.js 20.8.1 or newer](https://nodejs.org/) and npm when using the package-manager workflow

You do not need to create a `<canvas>` element yourself. Unless you provide one, `textmode.js` creates and
mounts a canvas after the document body is available.

::: warning WebGL2 is required
`textmode.js` does not currently provide a WebGL1 or Canvas 2D fallback. Check your target browsers on
[Can I Use](https://caniuse.com/webgl2).
:::

## Install `textmode.js`

### npm and ESM

For projects built with tools such as Vite, install the package from npm:

```bash
npm install textmode.js
```

Import the `textmode` entry point in your JavaScript or TypeScript:

```js
import { textmode } from "textmode.js";

const t = textmode.create({
  width: window.innerWidth,
  height: window.innerHeight,
  fontSize: 16,
});

t.draw(() => {
  t.background(18);
  t.char("@");
  t.charColor(255);
  t.rect(12, 8);
});
```

Your bundler will include the ESM build and its TypeScript declarations automatically. Continue with
[First Sketch](/docs/first-sketch) for the complete draw, setup, and resize pattern.

### CDN and UMD

For a browser project without a package manager or bundler, load the UMD build from
[jsDelivr](https://www.jsdelivr.com/package/npm/textmode.js):

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>textmode.js sketch</title>
  </head>
  <body>
    <script src="https://cdn.jsdelivr.net/npm/textmode.js@latest/dist/textmode.umd.js"></script>
    <script>
      const t = textmode.create({
        width: window.innerWidth,
        height: window.innerHeight,
        fontSize: 16,
      });

      t.draw(() => {
        t.background(18);
        t.char("@");
        t.charColor(255);
        t.rect(12, 8);
      });
    </script>
  </body>
</html>
```

The UMD bundle exposes the library as the global `textmode` object. Load it before any script that calls
`textmode.create()`.

## Install add-ons

Official add-ons are npm packages with `textmode.js` as a peer dependency. Each package exports a plugin that
you pass to `textmode.create()` through the `plugins` array:

| Package                                         | Plugin / UMD global |
| ----------------------------------------------- | ------------------- |
| [`textmode.export.js`](/api/textmode.export.js/) | `ExportPlugin`      |
| [`textmode.filters.js`](/api/textmode.filters.js/) | `FiltersPlugin`   |
| [`textmode.figlet.js`](/api/textmode.figlet.js/) | `FigletPlugin`      |
| [`textmode.synth.js`](/api/textmode.synth.js/)   | `SynthPlugin`       |

The corresponding UMD files are `dist/textmode.export.umd.js`, `dist/textmode.filters.umd.js`,
`dist/textmode.figlet.umd.js`, and `dist/textmode.synth.umd.js`.

### npm and ESM

Install the core library and the add-on together. For example, to use `textmode.filters.js`:

```bash
npm install textmode.js textmode.filters.js
```

Import the plugin and register it when you create the `Textmodifier` instance:

```js
import { textmode } from "textmode.js";
import { FiltersPlugin } from "textmode.filters.js";

const t = textmode.create({
  width: window.innerWidth,
  height: window.innerHeight,
  plugins: [FiltersPlugin],
});
```

Importing the add-on also makes its TypeScript declarations and any `Textmodifier` augmentations available to
your project.

### CDN and UMD

Load the core UMD bundle first, followed by the add-on bundle, and then create your sketch with the add-on's
global plugin:

```html
<script src="https://cdn.jsdelivr.net/npm/textmode.js@latest/dist/textmode.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/textmode.filters.js@latest/dist/textmode.filters.umd.js"></script>
<script>
  const t = textmode.create({
    width: window.innerWidth,
    height: window.innerHeight,
    plugins: [FiltersPlugin],
  });
</script>
```

Use the package, bundle, and plugin names from the table above to install another add-on with the same pattern.

### Use multiple add-ons

Install every package your sketch needs in one command:

```bash
npm install textmode.js textmode.export.js textmode.filters.js
```

Then import and register the plugins together:

```js
import { textmode } from "textmode.js";
import { ExportPlugin } from "textmode.export.js";
import { FiltersPlugin } from "textmode.filters.js";

const t = textmode.create({
  width: window.innerWidth,
  height: window.innerHeight,
  plugins: [ExportPlugin, FiltersPlugin],
});
```

For UMD projects, follow the same order: load `textmode.js`, load each add-on bundle, and then run the sketch.

### Version compatibility

Each add-on declares its compatible `textmode.js` versions through `peerDependencies`. Keep the core library
and add-ons up to date together, and resolve any peer-dependency warning reported by npm before running your
project.

::: tip Pin CDN versions for production
The CDN examples use `@latest` for convenient experimentation. For a reproducible production build, replace
`latest` with tested versions for both `textmode.js` and every add-on.
:::

## Common setup issues

- **`textmode is not defined`**: load the core UMD bundle before your sketch, or import `textmode` in your ESM
  module.
- **A plugin global is not defined**: confirm that the matching add-on UMD bundle loaded before your sketch
  and that you used the plugin name from the table above.
- **npm reports a missing or incompatible peer dependency**: install a compatible `textmode.js` version
  alongside the add-on.
- **The canvas is blank or WebGL initialization fails**: confirm that WebGL2 is enabled and supported by the
  browser and device.

## Next steps

- [Create your first sketch](/docs/first-sketch)
- [Learn how plugins work](/docs/plugins)
- [Export sketches with `textmode.export.js`](/docs/exporting)
- [Apply add-on filters](/docs/filters#add-on-filter-package)
- [Browse the complete API reference](/api/)
