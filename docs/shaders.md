---
title: Shaders
description: Create custom GLSL shaders for textmode.js, write MRT outputs, pass uniforms, and combine shaders with framebuffers.
---

# Shaders

Custom shaders let you generate or process cell data on the GPU. `textmode.js` uses WebGL2 and expects GLSL ES 3.00 for custom fragment shaders.

Use shaders when a visual is easier to express procedurally or when a CPU loop would be too slow. (｡◕‿◕｡)

## Material shaders

[`createMaterialShader()`](/api/textmode.js/classes/Textmodifier/methods/createMaterialShader) is the primary way to apply a custom fragment shader to textmode geometry. It uses the standard instanced geometry vertex shader, so the shader can affect later shape and 3D drawing calls:

```js
let materialShader;

t.setup(async () => {
  materialShader = await t.createMaterialShader("./material.frag");
});

t.draw(() => {
  t.background(0);

  t.shader(materialShader);
  t.setUniform("u_time", t.secs);
  t.sphere(8);
  t.resetShader();
});
```

[`shader()`](/api/textmode.js/classes/Textmodifier#shader) sets the current shader. Pass `null` or call [`resetShader()`](/api/textmode.js/classes/Textmodifier#resetshader) to return to the default drawing pipeline.

## Uniforms

Set one uniform with [`setUniform()`](/api/textmode.js/classes/Textmodifier#setuniform):

```js
t.setUniform("u_time", t.secs);
```

Set multiple uniforms with [`setUniforms()`](/api/textmode.js/classes/Textmodifier#setuniforms):

```js
t.setUniforms({
  u_time: t.secs,
  u_center: [0.5, 0.5],
});
```

## MRT outputs

Custom material shaders write three render targets:

```glsl
#version 300 es
precision highp float;

in vec2 v_uv;

uniform float u_time;

layout(location = 0) out vec4 o_character;
layout(location = 1) out vec4 o_primaryColor;
layout(location = 2) out vec4 o_secondaryColor;

void main() {
  float wave = sin(v_uv.x * 12.0 + u_time) * 0.5 + 0.5;

  o_character = vec4(wave, 0.0, 0.0, 0.0);
  o_primaryColor = vec4(wave, 1.0 - wave, 1.0, 1.0);
  o_secondaryColor = vec4(0.0, 0.0, 0.0, 1.0);
}
```

`o_character` stores glyph selection, transform flags, and character rotation. `o_primaryColor` stores the glyph color. `o_secondaryColor` stores the cell color.

## Character attachment packing

The `o_character` attachment uses these channels:

- red: lower 8 bits of the glyph index
- green: upper 8 bits of the glyph index
- blue: transform flags
- alpha: character rotation, where `0.0` to `1.0` maps to `0` to `360` degrees

```glsl
int glyph = 65;
float low = float(glyph % 256) / 255.0;
float high = float(glyph / 256) / 255.0;

o_character = vec4(low, high, 0.0, 0.0);
```

Transform flags are packed into the blue channel:

- bit 0: invert colors
- bit 1: flip X
- bit 2: flip Y

```glsl
int invertFlag = 1;
int flipXFlag = 0;
int flipYFlag = 1;

o_character.b = float(invertFlag | (flipXFlag << 1) | (flipYFlag << 2)) / 255.0;
```

## Full shader example

<!--@include: ./examples/docs/shader-noise.md-->

## Framebuffers and shaders

Framebuffers are the usual way to build multi-pass shader pipelines:

```js
fb.begin();
t.shader(noiseShader);
t.setUniform("u_time", t.secs);
t.rect(t.grid.cols, t.grid.rows);
t.shader(null);
fb.end();

t.image(fb);
```

See [Framebuffers](/docs/framebuffers) for offscreen rendering patterns.

## Related APIs

- [`Textmodifier.createFilterShader()`](/api/textmode.js/classes/Textmodifier/methods/createFilterShader)
- [`Textmodifier.createMaterialShader()`](/api/textmode.js/classes/Textmodifier/methods/createMaterialShader)
- [`Textmodifier.createShader()`](/api/textmode.js/classes/Textmodifier#createshader)
- [`Textmodifier.shader()`](/api/textmode.js/classes/Textmodifier#shader)
- [`Textmodifier.resetShader()`](/api/textmode.js/classes/Textmodifier#resetshader)
- [`Textmodifier.setUniform()`](/api/textmode.js/classes/Textmodifier#setuniform)
- [`TextmodeShader`](/api/textmode.js/classes/TextmodeShader)
