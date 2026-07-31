---
layout: doc
editLink: true
title: loadFont
description: Load a font and optionally set it as the base layer's active font.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / loadFont

# Method: loadFont()

```ts
loadFont(fontSource, setActive?): Promise<TextmodeFont>;
```

Load a font and optionally set it as the base layer's active font.

Accepts either a URL string to load a new font, or an existing [TextmodeFont](../../../namespaces/fonts/classes/TextmodeFont.md)
instance to use as a reusable source.

If `setActive` is true (default), the font is set as the base layer's font.
If `setActive` is false, the font is loaded/initialized and returned without modifying the layer.

The returned font can be reused on other layers via [TextmodeLayer.loadFont](../../../namespaces/layering/classes/TextmodeLayer/methods/loadFont.md),
which creates a layer-local fork rather than sharing a mutable instance by reference.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `fontSource` | \| `string` \| [`TextmodeFont`](../../../namespaces/fonts/classes/TextmodeFont.md) | `undefined` | Font URL or reusable TextmodeFont instance. |
| `setActive` | `boolean` | `true` | Whether to activate the font on the base layer. Defaults to `true`. |

## Returns

`Promise`\<[`TextmodeFont`](../../../namespaces/fonts/classes/TextmodeFont.md)\>

The loaded TextmodeFont.

## Example

```javascript
const BESCII_URL = 'https://cdn.jsdelivr.net/gh/damianvila/font-bescii@main/fonts/v2.0/Bescii-Mono.ttf';

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const accentLayer = t.layers.add({ fontSize: 16, blendMode: 'additive' });
const labelLayer = t.layers.add();

let baseFont = null;
let reusableFont = null;
let loaded = false;

t.setup(async () => {
	baseFont = await t.loadFont(BESCII_URL);
	reusableFont = await t.loadFont(BESCII_URL, false);
	await accentLayer.loadFont(reusableFont);
	loaded = true;
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

function drawGlyphStrip(font, y, r, g, b) {
	const glyphs = font.characters;
	const count = Math.min(glyphs.length, Math.max(8, Math.floor(t.grid.cols * 0.55)));
	const start = Math.floor((t.frameCount / 8) % glyphs.length);
	const x = -Math.floor(count / 2);
	for (let i = 0; i < count; i++) {
		const glyph = glyphs[(start + i) % glyphs.length];
		t.push();
		t.translate(x + i, y);
		t.char(glyph.character);
		t.charColor(r, g, b);
		t.point();
		t.pop();
	}
}

t.draw(() => {
	t.background(5, 8, 18);
	if (!loaded) return;

	drawGlyphStrip(baseFont, -2, 255, 235, 120);
	drawText('ACTIVE BASE FONT', -8, -5, 255, 235, 120);
});

accentLayer.draw(() => {
	t.clear();
	if (!loaded) return;

	drawGlyphStrip(reusableFont, 4, 120, 220, 255);
	drawText('REUSED ON LAYER', -7, 7, 120, 220, 255);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODIFIER.LOADFONT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: LOAD WEB FONT', x, y++, 100, 220, 255);
	drawText('true activates the base layer.', x, y++, 140, 160, 190);
	drawText('false returns a reusable font.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const state = loaded ? 'READY' : 'LOADING';
	drawText(`FONT: ${state}`, x, y++, 140, 255, 180);
	if (loaded) drawText(`GLYPHS: ${baseFont.characters.length}`, x, y++, 255, 225, 140);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

