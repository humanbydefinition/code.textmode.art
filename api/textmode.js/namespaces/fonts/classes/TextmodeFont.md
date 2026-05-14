---
layout: doc
editLink: true
title: TextmodeFont
description: Manages the font used for rendering characters via layering.TextmodeLayer.loadFont.
category: Classes
api: true
namespace: fonts
kind: Class
lastModified: 2026-05-14
hasConstructor: false
---

[textmode.js](../../../index.md) / [fonts](../index.md) / TextmodeFont

# Class: TextmodeFont

Manages the font used for rendering characters via [layering.TextmodeLayer.loadFont](../../layering/classes/TextmodeLayer.md#loadfont).

This class coordinates font loading, character extraction, texture atlas creation,
and provides character information.

Each [layering.TextmodeLayer](../../layering/classes/TextmodeLayer.md) has its own instance of this class to allow for
layer-specific font configurations.

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

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
	t.background(6, 10, 22);

	drawCenteredText('TextmodeFont.creation', -6, [240, 245, 255]);
	drawCenteredText('t.loadFont(path)', 0, [180, 200, 220]);
	drawCenteredText('async font loading', 4, [150, 170, 200]);
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

Returns the character map for O(1) lookups.

##### Returns

`Map`\<`string`, [`TextmodeGlyph`](../type-aliases/TextmodeGlyph.md)\>

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

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
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;
	const charIndex = Math.floor(time * 2) % t.font.characters.length;
	const glyph = t.font.characters[charIndex];
	const currentChar = glyph ? glyph.character : '?';
	const mapGlyph = t.font.characterMap.get(currentChar);

	drawCenteredText('TextmodeFont.characterMap', -8, [240, 245, 255]);

	if (mapGlyph) {
		const r = Math.round(mapGlyph.color[0] * 255);
		const g = Math.round(mapGlyph.color[1] * 255);
		const b = Math.round(mapGlyph.color[2] * 255);

		t.push();
		t.translate(0, 0);
		t.char(currentChar);
		t.charColor(255, 255, 255);
		t.point();
		t.pop();

		drawCenteredText('char: ' + currentChar, 6, [180, 200, 220]);
		drawCenteredText('color: ' + r + ', ' + g + ', ' + b, 10, [80, 255, 140]);
	}

	drawCenteredText('map.size: ' + t.font.characterMap.size, 14, [150, 170, 200]);
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

Returns the array of [TextmodeGlyph](../type-aliases/TextmodeGlyph.md) objects in the font.

##### Returns

readonly [`TextmodeGlyph`](../type-aliases/TextmodeGlyph.md)[]

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

t.draw(() => {
	t.background(6, 10, 22);

	const chars = t.font.characters;
	const cols = 16;
	const startX = -Math.floor(cols / 2);
	const startY = -Math.floor(chars.length / cols / 2);

	for (let i = 0; i < chars.length; i++) {
		const glyph = chars[i];
		t.push();
		t.translate(startX + (i % cols), startY + Math.floor(i / cols));
		t.char(glyph.character);
		t.charColor(255, 255, 255);
		t.point();
		t.pop();
	}
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

Returns the Typr.js font object.

##### Returns

`TyprFont`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

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
	t.background(6, 10, 22);

	const font = t.font.font;
	const head = font.head;
	const hhea = font.hhea;
	const maxp = font.maxp;

	drawCenteredText('TextmodeFont.font', -8, [240, 245, 255]);

	if (head && hhea && maxp) {
		drawCenteredText('unitsPerEm: ' + head.unitsPerEm, 0, [180, 200, 220]);
		drawCenteredText('ascender: ' + hhea.ascender, 4, [150, 170, 200]);
		drawCenteredText('descender: ' + hhea.descender, 8, [150, 170, 200]);
		drawCenteredText('numGlyphs: ' + maxp.numGlyphs, 12, [80, 255, 140]);
	}
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

Returns the font size used for the texture atlas.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

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
	t.background(6, 10, 22);

	drawCenteredText('TextmodeFont.fontSize', -8, [240, 245, 255]);
	drawCenteredText('layer.font.fontSize: ' + t.layers.base.font.fontSize, 0, [180, 200, 220]);
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
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

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
	t.background(6, 10, 22);

	const atlas = t.font.framebuffer;

	drawCenteredText('TextmodeFont.framebuffer', -6, [240, 245, 255]);
	drawCenteredText(atlas.width + ' x ' + atlas.height + ' px', 0, [180, 200, 220]);
	drawCenteredText(t.font.textureColumns + ' cols x ' + t.font.textureRows + ' rows', 4, [150, 170, 200]);
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

Returns the maximum dimensions of a glyph in the font in pixels.

##### Returns

`object`

| Name | Type |
| ------ | ------ |
| `height` | `number` |
| `width` | `number` |

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

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
	t.background(6, 10, 22);

	const dims = t.font.maxGlyphDimensions;

	drawCenteredText('TextmodeFont.maxGlyphDimensions', -8, [240, 245, 255]);
	drawCenteredText(dims.width + ' x ' + dims.height + ' px', 0, [180, 200, 220]);
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

Returns the number of columns in the texture atlas.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

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
	t.background(6, 10, 22);

	const cols = t.font.textureColumns;

	drawCenteredText('TextmodeFont.textureColumns', -6, [240, 245, 255]);
	drawCenteredText('textureColumns: ' + cols, 4, [180, 200, 220]);
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

Returns the number of rows in the texture atlas.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

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
	t.background(6, 10, 22);

	const rows = t.font.textureRows;

	drawCenteredText('TextmodeFont.textureRows', -6, [240, 245, 255]);
	drawCenteredText('textureRows: ' + rows, 4, [180, 200, 220]);
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
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

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
	t.background(6, 10, 22);

	drawCenteredText('TextmodeFont.dispose', -6, [240, 245, 255]);
	drawCenteredText('font.dispose()', 0, [180, 200, 220]);
	drawCenteredText('releases GPU resources', 4, [150, 170, 200]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Overrides

```ts
Disposable.dispose
```
