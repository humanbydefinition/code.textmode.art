---
layout: doc
editLink: true
title: TextmodeConversionStep
description: One pass in a source-level conversion stack.
category: Interfaces
api: true
namespace: conversion
kind: Interface
lastModified: 2026-05-19
isInterface: true
---

[textmode.js](../../../index.md) / [conversion](../index.md) / TextmodeConversionStep

# Interface: TextmodeConversionStep

One pass in a source-level conversion stack.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-brightnessend"></a> `brightnessEnd?` | `number` | Maximum captured brightness for this pass in byte-space (0-255). Requires brightnessStart. |
| <a id="property-brightnessstart"></a> `brightnessStart?` | `number` | Minimum captured brightness for this pass in byte-space (0-255). Requires brightnessEnd. |
| <a id="property-cellcolor"></a> `cellColor?` | [`TextmodeColorInput`](../type-aliases/TextmodeColorInput.md) | Fixed cell color for this pass. |
| <a id="property-cellcolormode"></a> `cellColorMode?` | `"fixed"` \| `"sampled"` | Cell color mode for this pass. |
| <a id="property-characters"></a> `characters?` | `string` | Characters used by this pass when the strategy maps through a character palette. |
| <a id="property-charcolor"></a> `charColor?` | [`TextmodeColorInput`](../type-aliases/TextmodeColorInput.md) | Fixed character color for this pass. |
| <a id="property-charcolormode"></a> `charColorMode?` | `"fixed"` \| `"sampled"` | Character color mode for this pass. |
| <a id="property-charrotation"></a> `charRotation?` | `number` | Character rotation in degrees for this pass. |
| <a id="property-flipx"></a> `flipX?` | `number` \| `boolean` | Flip characters horizontally for this pass. |
| <a id="property-flipy"></a> `flipY?` | `number` \| `boolean` | Flip characters vertically for this pass. |
| <a id="property-invert"></a> `invert?` | `number` \| `boolean` | Invert character/cell colors for this pass. |
| <a id="property-mode"></a> `mode` | `string` | Conversion mode to run for this pass. |
| <a id="property-options"></a> `options?` | [`TextmodeConversionStepOptions`](../type-aliases/TextmodeConversionStepOptions.md) | Strategy-specific options for this pass. |
