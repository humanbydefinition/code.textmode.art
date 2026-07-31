---
layout: doc
editLink: true
title: TextmodeTileset
description: Bitmap tileset glyph source for textmode rendering.
category: Classes
api: true
namespace: fonts
kind: Class
lastModified: 2026-07-31
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
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
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
	drawText('CONCEPT: GLYPH ATLAS DATA', x, y++, 100, 220, 255);
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

- [`TextmodeGlyphAtlas`](../interfaces/TextmodeGlyphAtlas.md)

## Accessors

| Accessor | Description |
| ------ | ------ |
| [cellDimensions](TextmodeTileset/accessors/cellDimensions.md) | Combined glyph cell dimensions in pixels. |
| [cellHeight](TextmodeTileset/accessors/cellHeight.md) | Height of each glyph cell in pixels. |
| [cellWidth](TextmodeTileset/accessors/cellWidth.md) | Width of each glyph cell in pixels. |
| [characterMap](TextmodeTileset/accessors/characterMap.md) | Lookup table from character string to glyph entry. |
| [characters](TextmodeTileset/accessors/characters.md) | Ordered glyph entries available in this atlas. |
| [columns](TextmodeTileset/accessors/columns.md) | Number of glyph columns in the atlas texture. |
| [fontFramebuffer](TextmodeTileset/accessors/fontFramebuffer.md) | Tileset atlas framebuffer backing this glyph atlas. |
| [fontSize](TextmodeTileset/accessors/fontSize.md) | Effective font size used to scale tileset cells. |
| [framebuffer](TextmodeTileset/accessors/framebuffer.md) | Framebuffer containing the atlas texture data. |
| [maxGlyphDimensions](TextmodeTileset/accessors/maxGlyphDimensions.md) | Effective tile dimensions used by the layer grid. |
| [nativeCellDimensions](TextmodeTileset/accessors/nativeCellDimensions.md) | Authored tile dimensions from the source tileset in pixels. |
| [rows](TextmodeTileset/accessors/rows.md) | Number of glyph rows in the atlas texture. |
| [textureColumns](TextmodeTileset/accessors/textureColumns.md) | Number of columns in the repacked tileset atlas. |
| [textureRows](TextmodeTileset/accessors/textureRows.md) | Number of rows in the repacked tileset atlas. |

## Methods

| Method | Description |
| ------ | ------ |
| [dispose](TextmodeTileset/methods/dispose.md) | Dispose the tileset and release its shared atlas resources. |
