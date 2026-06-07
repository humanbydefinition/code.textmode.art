---
title: Characters and Colors
description: Control glyphs, foreground colors, cell colors, color helpers, tile colors, and glyph transforms in textmode.js.
---

# Characters and colors

Every cell has three main pieces of visual state:

- a character or glyph index
- a character color
- a cell background color

The drawing API exposes these as [`char()`](/api/textmode.js/classes/Textmodifier#char), [`charColor()`](/api/textmode.js/classes/Textmodifier#charcolor), and [`cellColor()`](/api/textmode.js/classes/Textmodifier#cellcolor). (⌐■_■)

## Characters

Use [`char()`](/api/textmode.js/classes/Textmodifier#char) to choose the glyph for future drawing:

```js
t.char("@");
t.rect(10, 6);
```

You can pass a string or a numeric glyph index. When called without arguments, `char()` returns the current character.

## Character color and cell color

[`charColor()`](/api/textmode.js/classes/Textmodifier#charcolor) controls the foreground glyph color. [`cellColor()`](/api/textmode.js/classes/Textmodifier#cellcolor) controls the cell background:

```js
t.char("A");
t.charColor(255, 220, 120);
t.cellColor(16, 20, 32);
t.rect(12, 8);
```

Color methods accept grayscale values, RGB/RGBA numbers, CSS color strings, and [`TextmodeColor`](/api/textmode.js/namespaces/color/classes/TextmodeColor) instances.

## p5-style aliases

`textmode.js` also provides familiar aliases:

- [`fill()`](/api/textmode.js/classes/Textmodifier#fill) maps to cell fill state.
- [`stroke()`](/api/textmode.js/classes/Textmodifier#stroke) maps to line and character stroke state.
- [`background()`](/api/textmode.js/classes/Textmodifier#background) fills the whole active layer.
- [`clear()`](/api/textmode.js/classes/Textmodifier#clear) clears the active layer.

```js
t.background(0);
t.fill(20, 30, 50);
t.stroke(255);
t.rect(20, 10);
```

## Color helpers

Use [`color()`](/api/textmode.js/classes/Textmodifier#color) to create a reusable [`TextmodeColor`](/api/textmode.js/namespaces/color/classes/TextmodeColor):

```js
const amber = t.color(255, 190, 90);

t.charColor(amber);
t.rect(8, 8);
```

Useful color properties include:

- [`rgb`](/api/textmode.js/namespaces/color/classes/TextmodeColor#rgb)
- [`rgba`](/api/textmode.js/namespaces/color/classes/TextmodeColor#rgba)
- [`normalized`](/api/textmode.js/namespaces/color/classes/TextmodeColor#normalized)
- [`withAlpha()`](/api/textmode.js/namespaces/color/classes/TextmodeColor#withalpha)

## Glyph transforms

These methods affect how future glyphs are rendered:

- [`charRotation()`](/api/textmode.js/classes/Textmodifier#charrotation)
- [`flipX()`](/api/textmode.js/classes/Textmodifier#flipx)
- [`flipY()`](/api/textmode.js/classes/Textmodifier#flipy)
- [`invert()`](/api/textmode.js/classes/Textmodifier#invert)

```js
t.char(">");
t.charRotation(t.frameCount * 4);
t.flipX(t.frameCount % 60 < 30);
t.point();
```

`invert()` swaps character and cell colors for later drawing operations.

## Tile colors

Bitmap tilesets can provide their own colors. Use [`useTileColors()`](/api/textmode.js/classes/Textmodifier#usetilecolors) on the base layer, or [`layer.useTileColors()`](/api/textmode.js/namespaces/layering/classes/TextmodeLayer.md#usetilecolors) for a specific layer:

```js
t.useTileColors(true);
```

See [Fonts and tilesets](/docs/fonts) for the full tileset workflow.

## Related APIs

- [`Textmodifier.char()`](/api/textmode.js/classes/Textmodifier#char)
- [`Textmodifier.charColor()`](/api/textmode.js/classes/Textmodifier#charcolor)
- [`Textmodifier.cellColor()`](/api/textmode.js/classes/Textmodifier#cellcolor)
- [`Textmodifier.color()`](/api/textmode.js/classes/Textmodifier#color)
- [`TextmodeColor`](/api/textmode.js/namespaces/color/classes/TextmodeColor)
- [`Textmodifier.useTileColors()`](/api/textmode.js/classes/Textmodifier#usetilecolors)
