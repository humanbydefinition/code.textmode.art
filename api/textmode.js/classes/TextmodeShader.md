---
layout: doc
editLink: true
title: TextmodeShader
description: WebGL shader program created by Textmodifier.createFilterShader or Textmodifier.createShader.
category: Classes
api: true
kind: Class
lastModified: 2026-05-27
hasConstructor: false
---

[textmode.js](../index.md) / TextmodeShader

# Class: TextmodeShader

WebGL shader program created by [Textmodifier.createFilterShader](Textmodifier.md#createfiltershader) or [Textmodifier.createShader](Textmodifier.md#createshader).

Use shaders and set uniforms via [Textmodifier.shader](Textmodifier.md#shader), [Textmodifier.setUniform](Textmodifier.md#setuniform), and [Textmodifier.setUniforms](Textmodifier.md#setuniforms).

After using a custom shader, you can revert to the default textmode shader with [Textmodifier.resetShader](Textmodifier.md#resetshader).

## Extends

- `Disposable`

## Accessors

### program

#### Get Signature

```ts
get program(): WebGLProgram;
```

Get the WebGL program

##### Returns

`WebGLProgram`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let customShader = null;

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

t.setup(async () => {
	customShader = await t.createFilterShader(`#version 300 es
precision highp float;
in vec2 v_uv;
uniform float u_time;
layout(location = 0) out vec4 o_character;
layout(location = 1) out vec4 o_primaryColor;
layout(location = 2) out vec4 o_secondaryColor;
void main() {
	vec2 centered = v_uv - 0.5;
	float rings = sin(length(centered) * 42.0 - u_time * 3.0);
	float scan = sin((v_uv.x + v_uv.y) * 26.0 + u_time * 2.0);
	float glyph = step(0.0, rings + scan * 0.45);
	o_character = vec4(glyph, 0.0, 0.0, 1.0);
	o_primaryColor = vec4(0.28 + glyph * 0.6, 0.82, 1.0, 1.0);
	o_secondaryColor = vec4(0.02, 0.04, 0.09, 1.0);
}`);
});

t.draw(() => {
	t.background(4, 7, 18);

	if (!customShader) return;

	t.shader(customShader);
	t.setUniform('u_time', t.frameCount * 0.025);
	t.rect(t.grid.cols, t.grid.rows);
	t.resetShader();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODESHADER.PROGRAM', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: WEBGL PROGRAM HANDLE', x, y++, 100, 220, 255);
	drawText('Filter shader draws the grid.', x, y++, 140, 160, 190);
	drawText('program exposes the raw handle.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);

	const ready = customShader && customShader.program instanceof WebGLProgram;
	const state = ready ? 'READY' : 'WAIT';
	drawText(`PROGRAM: ${state}`, x, y++, 140, 255, 180);
	drawText('TYPE: WEBGLPROGRAM', x, y++, 255, 225, 140);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Methods

### dispose()

```ts
dispose(): void;
```

Dispose of WebGL resources used by this shader.

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let customShader = null;
let isDisposed = false;

function drawText(text, x, y, r = 200, g = 220, b = 255) {
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

async function createShader() {
	const vert = `#version 300 es
		in vec4 a_position; in vec2 a_uv; out vec2 v_uv;
		void main() { gl_Position = a_position; v_uv = a_uv; }`;
	const frag = `#version 300 es
		precision highp float; in vec2 v_uv;
		layout(location = 0) out vec4 o_char;
		layout(location = 1) out vec4 o_fg;
		layout(location = 2) out vec4 o_bg;
		void main() {
			float s = step(0.5, fract((v_uv.x + v_uv.y) * 10.0));
			o_char = vec4(s, 0.0, 0.0, 0.0);
			o_fg = vec4(1.0, 0.75 - s * 0.3, 0.25 + s * 0.4, 1.0);
			o_bg = vec4(0.03, 0.05, 0.1, 1.0);
		}`;
	customShader = await t.createShader(vert, frag);
	isDisposed = false;
}

t.setup(async () => {
	await createShader();
});

t.draw(() => {
	t.background(6, 10, 22);

	if (customShader && !isDisposed) {
		t.push();
		t.shader(customShader);
		t.charColor(255, 180, 100);
		t.rect(14, 6);
		t.resetShader();
		t.pop();
	} else {
		t.push();
		t.charColor(40, 50, 80);
		t.char('.');
		t.rect(14, 6);
		t.pop();
	}
});

t.mouseClicked(async () => {
	if (customShader && !isDisposed) {
		customShader.dispose();
		isDisposed = true;
	} else {
		await createShader();
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('DISPOSE', x, y++, 100, 255, 140);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText('Frees the GL program handle.', x, y++, 100, 220, 255);
	drawText('Click to dispose / rebuild.', x, y++, 140, 160, 190);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	const status = isDisposed ? 'OFFLINE' : 'ACTIVE';
	const sr = isDisposed ? 255 : 140;
	const sg = isDisposed ? 100 : 255;
	drawText(`GPU STATUS: ${status}`, x, y++, sr, sg, 140);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Overrides

```ts
Disposable.dispose
```
