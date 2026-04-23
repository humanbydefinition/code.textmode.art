---
layout: doc
editLink: true
title: TextmodeConversionStrategy
description: Interface for defining a custom textmode conversion strategy.
category: Interfaces
api: true
namespace: conversion
kind: Interface
lastModified: 2026-04-23
isInterface: true
---

[textmode.js](../../../index.md) / [conversion](../index.md) / TextmodeConversionStrategy

# Interface: TextmodeConversionStrategy

Interface for defining a custom textmode conversion strategy.

A conversion strategy defines how a source image is converted into textmode attributes
(character index, primary color, secondary color) via a custom shader.

To register a custom strategy, implement this interface and pass it to [TextmodeConversionManager.register](../classes/TextmodeConversionManager.md#register).

## Properties

| Property | Modifier | Type | Description |
| ------ | ------ | ------ | ------ |
| <a id="id"></a> `id` | `readonly` | `string` | Unique identifier for this conversion strategy. This ID is used to select the strategy via [TextmodeSource.conversionMode](../../media/classes/TextmodeSource.md#conversionmode). |

## Methods

### createShader()

```ts
createShader(context): TextmodeShader;
```

Create the shader program for this conversion strategy.
This method is called once when the strategy is first used for a given source.

The shader must output to 3 render targets (MRT):
- location 0: Character data (R=char index, G=unused, B=unused, A=unused)
- location 1: Primary color (RGBA)
- location 2: Secondary/Background color (RGBA)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `context` | [`TextmodeConversionContext`](TextmodeConversionContext.md) | The conversion context containing renderer and source information. |

#### Returns

[`TextmodeShader`](../../../classes/TextmodeShader.md)

The compiled GLShader instance.

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let source = null;
let strategyActive = false;
let pulseShader = null;

function makeGradientCanvas() {
	const canvas = document.createElement('canvas');
	canvas.width = 180;
	canvas.height = 120;

	const ctx = canvas.getContext('2d');
	if (!ctx) {
		return canvas;
	}

	const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
	gradient.addColorStop(0, '#04070f');
	gradient.addColorStop(0.5, '#3478f6');
	gradient.addColorStop(1, '#f6a54b');
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	return canvas;
}

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
	const vert = `#version 300 es
		in vec4 a_position;
		in vec2 a_uv;
		out vec2 v_uv;
		void main() {
			gl_Position = a_position;
			v_uv = a_uv;
		}
	`;

	const frag = `#version 300 es
		precision highp float;
		in vec2 v_uv;
		uniform sampler2D u_image;
		uniform float u_time;
		layout(location = 0) out vec4 o_character;
		layout(location = 1) out vec4 o_primaryColor;
		layout(location = 2) out vec4 o_secondaryColor;

		void main() {
			vec4 sampleColor = texture(u_image, v_uv);
			float luma = dot(sampleColor.rgb, vec3(0.299, 0.587, 0.114));
			float pulse = 0.5 + 0.5 * sin(u_time + v_uv.x * 8.0);
			o_character = vec4(luma * pulse, 0.0, 0.0, 0.0);
			o_primaryColor = vec4(sampleColor.rgb, 1.0);
			o_secondaryColor = vec4(vec3(0.03, 0.05, 0.1), 1.0);
		}
	`;

	pulseShader = await t.createShader(vert, frag);
	t.conversions.register({
		id: 'pulse',
		createShader: () => pulseShader,
		createUniforms: (context) => ({
			u_image: context.source.texture,
			u_time: t.frameCount * 0.05,
		}),
	});

	source = t.createTexture(makeGradientCanvas());
	source.characters(' .:-=+*#%@');
	source.conversionMode('pulse');
	strategyActive = true;
});

t.draw(() => {
	t.background(5, 8, 18);

	if (source) {
		t.image(source, t.grid.cols - 8, t.grid.rows - 10);
	}

	drawLabel('custom conversion strategy', -Math.floor(t.grid.rows * 0.34), [255, 225, 140]);
	drawLabel(`has pulse ${t.conversions.has('pulse') ? 'yes' : 'no'}`, Math.floor(t.grid.rows * 0.28));
	drawLabel(strategyActive ? 'click to unregister' : 'refresh to restore strategy', Math.floor(t.grid.rows * 0.36), [120, 205, 255]);
});

t.mouseClicked(() => {
	if (!strategyActive || !source) {
		return;
	}

	source.conversionMode('brightness');
	t.conversions.unregister('pulse');
	strategyActive = false;
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

### createUniforms()

```ts
createUniforms(context): Record<string, UniformValue>;
```

Create uniform values for this conversion strategy.
This method is called every frame before rendering the conversion pass.

Use this to pass dynamic values (like time or source texture) to your shader.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `context` | [`TextmodeConversionContext`](TextmodeConversionContext.md) | The conversion context containing renderer and source information. |

#### Returns

`Record`\<`string`, `UniformValue`\>

An object mapping uniform names to values.

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let source = null;
let strategyActive = false;
let pulseShader = null;

function makeGradientCanvas() {
	const canvas = document.createElement('canvas');
	canvas.width = 180;
	canvas.height = 120;

	const ctx = canvas.getContext('2d');
	if (!ctx) {
		return canvas;
	}

	const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
	gradient.addColorStop(0, '#04070f');
	gradient.addColorStop(0.5, '#3478f6');
	gradient.addColorStop(1, '#f6a54b');
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	return canvas;
}

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
	const vert = `#version 300 es
		in vec4 a_position;
		in vec2 a_uv;
		out vec2 v_uv;
		void main() {
			gl_Position = a_position;
			v_uv = a_uv;
		}
	`;

	const frag = `#version 300 es
		precision highp float;
		in vec2 v_uv;
		uniform sampler2D u_image;
		uniform float u_time;
		layout(location = 0) out vec4 o_character;
		layout(location = 1) out vec4 o_primaryColor;
		layout(location = 2) out vec4 o_secondaryColor;

		void main() {
			vec4 sampleColor = texture(u_image, v_uv);
			float luma = dot(sampleColor.rgb, vec3(0.299, 0.587, 0.114));
			float pulse = 0.5 + 0.5 * sin(u_time + v_uv.x * 8.0);
			o_character = vec4(luma * pulse, 0.0, 0.0, 0.0);
			o_primaryColor = vec4(sampleColor.rgb, 1.0);
			o_secondaryColor = vec4(vec3(0.03, 0.05, 0.1), 1.0);
		}
	`;

	pulseShader = await t.createShader(vert, frag);
	t.conversions.register({
		id: 'pulse',
		createShader: () => pulseShader,
		createUniforms: (context) => ({
			u_image: context.source.texture,
			u_time: t.frameCount * 0.05,
		}),
	});

	source = t.createTexture(makeGradientCanvas());
	source.characters(' .:-=+*#%@');
	source.conversionMode('pulse');
	strategyActive = true;
});

t.draw(() => {
	t.background(5, 8, 18);

	if (source) {
		t.image(source, t.grid.cols - 8, t.grid.rows - 10);
	}

	drawLabel('custom conversion strategy', -Math.floor(t.grid.rows * 0.34), [255, 225, 140]);
	drawLabel(`has pulse ${t.conversions.has('pulse') ? 'yes' : 'no'}`, Math.floor(t.grid.rows * 0.28));
	drawLabel(strategyActive ? 'click to unregister' : 'refresh to restore strategy', Math.floor(t.grid.rows * 0.36), [120, 205, 255]);
});

t.mouseClicked(() => {
	if (!strategyActive || !source) {
		return;
	}

	source.conversionMode('brightness');
	t.conversions.unregister('pulse');
	strategyActive = false;
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
