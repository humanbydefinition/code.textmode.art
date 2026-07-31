---
layout: doc
editLink: true
title: pointLight
description: Add a point light using RGB components and explicit XYZ position.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-07-31
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

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let value = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.draw(() => {
	t.background(6, 8, 18);
	const time = t.frameCount * 0.025;
	value = 0.5 + 0.5 * Math.sin(time);
	t.perspective(58, 0.1, 4096);
	t.camera(16, -10, 42, 0, 0, 0);
	t.ambientLight(20, 20, 28);
	t.pointLight([255, 210, 120], { x: Math.sin(time) * 24, y: -18, z: 28 });
	t.rotateY(time * 40);
	t.char('#');
	t.charColor(140, 220, 255);
	t.sphere(7);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.POINTLIGHT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: POINT LIGHT', x, y++, 100, 220, 255);
	drawText('Lighting changes surface shade.', x, y++, 140, 160, 190);
	drawText('Scene keeps focus on one sphere.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`SWEEP: ${value.toFixed(2)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


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

