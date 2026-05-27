---
layout: doc
editLink: true
title: TextmodeTileset
description: Bitmap tileset glyph source for textmode rendering.
category: Classes
api: true
namespace: fonts
kind: Class
lastModified: 2026-05-27
hasConstructor: false
---

[textmode.js](../../../index.md) / [fonts](../index.md) / TextmodeTileset

# Class: TextmodeTileset

Bitmap tileset glyph source for textmode rendering.

Tiles are imported from a source sheet, repacked into the same contiguous atlas layout
used by vector fonts, and exposed through the shared glyph-atlas contract.

`fontSize()` changes on a tileset only affect the effective output cell size.
The native atlas stays at the authored tile resolution.

## Example

```javascript
const T64_URL = 'https://littlebitspace.com/resources/fonts/T64.png';
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let tileset = null;

function tilesetOptions() {
	return {
		source: T64_URL,
		columns: TILE_COLUMNS,
		rows: TILE_ROWS,
		count: TILE_COUNT,
		fontSize: 16,
	};
}

t.setup(async () => {
	tileset = await t.loadTileset(tilesetOptions());
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
	t.background(5, 7, 18);
	if (!tileset) return;
	const startX = -Math.floor(TILE_COLUMNS / 2);
	const startY = -Math.floor(TILE_ROWS / 2);
	for (let i = 0; i < TILE_COUNT; i++) {
		t.push();
		t.translate(startX + (i % TILE_COLUMNS), startY + Math.floor(i / TILE_COLUMNS));
		t.char(i);
		t.charColor(120 + i * 6, 220, 255 - i * 7);
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

	drawText('TEXTMODETILESET.CREATION', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TILESET ATLAS DATA', x, y++, 100, 220, 255);
	drawText('T64 web tileset feeds glyphs.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('T64 READY', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Extends

- `Disposable`

## Implements

- `TextmodeGlyphAtlas`

## Accessors

### cellDimensions

#### Get Signature

```ts
get cellDimensions(): object;
```

Effective tile cell dimensions used by the layer grid.

##### Returns

`object`

| Name | Type |
| ------ | ------ |
| `height` | `number` |
| `width` | `number` |

##### Example

```javascript
const T64_URL = 'https://littlebitspace.com/resources/fonts/T64.png';
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let tileset = null;

function tilesetOptions() {
	return {
		source: T64_URL,
		columns: TILE_COLUMNS,
		rows: TILE_ROWS,
		count: TILE_COUNT,
		fontSize: 16,
	};
}

