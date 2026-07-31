---
layout: doc
editLink: true
title: fill
description: Alias for cellColor. Current fill (cell background) color.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / fill

# Method: fill()

## Call Signature

```ts
fill(): TextmodeColor;
```

Alias for [cellColor](cellColor.md). Current fill (cell background) color.

### Returns

[`TextmodeColor`](../../../namespaces/color/classes/TextmodeColor.md)

Current cell color.

### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let red = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	red = Math.round(90 + 90 * Math.sin(t.frameCount * 0.04));
	t.fill(red, 40, 120);
	t.stroke(230, 245, 255);
	t.char('.');
	t.rect(12, 6);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.FILL', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SHAPE INTERIOR', x, y++, 100, 220, 255);
	drawText('Alias for cellColor.', x, y++, 140, 160, 190);
	drawText('charColor controls the outline.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`FILL R: ${red}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
fill(gray, alpha?): void;
```

Alias for [cellColor](cellColor.md). Set the fill (cell background) color using a grayscale value.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gray` | `number` | Grayscale value (0-255) |
| `alpha?` | `number` | Optional alpha value (0-255) |

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

let red = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	red = Math.round(90 + 90 * Math.sin(t.frameCount * 0.04));
	t.fill(red, 40, 120);
	t.stroke(230, 245, 255);
	t.char('.');
	t.rect(12, 6);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.FILL', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SHAPE INTERIOR', x, y++, 100, 220, 255);
	drawText('Alias for cellColor.', x, y++, 140, 160, 190);
	drawText('charColor controls the outline.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`FILL R: ${red}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
fill(
   r, 
   g, 
   b, 
   a?): void;
```

Alias for [cellColor](cellColor.md). Set the fill (cell background) color using RGB(A) values.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | `number` | Red component (0-255) |
| `g` | `number` | Green component (0-255) |
| `b` | `number` | Blue component (0-255) |
| `a?` | `number` | Optional alpha component (0-255) |

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

let red = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	red = Math.round(90 + 90 * Math.sin(t.frameCount * 0.04));
	t.fill(red, 40, 120);
	t.stroke(230, 245, 255);
	t.char('.');
	t.rect(12, 6);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.FILL', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SHAPE INTERIOR', x, y++, 100, 220, 255);
	drawText('Alias for cellColor.', x, y++, 140, 160, 190);
	drawText('charColor controls the outline.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`FILL R: ${red}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
fill(value): void;
```

Alias for [cellColor](cellColor.md). Set the fill (cell background) color using a CSS string or TextmodeColor object.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | \| `string` \| [`TextmodeColor`](../../../namespaces/color/classes/TextmodeColor.md) | Hex string, `rgb()`/`rgba()` string, or an existing color object |

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

let red = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	red = Math.round(90 + 90 * Math.sin(t.frameCount * 0.04));
	t.fill(red, 40, 120);
	t.stroke(230, 245, 255);
	t.char('.');
	t.rect(12, 6);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.FILL', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SHAPE INTERIOR', x, y++, 100, 220, 255);
	drawText('Alias for cellColor.', x, y++, 140, 160, 190);
	drawText('charColor controls the outline.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`FILL R: ${red}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

