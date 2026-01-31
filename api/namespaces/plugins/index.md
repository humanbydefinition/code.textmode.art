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
    api.extendLayer('setMyState', function(value: number) {
      // `this` is bound to the TextmodeLayer instance
      this.setPluginState('my-plugin', { value });
    });

    // Hook into layer rendering
    api.registerLayerPreRenderHook((layer) => {
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
| [TextmodePlugin](interfaces/TextmodePlugin.md) | A plugin interface for extending the functionality of a [Textmodifier](../../classes/Textmodifier.md) instance. |
| [TextmodePluginAPI](interfaces/TextmodePluginAPI.md) | An extended API provided to plugins when they are installed on a [Textmodifier](../../classes/Textmodifier.md) instance. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [LayerExtensionImplementation](type-aliases/LayerExtensionImplementation.md) | Type for layer extension method implementations. The `this` context is bound to the `TextmodeLayer` instance. |
| [LayerLifecycleHook](type-aliases/LayerLifecycleHook.md) | Callback type for layer lifecycle events. |
| [LayerRenderHook](type-aliases/LayerRenderHook.md) | Callback type for layer render hooks. |
| [SetupLifecycleHook](type-aliases/SetupLifecycleHook.md) | Callback type for setup lifecycle hooks. Can be synchronous or return a Promise for async operations. |
| [TextmodePluginHook](type-aliases/TextmodePluginHook.md) | Callback type for simple plugin hooks without parameters. |
