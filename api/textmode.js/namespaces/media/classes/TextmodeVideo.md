---
layout: doc
editLink: true
title: TextmodeVideo
description: Video source for textmode rendering.
category: Classes
api: true
namespace: media
kind: Class
lastModified: 2026-05-27
hasConstructor: false
---

[textmode.js](../../../index.md) / [media](../index.md) / TextmodeVideo

# Class: TextmodeVideo

Video source for textmode rendering.

Create one with [Textmodifier.loadVideo](../../../classes/Textmodifier.md#loadvideo), draw it with [Textmodifier.image](../../../classes/Textmodifier.md#image),
control playback with video methods, and configure conversion through inherited
chainable methods.

## Example

```javascript
const VIDEO_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let video = null;

t.setup(async () => {
	video = await t.loadVideo(VIDEO_URL);
	video.characters(' .:-=+*#%@');
	video.volume(0);
	await video.play();
	video.loop();
});

t.draw(() => {
	t.background(6, 12, 10);
	if (video) {
		t.image(video);
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

	drawText('TEXTMODEVIDEO.CREATION', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: VIDEO LOADING & PLAYBACK', x, y++, 100, 220, 255);
	drawText('Demonstrates loadVideo API.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(video ? 'STATUS: VIDEO LOADED AND PLAYING' : 'STATUS: LOADING VIDEO...', x, y++, 255, 210, 90);
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
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let video = null;

t.setup(async () => {
	video = await t.loadVideo(VIDEO_URL);
	video.characters(' .:-=+*#%@');
	video.volume(0);
	video.loop();
	await video.play();
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
	t.background(6, 8, 20);
	if (video) t.image(video, t.grid.cols - 8, t.grid.rows - 10);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODEVIDEO.CURRENTTIME', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: PLAYBACK POSITION', x, y++, 100, 220, 255);
	drawText('Read current video time.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const now = video ? video.currentTime.toFixed(2) : '0.00';
	const dur = video ? video.duration.toFixed(2) : '0.00';
	drawText(`TIME: ${now}`, x, y++, 255, 210, 90);
	drawText(`DUR: ${dur}`, x, y++, 120, 205, 255);
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

Total video duration in seconds.

##### Returns

`number`

##### Example

```javascript
const VIDEO_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let video = null;
let dur = 0;
let pct = 0;

t.setup(async () => {
	video = await t.loadVideo(VIDEO_URL);
	video.characters(' .:-=+*#%@');
	video.volume(0);
	await video.play();
	video.loop();
});

t.draw(() => {
	t.background(6, 8, 20);
	if (!video) return;

	t.image(video, t.grid.cols - 8, t.grid.rows - 10);

	dur = video.duration || 0;
	const maxExpectedDuration = 10;
	pct = Math.min(dur / maxExpectedDuration, 1);

	const gaugeWidth = Math.floor(t.grid.cols * 0.5);
	const startX = -Math.floor(gaugeWidth / 2);
	const filled = Math.floor(pct * gaugeWidth);

	t.push();
	t.translate(startX, 3);
	for (let i = 0; i < gaugeWidth; i++) {
		t.push();
		t.translate(i, 0);
		if (i < filled) {
			t.charColor(180, 255, 180);
			t.char('■');
		} else {
			t.charColor(60, 70, 95);
			t.char('·');
		}
		t.point();
		t.pop();
	}
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

	drawText('TEXTMODEVIDEO.DURATION', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TOTAL RUNTIME DURATION', x, y++, 100, 220, 255);
	drawText('Length of the loaded video.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);

	if (video) {
		drawText(`DURATION: ${dur.toFixed(3)}s`, x, y++, 255, 210, 90);
		const pctStr = `${(pct * 100).toFixed(0)}% of Max Reference (10.0s)`;
		drawText(pctStr, x, y++, 160, 170, 195);
	} else {
		drawText('LOADING VIDEO...', x, y++, 255, 180, 120);
	}
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
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let video = null;
let playing = false;

t.setup(async () => {
	video = await t.loadVideo(VIDEO_URL);
	video.characters(' .:-=+*#%@');
	video.volume(0);
	await video.play();
	video.loop();
});

t.draw(() => {
	t.background(6, 8, 20);
	if (!video) return;

	t.image(video, t.grid.cols - 8, t.grid.rows - 10);
	playing = video.isPlaying;
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

	drawText('TEXTMODEVIDEO.ISPLAYING', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: PLAYBACK STATE INQUIRY', x, y++, 100, 220, 255);
	drawText('Checks if video is playing.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);

	if (video) {
		const stateStr = playing ? '▶ ACTIVE PLAYING' : '⏸ PAUSED';
		const stateColor = playing ? [120, 255, 120] : [255, 120, 120];
		drawText(`STATE: ${stateStr}`, x, y++, ...stateColor);
		drawText(`isPlaying: ${playing}`, x, y++, 255, 210, 90);
		drawText('CLICK ANYWHERE TO TOGGLE PLAYBACK', x, y++, 120, 205, 255);
	} else {
		drawText('LOADING VIDEO...', x, y++, 255, 180, 120);
	}
});

t.mouseClicked(async () => {
	if (!video) return;
	if (video.isPlaying) {
		video.pause();
	} else {
		await video.play();
	}
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

[`TextmodeTexture`](TextmodeTexture.md).[`originalHeight`](TextmodeTexture.md#originalheight)

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

[`TextmodeTexture`](TextmodeTexture.md).[`originalWidth`](TextmodeTexture.md#originalwidth)

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

#### Inherited from

[`TextmodeTexture`](TextmodeTexture.md).[`source`](TextmodeTexture.md#source)

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

[`TextmodeTexture`](TextmodeTexture.md).[`texture`](TextmodeTexture.md#texture)

***

### videoElement

#### Get Signature

```ts
get videoElement(): HTMLVideoElement;
```

Underlying HTML video element.

##### Returns

`HTMLVideoElement`

##### Example

```javascript
const VIDEO_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let video = null;
let readyState = 0;
let videoWidth = 0;
let videoHeight = 0;
let tagName = 'null';

t.setup(async () => {
	video = await t.loadVideo(VIDEO_URL);
	video.characters(' .:-=+*#%@');
	video.volume(0);
	await video.play();
	video.loop();
});

t.draw(() => {
	t.background(6, 8, 20);
	if (!video) return;

	t.image(video, t.grid.cols - 8, t.grid.rows - 10);

	const el = video.videoElement;
	readyState = el ? el.readyState : 0;
	videoWidth = el ? el.videoWidth : 0;
	videoHeight = el ? el.videoHeight : 0;
	tagName = el ? el.tagName.toLowerCase() : 'null';
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

	drawText('TEXTMODEVIDEO.VIDEOELEMENT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: ACCESS NATIVE VIDEO ELEMENT', x, y++, 100, 220, 255);
	drawText('Queries DOM element properties.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);

	if (video) {
		drawText(`READY STATE : ${readyState}`, x, y++, 120, 205, 255);
		drawText(`SOURCE WIDTH: ${videoWidth}px`, x, y++, 220, 220, 220);
		drawText(`SRC HEIGHT  : ${videoHeight}px`, x, y++, 220, 220, 220);
		drawText(`TAG NAME    : <${tagName}>`, x, y++, 180, 255, 180);
	} else {
		drawText('LOADING VIDEO...', x, y++, 255, 180, 120);
	}
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

[`TextmodeTexture`](TextmodeTexture.md).[`cellColor`](TextmodeTexture.md#cellcolor)

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

[`TextmodeTexture`](TextmodeTexture.md).[`cellColorMode`](TextmodeTexture.md#cellcolormode)

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

[`TextmodeTexture`](TextmodeTexture.md).[`charColor`](TextmodeTexture.md#charcolor)

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

[`TextmodeTexture`](TextmodeTexture.md).[`charColorMode`](TextmodeTexture.md#charcolormode)

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
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let video = null;
let disposed = false;

t.setup(async () => {
	video = await t.loadVideo(VIDEO_URL);
	video.characters(' .:-=+*#%@');
	video.volume(0);
	await video.play();
});

t.draw(() => {
	t.background(5, 7, 18);
	if (video && !disposed) {
		t.image(video, t.grid.cols - 8, t.grid.rows - 10);
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

	drawText('TEXTMODEVIDEO.DISPOSE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: CLEANUP AND DISPOSAL', x, y++, 100, 220, 255);
	drawText('Releases video resources.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);

	if (disposed) {
		drawText('STATUS: DISPOSED', x, y++, 255, 120, 120);
	} else if (video) {
		drawText('STATUS: ACTIVE', x, y++, 120, 255, 120);
		drawText('CLICK ANYWHERE TO DISPOSE VIDEO', x, y++, 255, 210, 90);
	} else {
		drawText('LOADING VIDEO...', x, y++, 255, 180, 120);
	}
});

t.mouseClicked(() => {
	if (!video || disposed) return;
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

[`TextmodeTexture`](TextmodeTexture.md).[`flipX`](TextmodeTexture.md#flipx)

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

[`TextmodeTexture`](TextmodeTexture.md).[`flipY`](TextmodeTexture.md#flipy)

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

[`TextmodeTexture`](TextmodeTexture.md).[`invert`](TextmodeTexture.md#invert)

***

### loop()

```ts
loop(shouldLoop?): this;
```

Set whether the video loops.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `shouldLoop` | `boolean` | `true` | Whether to loop. Defaults to `true`. |

#### Returns

`this`

#### Example

```javascript
const VIDEO_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let video = null;
let currentTime = 0;
let duration = 0;

t.setup(async () => {
	video = await t.loadVideo(VIDEO_URL);
	video.characters(' .:-=+*#%@');
	video.loop(false);
	video.volume(0);
	await video.play();
});

t.draw(() => {
	t.background(6, 8, 20);
	if (!video) return;

	t.image(video);
	currentTime = video.currentTime;
	duration = video.duration || 1;

	if (!video.isPlaying && video.currentTime >= video.duration) {
		video.time(0);
		void video.play();
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

	drawText('TEXTMODEVIDEO.LOOP', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: LOOP CONTROL & END EVENT', x, y++, 100, 220, 255);
	drawText('Disables auto-loop, loops manually.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);

	if (video) {
		drawText(`CURRENT TIME: ${currentTime.toFixed(1)}s`, x, y++, 255, 210, 90);
		drawText(`DURATION    : ${duration.toFixed(1)}s`, x, y++, 255, 210, 90);
		drawText('LOOP MODE   : MANUAL DETECT', x, y++, 120, 205, 255);
	} else {
		drawText('LOADING VIDEO...', x, y++, 255, 180, 120);
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

Pause video playback.

#### Returns

`void`

#### Example

```javascript
const VIDEO_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let video = null;
let playing = false;

t.setup(async () => {
	video = await t.loadVideo(VIDEO_URL);
	video.characters(' .:-=+*#%@');
	video.loop();
	video.volume(0);
	await video.play();
});

t.draw(() => {
	t.background(6, 8, 20);
	if (!video) return;

	t.image(video);
	playing = video.isPlaying;
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

	drawText('TEXTMODEVIDEO.PAUSE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: PAUSING VIDEO PLAYBACK', x, y++, 100, 220, 255);
	drawText('Stops playback at current frame.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);

	if (video) {
		const actionStr = playing ? 'CLICK TO PAUSE()' : 'CLICK TO RESUME WITH PLAY()';
		drawText(actionStr, x, y++, 255, 210, 90);
		const state = playing ? 'PLAYING' : 'PAUSED';
		drawText(`PLAY: ${state}`, x, y++, 120, 205, 255);
	} else {
		drawText('LOADING VIDEO...', x, y++, 255, 180, 120);
	}
});

t.mouseClicked(async () => {
	if (!video) return;
	if (video.isPlaying) {
		video.pause();
	} else {
		await video.play();
	}
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

Start video playback.

#### Returns

`Promise`\<`void`\>

Promise that resolves when playback starts.

#### Example

```javascript
const VIDEO_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let video = null;
let playing = false;

t.setup(async () => {
	video = await t.loadVideo(VIDEO_URL);
	video.characters(' .:-=+*#%@');
	video.volume(0);
	await video.play();
	video.pause();
	video.time(0);
});

t.draw(() => {
	t.background(6, 8, 20);
	if (!video) return;

	t.image(video);
	playing = video.isPlaying;
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

	drawText('TEXTMODEVIDEO.PLAY', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: INITIATING VIDEO PLAYBACK', x, y++, 100, 220, 255);
	drawText('Plays or restarts a loaded video.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);

	if (video) {
		const actionStr = playing ? 'CLICK TO RESTART PLAYBACK' : 'CLICK TO CALL PLAY()';
		drawText(actionStr, x, y++, 255, 210, 90);
		const state = playing ? 'PLAYING' : 'PAUSED';
		drawText(`PLAY: ${state}`, x, y++, 120, 205, 255);
	} else {
		drawText('LOADING VIDEO...', x, y++, 255, 180, 120);
	}
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

Set playback speed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rate` | `number` | Playback rate (`1.0` is normal speed). |

#### Returns

`this`

#### Example

```javascript
const VIDEO_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let video = null;
let rate = 1.0;

t.setup(async () => {
	video = await t.loadVideo(VIDEO_URL);
	video.characters(' .:-=+*#%@');
	video.loop();
	video.volume(0);
	await video.play();
});

t.draw(() => {
	t.background(6, 8, 20);
	if (!video) return;

	const halfWidth = t.grid.cols / 2;
	const normalizedX = (t.mouse.x + halfWidth) / t.grid.cols;
	const clampedX = Math.max(0, Math.min(1, normalizedX));
	rate = 0.1 + clampedX * 3.9;

	video.speed(rate);
	t.image(video);
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

	drawText('TEXTMODEVIDEO.SPEED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: PLAYBACK RATE CONTROL', x, y++, 100, 220, 255);
	drawText('Alters playback speed dynamically.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);

	if (video) {
		drawText(`CURRENT SPEED: ${rate.toFixed(1)}x`, x, y++, 255, 210, 90);
		drawText('MOVE MOUSE HORIZONTALLY TO CHANGE', x, y++, 120, 205, 255);
	} else {
		drawText('LOADING VIDEO...', x, y++, 255, 180, 120);
	}
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

Stop the video and seek to the beginning.

#### Returns

`void`

#### Example

```javascript
const VIDEO_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let video = null;
let playing = false;
let restartTimeout = null;

t.setup(async () => {
	video = await t.loadVideo(VIDEO_URL);
	video.characters(' .:-=+*#%@');
	video.loop();
	video.volume(0);
	await video.play();
});

t.draw(() => {
	t.background(6, 8, 20);
	if (!video) return;

	t.image(video);
	playing = video.isPlaying;
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

	drawText('TEXTMODEVIDEO.STOP', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TERMINATING PLAYBACK', x, y++, 100, 220, 255);
	drawText('Stops video and resets timeline.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);

	if (video) {
		const state = playing ? 'PLAYING' : 'STOPPED';
		drawText(`PLAY: ${state}`, x, y++, 255, 210, 90);
		drawText("PRESS 'S' TO STOP VIDEO", x, y++, 120, 205, 255);
		if (restartTimeout) {
			drawText('RESTARTING IN 1 SECOND...', x, y++, 140, 160, 190);
		}
	} else {
		drawText('LOADING VIDEO...', x, y++, 255, 180, 120);
	}
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

Seek to a playback time.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `seconds` | `number` | Time in seconds. |

#### Returns

`this`

#### Example

```javascript
const VIDEO_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let video = null;
let currentTime = 0;
let duration = 0;

t.setup(async () => {
	video = await t.loadVideo(VIDEO_URL);
	video.characters(' .:-=+*#%@');
	video.loop();
	video.volume(0);
	await video.play();
});

t.draw(() => {
	t.background(6, 8, 20);
	if (!video) return;

	t.image(video);
	currentTime = video.currentTime;
	duration = video.duration || 1;
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

	drawText('TEXTMODEVIDEO.TIME', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: JUMPING TO PLAYBACK TIME', x, y++, 100, 220, 255);
	drawText('Sets a new playback position.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);

	if (video) {
		drawText(`CURRENT TIME: ${currentTime.toFixed(1)}s`, x, y++, 255, 210, 90);
		drawText(`DURATION    : ${duration.toFixed(1)}s`, x, y++, 255, 210, 90);
		drawText('CLICK ANYWHERE TO JUMP RANDOM TIME', x, y++, 120, 205, 255);
	} else {
		drawText('LOADING VIDEO...', x, y++, 255, 180, 120);
	}
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

Set playback volume.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `level` | `number` | Volume level from `0` to `1`. Videos loaded through [Textmodifier.loadVideo](../../../classes/Textmodifier.md#loadvideo) start muted to satisfy autoplay rules. Unmute the underlying [videoElement](#videoelement) in response to a user gesture before expecting audible volume changes. |

#### Returns

`this`

#### Example

```javascript
const VIDEO_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let video = null;
let audioEnabled = false;
let level = 0;

t.setup(async () => {
	video = await t.loadVideo(VIDEO_URL);
	video.characters(' .:-=+*#%@');
	video.loop();
	await video.play();
});

t.draw(() => {
	t.background(6, 8, 20);
	if (!video) return;

	t.image(video);

	if (audioEnabled) {
		const halfHeight = t.grid.rows / 2;
		const normalizedY = (t.mouse.y + halfHeight) / t.grid.rows;
		level = 1 - Math.max(0, Math.min(1, normalizedY));
		video.volume(level);
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

	drawText('TEXTMODEVIDEO.VOLUME', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: AUDIO VOLUME AMPLITUDE', x, y++, 100, 220, 255);
	drawText('Controls video audio loudness.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);

	if (video) {
		if (audioEnabled) {
			drawText(`VOLUME LEVEL: ${level.toFixed(2)}`, x, y++, 255, 210, 90);
			drawText('MOVE MOUSE VERTICALLY FOR VOLUME', x, y++, 120, 205, 255);
		} else {
			drawText('CLICK ANYWHERE TO UNMUTE AUDIO', x, y++, 255, 120, 120);
		}
	} else {
		drawText('LOADING VIDEO...', x, y++, 255, 180, 120);
	}
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
