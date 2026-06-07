---
layout: doc
editLink: true
title: GridDistortionOptions
description: Configuration options for the 'gridDistortion' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-05-15
isInterface: true
---

[textmode.filters.js](../index.md) / GridDistortionOptions

# Interface: GridDistortionOptions

Configuration options for the `'gridDistortion'` filter.

Distorts a monospaced character grid by varying the width and height
of individual cells. Create wave effects, perspective distortions,
or other grid warping effects by providing custom factor arrays.

This filter is designed specifically for textmode.js grids, allowing
you to create dynamic text distortion effects.

## Example

<TextmodeApiSandbox profile="textmode.filters.js" language="javascript" title="GridDistortionOptions" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CiAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLAogIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LAogIHBsdWdpbnM6IFtGaWx0ZXJzUGx1Z2luXSwKfSk7CgpsZXQgdmlkZW87Cgp0LnNldHVwKGFzeW5jICgpID0-IHsKICB2aWRlbyA9IGF3YWl0IHQubG9hZFZpZGVvKCdodHRwczovL2ludGVyYWN0aXZlLWV4YW1wbGVzLm1kbi5tb3ppbGxhLm5ldC9tZWRpYS9jYzAtdmlkZW9zL2Zsb3dlci5tcDQnKTsKICB2aWRlby5wbGF5KCk7CiAgdmlkZW8ubG9vcCgpOwogIHZpZGVvLmNoYXJhY3RlcnMoJyAuOi09KyojJUAnKTsKfSk7Cgp0LmRyYXcoKCkgPT4gewogIHQuYmFja2dyb3VuZCgwKTsKICBpZiAodmlkZW8pIHsKICAgIHQuaW1hZ2UodmlkZW8sIHQuZ3JpZC5jb2xzLCB0LmdyaWQucm93cyk7CiAgfQoKICBjb25zdCB3b2JibGUgPSBNYXRoLnNpbih0LnNlY3MgKiAyKTsKICBjb25zdCB3aWR0aEZhY3RvcnMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0LmdyaWQuY29scyB9LCAoXywgaSkgPT4gKE1hdGguc2luKGkgKiAwLjE4ICsgdC5mcmFtZUNvdW50ICogMC4wNCkgKyAxKSAqIDAuNSk7CiAgY29uc3QgaGVpZ2h0RmFjdG9ycyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHQuZ3JpZC5yb3dzIH0sIChfLCBpKSA9PiAoTWF0aC5zaW4oaSAqIDAuMjQgKyB0LnNlY3MgKiAxLjUpICsgMSkgKiAwLjUpOwogIHQubGF5ZXJzLmJhc2UuZmlsdGVyKCdncmlkRGlzdG9ydGlvbicsIHsKICAgIGdyaWRDZWxsRGltZW5zaW9uczogW3QuZ3JpZC5jb2xzLCB0LmdyaWQucm93c10sCiAgICBncmlkUGl4ZWxEaW1lbnNpb25zOiBbdC5ncmlkLndpZHRoLCB0LmdyaWQuaGVpZ2h0XSwKICAgIGdyaWRPZmZzZXREaW1lbnNpb25zOiBbdC5ncmlkLm9mZnNldFgsIHQuZ3JpZC5vZmZzZXRZXSwKICAgIHdpZHRoRmFjdG9ycywKICAgIGhlaWdodEZhY3RvcnMsCiAgICB3aWR0aFZhcmlhdGlvblNjYWxlOiAwLjM1ICsgd29iYmxlICogMC4xNSwKICAgIGhlaWdodFZhcmlhdGlvblNjYWxlOiAwLjM1ICsgd29iYmxlICogMC4xNSwKICB9KTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewogIHQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-gridcelldimensions"></a> `gridCellDimensions` | \[`number`, `number`\] | Grid dimensions as `[columns, rows]`. Should match your textmode grid dimensions. Maximum value: `[128, 128]` **Default** `[80.0, 40.0]` |
| <a id="property-gridpixeldimensions"></a> `gridPixelDimensions` | \[`number`, `number`\] | Grid size in pixels as `[width, height]`. Typically calculated as: `[t.grid.cols * t.grid.cellWidth, t.grid.rows * t.grid.cellHeight]` **Default** `[640.0, 320.0]` |
| <a id="property-gridoffsetdimensions"></a> `gridOffsetDimensions` | \[`number`, `number`\] | Grid offset in pixels as `[offsetX, offsetY]`. Use `[t.grid.offsetX, t.grid.offsetY]` to match your grid position. **Default** `[0.0, 0.0]` |
| <a id="property-widthfactors"></a> `widthFactors` | `number`[] | Array of distortion values (0-1) for each column. Must contain at least as many elements as columns (max 128). Values control the relative width of each column: - `0.0` = minimum width - `0.5` = normal width - `1.0` = maximum width **Default** `Array(128).fill(0.5)` |
| <a id="property-heightfactors"></a> `heightFactors` | `number`[] | Array of distortion values (0-1) for each row. Must contain at least as many elements as rows (max 128). Values control the relative height of each row: - `0.0` = minimum height - `0.5` = normal height - `1.0` = maximum height **Default** `Array(128).fill(0.5)` |
| <a id="property-widthvariationscale"></a> `widthVariationScale` | `number` | Intensity multiplier for width distortion. Higher values create more dramatic width variations. **Default** `0.5` |
| <a id="property-heightvariationscale"></a> `heightVariationScale` | `number` | Intensity multiplier for height distortion. Higher values create more dramatic height variations. **Default** `0.5` |