t.setup(async () => {
	tileset = await t.loadTileset(tilesetOptions());
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
	t.background(5, 7, 18);
	if (!tileset) return;
	const startX = -Math.floor(TILE_COLUMNS / 2);
	const startY = -Math.floor(TILE_ROWS / 2);
	for (let i = 0; i < TILE_COUNT; i++) {
		t.push();
		t.translate(startX + (i % TILE_COLUMNS), startY + Math.floor(i / TILE_COLUMNS));
		t.char(i);
		t.charColor(120 + i * 6, 220, 255 - i * 7);
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

	drawText('TEXTMODETILESET.CELLDIMENSIONS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TILESET ATLAS DATA', x, y++, 100, 220, 255);
	drawText('T64 web tileset feeds glyphs.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const d = tileset.cellDimensions;
	drawText(`CELL: ${d.width}x${d.height}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
TextmodeGlyphAtlas.cellDimensions
```

***

### cellHeight

#### Get Signature

```ts
get cellHeight(): number;
```

Effective tile cell height used by the layer grid.

##### Returns

`number`

##### Example

```javascript
const T64_URL = 'https://littlebitspace.com/resources/fonts/T64.png';
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let tileset = null;

function tilesetOptions() {
	return {
		source: T64_URL,
		columns: TILE_COLUMNS,
		rows: TILE_ROWS,
		count: TILE_COUNT,
		fontSize: 16,
	};
}

t.setup(async () => {
	tileset = await t.loadTileset(tilesetOptions());
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
	t.background(5, 7, 18);
	if (!tileset) return;
	const startX = -Math.floor(TILE_COLUMNS / 2);
	const startY = -Math.floor(TILE_ROWS / 2);
	for (let i = 0; i < TILE_COUNT; i++) {
		t.push();
		t.translate(startX + (i % TILE_COLUMNS), startY + Math.floor(i / TILE_COLUMNS));
		t.char(i);
		t.charColor(120 + i * 6, 220, 255 - i * 7);
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

	drawText('TEXTMODETILESET.CELLHEIGHT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TILESET ATLAS DATA', x, y++, 100, 220, 255);
	drawText('T64 web tileset feeds glyphs.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`HEIGHT: ${tileset.cellHeight}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
TextmodeGlyphAtlas.cellHeight
```

***

### cellWidth

#### Get Signature

```ts
get cellWidth(): number;
```

Effective tile cell width used by the layer grid.

##### Returns

`number`

##### Example

```javascript
const T64_URL = 'https://littlebitspace.com/resources/fonts/T64.png';
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let tileset = null;

function tilesetOptions() {
	return {
		source: T64_URL,
		columns: TILE_COLUMNS,
		rows: TILE_ROWS,
		count: TILE_COUNT,
		fontSize: 16,
	};
}

t.setup(async () => {
	tileset = await t.loadTileset(tilesetOptions());
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
	t.background(5, 7, 18);
	if (!tileset) return;
	const startX = -Math.floor(TILE_COLUMNS / 2);
	const startY = -Math.floor(TILE_ROWS / 2);
	for (let i = 0; i < TILE_COUNT; i++) {
		t.push();
		t.translate(startX + (i % TILE_COLUMNS), startY + Math.floor(i / TILE_COLUMNS));
		t.char(i);
		t.charColor(120 + i * 6, 220, 255 - i * 7);
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

	drawText('TEXTMODETILESET.CELLWIDTH', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TILESET ATLAS DATA', x, y++, 100, 220, 255);
	drawText('T64 web tileset feeds glyphs.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`WIDTH: ${tileset.cellWidth}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
TextmodeGlyphAtlas.cellWidth
```

***

### characterMap

#### Get Signature

```ts
get characterMap(): Map<string, TextmodeGlyph>;
```

Character-to-glyph lookup map for the tileset.

##### Returns

`Map`\<`string`, [`TextmodeGlyph`](../type-aliases/TextmodeGlyph.md)\>

##### Example

```javascript
const T64_URL = 'https://littlebitspace.com/resources/fonts/T64.png';
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let tileset = null;

function tilesetOptions() {
	return {
		source: T64_URL,
		columns: TILE_COLUMNS,
		rows: TILE_ROWS,
		count: TILE_COUNT,
		fontSize: 16,
	};
}

t.setup(async () => {
	tileset = await t.loadTileset(tilesetOptions());
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
	t.background(5, 7, 18);
	if (!tileset) return;
	const startX = -Math.floor(TILE_COLUMNS / 2);
	const startY = -Math.floor(TILE_ROWS / 2);
	for (let i = 0; i < TILE_COUNT; i++) {
		t.push();
		t.translate(startX + (i % TILE_COLUMNS), startY + Math.floor(i / TILE_COLUMNS));
		t.char(i);
		t.charColor(120 + i * 6, 220, 255 - i * 7);
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

	drawText('TEXTMODETILESET.CHARACTERMAP', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TILESET ATLAS DATA', x, y++, 100, 220, 255);
	drawText('T64 web tileset feeds glyphs.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`MAP SIZE: ${tileset.characterMap.size}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
TextmodeGlyphAtlas.characterMap
```

***

### characters

#### Get Signature

```ts
get characters(): readonly TextmodeGlyph[];
```

Glyphs generated from the tileset mapping.

##### Returns

readonly [`TextmodeGlyph`](../type-aliases/TextmodeGlyph.md)[]

##### Example

```javascript
const T64_URL = 'https://littlebitspace.com/resources/fonts/T64.png';
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let tileset = null;

function tilesetOptions() {
	return {
		source: T64_URL,
		columns: TILE_COLUMNS,
		rows: TILE_ROWS,
		count: TILE_COUNT,
		fontSize: 16,
	};
}

t.setup(async () => {
	tileset = await t.loadTileset(tilesetOptions());
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
	t.background(5, 7, 18);
	if (!tileset) return;
	const startX = -Math.floor(TILE_COLUMNS / 2);
	const startY = -Math.floor(TILE_ROWS / 2);
	for (let i = 0; i < TILE_COUNT; i++) {
		t.push();
		t.translate(startX + (i % TILE_COLUMNS), startY + Math.floor(i / TILE_COLUMNS));
		t.char(i);
		t.charColor(120 + i * 6, 220, 255 - i * 7);
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

	drawText('TEXTMODETILESET.CHARACTERS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TILESET ATLAS DATA', x, y++, 100, 220, 255);
	drawText('T64 web tileset feeds glyphs.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`COUNT: ${tileset.characters.length}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
TextmodeGlyphAtlas.characters
```

***

### columns

#### Get Signature

```ts
get columns(): number;
```

Number of columns in the normalized glyph atlas.

##### Returns

`number`

##### Example

```javascript
const T64_URL = 'https://littlebitspace.com/resources/fonts/T64.png';
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let tileset = null;

function tilesetOptions() {
	return {
		source: T64_URL,
		columns: TILE_COLUMNS,
		rows: TILE_ROWS,
		count: TILE_COUNT,
		fontSize: 16,
	};
}

t.setup(async () => {
	tileset = await t.loadTileset(tilesetOptions());
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
	t.background(5, 7, 18);
	if (!tileset) return;
	const startX = -Math.floor(TILE_COLUMNS / 2);
	const startY = -Math.floor(TILE_ROWS / 2);
	for (let i = 0; i < TILE_COUNT; i++) {
		t.push();
		t.translate(startX + (i % TILE_COLUMNS), startY + Math.floor(i / TILE_COLUMNS));
		t.char(i);
		t.charColor(120 + i * 6, 220, 255 - i * 7);
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

	drawText('TEXTMODETILESET.COLUMNS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TILESET ATLAS DATA', x, y++, 100, 220, 255);
	drawText('T64 web tileset feeds glyphs.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`COLUMNS: ${tileset.columns}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
TextmodeGlyphAtlas.columns
```

***

### fontFramebuffer

#### Get Signature

```ts
get fontFramebuffer(): TextmodeFramebuffer;
```

Tileset atlas framebuffer backing this glyph atlas.

##### Returns

[`TextmodeFramebuffer`](../../../classes/TextmodeFramebuffer.md)

##### Example

```javascript
const T64_URL = 'https://littlebitspace.com/resources/fonts/T64.png';
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let tileset = null;

function tilesetOptions() {
	return {
		source: T64_URL,
		columns: TILE_COLUMNS,
		rows: TILE_ROWS,
		count: TILE_COUNT,
		fontSize: 16,
	};
}

t.setup(async () => {
	tileset = await t.loadTileset(tilesetOptions());
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
	t.background(5, 7, 18);
	if (!tileset) return;
	const startX = -Math.floor(TILE_COLUMNS / 2);
	const startY = -Math.floor(TILE_ROWS / 2);
	for (let i = 0; i < TILE_COUNT; i++) {
		t.push();
		t.translate(startX + (i % TILE_COLUMNS), startY + Math.floor(i / TILE_COLUMNS));
		t.char(i);
		t.charColor(120 + i * 6, 220, 255 - i * 7);
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

	drawText('TEXTMODETILESET.FONTFRAMEBUFFER', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TILESET ATLAS DATA', x, y++, 100, 220, 255);
	drawText('T64 web tileset feeds glyphs.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const ready = Boolean(tileset.fontFramebuffer);
	drawText(`FONT FBO: ${ready}`, x, y++, 140, 255, 180);
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

Effective font size used to scale tileset cells.

##### Returns

`number`

##### Example

```javascript
const T64_URL = 'https://littlebitspace.com/resources/fonts/T64.png';
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let tileset = null;

function tilesetOptions() {
	return {
		source: T64_URL,
		columns: TILE_COLUMNS,
		rows: TILE_ROWS,
		count: TILE_COUNT,
		fontSize: 16,
	};
}

t.setup(async () => {
	tileset = await t.loadTileset(tilesetOptions());
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
	t.background(5, 7, 18);
	if (!tileset) return;
	const startX = -Math.floor(TILE_COLUMNS / 2);
	const startY = -Math.floor(TILE_ROWS / 2);
	for (let i = 0; i < TILE_COUNT; i++) {
		t.push();
		t.translate(startX + (i % TILE_COLUMNS), startY + Math.floor(i / TILE_COLUMNS));
		t.char(i);
		t.charColor(120 + i * 6, 220, 255 - i * 7);
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

	drawText('TEXTMODETILESET.FONTSIZE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TILESET ATLAS DATA', x, y++, 100, 220, 255);
	drawText('T64 web tileset feeds glyphs.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`FONT SIZE: ${tileset.fontSize}`, x, y++, 140, 255, 180);
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
const T64_URL = 'https://littlebitspace.com/resources/fonts/T64.png';
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let tileset = null;

function tilesetOptions() {
	return {
		source: T64_URL,
		columns: TILE_COLUMNS,
		rows: TILE_ROWS,
		count: TILE_COUNT,
		fontSize: 16,
	};
}

t.setup(async () => {
	tileset = await t.loadTileset(tilesetOptions());
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
	t.background(5, 7, 18);
	if (!tileset) return;
	const startX = -Math.floor(TILE_COLUMNS / 2);
	const startY = -Math.floor(TILE_ROWS / 2);
	for (let i = 0; i < TILE_COUNT; i++) {
		t.push();
		t.translate(startX + (i % TILE_COLUMNS), startY + Math.floor(i / TILE_COLUMNS));
		t.char(i);
		t.charColor(120 + i * 6, 220, 255 - i * 7);
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

	drawText('TEXTMODETILESET.FRAMEBUFFER', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TILESET ATLAS DATA', x, y++, 100, 220, 255);
	drawText('T64 web tileset feeds glyphs.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const ready = Boolean(tileset.framebuffer);
	drawText(`FBO READY: ${ready}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
TextmodeGlyphAtlas.framebuffer
```

***

### maxGlyphDimensions

#### Get Signature

```ts
get maxGlyphDimensions(): object;
```

Effective tile dimensions used by the layer grid.

##### Returns

`object`

| Name | Type |
| ------ | ------ |
| `height` | `number` |
| `width` | `number` |

##### Example

```javascript
const T64_URL = 'https://littlebitspace.com/resources/fonts/T64.png';
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let tileset = null;

function tilesetOptions() {
	return {
		source: T64_URL,
		columns: TILE_COLUMNS,
		rows: TILE_ROWS,
		count: TILE_COUNT,
		fontSize: 16,
	};
}

t.setup(async () => {
	tileset = await t.loadTileset(tilesetOptions());
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
	t.background(5, 7, 18);
	if (!tileset) return;
	const startX = -Math.floor(TILE_COLUMNS / 2);
	const startY = -Math.floor(TILE_ROWS / 2);
	for (let i = 0; i < TILE_COUNT; i++) {
		t.push();
		t.translate(startX + (i % TILE_COLUMNS), startY + Math.floor(i / TILE_COLUMNS));
		t.char(i);
		t.charColor(120 + i * 6, 220, 255 - i * 7);
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

	drawText('TEXTMODETILESET.MAXGLYPHDIMENSIONS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TILESET ATLAS DATA', x, y++, 100, 220, 255);
	drawText('T64 web tileset feeds glyphs.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const d = tileset.maxGlyphDimensions;
	drawText(`MAX: ${d.width}x${d.height}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### nativeCellDimensions

#### Get Signature

```ts
get nativeCellDimensions(): object;
```

Authored tile dimensions from the source tileset in pixels.

##### Returns

`object`

| Name | Type |
| ------ | ------ |
| `height` | `number` |
| `width` | `number` |

##### Example

```javascript
const T64_URL = 'https://littlebitspace.com/resources/fonts/T64.png';
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let tileset = null;

function tilesetOptions() {
	return {
		source: T64_URL,
		columns: TILE_COLUMNS,
		rows: TILE_ROWS,
		count: TILE_COUNT,
		fontSize: 16,
	};
}

t.setup(async () => {
	tileset = await t.loadTileset(tilesetOptions());
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
	t.background(5, 7, 18);
	if (!tileset) return;
	const startX = -Math.floor(TILE_COLUMNS / 2);
	const startY = -Math.floor(TILE_ROWS / 2);
	for (let i = 0; i < TILE_COUNT; i++) {
		t.push();
		t.translate(startX + (i % TILE_COLUMNS), startY + Math.floor(i / TILE_COLUMNS));
		t.char(i);
		t.charColor(120 + i * 6, 220, 255 - i * 7);
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

	drawText('TEXTMODETILESET.NATIVECELLDIMENSIONS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TILESET ATLAS DATA', x, y++, 100, 220, 255);
	drawText('T64 web tileset feeds glyphs.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const d = tileset.nativeCellDimensions;
	drawText(`NATIVE: ${d.width}x${d.height}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### rows

#### Get Signature

```ts
get rows(): number;
```

Number of rows in the normalized glyph atlas.

##### Returns

`number`

##### Example

```javascript
const T64_URL = 'https://littlebitspace.com/resources/fonts/T64.png';
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let tileset = null;

function tilesetOptions() {
	return {
		source: T64_URL,
		columns: TILE_COLUMNS,
		rows: TILE_ROWS,
		count: TILE_COUNT,
		fontSize: 16,
	};
}

t.setup(async () => {
	tileset = await t.loadTileset(tilesetOptions());
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
	t.background(5, 7, 18);
	if (!tileset) return;
	const startX = -Math.floor(TILE_COLUMNS / 2);
	const startY = -Math.floor(TILE_ROWS / 2);
	for (let i = 0; i < TILE_COUNT; i++) {
		t.push();
		t.translate(startX + (i % TILE_COLUMNS), startY + Math.floor(i / TILE_COLUMNS));
		t.char(i);
		t.charColor(120 + i * 6, 220, 255 - i * 7);
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

	drawText('TEXTMODETILESET.ROWS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TILESET ATLAS DATA', x, y++, 100, 220, 255);
	drawText('T64 web tileset feeds glyphs.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`ROWS: ${tileset.rows}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
TextmodeGlyphAtlas.rows
```

***

### textureColumns

#### Get Signature

```ts
get textureColumns(): number;
```

Number of columns in the repacked tileset atlas.

##### Returns

`number`

##### Example

```javascript
const T64_URL = 'https://littlebitspace.com/resources/fonts/T64.png';
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let tileset = null;

function tilesetOptions() {
	return {
		source: T64_URL,
		columns: TILE_COLUMNS,
		rows: TILE_ROWS,
		count: TILE_COUNT,
		fontSize: 16,
	};
}

t.setup(async () => {
	tileset = await t.loadTileset(tilesetOptions());
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
	t.background(5, 7, 18);
	if (!tileset) return;
	const startX = -Math.floor(TILE_COLUMNS / 2);
	const startY = -Math.floor(TILE_ROWS / 2);
	for (let i = 0; i < TILE_COUNT; i++) {
		t.push();
		t.translate(startX + (i % TILE_COLUMNS), startY + Math.floor(i / TILE_COLUMNS));
		t.char(i);
		t.charColor(120 + i * 6, 220, 255 - i * 7);
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

	drawText('TEXTMODETILESET.TEXTURECOLUMNS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TILESET ATLAS DATA', x, y++, 100, 220, 255);
	drawText('T64 web tileset feeds glyphs.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`TEX COLS: ${tileset.textureColumns}`, x, y++, 140, 255, 180);
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

Number of rows in the repacked tileset atlas.

##### Returns

`number`

##### Example

```javascript
const T64_URL = 'https://littlebitspace.com/resources/fonts/T64.png';
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let tileset = null;

function tilesetOptions() {
	return {
		source: T64_URL,
		columns: TILE_COLUMNS,
		rows: TILE_ROWS,
		count: TILE_COUNT,
		fontSize: 16,
	};
}

t.setup(async () => {
	tileset = await t.loadTileset(tilesetOptions());
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
	t.background(5, 7, 18);
	if (!tileset) return;
	const startX = -Math.floor(TILE_COLUMNS / 2);
	const startY = -Math.floor(TILE_ROWS / 2);
	for (let i = 0; i < TILE_COUNT; i++) {
		t.push();
		t.translate(startX + (i % TILE_COLUMNS), startY + Math.floor(i / TILE_COLUMNS));
		t.char(i);
		t.charColor(120 + i * 6, 220, 255 - i * 7);
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

	drawText('TEXTMODETILESET.TEXTUREROWS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TILESET ATLAS DATA', x, y++, 100, 220, 255);
	drawText('T64 web tileset feeds glyphs.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`TEX ROWS: ${tileset.textureRows}`, x, y++, 140, 255, 180);
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

Dispose the tileset and release its shared atlas resources.

#### Returns

`void`

#### Example

```javascript
const T64_URL = 'https://littlebitspace.com/resources/fonts/T64.png';
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let tileset = null;

function tilesetOptions() {
	return {
		source: T64_URL,
		columns: TILE_COLUMNS,
		rows: TILE_ROWS,
		count: TILE_COUNT,
		fontSize: 16,
	};
}

let disposed = false;

t.setup(async () => {
	await t.loadTileset(tilesetOptions());
	tileset = await t.loadTileset(tilesetOptions(), false);
});

t.mouseClicked(() => {
	if (tileset && !disposed) {
		tileset.dispose();
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
	t.background(5, 7, 18);
	if (!tileset) return;
	const startX = -Math.floor(TILE_COLUMNS / 2);
	const startY = -Math.floor(TILE_ROWS / 2);
	for (let i = 0; i < TILE_COUNT; i++) {
		t.push();
		t.translate(startX + (i % TILE_COLUMNS), startY + Math.floor(i / TILE_COLUMNS));
		t.char(i);
		t.charColor(120 + i * 6, 220, 255 - i * 7);
		t.point();
		t.pop();
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	let y = -Math.floor(t.grid.rows / 2) + 3;
	const x = left + 3;

	drawText('TEXTMODETILESET.DISPOSE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TILESET ATLAS DATA', x, y++, 100, 220, 255);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`STATUS: ${disposed ? 'OFF' : 'ON'}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Overrides

```ts
Disposable.dispose
```
