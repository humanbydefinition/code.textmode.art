---
layout: doc
editLink: true
title: TextmodeFilterManager
description: Manages filter registration, shader compilation, and filter chain application.
category: Classes
api: true
namespace: filters
kind: Class
lastModified: 2026-04-23
hasConstructor: false
---

[textmode.js](../../../index.md) / [filters](../index.md) / TextmodeFilterManager

# Class: TextmodeFilterManager

Manages filter registration, shader compilation, and filter chain application.

Used both for layer-level filters and global post-processing filters.

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

let filterActive = false;

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

t.setup(async () => {
	const fragment = `#version 300 es
		precision highp float;
		in vec2 v_uv;
		uniform sampler2D u_src;
		uniform float u_amount;
		out vec4 outColor;

		void main() {
			vec4 color = texture(u_src, v_uv);
			float glow = 0.5 + 0.5 * sin((v_uv.x + v_uv.y) * 16.0 + u_amount * 6.2831853);
			outColor = vec4(mix(color.rgb, vec3(color.b, color.r, glow), 0.6), color.a);
		}
	`;

	await t.filters.register('pulse-filter', fragment, {
		u_amount: ['amount', 0.0],
	});

	filterActive = true;
});

t.draw(() => {
	t.background(6, 9, 20);

	t.push();
	t.rotateZ(t.frameCount * 1.2);
	t.charColor(255, 220, 120);
	t.cellColor(24, 38, 92);
	t.rect(t.grid.cols - 12, t.grid.rows - 12);
	t.pop();

	if (filterActive) {
		t.filter('pulse-filter', (Math.sin(t.frameCount * 0.04) + 1) * 0.5);
	}

	drawLabel('custom filter registry', -Math.floor(t.grid.rows * 0.34), [255, 225, 140]);
	drawLabel(`has pulse-filter ${t.filters.has('pulse-filter') ? 'yes' : 'no'}`, Math.floor(t.grid.rows * 0.28));
	drawLabel(filterActive ? 'click to unregister' : 'refresh to re-register', Math.floor(t.grid.rows * 0.36), [120, 205, 255]);
});

t.mouseClicked(() => {
	if (!filterActive) {
		return;
	}

	t.filters.unregister('pulse-filter');
	filterActive = false;
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
  </div>
</div>

***

### register()

```ts
register(
   id, 
   shader, 
uniformDefs): Promise<void>;
```

Register a custom filter with the given ID, shader, and uniform definitions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | Unique filter identifier |
| `shader` | `string` \| [`TextmodeShader`](../../../classes/TextmodeShader.md) | Pre-compiled GLShader, fragment shader source string, or path to a .frag/.glsl file |
| `uniformDefs` | `Record`\<`string`, \[`string`, `UniformValue`\]\> | Maps uniform names to [paramName, defaultValue] tuples |

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

let filterActive = false;

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

t.setup(async () => {
	const fragment = `#version 300 es
		precision highp float;
		in vec2 v_uv;
		uniform sampler2D u_src;
		uniform float u_amount;
		out vec4 outColor;

		void main() {
			vec4 color = texture(u_src, v_uv);
			float glow = 0.5 + 0.5 * sin((v_uv.x + v_uv.y) * 16.0 + u_amount * 6.2831853);
			outColor = vec4(mix(color.rgb, vec3(color.b, color.r, glow), 0.6), color.a);
		}
	`;

	await t.filters.register('pulse-filter', fragment, {
		u_amount: ['amount', 0.0],
	});

	filterActive = true;
});

t.draw(() => {
	t.background(6, 9, 20);

	t.push();
	t.rotateZ(t.frameCount * 1.2);
	t.charColor(255, 220, 120);
	t.cellColor(24, 38, 92);
	t.rect(t.grid.cols - 12, t.grid.rows - 12);
	t.pop();

	if (filterActive) {
		t.filter('pulse-filter', (Math.sin(t.frameCount * 0.04) + 1) * 0.5);
	}

	drawLabel('custom filter registry', -Math.floor(t.grid.rows * 0.34), [255, 225, 140]);
	drawLabel(`has pulse-filter ${t.filters.has('pulse-filter') ? 'yes' : 'no'}`, Math.floor(t.grid.rows * 0.28));
	drawLabel(filterActive ? 'click to unregister' : 'refresh to re-register', Math.floor(t.grid.rows * 0.36), [120, 205, 255]);
});

t.mouseClicked(() => {
	if (!filterActive) {
		return;
	}

	t.filters.unregister('pulse-filter');
	filterActive = false;
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
  </div>
</div>
