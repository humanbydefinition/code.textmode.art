---
layout: doc
editLink: true
title: parseFigFont
description: Parse a FIGlet font from raw .flf contents.
category: Methods
api: true
owner: TextmodifierFigletExtensions
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.figlet.js](../../../index.md) / [TextmodifierFigletExtensions](../../TextmodifierFigletExtensions.md) / parseFigFont

# Method: parseFigFont()

```ts
parseFigFont(name, data): TextmodeFigFont;
```

Parse a FIGlet font from raw `.flf` contents.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Human-readable font name. |
| `data` | `string` | Raw `.flf` file contents. |

## Returns

[`TextmodeFigFont`](../../../classes/TextmodeFigFont.md)

A parsed FIGlet font instance.

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
	plugins: [FigletPlugin],
});
const labelLayer = t.layers.add();

let font, bounds;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.setup(async () => {
	const response = await fetch('https://cdn.jsdelivr.net/gh/xero/figlet-fonts@master/Bulbhead.flf');
	const rawText = await response.text();
	font = t.parseFigFont('Bulbhead', rawText);
	t.figFont(font);
	t.figTextAlign('center');
	t.figTextBaseline('center');
	bounds = t.figTextBounds('PARSE', { horizontalLayout: 'fitted' });
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODIFIER.PARSEFIGFONT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: PARSING RAW FONT STRINGS', x, y++, 100, 220, 255);
	drawText('Parses string data into a FIGfont.', x, y++, 140, 160, 190);
	drawText('Enables inline/local font definition.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (font) {
		const name = font.name;
		drawText(`Parsed name: ${name}`, x, y++, 140, 255, 180);
	} else {
		drawText('Parsing...', x, y++, 255, 180, 100);
	}
});

t.draw(() => {
	t.background(8, 10, 18);
	const time = t.secs;
	const cols = t.grid.cols;
	const rows = t.grid.rows;
	const left = -Math.floor(cols / 2);
	const top = -Math.floor(rows / 2);

	if (!font || !bounds) return;

	const w = bounds.cols;
	const h = bounds.rows;
	const halfW = Math.floor(w / 2);
	const halfH = Math.floor(h / 2);

	const cx = (w - 1) / 2 - halfW;
	const cy = (h - 1) / 2 - halfH;

	t.push();
	t.translate(cx, cy);
	t.char(' ');
	t.cellColor(10, 10, 12);
	t.rect(w + 4, h + 2);
	t.pop();

	const timeFig = t.secs * 1.8;
	t.figText('PARSE', 0, 0, {
		horizontalLayout: 'fitted',
		charColor: (cell) => {
			const wave = 0.5 + 0.5 * Math.sin(timeFig + cell.col * 0.25);
			return [Math.round(100 + 155 * wave), 255, Math.round(120 + 135 * (1.0 - wave))];
		},
	});
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

