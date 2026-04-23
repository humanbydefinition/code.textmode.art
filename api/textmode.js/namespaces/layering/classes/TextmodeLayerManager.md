---
layout: doc
editLink: true
title: TextmodeLayerManager
description: Manages the stack of layers within a Textmodifier instance.
category: Classes
api: true
namespace: layering
kind: Class
lastModified: 2026-04-23
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

['screen', 'additive', 'overlay', 'difference'].forEach((blendMode, index) => {
	const layer = t.layers.add({ blendMode, opacity: 0.7 });

	layer.draw(() => {
		t.clear();

		const time = t.frameCount * 0.02;
		const ringCount = 10;
		const baseSize = Math.min(t.grid.cols, t.grid.rows) * (0.35 + index * 0.08);

		for (let i = 0; i < ringCount; i++) {
			const phase = i / ringCount;
			const size = baseSize * (0.4 + phase * 0.9 + 0.1 * Math.sin(time * 2 + index + i));
			const start = time * 90 + index * 45 + i * 28;
			const sweep = 35 + 90 * (0.5 + 0.5 * Math.sin(time * 1.5 + phase * Math.PI * 2 + index));

			t.push();
			t.rotateZ(start * (index % 2 ? -0.25 : 0.25));
			t.char(['·', '+', '*', '░', '▒'][(index * 2 + i) % 5]);
			t.lineWeight(1 + ((i + index) % 3));
			t.charColor(80 + 40 * i, 120 + 30 * index, 255 - 18 * i);
			t.arc(size, size * (0.6 + phase * 0.35), start, start + sweep);
			t.pop();
		}
	});
});

t.draw(() => {
	t.background(10, 15, 25);

	const time = t.frameCount * 0.02;
	const radius = Math.min(t.grid.cols, t.grid.rows) * 0.12;

	t.layers.all.forEach((layer, index) => {
		const angle = time * (0.8 + index * 0.15) + index * ((Math.PI * 2) / t.layers.all.length);

		layer.offset(Math.cos(angle) * radius, Math.sin(angle * 1.4) * radius * 0.6);
		layer.rotateZ(time * (40 - index * 10));
		layer.opacity(0.35 + index * 0.12 + 0.18 * Math.sin(time * 3 + index));
	});
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/LayerManager/all/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 8 });

const base = t.layers.base;
const hudLayer = t.layers.add({ blendMode: 'screen', opacity: 0.9 });

base.draw(() => {
	const time = t.frameCount * 0.02;
	const radius = Math.min(t.grid.cols, t.grid.rows) * 0.38;
	const sweepAngle = time * 120;

	t.background(4, 12, 10);

	for (let i = 1; i <= 5; i++) {
		const size = (radius * i) / 2.5;
		t.charColor(20, 70 + i * 20, 35);
		t.char(i % 2 ? '·' : ':');
		t.lineWeight(1);
		t.ellipse(size * 2, size * 2);
	}

	for (let i = 0; i < 8; i++) {
		t.push();
		t.rotateZ(i * 45);
		t.charColor(18, 60, 28);
		t.char('.');
		t.line(0, 0, radius, 0);
		t.pop();
	}

	for (let i = 0; i < 18; i++) {
		const angle = (i / 18) * Math.PI * 2 + Math.sin(time * 0.5 + i) * 0.3;
		const dist = radius * (0.2 + ((i * 37) % 100) / 140);
		const x = Math.cos(angle) * dist;
		const y = Math.sin(angle) * dist;
		const delta = Math.atan2(
			Math.sin(angle - (sweepAngle * Math.PI) / 180),
			Math.cos(angle - (sweepAngle * Math.PI) / 180)
		);
		const glow = Math.max(0, 1 - Math.abs(delta) / 0.8);

		t.push();
		t.translate(x, y);
		t.char(['•', '*', '+'][i % 3]);
		t.charColor(80 + glow * 175, 140 + glow * 115, 90 + glow * 40);
		t.point();
		t.pop();
	}

	for (let i = 0; i < 6; i++) {
		t.push();
		t.rotateZ(sweepAngle - i * 4);
		t.charColor(40 + i * 30, 120 + i * 20, 55);
		t.char('/');
		t.lineWeight(2);
		t.line(0, 0, radius, 0);
		t.pop();
	}

	t.charColor(220, 255, 180);
	t.char('◉');
	t.point();

	base.filter('threshold', 0.22 + 0.06 * Math.sin(time * 2));
});

