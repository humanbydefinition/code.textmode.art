---
layout: doc
editLink: true
title: TextmodeFilterManager
description: Registers filter shaders and applies layer/global filter chains.
category: Classes
api: true
namespace: filters
kind: Class
lastModified: 2026-05-27
hasConstructor: false
---

[textmode.js](../../../index.md) / [filters](../index.md) / TextmodeFilterManager

# Class: TextmodeFilterManager

Registers filter shaders and applies layer/global filter chains.

## Example

```ts
// Register a custom filter
await t.filters.register('brightness', brightnessShader, {
    u_amount: ['amount', 1.0]
});

// Use the filter globally
t.filter('brightness', 1.5);

// Or on a layer
t.layers.base.filter('brightness', { amount: 0.8 });
```

## Methods

### has()

```ts
has(id): boolean;
```

Check if a filter with the given ID is registered.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The filter ID to check |

#### Returns

`boolean`

true if the filter exists

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

const labelLayer = t.layers.add();
let hasCustom = false;

t.setup(async () => {
	const fragment = `#version 300 es
		precision highp float;
		in vec2 v_uv;
		uniform sampler2D u_src;
		out vec4 outColor;
		void main() {
			outColor = texture(u_src, v_uv);
		}
	`;

	await t.filters.register('custom-noop', fragment, {});
});

t.draw(() => {
	t.background(6, 9, 20);

	hasCustom = t.filters.has('custom-noop');

	t.push();
	t.char('#');
	t.rotateZ(t.frameCount * 1.5);
	t.charColor(255, 220, 120);
	t.rect(12, 12);
	t.pop();
});

t.mouseClicked(async () => {
	if (hasCustom) {
		t.filters.unregister('custom-noop');
	} else {
		const fragment = `#version 300 es
			precision highp float;
			in vec2 v_uv;
			uniform sampler2D u_src;
			out vec4 outColor;
			void main() {
				outColor = texture(u_src, v_uv);
			}
		`;
		await t.filters.register('custom-noop', fragment, {});
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

	const isInvert = t.filters.has('invert');

	drawText('FILTERS.HAS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: CHECK REGISTERED FILTER', x, y++, 100, 220, 255);
	drawText('Performs lookup in filter registry.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`has('invert')     : ${isInvert}`, x, y++, 180, 255, 180);
	drawText(
		`has('custom-noop'): ${hasCustom}`,
		x,
		y++,
		hasCustom ? 180 : 255,
		hasCustom ? 255 : 120,
		hasCustom ? 180 : 120
	);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(hasCustom ? 'Click to unregister.' : 'Click to register custom-noop.', x, y++, 120, 205, 255);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### register()

```ts
register(
   id, 
   shader, 
uniformDefs?): Promise<void>;
```

Register a custom filter with the given ID, shader, and uniform definitions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | Unique filter identifier |
| `shader` | `string` \| [`TextmodeShader`](../../../classes/TextmodeShader.md) | Pre-compiled GLShader, fragment shader source string, or path to a .frag/.glsl file |
| `uniformDefs` | `FilterUniformDefinitions` | Maps uniform names to [paramName, defaultValue] tuples |

#### Returns

`Promise`\<`void`\>

#### Example

```ts
// Register with inline shader source
await t.filters.register('blur', blurFragSource, {
    u_radius: ['radius', 5.0],
    u_direction: ['direction', [1.0, 0.0]]
});

// Register with file path
await t.filters.register('vignette', './vignette.frag', {
    u_intensity: ['intensity', 0.5]
});
```

***

### unregister()

```ts
unregister(id): boolean;
```

Unregister a filter by its ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The filter ID to unregister |

#### Returns

`boolean`

true if the filter was unregistered, false if it wasn't found

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

const labelLayer = t.layers.add();
let filterActive = false;

t.setup(async () => {
	const fragment = `#version 300 es
		precision highp float;
		in vec2 v_uv;
		uniform sampler2D u_src;
		out vec4 outColor;
		void main() {
			vec4 col = texture(u_src, v_uv);
			outColor = vec4(col.r * 0.1, col.g * 1.5, col.b * 0.2, col.a);
		}
	`;

	await t.filters.register('green-wash', fragment, {});
	filterActive = true;
});

t.draw(() => {
	t.background(6, 9, 20);

	t.push();
	t.char('#');
	t.rotateZ(t.frameCount * 1.2);
	t.charColor(255, 220, 120);
	t.rect(14, 14);
	t.pop();

	if (filterActive && t.filters.has('green-wash')) {
		t.filter('green-wash');
	}
});

t.mouseClicked(() => {
	if (!filterActive) return;
	t.filters.unregister('green-wash');
	filterActive = false;
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

	const stateStr = filterActive ? 'ACTIVE' : 'INACTIVE';

	drawText('FILTERS.UNREGISTER', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: DISPOSE CUSTOM FILTER', x, y++, 100, 220, 255);
	drawText('Removes registered custom shader.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`FILTER STATE: ${stateStr}`, x, y++, 140, 190, 255);
	drawText(
		filterActive ? 'Click to unregister green-wash.' : 'Filter unregistered successfully.',
		x,
		y++,
		180,
		255,
		180
	);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
