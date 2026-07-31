---
layout: doc
editLink: true
title: charColor
description: Current character color.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / charColor

# Method: charColor()

## Call Signature

```ts
charColor(): TextmodeColor;
```

Current character color.

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

let current = t.color(255, 255, 255);

t.draw(() => {
	t.background(6, 10, 22);
	const r = Math.round(150 + 105 * Math.sin(t.frameCount * 0.04));
	const g = Math.round(150 + 105 * Math.cos(t.frameCount * 0.03));
	t.charColor(r, g, 180);
	current = t.charColor();
	t.char('#');
	t.rect(14, 6);
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODIFIER.CHARCOLOR', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: CHARACTER COLOR', x, y++, 100, 220, 255);
	drawText('Compact API demonstration.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const rgb = current.r + ',' + current.g + ',' + current.b;
	drawText(`RGB: ${rgb}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
charColor(gray, alpha?): void;
```

Set the character color using a grayscale value.

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

let value = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	value = Math.round(80 + 80 * Math.sin(t.frameCount * 0.04));
	t.char('#');
	t.charColor(value, 220);
	t.rect(10, 5);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.CHARCOLOR2', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: GRAY GLYPH COLOR', x, y++, 100, 220, 255);
	drawText('Gray plus alpha overload.', x, y++, 140, 160, 190);
	drawText('The value pulses every frame.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`GRAY: ${value}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
charColor(
   r, 
   g, 
   b, 
   a?): void;
```

Set the character color using RGB(A) values.

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

let value = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	value = Math.round(80 + 80 * Math.sin(t.frameCount * 0.04));
	t.char('#');
	t.charColor(value > 80 ? '#facc15' : '#38bdf8');
	t.rect(10, 5);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.CHARCOLOR3', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: HEX GLYPH COLOR', x, y++, 100, 220, 255);
	drawText('Hex strings color glyphs.', x, y++, 140, 160, 190);
	drawText('The value pulses every frame.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(value > 80 ? 'HEX: GOLD' : 'HEX: CYAN', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
charColor(value): void;
```

Set the character color using a CSS string or TextmodeColor object.

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

const colorA = t.color('#64ffd0');
const colorB = t.color('#ffc878');
let active = 'colorA';

t.draw(() => {
	t.background(6, 10, 22);
	const useA = Math.floor(t.frameCount / 45) % 2 === 0;
	active = useA ? 'colorA' : 'colorB';
	t.charColor(useA ? colorA : colorB);
	t.char('@');
	t.rotateZ(t.frameCount * 2);
	t.rect(10, 10);
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODIFIER.CHARCOLOR4', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: COLOR OBJECT INPUT', x, y++, 100, 220, 255);
	drawText('Compact API demonstration.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`ACTIVE: ${active}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

