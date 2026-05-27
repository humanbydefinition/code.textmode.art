---
layout: doc
editLink: true
title: TextmodeLayerManager
description: Manages the stack of layers within a Textmodifier instance.
category: Classes
api: true
namespace: layering
kind: Class
lastModified: 2026-05-27
hasConstructor: false
---

[textmode.js](../../../index.md) / [layering](../index.md) / TextmodeLayerManager

# Class: TextmodeLayerManager

Manages the stack of layers within a [Textmodifier](../../../classes/Textmodifier.md) instance.

The `base` layer is always present at the bottom of the stack. User-created layers are added
above it and can render with independent grids, fonts, filters, offsets, opacity, and blend modes.

Access this manager via `textmodifier.layers`.

## Accessors

### all

#### Get Signature

```ts
get all(): readonly TextmodeLayer[];
```

All user-created layers in stack order.

##### Returns

readonly [`TextmodeLayer`](TextmodeLayer.md)[]

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labels = ['Layer 1', 'Layer 2', 'Layer 3'];
const colors = [
	[255, 120, 80],
	[120, 255, 180],
	[80, 180, 255],
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

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	drawText(text, -Math.floor(text.length / 2), y, rgb);
}

const demoLayers = labels.map((label, index) => {
	const layer = t.layers.add({ blendMode: 'screen', opacity: 0.7 });

	layer.draw(() => {
		t.clear();
		drawCenteredText(label, 0, colors[index]);
	});

	return layer;
});
const labelLayer = t.layers.add();

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;

	t.layers.all
		.filter((layer) => layer !== labelLayer)
		.forEach((layer, index) => {
			const angle = time + index * ((Math.PI * 2) / demoLayers.length);
			const radius = 5;

			layer.offset(Math.cos(angle) * radius, Math.sin(angle) * radius);
			layer.opacity(0.4 + 0.4 * Math.sin(time * 2 + index));
		});
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('LAYERMANAGER.ALL', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: READ LAYER STACK', x, y++, [100, 220, 255]);
	drawText('Returns all user-created layers.', x, y++, [140, 160, 190]);
	drawText('HUD layer is filtered from motion.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(`DEMO LAYERS: ${demoLayers.length}`, x, y++, [140, 255, 180]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### base

#### Get Signature

```ts
get base(): TextmodeLayer;
```

Base layer rendered at the bottom of the stack.

Use this when you want direct access to the main layer as a [TextmodeLayer](TextmodeLayer.md),
including layer-specific methods like [TextmodeLayer.draw](TextmodeLayer.md#draw), [TextmodeLayer.filter](TextmodeLayer.md#filter),
and [TextmodeLayer.offset](TextmodeLayer.md#offset).

The base layer cannot be removed or moved.

##### Returns

[`TextmodeLayer`](TextmodeLayer.md)

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const base = t.layers.base;
const overlay = t.layers.add({ blendMode: 'screen', opacity: 0.8 });
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

base.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;

	drawCenteredText('Base Layer', -4, [240, 245, 255]);

	for (let i = 0; i < 4; i++) {
		const angle = time * 0.5 + (i / 4) * Math.PI * 2;
		const x = Math.round(Math.cos(angle) * 5 * 1.7);
		const y = Math.round(Math.sin(angle) * 5);

		t.push();
		t.translate(x, y);
		t.charColor(70 + i * 20, 160, 255);
		t.char('o');
		t.point();
		t.pop();
	}
});

overlay.draw(() => {
	t.clear();

	const time = t.frameCount * 0.02;

	drawCenteredText('Overlay', 4, [120, 255, 180]);

	const x = Math.round(Math.cos(time * 1.5) * 3 * 1.7);
	const y = Math.round(Math.sin(time * 1.5) * 3);

	t.push();
	t.translate(x, y);
	t.charColor(255, 200, 100);
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

	drawText('LAYERMANAGER.BASE', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: ACCESS BASE LAYER', x, y++, [100, 220, 255]);
	drawText('Base draws below user layers.', x, y++, [140, 160, 190]);
	drawText('Overlay proves stack compositing.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(`OV OP: ${overlay.opacity().toFixed(1)}`, x, y++, [140, 255, 180]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### filters

#### Get Signature

```ts
get filters(): TextmodeFilterManager;
```

Filter manager used by this layer stack.

Use this to register custom filters that can be applied to the base layer
and any user-created layer via [TextmodeLayer.filter](TextmodeLayer.md#filter).

##### Returns

[`TextmodeFilterManager`](../../filters/classes/TextmodeFilterManager.md)

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const filteredLayer = t.layers.add({ blendMode: 'screen', opacity: 0.8 });
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

function drawOrbit(count, speed, radius, rgb, glyph) {
	const time = t.frameCount * 0.02;
	for (let i = 0; i < count; i++) {
		const angle = time * speed + (i / count) * Math.PI * 2;
		const x = Math.round(Math.cos(angle) * radius * 1.7);
		const y = Math.round(Math.sin(angle) * radius);

		t.push();
		t.translate(x, y);
		t.charColor(rgb[0] + i * 20, rgb[1], rgb[2]);
		t.char(glyph);
		t.point();
		t.pop();
	}
}

t.setup(async () => {
	await t.layers.filters.register(
		'rgbShift',
		`#version 300 es
		precision highp float;
		uniform sampler2D u_texture;
		uniform float u_time;
		uniform float u_amount;
		in vec2 v_uv;
		out vec4 fragColor;
		void main() {
			vec2 shift = vec2(u_amount * sin(u_time), 0.0);
			float r = texture(u_texture, v_uv + shift).r;
			float g = texture(u_texture, v_uv).g;
			float b = texture(u_texture, v_uv - shift).b;
			float a = texture(u_texture, v_uv).a;
			fragColor = vec4(r, g, b, a);
		}`,
		{
			u_time: ['time', 0],
			u_amount: ['amount', 0.01],
		}
	);
});

t.draw(() => {
	t.background(6, 10, 22);
	drawOrbit(4, 0.5, 5, [70, 160, 255], 'o');
});

filteredLayer.draw(() => {
	t.clear();

	const time = t.frameCount * 0.02;
	drawOrbit(3, -0.7, 3, [255, 120, 80], '+');

	filteredLayer.filter('rgbShift', { time: time * 1.5, amount: 0.015 });
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('LAYERMANAGER.FILTERS', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: GLOBAL FILTER MANAGER', x, y++, [100, 220, 255]);
	drawText('Registers a custom RGB shift.', x, y++, [140, 160, 190]);
	drawText('Applies it only to one layer.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('FILTER: rgbShift', x, y++, [140, 255, 180]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### resultFramebuffer

#### Get Signature

```ts
get resultFramebuffer(): TextmodeFramebuffer;
```

Framebuffer containing the most recent composited result.

When accessed mid-frame before presentation completes, this returns the framebuffer
that will receive the current frame's composited result.

##### Returns

[`TextmodeFramebuffer`](../../../classes/TextmodeFramebuffer.md)

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const filteredLayer = t.layers.add({ blendMode: 'screen', opacity: 0.8 });
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
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;

	drawCenteredText('Base Layer', 0, [240, 245, 255]);

	for (let i = 0; i < 4; i++) {
		const angle = time * 0.5 + (i / 4) * Math.PI * 2;
		const x = Math.round(Math.cos(angle) * 5 * 1.7);
		const y = Math.round(Math.sin(angle) * 5);

		t.push();
		t.translate(x, y);
		t.charColor(70 + i * 20, 160, 255);
		t.char('o');
		t.point();
		t.pop();
	}
});

filteredLayer.draw(() => {
	t.clear();

	const time = t.frameCount * 0.02;

	drawCenteredText('Filtered Layer', -8, [120, 255, 180]);

	for (let i = 0; i < 3; i++) {
		const angle = time * -0.7 + (i / 3) * Math.PI * 2;
		const x = Math.round(Math.cos(angle) * 3 * 1.7);
		const y = Math.round(Math.sin(angle) * 3);

		t.push();
		t.translate(x, y);
		t.charColor(255, 120, 80);
		t.char('+');
		t.point();
		t.pop();
	}

	filteredLayer.filter('grayscale', 0.5 + 0.5 * Math.sin(time * 2));
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	const result = t.layers.resultFramebuffer;

	drawText('LAYERMANAGER.RESULTFRAMEBUFFER', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: COMPOSITED OUTPUT', x, y++, [100, 220, 255]);
	drawText('Reads the latest layer result.', x, y++, [140, 160, 190]);
	drawText('Global filters use this buffer.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(`SIZE: ${result.width} x ${result.height}`, x, y++, [140, 255, 180]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Methods

### \_renderAndPresentWithOverlay()

```ts
_renderAndPresentWithOverlay(overlayLayer, blendBackgroundWithOverlay?): void;
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `overlayLayer` | [`TextmodeLayer`](TextmodeLayer.md) | `undefined` |
| `blendBackgroundWithOverlay` | `boolean` | `false` |

#### Returns

`void`

***

### add()

```ts
add(options?): TextmodeLayer;
```

Create a layer at the top of the stack.

New layers are initialized with their own grid and font settings.
Layers can be offset, rotated, and blended with layers below them.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`TextmodeLayerOptions`](../interfaces/TextmodeLayerOptions.md) | Optional layer configuration. |

#### Returns

[`TextmodeLayer`](TextmodeLayer.md)

The created layer.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const layer1 = t.layers.add({ blendMode: 'screen', opacity: 0.8 });
const layer2 = t.layers.add({ blendMode: 'additive', opacity: 0.6 });
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

function drawOrbit(radius, speed, rgb, offset = 0) {
	const angle = t.frameCount * speed + offset;
	const x = Math.round(Math.cos(angle) * radius * 1.7);
	const y = Math.round(Math.sin(angle) * radius);

	t.push();
	t.translate(x, y);
	t.charColor(rgb[0], rgb[1], rgb[2]);
	t.char('o');
	t.point();
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);

	drawCenteredText('Base Layer', -8, [240, 245, 255]);
	drawOrbit(6, 0.03, [70, 160, 255], 0);
	drawOrbit(6, 0.03, [70, 160, 255], Math.PI);
});

layer1.draw(() => {
	t.clear();

	drawCenteredText('Layer 1', 0, [255, 200, 100]);
	drawOrbit(4, -0.05, [255, 120, 80], Math.PI / 2);
	drawOrbit(4, -0.05, [255, 120, 80], (Math.PI * 3) / 2);
});

layer2.draw(() => {
	t.clear();

	drawCenteredText('Layer 2', 8, [120, 255, 180]);
	drawOrbit(3, 0.07, [80, 255, 140], Math.PI / 4);
	drawOrbit(3, 0.07, [80, 255, 140], (Math.PI * 5) / 4);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('LAYERMANAGER.ADD', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: ADD USER LAYERS', x, y++, [100, 220, 255]);
	drawText('Adds layers above the base layer.', x, y++, [140, 160, 190]);
	drawText('Blend and opacity stay isolated.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('DEMO LAYERS: 2', x, y++, [140, 255, 180]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### clear()

```ts
clear(): void;
```

Remove and dispose all user-created layers.

The base layer is not affected by this operation.

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

let labelLayer = t.layers.add();
let mode = 0;

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

function drawHud() {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('LAYERMANAGER.CLEAR', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: CLEAR USER LAYERS', x, y++, [100, 220, 255]);
	drawText('Rebuilds a fresh layer stack.', x, y++, [140, 160, 190]);
	drawText('HUD is recreated after clear().', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(`MODE: ${(mode % 9) + 1}`, x, y++, [140, 255, 180]);
}

function rebuildLayers() {
	t.layers.clear();
	mode++;

	const labels = ['Layer A', 'Layer B', 'Layer C'];
	const colors = [
		[255, 120, 80],
		[120, 255, 180],
		[80, 180, 255],
	];

	for (let index = 0; index < labels.length; index++) {
		const layer = t.layers.add({
			blendMode: ['screen', 'additive', 'difference'][index],
			opacity: 0.6,
		});

		layer.draw(() => {
			t.clear();
			drawCenteredText(labels[index], (index - 1) * 6, colors[index]);
		});
	}

	labelLayer = t.layers.add();
	labelLayer.draw(drawHud);
}

labelLayer.draw(drawHud);

t.setup(() => {
	rebuildLayers();
});

t.draw(() => {
	t.background(6, 10, 22);

	drawCenteredText('Base Layer', -12, [240, 245, 255]);

	if (t.frameCount % 180 === 0) {
		rebuildLayers();
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### move()

```ts
move(layer, newIndex): void;
```

Move a user-created layer to a new index in the stack.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layer` | [`TextmodeLayer`](TextmodeLayer.md) | Layer to move. |
| `newIndex` | `number` | Target index. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labels = ['Layer 1', 'Layer 2', 'Layer 3'];
const colors = [
	[255, 120, 80],
	[120, 255, 180],
	[80, 180, 255],
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

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	drawText(text, -Math.floor(text.length / 2), y, rgb);
}

const layers = labels.map((label, index) => {
	const layer = t.layers.add();

	layer.draw(() => {
		t.clear();
		drawCenteredText(label, 0, colors[index]);
	});

	return layer;
});
const labelLayer = t.layers.add();

t.draw(() => {
	t.background(6, 10, 22);

	drawCenteredText('Base Layer', -8, [240, 245, 255]);

	if (t.frameCount % 75 === 0) {
		const step = Math.floor(t.frameCount / 75);
		const layer = layers[step % layers.length];
		t.layers.move(layer, layers.length - 1);
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	const step = Math.floor(t.frameCount / 75) % layers.length;

	drawText('LAYERMANAGER.MOVE', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: MOVE LAYER INDEX', x, y++, [100, 220, 255]);
	drawText('Cycles one layer to the top.', x, y++, [140, 160, 190]);
	drawText('Label layer stays above demo.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(`NEXT MOVE: ${labels[step]}`, x, y++, [140, 255, 180]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### remove()

```ts
remove(layer): void;
```

Remove and dispose a user-created layer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layer` | [`TextmodeLayer`](TextmodeLayer.md) | Layer to remove. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const echoes = [];
const labelLayer = t.layers.add();
let idCounter = 0;

function spawnEcho() {
	const id = ++idCounter;
	const layer = t.layers.add();
	const color = [255, 120 + (id % 2) * 135, 80 + (id % 3) * 85];
	layer.draw(() => {
		t.clear();
		drawCenteredText(String(id), 10, color);
	});

	echoes.push({ id, layer, born: t.frameCount });
	t.layers.move(labelLayer, Number.MAX_SAFE_INTEGER);
}

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

t.setup(() => {
	spawnEcho();
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;
	for (let i = 0; i < 4; i++) {
		const angle = time * 0.5 + (i / 4) * Math.PI * 2;
		const x = Math.round(Math.cos(angle) * 5 * 1.7);
		const y = Math.round(Math.sin(angle) * 5);

		t.push();
		t.translate(x, y);
		t.charColor(70 + i * 20, 160, 255);
		t.char('o');
		t.point();
		t.pop();
	}

	if (t.frameCount % 30 === 0 && echoes.length < 5) {
		spawnEcho();
	}

	for (let i = echoes.length - 1; i >= 0; i--) {
		const echo = echoes[i];
		const age = t.frameCount - echo.born;

		echo.layer.opacity(Math.max(0, 1 - age * 0.015));

		if (age >= 66) {
			t.layers.remove(echo.layer);
			echoes.splice(i, 1);
		}
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('LAYERMANAGER.REMOVE', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: REMOVE LAYERS', x, y++, [100, 220, 255]);
	drawText('Echo layers fade, then dispose.', x, y++, [140, 160, 190]);
	drawText('New echoes move HUD back on top.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(`ACTIVE ECHOES: ${echoes.length}`, x, y++, [140, 255, 180]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### swap()

```ts
swap(layerA, layerB): void;
```

Swap two user-created layers.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layerA` | [`TextmodeLayer`](TextmodeLayer.md) | First layer to swap. |
| `layerB` | [`TextmodeLayer`](TextmodeLayer.md) | Second layer to swap. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const warmLayer = t.layers.add();
const coolLayer = t.layers.add();
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

warmLayer.draw(() => {
	t.clear();
	drawCenteredText('Warm', 0, [255, 120, 80]);
});

coolLayer.draw(() => {
	t.clear();
	drawCenteredText('Cool', 0, [80, 180, 255]);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;

	drawCenteredText('Base Layer', -8, [240, 245, 255]);

	for (let i = 0; i < 4; i++) {
		const angle = time * 0.5 + (i / 4) * Math.PI * 2;
		const x = Math.round(Math.cos(angle) * 5 * 1.7);
		const y = Math.round(Math.sin(angle) * 5);

		t.push();
		t.translate(x, y);
		t.charColor(70 + i * 20, 160, 255);
		t.char('o');
		t.point();
		t.pop();
	}

	if (t.frameCount % 90 === 0) {
		t.layers.swap(warmLayer, coolLayer);
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	const warmOnTop = Math.floor(t.frameCount / 90) % 2 === 1;

	drawText('LAYERMANAGER.SWAP', x, y++, [100, 255, 140]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText('CONCEPT: SWAP TWO LAYERS', x, y++, [100, 220, 255]);
	drawText('Warm and cool layers trade order.', x, y++, [140, 160, 190]);
	drawText('HUD remains last in the stack.', x, y++, [140, 160, 190]);
	drawText('------------------------------------', x, y++, [80, 100, 150]);
	drawText(warmOnTop ? 'TOP DEMO: WARM' : 'TOP DEMO: COOL', x, y++, [140, 255, 180]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
