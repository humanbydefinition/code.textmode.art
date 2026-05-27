---
layout: doc
editLink: true
title: TextmodeFont
description: Vector font glyph source for textmode rendering.
category: Classes
api: true
namespace: fonts
kind: Class
lastModified: 2026-05-27
hasConstructor: false
---

[textmode.js](../../../index.md) / [fonts](../index.md) / TextmodeFont

# Class: TextmodeFont

Vector font glyph source for textmode rendering.

Fonts are loaded from TrueType/OpenType/WOFF data, converted into a normalized
glyph atlas, and used by [layering.TextmodeLayer](../../layering/classes/TextmodeLayer.md) during ASCII conversion.

## Example

```javascript
const BESCII_URL = 'https://cdn.jsdelivr.net/gh/damianvila/font-bescii@main/fonts/v2.0/Bescii-Mono.ttf';

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let activeFont = null;
let fontReady = false;
let disposed = false;

t.setup(async () => {
	activeFont = await t.loadFont(BESCII_URL);
	fontReady = true;
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	if (!fontReady) return;
	const glyphs = activeFont.characters;
	const cols = activeFont.textureColumns;
	const rows = activeFont.textureRows;
	const startX = -Math.floor(cols / 2);
	const labelBottom = -Math.floor(t.grid.rows / 2) + 11;
	const bottomLimit = Math.floor(t.grid.rows / 2) - rows - 2;
	const startY = Math.max(labelBottom, Math.min(-Math.floor(rows / 2), bottomLimit));
	for (let i = 0; i < glyphs.length; i++) {
		const glyph = glyphs[i];
		t.push();
		t.translate(startX + (i % cols), startY + Math.floor(i / cols));
		t.char(glyph.character);
		t.charColor(120 + (i % cols) * 8, 220, 255 - (i % rows) * 12);
		t.point();
		t.pop();
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEFONT.CREATION', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: FONT ATLAS DATA', x, y++, 100, 220, 255);
	drawText('Bescii web font feeds glyphs.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (!fontReady) {
		drawText('LOADING BESCII...', x, y++, 255, 225, 140);
		return;
	}
	drawText('BESCII READY', x, y++, 140, 255, 180);
	drawText(`GLYPHS: ${activeFont.characters.length}`, x, y++, 255, 225, 140);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Extends

- `Disposable`

## Accessors

### characterMap

#### Get Signature

```ts
get characterMap(): Map<string, TextmodeGlyph>;
```

Character-to-glyph lookup map.

##### Returns

`Map`\<`string`, [`TextmodeGlyph`](../type-aliases/TextmodeGlyph.md)\>

##### Example

```javascript
const BESCII_URL = 'https://cdn.jsdelivr.net/gh/damianvila/font-bescii@main/fonts/v2.0/Bescii-Mono.ttf';

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let activeFont = null;
let fontReady = false;
let disposed = false;

