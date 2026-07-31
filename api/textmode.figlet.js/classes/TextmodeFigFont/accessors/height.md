---
layout: doc
editLink: true
title: height
description: Number of rows in each FIGcharacter.
category: Accessors
api: true
owner: TextmodeFigFont
kind: Accessor
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.figlet.js](../../../index.md) / [TextmodeFigFont](../../TextmodeFigFont.md) / height

# Accessor: height

## Get Signature

```ts
get height(): number;
```

Number of rows in each FIGcharacter.

### Returns

`number`

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
let rendered;

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
	rendered = font.renderText('HEIGHT');
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEFIGFONT.HEIGHT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: FONT HEIGHT PROPERTY', x, y++, 100, 220, 255);
	drawText('Defines vertical lines per character.', x, y++, 140, 160, 190);
	drawText('Ensures consistent row-height bounds.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (font) {
		drawText(`Height: ${font.height} cells`, x, y++, 140, 255, 180);
	} else {
		drawText('Loading...', x, y++, 255, 180, 100);
	}
});

t.draw(() => {
	t.background(10, 12, 18);
	if (!font || !rendered) return;

	const startX = -Math.floor(rendered.cols / 2) + 2;
	const startY = -Math.floor(rendered.rows / 2);
	const time = t.secs * 1.5;

	// Draw faint background grid bounding box
	t.push();
	t.charColor(30, 40, 60);
	for (let r = 0; r < font.height; r++) {
		for (let c = 0; c < rendered.cols; c++) {
			t.print('.', startX + c, startY + r);
		}
	}
	t.pop();

	// Draw rendered text with vertical color waves
	for (let row = 0; row < rendered.grid.length; row++) {
		for (let col = 0; col < rendered.grid[row].length; col++) {
			const char = rendered.grid[row][col];
			if (char === ' ') continue;

			const wave = 0.5 + 0.5 * Math.sin(time + row * 0.4);
			t.push();
			t.translate(startX + col, startY + row);
			t.charColor(Math.round(100 + 155 * wave), Math.round(200 + 55 * (1.0 - wave)), 255);
			t.char(char);
			t.point();
			t.pop();
		}
	}

	// Draw vertical height ruler
	t.push();
	const rulerX = startX - 4;
	for (let r = 0; r < font.height; r++) {
		const active = Math.floor(time * 3) % font.height === r;
		t.charColor(active ? 255 : 100, active ? 100 : 120, active ? 100 : 150);
		t.print(`${r + 1}`, rulerX, startY + r);
		t.print('>', rulerX + 2, startY + r);
	}
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

