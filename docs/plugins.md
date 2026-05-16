---
title: Plugins
description: Extend textmode.js with installable plugins, lifecycle hooks, layer extensions, and shared runtime context.
---

# Plugins

Plugins extend a [`Textmodifier`](/api/textmode.js/classes/Textmodifier) instance at creation time. They can register lifecycle hooks, add methods to layers, manage plugin state, and integrate with the renderer.

Use plugins when an add-on needs to participate in the rendering lifecycle rather than only exporting helper functions.

## Install plugins

Pass plugins through [`TextmodeOptions.plugins`](/api/textmode.js/type-aliases/TextmodeOptions#plugins):

```js
import { textmode } from "textmode.js";
import { SynthPlugin } from "textmode.synth.js";

const t = textmode.create({
  width: 800,
  height: 600,
  plugins: [SynthPlugin],
});
```

Plugins are installed synchronously during creation so layer extensions are available immediately.

## Plugin shape

A plugin implements [`TextmodePlugin`](/api/textmode.js/namespaces/plugins/interfaces/TextmodePlugin.md):

```ts
import type { TextmodePlugin } from "textmode.js";

export const MyPlugin: TextmodePlugin = {
  name: "my-plugin",
  version: "1.0.0",

  install(textmodifier, context) {
    context.registerPreDrawHook(() => {
      // Runs before each draw cycle.
    });
  },
};
```

The optional `uninstall()` hook runs during teardown.

## Plugin context

[`TextmodePluginContext`](/api/textmode.js/namespaces/plugins/interfaces/TextmodePluginContext.md) exposes stable access to:

- the WebGL renderer
- the base font, glyph atlas, and grid
- the canvas handle
- base draw and ASCII framebuffers
- the layer manager
- lifecycle hook registration methods
- layer extension registration methods

Prefer context methods over reaching into private fields.

## Lifecycle hooks

Plugins can register hooks for setup, draw, and layer rendering:

```ts
install(t, context) {
  const disposePreDraw = context.registerPreDrawHook(() => {
    // Before each draw cycle.
  });

  const disposeLayerHook = context.registerLayerPostRenderHook((layer) => {
    // After a layer draw callback, before ASCII conversion.
  });
}
```

Registration methods return cleanup functions.

## Layer extensions

Plugins can add methods to every [`TextmodeLayer`](/api/textmode.js/namespaces/layering/classes/TextmodeLayer.md):

```ts
context.extendLayer("pulse", function (amount: number) {
  this.setPluginState("my-plugin", { amount });
});
```

Layer state helpers make plugin data explicit and layer-local:

- [`setPluginState()`](/api/textmode.js/namespaces/layering/classes/TextmodeLayer.md#setpluginstate)
- [`getPluginState()`](/api/textmode.js/namespaces/layering/classes/TextmodeLayer.md#getpluginstate)
- [`hasPluginState()`](/api/textmode.js/namespaces/layering/classes/TextmodeLayer.md#haspluginstate)
- [`deletePluginState()`](/api/textmode.js/namespaces/layering/classes/TextmodeLayer.md#deletepluginstate)

Remove extensions with [`removeLayerExtension()`](/api/textmode.js/namespaces/plugins/interfaces/TextmodePluginContext.md#removelayerextension).

## Related APIs

- [`TextmodeOptions.plugins`](/api/textmode.js/type-aliases/TextmodeOptions#plugins)
- [`plugins`](/api/textmode.js/namespaces/plugins/)
- [`TextmodePlugin`](/api/textmode.js/namespaces/plugins/interfaces/TextmodePlugin.md)
- [`TextmodePluginContext`](/api/textmode.js/namespaces/plugins/interfaces/TextmodePluginContext.md)
- [`TextmodeLayer`](/api/textmode.js/namespaces/layering/classes/TextmodeLayer.md)
