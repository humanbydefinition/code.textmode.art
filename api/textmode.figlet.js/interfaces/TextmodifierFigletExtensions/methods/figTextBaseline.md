---
layout: doc
editLink: true
title: figTextBaseline
description: Get the current vertical FIGlet text baseline mode.
category: Methods
api: true
owner: TextmodifierFigletExtensions
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.figlet.js](../../../index.md) / [TextmodifierFigletExtensions](../../TextmodifierFigletExtensions.md) / figTextBaseline

# Method: figTextBaseline()

## Call Signature

```ts
figTextBaseline(): FigTextBaseline;
```

Get the current vertical FIGlet text baseline mode.

### Returns

[`FigTextBaseline`](../../../type-aliases/FigTextBaseline.md)

The current baseline mode.

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
const baselines = ['top', 'center', 'bottom'];

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
	t.figTextAlign('center');
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2),
		top = -Math.floor(t.grid.rows / 2);
	let y = top + 3,
		x = left + 3;

	drawText('TEXTMODIFIER.FIGTEXTBASELINE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: VERTICAL BASELINE ALIGN', x, y++, 100, 220, 255);
	drawText('Aligns text relative to Y origin.', x, y++, 140, 160, 190);
	drawText('Cycle: top -> center -> bottom.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (font) drawText(`Active baseline: ${t.figTextBaseline()}`, x, y++, 140, 255, 180);
	else drawText('Loading...', x, y++, 255, 180, 100);
});

guideLayer.draw(() => {
	t.clear();
	if (!font) return;

	// Cycle baseline every 2.5 seconds
	const index = Math.floor(t.secs / 2.5) % baselines.length;
	t.figTextBaseline(baselines[index]);

	const left = -Math.floor(t.grid.cols / 2),
		right = Math.ceil(t.grid.cols / 2),
		base = t.figTextBaseline();

	// Draw baseline axis
	t.push();
	t.charColor(50, 100, 150);
	for (let x = left; x < right; x++) {
		t.print('-', x, 0);
	}
	t.charColor(100, 180, 255);
	t.print('Y = 0 (Origin)', 15, 1);
	t.pop();

	// Draw alignment flow indicators
	t.push();
	t.charColor(255, 180, 100);
	t.print(
		base === 'top' ? '↓ (Grows Downward)' : base === 'bottom' ? '↑ (Grows Upward)' : '↕ (Centered)',
		-9,
		base === 'bottom' ? -5 : 5
	);
	t.pop();
});

textLayer.draw(() => {
	t.clear();
	if (!font) return;

	const time = t.secs * 1.5;
	t.figText('BASE', 0, 0, {
		charColor: (cell) => {
			const wave = 0.5 + 0.5 * Math.sin(time + cell.row * 0.2);
			return [255, Math.round(150 + 105 * wave), Math.round(100 + 155 * (1.0 - wave))];
		},
	});
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
figTextBaseline(baseline): void;
```

Set the vertical FIGlet text baseline mode.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseline` | [`FigTextBaseline`](../../../type-aliases/FigTextBaseline.md) | Baseline mode for subsequent `figText()` calls. |

### Returns

`void`

