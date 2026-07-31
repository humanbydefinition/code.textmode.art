---
layout: doc
editLink: true
title: secs
description: Seconds since the sketch started running.
category: Accessors
api: true
owner: Textmodifier
kind: Accessor
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / secs

# Accessor: secs

## Get Signature

```ts
get secs(): number;
```

Seconds since the sketch started running.

`secs` is a convenience property that returns the elapsed time in seconds
instead of milliseconds. Equivalent to `millis / 1000`.

Time tracking begins before the code in [setup](../methods/setup.md) runs. If loading screen is
enabled, `secs` begins tracking as soon as the loading screen starts.

This property is connected to [millis](millis.md) - setting one will affect the other.

### Returns

`number`

Seconds since the sketch started.

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
	value = t.secs;
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
	drawText('TEXTMODIFIER.SECS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: ELAPSED SECONDS', x, y++, 100, 220, 255);
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
	value = t.secs % 4;
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
	drawText('TEXTMODIFIER.SECS2', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: LOOPING SECONDS', x, y++, 100, 220, 255);
	drawText('Numeric time drives motion.', x, y++, 140, 160, 190);
	drawText('Rows stay fixed-width short.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`VALUE: ${value.toFixed(2)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Set Signature

```ts
set secs(value): void;
```

Set elapsed seconds by adjusting the internal start time.

This allows seeking/scrubbing in animations. Setting `secs` will also
affect the value returned by [millis](millis.md) since they are connected.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | New elapsed time in seconds. |

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

let scrub = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.mouseDragged(() => {
	scrub = t.mouse.x === Number.NEGATIVE_INFINITY ? scrub : t.mouse.x / 10;
});

t.draw(() => {
	t.background(6, 10, 22);
	const value = t.mouseIsPressed ? scrub : t.secs;
	t.push();
	t.translate(8, 2);
	t.rotateZ(value * 40);
	t.char('#');
	t.charColor(140, 220, 255);
	t.rect(10, 2);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.SECS3', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SCRUB TIME', x, y++, 100, 220, 255);
	drawText('Drag to scrub temporary time.', x, y++, 140, 160, 190);
	drawText('Release to resume t.secs.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`SECS: ${t.secs.toFixed(2)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

