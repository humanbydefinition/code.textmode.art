---
layout: doc
editLink: true
title: figTextAlign
description: Get the current horizontal FIGlet text alignment.
category: Methods
api: true
owner: TextmodifierFigletExtensions
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.figlet.js](../../../index.md) / [TextmodifierFigletExtensions](../../TextmodifierFigletExtensions.md) / figTextAlign

# Method: figTextAlign()

## Call Signature

```ts
figTextAlign(): FigTextAlign;
```

Get the current horizontal FIGlet text alignment.

### Returns

[`FigTextAlign`](../../../type-aliases/FigTextAlign.md)

The current alignment mode.

### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
	plugins: [FigletPlugin],
});
const guideLayer = t.layers.add(),
	textLayer = t.layers.add(),
	labelLayer = t.layers.add();

let font;
const alignments = ['left', 'center', 'right'];

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.setup(async () => {
	font = await t.loadFigFont('https://cdn.jsdelivr.net/gh/xero/figlet-fonts@master/Bulbhead.flf');
	t.figFont(font);
	t.figTextBaseline('center');
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2),
		top = -Math.floor(t.grid.rows / 2);
	let y = top + 3,
		x = left + 3;

	drawText('TEXTMODIFIER.FIGTEXTALIGN', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: HORIZONTAL ALIGNMENT', x, y++, 100, 220, 255);
	drawText('Aligns text relative to X origin.', x, y++, 140, 160, 190);
	drawText('Cycle: left -> center -> right.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (font) drawText(`Active align: ${t.figTextAlign()}`, x, y++, 140, 255, 180);
	else drawText('Loading...', x, y++, 255, 180, 100);
});

guideLayer.draw(() => {
	t.clear();
	if (!font) return;

	// Cycle alignment every 2.5 seconds
	const index = Math.floor(t.secs / 2.5) % alignments.length;
	t.figTextAlign(alignments[index]);

	const top = -Math.floor(t.grid.rows / 2),
		bottom = Math.ceil(t.grid.rows / 2),
		align = t.figTextAlign();

	// Draw origin axis
	t.push();
	t.charColor(50, 100, 150);
	for (let y = top; y < bottom; y++) {
		t.print('|', 0, y);
	}
	t.charColor(100, 180, 255);
	t.print('X = 0 (Origin)', 2, 8);
	t.pop();

	// Draw alignment indicator arrow
	t.push();
	t.charColor(255, 180, 100);
	t.print(
		align === 'left' ? 'Origin -->' : align === 'right' ? '<-- Origin' : '<-- Origin -->',
		align === 'left' ? 0 : align === 'right' ? -10 : -6,
		5
	);
	t.pop();
});

textLayer.draw(() => {
	t.clear();
	if (!font) return;

	const time = t.secs * 1.5;
	t.figText('ALIGN', 0, 0, {
		charColor: (cell) => {
			const wave = 0.5 + 0.5 * Math.sin(time + cell.col * 0.1);
			return [Math.round(100 + 155 * wave), 255, Math.round(200 + 55 * (1.0 - wave))];
		},
	});
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
figTextAlign(align): void;
```

Set the horizontal FIGlet text alignment.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `align` | [`FigTextAlign`](../../../type-aliases/FigTextAlign.md) | Alignment mode for subsequent `figText()` calls. |

### Returns

`void`

