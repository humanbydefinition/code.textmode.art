---
layout: doc
editLink: true
title: TextmodeVideo
description: Represents a video element for textmode rendering via Textmodifier.loadVideo.
category: Classes
api: true
namespace: media
kind: Class
lastModified: 2026-05-19
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
const IMAGE_URL = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80';
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

let source = null;

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
	source = await t.loadImage(IMAGE_URL);
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

const ranges = [
	{
		label: '0-84',
		start: 0,
		end: 84,
		characters: ' .:-',
		charColor: '#38bdf8',
	},
	{
		label: '85-170',
		start: 85,
		end: 170,
		characters: '=+*#',
		charColor: '#facc15',
	},
	{
		label: '171-255',
		start: 171,
		end: 255,
		characters: '%@',
		charColor: '#f8fafc',
	},
];

let rangeSources = [];

function drawText(text, x, y, color = [235, 240, 255]) {
	t.push();
	t.translate(x - Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);
	t.cellColor(0, 0, 0);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

function drawRangeSource(source, x, y, width, height, label, color) {
	t.push();
	t.translate(x, y);
	t.image(source, width, height);
	t.pop();

	drawText(label, x, y + Math.floor(height * 0.5) + 3, color);
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

	drawText('TextmodeSource.brightnessRange()', 0, -Math.floor(t.grid.rows * 0.5) + 2, [255, 225, 120]);

	for (let i = 0; i < rangeSources.length; i++) {
		const range = ranges[i];
		const x = startX + i * (panelWidth + gap);
		const color = i === 0 ? [56, 189, 248] : i === 1 ? [250, 204, 21] : [248, 250, 252];
		drawRangeSource(rangeSources[i], x, y, panelWidth, panelHeight, range.label, color);
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`brightnessRange`](TextmodeTexture.md#brightnessrange)

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
const IMAGE_URL = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80';
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
const IMAGE_URL = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80';
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

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chars` | `string` | String of characters to map |

#### Returns

`this`

This instance for chaining.

#### Example

```javascript
const IMAGE_URL = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80';
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let sparseSource;
let denseSource;

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

t.setup(async () => {
	sparseSource = await t.loadImage(IMAGE_URL);
	sparseSource.characters(' .oO@');

	denseSource = await t.loadImage(IMAGE_URL);
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
const IMAGE_URL = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80';
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

t.setup(async () => {
	techSource = await t.loadImage(IMAGE_URL);
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
const IMAGE_URL = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80';
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
const IMAGE_URL = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80';
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
});

const stackedBrightnessPasses = [
	{
		mode: 'brightness',
		brightnessStart: 0,
		brightnessEnd: 70,
		characters: ' .,:',
		charColorMode: 'fixed',
		charColor: '#0ea5e9',
		cellColorMode: 'fixed',
		cellColor: '#00000000',
	},
	{
		mode: 'brightness',
		brightnessStart: 71,
		brightnessEnd: 160,
		characters: '==++**',
		flipX: true,
		charColorMode: 'fixed',
		charColor: '#fb7185',
		cellColorMode: 'fixed',
		cellColor: '#00000000',
	},
	{
		mode: 'brightness',
		brightnessStart: 161,
		brightnessEnd: 255,
		characters: '##@@',
		charRotation: 90,
		charColorMode: 'fixed',
		charColor: '#fef3c7',
		cellColorMode: 'fixed',
		cellColor: '#00000000',
	},
];

let stackedSource;
let clearedSource;

function drawText(text, x, y, color = [235, 240, 255]) {
	t.push();
	t.translate(x - Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);
	t.cellColor(0, 0, 0);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

function applyStack(source) {
	source.conversions(stackedBrightnessPasses);
}

function clearToSingleBrightness(source) {
	source.clearConversions();
	source.conversionMode('brightness');
	source.brightnessRange(0, 255);
	source.characters(' .:-=+*#%@');
	source.charColorMode('sampled');
	source.cellColorMode('fixed');
}

function drawPanel(source, x, y, width, height, label, accent) {
	t.push();
	t.translate(x, y);
	t.image(source, width, height);
	t.pop();

	drawText(label, x, y + Math.floor(height * 0.5) + 3, accent);
}

t.setup(async () => {
	stackedSource = await t.loadImage(IMAGE_URL);
	applyStack(stackedSource);

	clearedSource = await t.loadImage(IMAGE_URL);
	applyStack(clearedSource);
	clearToSingleBrightness(clearedSource);
});

t.draw(() => {
	t.background(4, 7, 18);
	if (!stackedSource || !clearedSource) return;

	const gap = Math.max(5, Math.floor(t.grid.cols * 0.06));
	const panelWidth = Math.max(16, Math.floor((t.grid.cols - gap * 3) / 2));
	const panelHeight = Math.max(12, Math.min(t.grid.rows - 12, Math.floor(panelWidth * 0.65)));
	const leftX = -Math.floor(panelWidth * 0.5) - Math.floor(gap * 0.5);
	const rightX = Math.floor(panelWidth * 0.5) + Math.floor(gap * 0.5);
	const y = -1;

	drawText('TextmodeSource.clearConversions()', 0, -Math.floor(t.grid.rows * 0.5) + 2, [255, 225, 120]);
	drawPanel(stackedSource, leftX, y, panelWidth, panelHeight, 'stack active', [255, 255, 255]);
	drawPanel(clearedSource, rightX, y, panelWidth, panelHeight, 'cleared to single', [150, 180, 210]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`clearConversions`](TextmodeTexture.md#clearconversions)

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let source;

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
	source = await t.loadImage(IMAGE_URL);
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
const IMAGE_URL = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80';
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
});

const brightnessPasses = [
	{
		mode: 'brightness',
		brightnessStart: 0,
		brightnessEnd: 78,
		characters: ' .,:;',
		charColorMode: 'fixed',
		charColor: '#38bdf8',
		cellColorMode: 'fixed',
		cellColor: '#00000000',
	},
	{
		mode: 'brightness',
		brightnessStart: 79,
		brightnessEnd: 168,
		characters: '--==++**',
		charColorMode: 'fixed',
		charColor: '#facc15',
		cellColorMode: 'fixed',
		cellColor: '#00000000',
	},
	{
		mode: 'brightness',
		brightnessStart: 169,
		brightnessEnd: 255,
		characters: '##%%@@',
		charRotation: 90,
		charColorMode: 'fixed',
		charColor: '#f8fafc',
		cellColorMode: 'fixed',
		cellColor: '#00000000',
	},
];

let plainSource;
let stackedSource;

function drawText(text, x, y, color = [235, 240, 255]) {
	t.push();
	t.translate(x - Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);
	t.cellColor(0, 0, 0);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

function drawPanel(source, x, y, width, height, label, accent) {
	t.push();
	t.translate(x, y);
	t.image(source, width, height);
	t.pop();

	drawText(label, x, y + Math.floor(height * 0.5) + 3, accent);
}

t.setup(async () => {
	plainSource = await t.loadImage(IMAGE_URL);
	plainSource.characters(' .:-=+*#%@');
	plainSource.charColorMode('sampled');
	plainSource.cellColorMode('fixed');

	stackedSource = await t.loadImage(IMAGE_URL);
	stackedSource.conversions(brightnessPasses);
});

t.draw(() => {
	t.background(4, 7, 18);
	if (!plainSource || !stackedSource) return;

	const gap = Math.max(5, Math.floor(t.grid.cols * 0.06));
	const panelWidth = Math.max(16, Math.floor((t.grid.cols - gap * 3) / 2));
	const panelHeight = Math.max(12, Math.min(t.grid.rows - 12, Math.floor(panelWidth * 0.67)));
	const leftX = -Math.floor(panelWidth * 0.5) - Math.floor(gap * 0.5);
	const rightX = Math.floor(panelWidth * 0.5) + Math.floor(gap * 0.5);
	const y = -1;

	drawText('TextmodeSource.conversions()', 0, -Math.floor(t.grid.rows * 0.5) + 2, [255, 225, 120]);
	drawPanel(plainSource, leftX, y, panelWidth, panelHeight, 'single brightness', [150, 180, 210]);
	drawPanel(stackedSource, rightX, y, panelWidth, panelHeight, 'stacked ranges', [255, 255, 255]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`conversions`](TextmodeTexture.md#conversions)

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
const IMAGE_URL = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80';
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
const IMAGE_URL = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80';
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
const IMAGE_URL = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80';
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

t.setup(async () => {
	gradientSource = await t.loadImage(IMAGE_URL);
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
