[textmode.js](../../index.md) / conversion

# conversion

All media conversion related modules and types.

Responsible for converting images and videos into textmode-renderable formats
using various conversion strategies, like brightness- or edge-detection-based conversion.

`textmode.js` only comes with a built-in `'brightness'`-based conversion strategy,
but custom strategies can be registered via [TextmodeConversionManager.register](classes/TextmodeConversionManager.md#register).

## Classes

| Class | Description |
| ------ | ------ |
| [TextmodeConversionManager](classes/TextmodeConversionManager.md) | Manages conversion strategy registration and retrieval. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [BuiltInConversionMode](type-aliases/BuiltInConversionMode.md) | Built-in conversion mode names provided by textmode.js |
| [TextmodeConversionMode](type-aliases/TextmodeConversionMode.md) | Type representing the available textmode conversion modes |
