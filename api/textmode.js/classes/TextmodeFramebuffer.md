---
layout: doc
editLink: true
title: TextmodeFramebuffer
description: Framebuffer class for managing offscreen rendering targets initialized via Textmodifier.createFramebuffer.
category: Classes
api: true
kind: Class
lastModified: 2026-04-06
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

Get the number of color attachments in this framebuffer

##### Returns

`number`

***

### framebuffer

#### Get Signature

```ts
get framebuffer(): null | WebGLFramebuffer;
```

Get the WebGLFramebuffer object

##### Returns

`null` \| `WebGLFramebuffer`

***

### height

#### Get Signature

```ts
get height(): number;
```

Get the current framebuffer height in grid cells.

##### Returns

`number`

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

Get all textures associated with this framebuffer.

Useful for binding textures for reading in shaders.

Textmode framebuffers allocate 3 attachments by default:
- 0: Character data (RG), flags (B), and rotation (A)
- 1: Character colors (RGBA)
- 2: Cell background colors (RGBA)

##### Returns

`WebGLTexture`[]

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

Get the current framebuffer width in grid cells.

##### Returns

`number`

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
	width: 720,
	height: 420,
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
	t.background(16, 10, 28);

	for (let i = 0; i < 12; i++) {
		const angle = t.frameCount * 0.03 + i * 0.52;
		t.push();
		t.charColor(255, 170 + i * 5, 90 + i * 10);
		t.char(i % 2 === 0 ? '+' : '*');
		t.translate(Math.cos(angle) * 5, Math.sin(angle) * 3);
		t.point();
		t.pop();
	}

	fb.end();

	t.background(6, 8, 18);
	for (let i = 0; i < 4; i++) {
		const angle = t.frameCount * 0.015 + i * (Math.PI / 2);
		t.push();
		t.translate(Math.cos(angle) * 14, Math.sin(angle) * 8);
		t.rotateZ(i * 90 + t.frameCount);
		t.image(fb);
		t.pop();
	}

	writeLine('BEGIN() BINDS THE FBO', -11, [220, 230, 255]);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="https://code.textmode.art/docs/leaderboard" target="_blank" rel="noopener noreferrer">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeFramebuffer/begin/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
	width: 720,
	height: 420,
	fontSize: 16,
});

let generation = 0;
let fb;

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

function rebuildFramebuffer() {
	if (fb) {
		fb.dispose();
	}

	generation += 1;

	fb = t.createFramebuffer({
		width: 12 + (generation % 3) * 4,
		height: 8 + (generation % 2) * 2,
	});

	fb.begin();
	t.background(14, 12, 30);
	writeLine(`GEN ${generation}`, -1, [255, 220, 140]);
	writeLine('REBUILT', 2, [120, 210, 255]);
	fb.end();
}

rebuildFramebuffer();

t.draw(() => {
	if (t.frameCount > 0 && t.frameCount % 150 === 0) {
		rebuildFramebuffer();
	}

	t.background(6, 8, 18);
	t.push();
	t.translate(0, -4);
	t.rotateZ(Math.sin(t.frameCount * 0.03) * 8);
	t.image(fb);
	t.pop();

	writeLine('DISPOSE BEFORE REBUILDING', 8, [220, 230, 255]);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="https://code.textmode.art/docs/leaderboard" target="_blank" rel="noopener noreferrer">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeFramebuffer/dispose/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
	width: 720,
	height: 420,
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
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="https://code.textmode.art/docs/leaderboard" target="_blank" rel="noopener noreferrer">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeFramebuffer/end/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
	width: 720,
	height: 420,
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
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="https://code.textmode.art/docs/leaderboard" target="_blank" rel="noopener noreferrer">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeFramebuffer/resize/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

#### Implementation of

```ts
IFramebuffer.resize
```
