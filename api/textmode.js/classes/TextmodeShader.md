---
layout: doc
editLink: true
title: TextmodeShader
description: WebGL shader program created by Textmodifier.createMaterialShader, Textmodifier.createFilterShader, or Textmodifier.createShader.
category: Classes
api: true
kind: Class
lastModified: 2026-06-08
hasConstructor: false
---

[textmode.js](../index.md) / TextmodeShader

# Class: TextmodeShader

WebGL shader program created by [Textmodifier.createMaterialShader](Textmodifier/methods/createMaterialShader.md),
[Textmodifier.createFilterShader](Textmodifier/methods/createFilterShader.md), or [Textmodifier.createShader](Textmodifier/methods/createShader.md).

Use shaders and set uniforms via [Textmodifier.shader](Textmodifier/methods/shader.md), [Textmodifier.setUniform](Textmodifier/methods/setUniform.md), and [Textmodifier.setUniforms](Textmodifier/methods/setUniforms.md).

After using a custom shader, you can revert to the default textmode shader with [Textmodifier.resetShader](Textmodifier/methods/resetShader.md).

## Extends

- `Disposable`

## Accessors

| Accessor | Description |
| ------ | ------ |
| [program](TextmodeShader/accessors/program.md) | Get the WebGL program |

## Methods

| Method | Description |
| ------ | ------ |
| [dispose](TextmodeShader/methods/dispose.md) | Dispose of WebGL resources used by this shader. |