hudLayer.draw(() => {
	t.clear();

	const time = t.frameCount * 0.02;
	const scanY = Math.sin(time * 2) * Math.min(t.grid.rows * 0.3, 12);

	t.charColor(90, 255, 170);
	t.char('═');
	t.rect(t.grid.cols * 0.82, t.grid.rows * 0.82);

	t.charColor(120, 255, 200);
	t.char('─');
	t.line(-t.grid.cols * 0.35, scanY, t.grid.cols * 0.35, scanY);

	t.char('│');
	t.line(0, -t.grid.rows * 0.35, 0, t.grid.rows * 0.35);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/LayerManager/base/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 8 });

const prismLayer = t.layers.add({ blendMode: 'screen', opacity: 0.85 });

t.setup(async () => {
	await t.layers.filters.register(
		'spectralPulse',
		`#version 300 es
		precision highp float;
		uniform sampler2D u_texture;
		uniform float u_time;
		uniform float u_amount;
		uniform float u_twist;
		in vec2 v_uv;
		out vec4 fragColor;
		void main() {
			vec2 center = vec2(0.5);
			vec2 delta = v_uv - center;
			float dist = length(delta);
			vec2 dir = dist > 0.0 ? delta / dist : vec2(0.0);
			float angle = u_twist * dist * sin(u_time * 0.7);
			mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
			vec2 uv = center + rot * delta;
			vec2 shift = dir * u_amount * (0.4 + 0.6 * sin(dist * 28.0 - u_time * 6.0));
			float r = texture(u_texture, uv + shift).r;
			float g = texture(u_texture, uv).g;
			float b = texture(u_texture, uv - shift).b;
			float a = texture(u_texture, uv).a;
			fragColor = vec4(r, g, b, a);
		}`,
		{
			u_time: ['time', 0],
			u_amount: ['amount', 0.015],
			u_twist: ['twist', 1],
		}
	);
});

t.draw(() => {
	const time = t.frameCount * 0.02;
	const radius = Math.min(t.grid.cols, t.grid.rows) * 0.34;

	t.background(8, 10, 20);
	t.lineWeight(2);

	for (let i = 0; i < 24; i++) {
		const angle = (i / 24) * Math.PI * 2 + time;
		const x = Math.cos(angle) * radius;
		const y = Math.sin(angle * 1.5) * radius * 0.55;

		t.charColor(90 + i * 5, 140 + i * 3, 255);
		t.char(['·', '+', '*', '░'][i % 4]);
		t.line(-x, -y, x, y);
	}

	t.layers.base.filter('spectralPulse', { time, amount: 0.01, twist: 1.2 });
});

prismLayer.draw(() => {
	t.clear();

	const time = t.frameCount * 0.02;
	const count = 18;
	const radius = Math.min(t.grid.cols, t.grid.rows) * 0.2;

	for (let i = 0; i < count; i++) {
		const angle = (i / count) * Math.PI * 2 - time * 1.8;

		t.push();
		t.translate(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.65);
		t.rotateZ(angle * 60 + time * 180);
		t.char(['@', '#', '▓', '▒'][i % 4]);
		t.charColor(255, 180 + 60 * Math.sin(time + i), 80 + i * 8);
		t.arc(6 + i * 0.8, 3 + i * 0.35, time * 120 + i * 20, time * 120 + i * 20 + 180);
		t.pop();
	}

	prismLayer.filter('spectralPulse', { time: time * 1.4, amount: 0.02, twist: 2.5 });
	prismLayer.filter('grayscale', 0.15 + 0.15 * Math.sin(time * 3));
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/LayerManager/filters/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });
const glowLayer = t.layers.add({ fontSize: 16, blendMode: 'screen' });

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
	t.background(6, 9, 18);
	t.push();
	t.rotateZ(t.frameCount * 1.1);
	t.charColor(255, 230, 150);
	t.rect(14, 14);
	t.pop();

	const result = t.layers.resultFramebuffer;

	label(`result framebuffer ${result.width} x ${result.height}`, -Math.floor(t.grid.rows * 0.34), [255, 225, 140]);
	label(`attachments ${result.attachmentCount}`, Math.floor(t.grid.rows * 0.32), [120, 205, 255]);
});

