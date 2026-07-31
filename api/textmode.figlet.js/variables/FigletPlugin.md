---
layout: doc
editLink: true
title: FigletPlugin
description: Plugin entrypoint for the FIGlet add-on.
category: Variables
api: true
kind: Variable
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.figlet.js](../index.md) / FigletPlugin

# Variable: FigletPlugin

```ts
const FigletPlugin: TextmodePlugin;
```

Plugin entrypoint for the FIGlet add-on.

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
let bounds;

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
	bounds = t.figTextBounds('READY', { horizontalLayout: 'fitted' });
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('FIGLETPLUGIN.INIT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: PLUGIN INITIALIZATION', x, y++, 100, 220, 255);
	drawText('Installs FIGlet drawing features.', x, y++, 140, 160, 190);
	drawText('Enables loadFigFont and figText.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (font) {
		drawText(`Font loaded: ${font.name}`, x, y++, 140, 255, 180);
	} else {
		drawText('Loading font...', x, y++, 255, 180, 100);
	}
});

t.draw(() => {
	t.background(10, 12, 18);

	if (!font || !bounds) return;

	const time = t.secs * 2.0;
	const yOffset = Math.floor(Math.sin(time) * 4);

	t.figText('READY', 0, yOffset, {
		horizontalLayout: 'fitted',
		charColor: (cell) => {
			const wave = 0.5 + 0.5 * Math.sin(time + cell.col * 0.15 + cell.row * 0.3);
			return [Math.round(100 + 155 * wave), Math.round(150 + 105 * (1.0 - wave)), 255];
		},
	});
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

