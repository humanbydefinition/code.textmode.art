---
layout: doc
editLink: true
title: TextmodeCamera
description: Mutable camera object used for p5-style camera workflows.
category: Classes
api: true
kind: Class
lastModified: 2026-05-19
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

Get the current x position of the camera eye.

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

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	drawCenteredText('TextmodeCamera.eyeX', -8, [240, 245, 255]);
	drawCenteredText('eyeX: ' + eyeValue.toFixed(1), 6, [180, 200, 220]);
});

t.setup(() => {
	t.perspective(58, 0.1, 4096);
});

t.draw(() => {
	t.background(6, 10, 22);

	const cam = t
		.createCamera()
		.setPosition(Math.sin(t.frameCount * 0.02) * 12, 0, 20)
		.lookAt(0, 0, 0);

	eyeValue = cam.eyeX;
	t.setCamera(cam);

	t.char('+');
	t.charColor(120, 180, 255);
	t.line(-10, 0, 10, 0);
	t.line(0, -5, 0, 5);
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

Get the current y position of the camera eye.

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

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	drawCenteredText('TextmodeCamera.eyeY', -8, [240, 245, 255]);
	drawCenteredText('eyeY: ' + eyeValue.toFixed(1), 6, [180, 200, 220]);
});

t.setup(() => {
	t.perspective(58, 0.1, 4096);
});

t.draw(() => {
	t.background(6, 10, 22);

	const cam = t
		.createCamera()
		.setPosition(0, Math.sin(t.frameCount * 0.02) * 12, 20)
		.lookAt(0, 0, 0);

	eyeValue = cam.eyeY;
	t.setCamera(cam);

	t.char('+');
	t.charColor(120, 180, 255);
	t.line(-10, 0, 10, 0);
	t.line(0, -5, 0, 5);
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

Get the current z position of the camera eye.

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

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	drawCenteredText('TextmodeCamera.eyeZ', -8, [240, 245, 255]);
	drawCenteredText('eyeZ: ' + eyeValue.toFixed(1), 6, [180, 200, 220]);
});

t.setup(() => {
	t.perspective(58, 0.1, 4096);
});

