---
layout: doc
editLink: true
title: pointLight
description: Add a point light using RGB components and explicit XYZ position.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / pointLight

# Method: pointLight()

## Call Signature

```ts
pointLight(
   v1, 
   v2, 
   v3, 
   x, 
   y, 
   z): void;
```

Add a point light using RGB components and explicit XYZ position.

Point lights are frame-scoped and reset each layer draw callback.
Up to five point lights are supported per frame. Additional calls are ignored.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v1` | `number` | Red component (0-255) |
| `v2` | `number` | Green component (0-255) |
| `v3` | `number` | Blue component (0-255) |
| `x` | `number` | World-space X position |
| `y` | `number` | World-space Y position |
| `z` | `number` | World-space Z position |

### Returns

`void`

### Example

<TextmodeApiSandbox profile="textmode.js" encoded-files="W3siaW5mbyI6Imh0bWwgaW5kZXguaHRtbCBbaGlkZGVuXSBbcmVhZG9ubHldIiwiY29kZSI6IjwhRE9DVFlQRSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI-XG4gIDxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8-XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8dGl0bGU-cG9pbnRMaWdodDwvdGl0bGU-XG4gICAgPHN0eWxlPlxuICAgICAgaHRtbCxcbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICB9XG5cbiAgICAgIGNhbnZhcyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIDwvc3R5bGU-XG4gICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS90ZXh0bW9kZS5qc0AwLjE2LjAtYmV0YS4xL2Rpc3QvdGV4dG1vZGUudW1kLmpzXCI-PC9zY3JpcHQ-XG4gIDwvaGVhZD5cbiAgPGJvZHk-XG4gICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCIgc3JjPVwic2tldGNoLmpzXCI-PC9zY3JpcHQ-XG4gIDwvYm9keT5cbjwvaHRtbD4ifSx7ImluZm8iOiJqcyBza2V0Y2guanMgW2FjdGl2ZV0iLCJjb2RlIjoiY29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7XG5cdHBpeGVsRGVuc2l0eTogMSxcblx0d2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuXHRoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcblx0Zm9udFNpemU6IDE2LFxufSk7XG5cbmNvbnN0IGxhYmVsTGF5ZXIgPSB0LmxheWVycy5hZGQoKTtcblxubGV0IHZhbHVlID0gMDtcblxuZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkge1xuXHR0LnB1c2goKTtcblx0dC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpO1xuXHR0LmNoYXJDb2xvcihyLCBnLCBiKTtcblx0dC5wcmludCh0ZXh0LCB4LCB5KTtcblx0dC5wb3AoKTtcbn1cblxudC5kcmF3KCgpID0-IHtcblx0dC5iYWNrZ3JvdW5kKDYsIDgsIDE4KTtcblx0Y29uc3QgdGltZSA9IHQuZnJhbWVDb3VudCAqIDAuMDI1O1xuXHR2YWx1ZSA9IDAuNSArIDAuNSAqIE1hdGguc2luKHRpbWUpO1xuXHR0LnBlcnNwZWN0aXZlKDU4LCAwLjEsIDQwOTYpO1xuXHR0LmNhbWVyYSgxNiwgLTEwLCA0MiwgMCwgMCwgMCk7XG5cdHQuYW1iaWVudExpZ2h0KDIwLCAyMCwgMjgpO1xuXHR0LnBvaW50TGlnaHQoWzI1NSwgMjEwLCAxMjBdLCB7IHg6IE1hdGguc2luKHRpbWUpICogMjQsIHk6IC0xOCwgejogMjggfSk7XG5cdHQucm90YXRlWSh0aW1lICogNDApO1xuXHR0LmNoYXIoJyMnKTtcblx0dC5jaGFyQ29sb3IoMTQwLCAyMjAsIDI1NSk7XG5cdHQuc3BoZXJlKDcpO1xufSk7XG5cbmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7XG5cdHQuY2xlYXIoKTtcblx0Y29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7XG5cdGNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7XG5cdGxldCB5ID0gdG9wICsgMztcblx0Y29uc3QgeCA9IGxlZnQgKyAzO1xuXHRkcmF3VGV4dCgnVEVYVE1PRElGSUVSLlBPSU5UTElHSFQnLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApO1xuXHRkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApO1xuXHRkcmF3VGV4dCgnQ09OQ0VQVDogUE9JTlQgTElHSFQnLCB4LCB5KyssIDEwMCwgMjIwLCAyNTUpO1xuXHRkcmF3VGV4dCgnTGlnaHRpbmcgY2hhbmdlcyBzdXJmYWNlIHNoYWRlLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7XG5cdGRyYXdUZXh0KCdTY2VuZSBrZWVwcyBmb2N1cyBvbiBvbmUgc3BoZXJlLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7XG5cdGRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7XG5cdGRyYXdUZXh0KGBTV0VFUDogJHt2YWx1ZS50b0ZpeGVkKDIpfWAsIHgsIHkrKywgMTQwLCAyNTUsIDE4MCk7XG59KTtcblxudC53aW5kb3dSZXNpemVkKCgpID0-IHtcblx0dC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG59KTsifV0" />

## Call Signature

```ts
pointLight(
   v1, 
   v2, 
   v3, 
   position): void;
```

Add a point light using RGB components and an object position.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v1` | `number` | Red component (0-255) |
| `v2` | `number` | Green component (0-255) |
| `v3` | `number` | Blue component (0-255) |
| `position` | \{ `x`: `number`; `y`: `number`; `z`: `number`; \} | World-space position |
| `position.x` | `number` | World-space X position |
| `position.y` | `number` | World-space Y position |
| `position.z` | `number` | World-space Z position |

### Returns

`void`

## Call Signature

```ts
pointLight(
   color, 
   x, 
   y, 
   z): void;
```

Add a point light using a color value and explicit XYZ position.

Lighting uses RGB only, so any provided alpha value is ignored.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `color` | \| `string` \| \[`number`, `number`, `number`\] \| \[`number`, `number`, `number`, `number`\] \| [`TextmodeColor`](../../../namespaces/color/classes/TextmodeColor.md) | Color value (CSS string, TextmodeColor, or RGB(A) array) |
| `x` | `number` | World-space X position |
| `y` | `number` | World-space Y position |
| `z` | `number` | World-space Z position |

### Returns

`void`

## Call Signature

```ts
pointLight(color, position): void;
```

Add a point light using a color value and an object position.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `color` | \| `string` \| \[`number`, `number`, `number`\] \| \[`number`, `number`, `number`, `number`\] \| [`TextmodeColor`](../../../namespaces/color/classes/TextmodeColor.md) | Color value (CSS string, TextmodeColor, or RGB(A) array) |
| `position` | \{ `x`: `number`; `y`: `number`; `z`: `number`; \} | World-space position |
| `position.x` | `number` | World-space X position |
| `position.y` | `number` | World-space Y position |
| `position.z` | `number` | World-space Z position |

### Returns

`void`
