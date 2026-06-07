---
layout: doc
editLink: true
title: applyMatrix
description: Multiply the current model transform by a custom 4x4 matrix.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / applyMatrix

# Method: applyMatrix()

## Call Signature

```ts
applyMatrix(matrix): void;
```

Multiply the current model transform by a custom 4x4 matrix.

Current implementation supports affine TRS-style matrices (no perspective/shear).

### Parameters

| Parameter | Type |
| ------ | ------ |
| `matrix` | `ArrayLike`\<`number`\> |

### Returns

`void`

### Example

<TextmodeApiSandbox profile="textmode.js" encoded-files="W3siaW5mbyI6Imh0bWwgaW5kZXguaHRtbCBbaGlkZGVuXSBbcmVhZG9ubHldIiwiY29kZSI6IjwhRE9DVFlQRSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI-XG4gIDxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8-XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8dGl0bGU-YXBwbHlNYXRyaXg8L3RpdGxlPlxuICAgIDxzdHlsZT5cbiAgICAgIGh0bWwsXG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgfVxuXG4gICAgICBjYW52YXMge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vdGV4dG1vZGUuanNAMC4xNi4wLWJldGEuMS9kaXN0L3RleHRtb2RlLnVtZC5qc1wiPjwvc2NyaXB0PlxuICA8L2hlYWQ-XG4gIDxib2R5PlxuICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiIHNyYz1cInNrZXRjaC5qc1wiPjwvc2NyaXB0PlxuICA8L2JvZHk-XG48L2h0bWw-In0seyJpbmZvIjoianMgc2tldGNoLmpzIFthY3RpdmVdIiwiY29kZSI6ImNvbnN0IHQgPSB0ZXh0bW9kZS5jcmVhdGUoe1xuXHRwaXhlbERlbnNpdHk6IDEsXG5cdHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcblx0aGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG5cdGZvbnRTaXplOiAxNixcbn0pO1xuXG5jb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7XG5cbmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHtcblx0dC5wdXNoKCk7XG5cdHQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTtcblx0dC5jaGFyQ29sb3IociwgZywgYik7XG5cdHQucHJpbnQodGV4dCwgeCwgeSk7XG5cdHQucG9wKCk7XG59XG5cbnQuZHJhdygoKSA9PiB7XG5cdHQuYmFja2dyb3VuZCg2LCAxMCwgMjIpO1xuXHRjb25zdCB0aW1lID0gdC5mcmFtZUNvdW50ICogMC4wMztcblx0Y29uc3QgYyA9IE1hdGguY29zKHRpbWUpO1xuXHRjb25zdCBzID0gTWF0aC5zaW4odGltZSk7XG5cdHQucHVzaCgpO1xuXHR0LnRyYW5zbGF0ZSg4LCAxKTtcblx0dC5hcHBseU1hdHJpeChjLCBzLCAwLCAwLCAtcywgYywgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7XG5cdHQuY2hhcignIycpO1xuXHR0LmNoYXJDb2xvcigxNDAsIDIyMCwgMjU1KTtcblx0dC5yZWN0KDEyLCA0KTtcblx0dC5wb3AoKTtcbn0pO1xuXG5sYWJlbExheWVyLmRyYXcoKCkgPT4ge1xuXHR0LmNsZWFyKCk7XG5cdGNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpO1xuXHRjb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpO1xuXHRsZXQgeSA9IHRvcCArIDM7XG5cdGNvbnN0IHggPSBsZWZ0ICsgMztcblx0ZHJhd1RleHQoJ1RFWFRNT0RJRklFUi5BUFBMWU1BVFJJWCcsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7XG5cdGRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7XG5cdGRyYXdUZXh0KCdDT05DRVBUOiBDVVNUT00gTUFUUklYJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTtcblx0ZHJhd1RleHQoJ0FwcGxpZXMgYSA0eDQgdHJhbnNmb3JtLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7XG5cdGRyYXdUZXh0KCdNYXRyaXggcm90YXRlcyB0aGUgcmVjdGFuZ2xlLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7XG5cdGRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7XG5cdGRyYXdUZXh0KCdBUEk6IHQuYXBwbHlNYXRyaXgoLi4uKScsIHgsIHkrKywgMTQwLCAyNTUsIDE4MCk7XG59KTtcblxudC53aW5kb3dSZXNpemVkKCgpID0-IHtcblx0dC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG59KTsifV0" />

## Call Signature

```ts
applyMatrix(
   m00, 
   m01, 
   m02, 
   m03, 
   m10, 
   m11, 
   m12, 
   m13, 
   m20, 
   m21, 
   m22, 
   m23, 
   m30, 
   m31, 
   m32, 
   m33): void;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `m00` | `number` |
| `m01` | `number` |
| `m02` | `number` |
| `m03` | `number` |
| `m10` | `number` |
| `m11` | `number` |
| `m12` | `number` |
| `m13` | `number` |
| `m20` | `number` |
| `m21` | `number` |
| `m22` | `number` |
| `m23` | `number` |
| `m30` | `number` |
| `m31` | `number` |
| `m32` | `number` |
| `m33` | `number` |

### Returns

`void`
