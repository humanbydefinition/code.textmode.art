---
layout: doc
editLink: true
title: TextmodeConversionStrategy
description: Interface for defining a custom textmode conversion strategy.
category: Interfaces
api: true
namespace: conversion
kind: Interface
lastModified: 2026-05-27
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
| <a id="property-id"></a> `id` | `readonly` | `string` | Unique identifier for this conversion strategy. This ID is used to select the strategy via [TextmodeSource.conversionMode](../../media/classes/TextmodeSource.md#conversionmode). |

## Methods

### createShader()

```ts
createShader(context): TextmodeShader;
```

Create the shader program for this conversion strategy.
Called once when the strategy is first used for a given source.

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
const IMAGE_URL = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80';
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

const labelLayer = t.layers.add();
let img = null;
let blueShader = null;

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
		layout(location = 0) out vec4 o_character;
		layout(location = 1) out vec4 o_primaryColor;
		layout(location = 2) out vec4 o_secondaryColor;
		void main() {
			vec4 col = texture(u_image, v_uv);
			float blueLuma = col.b;
			o_character = vec4(blueLuma * 0.9, 0.0, 0.0, 0.0);
			o_primaryColor = vec4(0.2, 0.6, 1.0, 1.0);
			o_secondaryColor = vec4(0.01, 0.03, 0.08, 1.0);
		}
	`;

	blueShader = await t.createShader(vert, frag);

	t.conversions.register({
		id: 'blue-mrt',
		createShader: () => blueShader,
		createUniforms: (ctx) => ({ u_image: ctx.source.texture }),
	});

	img = await t.loadImage(IMAGE_URL);
	img.characters(' .:-=+*#%@');
	img.conversionMode('blue-mrt');
});

t.draw(() => {
	t.background(6, 8, 20);
	if (img) {
		t.image(img, t.grid.cols - 8, t.grid.rows - 10);
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

	drawText('CONVERSION.CREATESHADER', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: DYNAMIC SHADER REGISTER', x, y++, 100, 220, 255);
	drawText('Outputs custom MRT locations for', x, y++, 140, 160, 190);
	drawText('character, primary & secondary.', x, y++, 140, 160, 190);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### createUniforms()

```ts
createUniforms(context): Record<string, UniformValue>;
```

Create uniform values for this conversion strategy.
Called every frame before rendering the conversion pass.

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
const IMAGE_URL = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80';
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

const labelLayer = t.layers.add();
let img = null;
let animatedShader = null;

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
			vec4 col = texture(u_image, v_uv);
			float wave = 0.5 + 0.5 * sin(u_time + v_uv.x * 12.0);
			float luma = dot(col.rgb, vec3(0.299, 0.587, 0.114));
			o_character = vec4(luma * wave * 0.95, 0.0, 0.0, 0.0);
			o_primaryColor = vec4(col.r, col.g * wave, col.b * 1.5, 1.0);
			o_secondaryColor = vec4(0.02, 0.03, 0.06, 1.0);
		}
	`;

	animatedShader = await t.createShader(vert, frag);

	t.conversions.register({
		id: 'time-wave',
		createShader: () => animatedShader,
		createUniforms: (ctx) => ({
			u_image: ctx.source.texture,
			u_time: t.frameCount * 0.04,
		}),
	});

	img = await t.loadImage(IMAGE_URL);
	img.characters(' .:-=+*#%@');
	img.conversionMode('time-wave');
});

t.draw(() => {
	t.background(6, 8, 20);
	if (img) {
		t.image(img, t.grid.cols - 8, t.grid.rows - 10);
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

	const timeVal = t.frameCount * 0.04;

	drawText('CONVERSION.CREATEUNIFORMS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: RENDERING UNIFORMS BINDING', x, y++, 100, 220, 255);
	drawText('Binds time-based animation values.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`TIME UNIFORM: ${timeVal.toFixed(2)}`, x, y++, 120, 205, 255);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
