---
layout: doc
editLink: true
title: GridDistortionOptions
description: Configuration options for the 'gridDistortion' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-06-08
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

<TextmodeApiSandbox profile="textmode.filters.js" language="javascript" title="GridDistortionOptions" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiA4LAoJcGx1Z2luczogW0ZpbHRlcnNQbHVnaW5dLAp9KTsKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKbGV0IHZpZGVvOwoKLy8gU2luZSB3YXZlIHBhcmFtZXRlcnMKY29uc3QgY29uZmlnID0gewoJd2lkdGhGcmVxdWVuY3k6IDAuMDUsCgl3aWR0aFNwZWVkOiAwLjA1LAoJd2lkdGhBbXBsaXR1ZGU6IDEuMCwKCWhlaWdodEZyZXF1ZW5jeTogMC4xLAoJaGVpZ2h0U3BlZWQ6IDAuMDMsCgloZWlnaHRBbXBsaXR1ZGU6IDEuMCwKfTsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKdC5zZXR1cChhc3luYyAoKSA9PiB7Cgl2aWRlbyA9IGF3YWl0IHQubG9hZFZpZGVvKCdodHRwczovL2ludGVyYWN0aXZlLWV4YW1wbGVzLm1kbi5tb3ppbGxhLm5ldC9tZWRpYS9jYzAtdmlkZW9zL2Zsb3dlci5tcDQnKTsKCXZpZGVvLnBsYXkoKTsKCXZpZGVvLmxvb3AoKTsKCXZpZGVvLmNoYXJhY3RlcnMoJyAuOi09KyojJUAnKTsKfSk7CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMiksCgkJdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMywKCQl4ID0gbGVmdCArIDM7CgoJY29uc3Qgd1ZhciA9ICgwLjUgKyAwLjMgKiBNYXRoLnNpbih0LnNlY3MgKiAxLjApKS50b0ZpeGVkKDIpOwoJY29uc3QgaFZhciA9ICgwLjUgKyAwLjMgKiBNYXRoLmNvcyh0LnNlY3MgKiAxLjUpKS50b0ZpeGVkKDIpOwoKCWRyYXdUZXh0KCdGSUxURVJTUExVR0lOLkdSSURESVNUT1JUSU9OJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogQ09PUkRJTkFURSBTUEFDRSBXQVJQSU5HJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdXYXJwIGdyaWQgY29sdW1ucyBhbmQgcm93cy4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdXaWR0aCBWYXI6ICcgKyB3VmFyLCB4LCB5KyssIDE0MCwgMjU1LCAxODApOwoJZHJhd1RleHQoJ0hlaWdodCBWYXI6ICcgKyBoVmFyLCB4LCB5KyssIDE0MCwgMjU1LCAxODApOwp9KTsKCnQuZHJhdygoKSA9PiB7CglpZiAoIXZpZGVvKSByZXR1cm47CgoJY29uc3QgY29scyA9IHQuZ3JpZC5jb2xzOwoJY29uc3Qgcm93cyA9IHQuZ3JpZC5yb3dzOwoJY29uc3Qgd1ZhciA9IDAuNSArIDAuMyAqIE1hdGguc2luKHQuc2VjcyAqIDEuMCk7Cgljb25zdCBoVmFyID0gMC41ICsgMC4zICogTWF0aC5jb3ModC5zZWNzICogMS41KTsKCgkvLyBHZW5lcmF0ZSBzaW5lIHdhdmUgcGF0dGVybiBmb3Igd2lkdGggZmFjdG9ycwoJY29uc3Qgd2lkdGhGYWN0b3JzID0gW107Cglmb3IgKGxldCBpID0gMDsgaSA8IGNvbHM7IGkrKykgewoJCWNvbnN0IHNpbmVWYWx1ZSA9IE1hdGguc2luKGkgKiBjb25maWcud2lkdGhGcmVxdWVuY3kgKyB0LnNlY3MgKiA2MCAqIGNvbmZpZy53aWR0aFNwZWVkKSAqIGNvbmZpZy53aWR0aEFtcGxpdHVkZTsKCQl3aWR0aEZhY3RvcnMucHVzaCgoc2luZVZhbHVlICsgY29uZmlnLndpZHRoQW1wbGl0dWRlKSAvICgyICogY29uZmlnLndpZHRoQW1wbGl0dWRlKSk7Cgl9CgoJLy8gR2VuZXJhdGUgc2luZSB3YXZlIHBhdHRlcm4gZm9yIGhlaWdodCBmYWN0b3JzCgljb25zdCBoZWlnaHRGYWN0b3JzID0gW107Cglmb3IgKGxldCBqID0gMDsgaiA8IHJvd3M7IGorKykgewoJCWNvbnN0IHNpbmVWYWx1ZSA9CgkJCU1hdGguc2luKGogKiBjb25maWcuaGVpZ2h0RnJlcXVlbmN5ICsgdC5zZWNzICogNjAgKiBjb25maWcuaGVpZ2h0U3BlZWQpICogY29uZmlnLmhlaWdodEFtcGxpdHVkZTsKCQloZWlnaHRGYWN0b3JzLnB1c2goKHNpbmVWYWx1ZSArIGNvbmZpZy5oZWlnaHRBbXBsaXR1ZGUpIC8gKDIgKiBjb25maWcuaGVpZ2h0QW1wbGl0dWRlKSk7Cgl9CgoJLy8gQXBwbHkgZ3JpZCBkaXN0b3J0aW9uIGZpbHRlcgoJdC5sYXllcnMuYmFzZS5maWx0ZXIoJ2dyaWREaXN0b3J0aW9uJywgewoJCWdyaWRDZWxsRGltZW5zaW9uczogW2NvbHMsIHJvd3NdLAoJCWdyaWRQaXhlbERpbWVuc2lvbnM6IFt0LmdyaWQud2lkdGgsIHQuZ3JpZC5oZWlnaHRdLAoJCWdyaWRPZmZzZXREaW1lbnNpb25zOiBbdC5ncmlkLm9mZnNldFgsIHQuZ3JpZC5vZmZzZXRZXSwKCQl3aWR0aEZhY3RvcnM6IHdpZHRoRmFjdG9ycywKCQloZWlnaHRGYWN0b3JzOiBoZWlnaHRGYWN0b3JzLAoJCXdpZHRoVmFyaWF0aW9uU2NhbGU6IHdWYXIsCgkJaGVpZ2h0VmFyaWF0aW9uU2NhbGU6IGhWYXIsCgl9KTsKCgl0LmltYWdlKHZpZGVvLCB0LmdyaWQuY29scywgdC5ncmlkLnJvd3MpOwp9KTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />

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
