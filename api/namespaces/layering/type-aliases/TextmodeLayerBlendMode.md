[textmode.js](../../../index.md) / [layering](../index.md) / TextmodeLayerBlendMode

# Type Alias: TextmodeLayerBlendMode

```ts
type TextmodeLayerBlendMode = "normal" | "additive" | "multiply" | "screen";
```

Blend modes available for [TextmodeLayer](../classes/TextmodeLayer.md) compositing.

- `'normal'`: Standard alpha compositing using `SRC_ALPHA` / `ONE_MINUS_SRC_ALPHA`. Opaque layer pixels fully replace the base; translucent pixels fade in.
- `'additive'`: Uses `SRC_ALPHA` / `ONE`, so layer color is added on top of the base. Great for glow/energy effects but will clip as values approach white.
- `'multiply'`: Uses `DST_COLOR` / `ZERO`, effectively `result = layer * base`. Darkens wherever both layers have color; any channel multiplied by 0 becomes 0.
- `'screen'`: Uses `ONE` / `ONE_MINUS_SRC_COLOR`, the inverse of multiply. Produces `result = layer + base * (1 - layer)`, preserving highlights while lightening midtones.
