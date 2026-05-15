---
layout: doc
editLink: true
title: TextmodeShader
description: Shader class for managing WebGL shader programs initialized via Textmodifier.createFilterShader or Textmodifier.createShader.
category: Classes
api: true
kind: Class
lastModified: 2026-05-15
hasConstructor: false
---

[textmode.js](../index.md) / TextmodeShader

# Class: TextmodeShader

Shader class for managing WebGL shader programs initialized via [Textmodifier.createFilterShader](Textmodifier.md#createfiltershader) or [Textmodifier.createShader](Textmodifier.md#createshader).

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

let customShader = null;

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
		layout(location = 0) out vec4 o_character;
		layout(location = 1) out vec4 o_primaryColor;
		layout(location = 2) out vec4 o_secondaryColor;

		void main() {
			float mask = step(0.5, fract(v_uv.x * 8.0 + v_uv.y * 8.0));
			o_character = vec4(mask, 0.0, 0.0, 0.0);
			o_primaryColor = vec4(1.0, 0.8, 0.4, 1.0);
			o_secondaryColor = vec4(0.05, 0.07, 0.12, 1.0);
		}
	`;

	customShader = await t.createShader(vert, frag);
});

t.draw(() => {
	t.background(6, 10, 22);

	drawCenteredText('TextmodeShader.program', -12, [240, 245, 255]);
	drawCenteredText('Accessing the underlying WebGLProgram handle.', -10, [150, 170, 200]);

	if (customShader && customShader.program) {
		const time = t.frameCount * 0.05;
		const pulse = 0.5 + 0.5 * Math.sin(time);

		t.push();
		t.shader(customShader);
		t.charColor(255, 200, 100);
		t.rect(14, 6);
		t.resetShader();
		t.pop();

		t.push();
		t.charColor(60, 70, 100);
		t.char('.');
		t.line(-12, 0, -8, 0);
		t.line(8, 0, 12, 0);
		t.pop();

		drawCenteredText('SHADER MODULE: ACTIVE', 6, [140, 255, 180]);
		drawCenteredText(
			`GL_PROGRAM_ID: ${customShader.program instanceof WebGLProgram ? 'READY' : 'ERROR'}`,
			9,
			[140, 180, 255]
		);
		drawCenteredText('The program property returns the raw GL handle.', 12, [100, 120, 150]);
	}
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

let customShader = null;
let isDisposed = false;

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

async function createShader() {
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
		layout(location = 0) out vec4 o_character;
		layout(location = 1) out vec4 o_primaryColor;
		layout(location = 2) out vec4 o_secondaryColor;

		void main() {
			float stripe = step(0.5, fract((v_uv.x + v_uv.y) * 10.0));
			o_character = vec4(stripe, 0.0, 0.0, 0.0);
			o_primaryColor = vec4(1.0, 0.75 - stripe * 0.3, 0.25 + stripe * 0.4, 1.0);
			o_secondaryColor = vec4(0.03, 0.05, 0.1, 1.0);
		}
	`;

	customShader = await t.createShader(vert, frag);
	isDisposed = false;
}

t.setup(async () => {
	await createShader();
});

t.draw(() => {
	t.background(6, 10, 22);

	drawCenteredText('TextmodeShader.dispose', -12, [240, 245, 255]);
	drawCenteredText('Manually releasing GPU resources.', -10, [150, 170, 200]);

	if (customShader && !isDisposed) {
		t.push();
		t.shader(customShader);
		t.charColor(255, 180, 100);
		t.rect(14, 6);
		t.resetShader();
		t.pop();

		drawCenteredText('GPU STATUS: ACTIVE', 6, [140, 255, 180]);
	} else {
		t.push();
		t.charColor(60, 70, 100);
		t.char('.');
		t.rect(14, 6);
		t.pop();

		drawCenteredText('GPU STATUS: OFFLINE', 6, [255, 100, 100]);
	}

	drawCenteredText('CLICK TO ' + (isDisposed ? 'REBUILD' : 'DISPOSE'), 10, [140, 180, 255]);
	drawCenteredText('dispose() frees the GL program handle.', 13, [100, 120, 150]);
});

t.mouseClicked(async () => {
	if (customShader && !isDisposed) {
		customShader.dispose();
		isDisposed = true;
	} else {
		await createShader();
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Overrides

```ts
Disposable.dispose
```
