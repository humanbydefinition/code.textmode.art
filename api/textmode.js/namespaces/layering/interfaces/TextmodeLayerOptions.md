---
layout: doc
editLink: true
title: TextmodeLayerOptions
description: Options for layers created with TextmodeLayerManager.add.
category: Interfaces
api: true
namespace: layering
kind: Interface
lastModified: 2026-05-27
isInterface: true
---

[textmode.js](../../../index.md) / [layering](../index.md) / TextmodeLayerOptions

# Interface: TextmodeLayerOptions

Options for layers created with [TextmodeLayerManager.add](../classes/TextmodeLayerManager.md#add).

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-blendmode"></a> `blendMode?` | \| `"normal"` \| `"darken"` \| `"difference"` \| `"exclusion"` \| `"lighten"` \| `"multiply"` \| `"overlay"` \| `"screen"` \| `"additive"` \| `"subtract"` \| `"softLight"` \| `"hardLight"` \| `"colorDodge"` \| `"colorBurn"` | Blend mode used when compositing this layer. Defaults to `'normal'`. |
| <a id="property-fontsize"></a> `fontSize?` | `number` | Font size for the layer's glyph source. Defaults to `16`. |
| <a id="property-fontsource"></a> `fontSource?` | `string` \| [`TextmodeFont`](../../fonts/classes/TextmodeFont.md) | Source for the font to use in this layer. Can be a URL/path to a font file, or an existing TextmodeFont instance. Existing TextmodeFont inputs are forked per layer to keep resources independent. |
| <a id="property-offsetx"></a> `offsetX?` | `number` | Horizontal layer offset in pixels. Defaults to `0`. |
| <a id="property-offsety"></a> `offsetY?` | `number` | Vertical layer offset in pixels. Defaults to `0`. |
| <a id="property-opacity"></a> `opacity?` | `number` | Layer opacity from `0` (transparent) to `1` (opaque). Defaults to `1`. |
| <a id="property-rotationz"></a> `rotationZ?` | `number` | Z rotation in degrees around the layer center. Defaults to `0`. |
| <a id="property-visible"></a> `visible?` | `boolean` | Whether the layer is visible. Defaults to `true`. |
