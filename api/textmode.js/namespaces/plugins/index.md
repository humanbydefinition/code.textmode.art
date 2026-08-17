---
layout: doc
editLink: false
title: plugins
description: Plugin system types for extending textmode.js functionality.
category: Namespaces
api: true
kind: Namespace
lastModified: 2026-08-17
---

[textmode.js](../../index.md) / plugins

# plugins

Plugin system types for extending textmode.js functionality.

Plugins receive the [Textmodifier](../../classes/Textmodifier.md) instance for existing public state (canvas, dimensions, font, grid,
layers, and per-layer framebuffers) plus a plugin context used only for plugin-owned concerns:
- Define instance-safe methods and accessors on supported runtime objects
- Hook into the render lifecycle (pre/post draw, per-layer rendering)
- React to layer creation and disposal events
- Replace layer or composited scene output with custom framebuffers

## Example

```ts
import type { TextmodeLayer, TextmodePlugin, TextmodePluginContext } from 'textmode.js';

const states = new WeakMap<TextmodeLayer, { value: number }>();

const MyPlugin: TextmodePlugin = {
  name: 'my-plugin',
  version: '1.0.0',
  install(textmodifier, context: TextmodePluginContext) {
    context.defineExtension('layer', 'setMyState', {
      value(value: number) {
        states.set(this, { value });
      }
    });

    // Hook into layer rendering
    context.on('layerPreRender', (layer) => {
      const state = states.get(layer);
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
| [TextmodeExtensionDescriptor](interfaces/TextmodeExtensionDescriptor.md) | Descriptor for a plugin-provided method or accessor. |
| [TextmodeLayerOutputTransformContext](interfaces/TextmodeLayerOutputTransformContext.md) | Values supplied to a layer output transform. |
| [TextmodePlugin](interfaces/TextmodePlugin.md) | A plugin interface for extending the functionality of a [Textmodifier](../../classes/Textmodifier.md) instance. |
| [TextmodePluginContext](interfaces/TextmodePluginContext.md) | Host facilities available while installing a plugin. |
| [TextmodePluginHookMap](interfaces/TextmodePluginHookMap.md) | Typed callback map used by [TextmodePluginContext.on](interfaces/TextmodePluginContext.md#on). |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [TextmodeExtensionInstance](type-aliases/TextmodeExtensionInstance.md) | Instance type associated with an extension target. |
| [TextmodeExtensionTarget](type-aliases/TextmodeExtensionTarget.md) | Runtime objects that plugins may extend. |
| [TextmodeLayerOutputPhase](type-aliases/TextmodeLayerOutputPhase.md) | Stage at which a rendered layer output can be replaced by a plugin. |
| [TextmodePluginHookName](type-aliases/TextmodePluginHookName.md) | Name of a plugin hook accepted by [TextmodePluginContext.on](interfaces/TextmodePluginContext.md#on). |
