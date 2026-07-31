---
layout: doc
editLink: true
title: baseline
description: Baseline row declared by the font.
category: Accessors
api: true
owner: TextmodeFigFont
kind: Accessor
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.figlet.js](../../../index.md) / [TextmodeFigFont](../../TextmodeFigFont.md) / baseline

# Accessor: baseline

## Get Signature

```ts
get baseline(): number;
```

Baseline row declared by the font.

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
	rendered = font.renderText('BASELINE');
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEFIGFONT.BASELINE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: FONT BASELINE PROPERTY', x, y++, 100, 220, 255);
	drawText('Vertical line where glyphs sit.', x, y++, 140, 160, 190);
	drawText('Separates main body from descenders.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (font) {
		drawText(`Baseline: row ${font.baseline}`, x, y++, 140, 255, 180);
	} else {
		drawText('Loading...', x, y++, 255, 180, 100);
	}
});

t.draw(() => {
	t.background(10, 12, 18);

	if (!font || !rendered) return;

	const startX = -Math.floor(rendered.cols / 2) - 2;
	const startY = -Math.floor(rendered.rows / 2);
	const time = t.secs * 1.5;

	// Draw rendered text with baseline highlight
	for (let row = 0; row < rendered.grid.length; row++) {
		for (let col = 0; col < rendered.grid[row].length; col++) {
			const char = rendered.grid[row][col];
			if (char === ' ') continue;

			const isBaseline = row === font.baseline - 1;
			t.push();
			t.translate(startX + col, startY + row);
			if (isBaseline) {
				const pulse = 0.5 + 0.5 * Math.sin(time * 3);
				t.charColor(255, Math.round(150 + 105 * pulse), 100);
			} else {
				t.charColor(100, 200, 255);
			}
			t.char(char);
			t.point();
			t.pop();
		}
	}

	// Draw baseline guide line
	t.push();
	const pulse = 0.5 + 0.5 * Math.sin(time * 3.0);
	t.charColor(255, Math.round(100 + 155 * pulse), 100);
	const lineY = startY + font.baseline - 1;
	for (let col = -2; col < rendered.cols + 2; col++) {
		t.print('-', startX + col, lineY);
	}
	t.print('< BASELINE', startX + rendered.cols + 3, lineY);
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

