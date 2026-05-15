---
layout: doc
editLink: true
title: TextmodeFramebuffer
description: Framebuffer class for managing offscreen rendering targets initialized via Textmodifier.createFramebuffer.
category: Classes
api: true
kind: Class
lastModified: 2026-05-15
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });
const framebuffer = t.createFramebuffer({ width: 26, height: 14, attachments: 4 });

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
	framebuffer.begin();
	t.background(10, 14, 28);
	t.push();
	t.rotateZ(t.frameCount * 1.6);
	t.char('F');
	t.charColor(255, 214, 120);
	t.rect(framebuffer.width - 6, framebuffer.height - 6);
	t.pop();
	framebuffer.end();

	t.background(4, 6, 14);
	t.image(framebuffer, framebuffer.width, framebuffer.height);

	drawLabel(
		`width ${framebuffer.width}  height ${framebuffer.height}`,
		-Math.floor(t.grid.rows * 0.34),
		[255, 220, 140]
	);
	drawLabel(`framebuffer ${framebuffer.framebuffer ? 'allocated' : 'missing'}`, Math.floor(t.grid.rows * 0.28));
	drawLabel(
		`textures ${framebuffer.textures.length}  attachments ${framebuffer.attachmentCount}`,
		Math.floor(t.grid.rows * 0.36),
		[120, 205, 255]
	);
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });
const framebuffer = t.createFramebuffer({ width: 26, height: 14, attachments: 4 });

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
	framebuffer.begin();
	t.background(10, 14, 28);
	t.push();
	t.rotateZ(t.frameCount * 1.6);
	t.char('F');
	t.charColor(255, 214, 120);
	t.rect(framebuffer.width - 6, framebuffer.height - 6);
	t.pop();
	framebuffer.end();

	t.background(4, 6, 14);
	t.image(framebuffer, framebuffer.width, framebuffer.height);

	drawLabel(
		`width ${framebuffer.width}  height ${framebuffer.height}`,
		-Math.floor(t.grid.rows * 0.34),
		[255, 220, 140]
	);
	drawLabel(`framebuffer ${framebuffer.framebuffer ? 'allocated' : 'missing'}`, Math.floor(t.grid.rows * 0.28));
	drawLabel(
		`textures ${framebuffer.textures.length}  attachments ${framebuffer.attachmentCount}`,
		Math.floor(t.grid.rows * 0.36),
		[120, 205, 255]
	);
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });
const framebuffer = t.createFramebuffer({ width: 26, height: 14, attachments: 4 });

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
	framebuffer.begin();
	t.background(10, 14, 28);
	t.push();
	t.rotateZ(t.frameCount * 1.6);
	t.char('F');
	t.charColor(255, 214, 120);
	t.rect(framebuffer.width - 6, framebuffer.height - 6);
	t.pop();
	framebuffer.end();

	t.background(4, 6, 14);
	t.image(framebuffer, framebuffer.width, framebuffer.height);

	drawLabel(
		`width ${framebuffer.width}  height ${framebuffer.height}`,
		-Math.floor(t.grid.rows * 0.34),
		[255, 220, 140]
	);
	drawLabel(`framebuffer ${framebuffer.framebuffer ? 'allocated' : 'missing'}`, Math.floor(t.grid.rows * 0.28));
	drawLabel(
		`textures ${framebuffer.textures.length}  attachments ${framebuffer.attachmentCount}`,
		Math.floor(t.grid.rows * 0.36),
		[120, 205, 255]
	);
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });
const framebuffer = t.createFramebuffer({ width: 26, height: 14, attachments: 4 });

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
	framebuffer.begin();
	t.background(10, 14, 28);
	t.push();
	t.rotateZ(t.frameCount * 1.6);
	t.char('F');
	t.charColor(255, 214, 120);
	t.rect(framebuffer.width - 6, framebuffer.height - 6);
	t.pop();
	framebuffer.end();

	t.background(4, 6, 14);
	t.image(framebuffer, framebuffer.width, framebuffer.height);

	drawLabel(
		`width ${framebuffer.width}  height ${framebuffer.height}`,
		-Math.floor(t.grid.rows * 0.34),
		[255, 220, 140]
	);
	drawLabel(`framebuffer ${framebuffer.framebuffer ? 'allocated' : 'missing'}`, Math.floor(t.grid.rows * 0.28));
	drawLabel(
		`textures ${framebuffer.textures.length}  attachments ${framebuffer.attachmentCount}`,
		Math.floor(t.grid.rows * 0.36),
		[120, 205, 255]
	);
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });
const framebuffer = t.createFramebuffer({ width: 26, height: 14, attachments: 4 });

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
	framebuffer.begin();
	t.background(10, 14, 28);
	t.push();
	t.rotateZ(t.frameCount * 1.6);
	t.char('F');
	t.charColor(255, 214, 120);
	t.rect(framebuffer.width - 6, framebuffer.height - 6);
	t.pop();
	framebuffer.end();

	t.background(4, 6, 14);
	t.image(framebuffer, framebuffer.width, framebuffer.height);

	drawLabel(
		`width ${framebuffer.width}  height ${framebuffer.height}`,
		-Math.floor(t.grid.rows * 0.34),
		[255, 220, 140]
	);
	drawLabel(`framebuffer ${framebuffer.framebuffer ? 'allocated' : 'missing'}`, Math.floor(t.grid.rows * 0.28));
	drawLabel(
		`textures ${framebuffer.textures.length}  attachments ${framebuffer.attachmentCount}`,
		Math.floor(t.grid.rows * 0.36),
		[120, 205, 255]
	);
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