glowLayer.draw(() => {
	t.clear();
	t.push();
	t.rotateZ(-t.frameCount * 1.7);
	t.charColor(110, 205, 255);
	t.rect(20, 6);
	t.pop();
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeLayerManager/resultFramebuffer/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

## Methods

### \_renderAndPresentWithOverlay()

```ts
_renderAndPresentWithOverlay(overlayLayer, blendBackgroundWithOverlay): void;
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
add(options): TextmodeLayer;
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

const cloudLayer = t.layers.add({ blendMode: 'screen', opacity: 0.45 });
const rainLayer = t.layers.add({ blendMode: 'additive', opacity: 0.7, fontSize: 8 });
const signalLayer = t.layers.add({ blendMode: 'difference', opacity: 0.3 });

t.draw(() => {
	const time = t.frameCount * 0.02;
	const radius = Math.min(t.grid.cols, t.grid.rows) * 0.42;

	t.background(6, 10, 22);

	for (let i = 0; i < 18; i++) {
		const angle = (i / 18) * Math.PI * 2;
		const x = Math.cos(angle + time * 0.3) * radius;
		const y = Math.sin(angle * 2 + time) * radius * 0.35;

		t.charColor(40, 80 + i * 5, 120 + i * 7);
		t.char(['·', ':', '+'][i % 3]);
		t.line(-x, -y, x, y);
	}

	t.push();
	t.rotateZ(-time * 30);
	t.charColor(255, 220, 140);
	t.char('*');
	t.arc(radius * 0.9, radius * 0.9, time * 90, time * 90 + 260);
	t.pop();
});

cloudLayer.draw(() => {
	t.clear();

	const time = t.frameCount * 0.02;

	for (let i = 0; i < 14; i++) {
		t.push();
		t.translate(Math.sin(time * 0.9 + i) * 18, Math.cos(time * 0.6 + i * 1.7) * 7);
		t.rotateZ(time * 15 + i * 20);
		t.char(['░', '▒', '▓'][i % 3]);
		t.charColor(120 + i * 8, 180 + i * 4, 255);
		t.ellipse(10 + i * 0.8, 4 + Math.sin(time + i) * 2);
		t.pop();
	}
});

rainLayer.draw(() => {
	t.clear();

	const time = t.frameCount * 0.04;
	const g = rainLayer.grid;

	for (let x = -g.cols / 2; x < g.cols / 2; x += 3) {
		const speed = 0.6 + Math.abs(Math.sin(x * 0.17)) * 1.5;
		const y = ((time * speed + x * 3) % (g.rows + 12)) - g.rows / 2 - 6;

		t.push();
		t.translate(x, y);
		t.charColor(120, 255, 220);
		t.char('¦');
		t.line(0, 0, 0, 8);
		t.pop();
	}
});

signalLayer.draw(() => {
	t.clear();

	const time = t.frameCount * 0.02;
	const sweepY = Math.sin(time * 2.4) * t.grid.rows * 0.25;

	t.charColor(255, 255, 255);
	t.char('─');
	t.line(-t.grid.cols * 0.45, sweepY, t.grid.cols * 0.45, sweepY);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/LayerManager/add/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 8 });

let mode = 0;

function rebuildLayers() {
	t.layers.clear();
	mode++;

	const layerCount = 4;

	for (let index = 0; index < layerCount; index++) {
		const layer = t.layers.add({
			blendMode: ['screen', 'additive', 'difference', 'overlay'][(mode + index) % 4],
			opacity: 0.5 + index * 0.12,
		});

		layer.draw(() => {
			t.clear();

			const time = t.frameCount * 0.02;
			const count = 8 + index * 4;
			const base = Math.min(t.grid.cols, t.grid.rows) * (0.12 + index * 0.06);

			for (let i = 0; i < count; i++) {
				const angle = (i / count) * Math.PI * 2 + time * (0.5 + index * 0.2) * (mode % 2 ? 1 : -1);
				const wobble = base + Math.sin(time * 3 + i + mode) * (1.5 + index);

				t.push();
				t.translate(Math.cos(angle) * wobble, Math.sin(angle * 1.3) * wobble * 0.65);
				t.rotateZ(angle * 90 + mode * 25);
				t.char(['·', '+', '*', '░', '▒'][(mode + index + i) % 5]);
				t.charColor(70 + index * 45, 120 + i * 8, 255 - index * 25);
				t.arc(5 + index * 2 + (i % 4), 3 + index, angle * 60, angle * 60 + 160);
				t.pop();
			}
		});
	}
}

t.setup(() => {
	rebuildLayers();
});

t.draw(() => {
	const time = t.frameCount * 0.02;
	const radius = Math.min(t.grid.cols, t.grid.rows) * 0.44;

	t.background(6, 10, 18);

	for (let i = 0; i < 18; i++) {
		const angle = (i / 18) * Math.PI * 2 - time * 0.7;
		t.charColor(25, 45 + i * 6, 70 + i * 8);
		t.char(i % 3 ? '.' : ':');
		t.line(0, 0, Math.cos(angle) * radius, Math.sin(angle) * radius * 0.58);
	}

	if (t.frameCount % 180 === 0) {
		rebuildLayers();
	}

	t.charColor(255, 240, 170);
	t.char(String((mode % 9) + 1));
	t.point();
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/LayerManager/clear/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 8 });

const specs = [
	{ char: '▒', color: [255, 120, 90], radius: 10, speed: 0.9 },
	{ char: '░', color: [110, 210, 255], radius: 14, speed: -0.7 },
	{ char: '+', color: [255, 235, 120], radius: 18, speed: 1.3 },
	{ char: '•', color: [160, 255, 170], radius: 22, speed: -1.1 },
];

const layers = specs.map((spec, index) => {
	const layer = t.layers.add({ blendMode: 'screen', opacity: 0.78 - index * 0.08 });

	layer.draw(() => {
		t.clear();

		const time = t.frameCount * 0.02;
		const count = 12 + index * 3;

		for (let i = 0; i < count; i++) {
			const angle = (i / count) * Math.PI * 2 + time * spec.speed;
			const wobble = spec.radius + Math.sin(time * 2 + i + index) * 2.5;

			t.push();
			t.translate(Math.cos(angle) * wobble, Math.sin(angle * 1.4) * wobble * 0.55);
			t.rotateZ(angle * 90);
			t.char(spec.char);
			t.charColor(...spec.color);
			t.rect(3 + index, 1 + (i % 3));
			t.pop();
		}
	});

	return layer;
});

t.draw(() => {
	const time = t.frameCount * 0.02;
	const step = Math.floor(t.frameCount / 75);

	t.background(8, 12, 24);

	for (let i = 0; i < 24; i++) {
		const angle = (i / 24) * Math.PI * 2 - time * 0.8;
		const radius = Math.min(t.grid.cols, t.grid.rows) * 0.42;

		t.charColor(30, 70, 110 + i * 4);
		t.char(i % 2 ? '.' : ':');
		t.line(0, 0, Math.cos(angle) * radius, Math.sin(angle) * radius * 0.6);
	}

	if (t.frameCount % 75 === 0) {
		const layer = layers[step % layers.length];
		t.layers.move(layer, layers.length - 1);
	}

	t.charColor(255, 245, 180);
	t.char(String((step % layers.length) + 1));
	t.point();
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/LayerManager/move/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 8 });

const echoes = [];

function spawnEcho() {
	const angle = Math.random() * Math.PI * 2;
	const distance = Math.min(t.grid.cols, t.grid.rows) * (0.08 + Math.random() * 0.2);
	const echo = {
		born: t.frameCount,
		x: Math.cos(angle) * distance,
		y: Math.sin(angle) * distance * 0.6,
		char: ['·', '+', '*', '░'][echoes.length % 4],
		layer: t.layers.add({ blendMode: 'additive', opacity: 0.9 }),
	};

	echo.layer.draw(() => {
		t.clear();

		const age = t.frameCount - echo.born;
		const size = 4 + age * 0.45;

		t.push();
		t.translate(echo.x, echo.y);
		t.rotateZ(age * 3);
		t.lineWeight(1 + (age % 20 < 10 ? 1 : 0));
		t.char(echo.char);
		t.charColor(120 + age, 170 + age * 0.5, 255);
		t.arc(size, size * 0.65, age * 7, age * 7 + 240);
		t.pop();
	});

	echoes.push(echo);
}

t.draw(() => {
	const time = t.frameCount * 0.02;
	const radius = Math.min(t.grid.cols, t.grid.rows) * 0.38;

	t.background(4, 10, 18);

	for (let i = 1; i <= 5; i++) {
		const size = (radius * i) / 2.5;
		t.charColor(20, 50 + i * 18, 80 + i * 12);
		t.char(i % 2 ? '.' : ':');
		t.ellipse(size * 2, size * 2);
	}

	for (let i = 0; i < 3; i++) {
		t.push();
		t.rotateZ(time * (35 + i * 20));
		t.charColor(120 + i * 30, 220, 255);
		t.char('/');
		t.lineWeight(2);
		t.line(0, 0, radius, 0);
		t.pop();
	}

	t.charColor(255, 240, 180);
	t.char('◉');
	t.point();

	if (t.frameCount % 18 === 0) {
		spawnEcho();
	}

	for (let i = echoes.length - 1; i >= 0; i--) {
		const echo = echoes[i];
		const age = t.frameCount - echo.born;
		const life = 96;
		const opacity = Math.max(0, 1 - age / life);

		echo.layer.opacity(opacity * 0.9);

		if (age >= life) {
			t.layers.remove(echo.layer);
			echoes.splice(i, 1);
		}
	}
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/LayerManager/remove/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 8 });

const warmLayer = t.layers.add({ blendMode: 'normal', opacity: 1 });
const coolLayer = t.layers.add({ blendMode: 'normal', opacity: 1 });

warmLayer.draw(() => {
	t.clear();

	const time = t.frameCount * 0.02;

	for (let i = 0; i < 10; i++) {
		t.push();
		t.rotateZ(time * 35 + i * 18);
		t.char(['█', '▓', '▒'][i % 3]);
		t.charColor(255, 110 + i * 12, 70 + i * 10);
		t.rect(26 - i * 2, 4 + (i % 3) * 2);
		t.pop();
	}
});

coolLayer.draw(() => {
	t.clear();

	const time = t.frameCount * 0.02;

	for (let i = 0; i < 9; i++) {
		t.push();
		t.rotateZ(-time * 28 - i * 22);
		t.char(['░', '+', '•'][i % 3]);
		t.charColor(80 + i * 12, 190 + i * 6, 255);
		t.ellipse(28 - i * 2.4, 12 - i * 0.9);
		t.pop();
	}
});

t.draw(() => {
	const time = t.frameCount * 0.02;
	const radius = Math.min(t.grid.cols, t.grid.rows) * 0.42;

	t.background(8, 10, 20);

	for (let i = 0; i < 24; i++) {
		const angle = (i / 24) * Math.PI * 2 + time * 0.4;
		t.charColor(20, 55 + i * 4, 90 + i * 5);
		t.char(i % 2 ? '.' : ':');
		t.line(0, 0, Math.cos(angle) * radius, Math.sin(angle) * radius * 0.6);
	}

	if (t.frameCount % 90 === 0) {
		t.layers.swap(warmLayer, coolLayer);
	}

	t.charColor(255, 245, 180);
	t.char(t.frameCount % 180 < 90 ? 'A' : 'B');
	t.point();
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/LayerManager/swap/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>
