---
layout: doc
editLink: true
title: defaultPrintDirection
description: Default print direction implied by the FIGfont header metadata.
category: Accessors
api: true
owner: TextmodeFigFont
kind: Accessor
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.figlet.js](../../../index.md) / [TextmodeFigFont](../../TextmodeFigFont.md) / defaultPrintDirection

# Accessor: defaultPrintDirection

## Get Signature

```ts
get defaultPrintDirection(): "ltr" | "rtl";
```

Default print direction implied by the FIGfont header metadata.

### Returns

`"ltr"` \| `"rtl"`

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
let currentDirection = 'ltr';

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

	drawText('TEXTMODEFIGFONT.DEFAULTPRINTDIRECTION', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: PRINT DIRECTION FLOW', x, y++, 100, 220, 255);
	drawText('Defines LTR or RTL character flow.', x, y++, 140, 160, 190);
	drawText('Reverses character layout ordering.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (font) {
		const defDir = font.defaultPrintDirection;
		const curDir = currentDirection;
		drawText(`Default print: ${defDir}`, x, y++, 140, 255, 180);
		drawText(`Current print: ${curDir}`, x, y++, 100, 225, 255);
	} else {
		drawText('Loading...', x, y++, 255, 180, 100);
	}
});

t.draw(() => {
	t.background(10, 12, 18);
	if (!font) return;

	const directions = ['ltr', 'rtl'];
	const idx = Math.floor(t.secs / 3.0) % directions.length;
	currentDirection = directions[idx];

	const plan = font.planText('FLOW', { direction: currentDirection });
	if (!plan) return;

	const startX = -Math.floor(plan.cols / 2);
	const startY = -Math.floor(plan.rows / 2);
	const time = t.secs * 2.0;

	// Draw characters
	for (const cell of plan.cells) {
		t.push();
		t.translate(startX + cell.col, startY + cell.row);
		const wave = 0.5 + 0.5 * Math.sin(time + cell.col * 0.1);
		t.charColor(Math.round(100 + 155 * wave), Math.round(180 + 75 * (1.0 - wave)), 255);
		t.char(cell.char);
		t.point();
		t.pop();
	}

	// Draw direction flow arrows
	t.push();
	t.charColor(100, 255, 140);
	const arrowY = startY - 3;
	const isLTR = currentDirection === 'ltr';
	const arrowChar = isLTR ? '>' : '<';
	const speed = isLTR ? 1.0 : -1.0;

	for (let col = 0; col < plan.cols; col++) {
		const pulse = 0.5 + 0.5 * Math.sin(time * 3 + col * 0.3 * speed);
		if (pulse > 0.7) {
			t.print(arrowChar, startX + col, arrowY);
		} else {
			t.print('.', startX + col, arrowY);
		}
	}
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

