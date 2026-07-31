---
layout: doc
editLink: true
title: millis
description: Milliseconds since the sketch started running.
category: Accessors
api: true
owner: Textmodifier
kind: Accessor
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / millis

# Accessor: millis

## Get Signature

```ts
get millis(): number;
```

Milliseconds since the sketch started running.

`millis` keeps track of how long a sketch has been running in milliseconds
(thousandths of a second). This information is often helpful for timing events
and animations.

Time tracking begins before the code in [setup](../methods/setup.md) runs. If loading screen is
enabled, `millis` begins tracking as soon as the loading screen starts.

This property is connected to [secs](secs.md) - setting one will affect the other.

### Returns

`number`

Milliseconds since the sketch started.

### Examples

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
	value = t.millis / 1000;
	const angle = (value % 6.28) * 1;
	t.push();
	t.translate(8, 2);
	t.rotateZ((angle * 180) / Math.PI);
	t.char('#');
	t.charColor(140, 220, 255);
	t.rect(12, 1);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.MILLIS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: ELAPSED TIME', x, y++, 100, 220, 255);
	drawText('Numeric time drives motion.', x, y++, 140, 160, 190);
	drawText('Rows stay fixed-width short.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`VALUE: ${value.toFixed(2)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

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
	value = (t.millis % 2000) / 1000;
	const angle = (value % 6.28) * 1;
	t.push();
	t.translate(8, 2);
	t.rotateZ((angle * 180) / Math.PI);
	t.char('#');
	t.charColor(140, 220, 255);
	t.rect(12, 1);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.MILLIS2', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: MODULO TIMER', x, y++, 100, 220, 255);
	drawText('Numeric time drives motion.', x, y++, 140, 160, 190);
	drawText('Rows stay fixed-width short.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`VALUE: ${value.toFixed(2)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

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

t.keyPressed((data) => {
	if (data.key === ' ') t.millis = 0;
});

t.draw(() => {
	t.background(6, 10, 22);
	const progress = (t.millis % 3000) / 3000;
	for (let i = 0; i < 24; i++) {
		t.push();
		t.translate(-12 + i, 3);
		t.char(i / 24 < progress ? '#' : '.');
		t.charColor(140, 220, 255);
		t.point();
		t.pop();
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.MILLIS3', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: RESET MILLIS', x, y++, 100, 220, 255);
	drawText('Space resets elapsed millis.', x, y++, 140, 160, 190);
	drawText('Progress bar loops every 3s.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`MS: ${Math.floor(t.millis)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Set Signature

```ts
set millis(value): void;
```

Set elapsed milliseconds by adjusting the internal start time.

This allows seeking/scrubbing in animations. Setting `millis` will also
affect the value returned by [secs](secs.md) since they are connected.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | New elapsed time in milliseconds. |

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
	value = Math.sin(t.millis * 0.002);
	const angle = (value % 6.28) * 1;
	t.push();
	t.translate(8, 2);
	t.rotateZ((angle * 180) / Math.PI);
	t.char('#');
	t.charColor(140, 220, 255);
	t.rect(12, 1);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.MILLIS4', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SMOOTH OSCILLATOR', x, y++, 100, 220, 255);
	drawText('Numeric time drives motion.', x, y++, 140, 160, 190);
	drawText('Rows stay fixed-width short.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`VALUE: ${value.toFixed(2)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

