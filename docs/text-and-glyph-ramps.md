---
title: Text and Glyph Ramps
description: Render native text, use inline markup, align printed copy, and map values to glyph ramps in textmode.js.
---

# Text and glyph ramps

`textmode.js` can draw individual glyphs with `char()` and shape primitives, but it also includes native text printing and glyph ramps for value-to-character workflows.

Use printing for labels, captions, terminal-style panels, and typographic compositions. Use glyph ramps when brightness, noise, distance, or audio values should become characters.

## Printing text

[`print()`](/api/textmode.js/classes/Textmodifier/methods/print) writes a string into the active layer:

```js
t.print("SIGNAL ONLINE", -12, -4);
```

It uses the current drawing state, so `charColor()`, `cellColor()`, `invert()`, `flipX()`, `flipY()`, and `charRotation()` affect printed characters the same way they affect points and shapes.

```js
t.charColor(120, 255, 180);
t.cellColor(10, 18, 28);
t.print("ACTIVE", -3, 0);
```

## Print alignment

[`printAlign()`](/api/textmode.js/classes/Textmodifier/methods/printAlign) changes how the print position is interpreted:

```js
t.printAlign("center", "middle");
t.print("CENTERED", 0, 0);

t.printAlign("right", "bottom");
t.print("lower right", t.grid.cols / 2 - 2, t.grid.rows / 2 - 2);
```

Horizontal alignment can be `"left"`, `"center"`, or `"right"`. Vertical alignment can be `"top"`, `"middle"`, or `"bottom"`.

## Print options

Pass options as the fourth argument:

```js
t.print(
  "A\tB\tC\nD\tE\tF",
  -12,
  -4,
  {
    leading: 2,
    tabSize: 4,
    letterSpacing: 1,
    markup: false,
  }
);
```

- `leading` controls line spacing in cells.
- `tabSize` controls how many spaces a tab expands to.
- `letterSpacing` adds extra cells between printed characters.
- `markup` controls whether inline formatting tags are parsed.

## Inline markup

By default, `print()` supports BBCode-style tags for local formatting changes:

```js
t.print(
  "[fg=lime]READY[/fg] [bg=#102030]BUFFER[/bg] [inv]HOT[/inv]",
  -18,
  0
);
```

Supported tags include:

- `[fg=color]...[/fg]` for foreground character color.
- `[bg=color]...[/bg]` for cell background color.
- `[inv]...[/inv]` for inverted character and cell colors.
- `[rot=90]...[/rot]` for character rotation in degrees.
- `[fx]...[/fx]` for horizontal glyph flip.
- `[fy]...[/fy]` for vertical glyph flip.

Tags can be nested for compact HUDs, labels, and annotated visual systems:

```js
t.print(
  "status: [fg=yellow][inv]SYNC[/inv][/fg]  angle: [rot=90]>[/rot]",
  -20,
  6
);
```

Disable markup when printing text that should display brackets literally:

```js
t.print("[fg=red]literal tag[/fg]", -10, 0, { markup: false });
```

## Glyph ramps

A [`TextmodeGlyphRamp`](/api/textmode.js/classes/TextmodeGlyphRamp) maps numeric values to characters. Create one with [`createGlyphRamp()`](/api/textmode.js/classes/Textmodifier/methods/createGlyphRamp):

```js
const ramp = t.createGlyphRamp(" .:-=+*#%@");
```

Characters should be ordered from low intensity to high intensity. Spaces and light punctuation usually work well at the beginning; dense glyphs usually work well at the end.

## Mapping values to glyphs

Use [`at()`](/api/textmode.js/classes/TextmodeGlyphRamp#at) with normalized values:

```js
const value = t.noise(x * 0.08, y * 0.08, t.secs * 0.2);
t.char(ramp.at(value));
```

You can also pass a source range:

```js
const wave = Math.sin(x * 0.2 + t.secs);
t.char(ramp.at(wave, -1, 1));
```

Values outside the range are clamped to the nearest glyph.

## Noise-to-glyph field

Glyph ramps are especially useful when paired with [`noise()`](/api/textmode.js/classes/Textmodifier/methods/noise):

```js
const ramp = t.createGlyphRamp(" .,:;irsXA253hMHGS#9B&@");

t.draw(() => {
  t.background(4, 6, 14);

  for (let y = -18; y < 18; y++) {
    for (let x = -32; x < 32; x++) {
      const value = t.noise(x * 0.07, y * 0.1, t.secs * 0.18);

      t.char(ramp.at(value));
      t.charColor(90 + value * 140, 150 + value * 80, 255);
      t.point(x, y);
    }
  }
});
```

## Shifted ramps

[`shift(amount)`](/api/textmode.js/classes/TextmodeGlyphRamp#shift) returns a shifted copy of the ramp:

```js
const baseRamp = t.createGlyphRamp("0123456789ABCDEF");

t.draw(() => {
  const animatedRamp = baseRamp.shift(t.frameCount * 0.08);
  const value = t.noise(t.secs * 0.2);

  t.char(animatedRamp.at(value));
  t.point();
});
```

This is useful for animated character palettes where the value field stays stable but the glyph vocabulary rotates over time.

## Related APIs

- [`Textmodifier.print()`](/api/textmode.js/classes/Textmodifier/methods/print)
- [`Textmodifier.printAlign()`](/api/textmode.js/classes/Textmodifier/methods/printAlign)
- [`Textmodifier.createGlyphRamp()`](/api/textmode.js/classes/Textmodifier/methods/createGlyphRamp)
- [`TextmodeGlyphRamp`](/api/textmode.js/classes/TextmodeGlyphRamp)
- [`Textmodifier.char()`](/api/textmode.js/classes/Textmodifier/methods/char)
- [`Textmodifier.charColor()`](/api/textmode.js/classes/Textmodifier/methods/charColor)
- [`Textmodifier.cellColor()`](/api/textmode.js/classes/Textmodifier/methods/cellColor)
