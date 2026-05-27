---
layout: doc
editLink: true
title: TextmodeCamera
description: Mutable camera object used for p5-style camera workflows.
category: Classes
api: true
kind: Class
lastModified: 2026-05-27
hasConstructor: false
---

[textmode.js](../index.md) / TextmodeCamera

# Class: TextmodeCamera

Mutable camera object used for p5-style camera workflows.

Instances can be created with [Textmodifier.createCamera](Textmodifier.md#createcamera) and activated with
[Textmodifier.setCamera](Textmodifier.md#setcamera). Mutating the object does not affect rendering until
it is applied again with `setCamera`.

## Accessors

### eyeX

#### Get Signature

```ts
get eyeX(): number;
```

Current X position of the camera eye.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let eyeValue = 0;

function drawText(text, x, y, r = 200, g = 220, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

function drawScene() {
	t.push();
	t.char('.');
	t.charColor(50, 70, 110);
	for (let x = -20; x <= 20; x += 4) t.line(x, 0, -20, x, 0, 20);
	for (let z = -20; z <= 20; z += 4) t.line(-20, 0, z, 20, 0, z);
	t.pop();
	t.push();
	t.translate(0, 4, 0);
	t.char('+');
	t.charColor(120, 200, 255);
	t.box(6, 8, 6);
	t.pop();
}

t.setup(() => {
	t.perspective(58, 0.1, 4096);
});

t.draw(() => {
	t.background(6, 10, 22);

	// Camera sweeps left/right along the X axis
	const cam = t
		.createCamera()
		.setPosition(Math.sin(t.frameCount * 0.02) * 16, 8, 28)
		.lookAt(0, 0, 0);

	eyeValue = cam.eyeX;
	t.setCamera(cam);
	drawScene();
	t.resetCamera();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('EYEX', x, y++, 100, 255, 140);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText('Camera eye X position (left/right)', x, y++, 100, 220, 255);
	drawText('Camera sweeps along the X axis.', x, y++, 140, 160, 190);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText(`eyeX = ${eyeValue.toFixed(2)}`, x, y++, 120, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### eyeY

#### Get Signature

```ts
get eyeY(): number;
```

Current Y position of the camera eye.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let eyeValue = 0;

function drawText(text, x, y, r = 200, g = 220, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

function drawScene() {
	t.push();
	t.char('.');
	t.charColor(50, 70, 110);
	for (let x = -20; x <= 20; x += 4) t.line(x, 0, -20, x, 0, 20);
	for (let z = -20; z <= 20; z += 4) t.line(-20, 0, z, 20, 0, z);
	t.pop();
	t.push();
	t.translate(0, 4, 0);
	t.char('+');
	t.charColor(180, 120, 255);
	t.box(6, 8, 6);
	t.pop();
}

t.setup(() => {
	t.perspective(58, 0.1, 4096);
});

t.draw(() => {
	t.background(6, 10, 22);

	// Camera rises and falls along the Y axis
	const camY = 8 + Math.sin(t.frameCount * 0.02) * 12;
	const cam = t.createCamera().setPosition(0, camY, 28).lookAt(0, 0, 0);

	eyeValue = cam.eyeY;
	t.setCamera(cam);
	drawScene();
	t.resetCamera();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('EYEY', x, y++, 100, 255, 140);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText('Camera eye Y position (up/down).', x, y++, 100, 220, 255);
	drawText('Camera rises and falls on Y axis.', x, y++, 140, 160, 190);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText(`eyeY = ${eyeValue.toFixed(2)}`, x, y++, 120, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### eyeZ

#### Get Signature

```ts
get eyeZ(): number;
```

Current Z position of the camera eye.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let eyeValue = 0;

function drawText(text, x, y, r = 200, g = 220, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

function drawScene() {
	t.push();
	t.char('.');
	t.charColor(50, 70, 110);
	for (let x = -20; x <= 20; x += 4) t.line(x, 0, -20, x, 0, 20);
	for (let z = -20; z <= 20; z += 4) t.line(-20, 0, z, 20, 0, z);
	t.pop();
	t.push();
	t.translate(0, 4, 0);
	t.char('+');
	t.charColor(255, 180, 80);
	t.box(6, 8, 6);
	t.pop();
}

t.setup(() => {
	t.perspective(58, 0.1, 4096);
});

t.draw(() => {
	t.background(6, 10, 22);

	// Camera zooms in and out along Z (dolly)
	const camZ = 20 + Math.sin(t.frameCount * 0.02) * 14;
	const cam = t.createCamera().setPosition(0, 8, camZ).lookAt(0, 0, 0);

	eyeValue = cam.eyeZ;
	t.setCamera(cam);
	drawScene();
	t.resetCamera();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('EYEZ', x, y++, 100, 255, 140);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText('Camera eye Z position (depth).', x, y++, 100, 220, 255);
	drawText('Camera dollies in/out on Z axis.', x, y++, 140, 160, 190);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText(`eyeZ = ${eyeValue.toFixed(2)}`, x, y++, 120, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### targetX

#### Get Signature

```ts
get targetX(): number;
```

Current X position of the camera target.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let targetValue = 0;

function drawText(text, x, y, r = 200, g = 220, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

function drawScene(tx) {
	t.push();
	t.char('.');
	t.charColor(50, 70, 110);
	for (let x = -20; x <= 20; x += 4) t.line(x, 0, -20, x, 0, 20);
	for (let z = -20; z <= 20; z += 4) t.line(-20, 0, z, 20, 0, z);
	t.pop();
	// Moving target on X axis
	t.push();
	t.translate(tx, 3, 0);
	t.char('*');
	t.charColor(255, 200, 80);
	t.ellipse(3, 3);
	t.pop();
	// Static reference pillars
	for (let i = -2; i <= 2; i++) {
		t.push();
		t.translate(i * 8, 2, -6);
		t.char('#');
		t.charColor(80, 110, 180);
		t.box(2, 4, 2);
		t.pop();
	}
}

t.setup(() => {
	t.perspective(58, 0.1, 4096);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;
	const tx = Math.sin(time) * 14;
	const cam = t.createCamera().setPosition(0, 10, 30).lookAt(tx, 0, 0);
	targetValue = cam.targetX;

	t.setCamera(cam);
	drawScene(tx);
	t.resetCamera();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TARGETX', x, y++, 100, 255, 140);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText('Camera look-at X coordinate.', x, y++, 100, 220, 255);
	drawText('* target pans left and right.', x, y++, 140, 160, 190);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText(`targetX = ${targetValue.toFixed(2)}`, x, y++, 120, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### targetY

#### Get Signature

```ts
get targetY(): number;
```

Current Y position of the camera target.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let targetValue = 0;

function drawText(text, x, y, r = 200, g = 220, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

function drawScene(ty) {
	t.push();
	t.char('.');
	t.charColor(50, 70, 110);
	for (let x = -20; x <= 20; x += 4) t.line(x, 0, -20, x, 0, 20);
	for (let z = -20; z <= 20; z += 4) t.line(-20, 0, z, 20, 0, z);
	t.pop();
	// Target rising and falling on Y axis
	t.push();
	t.translate(0, ty, 0);
	t.char('*');
	t.charColor(255, 180, 255);
	t.ellipse(3, 3);
	t.pop();
	// Tall pillar as vertical reference
	t.push();
	t.translate(0, 8, -6);
	t.char('|');
	t.charColor(80, 110, 180);
	t.box(2, 16, 2);
	t.pop();
}

t.setup(() => {
	t.perspective(58, 0.1, 4096);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;
	const ty = Math.sin(time) * 10;
	const cam = t.createCamera().setPosition(0, 10, 30).lookAt(0, ty, 0);
	targetValue = cam.targetY;

	t.setCamera(cam);
	drawScene(ty);
	t.resetCamera();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TARGETY', x, y++, 100, 255, 140);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText('Camera look-at Y coordinate.', x, y++, 100, 220, 255);
	drawText('* target rises and falls on Y.', x, y++, 140, 160, 190);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText(`targetY = ${targetValue.toFixed(2)}`, x, y++, 120, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### targetZ

#### Get Signature

```ts
get targetZ(): number;
```

Current Z position of the camera target.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let targetValue = 0;

function drawText(text, x, y, r = 200, g = 220, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

function drawScene(tz) {
	t.push();
	t.char('.');
	t.charColor(50, 70, 110);
	for (let x = -20; x <= 20; x += 4) t.line(x, 0, -20, x, 0, 20);
	for (let z = -20; z <= 20; z += 4) t.line(-20, 0, z, 20, 0, z);
	t.pop();
	// Target moving along the Z (depth) axis
	t.push();
	t.translate(0, 3, tz);
	t.char('*');
	t.charColor(80, 255, 200);
	t.ellipse(3, 3);
	t.pop();
	// Row of depth markers along Z
	for (let i = -2; i <= 2; i++) {
		t.push();
		t.translate(0, 2, i * 7);
		t.char('#');
		t.charColor(80, 110, 160);
		t.box(2, 4, 2);
		t.pop();
	}
}

t.setup(() => {
	t.perspective(58, 0.1, 4096);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;
	const tz = Math.sin(time) * 12;
	const cam = t.createCamera().setPosition(16, 12, 30).lookAt(0, 0, tz);
	targetValue = cam.targetZ;

	t.setCamera(cam);
	drawScene(tz);
	t.resetCamera();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TARGETZ', x, y++, 100, 255, 140);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText('Camera look-at Z coordinate.', x, y++, 100, 220, 255);
	drawText('* target moves in depth on Z.', x, y++, 140, 160, 190);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText(`targetZ = ${targetValue.toFixed(2)}`, x, y++, 120, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### upX

#### Get Signature

```ts
get upX(): number;
```

Current X component of the camera up vector.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let upValue = 0;

function drawText(text, x, y, r = 200, g = 220, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

function drawScene() {
	t.push();
	t.char('.');
	t.charColor(60, 80, 120);
	for (let x = -20; x <= 20; x += 4) t.line(x, 0, -20, x, 0, 20);
	for (let z = -20; z <= 20; z += 4) t.line(-20, 0, z, 20, 0, z);
	t.pop();
	t.push();
	t.translate(0, 5, 0);
	t.char('#');
	t.charColor(200, 220, 255);
	t.box(4, 10, 4);
	t.pop();
}

t.setup(() => {
	t.perspective(58, 0.1, 4096);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.03;
	const cam = t.createCamera().setPosition(0, 10, 40).lookAt(0, 0, 0);
	// Tilting upX rolls the horizon left/right
	cam.setUp(Math.sin(time) * 1.5, 1, 0);

	upValue = cam.upX;
	t.setCamera(cam);
	drawScene();
	t.resetCamera();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('UPX', x, y++, 100, 255, 140);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText('X component of the up vector.', x, y++, 100, 220, 255);
	drawText('Oscillating upX tilts/rolls the', x, y++, 140, 160, 190);
	drawText('horizon left and right.', x, y++, 140, 160, 190);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText(`upX = ${upValue.toFixed(3)}`, x, y++, 120, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### upY

#### Get Signature

```ts
get upY(): number;
```

Current Y component of the camera up vector.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let upValue = 0;

function drawText(text, x, y, r = 200, g = 220, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

function drawScene() {
	t.push();
	t.char('.');
	t.charColor(60, 80, 120);
	for (let x = -20; x <= 20; x += 4) t.line(x, 0, -20, x, 0, 20);
	for (let z = -20; z <= 20; z += 4) t.line(-20, 0, z, 20, 0, z);
	t.pop();
	t.push();
	t.translate(0, 5, 0);
	t.char('#');
	t.charColor(200, 220, 255);
	t.box(4, 10, 4);
	t.pop();
}

t.setup(() => {
	t.perspective(58, 0.1, 4096);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.03;
	// Side-on view; oscillating upY with a fixed upZ creates a roll
	const cam = t.createCamera().setPosition(40, 10, 0).lookAt(0, 0, 0);
	cam.setUp(0, Math.sin(time) * 1.5, 1);

	upValue = cam.upY;
	t.setCamera(cam);
	drawScene();
	t.resetCamera();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('UPY', x, y++, 100, 255, 140);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText('Y component of the up vector.', x, y++, 100, 220, 255);
	drawText('Normally 1.0 for a world-up cam.', x, y++, 140, 160, 190);
	drawText('Oscillating it here creates roll.', x, y++, 140, 160, 190);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText(`upY = ${upValue.toFixed(3)}`, x, y++, 120, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### upZ

#### Get Signature

```ts
get upZ(): number;
```

Current Z component of the camera up vector.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let upValue = 0;

function drawText(text, x, y, r = 200, g = 220, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

function drawScene() {
	t.push();
	t.char('.');
	t.charColor(60, 80, 120);
	for (let x = -20; x <= 20; x += 4) t.line(x, 0, -20, x, 0, 20);
	for (let z = -20; z <= 20; z += 4) t.line(-20, 0, z, 20, 0, z);
	t.pop();
	t.push();
	t.translate(0, 5, 0);
	t.char('#');
	t.charColor(200, 220, 255);
	t.box(4, 10, 4);
	t.pop();
}

t.setup(() => {
	t.perspective(58, 0.1, 4096);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.03;
	// Top-down view; oscillating upZ spins the horizon
	const cam = t.createCamera().setPosition(0, 40, 10).lookAt(0, 0, 0);
	cam.setUp(1, 0, Math.sin(time) * 1.5);

	upValue = cam.upZ;
	t.setCamera(cam);
	drawScene();
	t.resetCamera();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('UPZ', x, y++, 100, 255, 140);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText('Z component of the up vector.', x, y++, 100, 220, 255);
	drawText('From top-down, upZ spins the', x, y++, 140, 160, 190);
	drawText('horizon like a compass needle.', x, y++, 140, 160, 190);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText(`upZ = ${upValue.toFixed(3)}`, x, y++, 120, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Methods

### copy()

```ts
copy(): TextmodeCamera;
```

Create a copy of this camera.

#### Returns

`TextmodeCamera`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 200, g = 220, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

function drawScene() {
	t.push();
	t.char('#');
	t.charColor(60, 80, 120);
	for (let x = -20; x <= 20; x += 4) t.line(x, 0, -20, x, 0, 20);
	for (let z = -20; z <= 20; z += 4) t.line(-20, 0, z, 20, 0, z);
	t.pop();
	for (let i = 0; i < 3; i++) {
		t.push();
		t.translate((i - 1) * 8, 3, 0);
		t.char(['A', 'B', 'C'][i]);
		t.charColor(120 + i * 50, 180, 255 - i * 40);
		t.box(4, 6, 4);
		t.pop();
	}
}

t.setup(() => {
	t.perspective(58, 0.1, 4096);
});

t.draw(() => {
	t.background(6, 10, 22);

	const original = t.createCamera().setPosition(-10, 8, 28).lookAt(0, 0, 0);
	const clone = original.copy().setPosition(10, 8, 28);

	const active = Math.floor(t.frameCount / 120) % 2 === 0 ? original : clone;
	t.setCamera(active);
	drawScene();
	t.resetCamera();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	const which = Math.floor(t.frameCount / 120) % 2 === 0 ? 'original' : 'clone';
	drawText('COPY', x, y++, 100, 255, 140);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText('Clone a camera with its state.', x, y++, 100, 220, 255);
	drawText('Switches view every 120 frames.', x, y++, 140, 160, 190);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText(`Active: ${which}`, x, y++, 120, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### lookAt()

```ts
lookAt(
   x, 
   y, 
   z): this;
```

Set camera look-at target.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`this`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let tx = 0,
	ty = 0,
	tz = 0;

function drawText(text, x, y, r = 200, g = 220, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

function drawScene() {
	t.push();
	t.char('.');
	t.charColor(50, 70, 110);
	for (let x = -20; x <= 20; x += 4) t.line(x, 0, -20, x, 0, 20);
	for (let z = -20; z <= 20; z += 4) t.line(-20, 0, z, 20, 0, z);
	t.pop();
	// Target marker: a glowing cross at the look-at point
	t.push();
	t.translate(tx, ty, tz);
	t.char('*');
	t.charColor(255, 220, 80);
	t.ellipse(3, 3);
	t.pop();
	// Static pillars around the scene
	for (let i = 0; i < 4; i++) {
		const angle = (i * Math.PI) / 2;
		t.push();
		t.translate(Math.cos(angle) * 12, 3, Math.sin(angle) * 12);
		t.char('#');
		t.charColor(80, 120, 200);
		t.box(2, 6, 2);
		t.pop();
	}
}

t.setup(() => {
	t.perspective(58, 0.1, 4096);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;
	tx = Math.cos(time) * 10;
	ty = Math.sin(time * 0.7) * 4;
	tz = Math.sin(time) * 10;

	const cam = t.createCamera().setPosition(0, 12, 30).lookAt(tx, ty, tz);
	t.setCamera(cam);
	drawScene();
	t.resetCamera();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('LOOKAT', x, y++, 100, 255, 140);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText('Aim the camera at a 3D point.', x, y++, 100, 220, 255);
	drawText('* marker shows the look target.', x, y++, 140, 160, 190);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	const target = `${tx.toFixed(1)},${ty.toFixed(1)},${tz.toFixed(1)}`;
	drawText(`TARGET: ${target}`, x, y++, 120, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### move()

```ts
move(
   dx, 
   dy, 
   dz): this;
```

Move eye and target together in world space.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `dx` | `number` |
| `dy` | `number` |
| `dz` | `number` |

#### Returns

`this`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let ex = 0,
	ey = 0,
	ez = 0;

function drawText(text, x, y, r = 200, g = 220, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

function drawScene() {
	t.push();
	t.char('.');
	t.charColor(50, 70, 110);
	for (let x = -20; x <= 20; x += 4) t.line(x, 0, -20, x, 0, 20);
	for (let z = -20; z <= 20; z += 4) t.line(-20, 0, z, 20, 0, z);
	t.pop();
	for (let i = 0; i < 5; i++) {
		t.push();
		t.translate(-16 + i * 8, 3, 0);
		t.char(['@', '#', '+', '*', 'O'][i]);
		t.charColor(100 + i * 30, 180, 255 - i * 30);
		t.box(3, 6, 3);
		t.pop();
	}
}

t.setup(() => {
	t.perspective(58, 0.1, 4096);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;
	// Start at a fixed position then move() adds an offset
	const cam = t.createCamera().setPosition(0, 8, 30).lookAt(0, 3, 0);
	cam.move(Math.sin(time) * 14, 0, 0);

	ex = cam.eyeX;
	ey = cam.eyeY;
	ez = cam.eyeZ;
	t.setCamera(cam);
	drawScene();
	t.resetCamera();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('MOVE', x, y++, 100, 255, 140);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText('Translate eye by an offset.', x, y++, 100, 220, 255);
	drawText('Shifts position without resetting', x, y++, 140, 160, 190);
	drawText('the look-at target.', x, y++, 140, 160, 190);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	const eye = `${ex.toFixed(1)},${ey.toFixed(1)},${ez.toFixed(1)}`;
	drawText(`EYE: ${eye}`, x, y++, 120, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### setPosition()

```ts
setPosition(
   x, 
   y, 
   z): this;
```

Set camera eye position.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`this`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let px = 0,
	py = 0,
	pz = 0;

function drawText(text, x, y, r = 200, g = 220, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

function drawScene() {
	t.push();
	t.char('.');
	t.charColor(50, 70, 110);
	for (let x = -20; x <= 20; x += 4) t.line(x, 0, -20, x, 0, 20);
	for (let z = -20; z <= 20; z += 4) t.line(-20, 0, z, 20, 0, z);
	t.pop();
	// Central subject
	t.push();
	t.translate(0, 4, 0);
	t.char('@');
	t.charColor(120, 220, 255);
	t.box(5, 8, 5);
	t.pop();
	// Corner pillars
	for (let i = 0; i < 4; i++) {
		const a = (i * Math.PI) / 2 + Math.PI / 4;
		t.push();
		t.translate(Math.cos(a) * 12, 2, Math.sin(a) * 12);
		t.char('#');
		t.charColor(80, 100, 160);
		t.box(2, 4, 2);
		t.pop();
	}
}

t.setup(() => {
	t.perspective(58, 0.1, 4096);
});

t.draw(() => {
	t.background(6, 10, 22);

	// Camera orbits the scene on the XZ plane
	const time = t.frameCount * 0.02;
	px = Math.cos(time) * 24;
	py = 8;
	pz = Math.sin(time) * 24;

	const cam = t.createCamera().setPosition(px, py, pz).lookAt(0, 0, 0);
	t.setCamera(cam);
	drawScene();
	t.resetCamera();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('SETPOSITION', x, y++, 100, 255, 140);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText('Place the camera eye in 3D space.', x, y++, 100, 220, 255);
	drawText('Camera orbits the central object.', x, y++, 140, 160, 190);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	const pos = `${px.toFixed(1)},${py.toFixed(1)},${pz.toFixed(1)}`;
	drawText(`POS: ${pos}`, x, y++, 120, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### setUp()

```ts
setUp(
   x, 
   y, 
   z): this;
```

Set camera up vector.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`this`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let ux = 0,
	uy = 1,
	uz = 0;

function drawText(text, x, y, r = 200, g = 220, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

function drawScene() {
	t.push();
	t.char('.');
	t.charColor(60, 80, 120);
	for (let x = -20; x <= 20; x += 4) t.line(x, 0, -20, x, 0, 20);
	for (let z = -20; z <= 20; z += 4) t.line(-20, 0, z, 20, 0, z);
	t.pop();
	t.push();
	t.translate(0, 5, 0);
	t.char('#');
	t.charColor(200, 220, 255);
	t.box(4, 10, 4);
	t.pop();
}

t.setup(() => {
	t.perspective(58, 0.1, 4096);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.03;
	const cam = t.createCamera().setPosition(0, 10, 40).lookAt(0, 0, 0);
	// Oscillating the X component of 'up' creates a rolling tilt
	cam.setUp(Math.sin(time) * 1.5, 1, 0);

	ux = cam.upX;
	uy = cam.upY;
	uz = cam.upZ;
	t.setCamera(cam);
	drawScene();
	t.resetCamera();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('SETUP', x, y++, 100, 255, 140);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	drawText('Set the camera up vector.', x, y++, 100, 220, 255);
	drawText('Tilting upX rolls the horizon.', x, y++, 140, 160, 190);
	drawText('--------------------------------', x, y++, 80, 100, 150);
	const up = `${ux.toFixed(2)},${uy.toFixed(2)},${uz.toFixed(2)}`;
	drawText(`UP: ${up}`, x, y++, 120, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
