---
layout: doc
editLink: true
title: ambientLight
description: Add an ambient light using a grayscale value.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / ambientLight

# Method: ambientLight()

## Call Signature

```ts
ambientLight(gray): void;
```

Add an ambient light using a grayscale value.

Ambient light shines evenly from all directions.
Multiple calls are additive, so colors accumulate.
Ambient lights are frame-scoped and reset each layer draw callback.
Lighting uses RGB only, so any provided alpha value is ignored.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gray` | `number` | Grayscale value (0-255) |

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

let channel = 0;

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
	channel = 127.5 + 127.5 * Math.sin(time);
	t.perspective(58, 0.1, 4096);
	t.camera(16, -10, 42, 0, 0, 0);
	t.ambientLight(channel, channel, channel, channel);
	t.rotateY(time * 40);
	t.char('#');
	t.charColor(255, 255, 255);
	t.sphere(7);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.AMBIENTLIGHT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: AMBIENT LIGHT', x, y++, 100, 220, 255);
	drawText('Lighting changes surface shade.', x, y++, 140, 160, 190);
	drawText('Scene keeps focus on one sphere.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const level = Math.round(channel);
	drawText(`RGBA:${level},${level},${level},${level}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
ambientLight(gray, alpha): void;
```

Add an ambient light using a grayscale value and alpha.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gray` | `number` | Grayscale value (0-255) |
| `alpha` | `number` | Alpha value (0-255) |

### Returns

`void`


## Call Signature

```ts
ambientLight(
   v1, 
   v2, 
   v3): void;
```

Add an ambient light using RGB components.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v1` | `number` | Red component (0-255) |
| `v2` | `number` | Green component (0-255) |
| `v3` | `number` | Blue component (0-255) |

### Returns

`void`


## Call Signature

```ts
ambientLight(
   v1, 
   v2, 
   v3, 
   alpha): void;
```

Add an ambient light using RGB components and alpha.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v1` | `number` | Red component (0-255) |
| `v2` | `number` | Green component (0-255) |
| `v3` | `number` | Blue component (0-255) |
| `alpha` | `number` | Alpha value (0-255) |

### Returns

`void`


## Call Signature

```ts
ambientLight(color): void;
```

Add an ambient light using a color value.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `color` | \| `string` \| \[`number`, `number`, `number`\] \| \[`number`, `number`, `number`, `number`\] \| [`TextmodeColor`](../../../namespaces/color/classes/TextmodeColor.md) | Color value (CSS string, TextmodeColor, or RGB(A) array) |

### Returns

`void`

