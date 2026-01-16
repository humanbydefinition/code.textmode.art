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
import type { TextmodePlugin, TextmodePluginAPI } from 'textmode.js/plugins';

const MyPlugin: TextmodePlugin = {
  name: 'my-plugin',
  version: '1.0.0',
  install(textmodifier, api) {
    // Extend layers with a new method
    api.extendLayer('myMethod', function(value) {
      this.setPluginState('my-plugin', { value });
    });
    
    // Hook into layer rendering
    api.registerLayerPreRenderHook((layer, ctx) => {
      const state = layer.getPluginState('my-plugin');
      if (state) {
        // Render plugin content to layer.drawFramebuffer
      }
    });
  }
};
```

## Interfaces

| Interface | Description |
| ------ | ------ |
| [TextmodePlugin](interfaces/TextmodePlugin.md) | A plugin interface for extending the functionality of a [Textmodifier](../../classes/Textmodifier.md) instance. |
| [TextmodePluginAPI](interfaces/TextmodePluginAPI.md) | An extended API provided to plugins when they are installed on a [Textmodifier](../../classes/Textmodifier.md) instance. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [LayerLifecycleHook](type-aliases/LayerLifecycleHook.md) | Callback type for layer lifecycle events. |
| [LayerRenderHook](type-aliases/LayerRenderHook.md) | Callback type for layer render hooks. |
| [SetupLifecycleHook](type-aliases/SetupLifecycleHook.md) | Callback type for setup lifecycle hooks. Can be synchronous or return a Promise for async operations. |
| [TextmodePluginHook](type-aliases/TextmodePluginHook.md) | Callback type for simple plugin hooks without parameters. |
