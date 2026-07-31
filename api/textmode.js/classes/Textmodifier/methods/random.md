---
layout: doc
editLink: true
title: random
description: Return a random number from 0 up to, but not including, 1.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / random

# Method: random()

## Call Signature

```ts
random(): number;
```

Return a random number from 0 up to, but not including, 1.

When the sketch is created with `seed`, or after calling [randomSeed](randomSeed.md),
this method returns a reproducible sequence. This pseudo-random generator is
intended for creative coding and is not cryptographically secure.

### Returns

`number`

Random number in the range [0, 1).

### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
	seed: 'random-demo',
});

const labelLayer = t.layers.add();
const characters = Array.from('░▒▓█+*#');
let mark = { x: 0, y: 0, char: '*', r: 255, g: 255, b: 255 };

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.draw(() => {
	t.background(5, 8, 18);
	if (t.frameCount % 12 === 1) {
		mark = {
			x: Math.floor(t.random(-18, 18)),
			y: Math.floor(t.random(-9, 9)),
			char: t.random(characters) ?? '*',
			r: Math.floor(t.random(120, 256)),
			g: Math.floor(t.random(120, 256)),
			b: Math.floor(t.random(120, 256)),
		};
	}

	t.push();
	t.translate(mark.x, mark.y);
	t.char(mark.char);
	t.charColor(mark.r, mark.g, mark.b);
	t.point();
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.RANDOM', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SEEDED CHOICES', x, y++, 100, 220, 255);
	drawText('The mark uses random ranges.', x, y++, 140, 160, 190);
	drawText('The seed repeats this sequence.', x, y++, 140, 160, 190);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
random(max): number;
```

Return a random number from 0 up to, but not including, `max`.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `max` | `number` | Upper bound, exclusive. |

### Returns

`number`

Random number in the range [0, max).

### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
	seed: 'random-demo',
});

const labelLayer = t.layers.add();
const characters = Array.from('░▒▓█+*#');
let mark = { x: 0, y: 0, char: '*', r: 255, g: 255, b: 255 };

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.draw(() => {
	t.background(5, 8, 18);
	if (t.frameCount % 12 === 1) {
		mark = {
			x: Math.floor(t.random(-18, 18)),
			y: Math.floor(t.random(-9, 9)),
			char: t.random(characters) ?? '*',
			r: Math.floor(t.random(120, 256)),
			g: Math.floor(t.random(120, 256)),
			b: Math.floor(t.random(120, 256)),
		};
	}

	t.push();
	t.translate(mark.x, mark.y);
	t.char(mark.char);
	t.charColor(mark.r, mark.g, mark.b);
	t.point();
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.RANDOM', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SEEDED CHOICES', x, y++, 100, 220, 255);
	drawText('The mark uses random ranges.', x, y++, 140, 160, 190);
	drawText('The seed repeats this sequence.', x, y++, 140, 160, 190);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
random(min, max): number;
```

Return a random number from `min` up to, but not including, `max`.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `min` | `number` | Lower bound, inclusive. |
| `max` | `number` | Upper bound, exclusive. |

### Returns

`number`

Random number in the range [min, max).

### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
	seed: 'random-demo',
});

const labelLayer = t.layers.add();
const characters = Array.from('░▒▓█+*#');
let mark = { x: 0, y: 0, char: '*', r: 255, g: 255, b: 255 };

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.draw(() => {
	t.background(5, 8, 18);
	if (t.frameCount % 12 === 1) {
		mark = {
			x: Math.floor(t.random(-18, 18)),
			y: Math.floor(t.random(-9, 9)),
			char: t.random(characters) ?? '*',
			r: Math.floor(t.random(120, 256)),
			g: Math.floor(t.random(120, 256)),
			b: Math.floor(t.random(120, 256)),
		};
	}

	t.push();
	t.translate(mark.x, mark.y);
	t.char(mark.char);
	t.charColor(mark.r, mark.g, mark.b);
	t.point();
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.RANDOM', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SEEDED CHOICES', x, y++, 100, 220, 255);
	drawText('The mark uses random ranges.', x, y++, 140, 160, 190);
	drawText('The seed repeats this sequence.', x, y++, 140, 160, 190);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Call Signature

```ts
random<T>(choices): T | undefined;
```

Return a random element from an array.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `choices` | readonly `T`[] | Values to choose from. |

### Returns

`T` \| `undefined`

A random array element, or `undefined` when the array is empty.

### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
	seed: 'random-demo',
});

const labelLayer = t.layers.add();
const characters = Array.from('░▒▓█+*#');
let mark = { x: 0, y: 0, char: '*', r: 255, g: 255, b: 255 };

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.draw(() => {
	t.background(5, 8, 18);
	if (t.frameCount % 12 === 1) {
		mark = {
			x: Math.floor(t.random(-18, 18)),
			y: Math.floor(t.random(-9, 9)),
			char: t.random(characters) ?? '*',
			r: Math.floor(t.random(120, 256)),
			g: Math.floor(t.random(120, 256)),
			b: Math.floor(t.random(120, 256)),
		};
	}

	t.push();
	t.translate(mark.x, mark.y);
	t.char(mark.char);
	t.charColor(mark.r, mark.g, mark.b);
	t.point();
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.RANDOM', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SEEDED CHOICES', x, y++, 100, 220, 255);
	drawText('The mark uses random ranges.', x, y++, 140, 160, 190);
	drawText('The seed repeats this sequence.', x, y++, 140, 160, 190);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