t.setup(async () => {
	activeFont = await t.loadFont(BESCII_URL);
	fontReady = true;
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	if (!fontReady) return;
	const glyphs = activeFont.characters;
	const cols = activeFont.textureColumns;
	const rows = activeFont.textureRows;
	const startX = -Math.floor(cols / 2);
	const labelBottom = -Math.floor(t.grid.rows / 2) + 11;
	const bottomLimit = Math.floor(t.grid.rows / 2) - rows - 2;
	const startY = Math.max(labelBottom, Math.min(-Math.floor(rows / 2), bottomLimit));
	for (let i = 0; i < glyphs.length; i++) {
		const glyph = glyphs[i];
		t.push();
		t.translate(startX + (i % cols), startY + Math.floor(i / cols));
		t.char(glyph.character);
		t.charColor(120 + (i % cols) * 8, 220, 255 - (i % rows) * 12);
		t.point();
		t.pop();
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEFONT.CHARACTERMAP', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: FONT ATLAS DATA', x, y++, 100, 220, 255);
	drawText('Bescii web font feeds glyphs.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (!fontReady) {
		drawText('LOADING BESCII...', x, y++, 255, 225, 140);
		return;
	}
	const glyph = activeFont.characters[Math.floor(t.frameCount / 12) % activeFont.characters.length];
	const found = activeFont.characterMap.has(glyph.character);
	drawText(`CHAR: ${glyph.character}`, x, y++, 255, 225, 140);
	drawText(`IN MAP: ${found}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### characters

#### Get Signature

```ts
get characters(): readonly TextmodeGlyph[];
```

Unicode glyphs available in this font.

##### Returns

readonly [`TextmodeGlyph`](../type-aliases/TextmodeGlyph.md)[]

##### Example

```javascript
const BESCII_URL = 'https://cdn.jsdelivr.net/gh/damianvila/font-bescii@main/fonts/v2.0/Bescii-Mono.ttf';

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let activeFont = null;
let fontReady = false;
let disposed = false;

t.setup(async () => {
	activeFont = await t.loadFont(BESCII_URL);
	fontReady = true;
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	if (!fontReady) return;
	const glyphs = activeFont.characters;
	const cols = activeFont.textureColumns;
	const rows = activeFont.textureRows;
	const startX = -Math.floor(cols / 2);
	const labelBottom = -Math.floor(t.grid.rows / 2) + 11;
	const bottomLimit = Math.floor(t.grid.rows / 2) - rows - 2;
	const startY = Math.max(labelBottom, Math.min(-Math.floor(rows / 2), bottomLimit));
	for (let i = 0; i < glyphs.length; i++) {
		const glyph = glyphs[i];
		t.push();
		t.translate(startX + (i % cols), startY + Math.floor(i / cols));
		t.char(glyph.character);
		t.charColor(120 + (i % cols) * 8, 220, 255 - (i % rows) * 12);
		t.point();
		t.pop();
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEFONT.CHARACTERS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: FONT ATLAS DATA', x, y++, 100, 220, 255);
	drawText('Bescii web font feeds glyphs.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (!fontReady) {
		drawText('LOADING BESCII...', x, y++, 255, 225, 140);
		return;
	}
	const index = Math.floor(t.frameCount / 12) % activeFont.characters.length;
	const glyph = activeFont.characters[index];
	drawText(`COUNT: ${activeFont.characters.length}`, x, y++, 140, 255, 180);
	drawText(`GLYPH: ${glyph.character}`, x, y++, 255, 225, 140);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### font

#### Get Signature

```ts
get font(): TyprFont;
```

Parsed Typr.js font object.

##### Returns

`TyprFont`

##### Example

```javascript
const BESCII_URL = 'https://cdn.jsdelivr.net/gh/damianvila/font-bescii@main/fonts/v2.0/Bescii-Mono.ttf';

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let activeFont = null;
let fontReady = false;
let disposed = false;

t.setup(async () => {
	activeFont = await t.loadFont(BESCII_URL);
	fontReady = true;
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	if (!fontReady) return;
	const glyphs = activeFont.characters;
	const cols = activeFont.textureColumns;
	const rows = activeFont.textureRows;
	const startX = -Math.floor(cols / 2);
	const labelBottom = -Math.floor(t.grid.rows / 2) + 11;
	const bottomLimit = Math.floor(t.grid.rows / 2) - rows - 2;
	const startY = Math.max(labelBottom, Math.min(-Math.floor(rows / 2), bottomLimit));
	for (let i = 0; i < glyphs.length; i++) {
		const glyph = glyphs[i];
		t.push();
		t.translate(startX + (i % cols), startY + Math.floor(i / cols));
		t.char(glyph.character);
		t.charColor(120 + (i % cols) * 8, 220, 255 - (i % rows) * 12);
		t.point();
		t.pop();
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEFONT.FONT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: FONT ATLAS DATA', x, y++, 100, 220, 255);
	drawText('Bescii web font feeds glyphs.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (!fontReady) {
		drawText('LOADING BESCII...', x, y++, 255, 225, 140);
		return;
	}
	const names = activeFont.font.names || {};
	const name = names.fontFamily?.en || names.fullName?.en || 'Bescii';
	drawText(`NAME: ${name.slice(0, 28)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### fontSize

#### Get Signature

```ts
get fontSize(): number;
```

Font size used for the glyph atlas.

##### Returns

`number`

##### Example

```javascript
const BESCII_URL = 'https://cdn.jsdelivr.net/gh/damianvila/font-bescii@main/fonts/v2.0/Bescii-Mono.ttf';

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let activeFont = null;
let fontReady = false;
let disposed = false;

t.setup(async () => {
	activeFont = await t.loadFont(BESCII_URL);
	fontReady = true;
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	if (!fontReady) return;
	const glyphs = activeFont.characters;
	const cols = activeFont.textureColumns;
	const rows = activeFont.textureRows;
	const startX = -Math.floor(cols / 2);
	const labelBottom = -Math.floor(t.grid.rows / 2) + 11;
	const bottomLimit = Math.floor(t.grid.rows / 2) - rows - 2;
	const startY = Math.max(labelBottom, Math.min(-Math.floor(rows / 2), bottomLimit));
	for (let i = 0; i < glyphs.length; i++) {
		const glyph = glyphs[i];
		t.push();
		t.translate(startX + (i % cols), startY + Math.floor(i / cols));
		t.char(glyph.character);
		t.charColor(120 + (i % cols) * 8, 220, 255 - (i % rows) * 12);
		t.point();
		t.pop();
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEFONT.FONTSIZE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: FONT ATLAS DATA', x, y++, 100, 220, 255);
	drawText('Bescii web font feeds glyphs.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (!fontReady) {
		drawText('LOADING BESCII...', x, y++, 255, 225, 140);
		return;
	}
	drawText(`FONT SIZE: ${activeFont.fontSize}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### framebuffer

#### Get Signature

```ts
get framebuffer(): TextmodeFramebuffer;
```

Normalized glyph atlas framebuffer used by the ASCII shader.

##### Returns

[`TextmodeFramebuffer`](../../../classes/TextmodeFramebuffer.md)

##### Example

```javascript
const BESCII_URL = 'https://cdn.jsdelivr.net/gh/damianvila/font-bescii@main/fonts/v2.0/Bescii-Mono.ttf';

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let activeFont = null;
let fontReady = false;
let disposed = false;

t.setup(async () => {
	activeFont = await t.loadFont(BESCII_URL);
	fontReady = true;
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	if (!fontReady) return;
	const glyphs = activeFont.characters;
	const cols = activeFont.textureColumns;
	const rows = activeFont.textureRows;
	const startX = -Math.floor(cols / 2);
	const labelBottom = -Math.floor(t.grid.rows / 2) + 11;
	const bottomLimit = Math.floor(t.grid.rows / 2) - rows - 2;
	const startY = Math.max(labelBottom, Math.min(-Math.floor(rows / 2), bottomLimit));
	for (let i = 0; i < glyphs.length; i++) {
		const glyph = glyphs[i];
		t.push();
		t.translate(startX + (i % cols), startY + Math.floor(i / cols));
		t.char(glyph.character);
		t.charColor(120 + (i % cols) * 8, 220, 255 - (i % rows) * 12);
		t.point();
		t.pop();
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEFONT.FRAMEBUFFER', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: FONT ATLAS DATA', x, y++, 100, 220, 255);
	drawText('Bescii web font feeds glyphs.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (!fontReady) {
		drawText('LOADING BESCII...', x, y++, 255, 225, 140);
		return;
	}
	const ready = Boolean(activeFont.framebuffer);
	drawText(`FBO READY: ${ready}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### maxGlyphDimensions

#### Get Signature

```ts
get maxGlyphDimensions(): object;
```

Maximum glyph cell dimensions in pixels.

##### Returns

`object`

| Name | Type |
| ------ | ------ |
| `height` | `number` |
| `width` | `number` |

##### Example

```javascript
const BESCII_URL = 'https://cdn.jsdelivr.net/gh/damianvila/font-bescii@main/fonts/v2.0/Bescii-Mono.ttf';

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let activeFont = null;
let fontReady = false;
let disposed = false;

t.setup(async () => {
	activeFont = await t.loadFont(BESCII_URL);
	fontReady = true;
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	if (!fontReady) return;
	const glyphs = activeFont.characters;
	const cols = activeFont.textureColumns;
	const rows = activeFont.textureRows;
	const startX = -Math.floor(cols / 2);
	const labelBottom = -Math.floor(t.grid.rows / 2) + 11;
	const bottomLimit = Math.floor(t.grid.rows / 2) - rows - 2;
	const startY = Math.max(labelBottom, Math.min(-Math.floor(rows / 2), bottomLimit));
	for (let i = 0; i < glyphs.length; i++) {
		const glyph = glyphs[i];
		t.push();
		t.translate(startX + (i % cols), startY + Math.floor(i / cols));
		t.char(glyph.character);
		t.charColor(120 + (i % cols) * 8, 220, 255 - (i % rows) * 12);
		t.point();
		t.pop();
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEFONT.MAXGLYPHDIMENSIONS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: FONT ATLAS DATA', x, y++, 100, 220, 255);
	drawText('Bescii web font feeds glyphs.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (!fontReady) {
		drawText('LOADING BESCII...', x, y++, 255, 225, 140);
		return;
	}
	const dims = activeFont.maxGlyphDimensions;
	const size = dims.width + 'x' + dims.height;
	drawText(`MAX GLYPH: ${size}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### textureColumns

#### Get Signature

```ts
get textureColumns(): number;
```

Number of columns in the glyph atlas.

##### Returns

`number`

##### Example

```javascript
const BESCII_URL = 'https://cdn.jsdelivr.net/gh/damianvila/font-bescii@main/fonts/v2.0/Bescii-Mono.ttf';

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let activeFont = null;
let fontReady = false;
let disposed = false;

t.setup(async () => {
	activeFont = await t.loadFont(BESCII_URL);
	fontReady = true;
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	if (!fontReady) return;
	const glyphs = activeFont.characters;
	const cols = activeFont.textureColumns;
	const rows = activeFont.textureRows;
	const startX = -Math.floor(cols / 2);
	const labelBottom = -Math.floor(t.grid.rows / 2) + 11;
	const bottomLimit = Math.floor(t.grid.rows / 2) - rows - 2;
	const startY = Math.max(labelBottom, Math.min(-Math.floor(rows / 2), bottomLimit));
	for (let i = 0; i < glyphs.length; i++) {
		const glyph = glyphs[i];
		t.push();
		t.translate(startX + (i % cols), startY + Math.floor(i / cols));
		t.char(glyph.character);
		t.charColor(120 + (i % cols) * 8, 220, 255 - (i % rows) * 12);
		t.point();
		t.pop();
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEFONT.TEXTURECOLUMNS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: FONT ATLAS DATA', x, y++, 100, 220, 255);
	drawText('Bescii web font feeds glyphs.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (!fontReady) {
		drawText('LOADING BESCII...', x, y++, 255, 225, 140);
		return;
	}
	drawText(`COLUMNS: ${activeFont.textureColumns}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### textureRows

#### Get Signature

```ts
get textureRows(): number;
```

Number of rows in the glyph atlas.

##### Returns

`number`

##### Example

```javascript
const BESCII_URL = 'https://cdn.jsdelivr.net/gh/damianvila/font-bescii@main/fonts/v2.0/Bescii-Mono.ttf';

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let activeFont = null;
let fontReady = false;
let disposed = false;

t.setup(async () => {
	activeFont = await t.loadFont(BESCII_URL);
	fontReady = true;
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	if (!fontReady) return;
	const glyphs = activeFont.characters;
	const cols = activeFont.textureColumns;
	const rows = activeFont.textureRows;
	const startX = -Math.floor(cols / 2);
	const labelBottom = -Math.floor(t.grid.rows / 2) + 11;
	const bottomLimit = Math.floor(t.grid.rows / 2) - rows - 2;
	const startY = Math.max(labelBottom, Math.min(-Math.floor(rows / 2), bottomLimit));
	for (let i = 0; i < glyphs.length; i++) {
		const glyph = glyphs[i];
		t.push();
		t.translate(startX + (i % cols), startY + Math.floor(i / cols));
		t.char(glyph.character);
		t.charColor(120 + (i % cols) * 8, 220, 255 - (i % rows) * 12);
		t.point();
		t.pop();
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEFONT.TEXTUREROWS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: FONT ATLAS DATA', x, y++, 100, 220, 255);
	drawText('Bescii web font feeds glyphs.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (!fontReady) {
		drawText('LOADING BESCII...', x, y++, 255, 225, 140);
		return;
	}
	drawText(`ROWS: ${activeFont.textureRows}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Methods

### dispose()

```ts
dispose(): void;
```

Dispose of all resources used by this font manager.

#### Returns

`void`

#### Example

```javascript
const BESCII_URL = 'https://cdn.jsdelivr.net/gh/damianvila/font-bescii@main/fonts/v2.0/Bescii-Mono.ttf';

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let activeFont = null;
let fontReady = false;
let disposableFont = null;
let disposed = false;

t.setup(async () => {
	activeFont = await t.loadFont(BESCII_URL);
	disposableFont = await t.loadFont(BESCII_URL, false);
	fontReady = true;
});

t.mouseClicked(() => {
	if (disposableFont && !disposed) {
		disposableFont.dispose();
		disposed = true;
	}
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	if (!fontReady) return;
	const glyphs = activeFont.characters;
	const cols = activeFont.textureColumns;
	const rows = activeFont.textureRows;
	const startX = -Math.floor(cols / 2);
	const labelBottom = -Math.floor(t.grid.rows / 2) + 11;
	const bottomLimit = Math.floor(t.grid.rows / 2) - rows - 2;
	const startY = Math.max(labelBottom, Math.min(-Math.floor(rows / 2), bottomLimit));
	for (let i = 0; i < glyphs.length; i++) {
		const glyph = glyphs[i];
		t.push();
		t.translate(startX + (i % cols), startY + Math.floor(i / cols));
		t.char(glyph.character);
		t.charColor(120 + (i % cols) * 8, 220, 255 - (i % rows) * 12);
		t.point();
		t.pop();
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEFONT.DISPOSE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: FONT ATLAS DATA', x, y++, 100, 220, 255);
	drawText('Bescii web font feeds glyphs.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	if (!fontReady) {
		drawText('LOADING BESCII...', x, y++, 255, 225, 140);
		return;
	}
	const state = disposed ? 'OFF' : 'ON';
	drawText(`STATUS: ${state}`, x, y++, 140, 255, 180);
	drawText('CLICK TO DISPOSE', x, y++, 255, 225, 140);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Overrides

```ts
Disposable.dispose
```
