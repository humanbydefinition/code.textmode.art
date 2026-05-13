---
layout: doc
editLink: true
title: TextmodeVideo
description: Represents a video element for textmode rendering via Textmodifier.loadVideo.
category: Classes
api: true
namespace: media
kind: Class
lastModified: 2026-05-13
hasConstructor: false
---

[textmode.js](../../../index.md) / [media](../index.md) / TextmodeVideo

# Class: TextmodeVideo

Represents a video element for textmode rendering via [Textmodifier.loadVideo](../../../classes/Textmodifier.md#loadvideo).

It can be drawn to the canvas via [Textmodifier.image](../../../classes/Textmodifier.md#image).

A video uploaded currently runs through an adjustable brightness-converter that converts
the video frames into a textmode representation using characters.
Those adjustable options are available via chainable methods on this class.

## Example

```javascript
const VIDEO_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let video;

function drawLabel(text, y) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(255);

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
	video = await t.loadVideo(VIDEO_URL);
	await video.play();
	video.loop();
	video.characters(' .:-=+*#%@');
});

t.draw(() => {
	t.background(0);
	if (!video) return;

	t.image(video);
	drawLabel('TextmodeVideo via loadVideo()', Math.floor(t.grid.rows / 2) - 2);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Extends

- [`TextmodeTexture`](TextmodeTexture.md)

## Accessors

### currentTime

#### Get Signature

```ts
get currentTime(): number;
```

Current playback time in seconds.

##### Returns

`number`

##### Example

```javascript
const VIDEO_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

let video = null;

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
	video = await t.loadVideo(VIDEO_URL);
	video.characters(' .:-=+*#%@');
	await video.play();
});

t.draw(() => {
	t.background(5, 7, 18);

	if (video) {
		t.image(video, t.grid.cols - 8, t.grid.rows - 10);
		label(`videoElement ${video.videoElement ? 'ready' : 'pending'}`, Math.floor(t.grid.rows * 0.2));
		label(
			`current ${video.currentTime.toFixed(1)}s / ${video.duration.toFixed(1)}s`,
			Math.floor(t.grid.rows * 0.3)
		);
		label(`isPlaying ${video.isPlaying ? 'true' : 'false'}`, Math.floor(t.grid.rows * 0.4), [120, 205, 255]);
	}

	label('click to toggle play / pause', -Math.floor(t.grid.rows * 0.34), [255, 225, 140]);
});

t.mouseClicked(async () => {
	if (!video) {
		return;
	}

	if (video.isPlaying) {
		video.pause();
		return;
	}

	await video.play();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### duration

#### Get Signature

```ts
get duration(): number;
```

Total duration of the video in seconds.

##### Returns

`number`

##### Example

```javascript
const VIDEO_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

let video = null;

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
	video = await t.loadVideo(VIDEO_URL);
	video.characters(' .:-=+*#%@');
	await video.play();
});

t.draw(() => {
	t.background(5, 7, 18);

	if (video) {
		t.image(video, t.grid.cols - 8, t.grid.rows - 10);
		label(`videoElement ${video.videoElement ? 'ready' : 'pending'}`, Math.floor(t.grid.rows * 0.2));
		label(
			`current ${video.currentTime.toFixed(1)}s / ${video.duration.toFixed(1)}s`,
			Math.floor(t.grid.rows * 0.3)
		);
		label(`isPlaying ${video.isPlaying ? 'true' : 'false'}`, Math.floor(t.grid.rows * 0.4), [120, 205, 255]);
	}

	label('click to toggle play / pause', -Math.floor(t.grid.rows * 0.34), [255, 225, 140]);
});

t.mouseClicked(async () => {
	if (!video) {
		return;
	}

	if (video.isPlaying) {
		video.pause();
		return;
	}

	await video.play();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### height

#### Get Signature

```ts
get height(): number;
```

Ideal height in grid cells.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

let source;

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

function createSourceCanvas() {
	const canvas = document.createElement('canvas');
	canvas.width = 128;
	canvas.height = 256;
	const ctx = canvas.getContext('2d');
	if (!ctx) return canvas;

	ctx.fillStyle = '#1e293b';
	ctx.fillRect(0, 0, 128, 256);
	ctx.strokeStyle = '#ffffff';
	ctx.lineWidth = 4;
	ctx.strokeRect(10, 10, 108, 236);

	return canvas;
}

t.setup(() => {
	source = t.createTexture(createSourceCanvas());
	source.characters(' .:-=+*#%@');
});

t.draw(() => {
	t.background(6, 10, 22);

	if (!source) return;

	const h = source.height;

	t.push();
	t.translate(0, 0);
	t.charColor(140, 220, 255, 100);
	t.char('|');
	t.rect(1, h);
	t.pop();

	t.push();
	t.charColor(255, 255, 255);
	t.translate(0, -Math.floor(h / 2));
	t.char('-');
	t.point();
	t.translate(0, h - 1);
	t.char('-');
	t.point();
	t.pop();

	drawCenteredText('TextmodeSource.height', -12, [240, 245, 255]);
	drawCenteredText('The ideal height of the source in grid cells.', -10, [150, 170, 200]);

	drawCenteredText(`${h} CELLS`, 12, [140, 220, 255]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`height`](TextmodeTexture.md#height)

***

### isPlaying

#### Get Signature

```ts
get isPlaying(): boolean;
```

Whether the video is currently playing.

##### Returns

`boolean`

##### Example

```javascript
const VIDEO_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

let video = null;

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
	video = await t.loadVideo(VIDEO_URL);
	video.characters(' .:-=+*#%@');
	await video.play();
});

