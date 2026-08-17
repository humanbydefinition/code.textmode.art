---
layout: doc
editLink: false
title: TransformDefinition
description: Definition of a synthesis transform function.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-08-17
isInterface: true
---

[textmode.synth.js](../index.md) / TransformDefinition

# Interface: TransformDefinition

Definition of a synthesis transform function.


## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-description"></a> `description?` | `string` | Optional description for documentation |
| <a id="property-glsl"></a> `glsl` | `string` | GLSL function body (without function signature) |
| <a id="property-inputs"></a> `inputs` | [`TransformInput`](TransformInput.md)[] | Input parameters |
| <a id="property-name"></a> `name` | `string` | Function name (used in JS API and GLSL) |
| <a id="property-type"></a> `type` | [`SynthTransformType`](../type-aliases/SynthTransformType.md) | Transform type determining composition behavior |
