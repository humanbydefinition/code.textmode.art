---
layout: doc
editLink: true
title: TextmodeConversionContext
description: Interface for the context provided to conversion strategies during shader and uniform creation.
category: Interfaces
api: true
namespace: conversion
kind: Interface
lastModified: 2026-06-09
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
| <a id="property-font"></a> `font` | [`TextmodeGlyphAtlas`](../../fonts/interfaces/TextmodeGlyphAtlas.md) | Legacy alias for the active glyph atlas. Kept for backward compatibility with existing conversion strategies. |
| <a id="property-gl"></a> `gl` | `WebGL2RenderingContext` | The native WebGL2 rendering context. Use this for creating textures, buffers, or other low-level WebGL resources. |
| <a id="property-glyphatlas"></a> `glyphAtlas` | [`TextmodeGlyphAtlas`](../../fonts/interfaces/TextmodeGlyphAtlas.md) | Backend-neutral glyph atlas currently being used for rendering. Prefer this in new code. |
| <a id="property-pass"></a> `pass?` | [`TextmodeConversionPassContext`](TextmodeConversionPassContext.md) | Metadata for the active source-level conversion stack pass. Undefined for legacy single-conversion rendering. |
| <a id="property-source"></a> `source` | [`TextmodeSource`](../../media/classes/TextmodeSource.md) | The source asset (image, video, etc.) being converted. Provides access to the source texture and dimensions. |
