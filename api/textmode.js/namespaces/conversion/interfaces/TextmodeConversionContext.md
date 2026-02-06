---
layout: doc
editLink: true
title: TextmodeConversionContext
description: Interface for the context provided to conversion strategies during shader and uniform creation.
category: Interfaces
api: true
namespace: conversion
kind: Interface
lastModified: 2026-02-06
isInterface: true
---

[textmode.js](../../../index.md) / [conversion](../index.md) / TextmodeConversionContext

# Interface: TextmodeConversionContext

Interface for the context provided to conversion strategies during shader and uniform creation.

This context provides access to the renderer, GL context, source asset, and grid dimensions
necessary for implementing custom conversion logic.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="font"></a> `font` | [`TextmodeFont`](../../loadables/classes/TextmodeFont.md) | The font currently being used for rendering. Useful for accessing font texture data or metrics. |
| <a id="gl"></a> `gl` | `WebGL2RenderingContext` | The native WebGL2 rendering context. Use this for creating textures, buffers, or other low-level WebGL resources. |
| <a id="renderer"></a> `renderer` | `GLRenderer` | The WebGL renderer instance. |
| <a id="source"></a> `source` | [`TextmodeSource`](../../loadables/classes/TextmodeSource.md) | The source asset (image, video, etc.) being converted. Provides access to the source texture and dimensions. |
