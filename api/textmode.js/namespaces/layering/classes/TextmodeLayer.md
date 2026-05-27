---
layout: doc
editLink: true
title: TextmodeLayer
description: A single layer within a multi-layered textmode rendering context.
category: Classes
api: true
namespace: layering
kind: Class
lastModified: 2026-05-27
hasConstructor: false
---

[textmode.js](../../../index.md) / [layering](../index.md) / TextmodeLayer

# Class: TextmodeLayer

A single layer within a multi-layered textmode rendering context.

Each layer has its own draw callback, grid, glyph source, filters, camera state,
opacity, blend mode, offset, and rotation.

Draw on a layer by providing a callback, similar to [Textmodifier.draw](../../../classes/Textmodifier.md#draw)
on the base layer.

Plugins can extend TextmodeLayer with additional methods using the plugin API's
`extendLayer` function. For example, the `textmode-synth` plugin adds a `.synth()`
method for hydra-like procedural generation.

The base layer, which is always present at the bottom of the layer stack,
can be accessed via [Textmodifier.layers](../../../classes/Textmodifier.md#layers) as `t.layers.base`.

## Accessors

### asciiFramebuffer

#### Get Signature

```ts
get asciiFramebuffer(): 
  | TextmodeFramebuffer
  | undefined;
```

Framebuffer containing this layer's rendered textmode output.

##### Returns

  \| [`TextmodeFramebuffer`](../../../classes/TextmodeFramebuffer.md)
  \| `undefined`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const layer = t.layers.add({ blendMode: 'screen' });
const labelLayer = t.layers.add();

function drawText(text, x, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(rgb[0], rgb[1], rgb[2]);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

layer.draw(() => {
	t.clear();
	t.push();
	t.rotateZ(t.frameCount * 2);
	t.char('*');
	t.charColor(120, 220, 255);
	t.rect(14, 8);
	t.pop();
});

t.draw(() => {
	t.background(8, 10, 18);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	const fb = layer.asciiFramebuffer;

	drawText('TEXTMODELAYER.ASCIIFRAMEBUFFER', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: READ ASCII OUTPUT', x, y++, [100, 220, 255]);
	drawText('Samples the converted texture.', x, y++, [140, 160, 190]);
	drawText('Center pixel updates each frame.', x, y++, [140, 160, 190]);
	if (!fb) return;

	const pixels = fb.readPixels(0);
	const index = (Math.floor(fb.height / 2) * fb.width + Math.floor(fb.width / 2)) * 4;
	const rgb = `${pixels[index]}, ${pixels[index + 1]}, ${pixels[index + 2]}`;
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(`RGB: ${rgb}`, x, y++, [140, 255, 180]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### drawFramebuffer

#### Get Signature

```ts
get drawFramebuffer(): 
  | TextmodeFramebuffer
  | undefined;
```

Draw framebuffer for this layer.

Returns `undefined` before the layer is initialized.

##### Returns

  \| [`TextmodeFramebuffer`](../../../classes/TextmodeFramebuffer.md)
  \| `undefined`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const sourceLayer = t.layers.add();
const labelLayer = t.layers.add();

function drawText(text, x, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}

	t.pop();
}

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	drawText(text, -Math.floor(text.length / 2), y, rgb);
}

sourceLayer.draw(() => {
	t.clear();
	const time = t.frameCount * 0.03;

	t.push();
	t.rotateZ((time * 180) / Math.PI);
	t.charColor(255, 180, 100);
	t.char('#');
	t.rect(14, 1);
	t.rect(1, 14);
	t.pop();
});

t.draw(() => {
	t.background(6, 10, 22);

	const fb = sourceLayer.drawFramebuffer;

	if (fb) {
		t.push();
		t.translate(0, 0);
		t.image(fb, 24, 14);
		t.pop();

		drawCenteredText('INTERNAL DATA BUFFER', 10, [140, 220, 255]);
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	const fb = sourceLayer.drawFramebuffer;

	drawText('TEXTMODELAYER.DRAWFRAMEBUFFER', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: RAW DRAW BUFFER', x, y++, [100, 220, 255]);
	drawText('Captures pre-ASCII drawing.', x, y++, [140, 160, 190]);
	drawText('Image preview reads the buffer.', x, y++, [140, 160, 190]);
	if (!fb) return;

	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(`SIZE: ${fb.width} x ${fb.height}`, x, y++, [140, 255, 180]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### font

#### Get Signature

```ts
get font(): 
  | TextmodeFont
  | TextmodeTileset;
```

Font or tileset used by this layer.

##### Returns

  \| [`TextmodeFont`](../../fonts/classes/TextmodeFont.md)
  \| [`TextmodeTileset`](../../fonts/classes/TextmodeTileset.md)

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const bigFontLayer = t.layers.add({ fontSize: 32, blendMode: 'additive' });
const labelLayer = t.layers.add();

function drawText(text, x, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}

	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);

	t.push();
	t.charColor(40, 50, 80);
	t.char('.');
	t.rect(t.grid.cols, t.grid.rows);
	t.pop();
});

bigFontLayer.draw(() => {
	t.clear();
	const font = bigFontLayer.font;
	const chars = font.characters;
	const time = t.frameCount * 0.02;

	const cols = 8;
	const rows = 3;

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			const idx = (r * cols + c + Math.floor(time * 10)) % chars.length;
			const glyph = chars[idx];

			t.push();
			t.translate(c - Math.floor(cols / 2), r - Math.floor(rows / 2));
			t.char(glyph.character);
			t.charColor(120, 180, 255);
			t.point();
			t.pop();
		}
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	const baseSize = t.layers.base.font.fontSize;
	const layerSize = bigFontLayer.font.fontSize;

	drawText('TEXTMODELAYER.FONT', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: LAYER FONT STATE', x, y++, [100, 220, 255]);
	drawText('Base and overlay keep fonts apart.', x, y++, [140, 160, 190]);
	drawText('Large font layer uses additive.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(`BASE FONT: ${baseSize} PX`, x, y++, [140, 180, 255]);
	drawText(`LAYER FONT: ${layerSize} PX`, x, y++, [255, 225, 140]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### grid

#### Get Signature

```ts
get grid(): TextmodeGrid | undefined;
```

Grid associated with this layer.

##### Returns

[`TextmodeGrid`](../../../classes/TextmodeGrid.md) \| `undefined`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const densityLayer = t.layers.add({ fontSize: 8, blendMode: 'screen' });
const labelLayer = t.layers.add();

function drawText(text, x, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}

	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);

	t.push();
	t.translate(-10, 0);
	t.charColor(100, 150, 255, 100);
	t.char('+');
	t.rect(14, 10);
	t.pop();
});

densityLayer.draw(() => {
	t.clear();

	t.push();
	t.translate(20, 0);
	t.charColor(255, 225, 140, 150);
	t.char('.');
	t.rect(28, 20);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	const g = densityLayer.grid;

	drawText('TEXTMODELAYER.GRID', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: INDEPENDENT GRID', x, y++, [100, 220, 255]);
	drawText('Each layer gets its own grid.', x, y++, [140, 160, 190]);
	drawText('Font size changes cell count.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(`BASE: ${t.grid.cols} x ${t.grid.rows}`, x, y++, [140, 180, 255]);
	drawText(`LAYER: ${g.cols} x ${g.rows}`, x, y++, [255, 225, 140]);
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

Height of the final ASCII framebuffer in pixels.

Returns `0` before the layer is initialized.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const detailLayer = t.layers.add({ fontSize: 8 });
const labelLayer = t.layers.add();

function drawText(text, x, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}

	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);

	t.push();
	t.translate(0, 0);
	t.char('|');
	t.charColor(120, 180, 255, 100);
	t.rect(1, t.grid.rows);
	t.pop();
});

detailLayer.draw(() => {
	t.clear();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	const g = detailLayer.grid;

	drawText('TEXTMODELAYER.HEIGHT', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: LAYER PIXEL HEIGHT', x, y++, [100, 220, 255]);
	drawText('Reports ASCII framebuffer height.', x, y++, [140, 160, 190]);
	drawText('Finer font size gives more rows.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(`${detailLayer.height} PIXELS`, x, y++, [140, 255, 180]);
	drawText(`${g.rows} ROWS x ${g.cellHeight}PX`, x, y++, [120, 200, 255]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### texture

#### Get Signature

```ts
get texture(): WebGLTexture | undefined;
```

WebGL texture of the final ASCII framebuffer.

Returns `undefined` before the layer is initialized.

##### Returns

`WebGLTexture` \| `undefined`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const layer = t.layers.add({ fontSize: 16, blendMode: 'screen' });
const labelLayer = t.layers.add();

function drawText(text, x, y, rgb = [220, 230, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}

	t.pop();
}

t.draw(() => {
	t.background(5, 7, 18);
});

layer.draw(() => {
	t.clear();
	t.push();
	t.rotateZ(t.frameCount * 1.5);
	t.charColor(120, 205, 255);
	t.rect(18, 8);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	const ready = layer.texture === layer.asciiFramebuffer.textures[0];

	drawText('TEXTMODELAYER.TEXTURE', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: ASCII TEXTURE HANDLE', x, y++, [100, 220, 255]);
	drawText('Exposes the composited texture.', x, y++, [140, 160, 190]);
	drawText('Matches asciiFramebuffer tex 0.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(ready ? 'TEXTURE: READY' : 'TEXTURE: PENDING', x, y++, [140, 255, 180]);
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

Width of the final ASCII framebuffer in pixels.

Returns `0` before the layer is initialized.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const detailLayer = t.layers.add({ fontSize: 8 });
const labelLayer = t.layers.add();

function drawText(text, x, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}

	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);

	t.push();
	t.translate(0, 0);
	t.char('=');
	t.charColor(120, 180, 255, 100);
	t.rect(t.grid.cols, 1);
	t.pop();
});

detailLayer.draw(() => {
	t.clear();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	const g = detailLayer.grid;

	drawText('TEXTMODELAYER.WIDTH', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: LAYER PIXEL WIDTH', x, y++, [100, 220, 255]);
	drawText('Reports ASCII framebuffer width.', x, y++, [140, 160, 190]);
	drawText('A finer layer has more cells.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(`${detailLayer.width} PIXELS`, x, y++, [140, 255, 180]);
	drawText(`${g.cols} CELLS x ${g.cellWidth}PX`, x, y++, [120, 200, 255]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Methods

### blendMode()

```ts
blendMode(mode?): 
  | void
  | "normal"
  | "darken"
  | "difference"
  | "exclusion"
  | "lighten"
  | "multiply"
  | "overlay"
  | "screen"
  | "additive"
  | "subtract"
  | "softLight"
  | "hardLight"
  | "colorDodge"
  | "colorBurn";
```

Set or get this layer's blend mode.

Available modes are listed in [TEXTMODE\_LAYER\_BLEND\_MODES](../variables/TEXTMODE_LAYER_BLEND_MODES.md).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mode?` | \| `"normal"` \| `"darken"` \| `"difference"` \| `"exclusion"` \| `"lighten"` \| `"multiply"` \| `"overlay"` \| `"screen"` \| `"additive"` \| `"subtract"` \| `"softLight"` \| `"hardLight"` \| `"colorDodge"` \| `"colorBurn"` | Blend mode to apply. |

#### Returns

  \| `void`
  \| `"normal"`
  \| `"darken"`
  \| `"difference"`
  \| `"exclusion"`
  \| `"lighten"`
  \| `"multiply"`
  \| `"overlay"`
  \| `"screen"`
  \| `"additive"`
  \| `"subtract"`
  \| `"softLight"`
  \| `"hardLight"`
  \| `"colorDodge"`
  \| `"colorBurn"`

Current blend mode when called without arguments.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const blendModes = ['additive', 'screen', 'overlay', 'difference', 'multiply'];
const colors = [
	[255, 80, 150],
	[80, 180, 255],
	[255, 200, 80],
	[150, 255, 120],
	[200, 120, 255],
];

const layers = blendModes.map((mode) => t.layers.add({ blendMode: mode, opacity: 0.9 }));
const labelLayer = t.layers.add();

function drawText(text, x, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(rgb[0], rgb[1], rgb[2]);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	drawText(text, -Math.floor(text.length / 2), y, rgb);
}

t.draw(() => {
	const time = t.frameCount * 0.02;
	t.background(10, 15, 25);

	const { cols, rows } = t.grid;

	t.char('+');
	t.charColor(40, 50, 80);
	t.rect(cols, rows);

	layers.forEach((layer, i) => {
		layer.draw(() => {
			t.clear();
			t.push();

			const angle = (i / layers.length) * Math.PI * 2 + time;
			const radius = 8 + Math.sin(time * 2) * 2;
			t.translate(Math.cos(angle) * radius, Math.sin(angle) * radius);

			t.charColor(...colors[i]);
			t.char('@');
			t.rect(14, 8);

			drawCenteredText(blendModes[i], 0, [255, 255, 255]);

			t.pop();
		});
	});
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	const active = blendModes[Math.floor(t.frameCount / 80) % blendModes.length];

	drawText('TEXTMODELAYER.BLENDMODE', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: PER-LAYER BLENDING', x, y++, [100, 220, 255]);
	drawText('Each layer composites differently.', x, y++, [140, 160, 190]);
	drawText('Opacity is set per layer too.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(`MODES: ${blendModes.length}`, x, y++, [140, 255, 180]);
	drawText(`WATCH: ${active}`, x, y++, [120, 200, 255]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### camera()

```ts
camera(
   eyeX, 
   eyeY, 
   eyeZ, 
   targetX?, 
   targetY?, 
   targetZ?, 
   upX?, 
   upY?, 
   upZ?): void;
```

Set explicit camera parameters for this layer.

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `eyeX` | `number` | `undefined` |
| `eyeY` | `number` | `undefined` |
| `eyeZ` | `number` | `undefined` |
| `targetX` | `number` | `0` |
| `targetY` | `number` | `0` |
| `targetZ` | `number` | `0` |
| `upX` | `number` | `0` |
| `upY` | `number` | `1` |
| `upZ` | `number` | `0` |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const scene = t.layers.add();
const labelLayer = t.layers.add();

let camX = 0;
const camY = 10;
const camZ = 42;

function drawText(text, x, y, color = [200, 220, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(color[0], color[1], color[2]);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(8, 10, 18);

	const time = t.frameCount * 0.03;
	camX = Math.sin(time) * 22;

	// Update layer camera
	scene.camera(camX, camY, camZ, 0, 0, 0);
});

scene.draw(() => {
	t.clear();
	t.pointLight([255, 200, 120], { x: 20, y: -15, z: 30 });

	// Rotate center shape group
	t.push();
	t.rotateY(t.frameCount * 1.5);

	// Center cube
	t.push();
	t.char('#');
	t.charColor(120, 220, 255);
	t.box(8, 8, 8);
	t.pop();

	// Left pillar
	t.push();
	t.translate(-12, 0, 0);
	t.char('H');
	t.charColor(255, 120, 120);
	t.box(4, 12, 4);
	t.pop();

	// Right pillar
	t.push();
	t.translate(12, 0, 0);
	t.char('O');
	t.charColor(120, 255, 120);
	t.box(4, 12, 4);
	t.pop();

	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	const eyeStr = `Cam Eye   : [${camX.toFixed(1)}, ${camY.toFixed(1)}, ${camZ.toFixed(1)}]`;
	drawText('TEXTMODELAYER.CAMERA', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: LAYER CAMERA', x, y++, [100, 220, 255]);
	drawText('Sets a 3D camera on one layer.', x, y++, [140, 160, 190]);
	drawText('Base background stays flat.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(eyeStr, x, y++, [120, 255, 180]);
	drawText('Target: [0.0, 0.0, 0.0]', x, y++, [200, 200, 200]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### createCamera()

```ts
createCamera(): TextmodeCamera;
```

Create and activate a camera initialized from this layer's camera state.

#### Returns

[`TextmodeCamera`](../../../classes/TextmodeCamera.md)

The created camera.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const scene = t.layers.add();
const labelLayer = t.layers.add();

let camera;
let camX = 0;
const camY = 8;
const camZ = 46;

t.setup(() => {
	camera = scene.createCamera();
	scene.setCamera(camera);
});

function drawText(text, x, y, color = [200, 220, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(color[0], color[1], color[2]);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(8, 10, 18);

	camX = Math.sin(t.frameCount * 0.03) * 22;

	// Move and aim the layer camera each frame
	camera.setPosition(camX, camY, camZ);
	camera.lookAt(0, 0, 0);
});

scene.draw(() => {
	t.clear();
	t.pointLight([255, 200, 120], { x: 20, y: -15, z: 30 });

	// Rotate center shape group
	t.push();
	t.rotateY(t.frameCount * 1.5);

	// Center cube
	t.push();
	t.char('#');
	t.charColor(120, 220, 255);
	t.box(8, 8, 8);
	t.pop();

	// Left pillar
	t.push();
	t.translate(-12, 0, 0);
	t.char('H');
	t.charColor(255, 120, 120);
	t.box(4, 12, 4);
	t.pop();

	// Right pillar
	t.push();
	t.translate(12, 0, 0);
	t.char('O');
	t.charColor(120, 255, 120);
	t.box(4, 12, 4);
	t.pop();

	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	const eyeStr = `Cam Eye   : [${camX.toFixed(1)}, ${camY.toFixed(1)}, ${camZ.toFixed(1)}]`;
	drawText('TEXTMODELAYER.CREATECAMERA', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: OWNED CAMERA', x, y++, [100, 220, 255]);
	drawText('Creates a camera for this layer.', x, y++, [140, 160, 190]);
	drawText('Then setCamera activates it.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(eyeStr, x, y++, [120, 255, 180]);
	drawText('Target: [0.0, 0.0, 0.0]', x, y++, [200, 200, 200]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### deletePluginState()

```ts
deletePluginState(pluginName): boolean;
```

Delete plugin-specific state from this layer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pluginName` | `string` | Plugin identifier. |

#### Returns

`boolean`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const layer = t.layers.add();
const labelLayer = t.layers.add();
const PLUGIN_NAME = 'monitor';
let stateDeleted = false;
let latestAngle = 0;

function drawText(text, x, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}

	t.pop();
}

t.mousePressed(() => {
	if (layer.hasPluginState(PLUGIN_NAME)) {
		layer.deletePluginState(PLUGIN_NAME);
		stateDeleted = true;
	}
});

layer.draw(() => {
	t.clear();

	if (!layer.hasPluginState(PLUGIN_NAME)) {
		layer.setPluginState(PLUGIN_NAME, { angle: 0, resets: 0 });
	}

	const state = layer.getPluginState(PLUGIN_NAME);

	state.angle += 0.05;
	latestAngle = state.angle;

	t.push();
	t.rotateZ((state.angle * 180) / Math.PI);
	t.charColor(120, 180, 255);
	t.char('#');
	t.rect(8, 4);
	t.pop();
});

t.draw(() => {
	t.background(6, 10, 22);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	const statusColor = stateDeleted ? [255, 180, 100] : [120, 255, 150];

	drawText('TEXTMODELAYER.DELETEPLUGINSTATE', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: DELETE PLUGIN STATE', x, y++, [100, 220, 255]);
	drawText('Click clears the monitor state.', x, y++, [140, 160, 190]);
	drawText('Draw recreates it next frame.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(stateDeleted ? 'STATE: RECREATED' : 'STATE: ACTIVE', x, y++, statusColor);
	drawText(`ANGLE: ${latestAngle.toFixed(2)}`, x, y++, [180, 200, 220]);
	stateDeleted = false;
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### draw()

```ts
draw(callback): void;
```

Set this layer's draw callback.

The callback runs each frame and should contain this layer's drawing commands.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` | Function to run when drawing this layer. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const backLayer = t.layers.add({ opacity: 0.6 });
const effectLayer = t.layers.add({ blendMode: 'additive' });
const labelLayer = t.layers.add();

function drawText(text, x, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}

	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);

	t.push();
	t.charColor(40, 50, 80);
	t.char('.');
	for (let y = -4; y <= 4; y += 2) {
		t.push();
		t.translate(0, y);
		t.rect(t.grid.cols, 1);
		t.pop();
	}
	t.pop();
});

backLayer.draw(() => {
	t.clear();
	const time = t.frameCount * 0.03;

	// Floating data nodes circling the center
	for (let i = 0; i < 6; i++) {
		const angle = time + (i / 6) * Math.PI * 2;
		const r = 10;
		t.push();
		t.translate(Math.round(Math.cos(angle) * r * 1.5), Math.round(Math.sin(angle) * r * 0.6));
		t.charColor(100, 150, 255);
		t.char('o');
		t.point();
		t.pop();
	}
});

effectLayer.draw(() => {
	t.clear();
	const time = t.frameCount * 0.05;
	const pulse = 0.5 + 0.5 * Math.sin(time);

	// Central core pulsing shape
	t.push();
	t.charColor(255, 100 + pulse * 155, 100);
	t.char('#');
	t.rect(8, 4);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODELAYER.DRAW', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: LAYER DRAW CALLBACK', x, y++, [100, 220, 255]);
	drawText('Base, back, and effect draw apart.', x, y++, [140, 160, 190]);
	drawText('Each callback owns its buffer.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('LAYERS: BASE + 2', x, y++, [140, 255, 180]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### filter()

#### Call Signature

```ts
filter<T>(name, params?): void;
```

Queue a post-processing filter for this layer.

Filters are applied after ASCII conversion in the order they are called.
Call this method within your layer's draw callback to apply effects.

**Built-in filters:**
- `'invert'` - Inverts all colors
- `'grayscale'` - Converts to grayscale (param: amount 0-1, default 1)
- `'sepia'` - Applies sepia tone (param: amount 0-1, default 1)
- `'threshold'` - Black/white threshold (param: threshold 0-1, default 0.5)

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`BuiltInFilterName`](../../filters/type-aliases/BuiltInFilterName.md) |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `T` | Built-in or registered filter name. |
| `params?` | [`BuiltInFilterParams`](../../filters/interfaces/BuiltInFilterParams.md)\[`T`\] | Optional filter parameters. |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const effectLayer = t.layers.add();
const labelLayer = t.layers.add();

const filters = [
	{ name: 'invert', params: undefined, label: 'INVERT' },
	{ name: 'grayscale', params: 1.0, label: 'GRAYSCALE (1.0)' },
	{ name: 'sepia', params: 0.8, label: 'SEPIA (0.8)' },
	{ name: 'threshold', params: 0.5, label: 'THRESHOLD (0.5)' },
];

function drawText(text, x, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}

	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);

	t.push();
	t.charColor(40, 50, 80);
	t.char('.');
	t.rect(t.grid.cols, t.grid.rows);
	t.pop();
});

effectLayer.draw(() => {
	t.clear();
	const time = t.frameCount * 0.02;

	for (let i = 0; i < 8; i++) {
		const angle = time + (i / 8) * Math.PI * 2;
		const r = 8 + Math.sin(time * 2) * 2;
		t.push();
		t.translate(Math.round(Math.cos(angle) * r * 1.5), Math.round(Math.sin(angle) * r * 0.6));
		t.charColor(100 + i * 20, 255 - i * 10, 150 + i * 10);
		t.char('#');
		t.point();
		t.pop();
	}

	const filterIdx = Math.floor(t.frameCount / 120) % (filters.length + 1);

	if (filterIdx < filters.length) {
		const active = filters[filterIdx];
		effectLayer.filter(active.name, active.params);
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	const filterIdx = Math.floor(t.frameCount / 120) % (filters.length + 1);
	const active = filterIdx < filters.length ? filters[filterIdx].label : 'NORMAL';

	drawText('TEXTMODELAYER.FILTER', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: LAYER POST FILTERS', x, y++, [100, 220, 255]);
	drawText('Only the effect layer changes.', x, y++, [140, 160, 190]);
	drawText('Base grid remains unfiltered.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(`ACTIVE: ${active}`, x, y++, [140, 255, 180]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Call Signature

```ts
filter<TParams>(name, params?): void;
```

Queue a registered custom filter for this layer.

##### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TParams` | `unknown` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Custom filter name. |
| `params?` | `TParams` | Optional filter parameters. |

##### Returns

`void`

***

### fontSize()

```ts
fontSize(size?): number | void;
```

Get or set this layer's font size.

Changing the font size will re-initialize the layer's grid based on the new character dimensions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `size?` | `number` | Font size to apply. |

#### Returns

`number` \| `void`

Current font size when called without arguments.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const detailLayer = t.layers.add({ fontSize: 8, blendMode: 'screen' });
const labelLayer = t.layers.add();

function drawText(text, x, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}

	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);

	t.push();
	t.translate(0, 0);
	t.charColor(40, 50, 80);
	t.char('#');
	t.rect(20, 10);
	t.pop();
});

detailLayer.draw(() => {
	t.clear();
	const time = t.frameCount * 0.03;

	t.push();
	t.translate(0, -2);
	t.charColor(255, 225, 140, 150);
	t.char('.');

	for (let i = 0; i < 40; i++) {
		const angle = time + i * 0.2;
		const r = 12 + Math.sin(time + i * 0.5) * 4;
		t.push();
		t.translate(Math.round(Math.cos(angle) * r * 1.5), Math.round(Math.sin(angle) * r * 0.6));
		t.point();
		t.pop();
	}
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODELAYER.FONTSIZE', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: PER-LAYER RESOLUTION', x, y++, [100, 220, 255]);
	drawText('Smaller font gives denser cells.', x, y++, [140, 160, 190]);
	drawText('Layer grids update independently.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(`BASE: ${t.layers.base.fontSize()} PX`, x, y++, [140, 180, 255]);
	drawText(`DETAIL: ${detailLayer.fontSize()} PX`, x, y++, [255, 225, 140]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### getPluginState()

```ts
getPluginState<T>(pluginName): T | undefined;
```

Retrieve plugin-specific state stored on this layer.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pluginName` | `string` | Plugin identifier. |

#### Returns

`T` \| `undefined`

Stored state, or `undefined` when not set.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const trackerLayer = t.layers.add();
const labelLayer = t.layers.add();
const PLUGIN_NAME = 'tracker';
let latestX = 0;

function drawText(text, x, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}

	t.pop();
}

trackerLayer.setPluginState(PLUGIN_NAME, {
	x: 0,
	speed: 0.1,
	amplitude: 15,
});

trackerLayer.draw(() => {
	t.clear();

	const state = trackerLayer.getPluginState(PLUGIN_NAME);

	if (state) {
		state.x += state.speed;
		const xPos = Math.round(Math.cos(state.x) * state.amplitude);
		latestX = xPos;

		t.push();
		t.translate(xPos, 0);
		t.charColor(120, 200, 255);
		t.char('#');
		t.point();

		t.push();
		t.translate(0, 3);
		t.char('^');
		t.charColor(60, 70, 100);
		t.point();
		t.pop();
		t.pop();
	}
});

t.draw(() => {
	t.background(6, 10, 22);

	t.push();
	t.charColor(40, 50, 80);
	t.char('.');
	t.rect(t.grid.cols, 1);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	const state = trackerLayer.getPluginState(PLUGIN_NAME);
	const xText = latestX.toString().padStart(3, ' ');

	drawText('TEXTMODELAYER.GETPLUGINSTATE', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: READ PLUGIN STATE', x, y++, [100, 220, 255]);
	drawText('Persistent data drives motion.', x, y++, [140, 160, 190]);
	drawText('The layer owns the stored object.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(`X: ${xText}`, x, y++, [180, 200, 220]);
	drawText(`SPEED: ${state.speed.toFixed(2)}`, x, y++, [180, 200, 220]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### hasPluginState()

```ts
hasPluginState(pluginName): boolean;
```

Check whether plugin-specific state exists on this layer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pluginName` | `string` | Plugin identifier. |

#### Returns

`boolean`

`true` when state exists.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const layer = t.layers.add();
const labelLayer = t.layers.add();
const PLUGIN_NAME = 'module';
let exists = false;

function drawText(text, x, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}

	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);

	if (t.frameCount % 120 === 0) {
		if (layer.hasPluginState(PLUGIN_NAME)) {
			layer.deletePluginState(PLUGIN_NAME);
		} else {
			layer.setPluginState(PLUGIN_NAME, { active: true });
		}
	}

	exists = layer.hasPluginState(PLUGIN_NAME);
	const statusColor = exists ? [120, 255, 150] : [255, 100, 100];

	t.push();
	t.translate(0, 0);
	t.char(exists ? '#' : '.');
	t.charColor(exists ? statusColor : [60, 70, 100]);
	t.rect(10, 5);

	t.push();
	t.translate(0, 0);
	t.charColor(statusColor);
	t.char('o');
	t.point();
	t.pop();
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	const statusColor = exists ? [120, 255, 150] : [255, 100, 100];

	drawText('TEXTMODELAYER.HASPLUGINSTATE', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: CHECK PLUGIN STATE', x, y++, [100, 220, 255]);
	drawText('The module state toggles on/off.', x, y++, [140, 160, 190]);
	drawText('hasPluginState returns a boolean.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(exists ? 'STATUS: CONNECTED' : 'STATUS: DISCONNECTED', x, y++, statusColor);
	drawText(`HAS '${PLUGIN_NAME}': ${exists}`, x, y++, [140, 180, 255]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### hide()

```ts
hide(): void;
```

Hide this layer from rendering.

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const signalLayer = t.layers.add({ blendMode: 'additive' });
const labelLayer = t.layers.add();
let isVisible = true;

function drawText(text, x, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}

	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);

	if (t.frameCount % 120 === 0) {
		if (isVisible) {
			signalLayer.hide();
		} else {
			signalLayer.show();
		}
		isVisible = !isVisible;
	}

	t.push();
	t.charColor(40, 50, 80);
	t.char('.');
	t.rect(t.grid.cols, t.grid.rows);
	t.pop();
});

signalLayer.draw(() => {
	t.clear();
	const time = t.frameCount * 0.05;

	t.push();
	t.charColor(140, 180, 255);
	t.char('#');
	const size = 6 + Math.sin(time) * 2;
	t.rect(Math.round(size * 1.5), Math.round(size));
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	const statusColor = isVisible ? [140, 255, 180] : [255, 100, 100];

	drawText('TEXTMODELAYER.HIDE', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: HIDE COMPOSITING', x, y++, [100, 220, 255]);
	drawText('Layer draw keeps running.', x, y++, [140, 160, 190]);
	drawText('Hidden output is not composited.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(isVisible ? 'LAYER: VISIBLE' : 'LAYER: HIDDEN', x, y++, statusColor);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### loadFont()

```ts
loadFont(fontSource): Promise<TextmodeFont>;
```

Load a font into this layer from a URL/path or existing [TextmodeFont](../../fonts/classes/TextmodeFont.md).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fontSource` | `string` \| [`TextmodeFont`](../../fonts/classes/TextmodeFont.md) | Font URL/path or TextmodeFont to fork from. |

#### Returns

`Promise`\<[`TextmodeFont`](../../fonts/classes/TextmodeFont.md)\>

The loaded TextmodeFont.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const detailedLayer = t.layers.add({ blendMode: 'screen' });
const labelLayer = t.layers.add();

function drawText(text, x, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}

	t.pop();
}

t.setup(async () => {
	await detailedLayer.loadFont('../../primitives/FROGBLOCK-V2.1.ttf');
});

t.draw(() => {
	t.background(6, 10, 22);

	t.push();
	t.translate(0, 0);
	t.charColor(40, 50, 80);
	t.char('#');
	t.rect(14, 8);
	t.pop();
});

detailedLayer.draw(() => {
	t.clear();

	t.push();
	t.translate(0, 0);
	t.charColor(255, 225, 140, 180);
	t.char('0'); // A distinctive glyph in Frogblock
	t.rect(8, 4);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODELAYER.LOADFONT', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: LOAD FONT PER LAYER', x, y++, [100, 220, 255]);
	drawText('Base keeps the default font.', x, y++, [140, 160, 190]);
	drawText('Overlay loads Frogblock.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('BASE: URSA DEFAULT', x, y++, [140, 180, 255]);
	drawText('LAYER: FROGBLOCK', x, y++, [255, 225, 140]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### loadTileset()

```ts
loadTileset(tilesetSource): Promise<TextmodeTileset>;
```

Load a tileset into this layer from options or an existing [TextmodeTileset](../../fonts/classes/TextmodeTileset.md).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tilesetSource` | \| [`TextmodeTilesetOptions`](../../fonts/interfaces/TextmodeTilesetOptions.md) \| [`TextmodeTileset`](../../fonts/classes/TextmodeTileset.md) | Tileset options or TextmodeTileset to fork from. |

#### Returns

`Promise`\<[`TextmodeTileset`](../../fonts/classes/TextmodeTileset.md)\>

The loaded TextmodeTileset.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const tilesLayer = t.layers.add();
const labelLayer = t.layers.add();

function drawText(text, x, y, color = [200, 220, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(color[0], color[1], color[2]);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.setup(async () => {
	await tilesLayer.loadTileset({
		source: 'https://littlebitspace.com/resources/fonts/T64.png',
		columns: 16,
		rows: 16,
		count: 256,
	});

	// Use authored colors from the tileset PNG
	tilesLayer.useTileColors(true);
});

t.draw(() => {
	t.background(6, 10, 22);
});

tilesLayer.draw(() => {
	t.clear();

	const font = tilesLayer.font;
	if (!font || font.characters.length === 0) return;

	const time = t.frameCount * 0.04;
	const activeTile = Math.floor(time) % font.characters.length;

	const cols = 16;
	const startX = -Math.floor(cols / 2);
	const startY = -4;

	// Draw all tiles in a grid
	for (let i = 0; i < font.characters.length; i++) {
		const col = i % cols;
		const row = Math.floor(i / cols);
		t.push();
		t.translate(startX + col, startY + row);
		t.char(i);

		// Highlight the currently cycled tile
		if (i === activeTile) {
			t.charColor(255, 255, 100);
		}

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
	const font = tilesLayer.font;
	const count = font ? font.characters.length : 0;

	drawText('TEXTMODELAYER.LOADTILESET', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: LOAD TILESET', x, y++, [100, 220, 255]);
	drawText('Loads bitmap glyphs into a layer.', x, y++, [140, 160, 190]);
	drawText('Tile colors are authored in PNG.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(`TILES LOADED: ${count}`, x, y++, [120, 255, 180]);
	drawText('SOURCE: T64 PNG, 16 x 16', x, y++, [160, 160, 160]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### lookAt()

```ts
lookAt(
   targetX, 
   targetY, 
   targetZ, 
   upX?, 
   upY?, 
   upZ?): void;
```

Update this layer camera's target and optional up vector.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetX` | `number` |
| `targetY` | `number` |
| `targetZ` | `number` |
| `upX?` | `number` |
| `upY?` | `number` |
| `upZ?` | `number` |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const scene = t.layers.add();
const labelLayer = t.layers.add();

let targetX = 0;
let targetY = 0;

function drawText(text, x, y, color = [200, 220, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(color[0], color[1], color[2]);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(8, 10, 18);

	targetX = Math.sin(t.frameCount * 0.04) * 12;
	targetY = Math.cos(t.frameCount * 0.03) * 7;

	// Camera stays fixed — only the look target moves
	scene.camera(0, 0, 46);
	scene.lookAt(targetX, targetY, 0);
});

scene.draw(() => {
	t.clear();

	// Static reference pillars spread around the scene
	t.push();
	t.translate(-16, 4, -10);
	t.char('H');
	t.charColor(100, 130, 200);
	t.box(5, 14, 5);
	t.pop();

	t.push();
	t.translate(16, 4, -10);
	t.char('H');
	t.charColor(100, 130, 200);
	t.box(5, 14, 5);
	t.pop();

	t.push();
	t.translate(0, 8, -18);
	t.char('+');
	t.charColor(80, 100, 160);
	t.box(30, 2, 2);
	t.pop();

	// Moving glowing target — the camera tracks this
	t.push();
	t.translate(targetX, targetY, 0);
	t.char('*');
	t.charColor(255, 230, 80);
	t.box(4, 4, 4);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	const tgtStr = `Cam Target: [${targetX.toFixed(1)}, ${targetY.toFixed(1)}, 0.0]`;

	drawText('TEXTMODELAYER.LOOKAT', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: CAMERA TARGET', x, y++, [100, 220, 255]);
	drawText('Camera eye stays fixed.', x, y++, [140, 160, 190]);
	drawText('lookAt follows a moving target.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('Eye: [0.0, 0.0, 46.0]', x, y++, [200, 200, 200]);
	drawText(tgtStr, x, y++, [120, 255, 180]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### offset()

```ts
offset(x?, y?): 
  | void
  | {
  x: number;
  y: number;
};
```

Set or get this layer's compositing offset in pixels.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `x?` | `number` | `undefined` | Horizontal offset in pixels. |
| `y?` | `number` | `0` | Vertical offset in pixels. |

#### Returns

  \| `void`
  \| \{
  `x`: `number`;
  `y`: `number`;
\}

Current offset when called without arguments.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const offsetLayer = t.layers.add({ blendMode: 'additive' });
const labelLayer = t.layers.add();
let currentOffset = { x: 0, y: 0 };

function drawText(text, x, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}

	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.03;
	const g = t.grid;

	const offX = Math.round(Math.cos(time) * (g.width * 0.25));
	const offY = Math.round(Math.sin(time * 0.7) * (g.height * 0.25));

	currentOffset = { x: offX, y: offY };
	offsetLayer.offset(offX, offY);

	const targetGridX = Math.round(offX / g.cellWidth);
	const targetGridY = Math.round(offY / g.cellHeight);

	t.push();
	t.charColor(60, 70, 100, 150);
	t.char('.');
	t.line(0, 0, targetGridX, targetGridY);
	t.pop();

	t.push();
	t.charColor(100, 120, 150);
	t.char('+');
	t.point();
	t.pop();
});

offsetLayer.draw(() => {
	t.clear();

	t.push();
	t.charColor(255, 180, 100);
	t.char('#');
	t.rect(7, 3);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODELAYER.OFFSET', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: PIXEL OFFSET', x, y++, [100, 220, 255]);
	drawText('Moves the layer during composite.', x, y++, [140, 160, 190]);
	drawText('Drawing coordinates stay local.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(`OFFSET X: ${currentOffset.x} PX`, x, y++, [255, 180, 100]);
	drawText(`OFFSET Y: ${currentOffset.y} PX`, x, y++, [255, 180, 100]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### opacity()

```ts
opacity(opacity?): number | void;
```

Set or get this layer's opacity.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opacity?` | `number` | Opacity from `0` to `1`. |

#### Returns

`number` \| `void`

Current opacity when called without arguments.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const pulseLayer = t.layers.add({ blendMode: 'additive' });
const labelLayer = t.layers.add();
let currentOpacity = 1;

function drawText(text, x, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}

	t.pop();
}

function drawMeter(value, x, y, rgb) {
	const width = 20;
	const activeBlocks = Math.round(value * width);

	t.push();
	t.translate(x, y);
	for (let i = 0; i < width; i++) {
		const active = i < activeBlocks;
		const color = active ? rgb : [60, 70, 100];
		t.push();
		t.translate(i, 0);
		t.char(active ? '|' : '.');
		t.charColor(color[0], color[1], color[2]);
		t.point();
		t.pop();
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.04;
	const opacity = 0.5 + 0.5 * Math.sin(time);

	currentOpacity = opacity;
	pulseLayer.opacity(opacity);

	t.push();
	t.charColor(40, 50, 80);
	t.char('.');
	t.rect(t.grid.cols, t.grid.rows);
	t.pop();
});

pulseLayer.draw(() => {
	t.clear();

	t.push();
	t.charColor(255, 140, 180);
	t.char('#');
	t.rect(12, 6);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODELAYER.OPACITY', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: LAYER ALPHA', x, y++, [100, 220, 255]);
	drawText('Pulse layer fades in and out.', x, y++, [140, 160, 190]);
	drawText('Opacity is clamped from 0 to 1.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawMeter(currentOpacity, x, y++, [255, 225, 140]);
	drawText(`OPACITY: ${currentOpacity.toFixed(2)}`, x, y++, [255, 225, 140]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### ortho()

```ts
ortho(near?, far?): void;
```

Enable orthographic projection for this layer.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `near?` | `number` |
| `far?` | `number` |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const scene = t.layers.add();
const labelLayer = t.layers.add();

t.draw(() => {
	t.background(8, 10, 18);
	scene.ortho();
	scene.camera(0, 0, 44);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});

function drawText(text, x, y, rgb = [220, 230, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(rgb[0], rgb[1], rgb[2]);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

scene.draw(() => {
	t.clear();
	for (let i = 0; i < 3; i++) {
		t.push();
		t.translate((i - 1) * 10, 0, i * -12);
		t.rotateY(t.frameCount * 2 + i * 20);
		t.char('+');
		t.charColor(120 + i * 40, 220, 255);
		t.box(8, 8, 8);
		t.pop();
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODELAYER.ORTHO', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: ORTHOGRAPHIC CAMERA', x, y++, [100, 220, 255]);
	drawText('Depth no longer changes scale.', x, y++, [140, 160, 190]);
	drawText('Boxes stay evenly sized.', x, y++, [140, 160, 190]);
});
```

***

### perspective()

```ts
perspective(
   fov?, 
   near?, 
   far?): void;
```

Enable perspective projection for this layer.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fov?` | `number` |
| `near?` | `number` |
| `far?` | `number` |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const scene = t.layers.add();
const labelLayer = t.layers.add();

let fov = 60;

function drawText(text, x, y, color = [200, 220, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(color[0], color[1], color[2]);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(8, 10, 18);

	// FOV oscillates between 20° (telephoto) and 100° (wide)
	fov = 60 + Math.sin(t.frameCount * 0.025) * 40;

	scene.perspective(fov, 0.1, 256);
	scene.camera(0, 0, 44);
	scene.lookAt(0, 0, 0);
});

scene.draw(() => {
	t.clear();
	t.pointLight([255, 210, 130], { x: -20, y: -25, z: 30 });

	// Three columns at increasing depth to show perspective compression
	const depths = [0, -12, -24];
	const colors = [
		[120, 200, 255],
		[160, 220, 180],
		[255, 180, 120],
	];

	for (let i = 0; i < 3; i++) {
		t.push();
		t.translate(0, 0, depths[i]);
		t.char('#');
		t.charColor(colors[i][0], colors[i][1], colors[i][2]);
		t.box(8, 8, 8);
		t.pop();
	}

	// Floor grid for depth reference
	t.push();
	t.char('.');
	t.charColor(40, 55, 80);
	for (let x = -24; x <= 24; x += 8) {
		t.line(x, 6, 4, x, 6, -32);
	}
	for (let z = 4; z >= -32; z -= 8) {
		t.line(-24, 6, z, 24, 6, z);
	}
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	const fovStr = `FOV: ${fov.toFixed(1)} deg`;
	drawText('TEXTMODELAYER.PERSPECTIVE', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: PERSPECTIVE FOV', x, y++, [100, 220, 255]);
	drawText('FOV changes depth compression.', x, y++, [140, 160, 190]);
	drawText('Near/far clip the layer camera.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(fovStr, x, y++, [120, 255, 180]);
	drawText('NEAR: 0.1  FAR: 256.0', x, y++, [200, 200, 200]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### postDraw()

```ts
postDraw(callback): void;
```

Set this layer's post-draw callback.

The callback is executed after the layer has been converted to ASCII and after
any filters queued in [filter](#filter) during [draw](#draw) have been applied.
Filters queued inside this callback are applied to the layer's final ASCII texture
before the layer is composited with the rest of the scene.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` | Function to run after this layer has been drawn and filtered. |

#### Returns

`void`

#### Example

```js
const layer = t.layers.add();

layer.draw(() => {
	t.background(0);
	t.char('A');
	t.rect(12, 8);
	layer.filter('grayscale', 0.4);
});

layer.postDraw(() => {
	layer.filter('invert');
});
```

***

### resetCamera()

```ts
resetCamera(): void;
```

Reset this layer to default auto camera behavior.

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const scene = t.layers.add();
const labelLayer = t.layers.add();

let useCustomCamera = true;

function drawText(text, x, y, color = [200, 220, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(color[0], color[1], color[2]);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(8, 10, 18);

	// Alternate every 150 frames so the contrast is clear
	useCustomCamera = Math.floor(t.frameCount / 150) % 2 === 0;

	if (useCustomCamera) {
		// Dramatic off-axis perspective with moving eye
		const camX = Math.sin(t.frameCount * 0.02) * 18;
		scene.camera(camX, -14, 42, 0, 0, 0);
	} else {
		// Discard custom camera — auto view is restored
		scene.resetCamera();
	}
});

scene.draw(() => {
	t.clear();
	t.pointLight([255, 210, 130], { x: -20, y: -25, z: 30 });

	const positions = [
		[-12, 0, 0],
		[0, 0, -12],
		[12, 0, 0],
	];
	const colors = [
		[120, 200, 255],
		[200, 160, 255],
		[255, 180, 120],
	];

	for (let i = 0; i < 3; i++) {
		t.push();
		t.translate(positions[i][0], positions[i][1], positions[i][2]);
		t.char('#');
		t.charColor(colors[i][0], colors[i][1], colors[i][2]);
		t.box(7, 7, 7);
		t.pop();
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODELAYER.RESETCAMERA', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: RESET LAYER CAMERA', x, y++, [100, 220, 255]);

	if (useCustomCamera) {
		drawText('MODE: CUSTOM CAMERA', x, y++, [255, 200, 100]);
		drawText('camera() override is active.', x, y++, [140, 160, 190]);
	} else {
		drawText('MODE: AUTO CAMERA', x, y++, [120, 255, 180]);
		drawText('resetCamera restored default.', x, y++, [140, 160, 190]);
	}

	drawText('------------------------------------', x, y++, [80, 100, 150]);
	const remaining = 150 - (t.frameCount % 150);
	drawText(`SWITCH IN: ${remaining} FRAMES`, x, y++, [200, 200, 200]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### rotateZ()

```ts
rotateZ(z?): number | void;
```

Set or get this layer's compositing rotation in degrees.

The rotation is applied during compositing around the center of the layer's
rectangular bounds. The rotation origin remains at the center even when
an offset is applied.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `z?` | `number` | Rotation angle in degrees. Positive values rotate clockwise. |

#### Returns

`number` \| `void`

Current rotation in degrees when called without arguments.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const scannerLayer = t.layers.add({ blendMode: 'additive' });
const labelLayer = t.layers.add();
let currentAngle = 0;

function drawText(text, x, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}

	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 1.5;
	const angle = time % 360;

	currentAngle = angle;
	scannerLayer.rotateZ(angle);

	t.push();
	t.charColor(60, 70, 100);
	t.char('.');
	t.line(-15, 0, 15, 0);
	t.line(0, -8, 0, 8);
	t.pop();
});

scannerLayer.draw(() => {
	t.clear();

	t.push();
	t.charColor(140, 180, 255, 200);
	t.char('#');
	t.rect(20, 1);
	t.pop();

	t.push();
	t.translate(10, 0);
	t.char('>');
	t.charColor(255, 225, 140);
	t.point();
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODELAYER.ROTATEZ', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: COMPOSITE ROTATION', x, y++, [100, 220, 255]);
	drawText('Layer output rotates around center.', x, y++, [140, 160, 190]);
	drawText('Draw callback remains unrotated.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(`ANGLE: ${currentAngle.toFixed(1)} DEG`, x, y++, [140, 255, 180]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### setCamera()

```ts
setCamera(camera): void;
```

Activate a camera for this layer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `camera` | [`TextmodeCamera`](../../../classes/TextmodeCamera.md) | Camera instance to apply. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const scene = t.layers.add();
const labelLayer = t.layers.add();

let camA;
let camB;
let activeCam = 'A';

function drawText(text, x, y, color = [200, 220, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(color[0], color[1], color[2]);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.setup(() => {
	camA = scene.createCamera();
	camA.setPosition(-22, -8, 40).lookAt(0, 0, 0);
	camB = scene.createCamera();
	camB.setPosition(22, 12, 36).lookAt(0, 0, 0);
	scene.setCamera(camA);
});

t.draw(() => {
	t.background(8, 10, 18);
	const slot = Math.floor(t.frameCount / 150) % 2;
	if (slot === 0 && activeCam !== 'A') {
		scene.setCamera(camA);
		activeCam = 'A';
	} else if (slot === 1 && activeCam !== 'B') {
		scene.setCamera(camB);
		activeCam = 'B';
	}
});

scene.draw(() => {
	t.clear();
	t.pointLight([255, 210, 130], { x: -20, y: -25, z: 30 });
	const positions = [
		[-12, 0, 0],
		[0, 0, -12],
		[12, 0, 0],
	];
	const colors = [
		[120, 200, 255],
		[200, 160, 255],
		[255, 180, 120],
	];
	for (let i = 0; i < 3; i++) {
		t.push();
		t.translate(positions[i][0], positions[i][1], positions[i][2]);
		t.char('#');
		t.charColor(colors[i][0], colors[i][1], colors[i][2]);
		t.box(7, 7, 7);
		t.pop();
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	const isA = activeCam === 'A';
	drawText('TEXTMODELAYER.SETCAMERA', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: SWAP ACTIVE CAMERA', x, y++, [100, 220, 255]);
	drawText('Two owned cameras alternate.', x, y++, [140, 160, 190]);
	drawText('setCamera selects the view.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(`ACTIVE: CAMERA ${activeCam}`, x, y++, isA ? [120, 200, 255] : [255, 180, 120]);
	if (isA) {
		drawText('EYE: [-22, -8, 40]', x, y++, [200, 200, 200]);
	} else {
		drawText('EYE: [22, 12, 36]', x, y++, [200, 200, 200]);
	}
	const remaining = 150 - (t.frameCount % 150);
	drawText(`SWITCH IN: ${remaining} FRAMES`, x, y++, [160, 160, 160]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### setPluginState()

```ts
setPluginState<T>(pluginName, state): void;
```

Store plugin-specific state on this layer.
Plugins can use this to attach their own data to layer instances.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pluginName` | `string` | Plugin identifier. |
| `state` | `T` | State object to store. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const moduleLayer = t.layers.add();
const labelLayer = t.layers.add();
const PLUGIN_NAME = 'core-data';
let currentPower = 0;

function drawText(text, x, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}

	t.pop();
}

t.setup(() => {
	moduleLayer.setPluginState(PLUGIN_NAME, {
		power: 0,
		sync: true,
		id: 'CORE-A1',
	});
});

moduleLayer.draw(() => {
	t.clear();
	const state = moduleLayer.getPluginState(PLUGIN_NAME);

	if (state) {
		state.power = 0.5 + 0.5 * Math.sin(t.frameCount * 0.05);
		currentPower = state.power;

		t.push();
		t.charColor(140, 220, 255);
		t.char('#');
		const size = 4 + Math.round(state.power * 4);
		t.rect(size * 2, size);
		t.pop();
	}
});

t.draw(() => {
	t.background(6, 10, 22);

	t.push();
	t.charColor(40, 50, 80);
	t.char('.');
	t.rect(t.grid.cols, t.grid.rows);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	const state = moduleLayer.getPluginState(PLUGIN_NAME);
	const load = Math.round(currentPower * 100);

	drawText('TEXTMODELAYER.SETPLUGINSTATE', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: STORE PLUGIN STATE', x, y++, [100, 220, 255]);
	drawText('Attaches data to a layer.', x, y++, [140, 160, 190]);
	drawText('The object persists each frame.', x, y++, [140, 160, 190]);
	if (!state) return;

	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(`ID: ${state.id}`, x, y++, [180, 200, 220]);
	drawText(`PWR LOAD: ${load}%`, x, y++, [140, 220, 255]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### show()

```ts
show(): void;
```

Show this layer for rendering.

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const displayLayer = t.layers.add({ visible: false, blendMode: 'additive' });
const labelLayer = t.layers.add();
let isVisible = false;

function drawText(text, x, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}

	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);

	if (t.frameCount % 120 === 0) {
		if (isVisible) {
			displayLayer.hide();
		} else {
			displayLayer.show();
		}
		isVisible = !isVisible;
	}

	t.push();
	t.charColor(40, 50, 80);
	t.char('.');
	t.rect(t.grid.cols, t.grid.rows);
	t.pop();
});

displayLayer.draw(() => {
	t.clear();
	const time = t.frameCount * 0.03;

	t.push();
	t.charColor(255, 180, 100);
	t.char('#');
	t.rotateZ((time * 180) / Math.PI);
	t.rect(12, 12);
	t.pop();

	t.push();
	t.charColor(255, 225, 140);
	t.char('+');
	t.point();
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	const statusColor = isVisible ? [140, 255, 180] : [255, 100, 100];

	drawText('TEXTMODELAYER.SHOW', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: SHOW HIDDEN LAYER', x, y++, [100, 220, 255]);
	drawText('show() restores compositing.', x, y++, [140, 160, 190]);
	drawText('hide() pauses visible output.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(isVisible ? 'LAYER: VISIBLE' : 'LAYER: HIDDEN', x, y++, statusColor);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### useTileColors()

```ts
useTileColors(enabled?): boolean | void;
```

Configure authored tileset color preservation for this layer.

When disabled (default), tileset texels are remapped to the current character (`primary`)
and cell (`secondary`) colors. Vector/font atlases always use character/cell recoloring
regardless of this setting.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `enabled?` | `boolean` | Whether to preserve authored tileset colors. |

#### Returns

`boolean` \| `void`

Current tileset-color mode when called without arguments.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const tilesLayer = t.layers.add();
const labelLayer = t.layers.add();

let useAuthored = false;

function drawText(text, x, y, color = [200, 220, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(color[0], color[1], color[2]);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.setup(async () => {
	await tilesLayer.loadTileset({
		source: 'https://littlebitspace.com/resources/fonts/T64.png',
		columns: 16,
		rows: 16,
		count: 256,
	});
});

t.draw(() => {
	t.background(6, 10, 22);
	useAuthored = Math.floor(t.frameCount / 150) % 2 === 0;
	tilesLayer.useTileColors(useAuthored);
});

tilesLayer.draw(() => {
	t.clear();

	const font = tilesLayer.font;
	if (!font || font.characters.length === 0) return;

	const cols = 16;
	const rows = 8;
	const startX = -Math.floor(cols / 2);
	const startY = -3;

	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			const tileIndex = row * cols + col;
			if (tileIndex >= font.characters.length) break;

			t.push();
			t.translate(startX + col, startY + row);
			t.char(tileIndex);
			const hue = (tileIndex / font.characters.length) * 360;
			const r = Math.round(128 + 100 * Math.sin((hue * Math.PI) / 180));
			const g = Math.round(128 + 100 * Math.sin(((hue + 120) * Math.PI) / 180));
			const b = Math.round(128 + 100 * Math.sin(((hue + 240) * Math.PI) / 180));
			t.charColor(r, g, b);

			t.point();
			t.pop();
		}
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODELAYER.USETILECOLORS', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: TILESET COLOR SOURCE', x, y++, [100, 220, 255]);

	if (useAuthored) {
		drawText('MODE: AUTHORED COLORS', x, y++, [255, 210, 100]);
		drawText('Tile PNG colors show directly.', x, y++, [140, 160, 190]);
	} else {
		drawText('MODE: RECOLORED', x, y++, [120, 255, 180]);
		drawText('charColor palette is applied.', x, y++, [140, 160, 190]);
	}

	drawText('------------------------------------', x, y++, [80, 100, 150]);
	const remaining = 150 - (t.frameCount % 150);
	drawText(`SWITCH IN: ${remaining} FRAMES`, x, y++, [160, 160, 160]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