t.draw(() => {
	t.background(5, 7, 18);

	if (video) {
		t.image(video, t.grid.cols - 8, t.grid.rows - 10);
		label(`videoElement ${video.videoElement ? 'ready' : 'pending'}`, Math.floor(t.grid.rows * 0.2));
		label(
			`current ${video.currentTime.toFixed(1)}s / ${video.duration.toFixed(1)}s`,
			Math.floor(t.grid.rows * 0.3)
		);
		label(`isPlaying ${video.isPlaying ? 'true' : 'false'}`, Math.floor(t.grid.rows * 0.4), [120, 205, 255]);
	}

	label('click to toggle play / pause', -Math.floor(t.grid.rows * 0.34), [255, 225, 140]);
});

t.mouseClicked(async () => {
	if (!video) {
		return;
	}

	if (video.isPlaying) {
		video.pause();
		return;
	}

	await video.play();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### originalHeight

#### Get Signature

```ts
get originalHeight(): number;
```

Original pixel height.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

let source;
const PIXEL_HEIGHT = 512;

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

t.setup(() => {
	const canvas = document.createElement('canvas');
	canvas.width = 128;
	canvas.height = PIXEL_HEIGHT;
	source = t.createTexture(canvas);
	source.characters(' .:-=+*#%@');
});

t.draw(() => {
	t.background(6, 10, 22);

	if (!source) return;

	const oh = source.originalHeight;

	drawCenteredText('TextmodeSource.originalHeight', -8, [240, 245, 255]);
	drawCenteredText('The raw pixel height of the source asset.', -6, [150, 170, 200]);

	drawCenteredText(`${oh} PIXELS`, 6, [255, 225, 140]);
	drawCenteredText('This value is independent of the grid resolution.', 9, [100, 120, 150]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`originalHeight`](TextmodeTexture.md#originalheight)

***

### originalWidth

#### Get Signature

```ts
get originalWidth(): number;
```

Original pixel width.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

let source;
const PIXEL_WIDTH = 512;

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

t.setup(() => {
	const canvas = document.createElement('canvas');
	canvas.width = PIXEL_WIDTH;
	canvas.height = 128;
	source = t.createTexture(canvas);
	source.characters(' .:-=+*#%@');
});

t.draw(() => {
	t.background(6, 10, 22);

	if (!source) return;

	const ow = source.originalWidth;

	drawCenteredText('TextmodeSource.originalWidth', -8, [240, 245, 255]);
	drawCenteredText('The raw pixel width of the source asset.', -6, [150, 170, 200]);

	drawCenteredText(`${ow} PIXELS`, 6, [255, 225, 140]);
	drawCenteredText('This value is independent of the grid resolution.', 9, [100, 120, 150]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`originalWidth`](TextmodeTexture.md#originalwidth)

***

### source

#### Get Signature

```ts
get source(): HTMLCanvasElement | HTMLVideoElement;
```

The source element this texture captures from.

##### Returns

`HTMLCanvasElement` \| `HTMLVideoElement`

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

const sourceCanvas = document.createElement('canvas');
sourceCanvas.width = 180;
sourceCanvas.height = 120;

const sourceContext = sourceCanvas.getContext('2d');
const texture = t.createTexture(sourceCanvas);
texture.characters(' .:-=+*#%@');

function drawSourceCanvas() {
	if (!sourceContext) {
		return;
	}

	const time = t.frameCount * 0.05;
	sourceContext.fillStyle = '#050816';
	sourceContext.fillRect(0, 0, sourceCanvas.width, sourceCanvas.height);

	const gradient = sourceContext.createLinearGradient(0, 0, sourceCanvas.width, sourceCanvas.height);
	gradient.addColorStop(0, '#1d4ed8');
	gradient.addColorStop(1, '#fb7185');
	sourceContext.fillStyle = gradient;
	sourceContext.fillRect(18, 18, sourceCanvas.width - 36, sourceCanvas.height - 36);

	sourceContext.save();
	sourceContext.translate(sourceCanvas.width / 2, sourceCanvas.height / 2);
	sourceContext.rotate(time * 0.8);
	sourceContext.fillStyle = '#fef08a';
	sourceContext.fillRect(-18, -44, 36, 88);
	sourceContext.restore();
}

function drawLabel(text, y, color = [220, 220, 220]) {
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
	drawSourceCanvas();

	t.background(5, 7, 18);
	t.image(texture, t.grid.cols - 8, t.grid.rows - 10);

	drawLabel('createTexture(canvas)', -Math.floor(t.grid.rows * 0.34), [255, 225, 140]);
	drawLabel(
		`source matches ${texture.source === sourceCanvas ? 'yes' : 'no'}`,
		Math.floor(t.grid.rows * 0.3),
		[120, 205, 255]
	);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`source`](TextmodeTexture.md#source)

***

### texture

#### Get Signature

```ts
get texture(): WebGLTexture;
```

Return the WebGL texture currently backing this source.

##### Returns

`WebGLTexture`

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

const sourceCanvas = document.createElement('canvas');
sourceCanvas.width = 180;
sourceCanvas.height = 120;

const sourceContext = sourceCanvas.getContext('2d');
let source = null;

function renderSource() {
	if (!sourceContext) {
		return;
	}

	const gradient = sourceContext.createLinearGradient(0, 0, sourceCanvas.width, sourceCanvas.height);
	gradient.addColorStop(0, '#020617');
	gradient.addColorStop(1, '#1d4ed8');
	sourceContext.fillStyle = gradient;
	sourceContext.fillRect(0, 0, sourceCanvas.width, sourceCanvas.height);
	sourceContext.fillStyle = '#f97316';
	sourceContext.fillRect(24, 24, 132, 72);
}

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

t.setup(() => {
	renderSource();
	source = t.createTexture(sourceCanvas);
	source.characters(' .:-=+*#%@');
});

t.draw(() => {
	t.background(5, 7, 18);

	if (source) {
		t.image(source, t.grid.cols - 8, t.grid.rows - 10);
	}

	label('TextmodeSource.texture', -Math.floor(t.grid.rows * 0.34), [255, 225, 140]);
	label(
		source && source.texture ? 'webgl texture available' : 'texture pending',
		Math.floor(t.grid.rows * 0.3),
		[120, 205, 255]
	);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`texture`](TextmodeTexture.md#texture)

***

### videoElement

#### Get Signature

```ts
get videoElement(): HTMLVideoElement;
```

The underlying HTML video element.

##### Returns

`HTMLVideoElement`

##### Example

```javascript
const VIDEO_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

let video = null;

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
	video = await t.loadVideo(VIDEO_URL);
	video.characters(' .:-=+*#%@');
	await video.play();
});

t.draw(() => {
	t.background(5, 7, 18);

	if (video) {
		t.image(video, t.grid.cols - 8, t.grid.rows - 10);
		label(`videoElement ${video.videoElement ? 'ready' : 'pending'}`, Math.floor(t.grid.rows * 0.2));
		label(
			`current ${video.currentTime.toFixed(1)}s / ${video.duration.toFixed(1)}s`,
			Math.floor(t.grid.rows * 0.3)
		);
		label(`isPlaying ${video.isPlaying ? 'true' : 'false'}`, Math.floor(t.grid.rows * 0.4), [120, 205, 255]);
	}

	label('click to toggle play / pause', -Math.floor(t.grid.rows * 0.34), [255, 225, 140]);
});

t.mouseClicked(async () => {
	if (!video) {
		return;
	}

	if (video.isPlaying) {
		video.pause();
		return;
	}

	await video.play();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### width

#### Get Signature

```ts
get width(): number;
```

Ideal width in grid cells.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

let source;

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

function createSourceCanvas() {
	const canvas = document.createElement('canvas');
	canvas.width = 256;
	canvas.height = 128;
	const ctx = canvas.getContext('2d');
	if (!ctx) return canvas;

	ctx.fillStyle = '#1e293b';
	ctx.fillRect(0, 0, 256, 128);
	ctx.strokeStyle = '#ffffff';
	ctx.lineWidth = 4;
	ctx.strokeRect(10, 10, 236, 108);

	return canvas;
}

t.setup(() => {
	source = t.createTexture(createSourceCanvas());
	source.characters(' .:-=+*#%@');
});

t.draw(() => {
	t.background(6, 10, 22);

	if (!source) return;

	const w = source.width;

	t.push();
	t.translate(0, 0);
	t.charColor(140, 220, 255, 100);
	t.char('=');
	t.rect(w, 1);
	t.pop();

	t.push();
	t.charColor(255, 255, 255);
	t.translate(-Math.floor(w / 2), 0);
	t.char('[');
	t.point();
	t.translate(w - 1, 0);
	t.char(']');
	t.point();
	t.pop();

	drawCenteredText('TextmodeSource.width', -12, [240, 245, 255]);
	drawCenteredText('The ideal width of the source in grid cells.', -10, [150, 170, 200]);

	drawCenteredText(`${w} CELLS`, 10, [140, 220, 255]);
	drawCenteredText('Calculated to fit the current grid aspect ratio.', 12, [100, 120, 150]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`width`](TextmodeTexture.md#width)

## Methods

### \_hasFrameOverrides()

```ts
_hasFrameOverrides(): boolean;
```

#### Returns

`boolean`

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`_hasFrameOverrides`](TextmodeTexture.md#hasframeoverrides)

***

### background()

```ts
background(
   colorOrGray, 
   g?, 
   b?, 
   a?): this;
```

Defines the background color used for transparent pixels.

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

let sourceA, sourceB;

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

	// Inner solid white circle
	ctx.fillStyle = '#ffffff';
	ctx.beginPath();
	ctx.arc(64, 64, 30, 0, Math.PI * 2);
	ctx.fill();

	return canvas;
}

t.setup(() => {
	const canvas = createTransparentCanvas();

	// Source A: Default transparency behavior (falls back to black)
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

	drawCenteredText('TextmodeSource.background', -12, [240, 245, 255]);
	drawCenteredText('Fills transparent source pixels before conversion.', -10, [150, 170, 200]);

	const imgW = 20;
	const imgH = 12;

	t.push();
	t.translate(-12, 0);
	t.image(sourceA, imgW, imgH);
	t.pop();
	drawCenteredText('DEFAULT FALLBACK', 8, [140, 180, 255]);

	t.push();
	t.translate(12, 0);
	t.image(sourceB, imgW, imgH);
	t.pop();
	drawCenteredText('CUSTOM BACKGROUND', 12, [255, 180, 100]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`background`](TextmodeTexture.md#background)

***

### cellColor()

```ts
cellColor(
   colorOrGray, 
   g?, 
   b?, 
   a?): this;
```

Defines the cell color when [cellColorMode](TextmodeSource.md#cellcolormode) is `'fixed'`.

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

let techSource;

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

function createTechCanvas() {
	const canvas = document.createElement('canvas');
	canvas.width = 128;
	canvas.height = 128;
	const ctx = canvas.getContext('2d');
	if (!ctx) return canvas;

	ctx.fillStyle = '#000000';
	ctx.fillRect(0, 0, 128, 128);

	ctx.strokeStyle = '#ffffff';
	ctx.lineWidth = 4;

	for (let i = 0; i < 3; i++) {
		ctx.beginPath();
		ctx.arc(64, 64, 20 + i * 20, 0, Math.PI * 2);
		ctx.stroke();
	}

	ctx.beginPath();
	ctx.moveTo(64, 10);
	ctx.lineTo(64, 118);
	ctx.moveTo(10, 64);
	ctx.lineTo(118, 64);
	ctx.stroke();

	return canvas;
}

t.setup(() => {
	techSource = t.createTexture(createTechCanvas());

	techSource.characters(' .:-=+*#%@');

	techSource.charColorMode('fixed').charColor(255);

	techSource.cellColorMode('fixed');
});

t.draw(() => {
	t.background(6, 10, 22);

	if (!techSource) return;

	const time = t.frameCount * 0.04;
	const red = Math.round(40 + 40 * Math.sin(time));
	const blue = Math.round(80 + 40 * Math.cos(time * 0.7));

	techSource.cellColor(red, 40, blue);

	drawCenteredText('TextmodeSource.cellColor', -12, [240, 245, 255]);
	drawCenteredText('Overriding the background color of every cell in a source.', -10, [150, 170, 200]);

	t.push();
	t.translate(0, 0);
	t.image(techSource, 24, 14);
	t.pop();

	drawCenteredText('MODE: FIXED', 9, [140, 255, 180]);
	drawCenteredText(`CELL_COLOR: [${red}, 40, ${blue}]`, 11, [140, 220, 255]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`cellColor`](TextmodeTexture.md#cellcolor)

***

### cellColorMode()

```ts
cellColorMode(mode): this;
```

Set cell color mode: `'sampled'` *(from source)* or `'fixed'`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mode` | `"fixed"` \| `"sampled"` | The cell color mode |

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

let sourceA, sourceB;

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

function createGradientCanvas() {
	const canvas = document.createElement('canvas');
	canvas.width = 128;
	canvas.height = 128;
	const ctx = canvas.getContext('2d');
	if (!ctx) return canvas;

	const grad = ctx.createLinearGradient(0, 0, 128, 128);
	grad.addColorStop(0, '#ff4400');
	grad.addColorStop(0.5, '#00ffaa');
	grad.addColorStop(1, '#0088ff');
	ctx.fillStyle = grad;
	ctx.fillRect(0, 0, 128, 128);

	return canvas;
}

t.setup(() => {
	const canvas = createGradientCanvas();

	sourceA = t.createTexture(canvas);
	sourceA.characters(' .:-=+*#%@');
	sourceA.cellColorMode('sampled');

	sourceB = t.createTexture(canvas);
	sourceB.characters(' .:-=+*#%@');
	sourceB.cellColorMode('fixed').cellColor(20, 30, 60);
});

t.draw(() => {
	t.background(6, 10, 22);

	if (!sourceA || !sourceB) return;

	drawCenteredText('TextmodeSource.cellColorMode', -12, [240, 245, 255]);
	drawCenteredText('Determines if cells use source colors or a fixed override.', -10, [150, 170, 200]);

	const imgW = 20;
	const imgH = 12;

	t.push();
	t.translate(-12, 0);
	t.image(sourceA, imgW, imgH);
	t.pop();
	drawCenteredText("MODE: 'sampled'", 8, [140, 180, 255]);

	t.push();
	t.translate(12, 0);
	t.image(sourceB, imgW, imgH);
	t.pop();
	drawCenteredText("MODE: 'fixed'", 12, [255, 180, 100]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`cellColorMode`](TextmodeTexture.md#cellcolormode)

***

### characters()

```ts
characters(chars): this;
```

Define the characters to use for brightness mapping as a string.
Maximum length is 255; excess characters are ignored.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chars` | `string` | String of characters to map |

#### Returns

`this`

This instance for chaining.

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let sparseSource;
let denseSource;

function createGradientCanvas() {
	const canvas = document.createElement('canvas');
	canvas.width = 160;
	canvas.height = 160;

	const ctx = canvas.getContext('2d');
	if (!ctx) return canvas;

	const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
	gradient.addColorStop(0, '#000000');
	gradient.addColorStop(1, '#ffffff');
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	return canvas;
}

function drawLabel(text, x, y) {
	t.push();
	t.translate(x - Math.floor(text.length / 2), y);
	t.charColor(255);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.setup(() => {
	const canvas = createGradientCanvas();

	sparseSource = t.createTexture(canvas);
	sparseSource.characters(' .oO@');

	denseSource = t.createTexture(canvas);
	denseSource.characters(' .:-=+*#%@');
});

t.draw(() => {
	t.background(0);
	if (!sparseSource || !denseSource) return;

	const size = Math.min(sparseSource.width, sparseSource.height) * 0.7;
	const offset = Math.floor(size * 0.7);

	t.push();
	t.translate(-offset, 0);
	t.image(sparseSource, size, size);
	t.pop();

	t.push();
	t.translate(offset, 0);
	t.image(denseSource, size, size);
	t.pop();

	drawLabel("characters(' .oO@')", -offset, Math.floor(t.grid.rows / 2) - 2);
	drawLabel("characters(' .:-=+*#%@')", offset, Math.floor(t.grid.rows / 2) - 2);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`characters`](TextmodeTexture.md#characters)

***

### charColor()

```ts
charColor(
   colorOrGray, 
   g?, 
   b?, 
   a?): this;
```

Defines the character color when [charColorMode](TextmodeSource.md#charcolormode) is `'fixed'`.

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

let techSource;

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

function createTechCanvas() {
	const canvas = document.createElement('canvas');
	canvas.width = 128;
	canvas.height = 128;
	const ctx = canvas.getContext('2d');
	if (!ctx) return canvas;

	ctx.fillStyle = '#000000';
	ctx.fillRect(0, 0, 128, 128);

	ctx.strokeStyle = '#ffffff';
	ctx.lineWidth = 4;

	for (let i = 0; i < 3; i++) {
		ctx.beginPath();
		ctx.arc(64, 64, 20 + i * 20, 0, Math.PI * 2);
		ctx.stroke();
	}

	ctx.beginPath();
	ctx.moveTo(64, 10);
	ctx.lineTo(64, 118);
	ctx.moveTo(10, 64);
	ctx.lineTo(118, 64);
	ctx.stroke();

	return canvas;
}

t.setup(() => {
	techSource = t.createTexture(createTechCanvas());
	techSource.characters(' .:-=+*#%@');

	techSource.charColorMode('fixed');
});

t.draw(() => {
	t.background(6, 10, 22);

	if (!techSource) return;

	const time = t.frameCount * 0.04;
	const r = Math.round(150 + 105 * Math.sin(time));
	const g = Math.round(150 + 105 * Math.cos(time * 0.7));

	techSource.charColor(r, g, 100);

	drawCenteredText('TextmodeSource.charColor', -12, [240, 245, 255]);
	drawCenteredText('Overriding the character color of every cell in a source.', -10, [150, 170, 200]);

	t.push();
	t.translate(0, 0);
	t.image(techSource, 24, 14);
	t.pop();

	drawCenteredText('MODE: FIXED', 9, [140, 255, 180]);
	drawCenteredText(`CHAR_COLOR: [${r}, ${g}, 100]`, 11, [255, 225, 140]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`charColor`](TextmodeTexture.md#charcolor)

***

### charColorMode()

```ts
charColorMode(mode): this;
```

Set character color mode: `'sampled'` *(from source)* or `'fixed'`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mode` | `"fixed"` \| `"sampled"` | The character color mode |

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

let sourceA, sourceB;

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

function createGradientCanvas() {
	const canvas = document.createElement('canvas');
	canvas.width = 128;
	canvas.height = 128;
	const ctx = canvas.getContext('2d');
	if (!ctx) return canvas;

	const grad = ctx.createLinearGradient(0, 0, 128, 128);
	grad.addColorStop(0, '#ffcc00');
	grad.addColorStop(0.5, '#ff0055');
	grad.addColorStop(1, '#3300ff');
	ctx.fillStyle = grad;
	ctx.fillRect(0, 0, 128, 128);

	return canvas;
}

t.setup(() => {
	const canvas = createGradientCanvas();

	sourceA = t.createTexture(canvas);
	sourceA.characters(' .:-=+*#%@');
	sourceA.charColorMode('sampled');

	sourceB = t.createTexture(canvas);
	sourceB.characters(' .:-=+*#%@');
	sourceB.charColorMode('fixed').charColor(140, 255, 180);
});

t.draw(() => {
	t.background(6, 10, 22);

	if (!sourceA || !sourceB) return;

	drawCenteredText('TextmodeSource.charColorMode', -12, [240, 245, 255]);
	drawCenteredText('Determines if characters use source colors or a fixed override.', -10, [150, 170, 200]);

	const imgW = 20;
	const imgH = 12;

	t.push();
	t.translate(-12, 0);
	t.image(sourceA, imgW, imgH);
	t.pop();
	drawCenteredText("MODE: 'sampled'", 8, [140, 180, 255]);

	t.push();
	t.translate(12, 0);
	t.image(sourceB, imgW, imgH);
	t.pop();
	drawCenteredText("MODE: 'fixed'", 12, [255, 180, 100]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`charColorMode`](TextmodeTexture.md#charcolormode)

***

### charRotation()

```ts
charRotation(degrees): this;
```

Set the character rotation in degrees (0-360).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `degrees` | `number` | Rotation in degrees |

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

let pointerSource;

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

function createPointerCanvas() {
	const canvas = document.createElement('canvas');
	canvas.width = 128;
	canvas.height = 128;
	const ctx = canvas.getContext('2d');
	if (!ctx) return canvas;

	ctx.fillStyle = '#000000';
	ctx.fillRect(0, 0, 128, 128);

	ctx.fillStyle = '#ffffff';
	ctx.beginPath();
	ctx.moveTo(64, 20); // Top
	ctx.lineTo(100, 100); // Bottom Right
	ctx.lineTo(28, 100); // Bottom Left
	ctx.closePath();
	ctx.fill();

	return canvas;
}

t.setup(() => {
	const canvas = createPointerCanvas();
	pointerSource = t.createTexture(canvas);
	pointerSource.characters('#+- ');
});

t.draw(() => {
	t.background(6, 10, 22);

	if (!pointerSource) return;

	drawCenteredText('TextmodeSource.charRotation', -12, [240, 245, 255]);
	drawCenteredText('Rotating the individual characters within their cells.', -10, [150, 170, 200]);

	const imgW = 20;
	const imgH = 12;

	t.push();
	t.translate(-12, 0);
	pointerSource.charRotation(0);
	t.image(pointerSource, imgW, imgH);
	t.pop();
	drawCenteredText('0 DEGREES', 8, [140, 180, 255]);

	t.push();
	t.translate(12, 0);
	pointerSource.charRotation(90);
	t.image(pointerSource, imgW, imgH);
	t.pop();
	drawCenteredText('90 DEGREES', 12, [255, 180, 100]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`charRotation`](TextmodeTexture.md#charrotation)

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let source;

function createGradientCanvas() {
	const canvas = document.createElement('canvas');
	canvas.width = 160;
	canvas.height = 160;

	const ctx = canvas.getContext('2d');
	if (!ctx) return canvas;

	const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
	gradient.addColorStop(0, '#040404');
	gradient.addColorStop(0.5, '#888888');
	gradient.addColorStop(1, '#f8f8f8');
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	return canvas;
}

function drawLabel(text, y) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(255);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.setup(() => {
	source = t.createTexture(createGradientCanvas());
	source.conversionMode('brightness');
	source.characters(' .:-=+*#%@');
});

t.draw(() => {
	t.background(0);
	if (!source) return;

	t.image(source, source.width, source.height);
	drawLabel("conversionMode('brightness')", Math.floor(t.grid.rows / 2) - 2);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`conversionMode`](TextmodeTexture.md#conversionmode)

***

### dispose()

```ts
dispose(): void;
```

Dispose the video source and release the backing media element.

#### Returns

`void`

#### Example

```javascript
const VIDEO_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

let video = null;
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
	video = await t.loadVideo(VIDEO_URL);
	video.characters(' .:-=+*#%@');
	await video.play();
});

t.draw(() => {
	t.background(5, 7, 18);

	if (video && !disposed) {
		t.image(video, t.grid.cols - 8, t.grid.rows - 10);
	}

	label('click to dispose video', -Math.floor(t.grid.rows * 0.34), [255, 225, 140]);
	label(disposed ? 'video disposed' : 'video active', Math.floor(t.grid.rows * 0.3), [120, 205, 255]);
});

t.mouseClicked(() => {
	if (!video || disposed) {
		return;
	}

	video.dispose();
	disposed = true;
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Overrides

[`TextmodeTexture`](TextmodeTexture.md).[`dispose`](TextmodeTexture.md#dispose)

***

### flipX()

```ts
flipX(v?): this;
```

Set horizontal flip indicator flag.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | `number` \| `boolean` | `true` | Flip flag |

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

let sourceA, sourceB;

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

function createGradientCanvas() {
	const canvas = document.createElement('canvas');
	canvas.width = 128;
	canvas.height = 128;
	const ctx = canvas.getContext('2d');
	if (!ctx) return canvas;

	// Linear gray gradient from top-left to bottom-right
	const grad = ctx.createLinearGradient(0, 0, 128, 128);
	grad.addColorStop(0, '#000000');
	grad.addColorStop(1, '#ffffff');
	ctx.fillStyle = grad;
	ctx.fillRect(0, 0, 128, 128);

	return canvas;
}

t.setup(() => {
	const canvas = createGradientCanvas();

	// Source A: Normal orientation
	sourceA = t.createTexture(canvas);
	sourceA.characters(' .:-=+*#%@');
	sourceA.flipX(false);

	// Source B: Flipped horizontally
	sourceB = t.createTexture(canvas);
	sourceB.characters(' .:-=+*#%@');
	sourceB.flipX(true);
});

t.draw(() => {
	t.background(6, 10, 22);

	if (!sourceA || !sourceB) return;

	drawCenteredText('TextmodeSource.flipX', -12, [240, 245, 255]);
	drawCenteredText('Mirroring the source texture horizontally.', -10, [150, 170, 200]);

	const imgW = 20;
	const imgH = 12;

	t.push();
	t.translate(-12, 0);
	t.image(sourceA, imgW, imgH);
	t.pop();
	drawCenteredText('NORMAL', 8, [140, 180, 255]);

	t.push();
	t.translate(12, 0);
	t.image(sourceB, imgW, imgH);
	t.pop();
	drawCenteredText('FLIP_X', 12, [255, 180, 100]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`flipX`](TextmodeTexture.md#flipx)

***

### flipY()

```ts
flipY(v?): this;
```

Set vertical flip indicator flag.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | `number` \| `boolean` | `true` | Flip flag |

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

let sourceA, sourceB;

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

function createGradientCanvas() {
	const canvas = document.createElement('canvas');
	canvas.width = 128;
	canvas.height = 128;
	const ctx = canvas.getContext('2d');
	if (!ctx) return canvas;

	// Linear gray gradient from top-left to bottom-right
	const grad = ctx.createLinearGradient(0, 0, 128, 128);
	grad.addColorStop(0, '#000000');
	grad.addColorStop(1, '#ffffff');
	ctx.fillStyle = grad;
	ctx.fillRect(0, 0, 128, 128);

	return canvas;
}

t.setup(() => {
	const canvas = createGradientCanvas();

	// Source A: Normal orientation
	sourceA = t.createTexture(canvas);
	sourceA.characters(' .:-=+*#%@');
	sourceA.flipY(false);

	// Source B: Flipped vertically
	sourceB = t.createTexture(canvas);
	sourceB.characters(' .:-=+*#%@');
	sourceB.flipY(true);
});

t.draw(() => {
	t.background(6, 10, 22);

	if (!sourceA || !sourceB) return;

	drawCenteredText('TextmodeSource.flipY', -12, [240, 245, 255]);
	drawCenteredText('Mirroring the source texture vertically.', -10, [150, 170, 200]);

	const imgW = 20;
	const imgH = 12;

	t.push();
	t.translate(-12, 0);
	t.image(sourceA, imgW, imgH);
	t.pop();
	drawCenteredText('NORMAL', 8, [140, 180, 255]);

	t.push();
	t.translate(12, 0);
	t.image(sourceB, imgW, imgH);
	t.pop();
	drawCenteredText('FLIP_Y', 12, [255, 180, 100]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`flipY`](TextmodeTexture.md#flipy)

***

### invert()

```ts
invert(v?): this;
```

Set the invert flag, swapping character and cell colors when enabled.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `v` | `number` \| `boolean` | `true` | Invert flag |

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

let gradientSource;

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

function createGradientCanvas() {
	const canvas = document.createElement('canvas');
	canvas.width = 128;
	canvas.height = 128;
	const ctx = canvas.getContext('2d');
	if (!ctx) return canvas;

	const grad = ctx.createLinearGradient(0, 0, 128, 128);
	grad.addColorStop(0, '#000000');
	grad.addColorStop(1, '#ffffff');
	ctx.fillStyle = grad;
	ctx.fillRect(0, 0, 128, 128);

	return canvas;
}

t.setup(() => {
	const canvas = createGradientCanvas();
	gradientSource = t.createTexture(canvas);
	gradientSource.characters(' .:-=+*#%@');
});

t.draw(() => {
	t.background(6, 10, 22);

	if (!gradientSource) return;

	drawCenteredText('TextmodeSource.invert', -12, [240, 245, 255]);
	drawCenteredText('Swapping character and cell color roles.', -10, [150, 170, 200]);

	const imgW = 20;
	const imgH = 12;

	t.push();
	t.translate(-12, 0);
	gradientSource.invert(false);
	t.image(gradientSource, imgW, imgH);
	t.pop();
	drawCenteredText('NORMAL', 8, [140, 180, 255]);

	t.push();
	t.translate(12, 0);
	gradientSource.invert(true);
	t.image(gradientSource, imgW, imgH);
	t.pop();
	drawCenteredText('INVERTED', 12, [255, 180, 100]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`invert`](TextmodeTexture.md#invert)

***

### loop()

```ts
loop(shouldLoop?): this;
```

Set whether the video should loop.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `shouldLoop` | `boolean` | `true` | Whether to loop (defaults to true) |

#### Returns

`this`

#### Example

```javascript
const VIDEO_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let video;

function drawLabel(text, y) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(255);

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
	video = await t.loadVideo(VIDEO_URL);
	video.characters(' .:-=+*#%@');
	video.loop(false);
	await video.play();
});

t.draw(() => {
	t.background(0);
	if (!video) return;

	t.image(video);
	drawLabel('loop(false) with manual restart', Math.floor(t.grid.rows / 2) - 2);

	if (!video.isPlaying && video.currentTime >= video.duration) {
		video.time(0);
		void video.play();
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### pause()

```ts
pause(): void;
```

Pause the video.

#### Returns

`void`

#### Example

```javascript
const VIDEO_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let video;

function drawLabel(text, y) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(255);

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
	video = await t.loadVideo(VIDEO_URL);
	video.characters(' .:-=+*#%@');
	video.loop();
	await video.play();
});

t.draw(() => {
	t.background(0);
	if (!video) return;

	t.image(video);
	drawLabel(video.isPlaying ? 'click to pause()' : 'click to resume with play()', Math.floor(t.grid.rows / 2) - 2);
});

t.mouseClicked(async () => {
	if (!video) return;

	if (video.isPlaying) {
		video.pause();
		return;
	}

	await video.play();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### play()

```ts
play(): Promise<void>;
```

Play the video.

#### Returns

`Promise`\<`void`\>

Promise that resolves when playback starts

#### Example

```javascript
const VIDEO_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let video;

function drawLabel(text, y) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(255);

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
	video = await t.loadVideo(VIDEO_URL);
	video.characters(' .:-=+*#%@');
	await video.play();
	video.pause();
	video.time(0);
});

t.draw(() => {
	t.background(0);
	if (!video) return;

	t.image(video);
	drawLabel(video.isPlaying ? 'click to restart playback' : 'click to call play()', Math.floor(t.grid.rows / 2) - 2);
});

t.mouseClicked(async () => {
	if (!video) return;

	video.time(0);
	await video.play();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### speed()

```ts
speed(rate): this;
```

Set the playback speed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rate` | `number` | Playback rate (1.0 = normal speed) |

#### Returns

`this`

#### Example

```javascript
const VIDEO_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let video;

function drawLabel(text, y) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(255);

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
	video = await t.loadVideo(VIDEO_URL);
	video.characters(' .:-=+*#%@');
	video.loop();
	await video.play();
});

t.draw(() => {
	t.background(0);
	if (!video) return;

	const halfWidth = t.grid.cols / 2;
	const normalizedX = (t.mouse.x + halfWidth) / t.grid.cols;
	const clampedX = Math.max(0, Math.min(1, normalizedX));
	const rate = 0.1 + clampedX * 3.9;

	video.speed(rate);
	t.image(video);
	drawLabel(`speed(${rate.toFixed(1)})`, Math.floor(t.grid.rows / 2) - 2);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### stop()

```ts
stop(): void;
```

Stop the video and reset to beginning.

#### Returns

`void`

#### Example

```javascript
const VIDEO_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let video;
let restartTimeout = null;

function drawLabel(text, y) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(255);

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
	video = await t.loadVideo(VIDEO_URL);
	video.characters(' .:-=+*#%@');
	video.loop();
	await video.play();
});

t.draw(() => {
	t.background(0);
	if (!video) return;

	t.image(video);
	drawLabel("press 's' to stop()", Math.floor(t.grid.rows / 2) - 2);
});

t.keyPressed(() => {
	if (!video || !t.isKeyPressed('s')) return;

	video.stop();
	if (restartTimeout) clearTimeout(restartTimeout);
	restartTimeout = setTimeout(() => {
		void video.play();
		restartTimeout = null;
	}, 1000);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### time()

```ts
time(seconds): this;
```

Set the current time position in the video.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `seconds` | `number` | Time in seconds |

#### Returns

`this`

#### Example

```javascript
const VIDEO_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let video;

function drawLabel(text, y) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(255);

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
	video = await t.loadVideo(VIDEO_URL);
	video.characters(' .:-=+*#%@');
	video.loop();
	await video.play();
});

t.draw(() => {
	t.background(0);
	if (!video) return;

	t.image(video);
	drawLabel('click to jump with time()', Math.floor(t.grid.rows / 2) - 2);
	drawLabel(`${video.currentTime.toFixed(1)}s / ${video.duration.toFixed(1)}s`, Math.floor(t.grid.rows / 2) - 4);
});

t.mouseClicked(() => {
	if (!video) return;

	video.time(Math.random() * video.duration);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### volume()

```ts
volume(level): this;
```

Set the volume.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `level` | `number` | Volume level (0.0-1.0) Videos loaded through [Textmodifier.loadVideo](../../../classes/Textmodifier.md#loadvideo) start muted to satisfy autoplay rules. Unmute the underlying [videoElement](#videoelement) in response to a user gesture before expecting audible volume changes. |

#### Returns

`this`

#### Example

```javascript
const VIDEO_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let video;
let audioEnabled = false;

function drawLabel(text, y) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(255);

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
	video = await t.loadVideo(VIDEO_URL);
	video.characters(' .:-=+*#%@');
	video.loop();
	await video.play();
});

t.draw(() => {
	t.background(0);
	if (!video) return;

	t.image(video);

	if (audioEnabled) {
		const halfHeight = t.grid.rows / 2;
		const normalizedY = (t.mouse.y + halfHeight) / t.grid.rows;
		const level = 1 - Math.max(0, Math.min(1, normalizedY));

		video.volume(level);
		drawLabel(`volume(${level.toFixed(2)})`, Math.floor(t.grid.rows / 2) - 4);
	} else {
		drawLabel('click once to unmute videoElement', Math.floor(t.grid.rows / 2) - 4);
	}

	drawLabel('move vertically to change volume()', Math.floor(t.grid.rows / 2) - 2);
});

t.mouseClicked(async () => {
	if (!video || audioEnabled) return;

	video.videoElement.muted = false;
	audioEnabled = true;
	await video.play();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