const fb = t.createFramebuffer({ width: 20, height: 12 });

function drawLabel(target, text, x, y, col = [255, 255, 255]) {
	target.push();
	target.translate(x, y);
	target.charColor(...col);
	for (let i = 0; i < text.length; i++) {
		target.push();
		target.translate(i, 0);
		target.char(text[i]);
		target.point();
		target.pop();
	}
	target.pop();
}

t.draw(() => {
	const time = t.frameCount * 0.05;

	fb.begin();
	t.background(15, 10, 30);

	for (let i = 0; i < 15; i++) {
		const angle = time + i * 0.5;
		t.push();
		t.charColor(255, 150 + i * 5, 100 + i * 8);
		t.char('@');
		t.translate(Math.cos(angle) * 6, Math.sin(angle) * 4);
		t.rect(2, 2);
		t.pop();
	}

	drawLabel(t, 'OFF-SCREEN', -(10 - 1) / 2, 0, [255, 220, 150]);

	fb.end();

	t.background(6, 8, 18);
	const { cols, rows } = t.grid;

	for (let i = 0; i < 4; i++) {
		const angle = time * 0.3 + i * (Math.PI / 2);
		t.push();
		t.translate(Math.cos(angle) * 16, Math.sin(angle) * 8);

		t.image(fb);
		t.pop();
	}

	const title = '--- FRAMEBUFFER BEGIN() ---';
	drawLabel(t, title, -(title.length - 1) / 2, -(rows - 1) / 2 + 2, [180, 220, 255]);
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

let fb;
let fbSize = 10;
let growing = true;

function drawLabel(text, x, y, col = [255, 255, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(...col);
	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}
	t.pop();
}

function rebuildFramebuffer() {
	if (fb) {
		fb.dispose();
	}

	if (growing) {
		fbSize += 4;
		if (fbSize >= 26) growing = false;
	} else {
		fbSize -= 4;
		if (fbSize <= 10) growing = true;
	}

	fb = t.createFramebuffer({ width: fbSize, height: fbSize });

	fb.begin();
	t.background(10, 5, 20);
	t.charColor(255, 100, 150);
	t.char('+');
	t.rect(fbSize, fbSize);

	const sizeText = `${fbSize}x${fbSize}`;
	drawLabel(sizeText, -(sizeText.length - 1) / 2, 0, [255, 200, 100]);
	fb.end();
}

rebuildFramebuffer();

t.draw(() => {
	t.background(10, 15, 25);
	const { rows } = t.grid;
	const time = t.frameCount * 0.05;

	if (t.frameCount % 60 === 0) {
		rebuildFramebuffer();
	}

	t.push();
	t.translate(0, -2);
	t.rotateZ(Math.sin(time) * 4);

	t.char(' ');
	t.charColor(255, 255, 255);
	t.cellColor(150, 50, 100, 100);
	t.rect(fb.width + 2, fb.height + 2);

	t.image(fb);
	t.pop();

	const title = '--- DISPOSE & REBUILD ---';
	drawLabel(title, -(title.length - 1) / 2, -(rows - 1) / 2 + 2, [180, 220, 255]);

	const hint = 'FBO is destroyed and recreated every 60 frames';
	drawLabel(hint, -(hint.length - 1) / 2, (rows - 1) / 2 - 2, [150, 150, 200]);
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

const fb = t.createFramebuffer({ width: 18, height: 10 });

function writeLine(text, y, color) {
	const startX = -((text.length - 1) * 0.5);
	t.charColor(...color);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(startX + i, y);
		t.char(text[i]);
		t.point();
		t.pop();
	}
}

t.draw(() => {
	fb.begin();
	t.background(22, 8, 26);
	writeLine('OFFSCREEN', -1, [255, 220, 140]);
	writeLine('PASS', 2, [120, 210, 255]);
	fb.end();

	t.background(4, 6, 14);
	t.push();
	t.translate(0, -4);
	t.image(fb);
	t.pop();

	const wave = Math.sin(t.frameCount * 0.08) * 0.5 + 0.5;
	t.charColor(120 + wave * 135, 220, 255);
	t.char('*');

	for (let i = 0; i < 18; i++) {
		t.push();
		t.translate(i - 8.5, 8);
		t.point();
		t.pop();
	}

	writeLine('END() RETURNS TO THE MAIN CANVAS', 11, [220, 230, 255]);
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });
const framebuffer = t.createFramebuffer({ width: 12, height: 12 });

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
	framebuffer.begin();
	t.background(0, 0, 0);
	t.push();
	t.rotateZ(t.frameCount * 2);
	t.charColor(255, 120, 80);
	t.cellColor(20, 80, 160);
	t.rect(framebuffer.width - 4, framebuffer.height - 4);
	t.pop();
	framebuffer.end();

	const pixels = framebuffer.readPixels(1);
	const centerIndex =
		(Math.floor(framebuffer.height / 2) * framebuffer.width + Math.floor(framebuffer.width / 2)) * 4;
	const rgba = pixels.slice(centerIndex, centerIndex + 4);

	t.background(6, 8, 18);
	t.image(framebuffer, framebuffer.width * 2, framebuffer.height * 2);

	drawLabel('readPixels(1)', -Math.floor(t.grid.rows * 0.34), [255, 225, 140]);
	drawLabel(`center rgba ${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]}`, Math.floor(t.grid.rows * 0.28));
	drawLabel(`buffer bytes ${pixels.length}`, Math.floor(t.grid.rows * 0.36), [120, 205, 255]);
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

const fb = t.createFramebuffer({ width: 12, height: 6 });

let lastWidth = 12;
let lastHeight = 6;

function writeLine(text, y, color) {
	const startX = -((text.length - 1) * 0.5);
	t.charColor(...color);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(startX + i, y);
		t.char(text[i]);
		t.point();
		t.pop();
	}
}

t.draw(() => {
	const width = 10 + Math.round((Math.sin(t.frameCount * 0.035) * 0.5 + 0.5) * 18);
	const height = 6 + Math.round((Math.cos(t.frameCount * 0.05) * 0.5 + 0.5) * 10);

	if (width !== lastWidth || height !== lastHeight) {
		fb.resize(width, height);
		lastWidth = width;
		lastHeight = height;
	}

	fb.begin();
	t.background(18, 18, 42);
	writeLine('RESIZE', -1, [255, 210, 120]);
	writeLine(`${width}x${height}`, 2, [140, 210, 255]);
	fb.end();

	t.background(5, 8, 18);
	t.push();
	t.rotateZ(Math.sin(t.frameCount * 0.03) * 10);
	t.image(fb);
	t.pop();

	writeLine('FRAMEBUFFER.RESIZE()', -11, [220, 230, 255]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
IFramebuffer.resize
```
