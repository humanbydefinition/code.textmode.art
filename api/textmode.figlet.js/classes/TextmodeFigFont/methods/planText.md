---
layout: doc
editLink: true
title: planText
description: Plan a string into positioned FIGlet cells and logical lines.
category: Methods
api: true
owner: TextmodeFigFont
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.figlet.js](../../../index.md) / [TextmodeFigFont](../../TextmodeFigFont.md) / planText

# Method: planText()

```ts
planText(text, options?): FigRenderPlan;
```

Plan a string into positioned FIGlet cells and logical lines.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |
| `options` | [`FigTextOptions`](../../../interfaces/FigTextOptions.md) |

## Returns

`FigRenderPlan`

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
	plugins: [FigletPlugin],
});

const labelLayer = t.layers.add();

let font;
let plan;

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
	t.figTextBaseline('center');
	plan = font.planText('PLAN');
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEFIGFONT.PLANTEXT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: PLAN LAYOUT BEFORE RENDER', x, y++, 100, 220, 255);
	drawText('Calculates coordinates of each cell.', x, y++, 140, 160, 190);
	drawText('Allows custom per-character effects.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (font && plan) {
		drawText(`Planned cells: ${plan.cells.length}`, x, y++, 140, 255, 180);
	} else {
		drawText('Planning layout...', x, y++, 255, 180, 100);
	}
});

t.draw(() => {
	t.background(10, 10, 16);

	if (!font || !plan) return;

	const time = t.secs * 2.0;
	const halfW = Math.floor(plan.cols / 2);
	const halfH = Math.floor(plan.rows / 2);

	// Iterate over planned cells and draw them with a scanline fade
	for (const cell of plan.cells) {
		const delay = cell.col * 0.15;
		const alpha = 0.5 + 0.5 * Math.sin(time - delay);

		t.push();
		t.translate(cell.col - halfW, cell.row - halfH);
		t.char(cell.char);
		t.charColor(Math.round(100 + 155 * alpha), Math.round(150 + 105 * (1.0 - alpha)), 255);
		t.point();
		t.pop();
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

