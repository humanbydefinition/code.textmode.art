---
layout: doc
editLink: true
title: TextmodeTileset
description: Manages a bitmap tileset as a normalized glyph atlas.
category: Classes
api: true
namespace: fonts
kind: Class
lastModified: 2026-05-13
hasConstructor: false
---

[textmode.js](../../../index.md) / [fonts](../index.md) / TextmodeTileset

# Class: TextmodeTileset

Manages a bitmap tileset as a normalized glyph atlas.

Tiles are imported from a source sheet, repacked into the same contiguous atlas layout
used by vector fonts, and exposed through the shared glyph-atlas contract.

`fontSize()` changes on a tileset only affect the effective output cell size.
The native atlas stays at the authored tile resolution.

## Example

```javascript
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	t.background(5, 7, 18);

	label('TextmodeTileset.creation', -6, [255, 225, 140]);
	label('t.loadTileset(options)', 0, [180, 200, 220]);
	label('async bitmap loading', 4, [150, 170, 200]);
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

Returns the effective tile cell dimensions used by the layer grid.

##### Returns

`object`

| Name | Type |
| ------ | ------ |
| `height` | `number` |
| `width` | `number` |

##### Example

```javascript
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

let tileset = null;

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.setup(async () => {
	tileset = await t.loadTileset(
		{
			source: 'https://littlebitspace.com/resources/fonts/T64.png',
			columns: TILE_COLUMNS,
			rows: TILE_ROWS,
			count: TILE_COUNT,
		},
		false
	);
});

