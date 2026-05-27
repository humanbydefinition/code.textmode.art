---
layout: doc
editLink: true
title: TextmodeFramebuffer
description: Framebuffer class for managing offscreen rendering targets initialized via Textmodifier.createFramebuffer.
category: Classes
api: true
kind: Class
lastModified: 2026-05-27
hasConstructor: false
---

[textmode.js](../index.md) / TextmodeFramebuffer

# Class: TextmodeFramebuffer

Framebuffer class for managing offscreen rendering targets initialized via [Textmodifier.createFramebuffer](Textmodifier.md#createframebuffer).

`TextmodeFramebuffer` instances contain 3 attachments to support the rendering pipeline:
- Attachment 0: Character and transform data *(RGBA)*
- Attachment 1: Primary color data *(RGBA)*
- Attachment 2: Secondary color data *(RGBA)*

## Extends

- `Disposable`

## Implements

- `IFramebuffer`

## Accessors

### attachmentCount

#### Get Signature

```ts
get attachmentCount(): number;
```

Number of color attachments available on this framebuffer.

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
let fb;

function drawText(text, x, y, r = 200, g = 220, b = 255) {
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
	// Requesting exactly 4 color attachments
	fb = t.createFramebuffer({ width: 14, height: 10, attachments: 4 });
});

