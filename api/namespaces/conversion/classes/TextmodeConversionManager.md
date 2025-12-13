[textmode.js](../../../index.md) / [conversion](../index.md) / TextmodeConversionManager

# Class: TextmodeConversionManager

Manages conversion strategy registration and retrieval.

This class provides:
- A registry for custom and built-in conversion strategies
- Instance-scoped conversion strategies per Textmodifier

Used for image-to-ASCII conversion modes.

## Example

```typescript
// Register a custom conversion strategy
t.conversions.register({
    id: 'custom',
    createShader: (ctx) => shader,
    createUniforms: (ctx) => ({ u_image: ctx.source.texture })
});

// Use the conversion mode on an image
img.conversionMode('custom');
```

## Methods

### has()

```ts
has(id): boolean;
```

Check if a conversion strategy with the given ID is registered.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`TextmodeConversionMode`](../type-aliases/TextmodeConversionMode.md) | The conversion strategy ID to check |

#### Returns

`boolean`

true if the strategy exists

***

### register()

```ts
register(strategy): void;
```

Register a custom conversion strategy.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `strategy` | `TextmodeConversionStrategy` | The conversion strategy to register |

#### Returns

`void`

#### Example

```typescript
t.conversions.register({
    id: 'custom',
    createShader: (ctx) => shader,
    createUniforms: (ctx) => ({ u_image: ctx.source.texture })
});
```

***

### unregister()

```ts
unregister(id): boolean;
```

Unregister a conversion strategy by its ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`TextmodeConversionMode`](../type-aliases/TextmodeConversionMode.md) | The conversion strategy ID to unregister |

#### Returns

`boolean`

true if the strategy was unregistered, false if it wasn't found
