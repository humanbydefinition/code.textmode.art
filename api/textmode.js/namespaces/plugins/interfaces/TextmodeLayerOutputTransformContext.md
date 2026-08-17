---
layout: doc
editLink: false
title: TextmodeLayerOutputTransformContext
description: Values supplied to a layer output transform.
category: Interfaces
api: true
namespace: plugins
kind: Interface
lastModified: 2026-08-17
isInterface: true
---

[textmode.js](../../../index.md) / [plugins](../index.md) / TextmodeLayerOutputTransformContext

# Interface: TextmodeLayerOutputTransformContext

Values supplied to a layer output transform.


## Properties

| Property | Modifier | Type | Description |
| ------ | ------ | ------ | ------ |
| <a id="property-layer"></a> `layer` | `readonly` | [`TextmodeLayer`](../../layering/classes/TextmodeLayer.md) | Layer whose rendered output is being transformed. |
| <a id="property-output"></a> `output` | `readonly` | [`TextmodeFramebuffer`](../../../classes/TextmodeFramebuffer.md) | Output produced by the preceding render stage or transform. |
| <a id="property-phase"></a> `phase` | `readonly` | [`TextmodeLayerOutputPhase`](../type-aliases/TextmodeLayerOutputPhase.md) | Current point in the layer output pipeline. |
