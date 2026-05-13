---
layout: doc
editLink: true
title: TextmodeLayer
description: A single layer within a multi-layered textmode rendering context.
category: Classes
api: true
namespace: layering
kind: Class
lastModified: 2026-05-13
hasConstructor: false
---

[textmode.js](../../../index.md) / [layering](../index.md) / TextmodeLayer

# Class: TextmodeLayer

A single layer within a multi-layered textmode rendering context.

Layers are composited together using various blend modes
to create complex visual effects. Each layer can be independently
manipulated in terms of visibility, opacity, blend mode, and position.

You can draw on each layer by providing a draw callback function,
like you would with the base layer's [Textmodifier.draw](../../../classes/Textmodifier.md#draw) method.

Plugins can extend TextmodeLayer with additional methods using the plugin API's
`extendLayer` function. For example, the `textmode-synth` plugin adds a `.synth()`
method for hydra-like procedural generation.

The base layer, which is always present at the bottom of the layer stack,
can be accessed via Textmodifier.layers.base.

## Accessors

### asciiFramebuffer

#### Get Signature

```ts
get asciiFramebuffer(): 
  | TextmodeFramebuffer
  | undefined;
```

Get the framebuffer containing the rendered textmode output for this layer.

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

	const fb = layer.asciiFramebuffer;
	const { cols, rows } = t.grid;

	if (fb) {
		const pixels = fb.readPixels(0);
		const cx = Math.floor(fb.width / 2);
		const cy = Math.floor(fb.height / 2);
		const index = (cy * fb.width + cx) * 4;

		const r = pixels[index];
		const g = pixels[index + 1];
		const b = pixels[index + 2];

		const title = '--- ASCII FRAMEBUFFER ---';
		drawLabel(title, -(title.length - 1) / 2, -(rows - 1) / 2 + 2, [255, 220, 100]);

		const info = `Read center pixel: rgb(${r}, ${g}, ${b})`;
		drawLabel(info, -(info.length - 1) / 2, (rows - 1) / 2 - 2, [150, 180, 255]);
	}
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

