---
layout: doc
editLink: true
title: FigletPlugin
description: Plugin entrypoint for the FIGlet add-on.
category: Variables
api: true
kind: Variable
ecosystem: textmode.js
lastModified: 2026-05-15
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
	frameRate: 60,
	plugins: [FigletPlugin],
});

const lines = {
	primary: 'PLUGIN',
	secondary: 'READY',
};

const primaryLayoutOptions = {
	horizontalLayout: 'fitted',
};

const secondaryLayoutOptions = {
	horizontalLayout: 'fitted',
};

let font;
let primaryBounds;
let secondaryBounds;

function writeLabel(text, y, color = [220, 220, 220]) {
	const startX = -Math.floor(text.length / 2);
	t.charColor(...color);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(startX + i, y);
		t.char(text[i]);
		t.point();
		t.pop();
	}
}

function getWaveColor(phase, seed, from, to) {
	const wave = 0.5 + 0.5 * Math.sin(phase + seed);
	return from.map((start, index) => Math.round(start + (to[index] - start) * wave));
}

t.setup(async () => {
	font = await t.loadFigFont('https://cdn.jsdelivr.net/gh/xero/figlet-fonts@master/Bulbhead.flf');
	t.figFont(font);
	t.figTextAlign('center');
	t.figTextBaseline('center');

	primaryBounds = t.figTextBounds(lines.primary, primaryLayoutOptions);
	secondaryBounds = t.figTextBounds(lines.secondary, secondaryLayoutOptions);
});

t.draw(() => {
	t.background(8, 10, 16);

	if (!font || !primaryBounds || !secondaryBounds) {
		writeLabel('installing FigletPlugin + loading a FIGfont...', 0, [255, 214, 102]);
		return;
	}

	const phase = Date.now() * 0.0035;

	writeLabel('FigletPlugin installs FIGlet helpers onto this sketch', -14, [255, 214, 102]);

	t.figText(lines.primary, 0, -4, {
		...primaryLayoutOptions,
		charColor: (cell) => getWaveColor(phase, cell.col * 0.65 + cell.row * 0.4, [124, 214, 255], [255, 214, 102]),
	});

	t.figText(lines.secondary, 0, 6, {
		...secondaryLayoutOptions,
		charColor: (cell) =>
			getWaveColor(phase, cell.inputIndex * 1.2 - cell.row * 0.5, [255, 120, 150], [255, 214, 102]),
	});

	writeLabel(
		`font: ${font.name} | align: ${t.figTextAlign()} | baseline: ${t.figTextBaseline()}`,
		12,
		[220, 230, 255]
	);
	writeLabel(
		`bounds: ${primaryBounds.cols}x${primaryBounds.rows} / ${secondaryBounds.cols}x${secondaryBounds.rows}`,
		15,
		[160, 180, 220]
	);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
