---
layout: doc
editLink: true
title: defaultLayout
description: Default horizontal layout implied by the header metadata.
category: Accessors
api: true
owner: TextmodeFigFont
kind: Accessor
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.figlet.js](../../../index.md) / [TextmodeFigFont](../../TextmodeFigFont.md) / defaultLayout

# Accessor: defaultLayout

## Get Signature

```ts
get defaultLayout(): FigHorizontalLayout;
```

Default horizontal layout implied by the header metadata.

### Returns

[`FigHorizontalLayout`](../../../type-aliases/FigHorizontalLayout.md)

### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
	plugins: [FigletPlugin],
});

const labelLayer = t.layers.add();
let font;
let currentMode = 'default';

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
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEFIGFONT.DEFAULTLAYOUT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: DEFAULT LAYOUT RULES', x, y++, 100, 220, 255);
	drawText('Controls horizontal kerning/smush.', x, y++, 140, 160, 190);
	drawText('Combines glyph edges into compact forms.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (font) {
		const m = currentMode;
		drawText(`Default layout: ${font.defaultLayout}`, x, y++, 140, 255, 180);
		drawText(`Current layout: ${m}`, x, y++, 100, 225, 255);
	} else {
		drawText('Loading...', x, y++, 255, 180, 100);
	}
});

t.draw(() => {
	t.background(10, 12, 18);

	if (!font) return;

	const modes = ['full', 'fitted', 'smushed'];
	const idx = Math.floor(t.secs / 3.0) % modes.length;
	currentMode = modes[idx];

	const plan = font.planText('LAYOUT', { horizontalLayout: currentMode });
	if (!plan) return;

	const startX = -Math.floor(plan.cols / 2);
	const startY = -Math.floor(plan.rows / 2);
	const time = t.secs * 1.5;

	// Draw characters
	for (const cell of plan.cells) {
		t.push();
		t.translate(startX + cell.col, startY + cell.row);
		const wave = 0.5 + 0.5 * Math.sin(time + cell.col * 0.1);
		t.charColor(Math.round(130 + 125 * wave), 255, Math.round(200 + 55 * (1.0 - wave)));
		t.char(cell.char);
		t.point();
		t.pop();
	}

	// Draw bounds
	t.push();
	t.charColor(255, 180, 100);
	t.print('[', startX - 2, 0);
	t.print(']', startX + plan.cols + 1, 0);
	t.printAlign('center', 'top');
	const label = `${plan.cols} columns`;
	t.print(label, 0, startY + plan.rows + 2);
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

