---
layout: doc
editLink: true
title: plugins
description: Plugin system types for extending textmode.js functionality.
category: Namespaces
api: true
kind: Namespace
lastModified: 2026-04-19
---

[textmode.js](../../index.md) / plugins

# plugins

Plugin system types for extending textmode.js functionality.

Plugins can:
- Add methods to TextmodeLayer instances (e.g., `.synth()`)
- Hook into the render lifecycle (pre/post draw, per-layer rendering)
- React to layer creation and disposal events
- Access the WebGL renderer, framebuffers, and other internals

## Example

```ts
import type { TextmodePlugin, TextmodePluginContext } from 'textmode.js/plugins';

const MyPlugin: TextmodePlugin = {
  name: 'my-plugin',
  version: '1.0.0',
  install(textmodifier, context: TextmodePluginContext) {
    // Extend layers with a new method
    context.extendLayer('setMyState', function(value: number) {
      // `this` is bound to the TextmodeLayer instance
      this.setPluginState('my-plugin', { value });
    });

    // Hook into layer rendering
    context.registerLayerPreRenderHook((layer) => {
      const state = layer.getPluginState<{ value: number }>('my-plugin');
      if (state && state.value > 0.5) {
        // Render custom content based on plugin state
      }
    });
  }
};
```

## Interfaces

| Interface | Description |
| ------ | ------ |
| [TextmodeCanvasHandle](interfaces/TextmodeCanvasHandle.md) | Stable read-only canvas handle exposed to plugins. |
| [TextmodePlugin](interfaces/TextmodePlugin.md) | A plugin interface for extending the functionality of a [Textmodifier](../../classes/Textmodifier.md) instance. |
| [TextmodePluginContext](interfaces/TextmodePluginContext.md) | Host-provided context passed to plugins when they are installed on a [Textmodifier](../../classes/Textmodifier.md) instance. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [LayerExtensionImplementation](type-aliases/LayerExtensionImplementation.md) | Type for layer extension method implementations. |
| [LayerLifecycleHook](type-aliases/LayerLifecycleHook.md) | Callback type for layer lifecycle events. |
| [LayerRenderHook](type-aliases/LayerRenderHook.md) | Callback type for layer render hooks. |
| [SetupLifecycleHook](type-aliases/SetupLifecycleHook.md) | Callback type for setup lifecycle hooks. |
| [TextmodePluginAPI](type-aliases/TextmodePluginAPI.md) | Compatibility alias for earlier plugin API naming. |
| [TextmodePluginHook](type-aliases/TextmodePluginHook.md) | Callback type for simple plugin hooks without parameters. |
