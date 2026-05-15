---
layout: doc
editLink: true
title: TextmodeLayerOptions
description: Options for configuring a new TextmodeLayer via TextmodeLayerManager.add.
category: Interfaces
api: true
kind: Interface
lastModified: 2026-05-15
isInterface: true
---

[textmode.js](../index.md) / TextmodeLayerOptions

# Interface: TextmodeLayerOptions

Options for configuring a new TextmodeLayer via [TextmodeLayerManager.add](../classes/TextmodeLayerManager.md#add).

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-blendmode"></a> `blendMode?` | \| `"normal"` \| `"darken"` \| `"difference"` \| `"exclusion"` \| `"lighten"` \| `"multiply"` \| `"overlay"` \| `"screen"` \| `"additive"` \| `"subtract"` \| `"softLight"` \| `"hardLight"` \| `"colorDodge"` \| `"colorBurn"` | The blend mode used when rendering this layer. Default is `'normal'`. |
| <a id="property-fontsize"></a> `fontSize?` | `number` | The font size for the layer's text. Default is `16`. |
| <a id="property-fontsource"></a> `fontSource?` | `string` \| [`TextmodeFont`](../classes/TextmodeFont.md) | Source for the font to use in this layer. Can be a URL/path to a font file, or an existing TextmodeFont instance. Existing TextmodeFont inputs are forked per layer to keep resources independent. |
| <a id="property-offsetx"></a> `offsetX?` | `number` | The horizontal offset of the layer in pixels. Default is `0`. |
| <a id="property-offsety"></a> `offsetY?` | `number` | The vertical offset of the layer in pixels. Default is `0`. |
| <a id="property-opacity"></a> `opacity?` | `number` | The opacity of the layer, between 0 (fully transparent) and 1 (fully opaque). Default is `1`. |
| <a id="property-rotationz"></a> `rotationZ?` | `number` | The z-rotation of the layer in degrees around its center. Default is `0`. |
| <a id="property-visible"></a> `visible?` | `boolean` | Whether the layer is visible. Default is `true`. |
