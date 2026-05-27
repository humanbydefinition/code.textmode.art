---
layout: doc
editLink: true
title: TextmodeTexture
description: Dynamic texture source for external canvas or video content.
category: Classes
api: true
namespace: media
kind: Class
lastModified: 2026-05-27
hasConstructor: false
---

[textmode.js](../../../index.md) / [media](../index.md) / TextmodeTexture

# Class: TextmodeTexture

Dynamic texture source for external canvas or video content.

Create one with [Textmodifier.createTexture](../../../classes/Textmodifier.md#createtexture) and draw it with
[Textmodifier.image](../../../classes/Textmodifier.md#image). The texture refreshes each frame so it can mirror
renderers such as three.js, p5.js, Babylon.js, or hydra-synth.

## Extends

- [`TextmodeSource`](TextmodeSource.md)

## Extended by

- [`TextmodeVideo`](TextmodeVideo.md)

## Accessors

### height

#### Get Signature

```ts
get height(): number;
```

Ideal draw height in grid cells.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let source = null;
let disposed = false;

function createImageUrl() {
	const canvas = document.createElement('canvas');
	canvas.width = 96;
	canvas.height = 64;
	const ctx = canvas.getContext('2d');
	const gradient = ctx.createLinearGradient(0, 0, 96, 64);
	gradient.addColorStop(0, '#0ea5e9');
	gradient.addColorStop(1, '#f59e0b');
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, 96, 64);
	ctx.fillStyle = '#020617';
	ctx.fillRect(16, 16, 64, 32);
	ctx.fillStyle = '#f8fafc';
	ctx.fillRect(28, 26, 40, 12);
	return canvas.toDataURL();
}

function configureSource(value) {
	value.characters(' .:-=+*#%@');
	value.charColorMode('sampled');
	value.cellColorMode('fixed');
}

t.setup(async () => {
	source = await t.loadImage(createImageUrl());
	configureSource(source);
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
	t.background(5, 8, 18);
	if (!source || disposed) return;
	t.image(source, Math.floor(t.grid.cols * 0.55), Math.floor(t.grid.rows * 0.55));
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODESOURCE.HEIGHT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SOURCE SETTINGS', x, y++, 100, 220, 255);
	drawText('Image source conversion API.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const h = source ? source.height : 0;
	drawText(`HEIGHT: ${h}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`height`](TextmodeSource.md#height)

***

### originalHeight

#### Get Signature

```ts
get originalHeight(): number;
```

Original source height in pixels.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let source = null;
let disposed = false;

function createImageUrl() {
	const canvas = document.createElement('canvas');
	canvas.width = 96;
	canvas.height = 64;
	const ctx = canvas.getContext('2d');
	const gradient = ctx.createLinearGradient(0, 0, 96, 64);
	gradient.addColorStop(0, '#0ea5e9');
	gradient.addColorStop(1, '#f59e0b');
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, 96, 64);
	ctx.fillStyle = '#020617';
	ctx.fillRect(16, 16, 64, 32);
	ctx.fillStyle = '#f8fafc';
	ctx.fillRect(28, 26, 40, 12);
	return canvas.toDataURL();
}

function configureSource(value) {
	value.characters(' .:-=+*#%@');
	value.charColorMode('sampled');
	value.cellColorMode('fixed');
}

t.setup(async () => {
	source = await t.loadImage(createImageUrl());
	configureSource(source);
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
	t.background(5, 8, 18);
	if (!source || disposed) return;
	t.image(source, Math.floor(t.grid.cols * 0.55), Math.floor(t.grid.rows * 0.55));
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODESOURCE.ORIGINALHEIGHT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SOURCE SETTINGS', x, y++, 100, 220, 255);
	drawText('Image source conversion API.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const h = source ? source.originalHeight : 0;
	drawText(`ORIG H: ${h}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`originalHeight`](TextmodeSource.md#originalheight)

***

### originalWidth

#### Get Signature

```ts
get originalWidth(): number;
```

Original source width in pixels.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let source = null;
let disposed = false;

function createImageUrl() {
	const canvas = document.createElement('canvas');
	canvas.width = 96;
	canvas.height = 64;
	const ctx = canvas.getContext('2d');
	const gradient = ctx.createLinearGradient(0, 0, 96, 64);
	gradient.addColorStop(0, '#0ea5e9');
	gradient.addColorStop(1, '#f59e0b');
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, 96, 64);
	ctx.fillStyle = '#020617';
	ctx.fillRect(16, 16, 64, 32);
	ctx.fillStyle = '#f8fafc';
	ctx.fillRect(28, 26, 40, 12);
	return canvas.toDataURL();
}

function configureSource(value) {
	value.characters(' .:-=+*#%@');
	value.charColorMode('sampled');
	value.cellColorMode('fixed');
}

t.setup(async () => {
	source = await t.loadImage(createImageUrl());
	configureSource(source);
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
	t.background(5, 8, 18);
	if (!source || disposed) return;
	t.image(source, Math.floor(t.grid.cols * 0.55), Math.floor(t.grid.rows * 0.55));
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODESOURCE.ORIGINALWIDTH', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SOURCE SETTINGS', x, y++, 100, 220, 255);
	drawText('Image source conversion API.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const w = source ? source.originalWidth : 0;
	drawText(`ORIG W: ${w}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`originalWidth`](TextmodeSource.md#originalwidth)

***

### source

#### Get Signature

```ts
get source(): HTMLCanvasElement | HTMLVideoElement;
```

Source element this texture captures.

##### Returns

`HTMLCanvasElement` \| `HTMLVideoElement`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let texture = null;
let sourceCanvas = null;

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

t.setup(() => {
	sourceCanvas = document.createElement('canvas');
	sourceCanvas.width = 120;
	sourceCanvas.height = 80;
	texture = t.createTexture(sourceCanvas);
	texture.characters(' .:-=+*#%@');
});

t.draw(() => {
	t.background(8, 10, 18);
	if (!texture) return;
	const ctx = sourceCanvas.getContext('2d');
	ctx.fillStyle = '#0a0d1a';
	ctx.fillRect(0, 0, sourceCanvas.width, sourceCanvas.height);
	ctx.fillStyle = '#38bdf8';
	ctx.beginPath();
	ctx.arc(60 + Math.sin(t.frameCount * 0.05) * 30, 40, 18, 0, Math.PI * 2);
	ctx.fill();
	t.image(texture, Math.floor(t.grid.cols * 0.5), Math.floor(t.grid.rows * 0.5));
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODETEXTURE.SOURCE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: BACKING ELEMENT', x, y++, 100, 220, 255);
	drawText('Texture keeps its source.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const size = sourceCanvas ? sourceCanvas.width + 'x' + sourceCanvas.height : '0x0';
	drawText(`SIZE: ${size}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### texture

#### Get Signature

```ts
get texture(): WebGLTexture;
```

WebGL texture backing this source.

##### Returns

`WebGLTexture`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let source = null;
let disposed = false;

function createImageUrl() {
	const canvas = document.createElement('canvas');
	canvas.width = 96;
	canvas.height = 64;
	const ctx = canvas.getContext('2d');
	const gradient = ctx.createLinearGradient(0, 0, 96, 64);
	gradient.addColorStop(0, '#0ea5e9');
	gradient.addColorStop(1, '#f59e0b');
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, 96, 64);
	ctx.fillStyle = '#020617';
	ctx.fillRect(16, 16, 64, 32);
	ctx.fillStyle = '#f8fafc';
	ctx.fillRect(28, 26, 40, 12);
	return canvas.toDataURL();
}

function configureSource(value) {
	value.characters(' .:-=+*#%@');
	value.charColorMode('sampled');
	value.cellColorMode('fixed');
}

t.setup(async () => {
	source = await t.loadImage(createImageUrl());
	configureSource(source);
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
	t.background(5, 8, 18);
	if (!source || disposed) return;
	t.image(source, Math.floor(t.grid.cols * 0.55), Math.floor(t.grid.rows * 0.55));
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODESOURCE.TEXTURE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SOURCE SETTINGS', x, y++, 100, 220, 255);
	drawText('Image source conversion API.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const state = source && source.texture ? 'READY' : 'WAIT';
	drawText(`TEXTURE: ${state}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`texture`](TextmodeSource.md#texture)

***

### width

#### Get Signature

```ts
get width(): number;
```

Ideal draw width in grid cells.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let source = null;
let disposed = false;

function createImageUrl() {
	const canvas = document.createElement('canvas');
	canvas.width = 96;
	canvas.height = 64;
	const ctx = canvas.getContext('2d');
	const gradient = ctx.createLinearGradient(0, 0, 96, 64);
	gradient.addColorStop(0, '#0ea5e9');
	gradient.addColorStop(1, '#f59e0b');
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, 96, 64);
	ctx.fillStyle = '#020617';
	ctx.fillRect(16, 16, 64, 32);
	ctx.fillStyle = '#f8fafc';
	ctx.fillRect(28, 26, 40, 12);
	return canvas.toDataURL();
}

function configureSource(value) {
	value.characters(' .:-=+*#%@');
	value.charColorMode('sampled');
	value.cellColorMode('fixed');
}

t.setup(async () => {
	source = await t.loadImage(createImageUrl());
	configureSource(source);
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
	t.background(5, 8, 18);
	if (!source || disposed) return;
	t.image(source, Math.floor(t.grid.cols * 0.55), Math.floor(t.grid.rows * 0.55));
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODESOURCE.WIDTH', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SOURCE SETTINGS', x, y++, 100, 220, 255);
	drawText('Image source conversion API.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const w = source ? source.width : 0;
	drawText(`WIDTH: ${w}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`width`](TextmodeSource.md#width)

## Methods

### background()

```ts
background(
   colorOrGray, 
   g?, 
   b?, 
   a?): this;
```

Set the background color used for transparent pixels.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `colorOrGray` | `string` \| `number` \| [`TextmodeColor`](../../../classes/TextmodeColor.md) | A grayscale value (0-255), hex string ('#RGB', '#RRGGBB', '#RRGGBBAA'), or TextmodeColor instance |
| `g?` | `number` | Optional green component (0-255) if using RGB format, or alpha (0-255) when using grayscale form |
| `b?` | `number` | Optional blue component (0-255) if using RGB format |
| `a?` | `number` | Optional alpha component (0-255) if using RGBA format |

#### Returns

`this`

This instance for chaining.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let sourceA, sourceB;

function createTransparentCanvas() {
	const canvas = document.createElement('canvas');
	canvas.width = 128;
	canvas.height = 128;
	const ctx = canvas.getContext('2d');
	if (!ctx) return canvas;

	ctx.clearRect(0, 0, 128, 128);
	ctx.lineWidth = 10;
	ctx.strokeStyle = '#ffffff';
	ctx.strokeRect(20, 20, 88, 88);

	ctx.fillStyle = '#ffffff';
	ctx.beginPath();
	ctx.arc(64, 64, 30, 0, Math.PI * 2);
	ctx.fill();

	return canvas;
}

t.setup(() => {
	const canvas = createTransparentCanvas();

	sourceA = t.createTexture(canvas);
	sourceA.characters(' .:-=+*#%@');

	sourceB = t.createTexture(canvas);
	sourceB.characters(' .:-=+*#%@');
});

t.draw(() => {
	t.background(6, 10, 22);
	if (!sourceA || !sourceB) return;

	const time = t.frameCount * 0.05;
	const pulse = 0.5 + 0.5 * Math.sin(time);
	sourceB.background(pulse * 255, 100, 255 - pulse * 155);

	const imgW = 20;
	const imgH = 12;

	t.push();
	t.translate(-12, 0);
	t.image(sourceA, imgW, imgH);
	t.pop();

	t.push();
	t.translate(12, 0);
	t.image(sourceB, imgW, imgH);
	t.pop();
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

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODESOURCE.BACKGROUND', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TRANSPARENT PIXEL FILL', x, y++, 100, 220, 255);
	drawText('Fills transparent pixels before mapping.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('Left  : DEFAULT BLACK FALLBACK', x, y++, 140, 180, 255);
	drawText('Right : CUSTOM BG PULSE FILL', x, y++, 255, 180, 100);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`background`](TextmodeSource.md#background)

***

### brightnessRange()

```ts
brightnessRange(start, end): this;
```

Capture only source pixels whose brightness is inside the inclusive byte range.

Pixels outside the range are discarded by the built-in brightness converter,
leaving the corresponding textmode cells transparent.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `start` | `number` | Minimum brightness to capture, from 0 (black) to 255 (white). |
| `end` | `number` | Maximum brightness to capture, from 0 (black) to 255 (white). |

#### Returns

`this`

This instance for chaining.

#### Example

```javascript
const IMAGE_URL = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80';
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
});

const labelLayer = t.layers.add();
const ranges = [
	{ label: '0-84', start: 0, end: 84, characters: ' .:-', charColor: '#38bdf8' },
	{ label: '85-170', start: 85, end: 170, characters: '=+*#', charColor: '#facc15' },
	{ label: '171-255', start: 171, end: 255, characters: '%@', charColor: '#f8fafc' },
];

let rangeSources = [];

function drawRangeSource(source, x, y, width, height) {
	t.push();
	t.translate(x, y);
	t.image(source, width, height);
	t.pop();
}

t.setup(async () => {
	rangeSources = await Promise.all(
		ranges.map(async (range) => {
			const source = await t.loadImage(IMAGE_URL);
			source.brightnessRange(range.start, range.end);
			source.characters(range.characters);
			source.charColorMode('fixed');
			source.charColor(range.charColor);
			source.cellColorMode('fixed');
			source.cellColor('#00000000');
			return source;
		})
	);
});

t.draw(() => {
	t.background(4, 7, 18);
	if (rangeSources.length === 0) return;

	const gap = Math.max(4, Math.floor(t.grid.cols * 0.035));
	const panelWidth = Math.max(12, Math.floor((t.grid.cols - gap * 4) / 3));
	const panelHeight = Math.max(10, Math.min(t.grid.rows - 12, Math.floor(panelWidth * 0.72)));
	const totalWidth = panelWidth * 3 + gap * 2;
	const startX = -Math.floor(totalWidth * 0.5) + Math.floor(panelWidth * 0.5);
	const y = -1;

	for (let i = 0; i < rangeSources.length; i++) {
		const x = startX + i * (panelWidth + gap);
		drawRangeSource(rangeSources[i], x, y, panelWidth, panelHeight);
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

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODESOURCE.BRIGHTNESSRANGE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SUB-BRIGHTNESS CONVERSIONS', x, y++, 100, 220, 255);
	drawText('Filters characters by brightness range.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('Left  : 0-84   (Shadows)', x, y++, 56, 189, 248);
	drawText('Mid   : 85-170 (Midtones)', x, y++, 250, 204, 21);
	drawText('Right : 171-255(Highlights)', x, y++, 248, 250, 252);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`brightnessRange`](TextmodeSource.md#brightnessrange)

***

### cellColor()

```ts
cellColor(
   colorOrGray, 
   g?, 
   b?, 
   a?): this;
```

Set the cell color used when [cellColorMode](TextmodeSource.md#cellcolormode) is `'fixed'`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `colorOrGray` | `string` \| `number` \| [`TextmodeColor`](../../../classes/TextmodeColor.md) | A grayscale value (0-255), hex string ('#RGB', '#RRGGBB', '#RRGGBBAA'), or TextmodeColor instance |
| `g?` | `number` | Optional green component (0-255) if using RGB format, or alpha (0-255) when using grayscale form |
| `b?` | `number` | Optional blue component (0-255) if using RGB format |
| `a?` | `number` | Optional alpha component (0-255) if using RGBA format |

#### Returns

`this`

This instance for chaining.

#### Example

```javascript
const IMAGE_URL = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80';
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
});

const labelLayer = t.layers.add();
let techSource = null;
let red = 40;
let blue = 80;

t.setup(async () => {
	techSource = await t.loadImage(IMAGE_URL);
	techSource.characters(' .:-=+*#%@');
	techSource.charColorMode('fixed').charColor(255);
	techSource.cellColorMode('fixed');
});

t.draw(() => {
	t.background(6, 10, 22);

	if (!techSource) return;

	const time = t.frameCount * 0.04;
	red = Math.round(40 + 40 * Math.sin(time));
	blue = Math.round(80 + 40 * Math.cos(time * 0.7));

	techSource.cellColor(red, 40, blue);

	t.push();
	t.translate(0, 0);
	t.image(techSource, 24, 14);
	t.pop();
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

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODESOURCE.CELLCOLOR', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SET CONSTANT CELL COLOR', x, y++, 100, 220, 255);
	drawText('Sets color used in fixed coloring mode.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CELL COLOR: RGB(${red},40,${blue})`, x, y++, 140, 190, 255);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`cellColor`](TextmodeSource.md#cellcolor)

***

### cellColorMode()

```ts
cellColorMode(mode): this;
```

Set whether cell color is sampled from the source or fixed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mode` | `"fixed"` \| `"sampled"` | Cell color mode. |

#### Returns

`this`

This instance for chaining.

#### Example

```javascript
const IMAGE_URL = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80';
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
});

const labelLayer = t.layers.add();
let sourceA = null;
let sourceB = null;

t.setup(async () => {
	sourceA = await t.loadImage(IMAGE_URL);
	sourceA.characters(' .:-=+*#%@');
	sourceA.cellColorMode('sampled');

	sourceB = await t.loadImage(IMAGE_URL);
	sourceB.characters(' .:-=+*#%@');
	sourceB.cellColorMode('fixed').cellColor(20, 30, 60);
});

t.draw(() => {
	t.background(6, 10, 22);

	if (!sourceA || !sourceB) return;

	const imgW = 20;
	const imgH = 12;

	t.push();
	t.translate(-12, 0);
	t.image(sourceA, imgW, imgH);
	t.pop();

	t.push();
	t.translate(12, 0);
	t.image(sourceB, imgW, imgH);
	t.pop();
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

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODESOURCE.CELLCOLORMODE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SET CELL COLORING MODE', x, y++, 100, 220, 255);
	drawText('Sets mode used for cell backgrounds.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CELL COLOR MODE: sampled & fixed', x, y++, 140, 190, 255);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`cellColorMode`](TextmodeSource.md#cellcolormode)

***

### characters()

```ts
characters(chars): this;
```

Set the characters used for brightness mapping.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chars` | `string` | Characters to map from dark to bright. |

#### Returns

`this`

This instance for chaining.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let source = null;
let disposed = false;

function createImageUrl() {
	const canvas = document.createElement('canvas');
	canvas.width = 96;
	canvas.height = 64;
	const ctx = canvas.getContext('2d');
	const gradient = ctx.createLinearGradient(0, 0, 96, 64);
	gradient.addColorStop(0, '#0ea5e9');
	gradient.addColorStop(1, '#f59e0b');
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, 96, 64);
	ctx.fillStyle = '#020617';
	ctx.fillRect(16, 16, 64, 32);
	ctx.fillStyle = '#f8fafc';
	ctx.fillRect(28, 26, 40, 12);
	return canvas.toDataURL();
}

function configureSource(value) {
	value.characters(' .:-=+*#%@');
	value.charColorMode('sampled');
	value.cellColorMode('fixed');
}

t.setup(async () => {
	source = await t.loadImage(createImageUrl());
	configureSource(source);
	source.characters(' .oO@');
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
	t.background(5, 8, 18);
	if (!source || disposed) return;
	t.image(source, Math.floor(t.grid.cols * 0.55), Math.floor(t.grid.rows * 0.55));
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODESOURCE.CHARACTERS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SOURCE SETTINGS', x, y++, 100, 220, 255);
	drawText('Image source conversion API.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const chars = ' .oO@';
	drawText(`CHARS: ${chars}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`characters`](TextmodeSource.md#characters)

***

### charColor()

```ts
charColor(
   colorOrGray, 
   g?, 
   b?, 
   a?): this;
```

Set the character color used when [charColorMode](TextmodeSource.md#charcolormode) is `'fixed'`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `colorOrGray` | `string` \| `number` \| [`TextmodeColor`](../../../classes/TextmodeColor.md) | A grayscale value (0-255), hex string ('#RGB', '#RRGGBB', '#RRGGBBAA'), or TextmodeColor instance |
| `g?` | `number` | Optional green component (0-255) if using RGB format, or alpha (0-255) when using grayscale form |
| `b?` | `number` | Optional blue component (0-255) if using RGB format |
| `a?` | `number` | Optional alpha component (0-255) if using RGBA format |

#### Returns

`this`

This instance for chaining.

#### Example

```javascript
const IMAGE_URL = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80';
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
});

const labelLayer = t.layers.add();
let techSource = null;
let r = 150;
let g = 150;

t.setup(async () => {
	techSource = await t.loadImage(IMAGE_URL);
	techSource.characters(' .:-=+*#%@');
	techSource.charColorMode('fixed');
});

t.draw(() => {
	t.background(6, 10, 22);

	if (!techSource) return;

	const time = t.frameCount * 0.04;
	r = Math.round(150 + 105 * Math.sin(time));
	g = Math.round(150 + 105 * Math.cos(time * 0.7));

	techSource.charColor(r, g, 100);

	t.push();
	t.translate(0, 0);
	t.image(techSource, 24, 14);
	t.pop();
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

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODESOURCE.CHARCOLOR', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SET CONSTANT CHARACTER COLOR', x, y++, 100, 220, 255);
	drawText('Sets color used in fixed coloring mode.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CHAR COLOR: RGB(${r},${g},100)`, x, y++, 140, 190, 255);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`charColor`](TextmodeSource.md#charcolor)

***

### charColorMode()

```ts
charColorMode(mode): this;
```

Set whether character color is sampled from the source or fixed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mode` | `"fixed"` \| `"sampled"` | Character color mode. |

#### Returns

`this`

This instance for chaining.

#### Example

```javascript
const IMAGE_URL = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80';
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
});

const labelLayer = t.layers.add();
let sourceA = null;
let sourceB = null;

t.setup(async () => {
	sourceA = await t.loadImage(IMAGE_URL);
	sourceA.characters(' .:-=+*#%@');
	sourceA.charColorMode('sampled');

	sourceB = await t.loadImage(IMAGE_URL);
	sourceB.characters(' .:-=+*#%@');
	sourceB.charColorMode('fixed').charColor(140, 255, 180);
});

t.draw(() => {
	t.background(6, 10, 22);

	if (!sourceA || !sourceB) return;

	const imgW = 20;
	const imgH = 12;

	t.push();
	t.translate(-12, 0);
	t.image(sourceA, imgW, imgH);
	t.pop();

	t.push();
	t.translate(12, 0);
	t.image(sourceB, imgW, imgH);
	t.pop();
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

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODESOURCE.CHARCOLORMODE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SET CHARACTER COLORING MODE', x, y++, 100, 220, 255);
	drawText('Sets mode used for glyph foregrounds.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CHAR COLOR MODE: sampled & fixed', x, y++, 140, 190, 255);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`charColorMode`](TextmodeSource.md#charcolormode)

***

### charRotation()

```ts
charRotation(degrees): this;
```

Rotate generated characters.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `degrees` | `number` | Rotation in degrees. |

#### Returns

`this`

This instance for chaining.

#### Example

```javascript
const IMAGE_URL = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80';
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
});

const labelLayer = t.layers.add();
let pointerSource = null;

t.setup(async () => {
	pointerSource = await t.loadImage(IMAGE_URL);
	pointerSource.characters(' .:-=+*#%@');
});

t.draw(() => {
	t.background(6, 10, 22);

	if (!pointerSource) return;

	const imgW = 20;
	const imgH = 12;

	t.push();
	t.translate(-12, 0);
	pointerSource.charRotation(0);
	t.image(pointerSource, imgW, imgH);
	t.pop();

	t.push();
	t.translate(12, 0);
	pointerSource.charRotation(90);
	t.image(pointerSource, imgW, imgH);
	t.pop();
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

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODESOURCE.CHARROTATION', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: GLYPH ROTATION ANGLE', x, y++, 100, 220, 255);
	drawText('Rotates mapped characters in degrees.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('ROTATION ANGLE: 0 & 90 deg', x, y++, 140, 190, 255);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`charRotation`](TextmodeSource.md#charrotation)

***

### clearConversions()

```ts
clearConversions(): this;
```

Clear this source's conversion stack and return to single-mode conversion.

The active mode selected through [conversionMode](TextmodeSource.md#conversionmode) is preserved.

#### Returns

`this`

This instance for chaining.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let source = null;
let disposed = false;

function createImageUrl() {
	const canvas = document.createElement('canvas');
	canvas.width = 96;
	canvas.height = 64;
	const ctx = canvas.getContext('2d');
	const gradient = ctx.createLinearGradient(0, 0, 96, 64);
	gradient.addColorStop(0, '#0ea5e9');
	gradient.addColorStop(1, '#f59e0b');
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, 96, 64);
	ctx.fillStyle = '#020617';
	ctx.fillRect(16, 16, 64, 32);
	ctx.fillStyle = '#f8fafc';
	ctx.fillRect(28, 26, 40, 12);
	return canvas.toDataURL();
}

function configureSource(value) {
	value.characters(' .:-=+*#%@');
	value.charColorMode('sampled');
	value.cellColorMode('fixed');
}

t.setup(async () => {
	source = await t.loadImage(createImageUrl());
	configureSource(source);
	source.conversions([{ mode: 'brightness', characters: ' .:', charColor: '#38bdf8' }]);
	source.clearConversions();
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
	t.background(5, 8, 18);
	if (!source || disposed) return;
	t.image(source, Math.floor(t.grid.cols * 0.55), Math.floor(t.grid.rows * 0.55));
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODESOURCE.CLEARCONVERSIONS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SOURCE SETTINGS', x, y++, 100, 220, 255);
	drawText('Image source conversion API.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('STACK: CLEARED', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`clearConversions`](TextmodeSource.md#clearconversions)

***

### conversionMode()

```ts
conversionMode(mode): this;
```

Select the conversion mode for this source.

`textmode.js` includes only a single built-in conversion strategy `'brightness'`.

Additional conversion strategies may be provided via add-on libraries.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mode` | `string` | Conversion mode to use. |

#### Returns

`this`

This instance for chaining.

#### Example

```javascript
const IMAGE_URL = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80';
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
});

const labelLayer = t.layers.add();
let source = null;

t.setup(async () => {
	source = await t.loadImage(IMAGE_URL);
	source.conversionMode('brightness');
	source.characters(' .:-=+*#%@');
});

t.draw(() => {
	t.background(4, 7, 18);
	t.background(0);
	if (!source) return;

	t.image(source, source.width, source.height);
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

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODESOURCE.CONVERSIONMODE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SET IMAGE CONVERSION MODE', x, y++, 100, 220, 255);
	drawText('Sets mode used for pixel mapping.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONVERSION MODE: brightness', x, y++, 140, 190, 255);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`conversionMode`](TextmodeSource.md#conversionmode)

***

### conversions()

```ts
conversions(steps): this;
```

Set an ordered conversion stack for this source.

Each step renders the same source with its own conversion mode and optional
overrides. Later steps are drawn on top of earlier steps.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `steps` | [`TextmodeConversionStep`](../../conversion/interfaces/TextmodeConversionStep.md)[] | Ordered conversion passes to apply when this source is drawn. |

#### Returns

`this`

This instance for chaining.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let source = null;

function createImageUrl() {
	const canvas = document.createElement('canvas');
	Object.assign(canvas, { width: 128, height: 80 });
	const ctx = canvas.getContext('2d');
	const gradient = ctx.createLinearGradient(0, 0, 128, 80);
	gradient.addColorStop(0, '#020617');
	gradient.addColorStop(0.45, '#0ea5e9');
	gradient.addColorStop(1, '#f8fafc');
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, 128, 80);
	ctx.fillStyle = '#f97316';
	ctx.fillRect(15, 16, 34, 44);
	ctx.fillStyle = '#fde68a';
	ctx.fillRect(78, 22, 34, 34);
	return canvas.toDataURL();
}

function configureSource(source) {
	source.characters(' .:-=+*#%@').charColorMode('sampled').cellColorMode('fixed').cellColor('#020617');
}

function brightnessPass(start, end, characters, charColor) {
	return {
		mode: 'brightness',
		brightnessStart: start,
		brightnessEnd: end,
		characters,
		charColorMode: 'fixed',
		charColor,
	};
}

t.setup(async () => {
	source = await t.loadImage(createImageUrl());
	configureSource(source);
	source.conversions([
		brightnessPass(0, 84, ' .:', '#38bdf8'),
		brightnessPass(85, 169, '-=+', '#facc15'),
		brightnessPass(170, 255, '*#@', '#f8fafc'),
	]);
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
	t.background(4, 7, 16);
	if (!source) return;

	const width = Math.max(12, Math.floor(t.grid.cols * 0.42));
	const height = Math.max(8, Math.floor(t.grid.rows * 0.4));
	const y = Math.floor(t.grid.rows * 0.12);
	t.push();
	t.translate(0, y);
	t.image(source, width, height);
	t.pop();
	drawText('STACKED SOURCE', -7, y - Math.floor(height / 2) - 2, 255, 225, 140);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODESOURCE.CONVERSIONS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: ORDERED SOURCE PASSES', x, y++, 100, 220, 255);
	drawText('Three brightness ranges stack.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('PASSES: 3', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`conversions`](TextmodeSource.md#conversions)

***

### dispose()

```ts
dispose(): void;
```

Dispose of the resource and free associated WebGL textures.

This should be called when the resource is no longer needed to prevent memory leaks.
Resources created via [Textmodifier.loadImage](../../../classes/Textmodifier.md#loadimage), [Textmodifier.loadVideo](../../../classes/Textmodifier.md#loadvideo),
and [Textmodifier.createTexture](../../../classes/Textmodifier.md#createtexture) are automatically disposed when the
[Textmodifier](../../../classes/Textmodifier.md) instance is destroyed, but you can call this manually to free memory earlier.

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let source = null;
let disposed = false;

function createImageUrl() {
	const canvas = document.createElement('canvas');
	canvas.width = 96;
	canvas.height = 64;
	const ctx = canvas.getContext('2d');
	const gradient = ctx.createLinearGradient(0, 0, 96, 64);
	gradient.addColorStop(0, '#0ea5e9');
	gradient.addColorStop(1, '#f59e0b');
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, 96, 64);
	ctx.fillStyle = '#020617';
	ctx.fillRect(16, 16, 64, 32);
	ctx.fillStyle = '#f8fafc';
	ctx.fillRect(28, 26, 40, 12);
	return canvas.toDataURL();
}

function configureSource(value) {
	value.characters(' .:-=+*#%@');
	value.charColorMode('sampled');
	value.cellColorMode('fixed');
}

t.mouseClicked(() => {
	if (source && !disposed) {
		source.dispose();
		disposed = true;
	}
});

t.setup(async () => {
	source = await t.loadImage(createImageUrl());
	configureSource(source);
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
	t.background(5, 8, 18);
	if (!source || disposed) return;
	t.image(source, Math.floor(t.grid.cols * 0.55), Math.floor(t.grid.rows * 0.55));
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODESOURCE.DISPOSE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SOURCE SETTINGS', x, y++, 100, 220, 255);
	drawText('Image source conversion API.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const state = disposed ? 'Disposed' : 'Active';
	drawText(`STATUS: ${state}`, x, y++, 140, 255, 180);
	drawText('CLICK TO DISPOSE', x, y++, 255, 225, 140);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`dispose`](TextmodeSource.md#dispose)

***

### flipX()

```ts
flipX(v?): this;
```

Flip the source horizontally.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | `number` \| `boolean` | `true` | Whether to flip horizontally. |

#### Returns

`this`

This instance for chaining.

#### Example

```javascript
const IMAGE_URL = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80';
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
});

const labelLayer = t.layers.add();
let sourceA = null;
let sourceB = null;

t.setup(async () => {
	sourceA = await t.loadImage(IMAGE_URL);
	sourceA.characters(' .:-=+*#%@');
	sourceA.flipX(false);

	sourceB = await t.loadImage(IMAGE_URL);
	sourceB.characters(' .:-=+*#%@');
	sourceB.flipX(true);
});

t.draw(() => {
	t.background(6, 10, 22);

	if (!sourceA || !sourceB) return;

	const imgW = 20;
	const imgH = 12;

	t.push();
	t.translate(-12, 0);
	t.image(sourceA, imgW, imgH);
	t.pop();

	t.push();
	t.translate(12, 0);
	t.image(sourceB, imgW, imgH);
	t.pop();
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

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODESOURCE.FLIPX', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: FLIP SOURCE HORIZONTALLY', x, y++, 100, 220, 255);
	drawText('Flips image horizontally before mapping.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('FLIP X STATUS: false & true', x, y++, 140, 190, 255);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`flipX`](TextmodeSource.md#flipx)

***

### flipY()

```ts
flipY(v?): this;
```

Flip the source vertically.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | `number` \| `boolean` | `true` | Whether to flip vertically. |

#### Returns

`this`

This instance for chaining.

#### Example

```javascript
const IMAGE_URL = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80';
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
});

const labelLayer = t.layers.add();
let sourceA = null;
let sourceB = null;

t.setup(async () => {
	sourceA = await t.loadImage(IMAGE_URL);
	sourceA.characters(' .:-=+*#%@');
	sourceA.flipY(false);

	sourceB = await t.loadImage(IMAGE_URL);
	sourceB.characters(' .:-=+*#%@');
	sourceB.flipY(true);
});

t.draw(() => {
	t.background(6, 10, 22);

	if (!sourceA || !sourceB) return;

	const imgW = 20;
	const imgH = 12;

	t.push();
	t.translate(-12, 0);
	t.image(sourceA, imgW, imgH);
	t.pop();

	t.push();
	t.translate(12, 0);
	t.image(sourceB, imgW, imgH);
	t.pop();
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

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODESOURCE.FLIPY', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: FLIP SOURCE VERTICALLY', x, y++, 100, 220, 255);
	drawText('Flips image vertically before mapping.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('FLIP Y STATUS: false & true', x, y++, 140, 190, 255);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`flipY`](TextmodeSource.md#flipy)

***

### invert()

```ts
invert(v?): this;
```

Enable or disable source color inversion.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | `number` \| `boolean` | `true` | Whether to invert colors. |

#### Returns

`this`

This instance for chaining.

#### Example

```javascript
const IMAGE_URL = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80';
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
});

const labelLayer = t.layers.add();
let gradientSource = null;

t.setup(async () => {
	gradientSource = await t.loadImage(IMAGE_URL);
	gradientSource.characters(' .:-=+*#%@');
});

t.draw(() => {
	t.background(6, 10, 22);

	if (!gradientSource) return;

	const imgW = 20;
	const imgH = 12;

	t.push();
	t.translate(-12, 0);
	gradientSource.invert(false);
	t.image(gradientSource, imgW, imgH);
	t.pop();

	t.push();
	t.translate(12, 0);
	gradientSource.invert(true);
	t.image(gradientSource, imgW, imgH);
	t.pop();
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

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODESOURCE.INVERT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: INVERT SOURCE BRIGHTNESS', x, y++, 100, 220, 255);
	drawText('Inverts pixel colors before mapping.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('INVERTED STATUS: false & true', x, y++, 140, 190, 255);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeSource`](TextmodeSource.md).[`invert`](TextmodeSource.md#invert)
