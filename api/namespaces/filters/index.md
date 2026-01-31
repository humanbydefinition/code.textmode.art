[textmode.js](../../index.md) / filters

# filters

All filter related modules and types.

Provides various image processing filters that can be applied in sequence on a layer's textmode-converted output,
such as blur, sharpen, edge detection, and color adjustments. Filters can also be applied globally to all layers as post-processing effects.

While `textmode.js` only offers a basic set of filters, additional filters can be implemented and registered via the [TextmodeFilterManager](classes/TextmodeFilterManager.md),
which is accessible through [Textmodifier.filters](../../classes/Textmodifier.md#filters).

## Classes

| Class | Description |
| ------ | ------ |
| [TextmodeFilterManager](classes/TextmodeFilterManager.md) | Manages filter registration, shader compilation, and filter chain application. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [BuiltInFilterParams](interfaces/BuiltInFilterParams.md) | Filter parameter types for built-in filters. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [BuiltInFilterName](type-aliases/BuiltInFilterName.md) | Built-in filter names provided by textmode.js |
| [FilterName](type-aliases/FilterName.md) | Filter name type that allows both built-in and custom filter names |
