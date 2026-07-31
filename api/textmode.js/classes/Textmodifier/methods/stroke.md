---
layout: doc
editLink: true
title: stroke
description: Alias for charColor. Current stroke (character) color.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / stroke

# Method: stroke()

## Call Signature

```ts
stroke(): TextmodeColor;
```

Alias for [charColor](charColor.md). Current stroke (character) color.

### Returns

[`TextmodeColor`](../../../namespaces/color/classes/TextmodeColor.md)

Current character color.

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
	red = Math.round(120 + 100 * Math.sin(t.frameCount * 0.04));
	t.fill(20, 30, 60);
	t.stroke(red, 0, 0);
	t.char('.');
	t.rect(14, 6);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.STROKE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SHAPE OUTLINE', x, y++, 100, 220, 255);
	drawText('charColor colors shape edges.', x, y++, 140, 160, 190);
	drawText('cellColor controls interior cells.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`STROKE R: ${red}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
stroke(gray, alpha?): void;
```

Alias for [charColor](charColor.md). Set the stroke (character) color using a grayscale value.

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
	red = Math.round(120 + 100 * Math.sin(t.frameCount * 0.04));
	t.fill(20, 30, 60);
	t.stroke(red, 0, 0);
	t.char('.');
	t.rect(14, 6);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.STROKE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SHAPE OUTLINE', x, y++, 100, 220, 255);
	drawText('charColor colors shape edges.', x, y++, 140, 160, 190);
	drawText('cellColor controls interior cells.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`STROKE R: ${red}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
stroke(
   r, 
   g, 
   b, 
   a?): void;
```

Alias for [charColor](charColor.md). Set the stroke (character) color using RGB(A) values.

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
	red = Math.round(120 + 100 * Math.sin(t.frameCount * 0.04));
	t.fill(20, 30, 60);
	t.stroke(red, 0, 0);
	t.char('.');
	t.rect(14, 6);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.STROKE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SHAPE OUTLINE', x, y++, 100, 220, 255);
	drawText('charColor colors shape edges.', x, y++, 140, 160, 190);
	drawText('cellColor controls interior cells.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`STROKE R: ${red}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
stroke(value): void;
```

Alias for [charColor](charColor.md). Set the stroke (character) color using a CSS string or TextmodeColor object.

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
	red = Math.round(120 + 100 * Math.sin(t.frameCount * 0.04));
	t.fill(20, 30, 60);
	t.stroke(red, 0, 0);
	t.char('.');
	t.rect(14, 6);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.STROKE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SHAPE OUTLINE', x, y++, 100, 220, 255);
	drawText('charColor colors shape edges.', x, y++, 140, 160, 190);
	drawText('cellColor controls interior cells.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`STROKE R: ${red}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

