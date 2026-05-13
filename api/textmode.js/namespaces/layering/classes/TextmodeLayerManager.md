---
layout: doc
editLink: true
title: TextmodeLayerManager
description: Manages the stack of layers within a Textmodifier instance.
category: Classes
api: true
namespace: layering
kind: Class
lastModified: 2026-05-13
hasConstructor: false
---

[textmode.js](../../../index.md) / [layering](../index.md) / TextmodeLayerManager

# Class: TextmodeLayerManager

Manages the stack of layers within a [Textmodifier](../../../classes/Textmodifier.md) instance.

This interface provides methods to create, manage, and organize multiple textmode layers.
Layers allow for complex compositing, independent rendering passes, and post-processing effects.

The `base` layer is always present at the bottom of the stack. User-created layers are added
on top of the base layer.

Access this manager via `textmodifier.layers`.

## Accessors

### all

#### Get Signature

```ts
get all(): readonly TextmodeLayer[];
```

Get all user layers as a readonly array.

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

labels.forEach((label, index) => {
	const layer = t.layers.add({ blendMode: 'screen', opacity: 0.7 });

	layer.draw(() => {
		t.clear();
		drawCenteredText(label, 0, colors[index]);
	});
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;

	t.layers.all.forEach((layer, index) => {
		const angle = time + index * ((Math.PI * 2) / t.layers.all.length);
		const radius = 5;

		layer.offset(Math.cos(angle) * radius, Math.sin(angle) * radius);
		layer.opacity(0.4 + 0.4 * Math.sin(time * 2 + index));
	});
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

The base layer that is always rendered at the bottom of the layer stack.
This layer represents the main drawing content before any user layers are composited.

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

Access the filter manager used by this layer stack.

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

	t.layers.base.filter('rgbShift', { time, amount: 0.005 });
});

filteredLayer.draw(() => {
	t.clear();

	const time = t.frameCount * 0.02;

	drawCenteredText('Filtered Layer', 0, [255, 200, 100]);

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

	filteredLayer.filter('rgbShift', { time: time * 1.5, amount: 0.015 });
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

The framebuffer containing the most recent composited result, or the framebuffer that will receive
the current frame's composited result if accessed mid-frame before presentation completes.

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

	const result = t.layers.resultFramebuffer;
	drawCenteredText(`Framebuffer: ${result.width} x ${result.height}`, 8, [200, 200, 200]);
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

Create and add a new layer to the top of the layer stack.

New layers are initialized with their own grid and font settings.
Layers can be offset, rotated, and blended with layers below them.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`TextmodeLayerOptions`](../interfaces/TextmodeLayerOptions.md) | Optional configuration for the new layer (visibility, opacity, blendMode, etc.) |

#### Returns

[`TextmodeLayer`](TextmodeLayer.md)

The newly created TextmodeLayer instance.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const layer1 = t.layers.add({ blendMode: 'screen', opacity: 0.8 });
const layer2 = t.layers.add({ blendMode: 'additive', opacity: 0.6 });

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

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### clear()

```ts
clear(): void;
```

Remove all user-created layers from the manager.
The base layer is not affected by this operation.
This is useful for integration into live-coding environments where code is re-evaluated
and layers need to be recreated from scratch.

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

let mode = 0;

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
}

t.setup(() => {
	rebuildLayers();
});

t.draw(() => {
	t.background(6, 10, 22);

	drawCenteredText('Base Layer', -12, [240, 245, 255]);
	drawCenteredText(`Mode: ${(mode % 9) + 1}`, 12, [200, 200, 200]);

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

Move a layer to a new index in the layer stack.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layer` | [`TextmodeLayer`](TextmodeLayer.md) | The layer to move. |
| `newIndex` | `number` | The new index for the layer. |

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

const layers = labels.map((label, index) => {
	const layer = t.layers.add();

	layer.draw(() => {
		t.clear();
		drawCenteredText(label, 0, colors[index]);
	});

	return layer;
});

t.draw(() => {
	t.background(6, 10, 22);

	drawCenteredText('Base Layer', -8, [240, 245, 255]);

	if (t.frameCount % 75 === 0) {
		const step = Math.floor(t.frameCount / 75);
		const layer = layers[step % layers.length];
		t.layers.move(layer, layers.length - 1);
	}
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

Remove a layer from the manager.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layer` | [`TextmodeLayer`](TextmodeLayer.md) | The layer to remove. |

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
let idCounter = 0;

function spawnEcho() {
	const id = ++idCounter;
	const layer = t.layers.add();
	const color = [255, 120 + (id % 2) * 135, 80 + (id % 3) * 85];

	layer.draw(() => {
		t.clear();
		t.push();
		t.translate(0, 10);
		t.charColor(color[0], color[1], color[2]);

		const label = String(id);
		for (let i = 0; i < label.length; i++) {
			t.push();
			t.translate(i - Math.floor(label.length / 2), 0);
			t.char(label[i]);
			t.point();
			t.pop();
		}
		t.pop();
	});

	echoes.push({ id, layer, born: t.frameCount });
}

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
	spawnEcho();
});

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

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### swap()

```ts
swap(layerA, layerB): void;
```

Swap the order of two layers if they exist in the same collection.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layerA` | [`TextmodeLayer`](TextmodeLayer.md) | The first layer to swap. |
| `layerB` | [`TextmodeLayer`](TextmodeLayer.md) | The second layer to swap. |

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

	drawCenteredText(t.frameCount % 180 < 90 ? 'Swap!' : 'Swap!', 8, [200, 200, 200]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