t.draw(() => {
	t.background(6, 10, 22);

	const cam = t
		.createCamera()
		.setPosition(0, 0, 20 + Math.sin(t.frameCount * 0.02) * 12)
		.lookAt(0, 0, 0);

	eyeValue = cam.eyeZ;
	t.setCamera(cam);

	t.char('+');
	t.charColor(120, 180, 255);
	t.line(-10, 0, 10, 0);
	t.line(0, -5, 0, 5);
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

Get the current x position of the camera target.

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

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	drawCenteredText('TextmodeCamera.targetX', -8, [240, 245, 255]);
	drawCenteredText('targetX: ' + targetValue.toFixed(1), 6, [180, 200, 220]);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;
	const cam = t.createCamera().setPosition(0, 10, 30);

	cam.lookAt(Math.sin(time) * 12, 0, 0);

	targetValue = cam.targetX;

	t.setCamera(cam);

	t.push();
	t.char('+');
	t.charColor(120, 180, 255);
	t.line(-10, 0, 10, 0);
	t.line(0, -5, 0, 5);
	t.pop();
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

Get the current y position of the camera target.

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

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	drawCenteredText('TextmodeCamera.targetY', -8, [240, 245, 255]);
	drawCenteredText('targetY: ' + targetValue.toFixed(1), 6, [180, 200, 220]);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;
	const cam = t.createCamera().setPosition(0, 10, 30);

	cam.lookAt(0, Math.sin(time) * 12, 0);

	targetValue = cam.targetY;

	t.setCamera(cam);

	t.push();
	t.char('+');
	t.charColor(120, 180, 255);
	t.line(-10, 0, 10, 0);
	t.line(0, -5, 0, 5);
	t.pop();
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

Get the current z position of the camera target.

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

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	drawCenteredText('TextmodeCamera.targetZ', -8, [240, 245, 255]);
	drawCenteredText('targetZ: ' + targetValue.toFixed(1), 6, [180, 200, 220]);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;
	const cam = t.createCamera().setPosition(0, 10, 30);

	cam.lookAt(0, 0, Math.sin(time) * 12);

	targetValue = cam.targetZ;

	t.setCamera(cam);

	t.push();
	t.char('+');
	t.charColor(120, 180, 255);
	t.line(-10, 0, 10, 0);
	t.line(0, -5, 0, 5);
	t.pop();
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

Get the current x component of the camera up vector.

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

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

function drawEnvironment() {
	t.push();
	t.char('.');
	t.charColor(60, 80, 120);
	for (let x = -20; x <= 20; x += 4) {
		t.line(x, 0, -20, x, 0, 20);
	}
	for (let z = -20; z <= 20; z += 4) {
		t.line(-20, 0, z, 20, 0, z);
	}
	t.pop();

	t.push();
	t.translate(0, 5, 0);
	t.char('#');
	t.charColor(200, 220, 255);
	t.box(4, 10, 4);
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	drawCenteredText('TextmodeCamera.upX', -8, [240, 245, 255]);
	drawCenteredText('upX: ' + upValue.toFixed(2), 6, [120, 255, 180]);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.03;
	// Looking from +Z, tilted down slightly
	const cam = t.createCamera().setPosition(0, 10, 40).lookAt(0, 0, 0);

	// Oscillating the X component of the "up" vector creates a roll (tilt) effect
	cam.setUp(Math.sin(time) * 1.5, 1, 0);

	upValue = cam.upX;
	t.setCamera(cam);

	drawEnvironment();
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

Get the current y component of the camera up vector.

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

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

function drawEnvironment() {
	t.push();
	t.char('.');
	t.charColor(60, 80, 120);
	for (let x = -20; x <= 20; x += 4) {
		t.line(x, 0, -20, x, 0, 20);
	}
	for (let z = -20; z <= 20; z += 4) {
		t.line(-20, 0, z, 20, 0, z);
	}
	t.pop();

	t.push();
	t.translate(0, 5, 0);
	t.char('#');
	t.charColor(200, 220, 255);
	t.box(4, 10, 4);
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	drawCenteredText('TextmodeCamera.upY', -8, [240, 245, 255]);
	drawCenteredText('upY: ' + upValue.toFixed(2), 6, [120, 255, 180]);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.03;
	// Looking from +X, tilted down slightly
	const cam = t.createCamera().setPosition(40, 10, 0).lookAt(0, 0, 0);

	// Oscillating the Y component while keeping a fixed Z component
	// creates a roll effect from this side-on perspective.
	cam.setUp(0, Math.sin(time) * 1.5, 1);

	upValue = cam.upY;
	t.setCamera(cam);

	drawEnvironment();
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

Get the current z component of the camera up vector.

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

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

function drawEnvironment() {
	t.push();
	t.char('.');
	t.charColor(60, 80, 120);
	for (let x = -20; x <= 20; x += 4) {
		t.line(x, 0, -20, x, 0, 20);
	}
	for (let z = -20; z <= 20; z += 4) {
		t.line(-20, 0, z, 20, 0, z);
	}
	t.pop();

	t.push();
	t.translate(0, 5, 0);
	t.char('#');
	t.charColor(200, 220, 255);
	t.box(4, 10, 4);
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	drawCenteredText('TextmodeCamera.upZ', -8, [240, 245, 255]);
	drawCenteredText('upZ: ' + upValue.toFixed(2), 6, [120, 255, 180]);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.03;
	// Looking from +Y (top-down), offset slightly on Z to see depth
	const cam = t.createCamera().setPosition(0, 40, 10).lookAt(0, 0, 0);

	// Oscillating the Z component while keeping a fixed X component
	// creates a roll (twisting) effect from this top-down perspective.
	cam.setUp(1, 0, Math.sin(time) * 1.5);

	upValue = cam.upZ;
	t.setCamera(cam);

	drawEnvironment();
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

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.setup(() => {
	t.perspective(58, 0.1, 4096);
});

t.draw(() => {
	t.background(6, 10, 22);

	const original = t.createCamera().setPosition(-10, 5, 20).lookAt(0, 0, 0);
	const clone = original.copy().setPosition(10, 5, 20);

	const active = Math.floor(t.frameCount / 120) % 2 === 0 ? original : clone;
	t.setCamera(active);

	for (let i = 0; i < 3; i++) {
		t.push();
		t.translate((i - 1) * 8, 0, -i * 6);
		t.char(['A', 'B', 'C'][i]);
		t.charColor(120 + i * 40, 180, 255);
		t.ellipse(4, 3);
		t.pop();
	}

	t.resetCamera();

	drawCenteredText('TextmodeCamera.copy', -8, [240, 245, 255]);
	drawCenteredText('original: ' + original.eyeX + ', ' + original.eyeY + ', ' + original.eyeZ, 6, [180, 200, 220]);
	drawCenteredText('clone: ' + clone.eyeX + ', ' + clone.eyeY + ', ' + clone.eyeZ, 10, [80, 255, 140]);
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
let targetX = 0;
let targetY = 0;
let targetZ = 0;

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	drawCenteredText('TextmodeCamera.lookAt', -8, [240, 245, 255]);
	drawCenteredText(
		'target: ' + targetX.toFixed(1) + ', ' + targetY.toFixed(1) + ', ' + targetZ.toFixed(1),
		6,
		[180, 200, 220]
	);
});

t.setup(() => {
	t.perspective(58, 0.1, 4096);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;
	targetX = Math.cos(time) * 8;
	targetY = Math.sin(time * 0.7) * 5;
	targetZ = Math.sin(time) * 8;

	const cam = t.createCamera().setPosition(0, 10, 30).lookAt(targetX, targetY, targetZ);
	t.setCamera(cam);

	t.char('+');
	t.charColor(120, 180, 255);
	t.line(-10, 0, 10, 0);
	t.line(0, -5, 0, 5);
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
let eyeX = 0;
let eyeY = 0;
let eyeZ = 0;

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	drawCenteredText('TextmodeCamera.move', -8, [240, 245, 255]);
	drawCenteredText('eye: ' + eyeX.toFixed(1) + ', ' + eyeY.toFixed(1) + ', ' + eyeZ.toFixed(1), 6, [180, 200, 220]);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;
	const cam = t.createCamera().setPosition(0, 6, 30).lookAt(0, 6, 0);

	cam.move(Math.sin(time) * 12 - eyeX, 0, 0);

	eyeX = cam.eyeX;
	eyeY = cam.eyeY;
	eyeZ = cam.eyeZ;

	t.setCamera(cam);

	t.push();
	t.translate(0, 6, 0);
	t.char('+');
	t.charColor(120, 180, 255);
	t.line(-10, 0, 10, 0);
	t.line(0, -5, 0, 5);
	t.pop();
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
let posX = 0;
let posY = 0;
let posZ = 0;

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	drawCenteredText('TextmodeCamera.setPosition', -8, [240, 245, 255]);
	drawCenteredText('pos: ' + posX.toFixed(1) + ', ' + posY.toFixed(1) + ', ' + posZ.toFixed(1), 6, [180, 200, 220]);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;
	posX = Math.cos(time) * 20;
	posY = 8;
	posZ = Math.sin(time) * 20;

	const cam = t.createCamera().setPosition(posX, posY, posZ).lookAt(0, 0, 0);
	t.setCamera(cam);

	t.push();
	t.char('+');
	t.charColor(120, 180, 255);
	t.line(-10, 0, 10, 0);
	t.line(0, -5, 0, 5);
	t.pop();
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
let upX = 0;
let upY = 1;
let upZ = 0;

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	drawCenteredText('TextmodeCamera.setUp', -8, [240, 245, 255]);
	drawCenteredText('up: ' + upX.toFixed(2) + ', ' + upY.toFixed(2) + ', ' + upZ.toFixed(2), 6, [180, 200, 220]);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;
	const cam = t.createCamera().setPosition(0, 0, 30).lookAt(0, 0, 0);

	cam.setUp(Math.sin(time) * 0.8, 1, Math.cos(time) * 0.6);

	upX = cam.upX;
	upY = cam.upY;
	upZ = cam.upZ;

	t.setCamera(cam);

	t.push();
	t.char('+');
	t.charColor(120, 180, 255);
	t.line(-10, 0, 10, 0);
	t.line(0, -5, 0, 5);
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
