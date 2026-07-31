---
layout: doc
editLink: true
title: defaultVerticalLayout
description: Default vertical layout implied by the FIGfont header metadata.
category: Accessors
api: true
owner: TextmodeFigFont
kind: Accessor
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.figlet.js](../../../index.md) / [TextmodeFigFont](../../TextmodeFigFont.md) / defaultVerticalLayout

# Accessor: defaultVerticalLayout

## Get Signature

```ts
get defaultVerticalLayout(): FigVerticalLayout;
```

Default vertical layout implied by the FIGfont header metadata.

### Returns

[`FigVerticalLayout`](../../../type-aliases/FigVerticalLayout.md)

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

	drawText('TEXTMODEFIGFONT.DEFAULTVERTICALLAYOUT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: DEFAULT VERTICAL LAYOUT', x, y++, 100, 220, 255);
	drawText('Controls vertical spacing of lines.', x, y++, 140, 160, 190);
	drawText('Combines row boundaries compact.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (font) {
		const defMode = font.defaultVerticalLayout;
		const curMode = currentMode;
		drawText(`Default layout: ${defMode}`, x, y++, 140, 255, 180);
		drawText(`Current layout: ${curMode}`, x, y++, 100, 225, 255);
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

	const plan = font.planText('UP\nDN', { verticalLayout: currentMode });
	if (!plan) return;

	const startX = -Math.floor(plan.cols / 2) - 3;
	const startY = -Math.floor(plan.rows / 2);
	const time = t.secs * 1.5;

	// Draw characters
	for (const cell of plan.cells) {
		t.push();
		t.translate(startX + cell.col, startY + cell.row);
		const wave = 0.5 + 0.5 * Math.sin(time + cell.row * 0.15);
		t.charColor(255, Math.round(100 + 155 * wave), Math.round(150 + 105 * (1.0 - wave)));
		t.char(cell.char);
		t.point();
		t.pop();
	}

	// Draw vertical height bounds indicator on the right
	t.push();
	t.charColor(100, 220, 255);
	const borderX = startX + plan.cols + 3;
	t.print('┌', borderX, startY - 1);
	t.print('└', borderX, startY + plan.rows);
	for (let r = startY; r < startY + plan.rows; r++) {
		t.print('│', borderX, r);
	}
	const label = `${plan.rows} rows`;
	t.print(`< ${label}`, borderX + 2, 0);
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

