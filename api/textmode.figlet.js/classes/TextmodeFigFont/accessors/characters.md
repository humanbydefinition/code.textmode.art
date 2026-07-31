---
layout: doc
editLink: true
title: characters
description: Parsed FIGcharacters keyed by Unicode code point.
category: Accessors
api: true
owner: TextmodeFigFont
kind: Accessor
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.figlet.js](../../../index.md) / [TextmodeFigFont](../../TextmodeFigFont.md) / characters

# Accessor: characters

## Get Signature

```ts
get characters(): Map<number, FigCharacter>;
```

Parsed FIGcharacters keyed by Unicode code point.

### Returns

`Map`\<`number`, [`FigCharacter`](../../../interfaces/FigCharacter.md)\>

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
let keysList = [];

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
	keysList = Array.from(font.characters.keys()).filter((code) => code >= 33 && code <= 126);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEFIGFONT.CHARACTERS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: INSPECTING ALL CHARACTERS', x, y++, 100, 220, 255);
	drawText('Accesses map of all loaded glyphs.', x, y++, 140, 160, 190);
	drawText('Shows printable ASCII codes (33-126).', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (font) {
		drawText(`Glyphs loaded: ${font.characters.size}`, x, y++, 140, 255, 180);
	} else {
		drawText('Loading characters map...', x, y++, 255, 180, 100);
	}
});

t.draw(() => {
	t.background(10, 10, 14);

	if (!font || keysList.length === 0) return;

	t.figText('CHARS', 0, -6);

	t.push();
	t.printAlign('center', 'center');
	const time = t.secs * 1.2;
	const offset = Math.floor(time * 2) % keysList.length;

	// Draw a scrolling waterfall of loaded character codes
	for (let i = 0; i < 8; i++) {
		const idx = (offset + i) % keysList.length;
		const code = keysList[idx];
		const charStr = String.fromCharCode(code);

		const wave = 0.5 + 0.5 * Math.sin(time + i * 0.5);
		t.charColor(Math.round(100 + 155 * wave), 255, Math.round(150 + 105 * (1.0 - wave)));

		t.print(`code ${code} -> glyph '${charStr}'`, 0, -1 + i * 2);
	}
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

