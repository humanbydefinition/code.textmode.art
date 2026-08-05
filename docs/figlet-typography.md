---
title: FIGlet typography
description: Load FIGfonts, layout ASCII banner text, align baselines, and style per-cell characters with textmode.figlet.js.
---

# FIGlet typography

FIGlet display typography gives `textmode.js` sketches large, stylized ASCII text banners, headers, and retro titles.

The separate [`textmode.figlet.js`](/api/textmode.figlet.js/) package adds FIGfont parsing, standards-aware layout (fitting, smushing, wrapping), baseline alignment, and per-cell character and cell coloring. (✿◠‿◠)

## Install and register the plugin

Pass [`FigletPlugin`](/api/textmode.figlet.js/variables/FigletPlugin.md) to `textmode.create()` via the `plugins` option:

```js
import { textmode } from "textmode.js";
import { FigletPlugin } from "textmode.figlet.js";

const t = textmode.create({
  width: 800,
  height: 600,
  plugins: [FigletPlugin],
});
```

Installing `FigletPlugin` registers FIGlet extension methods on your [`Textmodifier`](/api/textmode.js/classes/Textmodifier.md) instance, documented in [`TextmodifierFigletExtensions`](/api/textmode.figlet.js/interfaces/TextmodifierFigletExtensions.md).

## Load and select FIGfonts

Before rendering FIGlet text, load a `.flf` font file and set it as active.

### Load a font from URL or path

Use [`t.loadFigFont()`](/api/textmode.figlet.js/interfaces/TextmodifierFigletExtensions/methods/loadFigFont.md) to load a `.flf` font file asynchronously:

```js
t.setup(async () => {
  const font = await t.loadFigFont("./fonts/standard.flf");
  t.figFont(font);
});
```

### Parse raw FIGfont data

Use [`t.parseFigFont()`](/api/textmode.figlet.js/interfaces/TextmodifierFigletExtensions/methods/parseFigFont.md) when working with preloaded string data:

```js
const font = t.parseFigFont("standard", rawFlfString);
t.figFont(font);
```

### Manage the active font

Use [`t.figFont()`](/api/textmode.figlet.js/interfaces/TextmodifierFigletExtensions/methods/figFont.md) to retrieve or update the active FIGfont:

```js
// Set active font
t.figFont(font);

// Get current active font
const activeFont = t.figFont();
```

Calling `t.figText()` without an active font throws an error.

## Render FIGlet text

Use [`t.figText()`](/api/textmode.figlet.js/interfaces/TextmodifierFigletExtensions/methods/figText.md) inside your `draw()` loop to render text at grid column and row coordinates:

```js
t.draw(() => {
  t.background(0);
  t.charColor(255, 255, 255);

  t.figText("TEXTMODE", 5, 10);
});
```

`figText()` translates and positions each sub-character cell into the active textmode layer, using the layer's current state for missing per-cell color overrides.

## Alignment and baselines

Positioning FIGlet text depends on horizontal alignment and vertical baselines.

### Horizontal alignment

Use [`t.figTextAlign()`](/api/textmode.figlet.js/interfaces/TextmodifierFigletExtensions/methods/figTextAlign.md) or specify `alignment` to shift the text origin:

```js
t.figTextAlign("center"); // 'left' | 'center' | 'right'
t.figText("HERO", t.grid.cols / 2, 5);
```

- `'left'` (default): origin is at the leftmost column.
- `'center'`: origin is horizontally centered across all rendered columns.
- `'right'`: origin is at the rightmost column.

### Vertical baseline

Use [`t.figTextBaseline()`](/api/textmode.figlet.js/interfaces/TextmodifierFigletExtensions/methods/figTextBaseline.md) to adjust vertical positioning:

```js
t.figTextBaseline("center"); // 'top' | 'center' | 'bottom' | 'baseline'
t.figText("TITLE", t.grid.cols / 2, t.grid.rows / 2);
```

- `'baseline'` (default): anchors to the font's declared baseline row.
- `'top'`: anchors to row `0` (top line of characters).
- `'center'`: anchors to the vertical midpoint of all rendered rows.
- `'bottom'`: anchors to the bottommost row of the rendered block.

## Layout options and wrapping

Pass a [`FigTextOptions`](/api/textmode.figlet.js/interfaces/FigTextOptions.md) object to `t.figText()` to control layout algorithms, line wrapping, and direction:

```js
t.figText("COMPACT HEADER", 0, 0, {
  horizontalLayout: "smushed",
  verticalLayout: "fitted",
  wrap: "word",
  maxCols: 40,
});
```

### Layout modes

