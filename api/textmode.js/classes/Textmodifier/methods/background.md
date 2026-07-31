---
layout: doc
editLink: true
title: background
description: Current background color.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / background

# Method: background()

## Call Signature

```ts
background(): TextmodeColor;
```

Current background color.

### Returns

[`TextmodeColor`](../../../namespaces/color/classes/TextmodeColor.md)

Current background color.

### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let r = 0;
let g = 0;
let b = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.draw(() => {
	const time = t.frameCount * 0.03;
	r = Math.round(40 + 30 * Math.sin(time));
	g = Math.round(30 + 30 * Math.sin(time + 2));
	b = Math.round(60 + 40 * Math.sin(time + 4));
	t.background(r, g, b);
	t.char('#');
	t.charColor(240, 245, 255);
	t.rect(12, 5);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.BACKGROUND', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: CANVAS COLOR', x, y++, 100, 220, 255);
	drawText('Sets and reads scene backdrop.', x, y++, 140, 160, 190);
	drawText('RGB values animate softly.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`RGB: ${r},${g},${b}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
background(gray, alpha?): void;
```

Set the background color using a grayscale value.

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

let gray = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.draw(() => {
	gray = Math.round(30 + 40 * Math.sin(t.frameCount * 0.03));
	t.background(gray);
	t.char('@');
	t.charColor(255, 210, 120);
	t.rect(10, 5);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.BACKGROUND2', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: GRAY BACKGROUND', x, y++, 100, 220, 255);
	drawText('One number sets R, G, and B.', x, y++, 140, 160, 190);
	drawText('Gray value animates.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`GRAY: ${gray}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
background(
   r, 
   g, 
   b, 
   a?): void;
```

Set the background color using RGB(A) values.

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

let useBlue = false;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.draw(() => {
	useBlue = Math.floor(t.frameCount / 90) % 2 === 0;
	t.background(useBlue ? '#10183a' : '#301820');
	t.char(useBlue ? 'B' : 'R');
	t.charColor(255, 230, 140);
	t.rect(10, 5);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.BACKGROUND3', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: HEX BACKGROUND', x, y++, 100, 220, 255);
	drawText('Hex strings set the color.', x, y++, 140, 160, 190);
	drawText('Mode alternates blue and red.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(useBlue ? 'HEX: BLUE' : 'HEX: RED', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
background(value): void;
```

Set the background color using a CSS string or TextmodeColor object.

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

const colorA = t.color(32, 12, 20);
const colorB = t.color(10, 24, 48);
let useA = true;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.draw(() => {
	useA = Math.floor(t.frameCount / 90) % 2 === 0;
	t.background(useA ? colorA : colorB);
	t.char(useA ? 'A' : 'B');
	t.charColor(255, 230, 140);
	t.rect(10, 5);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.BACKGROUND4', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: COLOR OBJECT', x, y++, 100, 220, 255);
	drawText('Reusable TextmodeColor values.', x, y++, 140, 160, 190);
	drawText('Background switches objects.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(useA ? 'ACTIVE: COLOR A' : 'ACTIVE: COLOR B', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