Returns the draw framebuffer for this layer.
If the layer is not yet initialized, returns undefined.

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

	// The drawFramebuffer property provides access to the internal WebGL
	const fb = sourceLayer.drawFramebuffer;

	drawCenteredText('TextmodeLayer.drawFramebuffer', -12, [240, 245, 255]);
	drawCenteredText('Capturing the pre-ASCII raw drawing state.', -10, [150, 170, 200]);

	if (fb) {
		t.push();
		t.translate(0, 0);
		t.image(fb, 24, 14);
		t.pop();

		drawCenteredText('INTERNAL DATA BUFFER', 10, [140, 220, 255]);
		drawCenteredText(`${fb.width} x ${fb.height} COORDINATE UNITS`, 12, [100, 120, 150]);
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
get font(): 
  | TextmodeFont
  | TextmodeTileset;
```

The font used by this layer.

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

const bigFontLayer = t.layers.add({ fontSize: 24, blendMode: 'additive' });

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

	drawCenteredText('TextmodeLayer.font', -12, [240, 245, 255]);
	drawCenteredText('Each layer maintains its own independent font state.', -10, [150, 170, 200]);

	t.push();
	t.charColor(40, 50, 80);
	t.char('.');
	t.rect(t.grid.cols, t.grid.rows);
	t.pop();

	const baseFont = t.layers.base.font;
	drawCenteredText(`BASE FONT: ${baseFont.fontSize} PX`, 12, [140, 180, 255]);
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

	drawCenteredText('LAYER FONT (ADDITIVE)', -4, [255, 225, 140]);
	drawCenteredText(`${font.fontSize} PX`, 6, [255, 225, 140]);
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

Get the grid associated with this layer.

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

	const g = t.grid;

	drawCenteredText('TextmodeLayer.grid', -12, [240, 245, 255]);
	drawCenteredText('Every layer has its own independent coordinate grid.', -10, [150, 170, 200]);

	t.push();
	t.translate(-10, 0);
	t.charColor(100, 150, 255, 100);
	t.char('+');
	t.rect(14, 10);
	t.pop();

	drawCenteredText(`BASE GRID: ${g.cols} x ${g.rows}`, 8, [140, 180, 255]);
});

densityLayer.draw(() => {
	t.clear();

	// Access this specific layer's grid via the .grid property.
	const g = densityLayer.grid;

	t.push();
	t.translate(20, 0);
	t.charColor(255, 225, 140, 150);
	t.char('.');
	t.rect(28, 20);
	t.pop();

	drawCenteredText(`LAYER GRID: ${g.cols} x ${g.rows}`, 12, [255, 225, 140]);
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

Returns the height of the final ASCII framebuffer in pixels.
If the layer is not yet initialized, returns 0.

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

	const h = detailLayer.height;
	const g = detailLayer.grid;

	t.push();
	t.translate(0, 0);
	t.char('|');
	t.charColor(120, 180, 255, 100);
	t.rect(1, t.grid.rows);
	t.pop();

	drawCenteredText('TextmodeLayer.height', -12, [240, 245, 255]);
	drawCenteredText('Total pixel height of the layer ASCII framebuffer.', -10, [150, 170, 200]);
	drawCenteredText(`${h} PIXELS`, 10, [140, 220, 255]);
	drawCenteredText(`${g.rows} ROWS x ${g.cellHeight}PX`, 12, [100, 120, 150]);
});

detailLayer.draw(() => {
	t.clear();
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

Returns the WebGL texture of the final ASCII framebuffer.
If the layer is not yet initialized, returns undefined.

##### Returns

`WebGLTexture` \| `undefined`

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });
const layer = t.layers.add({ fontSize: 16, blendMode: 'screen' });

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

t.draw(() => {
	t.background(5, 7, 18);

	const textureMatches = layer.texture === layer.asciiFramebuffer.textures[0];
	label('TextmodeLayer.texture', -Math.floor(t.grid.rows * 0.34), [255, 225, 140]);
	label(
		textureMatches ? 'texture matches ascii framebuffer' : 'texture pending',
		Math.floor(t.grid.rows * 0.3),
		[120, 205, 255]
	);
});

layer.draw(() => {
	t.clear();
	t.push();
	t.rotateZ(t.frameCount * 1.5);
	t.charColor(120, 205, 255);
	t.rect(18, 8);
	t.pop();
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

Returns the width of the final ASCII framebuffer in pixels.
If the layer is not yet initialized, returns 0.

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

	const w = detailLayer.width;
	const g = detailLayer.grid;

	t.push();
	t.translate(0, 0);
	t.char('=');
	t.charColor(120, 180, 255, 100);
	t.rect(t.grid.cols, 1);
	t.pop();

	drawCenteredText('TextmodeLayer.width', -12, [240, 245, 255]);
	drawCenteredText('Total pixel width of the layer ASCII framebuffer.', -10, [150, 170, 200]);
	drawCenteredText(`${w} PIXELS`, 6, [140, 220, 255]);
	drawCenteredText(`${g.cols} CELLS x ${g.cellWidth}PX`, 8, [100, 120, 150]);
});

detailLayer.draw(() => {
	t.clear();
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

Set or get the layer's blend mode for compositing with layers below.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mode?` | \| `"normal"` \| `"darken"` \| `"difference"` \| `"exclusion"` \| `"lighten"` \| `"multiply"` \| `"overlay"` \| `"screen"` \| `"additive"` \| `"subtract"` \| `"softLight"` \| `"hardLight"` \| `"colorDodge"` \| `"colorBurn"` | The blend mode to set. |

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

The current blend mode if no parameter is provided.

**Available blend modes:**
- `'normal'` - Standard alpha compositing
- `'additive'` - Adds colors together (great for glow/energy effects)
- `'multiply'` - Darkens by multiplying colors
- `'screen'` - Lightens; inverse of multiply
- `'subtract'` - Subtracts layer from base
- `'darken'` - Takes minimum of each channel
- `'lighten'` - Takes maximum of each channel
- `'overlay'` - Combines multiply/screen for contrast
- `'softLight'` - Subtle contrast enhancement
- `'hardLight'` - Intense overlay effect
- `'colorDodge'` - Brightens base by blend color
- `'colorBurn'` - Darkens base by blend color
- `'difference'` - Absolute difference; creates inverted effects
- `'exclusion'` - Softer difference effect

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

			drawLabel(blendModes[i], -(blendModes[i].length - 1) / 2, 0, [255, 255, 255]);

			t.pop();
		});
	});

	const title = '--- BLEND MODES ---';
	drawLabel(title, -(title.length - 1) / 2, -(rows - 1) / 2 + 2, [255, 220, 100]);
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });
const scene = t.layers.add();

