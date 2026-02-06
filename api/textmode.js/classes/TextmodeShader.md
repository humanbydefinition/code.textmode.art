---
layout: doc
editLink: true
title: TextmodeShader
description: Shader class for managing WebGL shader programs initialized via Textmodifier.createFilterShader or Textmodifier.createShader.
category: Classes
api: true
kind: Class
lastModified: 2026-02-06
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

## Methods

### dispose()

```ts
dispose(): void;
```

Dispose of WebGL resources used by this shader.

#### Returns

`void`

#### Overrides

```ts
Disposable.dispose
```
