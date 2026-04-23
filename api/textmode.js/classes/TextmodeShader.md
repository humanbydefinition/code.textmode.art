---
layout: doc
editLink: true
title: TextmodeShader
description: Shader class for managing WebGL shader programs initialized via Textmodifier.createFilterShader or Textmodifier.createShader.
category: Classes
api: true
kind: Class
lastModified: 2026-04-23
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let shader = null;

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
		layout(location = 0) out vec4 o_character;
		layout(location = 1) out vec4 o_primaryColor;
		layout(location = 2) out vec4 o_secondaryColor;

		void main() {
			float mask = step(0.5, fract(v_uv.x * 8.0));
			o_character = vec4(mask, 0.0, 0.0, 0.0);
			o_primaryColor = vec4(0.3 + v_uv.x, 0.6 + v_uv.y * 0.2, 1.0, 1.0);
			o_secondaryColor = vec4(0.02, 0.04, 0.08, 1.0);
		}
	`;

	shader = await t.createShader(vert, frag);
});

t.draw(() => {
	t.background(4, 7, 18);

	if (shader) {
		t.shader(shader);
		t.rect(t.grid.cols - 10, t.grid.rows - 10);
		t.resetShader();
	}

	drawLabel('program handle ready', -Math.floor(t.grid.rows * 0.34), [255, 225, 140]);
	drawLabel(`shader.program ${shader && shader.program ? 'available' : 'pending'}`, Math.floor(t.grid.rows * 0.32), [120, 205, 255]);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeShader/program/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let shader = null;
let isDisposed = false;

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

	shader = await t.createShader(vert, frag);
	isDisposed = false;
}

t.setup(async () => {
	await createShader();
});

t.draw(() => {
	t.background(5, 6, 16);

	if (shader && !isDisposed) {
		t.shader(shader);
		t.rect(t.grid.cols - 12, t.grid.rows - 12);
		t.resetShader();
	}

	drawLabel(isDisposed ? 'shader disposed' : 'click to dispose shader', -Math.floor(t.grid.rows * 0.34), [255, 225, 140]);
	drawLabel(isDisposed ? 'click again to rebuild it' : 'program still valid until dispose()', Math.floor(t.grid.rows * 0.32), [120, 205, 255]);
});

t.mouseClicked(async () => {
	if (shader && !isDisposed) {
		shader.dispose();
		isDisposed = true;
		return;
	}

	await createShader();
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeShader/dispose/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

#### Overrides

```ts
Disposable.dispose
```
