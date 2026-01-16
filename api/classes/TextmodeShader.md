[textmode.js](../index.md) / TextmodeShader

# Class: TextmodeShader

Shader class for managing WebGL shader programs initialized via [Textmodifier.createFilterShader](Textmodifier.md#createfiltershader) or [Textmodifier.createShader](Textmodifier.md#createshader).

Use shaders and set uniforms via [Textmodifier.shader](Textmodifier.md#shader), [Textmodifier.setUniform](Textmodifier.md#setuniform), and [Textmodifier.setUniforms](Textmodifier.md#setuniforms).

With a shader active, the next [Textmodifier.rect](Textmodifier.md#rect) call will use the shader for rendering, 
and automatically unuse it afterwards.

## Accessors

### program

#### Get Signature

```ts
get program(): WebGLProgram;
```

Get the WebGL program

##### Returns

`WebGLProgram`

## Methods

### dispose()

```ts
dispose(): void;
```

Dispose of WebGL resources used by this shader.

#### Returns

`void`
