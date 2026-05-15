---
layout: doc
editLink: true
title: TextmodeCanvasHandle
description: Stable read-only canvas handle exposed to plugins.
category: Interfaces
api: true
namespace: plugins
kind: Interface
lastModified: 2026-05-15
isInterface: true
---

[textmode.js](../../../index.md) / [plugins](../index.md) / TextmodeCanvasHandle

# Interface: TextmodeCanvasHandle

Stable read-only canvas handle exposed to plugins.

## Properties

| Property | Modifier | Type | Description |
| ------ | ------ | ------ | ------ |
| <a id="property-canvas"></a> `canvas` | `readonly` | `HTMLCanvasElement` | The DOM canvas used for textmode rendering. |
| <a id="property-height"></a> `height` | `readonly` | `number` | Current canvas height in device pixels. |
| <a id="property-ownscontext"></a> `ownsContext` | `readonly` | `boolean` | Whether textmode owns the WebGL context lifecycle. |
| <a id="property-targetcanvas"></a> `targetCanvas` | `readonly` | `HTMLCanvasElement` \| `HTMLVideoElement` \| `null` | The overlay target, when textmode is running in overlay mode. |
| <a id="property-width"></a> `width` | `readonly` | `number` | Current canvas width in device pixels. |
