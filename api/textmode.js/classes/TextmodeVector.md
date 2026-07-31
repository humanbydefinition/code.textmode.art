---
layout: doc
editLink: true
title: TextmodeVector
description: Mutable two- or three-dimensional vector for creative-coding math.
category: Classes
api: true
kind: Class
lastModified: 2026-07-31
hasConstructor: true
---

[textmode.js](../index.md) / TextmodeVector

# Class: TextmodeVector

Mutable two- or three-dimensional vector for creative-coding math.

`TextmodeVector` stores public `x`, `y`, and `z` components and uses
chainable mutating methods for common motion, steering, and force operations.

Use [Textmodifier.createVector](Textmodifier/methods/createVector.md) to create vectors inside a sketch.

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
const pos = t.createVector(-18, -6);
const vel = t.createVector(0.5, 0.12);
const acc = t.createVector();
const target = t.createVector();
const trail = [];

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

function plot(point, char, r, g, b) {
	t.push();
	t.translate(Math.round(point.x), Math.round(point.y));
	t.charColor(r, g, b);
	t.char(char);
	t.point();
	t.pop();
}

t.draw(() => {
	t.background(4, 7, 16);

	const time = t.frameCount * 0.045;
	const radiusX = Math.max(8, t.grid.cols / 4);
	const radiusY = Math.max(4, t.grid.rows / 4);
	target.set(Math.cos(time) * radiusX, Math.sin(time * 0.8) * radiusY);

	const desired = target.copy().sub(pos);
	const distance = desired.mag();
	const speed = t.map(Math.min(distance, 20), 0, 20, 0.08, 0.74);
	const steer = desired.setMag(speed).sub(vel).limit(0.045);

	acc.set(steer);
	vel.add(acc).limit(0.82);
	pos.add(vel);

	trail.push(pos.copy());
	if (trail.length > 28) {
		trail.shift();
	}

	for (let i = 0; i < trail.length; i++) {
		const fade = i / trail.length;
		const glyph = fade > 0.72 ? '*' : fade > 0.42 ? '+' : '.';
		plot(trail[i], glyph, 70 + fade * 120, 120 + fade * 120, 255);
	}

	const ray = vel.copy().setMag(5);
	for (let i = 1; i <= 5; i++) {
		plot(pos.copy().add(ray.copy().setMag(i)), '-', 120, 255, 180);
	}

	plot(target, 'x', 255, 120, 150);
	plot(target.copy().add(0, -1), '|', 255, 80, 120);
	plot(target.copy().add(-1, 0), '-', 255, 80, 120);
	plot(target.copy().add(1, 0), '-', 255, 80, 120);
	plot(pos, '@', 110, 255, 170);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODIFIER.CREATEVECTOR', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SEEKING MOTION', x, y++, 100, 220, 255);
	drawText('target - position makes desired.', x, y++, 140, 160, 190);
	drawText('setMag + limit shapes steering.', x, y++, 140, 160, 190);
	drawText('velocity and position use add().', x, y++, 140, 160, 190);
	drawText(`dist: ${pos.dist(target).toFixed(1)}`, x, y++, 220, 230, 255);
	drawText(`speed: ${vel.mag().toFixed(2)}`, x, y++, 220, 230, 255);
	drawText(`head: ${vel.heading().toFixed(0)}`, x, y++, 220, 230, 255);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Constructors

### Constructor

```ts
new TextmodeVector(
   x?, 
   y?, 
   z?): TextmodeVector;
```

Create a new vector with the given components.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `x` | `number` | `0` | X component. |
| `y` | `number` | `0` | Y component. |
| `z` | `number` | `0` | Z component. |

#### Returns

`TextmodeVector`

## Properties

### x

```ts
x: number;
```

X component.


***

### y

```ts
y: number;
```

Y component.


***

### z

```ts
z: number;
```

Z component.


## Methods

| Method | Description |
| ------ | ------ |
| [add](TextmodeVector/methods/add.md) | Add components to this vector. |
| [copy](TextmodeVector/methods/copy.md) | Create a copy of this vector. |
| [cross](TextmodeVector/methods/cross.md) | Calculate the cross product with another vector-like value. |
| [dist](TextmodeVector/methods/dist.md) | Calculate the distance to another vector-like point. |
| [div](TextmodeVector/methods/div.md) | Divide this vector by a scalar. |
| [dot](TextmodeVector/methods/dot.md) | Calculate the dot product with another vector-like value. |
| [heading](TextmodeVector/methods/heading.md) | Calculate this vector's 2D heading in degrees. |
| [limit](TextmodeVector/methods/limit.md) | Limit this vector's magnitude. |
| [mag](TextmodeVector/methods/mag.md) | Calculate this vector's magnitude. |
| [magSq](TextmodeVector/methods/magSq.md) | Calculate this vector's squared magnitude. |
| [mult](TextmodeVector/methods/mult.md) | Multiply this vector by a scalar. |
| [normalize](TextmodeVector/methods/normalize.md) | Normalize this vector to length `1`. |
| [set](TextmodeVector/methods/set.md) | Set this vector's components. |
| [setMag](TextmodeVector/methods/setMag.md) | Set this vector's magnitude. |
| [sub](TextmodeVector/methods/sub.md) | Subtract components from this vector. |