FIGlet supports three layout density modes for both axes:

- `'full'`: Full character width/height with no overlapping or kerning.
- `'fitted'`: Characters are moved together until they touch without overlapping.
- `'smushed'`: Characters overlap according to FIGlet smushing rules (e.g. hierarchy, hardblanks, border merging).

### Multiline wrapping

Use `wrap` and `maxCols` to automatically break long text onto multiple logical lines:

- `wrap: 'none'` (default): Text stays on a single line (unless explicit `\n` characters are present).
- `wrap: 'word'`: Wraps at whitespace boundaries when total width exceeds `maxCols`.
- `wrap: 'char'`: Wraps character-by-character when total width exceeds `maxCols`.

### Print direction

Set `direction` to override font-defined layout direction:

- `'font'` (default): Respects the direction specified in the font header.
- `'ltr'`: Render left-to-right.
- `'rtl'`: Render right-to-left.

## Per-cell styling and color resolvers

Apply custom colors to rendered FIGlet characters using `charColor` (foreground) and `cellColor` (background) in `FigTextOptions`.

### Static colors

Pass any valid textmode color value (hex, rgb array, string, number):

```js
t.figText("GLOW", 2, 4, {
  charColor: [255, 200, 50],
  cellColor: "#110022",
});
```

### Dynamic color callbacks

For gradients, rainbow effects, or per-character highlights, pass a resolver function that accepts [`FigTextCellContext`](/api/textmode.figlet.js/interfaces/FigTextCellContext.md):

```js
t.figText("RAINBOW", 0, 5, {
  charColor: (cell) => {
    const hue = (cell.col * 15 + t.frameCount * 2) % 360;
    return t.color.hsl(hue, 80, 60);
  },
});
```

The `cell` context object provides details for precise styling:

- `cell.char`: The sub-character symbol for this cell.
- `cell.col`: Absolute column index within the rendered FIGlet result.
- `cell.row`: Absolute row index within the rendered FIGlet result.
- `cell.inputIndex`: Index of the character in the input string.
- `cell.inputChar`: The original input character (e.g. `'R'`).
- `cell.figCharCode`: Unicode code point of the character.
- `cell.subRow`: Row within the source FIGcharacter.
- `cell.subCol`: Column within the source FIGcharacter.
- `cell.lineIndex`: Logical line index after wrapping or line breaks.

## Measurement and bounds

Calculate the dimensions of FIGlet text before drawing to center elements, build bounding boxes, or dynamically size layouts with [`t.figTextWidth()`](/api/textmode.figlet.js/interfaces/TextmodifierFigletExtensions/methods/figTextWidth.md), [`t.figTextHeight()`](/api/textmode.figlet.js/interfaces/TextmodifierFigletExtensions/methods/figTextHeight.md), and [`t.figTextBounds()`](/api/textmode.figlet.js/interfaces/TextmodifierFigletExtensions/methods/figTextBounds.md):

```js
const width = t.figTextWidth("HEADER", { horizontalLayout: "fitted" });
const height = t.figTextHeight("HEADER");
const bounds = t.figTextBounds("HEADER"); // { cols: number, rows: number }
```

### Inspecting parsed `TextmodeFigFont`

Inspect font metadata and low-level character plans directly on a [`TextmodeFigFont`](/api/textmode.figlet.js/classes/TextmodeFigFont.md) instance:

```js
const font = t.figFont();

console.log(font.name); // Font name
console.log(font.height); // FIGcharacter height in rows
console.log(font.baseline); // Declared font baseline row
console.log(font.hardblank); // Hardblank character
console.log(font.defaultLayout); // Default horizontal layout

// Inspect individual FIGcharacter
const charData = font.getCharacter("A");

// Generate low-level plan without drawing
const plan = font.planText("HELLO");
// plan.cells, plan.lines, plan.cols, plan.rows
```

## Related APIs

- [`textmode.figlet.js` API reference](/api/textmode.figlet.js/)
- [`FigletPlugin`](/api/textmode.figlet.js/variables/FigletPlugin.md)
- [`TextmodifierFigletExtensions`](/api/textmode.figlet.js/interfaces/TextmodifierFigletExtensions.md)
- [`TextmodeFigFont`](/api/textmode.figlet.js/classes/TextmodeFigFont.md)
- [`FigTextOptions`](/api/textmode.figlet.js/interfaces/FigTextOptions.md)
- [`FigTextCellContext`](/api/textmode.figlet.js/interfaces/FigTextCellContext.md)
- [Fonts and tilesets](/docs/fonts-and-tilesets)
- [Plugins](/docs/plugins)