t.draw(() => {
	t.background(5, 7, 18);

	if (!tileset) {
		label('loading tileset...', 0, [255, 225, 140]);
		return;
	}

	const dims = tileset.cellDimensions;

	label('TextmodeTileset.cellDimensions', -4, [255, 225, 140]);
	label(`cellDimensions: ${dims.width} x ${dims.height} px`, 2, [120, 205, 255]);
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

Returns the effective tile cell height used by the layer grid.

##### Returns

`number`

##### Example

```javascript
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

let tileset = null;

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.setup(async () => {
	tileset = await t.loadTileset(
		{
			source: 'https://littlebitspace.com/resources/fonts/T64.png',
			columns: TILE_COLUMNS,
			rows: TILE_ROWS,
			count: TILE_COUNT,
		},
		false
	);
});

t.draw(() => {
	t.background(5, 7, 18);

	if (!tileset) {
		label('loading tileset...', 0, [255, 225, 140]);
		return;
	}

	label('TextmodeTileset.cellHeight', -4, [255, 225, 140]);
	label('cellHeight: ' + tileset.cellHeight + ' px', 2, [120, 205, 255]);
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

Returns the effective tile cell width used by the layer grid.

##### Returns

`number`

##### Example

```javascript
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

let tileset = null;

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.setup(async () => {
	tileset = await t.loadTileset(
		{
			source: 'https://littlebitspace.com/resources/fonts/T64.png',
			columns: TILE_COLUMNS,
			rows: TILE_ROWS,
			count: TILE_COUNT,
		},
		false
	);
});

t.draw(() => {
	t.background(5, 7, 18);

	if (!tileset) {
		label('loading tileset...', 0, [255, 225, 140]);
		return;
	}

	label('TextmodeTileset.cellWidth', -4, [255, 225, 140]);
	label('cellWidth: ' + tileset.cellWidth + ' px', 2, [120, 205, 255]);
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

Returns the character-to-glyph lookup map for the tileset.

##### Returns

`Map`\<`string`, [`TextmodeGlyph`](../type-aliases/TextmodeGlyph.md)\>

##### Example

```javascript
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

let tileset = null;

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.setup(async () => {
	tileset = await t.loadTileset(
		{
			source: 'https://littlebitspace.com/resources/fonts/T64.png',
			columns: TILE_COLUMNS,
			rows: TILE_ROWS,
			count: TILE_COUNT,
		},
		false
	);
});

t.draw(() => {
	t.background(5, 7, 18);

	if (!tileset) {
		label('loading tileset...', 0, [255, 225, 140]);
		return;
	}

	const charIndex = Math.floor(t.frameCount * 0.1) % tileset.characters.length;
	const glyph = tileset.characters[charIndex];
	const currentChar = glyph.character;
	const mapGlyph = tileset.characterMap.get(currentChar);

	label('TextmodeTileset.characterMap', -8, [255, 225, 140]);

	if (mapGlyph) {
		t.push();
		t.translate(0, 0);
		t.char(currentChar);
		t.charColor(255, 255, 255);
		t.point();
		t.pop();

		label('char: ' + currentChar, 6, [180, 200, 220]);
		label('map.size: ' + tileset.characterMap.size, 10, [150, 170, 200]);
	}
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

Returns the array of glyphs generated from the tileset mapping.

##### Returns

readonly [`TextmodeGlyph`](../type-aliases/TextmodeGlyph.md)[]

##### Example

```javascript
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

let tileset = null;

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.setup(async () => {
	tileset = await t.loadTileset(
		{
			source: 'https://littlebitspace.com/resources/fonts/T64.png',
			columns: TILE_COLUMNS,
			rows: TILE_ROWS,
			count: TILE_COUNT,
		},
		false
	);
});

t.draw(() => {
	t.background(5, 7, 18);

	if (!tileset) {
		label('loading tileset...', 0, [255, 225, 140]);
		return;
	}

	const chars = tileset.characters;
	const cols = 16;
	const startX = -Math.floor(cols / 2);
	const startY = -Math.floor(chars.length / cols / 2);

	for (let i = 0; i < chars.length; i++) {
		const glyph = chars[i];
		t.push();
		t.translate(startX + (i % cols), startY + Math.floor(i / cols));

		// Use the character index safely.
		t.char(glyph.character);

		t.charColor(255, 255, 255);
		t.point();
		t.pop();
	}

	label('TextmodeTileset.characters', Math.floor(t.grid.rows / 2) - 3, [255, 225, 140]);
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

Returns the number of columns in the normalized glyph atlas.

##### Returns

`number`

##### Example

```javascript
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

let tileset = null;

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.setup(async () => {
	tileset = await t.loadTileset(
		{
			source: 'https://littlebitspace.com/resources/fonts/T64.png',
			columns: TILE_COLUMNS,
			rows: TILE_ROWS,
			count: TILE_COUNT,
		},
		false
	);
});

t.draw(() => {
	t.background(5, 7, 18);

	if (!tileset) {
		label('loading tileset...', 0, [255, 225, 140]);
		return;
	}

	label('TextmodeTileset.columns', -4, [255, 225, 140]);
	label('columns: ' + tileset.columns, 2, [120, 205, 255]);
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

Returns the tileset atlas framebuffer backing this glyph atlas.

##### Returns

[`TextmodeFramebuffer`](../../../classes/TextmodeFramebuffer.md)

##### Example

```javascript
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

let tileset = null;

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.setup(async () => {
	tileset = await t.loadTileset(
		{
			source: 'https://littlebitspace.com/resources/fonts/T64.png',
			columns: TILE_COLUMNS,
			rows: TILE_ROWS,
			count: TILE_COUNT,
		},
		false
	);
});

t.draw(() => {
	t.background(5, 7, 18);

	if (!tileset) {
		label('loading tileset...', 0, [255, 225, 140]);
		return;
	}

	const atlas = tileset.fontFramebuffer;

	label('TextmodeTileset.fontFramebuffer', -6, [255, 225, 140]);
	label('backing atlas framebuffer', -2, [180, 200, 220]);
	label(atlas.width + ' x ' + atlas.height + ' px', 4, [150, 170, 200]);
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

Returns the effective font size used to scale tileset cells.

##### Returns

`number`

##### Example

```javascript
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

let tileset = null;

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.setup(async () => {
	tileset = await t.loadTileset(
		{
			source: 'https://littlebitspace.com/resources/fonts/T64.png',
			columns: TILE_COLUMNS,
			rows: TILE_ROWS,
			count: TILE_COUNT,
		},
		false
	);
});

t.draw(() => {
	t.background(5, 7, 18);

	if (!tileset) {
		label('loading tileset...', 0, [255, 225, 140]);
		return;
	}

	label('TextmodeTileset.fontSize', -4, [255, 225, 140]);
	label('fontSize: ' + tileset.fontSize, 2, [120, 205, 255]);
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

Returns the normalized glyph atlas framebuffer used by the ASCII shader.

##### Returns

[`TextmodeFramebuffer`](../../../classes/TextmodeFramebuffer.md)

##### Example

```javascript
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

let tileset = null;

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.setup(async () => {
	tileset = await t.loadTileset(
		{
			source: 'https://littlebitspace.com/resources/fonts/T64.png',
			columns: TILE_COLUMNS,
			rows: TILE_ROWS,
			count: TILE_COUNT,
		},
		false
	);
});

t.draw(() => {
	t.background(5, 7, 18);

	if (!tileset) {
		label('loading tileset...', 0, [255, 225, 140]);
		return;
	}

	const atlas = tileset.framebuffer;

	label('TextmodeTileset.framebuffer', -6, [255, 225, 140]);
	label(atlas.width + ' x ' + atlas.height + ' px', 0, [180, 200, 220]);
	label(tileset.columns + ' cols x ' + tileset.rows + ' rows', 4, [150, 170, 200]);
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

Returns the effective tile dimensions used by the layer grid.

##### Returns

`object`

| Name | Type |
| ------ | ------ |
| `height` | `number` |
| `width` | `number` |

##### Example

```javascript
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

let tileset = null;

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.setup(async () => {
	tileset = await t.loadTileset(
		{
			source: 'https://littlebitspace.com/resources/fonts/T64.png',
			columns: TILE_COLUMNS,
			rows: TILE_ROWS,
			count: TILE_COUNT,
		},
		false
	);
});

t.draw(() => {
	t.background(5, 7, 18);

	if (!tileset) {
		label('loading tileset...', 0, [255, 225, 140]);
		return;
	}

	const dims = tileset.maxGlyphDimensions;

	label('TextmodeTileset.maxGlyphDimensions', -4, [255, 225, 140]);
	label(`maxGlyphDimensions: ${dims.width} x ${dims.height} px`, 2, [120, 205, 255]);
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

Returns the authored tile dimensions from the source tileset in pixels.

##### Returns

`object`

| Name | Type |
| ------ | ------ |
| `height` | `number` |
| `width` | `number` |

##### Example

```javascript
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

let tileset = null;

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.setup(async () => {
	tileset = await t.loadTileset(
		{
			source: 'https://littlebitspace.com/resources/fonts/T64.png',
			columns: TILE_COLUMNS,
			rows: TILE_ROWS,
			count: TILE_COUNT,
		},
		false
	);
});

t.draw(() => {
	t.background(5, 7, 18);

	if (!tileset) {
		label('loading tileset...', 0, [255, 225, 140]);
		return;
	}

	const dims = tileset.nativeCellDimensions;

	label('TextmodeTileset.nativeCellDimensions', -4, [255, 225, 140]);
	label(`nativeCellDimensions: ${dims.width} x ${dims.height} px`, 2, [120, 205, 255]);
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

Returns the number of rows in the normalized glyph atlas.

##### Returns

`number`

##### Example

```javascript
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

let tileset = null;

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.setup(async () => {
	tileset = await t.loadTileset(
		{
			source: 'https://littlebitspace.com/resources/fonts/T64.png',
			columns: TILE_COLUMNS,
			rows: TILE_ROWS,
			count: TILE_COUNT,
		},
		false
	);
});

t.draw(() => {
	t.background(5, 7, 18);

	if (!tileset) {
		label('loading tileset...', 0, [255, 225, 140]);
		return;
	}

	label('TextmodeTileset.rows', -4, [255, 225, 140]);
	label('rows: ' + tileset.rows, 2, [120, 205, 255]);
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

Returns the number of columns in the repacked tileset texture atlas.

##### Returns

`number`

##### Example

```javascript
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

let tileset = null;

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.setup(async () => {
	tileset = await t.loadTileset(
		{
			source: 'https://littlebitspace.com/resources/fonts/T64.png',
			columns: TILE_COLUMNS,
			rows: TILE_ROWS,
			count: TILE_COUNT,
		},
		false
	);
});

t.draw(() => {
	t.background(5, 7, 18);

	if (!tileset) {
		label('loading tileset...', 0, [255, 225, 140]);
		return;
	}

	label('TextmodeTileset.textureColumns', -4, [255, 225, 140]);
	label('textureColumns: ' + tileset.textureColumns, 2, [120, 205, 255]);
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

Returns the number of rows in the repacked tileset texture atlas.

##### Returns

`number`

##### Example

```javascript
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

let tileset = null;

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.setup(async () => {
	tileset = await t.loadTileset(
		{
			source: 'https://littlebitspace.com/resources/fonts/T64.png',
			columns: TILE_COLUMNS,
			rows: TILE_ROWS,
			count: TILE_COUNT,
		},
		false
	);
});

t.draw(() => {
	t.background(5, 7, 18);

	if (!tileset) {
		label('loading tileset...', 0, [255, 225, 140]);
		return;
	}

	label('TextmodeTileset.textureRows', -4, [255, 225, 140]);
	label('textureRows: ' + tileset.textureRows, 2, [120, 205, 255]);
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
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

let tileset = null;
let disposed = false;

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.setup(async () => {
	tileset = await t.loadTileset(
		{
			source: 'https://littlebitspace.com/resources/fonts/T64.png',
			columns: TILE_COLUMNS,
			rows: TILE_ROWS,
			count: TILE_COUNT,
		},
		false
	);
});

t.draw(() => {
	t.background(5, 7, 18);

	label('click to dispose tileset', -4, [255, 225, 140]);
	label(disposed ? 'tileset disposed' : 'tileset active', 0);
	label('T64  16 x 16  8 x 8 cells', 4);
	label('this frees atlas resources early', 8, [120, 205, 255]);
});

t.mouseClicked(() => {
	if (!tileset || disposed) {
		return;
	}

	tileset.dispose();
	disposed = true;
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Overrides

```ts
Disposable.dispose
```