t.draw(() => {
	t.background(8, 10, 18);

	fb.begin();
	t.clear();
	t.background(15, 12, 30);
	t.charColor(255, 180, 120);
	t.char('A');
	t.push();
	t.rotateZ(t.frameCount * 2.0);
	t.rect(8, 6);
	t.pop();
	fb.end();

	t.push();
	t.translate(0, 3);
	t.image(fb);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('ATTACHMENTCOUNT', x, y++, 100, 255, 140);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText('Number of color attachments.', x, y++, 100, 220, 255);
	drawText('--------------------------------', x, y++, 80, 100, 150);

	const count = fb ? fb.attachmentCount : 0;
	drawText(`Attachments: ${count} color targets`, x, y++, 120, 255, 180);
	drawText('0: Character/transform data', x, y++, 160, 160, 160);
	drawText('1: Primary character color', x, y++, 160, 160, 160);
	drawText('2: Secondary background color', x, y++, 160, 160, 160);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### framebuffer

#### Get Signature

```ts
get framebuffer(): WebGLFramebuffer | null;
```

The underlying WebGLFramebuffer handle.

##### Returns

`WebGLFramebuffer` \| `null`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let fb;

function drawText(text, x, y, r = 200, g = 220, b = 255) {
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
	fb = t.createFramebuffer({ width: 14, height: 14 });
});

t.draw(() => {
	t.background(8, 10, 18);

	fb.begin();
	t.clear();
	t.background(10, 20, 32);
	t.charColor(120, 220, 255);
	t.char('F');
	t.push();
	t.rotateZ(t.frameCount * 2.0);
	t.rect(8, 8);
	t.pop();
	fb.end();

	t.push();
	t.translate(0, 3);
	t.image(fb);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('FRAMEBUFFER', x, y++, 100, 255, 140);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText('The raw WebGLFramebuffer handle.', x, y++, 100, 220, 255);
	drawText('--------------------------------', x, y++, 80, 100, 150);

	const handleExists = fb && fb.framebuffer !== null;
	const typeName = fb && fb.framebuffer ? fb.framebuffer.constructor.name : 'null';
	const handle = handleExists ? 'Active' : 'null';
	drawText(`HANDLE: ${handle}`, x, y++, 120, 255, 180);
	drawText(`Type  : ${typeName}`, x, y++, 160, 160, 160);
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

Height of the framebuffer in pixels.

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
let fb;

function drawText(text, x, y, r = 200, g = 220, b = 255) {
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
	fb = t.createFramebuffer({ width: 14, height: 12 });
});

t.draw(() => {
	t.background(8, 10, 18);

	// Draw vertical ruler ticks inside the FBO showing height in cells
	fb.begin();
	t.clear();
	t.background(24, 12, 18);
	t.charColor(255, 100, 150);
	t.char('-');
	t.rect(fb.width, fb.height);
	for (let row = 0; row < fb.height; row++) {
		const cx = -Math.floor(fb.width / 2);
		const cy = -Math.floor(fb.height / 2) + row;
		drawText(`${row}`, cx + 1, cy, 255, 220, 140);
	}
	fb.end();

	t.push();
	t.translate(0, 3);
	t.image(fb);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('HEIGHT', x, y++, 100, 255, 140);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText('FBO height in grid cells (rows).', x, y++, 100, 220, 255);
	drawText('--------------------------------', x, y++, 80, 100, 150);

	const val = fb ? fb.height : 0;
	drawText(`FBO Height: ${val} cells`, x, y++, 120, 255, 180);
	drawText(`Canvas   : ${t.height} px`, x, y++, 160, 160, 160);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
IFramebuffer.height
```

***

### textures

#### Get Signature

```ts
get textures(): WebGLTexture[];
```

The color attachment textures owned by this framebuffer.

##### Returns

`WebGLTexture`[]

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let fb;

function drawText(text, x, y, r = 200, g = 220, b = 255) {
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
	// 3-attachment FBO: char data, primary color, secondary color
	fb = t.createFramebuffer({ width: 14, height: 10, attachments: 3 });
});

t.draw(() => {
	t.background(8, 10, 18);

	fb.begin();
	t.clear();
	t.background(10, 18, 28);
	t.charColor(140, 220, 255);
	t.char('T');
	t.push();
	t.rotateZ(t.frameCount * 2.0);
	t.rect(8, 6);
	t.pop();
	fb.end();

	t.push();
	t.translate(0, 3);
	t.image(fb);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTURES', x, y++, 100, 255, 140);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText('Array of WebGLTexture handles.', x, y++, 100, 220, 255);
	drawText('--------------------------------', x, y++, 80, 100, 150);

	const arr = fb ? fb.textures : [];
	drawText(`Count: ${arr.length} textures`, x, y++, 120, 255, 180);
	const labels = ['Char/transform', 'Primary color', 'Secondary color'];
	for (let i = 0; i < arr.length; i++) {
		const ok = arr[i] instanceof WebGLTexture;
		const label = labels[i] ?? 'extra';
		const state = ok ? 'OK' : 'null';
		drawText(`[${i}] ${label}: ${state}`, x, y++, 160, 160, 160);
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
IFramebuffer.textures
```

***

### width

#### Get Signature

```ts
get width(): number;
```

Width of the framebuffer in pixels.

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
let fb;

function drawText(text, x, y, r = 200, g = 220, b = 255) {
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
	fb = t.createFramebuffer({ width: 22, height: 10 });
});

t.draw(() => {
	t.background(8, 10, 18);

	fb.begin();
	t.clear();
	t.background(12, 24, 18);

	// Border
	t.charColor(100, 255, 150);
	t.char('|');
	t.rect(fb.width, fb.height);

	fb.end();

	t.push();
	t.translate(0, 3);
	t.image(fb);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('WIDTH', x, y++, 100, 255, 140);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText('FBO width in grid cells (cols).', x, y++, 100, 220, 255);
	drawText('--------------------------------', x, y++, 80, 100, 150);

	const val = fb ? fb.width : 0;
	drawText(`FBO Width: ${val} cells`, x, y++, 120, 255, 180);
	drawText(`Canvas  : ${t.width} px`, x, y++, 160, 160, 160);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
IFramebuffer.width
```

## Methods

### begin()

```ts
begin(): void;
```

Begin rendering into this framebuffer.

This binds the framebuffer, updates the viewport, clears any cached pixel reads,
and pushes renderer state so drawing commands are isolated from the previous target.

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
const fb = t.createFramebuffer({ width: 20, height: 12 });

function drawText(text, x, y, r = 200, g = 220, b = 255) {
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
	const time = t.frameCount * 0.05;

	fb.begin();
	t.background(15, 10, 30);
	for (let i = 0; i < 12; i++) {
		const angle = time + i * 0.52;
		t.push();
		t.charColor(255, 150 + i * 5, 100 + i * 8);
		t.char('@');
		t.translate(Math.cos(angle) * 6, Math.sin(angle) * 4);
		t.rect(2, 2);
		t.pop();
	}
	fb.end();

	t.background(6, 8, 18);
	for (let i = 0; i < 4; i++) {
		const angle = time * 0.3 + i * (Math.PI / 2);
		t.push();
		t.translate(Math.cos(angle) * 16, Math.sin(angle) * 8);
		t.image(fb);
		t.pop();
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('BEGIN', x, y++, 100, 255, 140);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText('Redirect draw calls to the FBO.', x, y++, 100, 220, 255);
	drawText('4 copies orbit the screen using', x, y++, 140, 160, 190);
	drawText('the same offscreen buffer.', x, y++, 140, 160, 190);
	drawText('--------------------------------', x, y++, 80, 100, 150);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
IFramebuffer.begin
```

***

### dispose()

```ts
dispose(): void;
```

Dispose the framebuffer, attached textures, and optional depth renderbuffer.

Call this when a custom framebuffer is no longer needed to release GPU resources early.

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
let fb = null;
let fbSize = 12;
let growing = true;

function drawText(text, x, y, r = 200, g = 220, b = 255) {
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

function rebuildFramebuffer() {
	if (fb) fb.dispose();

	if (growing) {
		fbSize += 2;
		if (fbSize >= 20) growing = false;
	} else {
		fbSize -= 2;
		if (fbSize <= 10) growing = true;
	}

	fb = t.createFramebuffer({ width: fbSize, height: fbSize });
	fb.begin();
	t.background(15, 10, 30);
	t.charColor(255, 100, 150);
	t.char('+');
	t.rect(fbSize, fbSize);
	fb.end();
}

t.setup(() => {
	rebuildFramebuffer();
});

t.draw(() => {
	t.background(8, 10, 18);

	if (t.frameCount % 90 === 0) rebuildFramebuffer();

	t.push();
	t.translate(0, 2);
	t.rotateZ(t.frameCount * 1.5);
	t.image(fb);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('DISPOSE', x, y++, 100, 255, 140);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText('Releases GPU resources early.', x, y++, 100, 220, 255);
	drawText('FBO is rebuilt every 90 frames.', x, y++, 140, 160, 190);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText(`Size: ${fbSize}x${fbSize} cells`, x, y++, 120, 255, 180);
	const rem = 90 - (t.frameCount % 90);
	drawText(`Rebuild in: ${rem} frames`, x, y++, 160, 160, 160);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
IFramebuffer.dispose
```

#### Overrides

```ts
Disposable.dispose
```

***

### end()

```ts
end(): void;
```

Finish rendering into this framebuffer and restore the previous render target.

This flushes pending instance batches before restoring the previous framebuffer
and viewport state from the renderer stack.

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
let fb;

function drawText(text, x, y, r = 200, g = 220, b = 255) {
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
	fb = t.createFramebuffer({ width: 16, height: 10 });
});

t.draw(() => {
	t.background(8, 10, 18);

	// 1. Begin offscreen render pass
	fb.begin();
	t.clear();
	t.background(22, 10, 30);
	t.charColor(255, 180, 100);
	t.char('O');
	t.rect(fb.width, fb.height);
	// 2. end() restores the main canvas as the draw target
	fb.end();

	// 3. Draw the FBO result onto the main canvas
	t.push();
	t.translate(0, 3);
	t.rotateZ(t.frameCount * 1.0);
	t.image(fb);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('END', x, y++, 100, 255, 140);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText('Restores main canvas target.', x, y++, 100, 220, 255);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText('1. fb.begin() -> draw to FBO', x, y++, 140, 160, 190);
	drawText('2. fb.end()   -> restore main', x, y++, 140, 160, 190);
	drawText('3. t.image(fb)-> blit to screen', x, y++, 140, 160, 190);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
IFramebuffer.end
```

***

### readPixels()

```ts
readPixels(attachmentIndex): Uint8Array;
```

Read RGBA pixel data from one attachment.

The returned data is vertically flipped so the first row matches the top row
of the framebuffer when used from JavaScript.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `attachmentIndex` | `number` | Zero-based attachment index to read. |

#### Returns

`Uint8Array`

RGBA pixel data for the selected attachment.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let fb;

function drawText(text, x, y, r = 200, g = 220, b = 255) {
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
	fb = t.createFramebuffer({ width: 8, height: 8 });
});

t.draw(() => {
	t.background(8, 10, 18);

	fb.begin();
	t.clear();
	t.background(10, 15, 30);
	t.push();
	t.rotateZ(t.frameCount * 2.5);
	t.charColor(255, 120, 80);
	t.char('*');
	t.rect(6, 2);
	t.pop();
	fb.end();

	// Read primary color attachment and render a char-mapped pixel grid
	const pixels = fb.readPixels(1);
	t.push();
	t.translate(5, -1);
	for (let py = 0; py < 8; py++) {
		for (let px = 0; px < 8; px++) {
			const idx = (py * 8 + px) * 4;
			const r = pixels[idx],
				g = pixels[idx + 1],
				b = pixels[idx + 2];
			t.push();
			t.translate(px, py);
			if (r > 30 || g > 30 || b > 30) {
				t.charColor(r, g, b);
				t.char('#');
			} else {
				t.charColor(40, 50, 70);
				t.char('.');
			}
			t.point();
			t.pop();
		}
	}
	t.pop();

	t.push();
	t.translate(-8, 3);
	t.image(fb, 16, 16);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('READPIXELS', x, y++, 100, 255, 140);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText('Raw RGBA bytes from attachment.', x, y++, 100, 220, 255);
	drawText('Right: char-map of pixel data.', x, y++, 140, 160, 190);
	drawText('--------------------------------', x, y++, 80, 100, 150);

	const px = fb ? fb.readPixels(1) : [];
	drawText(`Buffer: ${px.length} bytes`, x, y++, 120, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
IFramebuffer.readPixels
```

***

### resize()

```ts
resize(width, height): void;
```

Resize the framebuffer and all attached textures.

Existing pixel cache entries are cleared, and the optional depth renderbuffer
is resized to match the new dimensions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `width` | `number` | New framebuffer width in grid cells. |
| `height` | `number` | New framebuffer height in grid cells. |

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
let fb;
let currentW = 12;
let currentH = 8;

function drawText(text, x, y, r = 200, g = 220, b = 255) {
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
	fb = t.createFramebuffer({ width: currentW, height: currentH });
});

t.draw(() => {
	t.background(8, 10, 18);

	// Oscillate FBO dimensions to demonstrate resize()
	const nextW = 10 + Math.round((Math.sin(t.frameCount * 0.03) * 0.5 + 0.5) * 16);
	const nextH = 6 + Math.round((Math.cos(t.frameCount * 0.04) * 0.5 + 0.5) * 10);

	if (nextW !== currentW || nextH !== currentH) {
		fb.resize(nextW, nextH);
		currentW = nextW;
		currentH = nextH;
	}

	fb.begin();
	t.clear();
	t.background(20, 10, 35);
	t.charColor(255, 200, 100);
	t.char('#');
	t.rect(currentW, currentH);
	const sizeStr = `${currentW}x${currentH}`;
	drawText(sizeStr, -Math.floor(sizeStr.length / 2), 0, 255, 255, 255);
	fb.end();

	t.push();
	t.translate(0, 3);
	t.rotateZ(Math.sin(t.frameCount * 0.02) * 5);
	t.image(fb);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('RESIZE', x, y++, 100, 255, 140);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText('Resize offscreen textures live.', x, y++, 100, 220, 255);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText(`W: ${currentW}  H: ${currentH} cells`, x, y++, 120, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
IFramebuffer.resize
```
