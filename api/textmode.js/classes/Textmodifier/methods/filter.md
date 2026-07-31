---
layout: doc
editLink: true
title: filter
description: Apply a filter to the final composited output.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / filter

# Method: filter()

## Call Signature

```ts
filter<T>(name, params?): void;
```

Apply a filter to the final composited output.

Filters are applied after all layers are composited but before
the result is presented to the canvas. Multiple filters can be
queued per frame and will be applied in order.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`BuiltInFilterName`](../../../namespaces/filters/type-aliases/BuiltInFilterName.md) |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `T` | The name of the filter to apply (built-in or custom) |
| `params?` | [`BuiltInFilterParams`](../../../namespaces/filters/interfaces/BuiltInFilterParams.md)\[`T`\] | Optional parameters for the filter |

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

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	t.char('#');
	t.charColor(140, 220, 255);
	t.rect(16, 8);
	t.filter('invert', 0.5 + 0.5 * Math.sin(t.frameCount * 0.04));
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.FILTER', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: POST FILTER', x, y++, 100, 220, 255);
	drawText('Applies filter to final output.', x, y++, 140, 160, 190);
	drawText('Invert amount animates.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('FILTER: INVERT', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
filter<TParams>(name, params?): void;
```

Apply a filter to the final composited output.

Filters are applied after all layers are composited but before
the result is presented to the canvas. Multiple filters can be
queued per frame and will be applied in order.

### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TParams` | `unknown` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the filter to apply (built-in or custom) |
| `params?` | `TParams` | Optional parameters for the filter |

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

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	t.char('#');
	t.charColor(140, 220, 255);
	t.rect(16, 8);
	t.filter('invert', 0.5 + 0.5 * Math.sin(t.frameCount * 0.04));
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.FILTER', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: POST FILTER', x, y++, 100, 220, 255);
	drawText('Applies filter to final output.', x, y++, 140, 160, 190);
	drawText('Invert amount animates.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('FILTER: INVERT', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