t.draw(() => {
	t.background(8, 10, 18);
	scene.camera(Math.sin(t.frameCount * 0.03) * 18, 10, 42, 0, 0, 0);
});

scene.draw(() => {
	t.clear();
	t.rotateY(t.frameCount * 2);
	t.rotateX(25);
	t.char('#');
	t.charColor(120, 220, 255);
	t.box(16, 16, 16);
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

Create a camera initialized from this layer's camera state and set it active for this layer.

#### Returns

[`TextmodeCamera`](../../../classes/TextmodeCamera.md)

The created camera.

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });
const scene = t.layers.add();
let camera;

t.setup(() => {
	camera = scene.createCamera();
	scene.setCamera(camera);
});

t.draw(() => {
	t.background(8, 10, 18);
	camera.setPosition(Math.sin(t.frameCount * 0.03) * 18, 8, 46);
	camera.lookAt(0, 0, 0);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});

scene.draw(() => {
	t.clear();
	t.rotateY(t.frameCount * 2);
	t.rotateX(20);
	t.char('#');
	t.charColor(120, 220, 255);
	t.box(16, 16, 16);
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
| `pluginName` | `string` | Unique identifier for the plugin. |

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
const PLUGIN_NAME = 'monitor';

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

t.mousePressed(() => {
	if (layer.hasPluginState(PLUGIN_NAME)) {
		layer.deletePluginState(PLUGIN_NAME);
	}
});

layer.draw(() => {
	t.clear();

	if (!layer.hasPluginState(PLUGIN_NAME)) {
		layer.setPluginState(PLUGIN_NAME, { angle: 0, resets: 0 });
	}

	const state = layer.getPluginState(PLUGIN_NAME);

	state.angle += 0.05;

	t.push();
	t.rotateZ((state.angle * 180) / Math.PI);
	t.charColor(120, 180, 255);
	t.char('#');
	t.rect(8, 4);
	t.pop();

	drawCenteredText('TextmodeLayer.deletePluginState', -10, [240, 245, 255]);
	drawCenteredText('Click to delete the "monitor" plugin state.', -8, [150, 170, 200]);

	const statusColor = layer.hasPluginState(PLUGIN_NAME) ? [120, 255, 150] : [255, 100, 100];
	drawCenteredText('STATE: ' + (layer.hasPluginState(PLUGIN_NAME) ? 'ACTIVE' : 'DELETED'), 6, statusColor);
	drawCenteredText('VALUE: ' + state.angle.toFixed(2), 8, [180, 200, 220]);
});

t.draw(() => {
	t.background(6, 10, 22);
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

Define this layer's draw callback. The callback is executed each frame
and should contain all drawing commands for this layer.

Inside the callback, use `t` (your `Textmodifier` instance) to access drawing
methods like `char()`, `charColor()`, `translate()`, and `rect()`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` | The function to call when drawing this layer. |

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
	drawCenteredText('TextmodeLayer.draw', -12, [240, 245, 255]);

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

	drawCenteredText('INDEPENDENT LAYER CONTEXTS', 10, [150, 170, 200]);
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

Apply a post-processing filter to this layer's rendered output.

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
| `name` | `T` | The name of the filter to apply (built-in or custom registered filter) |
| `params?` | [`BuiltInFilterParams`](../../filters/interfaces/BuiltInFilterParams.md)\[`T`\] | Optional parameters for the filter |

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

const filters = [
	{ name: 'invert', params: undefined, label: 'INVERT' },
	{ name: 'grayscale', params: 1.0, label: 'GRAYSCALE (1.0)' },
	{ name: 'sepia', params: 0.8, label: 'SEPIA (0.8)' },
	{ name: 'threshold', params: 0.5, label: 'THRESHOLD (0.5)' },
];

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

	t.push();
	t.charColor(40, 50, 80);
	t.char('.');
	t.rect(t.grid.cols, t.grid.rows);
	t.pop();

	drawCenteredText('TextmodeLayer.filter', -12, [240, 245, 255]);
	drawCenteredText('Applying post-processing to specific layers.', -10, [150, 170, 200]);
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

		drawCenteredText('ACTIVE FILTER: ' + active.label, 10, [140, 255, 180]);
	} else {
		drawCenteredText('NO FILTER (NORMAL)', 10, [255, 100, 100]);
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Call Signature

```ts
filter<TParams>(name, params?): void;
```

Apply a custom filter registered via `t.layers.filters.register()`.

##### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TParams` | `unknown` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the custom filter |
| `params?` | `TParams` | Optional parameters for the custom filter |

##### Returns

`void`

***

### fontSize()

```ts
fontSize(size?): number | void;
```

Get or set the font size for this layer.

Changing the font size will re-initialize the layer's grid based on the new character dimensions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `size?` | `number` | The font size to set. |

#### Returns

`number` \| `void`

The current font size if called without arguments.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const detailLayer = t.layers.add({ fontSize: 8, blendMode: 'screen' });

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

	drawCenteredText('TextmodeLayer.fontSize', -12, [240, 245, 255]);
	drawCenteredText('FontSize determines the grid resolution of each layer.', -10, [150, 170, 200]);

	t.push();
	t.translate(0, 0);
	t.charColor(40, 50, 80);
	t.char('#');
	t.rect(20, 10);
	t.pop();

	drawCenteredText(`BASE LAYER: ${t.layers.base.fontSize()} PX`, 7, [140, 180, 255]);
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

	drawCenteredText(`DETAIL LAYER: ${detailLayer.fontSize()} PX`, 12, [255, 225, 140]);
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
| `pluginName` | `string` | Unique identifier for the plugin. |

#### Returns

`T` \| `undefined`

The stored state object, or undefined if not set.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const trackerLayer = t.layers.add();
const PLUGIN_NAME = 'tracker';

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

		drawCenteredText('TextmodeLayer.getPluginState', -10, [240, 245, 255]);
		drawCenteredText('Retrieving persistent state data from the layer.', -8, [150, 170, 200]);

		drawCenteredText('STATE MONITOR', 6, [140, 255, 180]);
		drawCenteredText(`X: ${xPos.toString().padStart(3, ' ')}`, 8, [180, 200, 220]);
		drawCenteredText(`SPEED: ${state.speed.toFixed(2)}`, 10, [180, 200, 220]);
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

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### hasPluginState()

```ts
hasPluginState(pluginName): boolean;
```

Check if plugin-specific state exists on this layer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pluginName` | `string` | Unique identifier for the plugin. |

#### Returns

`boolean`

True if state exists, false otherwise.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const layer = t.layers.add();
const PLUGIN_NAME = 'module';

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

	if (t.frameCount % 120 === 0) {
		if (layer.hasPluginState(PLUGIN_NAME)) {
			layer.deletePluginState(PLUGIN_NAME);
		} else {
			layer.setPluginState(PLUGIN_NAME, { active: true });
		}
	}

	const exists = layer.hasPluginState(PLUGIN_NAME);
	const statusColor = exists ? [120, 255, 150] : [255, 100, 100];

	drawCenteredText('TextmodeLayer.hasPluginState', -10, [240, 245, 255]);
	drawCenteredText('Checking for the presence of specific plugin data.', -8, [150, 170, 200]);

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

	drawCenteredText(exists ? 'STATUS: CONNECTED' : 'STATUS: DISCONNECTED', 6, statusColor);
	drawCenteredText(`hasPluginState('${PLUGIN_NAME}'): ${exists}`, 9, [140, 180, 255]);
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

	if (t.frameCount % 120 === 0) {
		if (signalLayer._visible) {
			signalLayer.hide();
		} else {
			signalLayer.show();
		}
	}

	t.push();
	t.charColor(40, 50, 80);
	t.char('.');
	t.rect(t.grid.cols, t.grid.rows);
	t.pop();

	drawCenteredText('TextmodeLayer.hide', -10, [240, 245, 255]);
	drawCenteredText('Hiding a layer stops it from being composited.', -8, [150, 170, 200]);

	const isVisible = signalLayer._visible;
	const statusColor = isVisible ? [140, 255, 180] : [255, 100, 100];

	drawCenteredText(isVisible ? 'LAYER: VISIBLE' : 'LAYER: HIDDEN', 6, statusColor);
	drawCenteredText('The draw() callback still runs, but output is hidden.', 9, [100, 120, 150]);
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

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### loadFont()

```ts
loadFont(fontSource): Promise<TextmodeFont>;
```

Load a font into this layer from a URL/path or from an existing [TextmodeFont](../../fonts/classes/TextmodeFont.md).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fontSource` | `string` \| [`TextmodeFont`](../../fonts/classes/TextmodeFont.md) | The URL/path to the font file, or an existing TextmodeFont to fork from. |

#### Returns

`Promise`\<[`TextmodeFont`](../../fonts/classes/TextmodeFont.md)\>

The loaded TextmodeFont instance.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const detailedLayer = t.layers.add({ blendMode: 'screen' });

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
	await detailedLayer.loadFont('../../primitives/FROGBLOCK-V2.1.ttf');
});

t.draw(() => {
	t.background(6, 10, 22);

	drawCenteredText('TextmodeLayer.loadFont', -12, [240, 245, 255]);
	drawCenteredText('Fonts are isolated to their specific layer.', -10, [150, 170, 200]);

	t.push();
	t.translate(0, 0);
	t.charColor(40, 50, 80);
	t.char('#');
	t.rect(14, 8);
	t.pop();

	drawCenteredText('BASE FONT: URSA (DEFAULT)', 10, [140, 180, 255]);
});

detailedLayer.draw(() => {
	t.clear();

	t.push();
	t.translate(0, 0);
	t.charColor(255, 225, 140, 180);
	t.char('0'); // A distinctive glyph in Frogblock
	t.rect(8, 4);
	t.pop();

	drawCenteredText('LOADED FONT: FROGBLOCK', 12, [255, 225, 140]);
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

Load a tileset into this layer from load options or from an existing [TextmodeTileset](../../fonts/classes/TextmodeTileset.md).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tilesetSource` | \| [`TextmodeTilesetOptions`](../../fonts/interfaces/TextmodeTilesetOptions.md) \| [`TextmodeTileset`](../../fonts/classes/TextmodeTileset.md) | Tileset load options or an existing TextmodeTileset to fork from. |

#### Returns

`Promise`\<[`TextmodeTileset`](../../fonts/classes/TextmodeTileset.md)\>

The loaded TextmodeTileset instance.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

// Each layer can have its own tileset and color behavior.
const tilesLayer = t.layers.add();

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
	await tilesLayer.loadTileset({
		source: 'https://littlebitspace.com/resources/fonts/T64.png',
		columns: 16,
		rows: 16,
		count: 256,
	});
});

t.draw(() => {
	t.background(6, 10, 22);

	drawCenteredText('TextmodeLayer.loadTileset', -12, [240, 245, 255]);
	drawCenteredText('Bitmaps repacked into per-layer glyph atlases.', -10, [150, 170, 200]);

	t.push();
	t.charColor(40, 50, 80);
	t.char('.');
	t.rect(t.grid.cols, 1);
	t.pop();

	drawCenteredText('CLICK TO TOGGLE useTileColors()', 10, [140, 220, 255]);
});

tilesLayer.draw(() => {
	t.clear();
	const font = tilesLayer.font;
	if (!font || font.characters.length === 0) return;

	const time = t.frameCount * 0.05;
	const activeTile = Math.floor(time) % font.characters.length;

	t.push();
	t.translate(0, 0);
	t.char(activeTile);

	t.charColor(120, 255, 180);
	t.cellColor(20, 40, 60);
	t.rect(10, 6);
	t.pop();

	const mode = tilesLayer.useTileColors();
	const statusColor = mode ? [255, 225, 140] : [140, 180, 255];
	drawCenteredText('MODE: ' + (mode ? 'AUTHORED COLORS' : 'RECOLORED'), 6, statusColor);
});

t.mouseClicked(() => {
	tilesLayer.useTileColors(!tilesLayer.useTileColors());
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });
const scene = t.layers.add();

t.draw(() => {
	const x = Math.sin(t.frameCount * 0.04) * 8;
	const y = Math.cos(t.frameCount * 0.03) * 5;
	t.background(8, 10, 18);
	scene.camera(0, 0, 46);
	scene.lookAt(x, y, 0);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});

scene.draw(() => {
	t.clear();
	t.push();
	t.translate(Math.sin(t.frameCount * 0.04) * 8, Math.cos(t.frameCount * 0.03) * 5, 0);
	t.char('*');
	t.charColor(255, 220, 120);
	t.box(4, 4, 4);
	t.pop();

	t.rotateY(t.frameCount * 2);
	t.char('#');
	t.charColor(120, 220, 255);
	t.box(12, 12, 12);
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

Set or get the layer's offset in pixels.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `x?` | `number` | `undefined` | The x offset in pixels. |
| `y?` | `number` | `0` | The y offset in pixels. |

#### Returns

  \| `void`
  \| \{
  `x`: `number`;
  `y`: `number`;
\}

The current offset if no parameters are provided.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const offsetLayer = t.layers.add({ blendMode: 'additive' });

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

	const time = t.frameCount * 0.03;
	const g = t.grid;

	const offX = Math.round(Math.cos(time) * (g.width * 0.25));
	const offY = Math.round(Math.sin(time * 0.7) * (g.height * 0.25));

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

	drawCenteredText('TextmodeLayer.offset', -12, [240, 245, 255]);
	drawCenteredText('Translating the entire layer coordinate system in pixels.', -10, [150, 170, 200]);

	drawCenteredText(`OFFSET X: ${offX} PX`, 8, [255, 180, 100]);
	drawCenteredText(`OFFSET Y: ${offY} PX`, 10, [255, 180, 100]);
});

offsetLayer.draw(() => {
	t.clear();

	t.push();
	t.charColor(255, 180, 100);
	t.char('#');
	t.rect(7, 3);
	t.pop();
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

Define or retrieve the layer's opacity.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opacity?` | `number` | The opacity value to set (between 0 and 1). |

#### Returns

`number` \| `void`

The current opacity if no parameter is provided.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const pulseLayer = t.layers.add({ blendMode: 'additive' });

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

function drawMeter(value, y, rgb) {
	const width = 20;
	const activeBlocks = Math.round(value * width);

	t.push();
	t.translate(-width / 2, y);
	for (let i = 0; i < width; i++) {
		const active = i < activeBlocks;
		t.push();
		t.translate(i, 0);
		t.char(active ? '|' : '.');
		t.charColor(active ? rgb : [60, 70, 100]);
		t.point();
		t.pop();
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.04;
	const opacity = 0.5 + 0.5 * Math.sin(time);

	// Update the layer's opacity property.
	pulseLayer.opacity(opacity);

	t.push();
	t.charColor(40, 50, 80);
	t.char('.');
	t.rect(t.grid.cols, t.grid.rows);
	t.pop();

	drawCenteredText('TextmodeLayer.opacity', -10, [240, 245, 255]);
	drawCenteredText('Controlling the alpha transparency of a layer.', -8, [150, 170, 200]);

	drawMeter(opacity, 6, [255, 225, 140]);
	drawCenteredText(`OPACITY: ${opacity.toFixed(2)}`, 8, [255, 225, 140]);
});

pulseLayer.draw(() => {
	t.clear();

	t.push();
	t.charColor(255, 140, 180);
	t.char('#');
	t.rect(12, 6);
	t.pop();
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });
const scene = t.layers.add();

t.draw(() => {
	t.background(8, 10, 18);
	scene.ortho();
	scene.camera(0, 0, 44);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});

scene.draw(() => {
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });
const scene = t.layers.add();

t.draw(() => {
	const fov = 30 + (Math.sin(t.frameCount * 0.03) + 1) * 0.5 * 70;
	t.background(8, 10, 18);
	scene.perspective(fov, 0.1, 256);
	scene.camera(0, 0, 44);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});

scene.draw(() => {
	for (let i = 0; i < 3; i++) {
		t.push();
		t.translate((i - 1) * 10, 0, i * -12);
		t.rotateY(t.frameCount * 2 + i * 20);
		t.char('#');
		t.charColor(120 + i * 40, 220, 255);
		t.box(8, 8, 8);
		t.pop();
	}
});
```

***

### postDraw()

```ts
postDraw(callback): void;
```

Define this layer's post-draw callback.

The callback is executed after the layer has been converted to ASCII and after
any filters queued in [filter](#filter) during [draw](#draw) have been applied.
Filters queued inside this callback are applied to the layer's final ASCII texture
before the layer is composited with the rest of the scene.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` | The function to call after this layer has been drawn and filtered. |

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });
const scene = t.layers.add();
let custom = true;

t.mousePressed(() => {
	custom = !custom;
});

t.draw(() => {
	t.background(8, 10, 18);
	if (custom) {
		scene.camera(Math.sin(t.frameCount * 0.03) * 18, 8, 42);
	} else {
		scene.resetCamera();
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});

scene.draw(() => {
	t.clear();
	t.rotateY(t.frameCount * 2);
	t.char('*');
	t.charColor(custom ? 255 : 120, 220, 255);
	t.box(16, 16, 16);
});
```

***

### rotateZ()

```ts
rotateZ(z?): number | void;
```

Set or get the layer's rotation in degrees around its center.

The rotation is applied during compositing around the center of the layer's
rectangular bounds. The rotation origin remains at the center even when
an offset is applied.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `z?` | `number` | The rotation angle in degrees. Positive values rotate clockwise. |

#### Returns

`number` \| `void`

The current rotation in degrees if no parameter is provided.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const scannerLayer = t.layers.add({ blendMode: 'additive' });

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

	const time = t.frameCount * 1.5;
	const angle = time % 360;

	scannerLayer.rotateZ(angle);

	t.push();
	t.charColor(60, 70, 100);
	t.char('.');
	t.line(-15, 0, 15, 0);
	t.line(0, -8, 0, 8);
	t.pop();

	drawCenteredText('TextmodeLayer.rotateZ', -12, [240, 245, 255]);
	drawCenteredText('Rotating the entire layer coordinate system in degrees.', -10, [150, 170, 200]);

	drawCenteredText(`ANGLE: ${angle.toFixed(1).padStart(5, '0')} DEG`, 10, [140, 180, 255]);
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

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### setCamera()

```ts
setCamera(camera): void;
```

Set the active camera for this layer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `camera` | [`TextmodeCamera`](../../../classes/TextmodeCamera.md) | Camera instance to apply. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });
const scene = t.layers.add();
let useLeft = true;
let left;
let right;

t.setup(() => {
	left = scene.createCamera();
	right = scene.createCamera();
	left.setPosition(-18, 10, 38);
	right.setPosition(18, 10, 38);
	left.lookAt(0, 0, 0);
	right.lookAt(0, 0, 0);
	scene.setCamera(left);
});

t.mousePressed(() => {
	useLeft = !useLeft;
	scene.setCamera(useLeft ? left : right);
});

t.draw(() => {
	t.background(8, 10, 18);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});

scene.draw(() => {
	t.clear();
	t.rotateY(t.frameCount * 2);
	t.char('@');
	t.charColor(useLeft ? 255 : 120, 220, useLeft ? 120 : 255);
	t.box(16, 16, 16);
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
| `pluginName` | `string` | Unique identifier for the plugin. |
| `state` | `T` | The state object to store. |

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
const PLUGIN_NAME = 'core-data';

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

		t.push();
		t.charColor(140, 220, 255);
		t.char('#');
		const size = 4 + Math.round(state.power * 4);
		t.rect(size * 2, size);
		t.pop();

		drawCenteredText('TextmodeLayer.setPluginState', -12, [240, 245, 255]);
		drawCenteredText('Attaching persistent data objects to a layer.', -10, [150, 170, 200]);

		drawCenteredText('SYSTEM CONFIGURATION', 8, [255, 225, 140]);
		drawCenteredText(`ID: ${state.id}  SYNC: ${state.sync}`, 10, [180, 200, 220]);
		drawCenteredText(`PWR_LOAD: ${Math.round(state.power * 100)}%`, 12, [140, 220, 255]);
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

	if (t.frameCount % 120 === 0) {
		if (displayLayer._visible) {
			displayLayer.hide();
		} else {
			displayLayer.show();
		}
	}

	t.push();
	t.charColor(40, 50, 80);
	t.char('.');
	t.rect(t.grid.cols, t.grid.rows);
	t.pop();

	drawCenteredText('TextmodeLayer.show', -10, [240, 245, 255]);
	drawCenteredText('Revealing a hidden layer for compositing.', -8, [150, 170, 200]);

	const isVisible = displayLayer._visible;
	const statusColor = isVisible ? [140, 255, 180] : [255, 100, 100];

	drawCenteredText(isVisible ? 'LAYER: VISIBLE' : 'LAYER: HIDDEN', 6, statusColor);
	drawCenteredText('The show() method restores a layer to the stack.', 9, [100, 120, 150]);
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

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### useTileColors()

```ts
useTileColors(enabled?): boolean | void;
```

Get or set whether this layer should use authored tileset colors directly during the final ASCII pass.

When disabled (default), tileset texels are remapped to the current character (`primary`)
and cell (`secondary`) colors. Vector/font atlases always use character/cell recoloring
regardless of this setting.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `enabled?` | `boolean` | Whether this layer should use authored tileset colors directly. |

#### Returns

`boolean` \| `void`

The current layer tileset-color mode if called without arguments.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

// Each layer can have its own tileset and color behavior.
const tilesLayer = t.layers.add();

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
	await tilesLayer.loadTileset({
		source: 'https://littlebitspace.com/resources/fonts/T64.png',
		columns: 16,
		rows: 16,
		count: 256,
	});
});

t.draw(() => {
	t.background(6, 10, 22);

	drawCenteredText('TextmodeLayer.loadTileset', -12, [240, 245, 255]);
	drawCenteredText('Bitmaps repacked into per-layer glyph atlases.', -10, [150, 170, 200]);

	t.push();
	t.charColor(40, 50, 80);
	t.char('.');
	t.rect(t.grid.cols, 1);
	t.pop();

	drawCenteredText('CLICK TO TOGGLE useTileColors()', 10, [140, 220, 255]);
});

tilesLayer.draw(() => {
	t.clear();
	const font = tilesLayer.font;
	if (!font || font.characters.length === 0) return;

	const time = t.frameCount * 0.05;
	const activeTile = Math.floor(time) % font.characters.length;

	t.push();
	t.translate(0, 0);
	t.char(activeTile);

	t.charColor(120, 255, 180);
	t.cellColor(20, 40, 60);
	t.rect(10, 6);
	t.pop();

	const mode = tilesLayer.useTileColors();
	const statusColor = mode ? [255, 225, 140] : [140, 180, 255];
	drawCenteredText('MODE: ' + (mode ? 'AUTHORED COLORS' : 'RECOLORED'), 6, statusColor);
});

t.mouseClicked(() => {
	tilesLayer.useTileColors(!tilesLayer.useTileColors());
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
