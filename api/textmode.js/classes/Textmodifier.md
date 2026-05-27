---
layout: doc
editLink: true
title: Textmodifier
description: The main textmode.js drawing context.
category: Classes
api: true
kind: Class
lastModified: 2026-05-27
hasConstructor: false
---

[textmode.js](../index.md) / Textmodifier

# Class: Textmodifier

The main `textmode.js` drawing context.

A Textmodifier manages a canvas, renderer, layers, fonts, media sources, input,
animation, and the p5-style drawing API. When no canvas is supplied, it creates
one; when a canvas is supplied, it renders into or over that element depending
on the chosen options.

## Properties

### gamepads

```ts
readonly gamepads: readonly TextmodeGamepadSnapshot[];
```

Currently connected gamepads as a compact readonly list.

The returned array is sorted by browser `Gamepad.index`, but unlike the browser API
it does not contain sparse `null` holes for disconnected slots. Use
[Textmodifier.gamepad](#gamepad) when you need to resolve a specific browser slot index.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(4, 6, 12);
	const count = Math.max(1, t.gamepads.length);
	for (let i = 0; i < 16; i++) {
		t.push();
		const angle = (i / 16) * Math.PI * 2 + t.frameCount * 0.03;
		t.translate(Math.cos(angle) * (6 + count), Math.sin(angle) * 4);
		t.char(t.gamepads.length ? '@' : '.');
		t.charColor(80 + i * 8, 180, 255);
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

	drawText('TEXTMODIFIER.GAMEPADS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: GAMEPAD INPUT', x, y++, 100, 220, 255);
	drawText('Works with browser pads.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`PADS: ${t.gamepads.length}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### lastKeyPressed

```ts
readonly lastKeyPressed: string | null;
```

Last key pressed, or `null` before any key press.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	const key = t.lastKeyPressed || '?';
	t.char(key[0] || '?');
	t.charColor(255, 210, 120);
	t.rect(8, 4);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.LASTKEYPRESSED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: LAST KEY DOWN', x, y++, 100, 220, 255);
	drawText('Stores latest pressed key.', x, y++, 140, 160, 190);
	drawText('Value persists until next press.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('LAST: ' + String(t.lastKeyPressed || 'NONE').slice(0, 20), x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### lastKeyReleased

```ts
readonly lastKeyReleased: string | null;
```

Last key released, or `null` before any key release.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	const key = t.lastKeyReleased || '?';
	t.char(key[0] || '?');
	t.charColor(140, 220, 255);
	t.rect(8, 4);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.LASTKEYRELEASED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: LAST KEY UP', x, y++, 100, 220, 255);
	drawText('Stores latest released key.', x, y++, 140, 160, 190);
	drawText('Value persists until next up.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('LAST: ' + String(t.lastKeyReleased || 'NONE').slice(0, 20), x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### modifierState

```ts
readonly modifierState: object;
```

Current modifier key state.

| Name | Type | Description |
| ------ | ------ | ------ |
| `alt` | `boolean` | Whether the Alt key is currently pressed |
| `ctrl` | `boolean` | Whether the Ctrl key is currently pressed |
| `meta` | `boolean` | Whether the Meta key *(Command on Mac, Windows key on Windows)* is currently pressed |
| `shift` | `boolean` | Whether the Shift key is currently pressed |

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let active = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	const m = t.modifierState;
	active = [m.shift, m.ctrl, m.alt, m.meta].filter(Boolean).length;
	['SHIFT', 'CTRL', 'ALT', 'META'].forEach((name, i) => {
		const on = [m.shift, m.ctrl, m.alt, m.meta][i];
		t.push();
		t.translate((i - 1.5) * 7, 0);
		t.char(on ? '#' : '.');
		t.charColor(on ? 140 : 80, on ? 255 : 90, 180);
		t.rect(5, 3);
		t.pop();
	});
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.MODIFIERSTATE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: MODIFIER KEYS', x, y++, 100, 220, 255);
	drawText('Tracks Shift/Ctrl/Alt/Meta.', x, y++, 140, 160, 190);
	drawText('Hold keys to light panels.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`ACTIVE: ${active}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### mouse

```ts
readonly mouse: GridPosition;
```

Current mouse position in center-based grid coordinates.

Returns the mouse position as grid cell coordinates where `(0, 0)` is the center cell.
This matches the drawing coordinate system, so coordinates can be used directly with `translate()`.

If the mouse is outside the grid or the instance is not ready,
it returns `{ x: Number.NEGATIVE_INFINITY, y: Number.NEGATIVE_INFINITY }`.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let mx = 0;
let my = 0;
let inside = false;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	mx = t.mouse.x;
	my = t.mouse.y;
	inside = mx !== Number.NEGATIVE_INFINITY;
	t.charColor(50, 60, 90);
	t.char('.');
	t.line(-18, 0, 18, 0);
	t.line(0, -10, 0, 10);
	if (inside) {
		t.push();
		t.translate(mx, my);
		t.char('+');
		t.charColor(255, 210, 120);
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
	drawText('TEXTMODIFIER.MOUSE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: POINTER POSITION', x, y++, 100, 220, 255);
	drawText('Reads current mouse grid cell.', x, y++, 140, 160, 190);
	drawText('Outside canvas returns infinity.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(inside ? 'INSIDE: TRUE' : 'INSIDE: FALSE', x, y++, 140, 255, 180);
	drawText(`X: ${mx}`, x, y++, 180, 200, 220);
	drawText(`Y: ${my}`, x, y++, 180, 200, 220);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### mouseIsPressed

```ts
readonly mouseIsPressed: boolean;
```

Whether a mouse button is currently held down.

This value stays `true` after a press begins on the canvas and returns to `false` when the
button is released, including releases that occur outside the canvas after the interaction
starts. Use it inside `draw()` for polling-style interactions.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let pressed = false;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	pressed = t.mouseIsPressed;
	if (pressed && t.mouse.x !== Number.NEGATIVE_INFINITY) {
		t.translate(t.mouse.x, t.mouse.y);
	}
	t.char(pressed ? '@' : '.');
	t.charColor(pressed ? 140 : 80, pressed ? 255 : 90, pressed ? 180 : 100);
	t.rect(8, 4);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.MOUSEISPRESSED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: BUTTON STATE', x, y++, 100, 220, 255);
	drawText('True while mouse is held.', x, y++, 140, 160, 190);
	drawText('Shape follows held pointer.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(pressed ? 'PRESSED: TRUE' : 'PRESSED: FALSE', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### movedX

```ts
readonly movedX: number;
```

Horizontal mouse movement accumulated since the previous rendered frame.

This is especially useful while pointer lock is active, where absolute mouse coordinates
stop being meaningful and relative movement becomes the primary input signal.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let cx = 0;
let cy = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.mouseClicked(() => {
	if (document.pointerLockElement === t.canvas) t.exitPointerLock();
	else t.requestPointerLock();
});

t.draw(() => {
	t.background(6, 10, 22);
	const locked = document.pointerLockElement === t.canvas;
	if (locked) {
		cx += t.movedX * 0.08;
		cy += t.movedY * 0.08;
	}
	cx = Math.max(-20, Math.min(20, cx));
	cy = Math.max(-10, Math.min(10, cy));
	t.push();
	t.translate(cx, cy);
	t.char(locked ? '@' : '+');
	t.charColor(locked ? 140 : 255, locked ? 255 : 210, 180);
	t.point();
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.REQUESTPOINTERLOCK', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: LOCK POINTER', x, y++, 100, 220, 255);
	drawText('Click toggles pointer lock.', x, y++, 140, 160, 190);
	drawText('Movement uses movedX/movedY.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(document.pointerLockElement === t.canvas ? 'LOCKED: TRUE' : 'LOCKED: FALSE', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### movedY

```ts
readonly movedY: number;
```

Vertical mouse movement accumulated since the previous rendered frame.

This is especially useful while pointer lock is active, where absolute mouse coordinates
stop being meaningful and relative movement becomes the primary input signal.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let cx = 0;
let cy = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.mouseClicked(() => {
	if (document.pointerLockElement === t.canvas) t.exitPointerLock();
	else t.requestPointerLock();
});

t.draw(() => {
	t.background(6, 10, 22);
	const locked = document.pointerLockElement === t.canvas;
	if (locked) {
		cx += t.movedX * 0.08;
		cy += t.movedY * 0.08;
	}
	cx = Math.max(-20, Math.min(20, cx));
	cy = Math.max(-10, Math.min(10, cy));
	t.push();
	t.translate(cx, cy);
	t.char(locked ? '@' : '+');
	t.charColor(locked ? 140 : 255, locked ? 255 : 210, 180);
	t.point();
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.REQUESTPOINTERLOCK', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: LOCK POINTER', x, y++, 100, 220, 255);
	drawText('Click toggles pointer lock.', x, y++, 140, 160, 190);
	drawText('Movement uses movedX/movedY.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(document.pointerLockElement === t.canvas ? 'LOCKED: TRUE' : 'LOCKED: FALSE', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### pmouse

```ts
readonly pmouse: GridPosition;
```

Mouse position from the previous rendered frame.

Unlike `previousPosition` in mouse event callbacks, this value is updated exactly once per
rendered frame. Use it inside `draw()` to measure frame-to-frame mouse motion or draw trails.

If no previous frame position is available yet, it returns
`{ x: Number.NEGATIVE_INFINITY, y: Number.NEGATIVE_INFINITY }`.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let px = 0;
let py = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	px = t.pmouse.x;
	py = t.pmouse.y;
	if (t.mouse.x !== Number.NEGATIVE_INFINITY) {
		t.charColor(60, 80, 120);
		t.char('.');
		t.line(px, py, t.mouse.x, t.mouse.y);
		t.push();
		t.translate(t.mouse.x, t.mouse.y);
		t.char('@');
		t.charColor(255, 210, 120);
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
	drawText('TEXTMODIFIER.PMOUSE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: PREVIOUS MOUSE', x, y++, 100, 220, 255);
	drawText('Draws a trail from last point.', x, y++, 140, 160, 190);
	drawText('Updates whenever pointer moves.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`PX: ${px}`, x, y++, 180, 200, 220);
	drawText(`PY: ${py}`, x, y++, 180, 200, 220);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### pressedKeys

```ts
readonly pressedKeys: string[];
```

Keys currently being held down.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	const keys = Array.from(t.pressedKeys);
	keys.forEach((key, index) => {
		t.push();
		t.translate(index * 2 - keys.length, 0);
		t.char(String(key)[0] || '?');
		t.charColor(255, 210, 120);
		t.point();
		t.pop();
	});
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.PRESSEDKEYS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: ALL HELD KEYS', x, y++, 100, 220, 255);
	drawText('Set lists currently held keys.', x, y++, 140, 160, 190);
	drawText('Each key renders in center.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`COUNT: ${t.pressedKeys.size}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### touches

```ts
readonly touches: TouchPosition[];
```

Currently active touches in grid coordinates.

Returns a copy of each touch, including grid position, client coordinates, and pressure when
available. Use this inside a draw loop to react to active multi-touch scenarios.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let points = [];

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	points = Array.from(t.touches);
	if (points.length === 0 && t.mouseIsPressed) points = [t.mouse];
	for (let i = 0; i < points.length; i++) {
		const p = points[i];
		t.push();
		t.translate(p.x, p.y);
		t.char(String(i));
		t.charColor(255, 210, 120);
		t.point();
		t.pop();
		if (i > 0) {
			t.charColor(80, 120, 180);
			t.line(points[i - 1].x, points[i - 1].y, p.x, p.y);
		}
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.TOUCHES', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: ACTIVE TOUCH LIST', x, y++, 100, 220, 255);
	drawText('Shows live touch points.', x, y++, 140, 160, 190);
	drawText('Mouse drag acts as fallback.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`TOUCHES: ${points.length}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Accessors

### canvas

#### Get Signature

```ts
get canvas(): HTMLCanvasElement;
```

Canvas containing the rendered output.

##### Returns

`HTMLCanvasElement`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
});

const labelLayer = t.layers.add();

t.canvas.title = 'Textmodifier.canvas';
t.canvas.dataset.example = 'canvas';
t.canvas.style.background = '#060713';
t.canvas.style.outlineOffset = '-4px';

function updateCanvasElement() {
	const hue = Math.floor((t.frameCount * 2) % 360);
	t.canvas.style.outline = `3px solid hsl(${hue}, 90%, 62%)`;
	t.canvas.style.boxShadow = `0 0 24px hsla(${hue}, 90%, 62%, 0.28)`;
}

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	updateCanvasElement();
	t.background(6, 8, 20);

	const cols = Math.floor(t.grid.cols / 2);
	const rows = Math.floor(t.grid.rows / 2);
	t.charColor(255, 190, 80);
	for (let x = -cols; x <= cols; x += 4) {
		t.push();
		t.translate(x, -rows + 1);
		t.char('=');
		t.point();
		t.translate(0, rows * 2 - 2);
		t.point();
		t.pop();
	}
	for (let y = -rows + 1; y < rows; y += 2) {
		t.push();
		t.translate(-cols + 1, y);
		t.char('|');
		t.point();
		t.translate(cols * 2 - 2, 0);
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
	const size = `${t.canvas.width}x${t.canvas.height}`;
	const title = t.canvas.title;

	drawText('TEXTMODIFIER.CANVAS', x, y++, 255, 190, 80);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: DOM CANVAS ACCESS', x, y++, 100, 220, 255);
	drawText('The getter returns the element.', x, y++, 140, 160, 190);
	drawText('CSS and metadata update live.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`SIZE: ${size}`, x, y++, 140, 190, 255);
	drawText(`TITLE: ${title}`, x, y++, 150, 240, 170);
	drawText('DATASET: canvas', x, y++, 150, 240, 170);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### conversions

#### Get Signature

```ts
get conversions(): TextmodeConversionManager;
```

Access the conversion manager for this Textmodifier instance.

Use this to register custom conversion strategies that can be used
when converting images/videos/canvases into textmode representations.

##### Returns

[`TextmodeConversionManager`](../namespaces/conversion/classes/TextmodeConversionManager.md)

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let hasBrightness = false;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	hasBrightness = t.conversions.has('brightness');
	t.char(hasBrightness ? '@' : '.');
	t.charColor(140, 220, 255);
	t.rect(12, 5);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.CONVERSIONS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: IMAGE MAPPING', x, y++, 100, 220, 255);
	drawText('Conversion registry maps sources.', x, y++, 140, 160, 190);
	drawText('Built-ins can be queried.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(hasBrightness ? 'BRIGHTNESS: YES' : 'BRIGHTNESS: NO', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### errors

#### Get Signature

```ts
get errors(): ErrorLayerController;
```

Built-in fatal error layer controller.

##### Returns

[`ErrorLayerController`](../namespaces/errors/classes/ErrorLayerController.md)

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
});

let triggerError = false;
const labelLayer = t.layers.add();

window.addEventListener(
	'click',
	() => {
		triggerError = true;
	},
	{ once: true }
);

t.draw(() => {
	t.background(10, 12, 24);

	// Render a spinning neon cyan gear to demonstrate active draw loop
	const time = t.frameCount * 0.05;
	for (let i = 0; i < 8; i++) {
		const angle = time + (i / 8) * Math.PI * 2;
		t.push();
		t.translate(Math.cos(angle) * 8, Math.sin(angle) * 4);
		t.charColor(0, 180, 255);
		t.char('*');
		t.point();
		t.pop();
	}

	if (triggerError) {
		throw new Error('This example intentionally triggers the error layer.');
	}
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODIFIER.ERRORS', x, y++, 255, 100, 100);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: AUTOMATED RUNTIME ERROR CAPTURE', x, y++, 100, 220, 255);
	drawText('Shows fallback error overlay.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const state = Boolean(t.errors) ? 'TRUE' : 'FALSE';
	drawText(`ERRORS: ${state}`, x, y++, 140, 190, 255);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CLICK TO TRIGGER ERROR', x, y++, 255, 200, 100);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### filters

#### Get Signature

```ts
get filters(): TextmodeFilterManager;
```

Filter manager for this Textmodifier instance.

Use this to register custom filters that can be applied both globally
(via [filter](#filter)) and on individual layers (via [TextmodeLayer.filter](../namespaces/layering/classes/TextmodeLayer.md#filter)).

##### Returns

[`TextmodeFilterManager`](../namespaces/filters/classes/TextmodeFilterManager.md)

##### Examples

```ts
// Register a custom filter once
await t.filters.register('vignette', vignetteShader, {
    u_intensity: ['intensity', 0.5]
});

t.draw(() => {
    t.background(0);
    t.char('A');
    t.rect(10, 10);

    // Apply filter globally to final output
    t.filter('vignette', { intensity: 0.8 });

    // Or apply to a specific layer
    t.layers.base.filter('vignette', 0.5);
});
```

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let count = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	count = ['invert', 'grayscale', 'sepia'].filter((name) => t.filters.has(name)).length;
	t.char('#');
	t.charColor(140, 220, 255);
	t.rect(12, 5);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.FILTERS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: FILTER REGISTRY', x, y++, 100, 220, 255);
	drawText('Queries available filters.', x, y++, 140, 160, 190);
	drawText('Registry is shared by output.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`BUILTINS: ${count}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### font

#### Get Signature

```ts
get font(): 
  | TextmodeFont
  | TextmodeTileset;
```

Font or tileset used by the current drawing layer.

##### Returns

  \| [`TextmodeFont`](../namespaces/fonts/classes/TextmodeFont.md)
  \| [`TextmodeTileset`](../namespaces/fonts/classes/TextmodeTileset.md)

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let index = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	const chars = t.font.characters;
	index = Math.floor(t.frameCount / 6) % chars.length;
	t.char(chars[index].character);
	t.charColor(255, 210, 120);
	t.rect(8, 4);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.FONT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: ACTIVE FONT', x, y++, 100, 220, 255);
	drawText('Reads glyph metadata.', x, y++, 140, 160, 190);
	drawText('Current glyph cycles.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`GLYPHS: ${t.font.characters.length}`, x, y++, 140, 255, 180);
	drawText(`INDEX: ${index}`, x, y++, 180, 200, 220);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### frameCount

#### Get Signature

```ts
get frameCount(): number;
```

Current frame count.

The frame count starts at 0, but is incremented at the beginning of each draw cycle.
This means that inside the first call to `draw()`, `frameCount` is 1.

This value is useful for timing-based animations, patterns, and state changes.

##### Returns

`number`

Number of frames rendered since the sketch started.

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	t.push();
	t.translate(8, 2);
	t.rotateZ(t.frameCount * 2);
	t.char('#');
	t.charColor(140, 220, 255);
	t.rect(12, 2);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.FRAMECOUNT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: FRAME COUNTER', x, y++, 100, 220, 255);
	drawText('Counter increments each frame.', x, y++, 140, 160, 190);
	drawText('Rotation uses frameCount.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`FRAME: ${t.frameCount}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Set Signature

```ts
set frameCount(value): void;
```

Set the current frame count.

Modifying the frame count can be used to reset animations or jump to a specific
point in time-based patterns.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | New frame count value. |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.keyPressed((data) => {
	if (data.key === ' ') t.frameCount = 0;
});

t.draw(() => {
	t.background(6, 10, 22);
	const phase = (t.frameCount % 120) / 120;
	t.push();
	t.translate(-16 + phase * 32, 2);
	t.char('@');
	t.charColor(255, 210, 120);
	t.point();
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.FRAMECOUNT2', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: RESET COUNTER', x, y++, 100, 220, 255);
	drawText('Space rewinds animation.', x, y++, 140, 160, 190);
	drawText('frameCount is writable.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`FRAME: ${t.frameCount}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### grid

#### Get Signature

```ts
get grid(): TextmodeGrid | undefined;
```

Grid for the layer currently being drawn.

Outside a layer draw callback, this returns the base layer's grid.

If no grid is set (e.g., before user setup()), returns `undefined`.

##### Returns

[`TextmodeGrid`](TextmodeGrid.md) \| `undefined`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	t.charColor(50, 70, 100);
	t.char('.');
	for (let x = -20; x <= 20; x += 4) t.line(x, -10, x, 10);
	for (let y = -10; y <= 10; y += 2) t.line(-20, y, 20, y);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.GRID', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: GRID METRICS', x, y++, 100, 220, 255);
	drawText('Exposes rows, cols, and cells.', x, y++, 140, 160, 190);
	drawText('Grid changes with window size.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`COLS: ${t.grid.cols}`, x, y++, 140, 255, 180);
	drawText(`ROWS: ${t.grid.rows}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### height

#### Get Signature

```ts
get height(): number;
```

Canvas height in pixels.

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

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	t.char('|');
	t.charColor(140, 220, 255);
	t.rect(1, t.grid.rows);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.HEIGHT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: CANVAS HEIGHT', x, y++, 100, 220, 255);
	drawText('Returns pixel height.', x, y++, 140, 160, 190);
	drawText('Line spans grid rows.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`HEIGHT: ${t.height}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### isDisposed

#### Get Signature

```ts
get isDisposed(): boolean;
```

Whether this instance has been destroyed.

##### Returns

`boolean`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.mouseClicked(() => {
	if (!t.isDisposed) t.destroy();
});

t.draw(() => {
	t.background(6, 10, 22);
	t.char(t.isDisposed ? 'X' : '#');
	t.charColor(t.isDisposed ? 255 : 140, t.isDisposed ? 120 : 220, 180);
	t.rect(12, 5);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.ISDISPOSED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: DISPOSED FLAG', x, y++, 100, 220, 255);
	drawText('Click calls destroy().', x, y++, 140, 160, 190);
	drawText('Flag reports lifecycle state.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(t.isDisposed ? 'DISPOSED: YES' : 'DISPOSED: NO', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### isRenderingFrame

#### Get Signature

```ts
get isRenderingFrame(): boolean;
```

Check if rendering is currently in progress for this frame.

##### Returns

`boolean`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let outsideFrame = false;
setInterval(() => {
	outsideFrame = t.isRenderingFrame;
}, 120);

t.draw(() => {
	t.background(6, 10, 22);
	t.char(t.isRenderingFrame ? '1' : '0');
	t.charColor(120, 220, 255);
	t.rect(12, 8);
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODIFIER.ISRENDERINGFRAME', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: FRAME GUARD FLAG', x, y++, 100, 220, 255);
	drawText('Compact API demonstration.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const inside = t.isRenderingFrame ? 'TRUE' : 'FALSE';
	const outside = outsideFrame ? 'TRUE' : 'FALSE';
	drawText(`INSIDE: ${inside}`, x, y++, 140, 255, 180);
	drawText(`OUTSIDE: ${outside}`, x, y++, 180, 200, 220);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### layers

#### Get Signature

```ts
get layers(): TextmodeLayerManager;
```

Layer manager for this Textmodifier instance.

Use this to create and manage multiple layers within the textmode rendering context.
Each layer has its own grid, font, draw callback, and filters.

##### Returns

[`TextmodeLayerManager`](../namespaces/layering/classes/TextmodeLayerManager.md)

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

const topLayer = t.layers.add({ blendMode: 'additive' });

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

topLayer.draw(() => {
	t.clear();
	t.char('+');
	t.charColor(255, 210, 120);
	t.rect(8, 4);
});

t.draw(() => {
	t.background(6, 10, 22);
	t.char('#');
	t.charColor(140, 220, 255);
	t.rect(12, 5);
	topLayer.offset(Math.sin(t.frameCount * 0.03) * 30, 0);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.LAYERS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: LAYER MANAGER', x, y++, 100, 220, 255);
	drawText('Accesses the layer stack.', x, y++, 140, 160, 190);
	drawText('Overlay layer moves in pixels.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`LAYERS: ${t.layers.all.length}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### loading

#### Get Signature

```ts
get loading(): LoadingLayerController;
```

Built-in loading layer controller.

##### Returns

[`LoadingLayerController`](../namespaces/loading/classes/LoadingLayerController.md)

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
	loadingScreen: { transitionDuration: 300 },
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.setup(async () => {
	t.loading.draw((ctx) => {
		const tm = ctx.textmodifier;
		tm.background(8, 10, 18);
		tm.char('#');
		tm.charColor(100, 220, 255);
		tm.rect(16, 4);
	});
	await new Promise((resolve) => setTimeout(resolve, 400));
});

t.draw(() => {
	t.background(6, 10, 22);
	t.char('@');
	t.charColor(140, 255, 180);
	t.rect(12, 5);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.LOADING', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: LOADING SCREEN', x, y++, 100, 220, 255);
	drawText('Custom loading draw callback.', x, y++, 140, 160, 190);
	drawText('Setup waits briefly.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('STATUS: READY', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### millis

#### Get Signature

```ts
get millis(): number;
```

Milliseconds since the sketch started running.

`millis` keeps track of how long a sketch has been running in milliseconds
(thousandths of a second). This information is often helpful for timing events
and animations.

Time tracking begins before the code in [setup](#setup) runs. If loading screen is
enabled, `millis` begins tracking as soon as the loading screen starts.

This property is connected to [secs](#secs) - setting one will affect the other.

##### Returns

`number`

Milliseconds since the sketch started.

##### Examples

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
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

#### Set Signature

```ts
set millis(value): void;
```

Set elapsed milliseconds by adjusting the internal start time.

This allows seeking/scrubbing in animations. Setting `millis` will also
affect the value returned by [secs](#secs) since they are connected.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | New elapsed time in milliseconds. |

##### Returns

`void`

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
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

***

### overlay

#### Get Signature

```ts
get overlay(): 
  | TextmodeImage
  | undefined;
```

Overlay source image for the target canvas or video, when overlay mode is enabled.

##### Returns

  \| [`TextmodeImage`](../namespaces/media/classes/TextmodeImage.md)
  \| `undefined`

##### Example

```javascript
const sourceCanvas = document.createElement('canvas');
const sourceCtx = sourceCanvas.getContext('2d');

document.body.style.margin = '0';
document.body.style.overflow = 'hidden';
sourceCanvas.style.position = 'fixed';
sourceCanvas.style.inset = '0';
sourceCanvas.style.width = '100vw';
sourceCanvas.style.height = '100vh';
sourceCanvas.style.display = 'block';
document.body.appendChild(sourceCanvas);

const t = textmode.create({
	canvas: sourceCanvas,
	overlay: true,
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function resizeSourceCanvas() {
	sourceCanvas.width = window.innerWidth;
	sourceCanvas.height = window.innerHeight;
}

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

function paintSourceCanvas() {
	const pulse = t.frameCount * 0.035;
	sourceCtx.fillStyle = '#050816';
	sourceCtx.fillRect(0, 0, sourceCanvas.width, sourceCanvas.height);
	sourceCtx.fillStyle = '#38bdf8';
	sourceCtx.fillRect(sourceCanvas.width * 0.24 + Math.sin(pulse) * 30, sourceCanvas.height * 0.42, 128, 82);
	sourceCtx.fillStyle = '#f59e0b';
	sourceCtx.beginPath();
	sourceCtx.arc(sourceCanvas.width * 0.68, sourceCanvas.height * 0.5, 54, 0, Math.PI * 2);
	sourceCtx.fill();
	sourceCtx.fillStyle = '#f8fafc';
	sourceCtx.fillRect(sourceCanvas.width * 0.33, sourceCanvas.height * 0.68, 150, 28);
}

resizeSourceCanvas();

t.setup(() => {
	if (!t.overlay) return;
	t.overlay.characters(' .:-=+*#%@').charColorMode('sampled').cellColorMode('fixed').cellColor('#050816');
});

t.draw(() => {
	paintSourceCanvas();
	t.clear();
	if (!t.overlay) return;

	t.image(t.overlay, t.grid.cols, t.grid.rows);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODIFIER.OVERLAY', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TARGET CANVAS SOURCE', x, y++, 100, 220, 255);
	drawText('overlay samples sourceCanvas.', x, y++, 140, 160, 190);
	drawText('Textmode renders above it.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const state = t.overlay ? 'READY' : 'WAIT';
	drawText(`OVERLAY: ${state}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	resizeSourceCanvas();
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### secs

#### Get Signature

```ts
get secs(): number;
```

Seconds since the sketch started running.

`secs` is a convenience property that returns the elapsed time in seconds
instead of milliseconds. Equivalent to `millis / 1000`.

Time tracking begins before the code in [setup](#setup) runs. If loading screen is
enabled, `secs` begins tracking as soon as the loading screen starts.

This property is connected to [millis](#millis) - setting one will affect the other.

##### Returns

`number`

Seconds since the sketch started.

##### Examples

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
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

#### Set Signature

```ts
set secs(value): void;
```

Set elapsed seconds by adjusting the internal start time.

This allows seeking/scrubbing in animations. Setting `secs` will also
affect the value returned by [millis](#millis) since they are connected.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | New elapsed time in seconds. |

##### Returns

`void`

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
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

***

### width

#### Get Signature

```ts
get width(): number;
```

Canvas width in pixels.

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

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	t.char('=');
	t.charColor(140, 220, 255);
	t.rect(t.grid.cols, 1);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.WIDTH', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: CANVAS WIDTH', x, y++, 100, 220, 255);
	drawText('Returns pixel width.', x, y++, 140, 160, 190);
	drawText('Line spans grid columns.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`WIDTH: ${t.width}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Methods

### ambientLight()

#### Call Signature

```ts
ambientLight(gray): void;
```

Add an ambient light using a grayscale value.

Ambient light shines evenly from all directions.
Multiple calls are additive, so colors accumulate.
Ambient lights are frame-scoped and reset each layer draw callback.
Lighting uses RGB only, so any provided alpha value is ignored.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gray` | `number` | Grayscale value (0-255) |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let channel = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 8, 18);
	const time = t.frameCount * 0.025;
	channel = 127.5 + 127.5 * Math.sin(time);
	t.perspective(58, 0.1, 4096);
	t.camera(16, -10, 42, 0, 0, 0);
	t.ambientLight(channel, channel, channel, channel);
	t.rotateY(time * 40);
	t.char('#');
	t.charColor(255, 255, 255);
	t.sphere(7);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.AMBIENTLIGHT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: AMBIENT LIGHT', x, y++, 100, 220, 255);
	drawText('Lighting changes surface shade.', x, y++, 140, 160, 190);
	drawText('Scene keeps focus on one sphere.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const level = Math.round(channel);
	drawText(`RGBA:${level},${level},${level},${level}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Call Signature

```ts
ambientLight(gray, alpha): void;
```

Add an ambient light using a grayscale value and alpha.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gray` | `number` | Grayscale value (0-255) |
| `alpha` | `number` | Alpha value (0-255) |

##### Returns

`void`

#### Call Signature

```ts
ambientLight(
   v1, 
   v2, 
   v3): void;
```

Add an ambient light using RGB components.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v1` | `number` | Red component (0-255) |
| `v2` | `number` | Green component (0-255) |
| `v3` | `number` | Blue component (0-255) |

##### Returns

`void`

#### Call Signature

```ts
ambientLight(
   v1, 
   v2, 
   v3, 
   alpha): void;
```

Add an ambient light using RGB components and alpha.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v1` | `number` | Red component (0-255) |
| `v2` | `number` | Green component (0-255) |
| `v3` | `number` | Blue component (0-255) |
| `alpha` | `number` | Alpha value (0-255) |

##### Returns

`void`

#### Call Signature

```ts
ambientLight(color): void;
```

Add an ambient light using a color value.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `color` | `LightColorInput` | Color value (CSS string, TextmodeColor, or RGB(A) array) |

##### Returns

`void`

***

### applyMatrix()

#### Call Signature

```ts
applyMatrix(matrix): void;
```

Multiply the current model transform by a custom 4x4 matrix.

Current implementation supports affine TRS-style matrices (no perspective/shear).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `matrix` | `ArrayLike`\<`number`\> |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	const time = t.frameCount * 0.03;
	const c = Math.cos(time);
	const s = Math.sin(time);
	t.push();
	t.translate(8, 1);
	t.applyMatrix(c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	t.char('#');
	t.charColor(140, 220, 255);
	t.rect(12, 4);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.APPLYMATRIX', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: CUSTOM MATRIX', x, y++, 100, 220, 255);
	drawText('Applies a 4x4 transform.', x, y++, 140, 160, 190);
	drawText('Matrix rotates the rectangle.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('API: t.applyMatrix(...)', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Call Signature

```ts
applyMatrix(
   m00, 
   m01, 
   m02, 
   m03, 
   m10, 
   m11, 
   m12, 
   m13, 
   m20, 
   m21, 
   m22, 
   m23, 
   m30, 
   m31, 
   m32, 
   m33): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `m00` | `number` |
| `m01` | `number` |
| `m02` | `number` |
| `m03` | `number` |
| `m10` | `number` |
| `m11` | `number` |
| `m12` | `number` |
| `m13` | `number` |
| `m20` | `number` |
| `m21` | `number` |
| `m22` | `number` |
| `m23` | `number` |
| `m30` | `number` |
| `m31` | `number` |
| `m32` | `number` |
| `m33` | `number` |

##### Returns

`void`

***

### arc()

```ts
arc(
   width, 
   height, 
   startAngle, 
   endAngle): void;
```

Draw an arc with the current settings.
Position is controlled via [translate](#translate), [push](#push), and [pop](#pop).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `width` | `number` | Arc width in grid cells. |
| `height` | `number` | Arc height in grid cells. |
| `startAngle` | `number` | Starting angle in degrees. |
| `endAngle` | `number` | Ending angle in degrees. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let startDeg = 0;
let endDeg = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	const time = t.frameCount * 0.03;
	startDeg = (time * 60) % 360;
	endDeg = startDeg + 110 + Math.sin(time) * 35;
	t.push();
	t.translate(8, 1);
	t.char('#');
	t.charColor(140, 180, 255);
	t.arc(22, 12, startDeg, endDeg);
	t.charColor(60, 70, 100);
	t.line(0, 0, Math.cos((startDeg * Math.PI) / 180) * 11, Math.sin((startDeg * Math.PI) / 180) * 6);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.ARC', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: PARTIAL ELLIPSE', x, y++, 100, 220, 255);
	drawText('Animated start and end angles.', x, y++, 140, 160, 190);
	drawText('Guide line marks the start.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`START: ${startDeg.toFixed(1)}`, x, y++, 255, 210, 120);
	drawText(`END: ${endDeg.toFixed(1)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### background()

#### Call Signature

```ts
background(): TextmodeColor;
```

Current canvas background color.

##### Returns

[`TextmodeColor`](TextmodeColor.md)

Current background color.

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
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

#### Call Signature

```ts
background(gray, alpha?): void;
```

Set the background color using a grayscale value.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gray` | `number` | Grayscale value (0-255) |
| `alpha?` | `number` | Optional alpha value (0-255) |

##### Returns

`void`

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
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

#### Call Signature

```ts
background(
   r, 
   g, 
   b, 
   a?): void;
```

Set the background color using RGB(A) values.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | `number` | Red component (0-255) |
| `g` | `number` | Green component (0-255) |
| `b` | `number` | Blue component (0-255) |
| `a?` | `number` | Optional alpha component (0-255) |

##### Returns

`void`

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
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

#### Call Signature

```ts
background(value): void;
```

Set the background color using a CSS string or TextmodeColor object.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| [`TextmodeColor`](TextmodeColor.md) | Hex string, `rgb()`/`rgba()` string, or an existing color object |

##### Returns

`void`

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
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

***

### bezierCurve()

```ts
bezierCurve(
   x1, 
   y1, 
   cp1x, 
   cp1y, 
   cp2x, 
   cp2y, 
   x2, 
   y2): void;
```

Draw a smooth cubic Bezier curve between two points.
The curve thickness is controlled by the current [lineWeight](#lineweight) setting.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x1` | `number` | Start point X coordinate in grid cells. |
| `y1` | `number` | Start point Y coordinate in grid cells. |
| `cp1x` | `number` | First control point X coordinate in grid cells. |
| `cp1y` | `number` | First control point Y coordinate in grid cells. |
| `cp2x` | `number` | Second control point X coordinate in grid cells. |
| `cp2y` | `number` | Second control point Y coordinate in grid cells. |
| `x2` | `number` | End point X coordinate in grid cells. |
| `y2` | `number` | End point Y coordinate in grid cells. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	const time = t.frameCount * 0.025;
	const cp1x = -8 + Math.sin(time) * 6;
	const cp1y = -7;
	const cp2x = 8 + Math.cos(time * 0.8) * 6;
	const cp2y = 7;
	t.push();
	t.translate(7, 1);
	t.charColor(60, 70, 100);
	t.char('.');
	t.line(-14, 0, cp1x, cp1y);
	t.line(14, 0, cp2x, cp2y);
	t.char('#');
	t.charColor(140, 220, 255);
	t.bezierCurve(-14, 0, cp1x, cp1y, cp2x, cp2y, 14, 0);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.BEZIERCURVE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: CUBIC CURVE', x, y++, 100, 220, 255);
	drawText('Two control points bend path.', x, y++, 140, 160, 190);
	drawText('Guide lines show handles.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('API: t.bezierCurve(...)', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### box()

```ts
box(
   width?, 
   height?, 
   depth?): void;
```

Draw a box mesh primitive.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `width?` | `number` | Width in grid cells (defaults to 50). |
| `height?` | `number` | Height in grid cells (defaults to width). |
| `depth?` | `number` | Depth in grid cells (defaults to height). |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let spin = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 8, 18);
	const time = t.frameCount * 0.025;
	spin = (time * 40) % 360;
	t.perspective(58, 0.1, 4096);
	t.camera(18, -10, 42, 0, 0, 0);
	t.ambientLight(24, 28, 38);
	t.pointLight([255, 210, 140], { x: 18, y: -18, z: 28 });
	t.push();
	t.translate(5, 1, 0);
	t.rotateY(spin);
	t.rotateX(18);
	t.char('#');
	t.charColor(140, 220, 255);
	t.cellColor(16, 24, 42);
	t.box(9, 7, 8);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.BOX', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: 3D BOX', x, y++, 100, 220, 255);
	drawText('Width, height, and depth vary.', x, y++, 140, 160, 190);
	drawText('Camera and light reveal depth.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`SPIN: ${spin.toFixed(1)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### camera()

```ts
camera(
   eyeX, 
   eyeY, 
   eyeZ, 
   targetX?, 
   targetY?, 
   targetZ?, 
   upX?, 
   upY?, 
   upZ?): void;
```

Set an explicit camera transform for subsequent draw calls.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eyeX` | `number` | Camera eye X position. |
| `eyeY` | `number` | Camera eye Y position. |
| `eyeZ` | `number` | Camera eye Z position. |
| `targetX?` | `number` | Look-at target X position. |
| `targetY?` | `number` | Look-at target Y position. |
| `targetZ?` | `number` | Look-at target Z position. |
| `upX?` | `number` | Camera up vector X component. |
| `upY?` | `number` | Camera up vector Y component. |
| `upZ?` | `number` | Camera up vector Z component. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let eyeX = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 8, 18);
	const time = t.frameCount * 0.025;
	eyeX = Math.sin(time) * 24;
	t.perspective(58, 0.1, 4096);
	t.camera(eyeX, 8, 42, 0, 0, 0);
	t.ambientLight(25, 28, 36);
	t.pointLight([255, 210, 140], { x: 20, y: -18, z: 28 });
	t.push();
	t.rotateY(time * 30);
	t.char('#');
	t.charColor(140, 220, 255);
	t.box(8, 8, 8);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.CAMERA', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SET VIEW CAMERA', x, y++, 100, 220, 255);
	drawText('Eye position moves left/right.', x, y++, 140, 160, 190);
	drawText('Target remains at origin.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`EYE X: ${eyeX.toFixed(1)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### cellColor()

#### Call Signature

```ts
cellColor(): TextmodeColor;
```

Current cell background color.

##### Returns

[`TextmodeColor`](TextmodeColor.md)

Current cell color.

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	value = Math.round(80 + 80 * Math.sin(t.frameCount * 0.04));
	t.char('#');
	t.cellColor(value, 50, 110);
	t.charColor(240, 245, 255);
	t.rect(10, 5);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.CELLCOLOR', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: CELL BACKGROUND', x, y++, 100, 220, 255);
	drawText('Sets the cell fill color.', x, y++, 140, 160, 190);
	drawText('The value pulses every frame.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`R: ${value}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Call Signature

```ts
cellColor(gray, alpha?): void;
```

Set the cell background color using a grayscale value.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gray` | `number` | Grayscale value (0-255) |
| `alpha?` | `number` | Optional alpha value (0-255) |

##### Returns

`void`

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	value = Math.round(80 + 80 * Math.sin(t.frameCount * 0.04));
	t.char('#');
	t.cellColor(value);
	t.charColor(240, 245, 255);
	t.rect(10, 5);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.CELLCOLOR2', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: GRAY CELL FILL', x, y++, 100, 220, 255);
	drawText('One number sets cell fill.', x, y++, 140, 160, 190);
	drawText('The value pulses every frame.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`GRAY: ${value}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Call Signature

```ts
cellColor(
   r, 
   g, 
   b, 
   a?): void;
```

Set the cell background color using RGB(A) values.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | `number` | Red component (0-255) |
| `g` | `number` | Green component (0-255) |
| `b` | `number` | Blue component (0-255) |
| `a?` | `number` | Optional alpha component (0-255) |

##### Returns

`void`

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	value = Math.round(80 + 80 * Math.sin(t.frameCount * 0.04));
	t.char('#');
	t.cellColor(value > 80 ? '#14385f' : '#301820');
	t.charColor(240, 245, 255);
	t.rect(10, 5);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.CELLCOLOR3', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: HEX CELL FILL', x, y++, 100, 220, 255);
	drawText('Hex strings color cell fill.', x, y++, 140, 160, 190);
	drawText('The value pulses every frame.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(value > 80 ? 'HEX: BLUE' : 'HEX: RED', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Call Signature

```ts
cellColor(value): void;
```

Set the cell background color using a CSS string or TextmodeColor object.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| [`TextmodeColor`](TextmodeColor.md) | Hex string, `rgb()`/`rgba()` string, or an existing color object |

##### Returns

`void`

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	value = Math.round(80 + 80 * Math.sin(t.frameCount * 0.04));
	t.char('#');
	const c = t.color(value, 40, 90);
	t.cellColor(c);
	t.charColor(240, 245, 255);
	t.rect(10, 5);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.CELLCOLOR4', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: CELL COLOR OBJECT', x, y++, 100, 220, 255);
	drawText('TextmodeColor can be reused.', x, y++, 140, 160, 190);
	drawText('The value pulses every frame.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`R: ${value}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### char()

#### Call Signature

```ts
char(): string;
```

Current character string used for drawing.

##### Returns

`string`

The active character string.

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

const glyphs = ['A', 'B', 'C', '#'];
let glyph = 'A';

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	glyph = glyphs[Math.floor(t.frameCount / 45) % glyphs.length];
	t.char(glyph);
	t.charColor(255, 210, 120);
	t.rect(8, 4);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.CHAR', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: ACTIVE GLYPH', x, y++, 100, 220, 255);
	drawText('Sets the glyph for drawing.', x, y++, 140, 160, 190);
	drawText('The selected glyph cycles.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CHAR: ' + glyph, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Call Signature

```ts
char(value): void;
```

Set the character used by subsequent drawing operations.
Accepts a single character string or a character index in the current font.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` | Character string or index in the current font. |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let index = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	index = Math.floor(t.frameCount / 5) % 128;
	t.char(index);
	t.charColor(255, 210, 120);
	t.rect(8, 4);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.CHAR2', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: GLYPH INDEX', x, y++, 100, 220, 255);
	drawText('Numeric indices select glyphs.', x, y++, 140, 160, 190);
	drawText('Index cycles through the font.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`INDEX: ${index}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### charColor()

#### Call Signature

```ts
charColor(): TextmodeColor;
```

Current character color.

##### Returns

[`TextmodeColor`](TextmodeColor.md)

Current character color.

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
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

#### Call Signature

```ts
charColor(gray, alpha?): void;
```

Set the character color using a grayscale value.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gray` | `number` | Grayscale value (0-255) |
| `alpha?` | `number` | Optional alpha value (0-255) |

##### Returns

`void`

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
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

#### Call Signature

```ts
charColor(
   r, 
   g, 
   b, 
   a?): void;
```

Set the character color using RGB(A) values.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | `number` | Red component (0-255) |
| `g` | `number` | Green component (0-255) |
| `b` | `number` | Blue component (0-255) |
| `a?` | `number` | Optional alpha component (0-255) |

##### Returns

`void`

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
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

#### Call Signature

```ts
charColor(value): void;
```

Set the character color using a CSS string or TextmodeColor object.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| [`TextmodeColor`](TextmodeColor.md) | Hex string, `rgb()`/`rgba()` string, or an existing color object |

##### Returns

`void`

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
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

***

### charRotation()

```ts
charRotation(degrees?): number | void;
```

Set the character rotation for subsequent drawing, or get the current angle.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `degrees?` | `number` | Rotation angle in degrees. |

#### Returns

`number` \| `void`

Current rotation angle in degrees when called without arguments.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let angle = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	angle = (t.frameCount * 2) % 360;
	for (let i = 0; i < 8; i++) {
		t.push();
		t.translate((i - 3.5) * 3, 0);
		t.charRotation(angle + i * 30);
		t.char('+');
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
	drawText('TEXTMODIFIER.CHARROTATION', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: ROTATE GLYPHS', x, y++, 100, 220, 255);
	drawText('Rotates characters in cells.', x, y++, 140, 160, 190);
	drawText('Transform matrix is unchanged.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`ANGLE: ${angle}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### clear()

```ts
clear(): void;
```

Clear the layer currently drawing to.

Used to clear the layer at the start of its drawing cycle.

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let clearEnabled = true;

t.mouseClicked(() => {
	clearEnabled = !clearEnabled;
	if (clearEnabled) t.clear();
});

t.draw(() => {
	if (clearEnabled) t.clear();
	const time = t.frameCount * 0.05;
	t.push();
	t.translate(Math.cos(time) * 15, Math.sin(time) * 6);
	t.charColor(255, 225, 140);
	t.char('#');
	t.rect(4, 2);
	t.pop();
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODIFIER.CLEAR', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: CLEAR LAYER BUFFER', x, y++, 100, 220, 255);
	drawText('Compact API demonstration.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const state = clearEnabled ? 'ON' : 'OFF';
	drawText(`CLEAR: ${state}`, x, y++, 140, 255, 180);
	drawText('CLICK TO TOGGLE', x, y++, 255, 225, 140);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### color()

#### Call Signature

```ts
color(gray, alpha?): TextmodeColor;
```

Create a reusable color object from a grayscale value.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gray` | `number` | Grayscale value (0-255) |
| `alpha?` | `number` | Optional alpha value (0-255) |

##### Returns

[`TextmodeColor`](TextmodeColor.md)

A TextmodeColor instance

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	value = Math.round(80 + 80 * Math.sin(t.frameCount * 0.04));
	t.char('#');
	const c = t.color(value, 180);
	t.charColor(c);
	t.rect(10, 5);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.COLOR', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: MAKE COLOR', x, y++, 100, 220, 255);
	drawText('Creates reusable gray color.', x, y++, 140, 160, 190);
	drawText('The value pulses every frame.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`VALUE: ${value}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Call Signature

```ts
color(
   r, 
   g, 
   b, 
   a?): TextmodeColor;
```

Create a reusable color object from RGB(A) values.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | `number` | Red component (0-255) |
| `g` | `number` | Green component (0-255) |
| `b` | `number` | Blue component (0-255) |
| `a?` | `number` | Optional alpha component (0-255) |

##### Returns

[`TextmodeColor`](TextmodeColor.md)

A TextmodeColor instance

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

const goldLayer = t.layers.add();
const cyan = t.color(100, 220, 255);
const gold = t.color(255, 225, 140, 150);

t.draw(() => {
	t.background(6, 10, 22);
	t.charColor(cyan);
	t.char('o');
	t.translate(Math.cos(t.frameCount * 0.03) * 10, 0);
	t.ellipse(12, 10);
});

goldLayer.draw(() => {
	t.clear();
	t.charColor(gold);
	t.char('#');
	t.rect(12, 8);
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODIFIER.COLOR2', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: RGBA COLOR OBJECT', x, y++, 100, 220, 255);
	drawText('Compact API demonstration.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('RGBA ALPHA: 150', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Call Signature

```ts
color(value): TextmodeColor;
```

Create a reusable color object from a CSS string or existing TextmodeColor.

Accepts hex strings (e.g. `'#FF0000'`) and `rgb()`/`rgba()` strings.
**Note:** Named CSS colors (e.g., `'red'`, `'blue'`) are **not** supported.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| [`TextmodeColor`](TextmodeColor.md) | Hex string, `rgb()`/`rgba()` string, or an existing color object |

##### Returns

[`TextmodeColor`](TextmodeColor.md)

A TextmodeColor instance

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	value = Math.round(80 + 80 * Math.sin(t.frameCount * 0.04));
	t.char('#');
	const c = t.color(value > 80 ? '#facc15' : '#38bdf8');
	t.charColor(c);
	t.rect(10, 5);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.COLOR3', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: HEX COLOR', x, y++, 100, 220, 255);
	drawText('Creates color from hex string.', x, y++, 140, 160, 190);
	drawText('The value pulses every frame.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(value > 80 ? 'HEX: GOLD' : 'HEX: CYAN', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### cone()

```ts
cone(radius?, height?): void;
```

Draw a cone mesh primitive.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `radius?` | `number` | Base radius in grid cells (defaults to 50). |
| `height?` | `number` | Height in grid cells (defaults to radius). |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let spin = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 8, 18);
	const time = t.frameCount * 0.025;
	spin = (time * 40) % 360;
	t.perspective(58, 0.1, 4096);
	t.camera(18, -10, 42, 0, 0, 0);
	t.ambientLight(24, 28, 38);
	t.pointLight([255, 210, 140], { x: 18, y: -18, z: 28 });
	t.push();
	t.translate(5, 1, 0);
	t.rotateY(spin);
	t.rotateX(18);
	t.char('#');
	t.charColor(140, 220, 255);
	t.cellColor(16, 24, 42);
	t.cone(5, 12);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.CONE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: 3D CONE', x, y++, 100, 220, 255);
	drawText('Radius and height define form.', x, y++, 140, 160, 190);
	drawText('Camera and light reveal depth.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`SPIN: ${spin.toFixed(1)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### createCamera()

```ts
createCamera(): TextmodeCamera;
```

Create and activate a camera initialized from the current render camera state.

Useful for workflows where camera properties are mutated over time and
reapplied via [setCamera](#setcamera).

#### Returns

[`TextmodeCamera`](TextmodeCamera.md)

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let camera;
let eyeX = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.setup(() => {
	t.perspective(58, 0.1, 4096);
	camera = t.createCamera();
});

t.draw(() => {
	t.background(6, 8, 18);
	const time = t.frameCount * 0.025;
	eyeX = Math.cos(time) * 28;
	camera.setPosition(eyeX, 10, 38).lookAt(0, 0, 0);
	t.setCamera(camera);
	t.ambientLight(25, 28, 36);
	t.pointLight([255, 210, 140], { x: 18, y: -16, z: 28 });
	t.rotateY(time * 25);
	t.char('@');
	t.charColor(140, 220, 255);
	t.sphere(6);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.CREATECAMERA', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: MUTABLE CAMERA', x, y++, 100, 220, 255);
	drawText('createCamera returns an object.', x, y++, 140, 160, 190);
	drawText('setCamera applies its state.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`EYE X: ${eyeX.toFixed(1)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### createFilterShader()

```ts
createFilterShader(fragmentSource): Promise<TextmodeShader>;
```

Create a custom filter shader from fragment shader source or a file path.
The fragment shader automatically receives the standard vertex shader inputs
and must output to the 3 MRT attachments (character/transform, primary color, secondary color).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fragmentSource` | `string` | Fragment shader source or file path (e.g. './shader.frag'). |

#### Returns

`Promise`\<[`TextmodeShader`](TextmodeShader.md)\>

A compiled shader ready for use with [shader](#shader).

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let shaderObj;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.setup(async () => {
	shaderObj = await t.createFilterShader(`#version 300 es
	precision highp float;
	in vec2 v_uv;
	uniform sampler2D u_texture;
	uniform float u_time;
	out vec4 fragColor;
	void main(){vec4 c=texture(u_texture,v_uv);fragColor=vec4(c.rgb*(0.7+0.3*sin(u_time)),c.a);}`);
});

t.draw(() => {
	t.background(6, 10, 22);
	t.char('#');
	t.charColor(140, 220, 255);
	t.rect(16, 8);
	if (shaderObj) t.filter(shaderObj, { u_time: t.frameCount * 0.03 });
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.CREATEFILTERSHADER', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: CUSTOM FILTER', x, y++, 100, 220, 255);
	drawText('Shader affects the main drawing.', x, y++, 140, 160, 190);
	drawText('resetShader restores default.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(shaderObj ? 'FILTER: READY' : 'FILTER: WAIT', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### createFramebuffer()

```ts
createFramebuffer(options): TextmodeFramebuffer;
```

Create a framebuffer for offscreen rendering.

The framebuffer uses the same MRT structure as the main rendering pipeline.
By default it allocates 3 attachments (character + color data).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`TextmodeFramebufferOptions`](../type-aliases/TextmodeFramebufferOptions.md) | Framebuffer configuration. |

#### Returns

[`TextmodeFramebuffer`](TextmodeFramebuffer.md)

The created framebuffer.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

const fb = t.createFramebuffer({ width: 24, height: 14 });

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	fb.begin();
	t.clear();
	t.background(20, 30, 60);
	t.char('#');
	t.charColor(255, 210, 120);
	t.rect(12, 4);
	fb.end();
	t.image(fb);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.CREATEFRAMEBUFFER', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: OFFSCREEN BUFFER', x, y++, 100, 220, 255);
	drawText('Renders into a framebuffer.', x, y++, 140, 160, 190);
	drawText('Then draws it to the scene.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`SIZE: ${fb.width} x ${fb.height}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### createShader()

```ts
createShader(vertexSource, fragmentSource): Promise<TextmodeShader>;
```

Create a shader from vertex and fragment source, or from file paths.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vertexSource` | `string` | Vertex shader source or file path. |
| `fragmentSource` | `string` | Fragment shader source or file path. |

#### Returns

`Promise`\<[`TextmodeShader`](TextmodeShader.md)\>

The compiled shader.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let shaderObj;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.setup(async () => {
	const vert = `#version 300 es
	in vec4 a_position;
	in vec2 a_texCoord;
	out vec2 v_uv;
	void main(){gl_Position=a_position;v_uv=a_texCoord;}`;
	const frag = `#version 300 es
	precision highp float;
	in vec2 v_uv;
	uniform float u_time;
	layout(location=0) out vec4 o_character;
	layout(location=1) out vec4 o_primaryColor;
	layout(location=2) out vec4 o_secondaryColor;
	void main(){float v=fract(v_uv.x*8.0+u_time);o_character=vec4(v,0,0,1);o_primaryColor=vec4(v,0.8,1.0,1);o_secondaryColor=vec4(0.02,0.04,0.08,1);}`;
	shaderObj = await t.createShader(vert, frag);
});

t.draw(() => {
	t.background(6, 10, 22);
	if (shaderObj) {
		t.shader(shaderObj);
		t.setUniform('u_time', t.frameCount * 0.02);
		t.rect(t.grid.cols, t.grid.rows);
		t.resetShader();
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.CREATESHADER', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: CUSTOM SHADER', x, y++, 100, 220, 255);
	drawText('Shader affects the main drawing.', x, y++, 140, 160, 190);
	drawText('resetShader restores default.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(shaderObj ? 'SHADER: READY' : 'SHADER: WAIT', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### createTexture()

```ts
createTexture(source): TextmodeTexture;
```

Create a dynamic texture from an external canvas or video element.

Use this to sample canvases or videos rendered by libraries such as three.js,
p5.js, Babylon.js, or hydra-synth.

The texture automatically updates each frame to capture the latest content from the source.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | `HTMLCanvasElement` \| `HTMLVideoElement` | Canvas or video element to capture. |

#### Returns

[`TextmodeTexture`](../namespaces/media/classes/TextmodeTexture.md)

A TextmodeTexture that can be drawn with [image](#image).

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

const sourceCanvas = document.createElement('canvas');
sourceCanvas.width = 64;
sourceCanvas.height = 64;
const ctx = sourceCanvas.getContext('2d');
let texture;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.setup(() => {
	texture = t.createTexture(sourceCanvas);
});

t.draw(() => {
	t.background(6, 10, 22);
	ctx.fillStyle = '#10183a';
	ctx.fillRect(0, 0, 64, 64);
	ctx.fillStyle = '#facc15';
	ctx.fillRect(8 + (t.frameCount % 32), 20, 16, 16);
	if (texture) t.image(texture, 24, 14);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.CREATETEXTURE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: CANVAS TEXTURE', x, y++, 100, 220, 255);
	drawText('Wraps a 2D canvas source.', x, y++, 140, 160, 190);
	drawText('Source canvas is animated.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(texture ? 'TEXTURE: READY' : 'TEXTURE: WAIT', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### cursor()

```ts
cursor(cursor?): void;
```

Set the mouse cursor for the textmode canvas.

Provide any valid CSS cursor value (e.g. 'default', 'pointer', 'crosshair', 'move', 'text', 'grab',
'grabbing', 'none', 'zoom-in', 'zoom-out', 'ns-resize', 'ew-resize', 'nwse-resize', 'nesw-resize',
etc.), or a CSS `url(...)` cursor. Call with no argument or an empty string to reset to default.

See MDN for all options: https://developer.mozilla.org/en-US/docs/Web/CSS/cursor

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `cursor?` | `string` |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let hovering = false;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	hovering = Math.abs(t.mouse.x) < 8 && Math.abs(t.mouse.y) < 5;
	t.cursor(hovering ? 'pointer' : 'default');
	t.char(hovering ? '@' : '+');
	t.charColor(hovering ? 255 : 120, hovering ? 210 : 180, 120);
	t.rect(16, 10);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.CURSOR', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SYSTEM CURSOR', x, y++, 100, 220, 255);
	drawText('Hover center box for pointer.', x, y++, 140, 160, 190);
	drawText('Cursor changes with state.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(hovering ? 'CURSOR: POINTER' : 'CURSOR: DEFAULT', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### cylinder()

```ts
cylinder(radius?, height?): void;
```

Draw a cylinder mesh primitive.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `radius?` | `number` | Radius in grid cells (defaults to 50). |
| `height?` | `number` | Height in grid cells (defaults to radius). |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let spin = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 8, 18);
	const time = t.frameCount * 0.025;
	spin = (time * 40) % 360;
	t.perspective(58, 0.1, 4096);
	t.camera(18, -10, 42, 0, 0, 0);
	t.ambientLight(24, 28, 38);
	t.pointLight([255, 210, 140], { x: 18, y: -18, z: 28 });
	t.push();
	t.translate(5, 1, 0);
	t.rotateY(spin);
	t.rotateX(18);
	t.char('#');
	t.charColor(140, 220, 255);
	t.cellColor(16, 24, 42);
	t.cylinder(4, 12);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.CYLINDER', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: 3D CYLINDER', x, y++, 100, 220, 255);
	drawText('Radius and height define form.', x, y++, 140, 160, 190);
	drawText('Camera and light reveal depth.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`SPIN: ${spin.toFixed(1)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### deltaTime()

```ts
deltaTime(): number;
```

Time in milliseconds between the current frame and the previous frame.

`deltaTime()` is useful for creating frame-rate-independent animations. By multiplying
velocities and movements by `deltaTime()`, animations will run at consistent speeds
regardless of the actual frame rate.

#### Returns

`number`

Milliseconds elapsed since the previous frame.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let xPos = -18;
let dt = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	dt = t.deltaTime();
	xPos += dt * 0.01;
	if (xPos > 18) xPos = -18;
	t.charColor(60, 70, 100);
	t.char('-');
	t.line(-18, 0, 18, 0);
	t.push();
	t.translate(xPos, 0);
	t.char('@');
	t.charColor(140, 255, 180);
	t.point();
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.DELTATIME', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: FRAME ELAPSED MS', x, y++, 100, 220, 255);
	drawText('Motion scales by deltaTime.', x, y++, 140, 160, 190);
	drawText('Speed stays frame-rate aware.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`DT: ${dt.toFixed(1)} MS`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### destroy()

```ts
destroy(): void;
```

Completely destroy this Textmodifier instance and free all associated resources.

After calling this method, the instance should not be used and will be eligible for garbage collection.

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let requested = false;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.mouseClicked(() => {
	requested = true;
});

t.draw(() => {
	t.background(12, 6, 8);
	t.char(requested ? '!' : '#');
	t.charColor(requested ? 255 : 140, requested ? 120 : 220, 120);
	t.rect(12, 5);
	if (requested && t.frameCount % 120 === 0) t.destroy();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.DESTROY', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: DISPOSE INSTANCE', x, y++, 100, 220, 255);
	drawText('Click requests cleanup.', x, y++, 140, 160, 190);
	drawText('Destroy runs on next cycle.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(requested ? 'REQUESTED: YES' : 'REQUESTED: NO', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### doubleClicked()

```ts
doubleClicked(callback): void;
```

Register the single-callback handler for double-clicks.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`MouseEventHandler`](../namespaces/input/namespaces/mouse/type-aliases/MouseEventHandler.md) | Handler to run with mouse event data when the mouse is double-clicked. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

const pulses = [];
let count = 0;
let last = 'WAITING';

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

function addPulse(label, x = 0, y = 0) {
	count++;
	last = label;
	pulses.unshift({ label, x, y, life: 1 });
	if (pulses.length > 12) pulses.length = 12;
}

t.doubleClicked(() => {
	addPulse('DOUBLE CLICK', t.mouse.x, t.mouse.y);
});

t.draw(() => {
	t.background(6, 10, 22);

	for (let i = pulses.length - 1; i >= 0; i--) {
		const p = pulses[i];
		p.life -= 0.02;
		if (p.life <= 0) {
			pulses.splice(i, 1);
			continue;
		}
		t.push();
		t.translate(p.x, p.y - (1 - p.life) * 4);
		t.char('*');
		t.charColor(255, 210, 120);
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
	drawText('TEXTMODIFIER.DOUBLECLICKED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: DOUBLE CLICK', x, y++, 100, 220, 255);
	drawText('Event updates compact state.', x, y++, 140, 160, 190);
	drawText('Pulses show recent triggers.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('DOUBLE: ' + count, x, y++, 140, 255, 180);
	drawText('LAST: ' + last.slice(0, 28), x, y++, 180, 200, 220);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### doubleTap()

```ts
doubleTap(callback): void;
```

Register a callback for double tap gestures.

Double taps reuse the same [input.touch.TouchTapEventData](../namespaces/input/namespaces/touch/interfaces/TouchTapEventData.md) as taps with `taps` set to `2`. This
helper lets you supply a dedicated handler when you want to treat double taps differently.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchTapHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchTapHandler.md) | Handler to run when a double tap is detected. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

const pulses = [];
let count = 0;
let last = 'WAITING';

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

function addPulse(label, x = 0, y = 0) {
	count++;
	last = label;
	pulses.unshift({ label, x, y, life: 1 });
	if (pulses.length > 12) pulses.length = 12;
}

t.doubleTap((data) => {
	const touch = data?.touch || t.mouse;
	addPulse('DOUBLE', touch?.x || 0, touch?.y || 0);
});

t.draw(() => {
	t.background(6, 10, 22);

	for (let i = pulses.length - 1; i >= 0; i--) {
		const p = pulses[i];
		p.life -= 0.02;
		if (p.life <= 0) {
			pulses.splice(i, 1);
			continue;
		}
		t.push();
		t.translate(p.x, p.y - (1 - p.life) * 4);
		t.char('*');
		t.charColor(255, 210, 120);
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
	drawText('TEXTMODIFIER.DOUBLETAP', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: DOUBLE TAP', x, y++, 100, 220, 255);
	drawText('Event updates compact state.', x, y++, 140, 160, 190);
	drawText('Pulses show recent triggers.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('DOUBLE: ' + count, x, y++, 140, 255, 180);
	drawText('LAST: ' + last.slice(0, 28), x, y++, 180, 200, 220);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### draw()

```ts
draw(callback): void;
```

Set the base layer draw callback.

Put drawing commands for the main layer in this callback.

If multiple layers are added via [Textmodifier.layers](#layers), each layer has its own draw callback set via [TextmodeLayer.draw](../namespaces/layering/classes/TextmodeLayer.md#draw).

Calling this method is equivalent to setting the callback on `textmodifier.layers.base`.
The direct base-layer callback has precedence if both are set.
```js
textmodifier.layers.base.draw(callback);
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` | Function to run before each base layer render. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let pulse = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	pulse = 0.5 + 0.5 * Math.sin(t.frameCount * 0.05);
	t.push();
	t.translate(8, 2);
	t.char('#');
	t.charColor(120, 120 + pulse * 120, 255);
	t.rect(6 + pulse * 8, 3 + pulse * 4);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.DRAW', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: FRAME CALLBACK', x, y++, 100, 220, 255);
	drawText('draw() runs every frame.', x, y++, 140, 160, 190);
	drawText('Pulse proves continuous updates.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`PULSE: ${pulse.toFixed(2)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### ellipse()

```ts
ellipse(width?, height?): void;
```

Draw an ellipse with the current settings.
Position is controlled via [translate](#translate), [push](#push), and [pop](#pop).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `width?` | `number` | Ellipse width in grid cells. Defaults to 1. |
| `height?` | `number` | Ellipse height in grid cells. Defaults to 1. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let rx = 0;
let ry = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	const time = t.frameCount * 0.03;
	rx = 10 + Math.sin(time) * 4;
	ry = 5 + Math.cos(time * 0.8) * 2;
	t.push();
	t.translate(8, 1);
	t.char('o');
	t.charColor(140, 220, 255);
	t.cellColor(15, 25, 50);
	t.ellipse(rx, ry);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.ELLIPSE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: OVAL PRIMITIVE', x, y++, 100, 220, 255);
	drawText('Radius X and Y animate.', x, y++, 140, 160, 190);
	drawText('The shape stays centered locally.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`RX: ${rx.toFixed(1)}`, x, y++, 140, 255, 180);
	drawText(`RY: ${ry.toFixed(1)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### ellipsoid()

```ts
ellipsoid(
   radiusX?, 
   radiusY?, 
   radiusZ?): void;
```

Draw an ellipsoid mesh primitive.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `radiusX?` | `number` | Radius on X axis in grid cells (defaults to 50). |
| `radiusY?` | `number` | Radius on Y axis in grid cells (defaults to radiusX). |
| `radiusZ?` | `number` | Radius on Z axis in grid cells (defaults to radiusX). |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let spin = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 8, 18);
	const time = t.frameCount * 0.025;
	spin = (time * 40) % 360;
	t.perspective(58, 0.1, 4096);
	t.camera(18, -10, 42, 0, 0, 0);
	t.ambientLight(24, 28, 38);
	t.pointLight([255, 210, 140], { x: 18, y: -18, z: 28 });
	t.push();
	t.translate(5, 1, 0);
	t.rotateY(spin);
	t.rotateX(18);
	t.char('#');
	t.charColor(140, 220, 255);
	t.cellColor(16, 24, 42);
	t.ellipsoid(8, 5, 6);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.ELLIPSOID', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: 3D ELLIPSOID', x, y++, 100, 220, 255);
	drawText('Independent X, Y, Z radii.', x, y++, 140, 160, 190);
	drawText('Camera and light reveal depth.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`SPIN: ${spin.toFixed(1)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### exitPointerLock()

```ts
exitPointerLock(): void;
```

Exit pointer lock if the textmode canvas currently owns it.

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let cx = 0;
let cy = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.mouseClicked(() => {
	if (document.pointerLockElement === t.canvas) t.exitPointerLock();
	else t.requestPointerLock();
});

t.draw(() => {
	t.background(6, 10, 22);
	const locked = document.pointerLockElement === t.canvas;
	if (locked) {
		cx += t.movedX * 0.08;
		cy += t.movedY * 0.08;
	}
	cx = Math.max(-20, Math.min(20, cx));
	cy = Math.max(-10, Math.min(10, cy));
	t.push();
	t.translate(cx, cy);
	t.char(locked ? '@' : '+');
	t.charColor(locked ? 140 : 255, locked ? 255 : 210, 180);
	t.point();
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.REQUESTPOINTERLOCK', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: LOCK POINTER', x, y++, 100, 220, 255);
	drawText('Click toggles pointer lock.', x, y++, 140, 160, 190);
	drawText('Movement uses movedX/movedY.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(document.pointerLockElement === t.canvas ? 'LOCKED: TRUE' : 'LOCKED: FALSE', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### fill()

#### Call Signature

```ts
fill(): TextmodeColor;
```

Alias for [cellColor](#cellcolor). Current fill (cell background) color.

##### Returns

[`TextmodeColor`](TextmodeColor.md)

Current cell color.

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
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
	drawText('stroke controls the outline.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`FILL R: ${red}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Call Signature

```ts
fill(gray, alpha?): void;
```

Alias for [cellColor](#cellcolor). Set the fill (cell background) color using a grayscale value.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gray` | `number` | Grayscale value (0-255) |
| `alpha?` | `number` | Optional alpha value (0-255) |

##### Returns

`void`

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
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
	drawText('stroke controls the outline.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`FILL R: ${red}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Call Signature

```ts
fill(
   r, 
   g, 
   b, 
   a?): void;
```

Alias for [cellColor](#cellcolor). Set the fill (cell background) color using RGB(A) values.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | `number` | Red component (0-255) |
| `g` | `number` | Green component (0-255) |
| `b` | `number` | Blue component (0-255) |
| `a?` | `number` | Optional alpha component (0-255) |

##### Returns

`void`

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
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
	drawText('stroke controls the outline.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`FILL R: ${red}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Call Signature

```ts
fill(value): void;
```

Alias for [cellColor](#cellcolor). Set the fill (cell background) color using a CSS string or TextmodeColor object.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| [`TextmodeColor`](TextmodeColor.md) | Hex string, `rgb()`/`rgba()` string, or an existing color object |

##### Returns

`void`

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
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
	drawText('stroke controls the outline.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`FILL R: ${red}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### filter()

#### Call Signature

```ts
filter<T>(name, params?): void;
```

Apply a filter to the final composited output.

Filters are applied after all layers are composited but before
the result is presented to the canvas. Multiple filters can be
queued per frame and will be applied in order.

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`BuiltInFilterName`](../namespaces/filters/type-aliases/BuiltInFilterName.md) |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `T` | The name of the filter to apply (built-in or custom) |
| `params?` | [`BuiltInFilterParams`](../namespaces/filters/interfaces/BuiltInFilterParams.md)\[`T`\] | Optional parameters for the filter |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	t.char('#');
	t.charColor(140, 220, 255);
	t.rect(16, 8);
	t.filter('invert', 0.5 + 0.5 * Math.sin(t.frameCount * 0.04));
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.FILTER', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: POST FILTER', x, y++, 100, 220, 255);
	drawText('Applies filter to final output.', x, y++, 140, 160, 190);
	drawText('Invert amount animates.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('FILTER: INVERT', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Call Signature

```ts
filter<TParams>(name, params?): void;
```

Apply a filter to the final composited output.

Filters are applied after all layers are composited but before
the result is presented to the canvas. Multiple filters can be
queued per frame and will be applied in order.

##### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TParams` | `unknown` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the filter to apply (built-in or custom) |
| `params?` | `TParams` | Optional parameters for the filter |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	t.char('#');
	t.charColor(140, 220, 255);
	t.rect(16, 8);
	t.filter('invert', 0.5 + 0.5 * Math.sin(t.frameCount * 0.04));
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.FILTER', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: POST FILTER', x, y++, 100, 220, 255);
	drawText('Applies filter to final output.', x, y++, 140, 160, 190);
	drawText('Invert amount animates.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('FILTER: INVERT', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### finalDraw()

```ts
finalDraw(callback): void;
```

Set the final post-processing callback for the composited output.

This callback runs after all visible layers have been composited and after
global filters queued via [filter](#filter) during normal draw callbacks have
been applied. Filters queued with `t.filter()` inside this callback are applied
to the final composited texture before it is presented to the canvas.

Use [postDraw](#postdraw) when you want to affect only the base layer. Use this
method when you want to affect the final image made from all layers.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` | Function to run before the final texture is presented. |

#### Returns

`void`

#### Example

```js
t.draw(() => {
	t.background(0);
	t.char('A');
	t.rect(12, 8);
	t.filter('grayscale', 0.4);
});

t.finalDraw(() => {
	t.filter('invert');
});
```

***

### flipX()

```ts
flipX(toggle?): boolean | void;
```

Toggle horizontal flipping for subsequent characters, or get the current state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `toggle?` | `boolean` | Whether to flip horizontally. |

#### Returns

`boolean` \| `void`

Current flip state when called without arguments.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	for (let i = 0; i < 8; i++) {
		const y = (i - 3.5) * 2;
		t.push();
		t.translate(-6, y);
		t.char('R');
		t.charColor(140, 220, 255);
		t.point();
		t.pop();
		t.push();
		t.translate(8, y);
		t.flipX(true);
		t.char('R');
		t.charColor(255, 210, 120);
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
	drawText('TEXTMODIFIER.FLIPX', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: MIRROR GLYPH X', x, y++, 100, 220, 255);
	drawText('Left column is normal.', x, y++, 140, 160, 190);
	drawText('Right column is flipped.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`FLIP X: ${t.flipX()}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### flipY()

```ts
flipY(toggle?): boolean | void;
```

Toggle vertical flipping for subsequent characters, or get the current state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `toggle?` | `boolean` | Whether to flip vertically. |

#### Returns

`boolean` \| `void`

Current flip state when called without arguments.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	for (let i = 0; i < 8; i++) {
		const xPos = (i - 3.5) * 3;
		t.push();
		t.translate(xPos, -3);
		t.char('V');
		t.charColor(140, 220, 255);
		t.point();
		t.pop();
		t.push();
		t.translate(xPos, 5);
		t.flipY(true);
		t.char('V');
		t.charColor(255, 210, 120);
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
	drawText('TEXTMODIFIER.FLIPY', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: MIRROR GLYPH Y', x, y++, 100, 220, 255);
	drawText('Top row is normal.', x, y++, 140, 160, 190);
	drawText('Bottom row is flipped.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`FLIP Y: ${t.flipY()}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### fontSize()

```ts
fontSize(size?): number | void;
```

Set or get the base layer font size.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `size?` | `number` | Font size to apply. |

#### Returns

`number` \| `void`

Current font size when called without arguments.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let size = 16;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	size = t.fontSize();
	t.char('#');
	t.charColor(140, 220, 255);
	t.rect(12, 5);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.FONTSIZE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: ACTIVE FONT SIZE', x, y++, 100, 220, 255);
	drawText('Reads the current font size.', x, y++, 140, 160, 190);
	drawText('Grid derives from cell size.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`SIZE: ${size}`, x, y++, 140, 255, 180);
	drawText(`COLS: ${t.grid.cols}`, x, y++, 180, 200, 220);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### frameRate()

```ts
frameRate(fps?): number | void;
```

Set the target frame rate, or get the current measured frame rate when called without arguments.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fps?` | `number` | Maximum frames per second for rendering. |

#### Returns

`number` \| `void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let measured = 0;
let target = 60;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	target = Math.floor(t.frameCount / 180) % 2 === 0 ? 60 : 30;
	t.frameRate(target);
	measured = t.frameRate();
	const bars = Math.round(measured / 5);
	for (let i = 0; i < bars; i++) {
		t.push();
		t.translate(-18 + i, 3);
		t.char('|');
		t.charColor(120, 220, 255);
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
	drawText('TEXTMODIFIER.FRAMERATE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: FPS CONTROL', x, y++, 100, 220, 255);
	drawText('Target alternates 60 and 30.', x, y++, 140, 160, 190);
	drawText('Bars show measured rate.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`TARGET: ${target}`, x, y++, 140, 255, 180);
	drawText(`FPS: ${measured.toFixed(1)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### gamepad()

```ts
gamepad(index): 
  | TextmodeGamepadSnapshot
  | undefined;
```

Resolve a connected gamepad by its browser-assigned slot index.

Returns `undefined` when that slot is currently absent or disconnected.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `index` | `number` | The browser `Gamepad.index` to resolve. |

#### Returns

  \| [`TextmodeGamepadSnapshot`](../namespaces/input/namespaces/gamepad/interfaces/TextmodeGamepadSnapshot.md)
  \| `undefined`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(4, 6, 12);
	const count = Math.max(1, t.gamepads.length);
	for (let i = 0; i < 16; i++) {
		t.push();
		const angle = (i / 16) * Math.PI * 2 + t.frameCount * 0.03;
		t.translate(Math.cos(angle) * (6 + count), Math.sin(angle) * 4);
		t.char(t.gamepads.length ? '@' : '.');
		t.charColor(80 + i * 8, 180, 255);
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

	drawText('TEXTMODIFIER.GAMEPAD', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: GAMEPAD INPUT', x, y++, 100, 220, 255);
	drawText('Works with browser pads.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const pad = t.gamepad(0);
	const state = pad ? 'FOUND' : 'EMPTY';
	drawText(`SLOT 0: ${state}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### gamepadAxisChanged()

```ts
gamepadAxisChanged(callback): void;
```

Register the single-callback handler for meaningful gamepad axis changes.

Axis callbacks are derived from per-frame polling, not native DOM events. For continuous
stick or trigger state, polling [Textmodifier.gamepads](#gamepads) inside `draw()` is often the
simpler choice; use this callback when you specifically want change notifications.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`GamepadAxisEventHandler`](../namespaces/input/namespaces/gamepad/type-aliases/GamepadAxisEventHandler.md) | Handler to run with gamepad axis data when an axis changes. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let lastAxis = 'waiting';

t.gamepadAxisChanged((data) => {
	const name = data.standardAxisName || 'axis ' + data.axisIndex;
	lastAxis = name + ' ' + data.value.toFixed(2);
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(4, 6, 12);
	const count = Math.max(1, t.gamepads.length);
	for (let i = 0; i < 16; i++) {
		t.push();
		const angle = (i / 16) * Math.PI * 2 + t.frameCount * 0.03;
		t.translate(Math.cos(angle) * (6 + count), Math.sin(angle) * 4);
		t.char(t.gamepads.length ? '@' : '.');
		t.charColor(80 + i * 8, 180, 255);
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

	drawText('TEXTMODIFIER.GAMEPADAXISCHANGED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: GAMEPAD INPUT', x, y++, 100, 220, 255);
	drawText('Works with browser pads.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`AXIS: ${lastAxis}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### gamepadButtonPressed()

```ts
gamepadButtonPressed(callback): void;
```

Register the single-callback handler for gamepad button press events.

This is a legacy-style single-callback shortcut for the `'gamepadButtonPressed'` event.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`GamepadButtonEventHandler`](../namespaces/input/namespaces/gamepad/type-aliases/GamepadButtonEventHandler.md) | Handler to run with gamepad button data when a button is pressed. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let lastPress = 'waiting';

t.gamepadButtonPressed((data) => {
	lastPress = data.standardButtonName || 'button ' + data.buttonIndex;
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(4, 6, 12);
	const count = Math.max(1, t.gamepads.length);
	for (let i = 0; i < 16; i++) {
		t.push();
		const angle = (i / 16) * Math.PI * 2 + t.frameCount * 0.03;
		t.translate(Math.cos(angle) * (6 + count), Math.sin(angle) * 4);
		t.char(t.gamepads.length ? '@' : '.');
		t.charColor(80 + i * 8, 180, 255);
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

	drawText('TEXTMODIFIER.GAMEPADBUTTONPRESSED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: GAMEPAD INPUT', x, y++, 100, 220, 255);
	drawText('Works with browser pads.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`PRESS: ${lastPress}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### gamepadButtonReleased()

```ts
gamepadButtonReleased(callback): void;
```

Register the single-callback handler for gamepad button release events.

This is a legacy-style single-callback shortcut for the `'gamepadButtonReleased'` event.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`GamepadButtonEventHandler`](../namespaces/input/namespaces/gamepad/type-aliases/GamepadButtonEventHandler.md) | Handler to run with gamepad button data when a button is released. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let lastRelease = 'waiting';

t.gamepadButtonReleased((data) => {
	lastRelease = data.standardButtonName || 'button ' + data.buttonIndex;
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(4, 6, 12);
	const count = Math.max(1, t.gamepads.length);
	for (let i = 0; i < 16; i++) {
		t.push();
		const angle = (i / 16) * Math.PI * 2 + t.frameCount * 0.03;
		t.translate(Math.cos(angle) * (6 + count), Math.sin(angle) * 4);
		t.char(t.gamepads.length ? '@' : '.');
		t.charColor(80 + i * 8, 180, 255);
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

	drawText('TEXTMODIFIER.GAMEPADBUTTONRELEASED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: GAMEPAD INPUT', x, y++, 100, 220, 255);
	drawText('Works with browser pads.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`RELEASE: ${lastRelease}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### gamepadConnected()

```ts
gamepadConnected(callback): void;
```

Register the single-callback handler for gamepad connection events.

This is a legacy-style single-callback shortcut for the `'gamepadConnected'` event.
Calling it replaces the previous callback registered through this same method while
leaving any listeners added via [Textmodifier.on](#on) untouched.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`GamepadConnectionEventHandler`](../namespaces/input/namespaces/gamepad/type-aliases/GamepadConnectionEventHandler.md) | Handler to run with gamepad connection data when a controller connects. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let lastConnect = 'waiting';

t.gamepadConnected((data) => {
	lastConnect = 'slot ' + data.gamepad.index;
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(4, 6, 12);
	const count = Math.max(1, t.gamepads.length);
	for (let i = 0; i < 16; i++) {
		t.push();
		const angle = (i / 16) * Math.PI * 2 + t.frameCount * 0.03;
		t.translate(Math.cos(angle) * (6 + count), Math.sin(angle) * 4);
		t.char(t.gamepads.length ? '@' : '.');
		t.charColor(80 + i * 8, 180, 255);
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

	drawText('TEXTMODIFIER.GAMEPADCONNECTED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: GAMEPAD INPUT', x, y++, 100, 220, 255);
	drawText('Works with browser pads.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CONNECT: ${lastConnect}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### gamepadDisconnected()

```ts
gamepadDisconnected(callback): void;
```

Register the single-callback handler for gamepad disconnection events.

This is a legacy-style single-callback shortcut for the `'gamepadDisconnected'` event.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`GamepadConnectionEventHandler`](../namespaces/input/namespaces/gamepad/type-aliases/GamepadConnectionEventHandler.md) | Handler to run with gamepad connection data when a controller disconnects. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let lastDisconnect = 'waiting';

t.gamepadDisconnected((data) => {
	lastDisconnect = 'slot ' + data.gamepad.index;
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(4, 6, 12);
	const count = Math.max(1, t.gamepads.length);
	for (let i = 0; i < 16; i++) {
		t.push();
		const angle = (i / 16) * Math.PI * 2 + t.frameCount * 0.03;
		t.translate(Math.cos(angle) * (6 + count), Math.sin(angle) * 4);
		t.char(t.gamepads.length ? '@' : '.');
		t.charColor(80 + i * 8, 180, 255);
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

	drawText('TEXTMODIFIER.GAMEPADDISCONNECTED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: GAMEPAD INPUT', x, y++, 100, 220, 255);
	drawText('Works with browser pads.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`DISCON: ${lastDisconnect}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### image()

```ts
image(
   source, 
   width?, 
   height?): void;
```

Draw a framebuffer, image, video, or texture source to the current render target.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | \| [`TextmodeFramebuffer`](TextmodeFramebuffer.md) \| [`TextmodeImage`](../namespaces/media/classes/TextmodeImage.md) \| [`TextmodeTexture`](../namespaces/media/classes/TextmodeTexture.md) \| [`TextmodeVideo`](../namespaces/media/classes/TextmodeVideo.md) | Source to render. |
| `width?` | `number` | Width in grid cells. Defaults to an aspect-ratio-preserving fit. |
| `height?` | `number` | Height in grid cells. Defaults to an aspect-ratio-preserving fit. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

const fb = t.createFramebuffer({ width: 24, height: 14 });

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	fb.begin();
	t.clear();
	t.background(20, 30, 60);
	t.rotateZ(t.frameCount * 2);
	t.char('#');
	t.charColor(255, 210, 120);
	t.rect(12, 4);
	fb.end();
	t.image(fb, 24, 14);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.IMAGE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: DRAW IMAGE SOURCE', x, y++, 100, 220, 255);
	drawText('Framebuffer is drawn as image.', x, y++, 140, 160, 190);
	drawText('Offscreen content rotates.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('SOURCE: FRAMEBUFFER', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### inputGrid()

```ts
inputGrid(target?): void | TextmodeGrid | "topmost";
```

Get or set the grid used for mouse and touch coordinate mapping.

By default, input coordinates are mapped to the topmost visible layer's grid,
which changes dynamically as layers are shown/hidden. Use this method to lock
input mapping to a specific grid, or to return to responsive mode.

When called without arguments, returns the current input grid mode:<br/>
- `'topmost'` if using responsive mode (default)<br/>
- The specific `TextmodeGrid` if locked

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target?` | [`TextmodeGrid`](TextmodeGrid.md) \| `"topmost"` |

#### Returns

`void` \| [`TextmodeGrid`](TextmodeGrid.md) \| `"topmost"`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

const inputLayer = t.layers.add();
let locked = false;
let mode = 'topmost';

t.setup(() => {
	inputLayer.grid.cols = 24;
	inputLayer.grid.rows = 12;
});

t.mouseClicked(() => {
	locked = !locked;
	t.inputGrid(locked ? inputLayer.grid : 'topmost');
	mode = locked ? 'locked' : 'topmost';
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	t.charColor(60, 80, 120);
	t.char('.');
	t.rect(t.grid.cols, t.grid.rows);
});

inputLayer.draw(() => {
	t.clear();
	t.charColor(100, 220, 255);
	t.char('+');
	t.rect(inputLayer.grid.cols, inputLayer.grid.rows);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODIFIER.INPUTGRID', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: INPUT GRID LOCK', x, y++, 100, 220, 255);
	drawText('Mouse mapping can lock.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`MODE: ${mode}`, x, y++, 140, 255, 180);
	drawText('CLICK TO TOGGLE', x, y++, 255, 225, 140);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### invert()

```ts
invert(toggle?): boolean | void;
```

Toggle character/cell color inversion, or get the current state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `toggle?` | `boolean` | Whether to invert colors. |

#### Returns

`boolean` \| `void`

Current inversion state when called without arguments.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
});

const labelLayer = t.layers.add();

t.draw(() => {
	t.background(10, 12, 24);

	const count = 15;
	for (let i = 0; i < count; i++) {
		t.push();
		t.translate((i - (count - 1) / 2) * 5, 0);

		const shouldInvert = (i + Math.floor(t.frameCount / 25)) % 2 === 0;
		t.invert(shouldInvert);

		t.charColor(255, 100, 100);
		t.cellColor(0, 50, 100);
		t.char('█');
		t.rect(4, 18);
		t.pop();
	}
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	const invertActive = Math.floor(t.frameCount / 25) % 2 === 0;

	drawText('TEXTMODIFIER.INVERT', x, y++, 255, 100, 100);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: CHROMA CHANNEL INVERSION', x, y++, 100, 220, 255);
	drawText('Swaps char and cell colors.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const state = invertActive ? 'INVERTED' : 'STANDARD';
	drawText(`INVERT: ${state}`, x, y++, 120, 205, 255);
	drawText('RECTS: 15', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('t.invert(shouldInvert)', x, y++, 100, 220, 140);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### isKeyPressed()

```ts
isKeyPressed(key): boolean;
```

Check whether a key is currently pressed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key to check (e.g., 'a', 'Enter', 'ArrowLeft') |

#### Returns

`boolean`

`true` when the key is currently pressed.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let down = false;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	down = t.isKeyPressed(' ');
	t.char(down ? '@' : '.');
	t.charColor(down ? 140 : 100, down ? 255 : 120, 180);
	t.rect(10, 5);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.ISKEYPRESSED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: HELD KEY CHECK', x, y++, 100, 220, 255);
	drawText('Hold Space to activate.', x, y++, 140, 160, 190);
	drawText('Good for continuous motion.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(down ? 'SPACE: DOWN' : 'SPACE: UP', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### isLooping()

```ts
isLooping(): boolean;
```

Whether the automatic render loop is currently running.

#### Returns

`boolean`

`true` when the render loop is active.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

t.mousePressed(() => {
	if (t.isLooping()) {
		t.noLoop();
		t.redraw();
	} else {
		t.loop();
	}
});

t.draw(() => {
	t.background(6, 10, 22);
	t.char(t.isLooping() ? '>' : '|');
	t.charColor(t.isLooping() ? 100 : 255, 255, 140);
	t.rotateZ(t.frameCount * 5);
	t.rect(10, 10);
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODIFIER.ISLOOPING', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: LOOP STATE', x, y++, 100, 220, 255);
	drawText('Compact API demonstration.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const state = t.isLooping() ? 'TRUE' : 'FALSE';
	drawText(`LOOPING: ${state}`, x, y++, 140, 255, 180);
	drawText('CLICK TO TOGGLE', x, y++, 255, 225, 140);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### keyPressed()

```ts
keyPressed(callback): void;
```

Register the single-callback handler for key press events.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`KeyboardEventHandler`](../namespaces/input/namespaces/keyboard/type-aliases/KeyboardEventHandler.md) | Handler to run with keyboard event data when a key is pressed. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let last = 'NONE';
let count = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.keyPressed((data) => {
	last = data.key || 'UNKNOWN';
	count++;
});

t.draw(() => {
	t.background(6, 10, 22);
	t.char(last[0] || '?');
	t.charColor(255, 210, 120);
	t.rect(8, 4);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.KEYPRESSED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: KEY DOWN EVENT', x, y++, 100, 220, 255);
	drawText('Fires when a key is pressed.', x, y++, 140, 160, 190);
	drawText('Last key is shown in center.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`COUNT: ${count}`, x, y++, 140, 255, 180);
	drawText('LAST: ' + last.slice(0, 20), x, y++, 180, 200, 220);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### keyReleased()

```ts
keyReleased(callback): void;
```

Register the single-callback handler for key release events.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`KeyboardEventHandler`](../namespaces/input/namespaces/keyboard/type-aliases/KeyboardEventHandler.md) | Handler to run with keyboard event data when a key is released. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let last = 'NONE';
let count = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.keyReleased((data) => {
	last = data.key || 'UNKNOWN';
	count++;
});

t.draw(() => {
	t.background(6, 10, 22);
	t.char(last[0] || '?');
	t.charColor(140, 220, 255);
	t.rect(8, 4);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.KEYRELEASED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: KEY UP EVENT', x, y++, 100, 220, 255);
	drawText('Fires when a key is released.', x, y++, 140, 160, 190);
	drawText('Useful for edge transitions.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`COUNT: ${count}`, x, y++, 140, 255, 180);
	drawText('LAST: ' + last.slice(0, 20), x, y++, 180, 200, 220);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### keyTyped()

```ts
keyTyped(callback): void;
```

Register the single-callback handler for printable character input.

This only fires for keys that produce character input, such as letters, numbers,
punctuation, and space. It does not fire for modifier keys or control-key chords.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`KeyboardEventHandler`](../namespaces/input/namespaces/keyboard/type-aliases/KeyboardEventHandler.md) | Handler to run with keyboard event data when a printable character is typed. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let typed = '';

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.keyTyped((data) => {
	typed = (typed + (data.key || '')).slice(-16);
});

t.draw(() => {
	t.background(6, 10, 22);
	for (let i = 0; i < typed.length; i++) {
		t.push();
		t.translate(i - typed.length / 2, 0);
		t.char(typed[i]);
		t.charColor(255, 210, 120);
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
	drawText('TEXTMODIFIER.KEYTYPED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: PRINTABLE INPUT', x, y++, 100, 220, 255);
	drawText('Collects typed characters.', x, y++, 140, 160, 190);
	drawText('Buffer keeps the last 16.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('TEXT: ' + typed.slice(-20), x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### lightFalloff()

```ts
lightFalloff(
   constant, 
   linear, 
   quadratic): void;
```

Configure distance attenuation used by point lights.

Uses the p5-style formula: `1 / (constant + d * linear + d * d * quadratic)`.
Negative inputs are clamped to `0`. If all inputs resolve to `0`, the falloff resets to `(1, 0, 0)`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constant` | `number` | Constant attenuation term |
| `linear` | `number` | Linear attenuation term |
| `quadratic` | `number` | Quadratic attenuation term |

#### Returns

`void`

#### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 8, 18);
	const time = t.frameCount * 0.025;
	value = 0.5 + 0.5 * Math.sin(time);
	t.perspective(58, 0.1, 4096);
	t.camera(16, -10, 42, 0, 0, 0);
	t.lightFalloff(1, value * 0.08, value * 0.01);
	t.pointLight([255, 210, 120], { x: 18, y: -18, z: 28 });
	t.rotateY(time * 40);
	t.char('#');
	t.charColor(140, 220, 255);
	t.sphere(7);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.LIGHTFALLOFF', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: LIGHT FALLOFF', x, y++, 100, 220, 255);
	drawText('Lighting changes surface shade.', x, y++, 140, 160, 190);
	drawText('Scene keeps focus on one sphere.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`FALLOFF: ${value.toFixed(2)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### line()

```ts
line(
   x1, 
   y1, 
   x2, 
   y2): void;
```

Draw a line from `(x1, y1)` to `(x2, y2)`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x1` | `number` | Start X coordinate in grid cells. |
| `y1` | `number` | Start Y coordinate in grid cells. |
| `x2` | `number` | End X coordinate in grid cells. |
| `y2` | `number` | End Y coordinate in grid cells. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let a = 0;
let b = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	const time = t.frameCount * 0.025;
	a = Math.sin(time) * 10;
	b = Math.cos(time * 0.7) * 7;
	t.charColor(60, 70, 100);
	t.char('.');
	t.line(-18, 0, 18, 0);
	t.line(0, -10, 0, 10);
	t.charColor(120, 220, 255);
	t.char('#');
	t.line(-18, -b, 18, b);
	t.charColor(255, 210, 120);
	t.line(-a, -10, a, 10);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.LINE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: DRAW SEGMENTS', x, y++, 100, 220, 255);
	drawText('Connects two grid coordinates.', x, y++, 140, 160, 190);
	drawText('Animated endpoints cross center.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`A: ${a.toFixed(1)}`, x, y++, 140, 255, 180);
	drawText(`B: ${b.toFixed(1)}`, x, y++, 255, 210, 120);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### lineWeight()

```ts
lineWeight(weight?): number | void;
```

Set or get line thickness for subsequent line and curve drawing.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `weight?` | `number` | Line thickness in grid cells. |

#### Returns

`number` \| `void`

Current line weight when called without arguments.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let weight = 1;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	weight = 1 + Math.floor((t.frameCount / 60) % 4);
	t.charColor(70, 80, 110);
	t.char('.');
	t.line(-20, -6, 20, -6);
	t.line(-20, 6, 20, 6);
	t.lineWeight(weight);
	t.charColor(120, 255, 180);
	t.char('#');
	t.line(-20, 0, 20, 0);
	t.lineWeight(1);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.LINEWEIGHT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: LINE THICKNESS', x, y++, 100, 220, 255);
	drawText('Controls stroke cell thickness.', x, y++, 140, 160, 190);
	drawText('Weight resets after the demo line.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`WEIGHT: ${weight}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### loadFont()

```ts
loadFont(fontSource, setActive?): Promise<TextmodeFont>;
```

Load a font and optionally set it as the base layer's active font.

Accepts either a URL string to load a new font, or an existing [TextmodeFont](../namespaces/fonts/classes/TextmodeFont.md)
instance to use as a reusable source.

If `setActive` is true (default), the font is set as the base layer's font.
If `setActive` is false, the font is loaded/initialized and returned without modifying the layer.

The returned font can be reused on other layers via [TextmodeLayer.loadFont](../namespaces/layering/classes/TextmodeLayer.md#loadfont),
which creates a layer-local fork rather than sharing a mutable instance by reference.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `fontSource` | `string` \| [`TextmodeFont`](../namespaces/fonts/classes/TextmodeFont.md) | `undefined` | Font URL or reusable TextmodeFont instance. |
| `setActive` | `boolean` | `true` | Whether to activate the font on the base layer. Defaults to `true`. |

#### Returns

`Promise`\<[`TextmodeFont`](../namespaces/fonts/classes/TextmodeFont.md)\>

The loaded TextmodeFont.

#### Example

```javascript
const BESCII_URL = 'https://cdn.jsdelivr.net/gh/damianvila/font-bescii@main/fonts/v2.0/Bescii-Mono.ttf';

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const accentLayer = t.layers.add({ fontSize: 16, blendMode: 'additive' });
const labelLayer = t.layers.add();

let baseFont = null;
let reusableFont = null;
let loaded = false;

t.setup(async () => {
	baseFont = await t.loadFont(BESCII_URL);
	reusableFont = await t.loadFont(BESCII_URL, false);
	await accentLayer.loadFont(reusableFont);
	loaded = true;
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

function drawGlyphStrip(font, y, r, g, b) {
	const glyphs = font.characters;
	const count = Math.min(glyphs.length, Math.max(8, Math.floor(t.grid.cols * 0.55)));
	const start = Math.floor((t.frameCount / 8) % glyphs.length);
	const x = -Math.floor(count / 2);
	for (let i = 0; i < count; i++) {
		const glyph = glyphs[(start + i) % glyphs.length];
		t.push();
		t.translate(x + i, y);
		t.char(glyph.character);
		t.charColor(r, g, b);
		t.point();
		t.pop();
	}
}

t.draw(() => {
	t.background(5, 8, 18);
	if (!loaded) return;

	drawGlyphStrip(baseFont, -2, 255, 235, 120);
	drawText('ACTIVE BASE FONT', -8, -5, 255, 235, 120);
});

accentLayer.draw(() => {
	t.clear();
	if (!loaded) return;

	drawGlyphStrip(reusableFont, 4, 120, 220, 255);
	drawText('REUSED ON LAYER', -7, 7, 120, 220, 255);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODIFIER.LOADFONT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: LOAD WEB FONT', x, y++, 100, 220, 255);
	drawText('true activates the base layer.', x, y++, 140, 160, 190);
	drawText('false returns a reusable font.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const state = loaded ? 'READY' : 'LOADING';
	drawText(`FONT: ${state}`, x, y++, 140, 255, 180);
	if (loaded) drawText(`GLYPHS: ${baseFont.characters.length}`, x, y++, 255, 225, 140);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### loadImage()

```ts
loadImage(src): Promise<TextmodeImage>;
```

Load an image source that can be drawn with [image](#image).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `src` | `string` | Image URL. |

#### Returns

`Promise`\<[`TextmodeImage`](../namespaces/media/classes/TextmodeImage.md)\>

The loaded TextmodeImage.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let source;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.setup(async () => {
	source = await t.loadImage('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80');
	source.characters(' .:-=+*#%@');
});

t.draw(() => {
	t.background(0);
	if (source) t.image(source, t.grid.cols, t.grid.rows);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.LOADIMAGE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: LOAD IMAGE', x, y++, 100, 220, 255);
	drawText('Loads media for this example.', x, y++, 140, 160, 190);
	drawText('HUD stays on a top layer.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(source ? 'IMAGE: READY' : 'IMAGE: WAIT', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### loadTileset()

```ts
loadTileset(tilesetSource, setActive?): Promise<TextmodeTileset>;
```

Load a tileset and optionally set it as the base layer's active glyph source.

Accepts either tileset load options or an existing [TextmodeTileset](../namespaces/fonts/classes/TextmodeTileset.md)
instance to use as a reusable source.

If `setActive` is true (default), the tileset is set as the base layer's glyph source.
If `setActive` is false, the tileset is loaded/initialized and returned without modifying the layer.

The returned tileset can be reused on other layers via [TextmodeLayer.loadTileset](../namespaces/layering/classes/TextmodeLayer.md#loadtileset),
which creates a layer-local fork rather than sharing a mutable instance by reference.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `tilesetSource` | \| [`TextmodeTilesetOptions`](../namespaces/fonts/interfaces/TextmodeTilesetOptions.md) \| [`TextmodeTileset`](../namespaces/fonts/classes/TextmodeTileset.md) | `undefined` | Tileset options or reusable TextmodeTileset instance. |
| `setActive` | `boolean` | `true` | Whether to activate the tileset on the base layer. Defaults to `true`. |

#### Returns

`Promise`\<[`TextmodeTileset`](../namespaces/fonts/classes/TextmodeTileset.md)\>

The loaded TextmodeTileset.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let source;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.setup(async () => {
	source = await t.loadTileset({
		source: 'https://littlebitspace.com/resources/fonts/T64.png',
		columns: 16,
		rows: 16,
		count: 256,
	});
});

t.draw(() => {
	t.background(6, 10, 22);
	if (source) {
		for (let i = 0; i < 64; i++) {
			t.push();
			t.translate((i % 16) - 8, Math.floor(i / 16));
			t.char(i);
			t.charColor(120, 220, 255);
			t.point();
			t.pop();
		}
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.LOADTILESET', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: LOAD TILESET', x, y++, 100, 220, 255);
	drawText('Loads media for this example.', x, y++, 140, 160, 190);
	drawText('HUD stays on a top layer.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(source ? 'TILESET: READY' : 'TILESET: WAIT', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### loadVideo()

```ts
loadVideo(src): Promise<TextmodeVideo>;
```

Load a video source that can be drawn with [image](#image).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `src` | `string` | Video URL. |

#### Returns

`Promise`\<[`TextmodeVideo`](../namespaces/media/classes/TextmodeVideo.md)\>

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let source;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.setup(async () => {
	source = await t.loadVideo('https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4');
	source.play();
});

t.draw(() => {
	t.background(0);
	if (source) t.image(source, t.grid.cols, t.grid.rows);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.LOADVIDEO', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: LOAD VIDEO', x, y++, 100, 220, 255);
	drawText('Loads media for this example.', x, y++, 140, 160, 190);
	drawText('HUD stays on a top layer.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(source ? 'VIDEO: READY' : 'VIDEO: WAIT', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### longPress()

```ts
longPress(callback): void;
```

Register a callback for long press gestures.

A long press is emitted when the user keeps a finger on the canvas without moving beyond the
configured tolerance. The event includes the press duration in milliseconds.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchLongPressHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchLongPressHandler.md) | Handler to run when a long press gesture is detected. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

const pulses = [];
let count = 0;
let last = 'WAITING';

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

function addPulse(label, x = 0, y = 0) {
	count++;
	last = label;
	pulses.unshift({ label, x, y, life: 1 });
	if (pulses.length > 12) pulses.length = 12;
}

t.longPress((data) => {
	const touch = data?.touch || t.mouse;
	addPulse('LONG', touch?.x || 0, touch?.y || 0);
});

t.draw(() => {
	t.background(6, 10, 22);

	for (let i = pulses.length - 1; i >= 0; i--) {
		const p = pulses[i];
		p.life -= 0.02;
		if (p.life <= 0) {
			pulses.splice(i, 1);
			continue;
		}
		t.push();
		t.translate(p.x, p.y - (1 - p.life) * 4);
		t.char('*');
		t.charColor(255, 210, 120);
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
	drawText('TEXTMODIFIER.LONGPRESS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: LONG PRESS', x, y++, 100, 220, 255);
	drawText('Event updates compact state.', x, y++, 140, 160, 190);
	drawText('Pulses show recent triggers.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('LONG: ' + count, x, y++, 140, 255, 180);
	drawText('LAST: ' + last.slice(0, 28), x, y++, 180, 200, 220);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### lookAt()

```ts
lookAt(
   targetX, 
   targetY, 
   targetZ, 
   upX?, 
   upY?, 
   upZ?): void;
```

Update the look-at target and optional up vector for the active camera.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetX` | `number` | Look-at target X position. |
| `targetY` | `number` | Look-at target Y position. |
| `targetZ` | `number` | Look-at target Z position. |
| `upX?` | `number` | Optional up vector X component. |
| `upY?` | `number` | Optional up vector Y component. |
| `upZ?` | `number` | Optional up vector Z component. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let targetX = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 8, 18);
	const time = t.frameCount * 0.03;
	targetX = Math.sin(time) * 10;
	t.perspective(58, 0.1, 4096);
	t.camera(0, 0, 44);
	t.lookAt(targetX, 0, 0);
	t.ambientLight(20, 24, 34);
	t.pointLight([255, 210, 140], { x: 16, y: -16, z: 28 });
	t.push();
	t.translate(targetX, 0, 0);
	t.char('*');
	t.charColor(255, 220, 120);
	t.box(4, 4, 4);
	t.pop();
	t.char('#');
	t.charColor(120, 220, 255);
	t.box(8, 8, 8);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.LOOKAT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: AIM CAMERA', x, y++, 100, 220, 255);
	drawText('Camera eye remains fixed.', x, y++, 140, 160, 190);
	drawText('Target slides across X.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`TARGET X: ${targetX.toFixed(1)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### loop()

```ts
loop(): void;
```

Resume the rendering loop if it was stopped by [noLoop](#noloop).

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.mousePressed(() => {
	t.loop();
});

t.draw(() => {
	t.background(6, 10, 22);
	t.rotateZ(t.frameCount * 3);
	t.char('#');
	t.charColor(140, 220, 255);
	t.rect(10, 2);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.LOOP', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: RESUME DRAW LOOP', x, y++, 100, 220, 255);
	drawText('Click calls loop().', x, y++, 140, 160, 190);
	drawText('Spinner shows active frames.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CLICK: LOOP', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### mouseClicked()

```ts
mouseClicked(callback): void;
```

Register the single-callback handler for mouse clicks.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`MouseEventHandler`](../namespaces/input/namespaces/mouse/type-aliases/MouseEventHandler.md) | Handler to run with mouse event data when the mouse is clicked. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

const pulses = [];
let count = 0;
let last = 'WAITING';

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

function addPulse(label, x = 0, y = 0) {
	count++;
	last = label;
	pulses.unshift({ label, x, y, life: 1 });
	if (pulses.length > 12) pulses.length = 12;
}

t.mouseClicked(() => {
	addPulse('CLICK', t.mouse.x, t.mouse.y);
});

t.draw(() => {
	t.background(6, 10, 22);

	for (let i = pulses.length - 1; i >= 0; i--) {
		const p = pulses[i];
		p.life -= 0.02;
		if (p.life <= 0) {
			pulses.splice(i, 1);
			continue;
		}
		t.push();
		t.translate(p.x, p.y - (1 - p.life) * 4);
		t.char('*');
		t.charColor(255, 210, 120);
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
	drawText('TEXTMODIFIER.MOUSECLICKED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: CLICK EVENT', x, y++, 100, 220, 255);
	drawText('Event updates compact state.', x, y++, 140, 160, 190);
	drawText('Pulses show recent triggers.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CLICKS: ' + count, x, y++, 140, 255, 180);
	drawText('LAST: ' + last.slice(0, 28), x, y++, 180, 200, 220);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### mouseDragged()

```ts
mouseDragged(callback): void;
```

Register the single-callback handler for mouse dragging.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`MouseEventHandler`](../namespaces/input/namespaces/mouse/type-aliases/MouseEventHandler.md) | Handler to run with mouse event data when the mouse is dragged. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

const pulses = [];
let count = 0;
let last = 'WAITING';

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

function addPulse(label, x = 0, y = 0) {
	count++;
	last = label;
	pulses.unshift({ label, x, y, life: 1 });
	if (pulses.length > 12) pulses.length = 12;
}

t.mouseDragged(() => {
	addPulse('DRAG', t.mouse.x, t.mouse.y);
});

t.draw(() => {
	t.background(6, 10, 22);
	if (t.mouseIsPressed && t.mouse.x !== Number.NEGATIVE_INFINITY) {
		t.charColor(120, 220, 255);
		t.line(t.pmouse.x, t.pmouse.y, t.mouse.x, t.mouse.y);
	}

	for (let i = pulses.length - 1; i >= 0; i--) {
		const p = pulses[i];
		p.life -= 0.02;
		if (p.life <= 0) {
			pulses.splice(i, 1);
			continue;
		}
		t.push();
		t.translate(p.x, p.y - (1 - p.life) * 4);
		t.char('*');
		t.charColor(255, 210, 120);
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
	drawText('TEXTMODIFIER.MOUSEDRAGGED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: DRAG EVENT', x, y++, 100, 220, 255);
	drawText('Event updates compact state.', x, y++, 140, 160, 190);
	drawText('Pulses show recent triggers.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('DRAGS: ' + count, x, y++, 140, 255, 180);
	drawText('LAST: ' + last.slice(0, 28), x, y++, 180, 200, 220);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### mouseMoved()

```ts
mouseMoved(callback): void;
```

Register the single-callback handler for mouse movement.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`MouseEventHandler`](../namespaces/input/namespaces/mouse/type-aliases/MouseEventHandler.md) | Handler to run with mouse event data when the mouse moves. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

const pulses = [];
let count = 0;
let last = 'WAITING';

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

function addPulse(label, x = 0, y = 0) {
	count++;
	last = label;
	pulses.unshift({ label, x, y, life: 1 });
	if (pulses.length > 12) pulses.length = 12;
}

t.mouseMoved(() => {
	addPulse('MOVE', t.mouse.x, t.mouse.y);
});

t.draw(() => {
	t.background(6, 10, 22);

	for (let i = pulses.length - 1; i >= 0; i--) {
		const p = pulses[i];
		p.life -= 0.02;
		if (p.life <= 0) {
			pulses.splice(i, 1);
			continue;
		}
		t.push();
		t.translate(p.x, p.y - (1 - p.life) * 4);
		t.char('*');
		t.charColor(255, 210, 120);
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
	drawText('TEXTMODIFIER.MOUSEMOVED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: MOVE EVENT', x, y++, 100, 220, 255);
	drawText('Event updates compact state.', x, y++, 140, 160, 190);
	drawText('Pulses show recent triggers.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('MOVES: ' + count, x, y++, 140, 255, 180);
	drawText('LAST: ' + last.slice(0, 28), x, y++, 180, 200, 220);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### mousePressed()

```ts
mousePressed(callback): void;
```

Register the single-callback handler for mouse press events.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`MouseEventHandler`](../namespaces/input/namespaces/mouse/type-aliases/MouseEventHandler.md) | Handler to run with mouse event data when the mouse is pressed. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

const pulses = [];
let count = 0;
let last = 'WAITING';

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

function addPulse(label, x = 0, y = 0) {
	count++;
	last = label;
	pulses.unshift({ label, x, y, life: 1 });
	if (pulses.length > 12) pulses.length = 12;
}

t.mousePressed(() => {
	addPulse('MOUSE DOWN', t.mouse.x, t.mouse.y);
});

t.draw(() => {
	t.background(6, 10, 22);

	for (let i = pulses.length - 1; i >= 0; i--) {
		const p = pulses[i];
		p.life -= 0.02;
		if (p.life <= 0) {
			pulses.splice(i, 1);
			continue;
		}
		t.push();
		t.translate(p.x, p.y - (1 - p.life) * 4);
		t.char('*');
		t.charColor(255, 210, 120);
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
	drawText('TEXTMODIFIER.MOUSEPRESSED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: PRESS EVENT', x, y++, 100, 220, 255);
	drawText('Event updates compact state.', x, y++, 140, 160, 190);
	drawText('Pulses show recent triggers.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('PRESSES: ' + count, x, y++, 140, 255, 180);
	drawText('LAST: ' + last.slice(0, 28), x, y++, 180, 200, 220);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### mouseReleased()

```ts
mouseReleased(callback): void;
```

Register the single-callback handler for mouse release events.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`MouseEventHandler`](../namespaces/input/namespaces/mouse/type-aliases/MouseEventHandler.md) | Handler to run with mouse event data when the mouse is released. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

const pulses = [];
let count = 0;
let last = 'WAITING';

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

function addPulse(label, x = 0, y = 0) {
	count++;
	last = label;
	pulses.unshift({ label, x, y, life: 1 });
	if (pulses.length > 12) pulses.length = 12;
}

t.mouseReleased(() => {
	addPulse('MOUSE UP', t.mouse.x, t.mouse.y);
});

t.draw(() => {
	t.background(6, 10, 22);

	for (let i = pulses.length - 1; i >= 0; i--) {
		const p = pulses[i];
		p.life -= 0.02;
		if (p.life <= 0) {
			pulses.splice(i, 1);
			continue;
		}
		t.push();
		t.translate(p.x, p.y - (1 - p.life) * 4);
		t.char('*');
		t.charColor(255, 210, 120);
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
	drawText('TEXTMODIFIER.MOUSERELEASED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: RELEASE EVENT', x, y++, 100, 220, 255);
	drawText('Event updates compact state.', x, y++, 140, 160, 190);
	drawText('Pulses show recent triggers.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('RELEASES: ' + count, x, y++, 140, 255, 180);
	drawText('LAST: ' + last.slice(0, 28), x, y++, 180, 200, 220);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### mouseScrolled()

```ts
mouseScrolled(callback): void;
```

Register the single-callback handler for mouse wheel scrolling.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`MouseEventHandler`](../namespaces/input/namespaces/mouse/type-aliases/MouseEventHandler.md) | Handler to run with mouse event data when the mouse wheel is scrolled. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let scale = 8;
let delta = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.mouseScrolled((data) => {
	delta = data.delta.y;
	scale = Math.max(3, Math.min(18, scale - delta * 0.1));
});

t.draw(() => {
	t.background(6, 10, 22);
	t.char('#');
	t.charColor(140, 220, 255);
	t.ellipse(scale, scale * 0.6);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.MOUSESCROLLED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SCROLL DELTA', x, y++, 100, 220, 255);
	drawText('Wheel or touchpad changes scale.', x, y++, 140, 160, 190);
	drawText('Delta sign is kept visible.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`SCALE: ${scale.toFixed(1)}`, x, y++, 140, 255, 180);
	drawText(`DELTA: ${delta.toFixed(1)}`, x, y++, 180, 200, 220);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### noLights()

```ts
noLights(): void;
```

Remove all active lights (ambient and point) and reset light falloff to `(1, 0, 0)`.

Useful when you want later draw calls in the same frame to render unlit.

#### Returns

`void`

#### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 8, 18);
	const time = t.frameCount * 0.025;
	value = 0.5 + 0.5 * Math.sin(time);
	t.perspective(58, 0.1, 4096);
	t.camera(16, -10, 42, 0, 0, 0);
	if (value > 0.5) t.noLights();
	else t.pointLight([255, 210, 120], { x: 18, y: -18, z: 28 });
	t.rotateY(time * 40);
	t.char('#');
	t.charColor(140, 220, 255);
	t.sphere(7);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.NOLIGHTS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: DISABLE LIGHTS', x, y++, 100, 220, 255);
	drawText('Lighting changes surface shade.', x, y++, 140, 160, 190);
	drawText('Scene keeps focus on one sphere.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(value > 0.5 ? 'LIGHTS: OFF' : 'LIGHTS: ON', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### noLoop()

```ts
noLoop(): void;
```

Stop the automatic rendering loop.

Rendering can be resumed later with [loop](#loop).

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let paused = false;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.mousePressed(() => {
	if (t.isLooping()) {
		paused = true;
		t.noLoop();
		t.redraw();
	} else {
		paused = false;
		t.loop();
	}
});

t.draw(() => {
	t.background(6, 10, 22);
	t.rotateZ(t.frameCount * 4);
	t.char('#');
	t.charColor(255, 210, 120);
	t.rect(12, 2);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.NOLOOP', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: PAUSE DRAW LOOP', x, y++, 100, 220, 255);
	drawText('Click toggles noLoop/loop.', x, y++, 140, 160, 190);
	drawText('Events still resume drawing.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const state = paused ? 'PAUSED' : 'LOOPING';
	drawText(`STATE: ${state}`, x, y++, 140, 255, 180);
	drawText('CLICK: TOGGLE LOOP', x, y++, 255, 225, 140);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### off()

```ts
off<K>(event, handler): void;
```

Remove a previously registered input event listener.

The handler reference must be the same function instance that was passed to `on()` or `once()`.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `K` *extends* \| keyof MouseEventMap \| keyof KeyboardEventMap \| keyof TouchEventMap \| keyof GamepadEventMap | Event name from the [InputEventMap](../namespaces/input/type-aliases/InputEventMap.md). |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `K` | The event the handler was attached to. |
| `handler` | [`InputEventMap`](../namespaces/input/type-aliases/InputEventMap.md)\[`K`\] | The exact function reference to remove. |

#### Returns

`void`

#### Example

```ts
function onPress(data) { console.log(data.position); }
t.on('mousePressed', onPress);

// Later
t.off('mousePressed', onPress);
```

***

### on()

```ts
on<K>(event, handler): () => void;
```

Register an input event listener.

Multiple listeners can coexist on the same event;
unlike the legacy single-callback methods (e.g. `mousePressed()`), calling `on()`
never replaces existing listeners.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `K` *extends* \| keyof MouseEventMap \| keyof KeyboardEventMap \| keyof TouchEventMap \| keyof GamepadEventMap | Event name from the [InputEventMap](../namespaces/input/type-aliases/InputEventMap.md). |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `K` | The event to listen for (e.g. `'mousePressed'`, `'keyReleased'`, `'gamepadConnected'`, `'pinch'`). |
| `handler` | [`InputEventMap`](../namespaces/input/type-aliases/InputEventMap.md)\[`K`\] | The callback to invoke when the event fires. |

#### Returns

A dispose function that removes this specific listener.

() => `void`

#### Example

```ts
// Add a click listener
const dispose = t.on('mouseClicked', (data) => {
  console.log('Clicked at', data.position.x, data.position.y);
});

// Later, remove it
dispose();
```

***

### once()

```ts
once<K>(event, handler): () => void;
```

Register an input event listener that removes itself after the first invocation.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `K` *extends* \| keyof MouseEventMap \| keyof KeyboardEventMap \| keyof TouchEventMap \| keyof GamepadEventMap | Event name from the [InputEventMap](../namespaces/input/type-aliases/InputEventMap.md). |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `K` | The event to listen for. |
| `handler` | [`InputEventMap`](../namespaces/input/type-aliases/InputEventMap.md)\[`K`\] | The callback to invoke once. |

#### Returns

A dispose function that removes the listener before it fires (if needed).

() => `void`

#### Example

```ts
t.once('keyPressed', (data) => {
  console.log('First key press was:', data.key);
});
```

***

### ortho()

```ts
ortho(near?, far?): void;
```

Enable orthographic projection for subsequent shape drawing.

By default, textmode uses a perspective projection. Calling this method switches to an
orthographic projection, where objects maintain their size regardless of depth (Z position).

The projection mode is reset to perspective at the beginning of each frame.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `near?` | `number` | Near clipping plane distance. |
| `far?` | `number` | Far clipping plane distance. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 8, 18);
	t.ortho();
	t.camera(0, 0, 42);
	for (let i = 0; i < 3; i++) {
		t.push();
		t.translate((i - 1) * 9, 0, i * -12);
		t.rotateY(t.frameCount + i * 35);
		t.char('+');
		t.charColor(120 + i * 40, 220, 255);
		t.box(6, 6, 6);
		t.pop();
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.ORTHO', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: ORTHO PROJECTION', x, y++, 100, 220, 255);
	drawText('Depth no longer changes scale.', x, y++, 140, 160, 190);
	drawText('Boxes keep equal apparent size.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('API: t.ortho()', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### perspective()

```ts
perspective(
   fov?, 
   near?, 
   far?): void;
```

Enable perspective projection and optionally set projection parameters.

The default perspective is tuned to match textmode.js legacy depth behavior.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fov?` | `number` | Vertical field-of-view in degrees. |
| `near?` | `number` | Near clipping plane distance; must be greater than 0. |
| `far?` | `number` | Far clipping plane distance; must be greater than `near`. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let fov = 60;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 8, 18);
	fov = 60 + Math.sin(t.frameCount * 0.03) * 25;
	t.perspective(fov, 0.1, 4096);
	t.camera(0, 0, 44, 0, 0, 0);
	for (let i = 0; i < 3; i++) {
		t.push();
		t.translate((i - 1) * 8, 0, i * -12);
		t.char('#');
		t.charColor(120 + i * 40, 220, 255 - i * 20);
		t.box(6, 6, 6);
		t.pop();
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.PERSPECTIVE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: FOV PROJECTION', x, y++, 100, 220, 255);
	drawText('FOV breathes wide to narrow.', x, y++, 140, 160, 190);
	drawText('Depth changes apparent size.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`FOV: ${fov.toFixed(1)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### pinch()

```ts
pinch(callback): void;
```

Register a callback for pinch gestures, receiving scale deltas.

Pinch gestures involve two touch points. The callback receives the current scale relative to
the initial distance and the change since the previous update, enabling zoom interactions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchPinchHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchPinchHandler.md) | Handler to run when a pinch gesture is detected. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let scale = 1;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.pinch((data) => {
	scale = Math.max(0.3, Math.min(4, data.scale));
});

t.mouseScrolled((data) => {
	scale = Math.max(0.3, Math.min(4, scale - data.delta.y * 0.01));
});

t.draw(() => {
	t.background(6, 10, 22);
	t.push();
	t.rotateZ(t.frameCount * 0.5);
	t.char('#');
	t.charColor(140, 220, 255);
	t.rect(8 * scale, 8 * scale);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.PINCH', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: PINCH SCALE', x, y++, 100, 220, 255);
	drawText('Pinch or scroll changes scale.', x, y++, 140, 160, 190);
	drawText('Shape size follows gesture.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`SCALE: ${scale.toFixed(2)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### point()

```ts
point(): void;
```

Draw one grid cell with the current settings.

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	const count = 24;
	for (let i = 0; i < count; i++) {
		const angle = t.frameCount * 0.03 + (i / count) * Math.PI * 2;
		const radius = 5 + (i % 4) * 2;
		t.push();
		t.translate(Math.cos(angle) * radius * 1.6, Math.sin(angle) * radius);
		t.char(i % 2 === 0 ? '+' : '.');
		t.charColor(120 + i * 4, 180, 255 - i * 3);
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
	drawText('TEXTMODIFIER.POINT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: DRAW ONE CELL', x, y++, 100, 220, 255);
	drawText('point() stamps the active glyph.', x, y++, 140, 160, 190);
	drawText('Each dot uses its own transform.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('API: t.point()', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### pointLight()

#### Call Signature

```ts
pointLight(
   v1, 
   v2, 
   v3, 
   x, 
   y, 
   z): void;
```

Add a point light using RGB components and explicit XYZ position.

Point lights are frame-scoped and reset each layer draw callback.
Up to five point lights are supported per frame. Additional calls are ignored.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v1` | `number` | Red component (0-255) |
| `v2` | `number` | Green component (0-255) |
| `v3` | `number` | Blue component (0-255) |
| `x` | `number` | World-space X position |
| `y` | `number` | World-space Y position |
| `z` | `number` | World-space Z position |

##### Returns

`void`

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 8, 18);
	const time = t.frameCount * 0.025;
	value = 0.5 + 0.5 * Math.sin(time);
	t.perspective(58, 0.1, 4096);
	t.camera(16, -10, 42, 0, 0, 0);
	t.ambientLight(20, 20, 28);
	t.pointLight([255, 210, 120], { x: Math.sin(time) * 24, y: -18, z: 28 });
	t.rotateY(time * 40);
	t.char('#');
	t.charColor(140, 220, 255);
	t.sphere(7);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.POINTLIGHT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: POINT LIGHT', x, y++, 100, 220, 255);
	drawText('Lighting changes surface shade.', x, y++, 140, 160, 190);
	drawText('Scene keeps focus on one sphere.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`SWEEP: ${value.toFixed(2)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Call Signature

```ts
pointLight(
   v1, 
   v2, 
   v3, 
   position): void;
```

Add a point light using RGB components and an object position.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v1` | `number` | Red component (0-255) |
| `v2` | `number` | Green component (0-255) |
| `v3` | `number` | Blue component (0-255) |
| `position` | `PointLightPosition` | World-space position |

##### Returns

`void`

#### Call Signature

```ts
pointLight(
   color, 
   x, 
   y, 
   z): void;
```

Add a point light using a color value and explicit XYZ position.

Lighting uses RGB only, so any provided alpha value is ignored.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `color` | `LightColorInput` | Color value (CSS string, TextmodeColor, or RGB(A) array) |
| `x` | `number` | World-space X position |
| `y` | `number` | World-space Y position |
| `z` | `number` | World-space Z position |

##### Returns

`void`

#### Call Signature

```ts
pointLight(color, position): void;
```

Add a point light using a color value and an object position.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `color` | `LightColorInput` | Color value (CSS string, TextmodeColor, or RGB(A) array) |
| `position` | `PointLightPosition` | World-space position |

##### Returns

`void`

***

### pop()

```ts
pop(): void;
```

Restore the most recently saved rendering state from the state stack.
Use with [push](#push) to isolate style changes within a block.

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	const time = t.frameCount * 0.03;
	t.push();
	t.rotateZ(time * 30);
	t.translate(10, 0);
	t.char('#');
	t.charColor(140, 255, 180);
	t.rect(4, 3);
	t.pop();
	t.charColor(255, 210, 120);
	t.char('+');
	t.rect(5, 1);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.POP', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: RESTORE STATE', x, y++, 100, 220, 255);
	drawText('pop() returns to prior state.', x, y++, 140, 160, 190);
	drawText('Center mark is not rotated.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('API: t.pop()', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### postDraw()

```ts
postDraw(callback): void;
```

Set the base layer post-draw callback.

This callback runs after the base layer's draw callback, ASCII conversion, and
any filters queued on the base layer during draw. Filters queued on
`t.layers.base` inside this callback are applied to the base layer before
other layers are composited on top.

Calling this method is equivalent to setting the callback on `textmodifier.layers.base`:
```js
textmodifier.layers.base.postDraw(callback);
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` | Function to run after the base layer has been drawn and filtered. |

#### Returns

`void`

#### Example

```js
t.draw(() => {
	t.background(0);
	t.char('A');
	t.rect(12, 8);
	t.layers.base.filter('grayscale', 0.5);
});

t.postDraw(() => {
	t.layers.base.filter('invert');
});
```

***

### push()

```ts
push(): void;
```

Save the current rendering state to the state stack.
Use with [pop](#pop) to isolate style changes within a block.

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	const time = t.frameCount * 0.03;
	for (let i = 0; i < 5; i++) {
		t.push();
		t.rotateZ(time * 20 + i * 72);
		t.translate(8 + i, 0);
		t.char('*');
		t.charColor(120 + i * 20, 220, 255 - i * 20);
		t.point();
		t.pop();
	}
	t.charColor(255, 210, 120);
	t.char('+');
	t.point();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.PUSH', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SAVE STATE', x, y++, 100, 220, 255);
	drawText('push() stores transform state.', x, y++, 140, 160, 190);
	drawText('Each spoke restores cleanly.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('API: t.push()', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### random()

#### Call Signature

```ts
random(): number;
```

Return a random number from 0 up to, but not including, 1.

When the sketch is created with `seed`, or after calling [randomSeed](#randomseed),
this method returns a reproducible sequence. This pseudo-random generator is
intended for creative coding and is not cryptographically secure.

##### Returns

`number`

Random number in the range [0, 1).

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
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

#### Call Signature

```ts
random(max): number;
```

Return a random number from 0 up to, but not including, `max`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `max` | `number` | Upper bound, exclusive. |

##### Returns

`number`

Random number in the range [0, max).

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
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

#### Call Signature

```ts
random(min, max): number;
```

Return a random number from `min` up to, but not including, `max`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `min` | `number` | Lower bound, inclusive. |
| `max` | `number` | Upper bound, exclusive. |

##### Returns

`number`

Random number in the range [min, max).

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
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

#### Call Signature

```ts
random<T>(choices): T | undefined;
```

Return a random element from an array.

##### Type Parameters

| Type Parameter |
| ------ |
| `T` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `choices` | readonly `T`[] | Values to choose from. |

##### Returns

`T` \| `undefined`

A random array element, or `undefined` when the array is empty.

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
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

***

### randomSeed()

```ts
randomSeed(seed): void;
```

Reset the main sketch random generator to a seed.

This also clears named streams created with [randomStream](#randomstream), so future
stream lookups are derived from the new root seed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `seed` | `TextmodeRandomSeed` | Seed used to restart the sequence. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
const points = [];

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

function rebuildPoints() {
	t.randomSeed('repeatable-grid');
	points.length = 0;
	for (let i = 0; i < 28; i++) {
		points.push({
			x: Math.floor(t.random(-20, 20)),
			y: Math.floor(t.random(-9, 9)),
			char: t.random(['.', '+', '*', '#']) ?? '.',
		});
	}
}

rebuildPoints();

t.draw(() => {
	t.background(8, 7, 18);
	if (t.frameCount % 120 === 1) {
		rebuildPoints();
	}

	for (const point of points) {
		t.push();
		t.translate(point.x, point.y);
		t.char(point.char);
		t.charColor(120, 240, 255);
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
	drawText('TEXTMODIFIER.RANDOMSEED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: RESET SEQUENCE', x, y++, 100, 220, 255);
	drawText('The same points return.', x, y++, 140, 160, 190);
	drawText('The seed is set every loop.', x, y++, 140, 160, 190);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### randomStream()

```ts
randomStream(name): TextmodeRandom;
```

Get an independent deterministic random stream for a name.

Named streams are derived from the current root seed and stream name. Consuming
values from one stream does not affect the main generator or other named streams.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Stream name. |

#### Returns

`TextmodeRandom`

A deterministic random generator for the given stream name.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
	seed: 'stream-demo',
});

const labelLayer = t.layers.add();
const leftStream = t.randomStream('left');
const rightStream = t.randomStream('right');
let leftY = 0;
let rightY = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 18);
	if (t.frameCount % 16 === 1) {
		leftY = Math.floor(leftStream.random(-9, 9));
		rightY = Math.floor(rightStream.random(-9, 9));
	}

	t.push();
	t.translate(-8, leftY);
	t.char('L');
	t.charColor(130, 255, 190);
	t.point();
	t.translate(16, rightY - leftY);
	t.char('R');
	t.charColor(255, 190, 130);
	t.point();
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.RANDOMSTREAM', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: NAMED STREAMS', x, y++, 100, 220, 255);
	drawText('Left and right are separate.', x, y++, 140, 160, 190);
	drawText('One stream cannot move another.', x, y++, 140, 160, 190);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### rect()

```ts
rect(width?, height?): void;
```

Draw a rectangle with the current settings.
Position is controlled via [translate](#translate), [push](#push), and [pop](#pop).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `width?` | `number` | Rectangle width in grid cells. Defaults to 1. |
| `height?` | `number` | Rectangle height in grid cells. Defaults to 1. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let widthCells = 0;
let heightCells = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	const time = t.frameCount * 0.03;
	widthCells = 12 + Math.round(Math.sin(time) * 5);
	heightCells = 6 + Math.round(Math.cos(time * 0.8) * 3);
	t.push();
	t.translate(8, 1);
	t.rotateZ(Math.sin(time) * 8);
	t.char('#');
	t.charColor(120, 220, 255);
	t.cellColor(20, 30, 60);
	t.rect(widthCells, heightCells);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.RECT', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: RECTANGLE SHAPE', x, y++, 100, 220, 255);
	drawText('Draws width by height cells.', x, y++, 140, 160, 190);
	drawText('Scene shifted clear of the HUD.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`W: ${widthCells}`, x, y++, 140, 255, 180);
	drawText(`H: ${heightCells}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### redraw()

```ts
redraw(n?): void;
```

Render a fixed number of frames on demand.

This method is useful when the render loop has been stopped with [noLoop](#noloop),
allowing you to trigger rendering on demand.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `n?` | `number` | Number of frames to render. Defaults to 1. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let steps = 0;
let lastRequest = 1;

t.setup(() => {
	t.noLoop();
});

t.mousePressed(() => {
	lastRequest = 1;
	t.redraw();
});

t.keyPressed(() => {
	lastRequest = 5;
	t.redraw(5);
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	steps++;
	t.background(6, 8, 14);

	const width = Math.max(12, Math.floor(t.grid.cols * 0.6));
	for (let i = 0; i < width; i++) {
		const phase = steps * 0.32 + i * 0.45;
		const x = i - Math.floor(width / 2);
		const y = Math.round(Math.sin(phase) * 5);
		t.push();
		t.translate(x, y + 2);
		t.char(i % 3 === 0 ? '+' : '*');
		t.charColor(90 + (i % 12) * 12, 200, 255);
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

	drawText('TEXTMODIFIER.REDRAW', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: MANUAL RENDER STEPS', x, y++, 100, 220, 255);
	drawText('setup pauses with noLoop().', x, y++, 140, 160, 190);
	drawText('redraw(n) renders n frames.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`FRAMES: ${steps}`, x, y++, 140, 255, 180);
	drawText(`LAST REQUEST: ${lastRequest}`, x, y++, 255, 225, 140);
	drawText('CLICK: REDRAW 1', x, y++, 255, 225, 140);
	drawText('ANY KEY: REDRAW 5', x, y++, 255, 225, 140);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### requestPointerLock()

```ts
requestPointerLock(): boolean;
```

Request browser pointer lock for the textmode canvas.

When pointer lock is active, mouse movement is reported as relative deltas via
[Textmodifier.movedX](#movedx) and [Textmodifier.movedY](#movedy), allowing infinite-look and
first-person style controls.

#### Returns

`boolean`

`true` if the browser exposes pointer lock and the request was initiated,
otherwise `false`.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let cx = 0;
let cy = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.mouseClicked(() => {
	if (document.pointerLockElement === t.canvas) t.exitPointerLock();
	else t.requestPointerLock();
});

t.draw(() => {
	t.background(6, 10, 22);
	const locked = document.pointerLockElement === t.canvas;
	if (locked) {
		cx += t.movedX * 0.08;
		cy += t.movedY * 0.08;
	}
	cx = Math.max(-20, Math.min(20, cx));
	cy = Math.max(-10, Math.min(10, cy));
	t.push();
	t.translate(cx, cy);
	t.char(locked ? '@' : '+');
	t.charColor(locked ? 140 : 255, locked ? 255 : 210, 180);
	t.point();
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.REQUESTPOINTERLOCK', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: LOCK POINTER', x, y++, 100, 220, 255);
	drawText('Click toggles pointer lock.', x, y++, 140, 160, 190);
	drawText('Movement uses movedX/movedY.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(document.pointerLockElement === t.canvas ? 'LOCKED: TRUE' : 'LOCKED: FALSE', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### resetCamera()

```ts
resetCamera(): void;
```

Reset to the default auto camera behavior.

This clears any active explicit camera and returns view calculation to renderer-managed defaults.

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let custom = true;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 8, 18);
	custom = Math.floor(t.frameCount / 120) % 2 === 0;
	if (custom) {
		t.camera(Math.sin(t.frameCount * 0.03) * 20, 10, 38, 0, 0, 0);
	} else {
		t.resetCamera();
	}
	t.char('#');
	t.charColor(140, 220, 255);
	t.rotateY(t.frameCount);
	t.box(8, 8, 8);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.RESETCAMERA', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: RESTORE CAMERA', x, y++, 100, 220, 255);
	drawText('Alternates custom and reset.', x, y++, 140, 160, 190);
	drawText('resetCamera returns auto view.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(custom ? 'MODE: CUSTOM' : 'MODE: RESET', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### resetMatrix()

```ts
resetMatrix(): void;
```

Reset the current model transform to identity.

This clears translation, rotation, and scale state for subsequent draw calls.

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	const time = t.frameCount * 0.04;
	t.push();
	t.rotateZ(time * 40);
	t.translate(12, 0);
	t.charColor(120, 220, 255);
	t.char('#');
	t.rect(6, 3);
	t.resetMatrix();
	t.charColor(255, 210, 120);
	t.translate(8, 3);
	t.char('+');
	t.rect(5, 1);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.RESETMATRIX', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: CLEAR TRANSFORM', x, y++, 100, 220, 255);
	drawText('resetMatrix drops transforms.', x, y++, 140, 160, 190);
	drawText('Yellow bar uses fresh matrix.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('API: t.resetMatrix()', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### resetShader()

```ts
resetShader(): void;
```

Reset the current shader to the default solid color shader.

This clears both the active shader and any accumulated uniforms set via [setUniform](#setuniform).
Equivalent to calling `shader(null)`.

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let shaderObj;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.setup(async () => {
	const vert = `#version 300 es
	in vec4 a_position;
	in vec2 a_texCoord;
	out vec2 v_uv;
	void main(){gl_Position=a_position;v_uv=a_texCoord;}`;
	const frag = `#version 300 es
	precision highp float;
	in vec2 v_uv;
	uniform float u_time;
	layout(location=0) out vec4 o_character;
	layout(location=1) out vec4 o_primaryColor;
	layout(location=2) out vec4 o_secondaryColor;
	void main(){float v=fract(v_uv.x*8.0+u_time);o_character=vec4(v,0,0,1);o_primaryColor=vec4(v,0.8,1.0,1);o_secondaryColor=vec4(0.02,0.04,0.08,1);}`;
	shaderObj = await t.createShader(vert, frag);
});

t.draw(() => {
	t.background(6, 10, 22);
	if (shaderObj && Math.floor(t.frameCount / 90) % 2 === 0) {
		t.shader(shaderObj);
		t.setUniform('u_time', t.frameCount * 0.02);
	}
	t.rect(t.grid.cols, t.grid.rows);
	t.resetShader();
	t.char('#');
	t.charColor(255, 210, 120);
	t.rect(10, 5);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.RESETSHADER', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: RESTORE SHADER', x, y++, 100, 220, 255);
	drawText('Shader affects the main drawing.', x, y++, 140, 160, 190);
	drawText('resetShader restores default.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('RESET AFTER FULLSCREEN', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### resizeCanvas()

```ts
resizeCanvas(width, height): void;
```

Resize the canvas and adjust all related components accordingly.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `width` | `number` | The new width of the canvas. |
| `height` | `number` | The new height of the canvas. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let resized = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.mouseClicked(() => {
	resized++;
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});

t.draw(() => {
	t.background(6, 10, 22);
	t.char('#');
	t.charColor(140, 220, 255);
	t.rect(12, 5);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.RESIZECANVAS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: RESIZE CANVAS', x, y++, 100, 220, 255);
	drawText('Click calls resizeCanvas.', x, y++, 140, 160, 190);
	drawText('Window callback does the same.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CLICKS: ${resized}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### rotate()

#### Call Signature

```ts
rotate(): void;
```

Set rotation for subsequent shape drawing.

All geometries rotate around the center of the shape.

##### Returns

`void`

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	const time = t.frameCount * 0.04;
	value = (time * 60) % 360;
	t.charColor(50, 60, 90);
	t.char('.');
	t.line(-18, 0, 18, 0);
	t.line(0, -10, 0, 10);
	t.push();
	t.rotate(value);
	t.char('#');
	t.charColor(140, 255, 180);
	t.rect(6, 4);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.ROTATE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: ROTATE IN 2D', x, y++, 100, 220, 255);
	drawText('Rotates around the Z axis.', x, y++, 140, 160, 190);
	drawText('Grid cross shows original axes.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`DEG: ${value.toFixed(1)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Call Signature

```ts
rotate(angle): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `angle` | `number` |

##### Returns

`void`

#### Call Signature

```ts
rotate(angle, axis): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `angle` | `number` |
| `axis` | \| \[`number`, `number`, `number`\] \| \{ `x`: `number`; `y`: `number`; `z`: `number`; \} |

##### Returns

`void`

#### Call Signature

```ts
rotate(
   degreesX?, 
   degreesY?, 
   degreesZ?): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `degreesX?` | `number` |
| `degreesY?` | `number` |
| `degreesZ?` | `number` |

##### Returns

`void`

***

### rotateGesture()

```ts
rotateGesture(callback): void;
```

Register a callback for rotate gestures, receiving rotation deltas in degrees.

Rotation callbacks provide the cumulative rotation and delta rotation since the last update,
along with the gesture centre in grid coordinates. Ideal for dial-like interactions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchRotateHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchRotateHandler.md) | Handler to run when a rotation gesture is detected. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let rotation = 0;
let dragStart = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.rotateGesture((data) => {
	rotation += data.deltaRotation;
});

t.mousePressed(() => {
	dragStart = t.mouse.x;
});

t.mouseDragged(() => {
	rotation += (t.mouse.x - dragStart) * 0.5;
	dragStart = t.mouse.x;
});

t.draw(() => {
	t.background(6, 10, 22);
	t.rotateZ(rotation);
	t.char('#');
	t.charColor(140, 220, 255);
	t.rect(14, 4);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.ROTATEGESTURE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: ROTATE GESTURE', x, y++, 100, 220, 255);
	drawText('Touch twist or drag rotates.', x, y++, 140, 160, 190);
	drawText('Rotation accumulates over time.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`DEG: ${rotation.toFixed(1)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### rotateX()

```ts
rotateX(degrees?): number | void;
```

Set X-axis rotation for subsequent shape drawing, or get the current angle.

All geometries rotate around the center of the shape.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `degrees?` | `number` | Rotation angle in degrees around the X axis. |

#### Returns

`number` \| `void`

Current X-axis rotation in degrees when called without arguments.

#### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	const time = t.frameCount * 0.04;
	value = (time * 70) % 360;
	t.charColor(50, 60, 90);
	t.char('.');
	t.line(-18, 0, 18, 0);
	t.line(0, -10, 0, 10);
	t.push();
	t.rotateX(value);
	t.char('#');
	t.charColor(140, 255, 180);
	t.rect(6, 4);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.ROTATEX', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: X AXIS ROTATION', x, y++, 100, 220, 255);
	drawText('Pitch changes vertical plane.', x, y++, 140, 160, 190);
	drawText('Grid cross shows original axes.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`DEG: ${value.toFixed(1)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### rotateY()

```ts
rotateY(degrees?): number | void;
```

Set Y-axis rotation for subsequent shape drawing, or get the current angle.

All geometries rotate around the center of the shape.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `degrees?` | `number` | Rotation angle in degrees around the Y axis. |

#### Returns

`number` \| `void`

Current Y-axis rotation in degrees when called without arguments.

#### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	const time = t.frameCount * 0.04;
	value = (time * 70) % 360;
	t.charColor(50, 60, 90);
	t.char('.');
	t.line(-18, 0, 18, 0);
	t.line(0, -10, 0, 10);
	t.push();
	t.rotateY(value);
	t.char('#');
	t.charColor(140, 255, 180);
	t.rect(6, 4);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.ROTATEY', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: Y AXIS ROTATION', x, y++, 100, 220, 255);
	drawText('Yaw turns the rectangle.', x, y++, 140, 160, 190);
	drawText('Grid cross shows original axes.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`DEG: ${value.toFixed(1)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### rotateZ()

```ts
rotateZ(degrees?): number | void;
```

Set Z-axis rotation for subsequent shape drawing, or get the current angle.

All geometries rotate around the center of the shape.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `degrees?` | `number` | Rotation angle in degrees around the Z axis. |

#### Returns

`number` \| `void`

Current Z-axis rotation in degrees when called without arguments.

#### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	const time = t.frameCount * 0.04;
	value = (time * 70) % 360;
	t.charColor(50, 60, 90);
	t.char('.');
	t.line(-18, 0, 18, 0);
	t.line(0, -10, 0, 10);
	t.push();
	t.rotateZ(value);
	t.char('#');
	t.charColor(140, 255, 180);
	t.rect(6, 4);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.ROTATEZ', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: Z AXIS ROTATION', x, y++, 100, 220, 255);
	drawText('Roll matches 2D rotation.', x, y++, 140, 160, 190);
	drawText('Grid cross shows original axes.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`DEG: ${value.toFixed(1)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### scale()

```ts
scale(
   x, 
   y?, 
   z?): void;
```

Scale subsequent geometry in model space.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x` | `number` | Scale factor for X. |
| `y?` | `number` | Scale factor for Y. Defaults to `x`. |
| `z?` | `number` | Scale factor for Z. Defaults to `x` for uniform scale, or `1` when only `x` and `y` are provided. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let value = 1;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	const time = t.frameCount * 0.04;
	value = 0.7 + 0.4 * Math.sin(time);
	t.charColor(50, 60, 90);
	t.char('.');
	t.line(-18, 0, 18, 0);
	t.line(0, -10, 0, 10);
	t.push();
	t.translate(8, 1);
	t.scale(value, value);
	t.char('#');
	t.charColor(140, 255, 180);
	t.cellColor(20, 50, 90);
	t.rect(10, 5);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.SCALE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: RESIZE MODEL', x, y++, 100, 220, 255);
	drawText('Scales following geometry.', x, y++, 140, 160, 190);
	drawText('Grid cross shows original axes.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`SCALE: ${value.toFixed(2)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### setCamera()

```ts
setCamera(camera): void;
```

Activate a previously created camera object.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `camera` | [`TextmodeCamera`](TextmodeCamera.md) | Camera instance to activate. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let cameraA;
let cameraB;
let active = false;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.setup(() => {
	t.perspective(58, 0.1, 4096);
	cameraA = t.createCamera();
	cameraA.setPosition(-28, 10, 36).lookAt(0, 0, 0);
	cameraB = t.createCamera();
	cameraB.setPosition(28, 10, 36).lookAt(0, 0, 0);
});

t.draw(() => {
	t.background(6, 8, 18);
	active = Math.floor(t.frameCount / 120) % 2 === 0;
	t.setCamera(active ? cameraA : cameraB);
	t.ambientLight(25, 28, 36);
	t.pointLight([255, 210, 140], { x: 18, y: -16, z: 28 });
	for (let i = 0; i < 3; i++) {
		t.push();
		t.translate((i - 1) * 9, 0, i * -8);
		t.rotateY(t.frameCount + i * 30);
		t.char('#');
		t.charColor(120 + i * 40, 220, 255 - i * 20);
		t.box(5, 5, 5);
		t.pop();
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.SETCAMERA', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: ACTIVATE CAMERA', x, y++, 100, 220, 255);
	drawText('Two camera objects alternate.', x, y++, 140, 160, 190);
	drawText('Scene proves viewpoint change.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(active ? 'ACTIVE: CAMERA A' : 'ACTIVE: CAMERA B', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### setUniform()

```ts
setUniform(name, value): void;
```

Set a uniform value on the current custom shader.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Uniform variable name. |
| `value` | `UniformValue` | Uniform value. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let customShader = null;

t.setup(async () => {
	customShader = await t.createFilterShader(`#version 300 es
precision highp float;
in vec2 v_uv;
uniform float u_time;
uniform vec2 u_mouse;
layout(location = 0) out vec4 o_character;
layout(location = 1) out vec4 o_primaryColor;
layout(location = 2) out vec4 o_secondaryColor;
void main() {
	float wave = sin((v_uv.x + v_uv.y + u_time) * 24.0);
	float glyph = step(0.0, wave);
	float glow = 0.4 + 0.6 * distance(v_uv, u_mouse);
	o_character = vec4(glyph, 0.0, 0.0, 1.0);
	o_primaryColor = vec4(0.3, glow, 1.0, 1.0);
	o_secondaryColor = vec4(0.02, 0.03, 0.08, 1.0);
}`);
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(0);
	if (!customShader) return;
	t.shader(customShader);
	const time = t.frameCount * 0.02;
	const mx = (Math.sin(time) + 1) * 0.5;
	const my = (Math.cos(time) + 1) * 0.5;
	t.setUniform('u_time', time);
	t.setUniform('u_mouse', [mx, my]);
	t.rect(t.grid.cols, t.grid.rows);
	t.resetShader();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODIFIER.SETUNIFORM', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: CUSTOM SHADER', x, y++, 100, 220, 255);
	drawText('Uniforms drive GLSL state.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('UNIFORM: u_time', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### setUniforms()

```ts
setUniforms(uniforms): void;
```

Set multiple uniform values on the current custom shader.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `uniforms` | `Record`\<`string`, `UniformValue`\> | Uniform name-value pairs. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let customShader = null;

t.setup(async () => {
	customShader = await t.createFilterShader(`#version 300 es
precision highp float;
in vec2 v_uv;
uniform float u_time;
uniform vec2 u_mouse;
layout(location = 0) out vec4 o_character;
layout(location = 1) out vec4 o_primaryColor;
layout(location = 2) out vec4 o_secondaryColor;
void main() {
	float wave = sin((v_uv.x + v_uv.y + u_time) * 24.0);
	float glyph = step(0.0, wave);
	float glow = 0.4 + 0.6 * distance(v_uv, u_mouse);
	o_character = vec4(glyph, 0.0, 0.0, 1.0);
	o_primaryColor = vec4(0.3, glow, 1.0, 1.0);
	o_secondaryColor = vec4(0.02, 0.03, 0.08, 1.0);
}`);
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(0);
	if (!customShader) return;
	t.shader(customShader);
	const time = t.frameCount * 0.02;
	const mx = (Math.sin(time) + 1) * 0.5;
	const my = (Math.cos(time) + 1) * 0.5;
	t.setUniforms({ u_time: time, u_mouse: [mx, my] });
	t.rect(t.grid.cols, t.grid.rows);
	t.resetShader();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODIFIER.SETUNIFORMS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: CUSTOM SHADER', x, y++, 100, 220, 255);
	drawText('Uniforms drive GLSL state.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('UNIFORMS: 2', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### setup()

```ts
setup(callback): Promise<void>;
```

Set the setup callback that runs once initialization is complete.

This callback is called after font loading and grid initialization, allowing access to
properties like `textmodifier.grid.cols` for calculating layout or setup variables.

The callback can be asynchronous (return a Promise).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` \| `Promise`\<`void`\> | Function to run after setup is complete. |

#### Returns

`Promise`\<`void`\>

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let seed = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.setup(() => {
	seed = Math.floor(Math.random() * 999);
});

t.draw(() => {
	t.background(6, 10, 22);
	const time = t.frameCount * 0.03;
	for (let i = 0; i < 8; i++) {
		t.push();
		t.translate(Math.cos(time + i) * 12, Math.sin(time + i) * 6);
		t.char(String((seed + i) % 10));
		t.charColor(120 + i * 12, 220, 255 - i * 10);
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
	drawText('TEXTMODIFIER.SETUP', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: ONE-TIME INIT', x, y++, 100, 220, 255);
	drawText('setup() runs before drawing.', x, y++, 140, 160, 190);
	drawText('Seed is created once.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`SEED: ${seed}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### shader()

```ts
shader(shader): void;
```

Set a custom shader for subsequent drawing operations.

The shader persists until explicitly reset via [resetShader](#resetshader) or by calling `shader(null)`.
This behavior matches p5.js, allowing multiple draw calls with the same shader.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `shader` | [`TextmodeShader`](TextmodeShader.md) \| `null` | Custom shader to use, or `null` to reset to the default shader. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let customShader = null;

t.setup(async () => {
	customShader = await t.createFilterShader(`#version 300 es
precision highp float;
in vec2 v_uv;
uniform float u_time;
uniform vec2 u_mouse;
layout(location = 0) out vec4 o_character;
layout(location = 1) out vec4 o_primaryColor;
layout(location = 2) out vec4 o_secondaryColor;
void main() {
	float wave = sin((v_uv.x + v_uv.y + u_time) * 24.0);
	float glyph = step(0.0, wave);
	float glow = 0.4 + 0.6 * distance(v_uv, u_mouse);
	o_character = vec4(glyph, 0.0, 0.0, 1.0);
	o_primaryColor = vec4(0.3, glow, 1.0, 1.0);
	o_secondaryColor = vec4(0.02, 0.03, 0.08, 1.0);
}`);
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(0);
	if (!customShader) return;
	t.shader(customShader);
	const time = t.frameCount * 0.02;
	const mx = (Math.sin(time) + 1) * 0.5;
	const my = (Math.cos(time) + 1) * 0.5;
	t.setUniform('u_time', time);
	t.setUniform('u_mouse', [mx, my]);
	t.rect(t.grid.cols, t.grid.rows);
	t.resetShader();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODIFIER.SHADER', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: CUSTOM SHADER', x, y++, 100, 220, 255);
	drawText('Uniforms drive GLSL state.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const state = customShader ? 'READY' : 'WAIT';
	drawText(`SHADER: ${state}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### sphere()

```ts
sphere(radius?): void;
```

Draw a sphere mesh primitive.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `radius?` | `number` | Sphere radius in grid cells (defaults to 50). |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let spin = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 8, 18);
	const time = t.frameCount * 0.025;
	spin = (time * 40) % 360;
	t.perspective(58, 0.1, 4096);
	t.camera(18, -10, 42, 0, 0, 0);
	t.ambientLight(24, 28, 38);
	t.pointLight([255, 210, 140], { x: 18, y: -18, z: 28 });
	t.push();
	t.translate(5, 1, 0);
	t.rotateY(spin);
	t.rotateX(18);
	t.char('#');
	t.charColor(140, 220, 255);
	t.cellColor(16, 24, 42);
	t.sphere(7);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.SPHERE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: 3D SPHERE', x, y++, 100, 220, 255);
	drawText('Radius defines all axes.', x, y++, 140, 160, 190);
	drawText('Camera and light reveal depth.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`SPIN: ${spin.toFixed(1)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### stroke()

#### Call Signature

```ts
stroke(): TextmodeColor;
```

Alias for [charColor](#charcolor). Current stroke (character) color.

##### Returns

[`TextmodeColor`](TextmodeColor.md)

Current character color.

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
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
	drawText('stroke colors shape edges.', x, y++, 140, 160, 190);
	drawText('fill controls interior cells.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`STROKE R: ${red}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Call Signature

```ts
stroke(gray, alpha?): void;
```

Alias for [charColor](#charcolor). Set the stroke (character) color using a grayscale value.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gray` | `number` | Grayscale value (0-255) |
| `alpha?` | `number` | Optional alpha value (0-255) |

##### Returns

`void`

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
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
	drawText('stroke colors shape edges.', x, y++, 140, 160, 190);
	drawText('fill controls interior cells.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`STROKE R: ${red}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Call Signature

```ts
stroke(
   r, 
   g, 
   b, 
   a?): void;
```

Alias for [charColor](#charcolor). Set the stroke (character) color using RGB(A) values.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | `number` | Red component (0-255) |
| `g` | `number` | Green component (0-255) |
| `b` | `number` | Blue component (0-255) |
| `a?` | `number` | Optional alpha component (0-255) |

##### Returns

`void`

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
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
	drawText('stroke colors shape edges.', x, y++, 140, 160, 190);
	drawText('fill controls interior cells.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`STROKE R: ${red}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Call Signature

```ts
stroke(value): void;
```

Alias for [charColor](#charcolor). Set the stroke (character) color using a CSS string or TextmodeColor object.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| [`TextmodeColor`](TextmodeColor.md) | Hex string, `rgb()`/`rgba()` string, or an existing color object |

##### Returns

`void`

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
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
	drawText('stroke colors shape edges.', x, y++, 140, 160, 190);
	drawText('fill controls interior cells.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`STROKE R: ${red}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### swipe()

```ts
swipe(callback): void;
```

Register a callback for swipe gestures.

Swipes provide a normalised direction vector, travelled distance, and velocity in CSS pixels
per millisecond. Useful for panning, flicks, or quick shortcuts.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchSwipeHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchSwipeHandler.md) | Handler to run when a swipe gesture is detected. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

const particles = [];
let last = 'NONE';
let sx = 0;
let sy = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

function launch(dx, dy) {
	last = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'RIGHT' : 'LEFT') : dy > 0 ? 'DOWN' : 'UP';
	for (let i = 0; i < 8; i++) particles.push({ x: 0, y: 0, vx: dx * (1 + i * 0.1), vy: dy * (1 + i * 0.1), life: 1 });
}

t.swipe((data) => {
	launch(data.direction.x, data.direction.y);
});

t.mousePressed(() => {
	sx = t.mouse.x;
	sy = t.mouse.y;
});

t.mouseReleased(() => {
	const dx = t.mouse.x - sx;
	const dy = t.mouse.y - sy;
	const len = Math.hypot(dx, dy);
	if (len > 4) launch(dx / len, dy / len);
});

t.draw(() => {
	t.background(6, 10, 22);
	for (let i = particles.length - 1; i >= 0; i--) {
		const p = particles[i];
		p.x += p.vx;
		p.y += p.vy;
		p.life -= 0.025;
		if (p.life <= 0) particles.splice(i, 1);
		t.push();
		t.translate(p.x, p.y);
		t.char('*');
		t.charColor(255, 210, 120);
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
	drawText('TEXTMODIFIER.SWIPE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: SWIPE DIRECTION', x, y++, 100, 220, 255);
	drawText('Swipe or drag/release.', x, y++, 140, 160, 190);
	drawText('Particles follow direction.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('LAST: ' + last, x, y++, 140, 255, 180);
	drawText(`ACTIVE: ${particles.length}`, x, y++, 180, 200, 220);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### tap()

```ts
tap(callback): void;
```

Register a callback for tap gestures.

A tap is fired when the user quickly touches and releases the canvas without travelling far.
Use [input.touch.TouchTapEventData.taps](../namespaces/input/namespaces/touch/interfaces/TouchTapEventData.md#property-taps) to determine whether the gesture is a single or multi tap.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchTapHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchTapHandler.md) | Handler to run when a tap gesture is detected. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

const pulses = [];
let count = 0;
let last = 'WAITING';

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

function addPulse(label, x = 0, y = 0) {
	count++;
	last = label;
	pulses.unshift({ label, x, y, life: 1 });
	if (pulses.length > 12) pulses.length = 12;
}

t.tap((data) => {
	const touch = data?.touch || t.mouse;
	addPulse('TAPS', touch?.x || 0, touch?.y || 0);
});

t.draw(() => {
	t.background(6, 10, 22);

	for (let i = pulses.length - 1; i >= 0; i--) {
		const p = pulses[i];
		p.life -= 0.02;
		if (p.life <= 0) {
			pulses.splice(i, 1);
			continue;
		}
		t.push();
		t.translate(p.x, p.y - (1 - p.life) * 4);
		t.char('*');
		t.charColor(255, 210, 120);
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
	drawText('TEXTMODIFIER.TAP', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TAP GESTURE', x, y++, 100, 220, 255);
	drawText('Event updates compact state.', x, y++, 140, 160, 190);
	drawText('Pulses show recent triggers.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('TAPS: ' + count, x, y++, 140, 255, 180);
	drawText('LAST: ' + last.slice(0, 28), x, y++, 180, 200, 220);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### targetFrameRate()

```ts
targetFrameRate(fps?): number | void;
```

Set or get the target frame rate limit.

Unlike [frameRate](#framerate), the getter returns the configured target instead of the measured rate.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fps?` | `number` | New target frame rate. |

#### Returns

`number` \| `void`

Current target frame rate when called without arguments.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let target = 60;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	target = Math.floor(t.frameCount / 150) % 2 === 0 ? 24 : 60;
	t.targetFrameRate(target);
	for (let i = 0; i < target / 4; i++) {
		t.push();
		t.translate(-18 + i, 3);
		t.char('+');
		t.charColor(120, 220, 255);
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
	drawText('TEXTMODIFIER.TARGETFRAMERATE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TARGET FPS', x, y++, 100, 220, 255);
	drawText('Sets desired draw cadence.', x, y++, 140, 160, 190);
	drawText('Readout is kept compact.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`TARGET: ${t.targetFrameRate()}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### torus()

```ts
torus(radius?, tubeRadius?): void;
```

Draw a torus mesh primitive.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `radius?` | `number` | Radius from center to tube centerline (defaults to 50). |
| `tubeRadius?` | `number` | Radius of the tube (defaults to 10). |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let spin = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 8, 18);
	const time = t.frameCount * 0.025;
	spin = (time * 40) % 360;
	t.perspective(58, 0.1, 4096);
	t.camera(18, -10, 42, 0, 0, 0);
	t.ambientLight(24, 28, 38);
	t.pointLight([255, 210, 140], { x: 18, y: -18, z: 28 });
	t.push();
	t.translate(5, 1, 0);
	t.rotateY(spin);
	t.rotateX(18);
	t.char('#');
	t.charColor(140, 220, 255);
	t.cellColor(16, 24, 42);
	t.torus(8, 2);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.TORUS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: 3D TORUS', x, y++, 100, 220, 255);
	drawText('Major and tube radius define ring.', x, y++, 140, 160, 190);
	drawText('Camera and light reveal depth.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`SPIN: ${spin.toFixed(1)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### touchCancelled()

```ts
touchCancelled(callback): void;
```

Register the single-callback handler for browser-cancelled touches.

Cancellation can occur when the browser takes ownership for scrolling or if the gesture
leaves the window. Treat this as an aborted touch and clean up any in-progress state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchEventHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchEventHandler.md) | Handler to run when a touch is cancelled. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

const pulses = [];
let count = 0;
let last = 'WAITING';

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

function addPulse(label, x = 0, y = 0) {
	count++;
	last = label;
	pulses.unshift({ label, x, y, life: 1 });
	if (pulses.length > 12) pulses.length = 12;
}

t.touchCancelled((data) => {
	const touch = data?.touch || t.mouse;
	addPulse('CANCELS', touch?.x || 0, touch?.y || 0);
});

t.draw(() => {
	t.background(6, 10, 22);

	for (let i = pulses.length - 1; i >= 0; i--) {
		const p = pulses[i];
		p.life -= 0.02;
		if (p.life <= 0) {
			pulses.splice(i, 1);
			continue;
		}
		t.push();
		t.translate(p.x, p.y - (1 - p.life) * 4);
		t.char('*');
		t.charColor(255, 210, 120);
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
	drawText('TEXTMODIFIER.TOUCHCANCELLED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TOUCH CANCEL', x, y++, 100, 220, 255);
	drawText('Event updates compact state.', x, y++, 140, 160, 190);
	drawText('Pulses show recent triggers.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CANCELS: ' + count, x, y++, 140, 255, 180);
	drawText('LAST: ' + last.slice(0, 28), x, y++, 180, 200, 220);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### touchEnded()

```ts
touchEnded(callback): void;
```

Register the single-callback handler for touch end events.

This fires after the finger leaves the canvas surface and the browser raises a `touchend`
event. Use it to finalise state such as drawing strokes or completing gestures.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchEventHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchEventHandler.md) | Handler to run when a touch ends. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

const pulses = [];
let count = 0;
let last = 'WAITING';

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

function addPulse(label, x = 0, y = 0) {
	count++;
	last = label;
	pulses.unshift({ label, x, y, life: 1 });
	if (pulses.length > 12) pulses.length = 12;
}

t.touchEnded((data) => {
	const touch = data?.touch || t.mouse;
	addPulse('ENDS', touch?.x || 0, touch?.y || 0);
});

t.draw(() => {
	t.background(6, 10, 22);

	for (let i = pulses.length - 1; i >= 0; i--) {
		const p = pulses[i];
		p.life -= 0.02;
		if (p.life <= 0) {
			pulses.splice(i, 1);
			continue;
		}
		t.push();
		t.translate(p.x, p.y - (1 - p.life) * 4);
		t.char('*');
		t.charColor(255, 210, 120);
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
	drawText('TEXTMODIFIER.TOUCHENDED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TOUCH END', x, y++, 100, 220, 255);
	drawText('Event updates compact state.', x, y++, 140, 160, 190);
	drawText('Pulses show recent triggers.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('ENDS: ' + count, x, y++, 140, 255, 180);
	drawText('LAST: ' + last.slice(0, 28), x, y++, 180, 200, 220);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### touchMoved()

```ts
touchMoved(callback): void;
```

Register the single-callback handler for touch movement.

The provided callback is invoked continuously while the browser reports move events. Use the
`previousTouch` and `deltaTime` fields to derive velocity or gesture behaviour.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchEventHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchEventHandler.md) | Handler to run when a touch moves. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

const pulses = [];
let count = 0;
let last = 'WAITING';

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

function addPulse(label, x = 0, y = 0) {
	count++;
	last = label;
	pulses.unshift({ label, x, y, life: 1 });
	if (pulses.length > 12) pulses.length = 12;
}

t.touchMoved((data) => {
	const touch = data?.touch || t.mouse;
	addPulse('MOVES', touch?.x || 0, touch?.y || 0);
});

t.draw(() => {
	t.background(6, 10, 22);

	for (let i = pulses.length - 1; i >= 0; i--) {
		const p = pulses[i];
		p.life -= 0.02;
		if (p.life <= 0) {
			pulses.splice(i, 1);
			continue;
		}
		t.push();
		t.translate(p.x, p.y - (1 - p.life) * 4);
		t.char('*');
		t.charColor(255, 210, 120);
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
	drawText('TEXTMODIFIER.TOUCHMOVED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TOUCH MOVE', x, y++, 100, 220, 255);
	drawText('Event updates compact state.', x, y++, 140, 160, 190);
	drawText('Pulses show recent triggers.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('MOVES: ' + count, x, y++, 140, 255, 180);
	drawText('LAST: ' + last.slice(0, 28), x, y++, 180, 200, 220);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### touchStarted()

```ts
touchStarted(callback): void;
```

Register the single-callback handler for touch start events.

The callback receives [input.touch.TouchEventData](../namespaces/input/namespaces/touch/interfaces/TouchEventData.md) containing the touch that triggered the event,
all active touches, and the original DOM event. Use this to react when the user places one or
more fingers on the canvas.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchEventHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchEventHandler.md) | Handler to run when a touch starts. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

const pulses = [];
let count = 0;
let last = 'WAITING';

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

function addPulse(label, x = 0, y = 0) {
	count++;
	last = label;
	pulses.unshift({ label, x, y, life: 1 });
	if (pulses.length > 12) pulses.length = 12;
}

t.touchStarted((data) => {
	const touch = data?.touch || t.mouse;
	addPulse('STARTS', touch?.x || 0, touch?.y || 0);
});

t.draw(() => {
	t.background(6, 10, 22);

	for (let i = pulses.length - 1; i >= 0; i--) {
		const p = pulses[i];
		p.life -= 0.02;
		if (p.life <= 0) {
			pulses.splice(i, 1);
			continue;
		}
		t.push();
		t.translate(p.x, p.y - (1 - p.life) * 4);
		t.char('*');
		t.charColor(255, 210, 120);
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
	drawText('TEXTMODIFIER.TOUCHSTARTED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TOUCH BEGIN', x, y++, 100, 220, 255);
	drawText('Event updates compact state.', x, y++, 140, 160, 190);
	drawText('Pulses show recent triggers.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('STARTS: ' + count, x, y++, 140, 255, 180);
	drawText('LAST: ' + last.slice(0, 28), x, y++, 180, 200, 220);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### translate()

```ts
translate(
   x?, 
   y?, 
   z?): void;
```

Translate subsequent shape drawing.

All geometries are displaced by the specified amounts. Similar to p5.js translate().

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x?` | `number` | Translation along the X axis in grid cells. Defaults to 0. |
| `y?` | `number` | Translation along the Y axis in grid cells. Defaults to 0. |
| `z?` | `number` | Translation along the Z axis in grid cells. Defaults to 0. |

#### Returns

`void`

#### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	const time = t.frameCount * 0.04;
	value = Math.sin(time) * 12;
	t.charColor(50, 60, 90);
	t.char('.');
	t.line(-18, 0, 18, 0);
	t.line(0, -10, 0, 10);
	t.push();
	t.translate(value, Math.cos(time) * 5, 0);
	t.char('#');
	t.charColor(140, 255, 180);
	t.rect(6, 4);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.TRANSLATE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: MOVE ORIGIN', x, y++, 100, 220, 255);
	drawText('Moves x, y, and z together.', x, y++, 140, 160, 190);
	drawText('Grid cross shows original axes.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`X: ${value.toFixed(1)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### translateX()

#### Call Signature

```ts
translateX(): number;
```

Current accumulated X-axis translation.

##### Returns

`number`

Current X-axis translation in grid cells.

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	const time = t.frameCount * 0.04;
	value = Math.sin(time) * 16;
	t.charColor(50, 60, 90);
	t.char('.');
	t.line(-18, 0, 18, 0);
	t.line(0, -10, 0, 10);
	t.push();
	t.translateX(value);
	t.char('#');
	t.charColor(140, 255, 180);
	t.rect(6, 4);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.TRANSLATEX', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: MOVE X ONLY', x, y++, 100, 220, 255);
	drawText('Getter returns current X.', x, y++, 140, 160, 190);
	drawText('Grid cross shows original axes.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`X: ${value.toFixed(1)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Call Signature

```ts
translateX(pixels): void;
```

Translate subsequent shapes along the X axis.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pixels` | `number` | Translation offset in grid cells. |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	const time = t.frameCount * 0.04;
	for (let i = 0; i < 4; i++) {
		t.push();
		t.translateY((i - 1.5) * 4);
		t.translateX(Math.sin(time + i) * 14);
		t.char(String(i + 1));
		t.charColor(120 + i * 30, 220, 255 - i * 20);
		t.rect(4, 2);
		t.pop();
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.TRANSLATEX2', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: LAYERED X MOTION', x, y++, 100, 220, 255);
	drawText('Independent rows move on X.', x, y++, 140, 160, 190);
	drawText('Each block uses local state.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('API: t.translateX(x)', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### translateY()

#### Call Signature

```ts
translateY(): number;
```

Current accumulated Y-axis translation.

##### Returns

`number`

Current Y-axis translation in grid cells.

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	const time = t.frameCount * 0.04;
	value = Math.cos(time) * 8;
	t.charColor(50, 60, 90);
	t.char('.');
	t.line(-18, 0, 18, 0);
	t.line(0, -10, 0, 10);
	t.push();
	t.translateY(value);
	t.char('#');
	t.charColor(140, 255, 180);
	t.rect(6, 4);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.TRANSLATEY', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: MOVE Y ONLY', x, y++, 100, 220, 255);
	drawText('Getter returns current Y.', x, y++, 140, 160, 190);
	drawText('Grid cross shows original axes.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`Y: ${value.toFixed(1)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Call Signature

```ts
translateY(pixels): void;
```

Translate subsequent shapes along the Y axis.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pixels` | `number` | Translation offset in grid cells. |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	const time = t.frameCount * 0.04;
	for (let i = 0; i < 5; i++) {
		t.push();
		t.translateX((i - 2) * 6);
		t.translateY(Math.sin(time + i) * 7);
		t.char('|');
		t.charColor(120, 180 + i * 12, 255);
		t.rect(2, 5);
		t.pop();
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.TRANSLATEY2', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: STACKED Y MOTION', x, y++, 100, 220, 255);
	drawText('Columns move vertically.', x, y++, 140, 160, 190);
	drawText('translateY keeps X unchanged.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('API: t.translateY(y)', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### translateZ()

#### Call Signature

```ts
translateZ(): number;
```

Current accumulated Z-axis translation.

##### Returns

`number`

Current Z-axis translation in grid cells.

##### Example

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
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	const time = t.frameCount * 0.04;
	value = Math.sin(time) * 24;
	t.charColor(50, 60, 90);
	t.char('.');
	t.line(-18, 0, 18, 0);
	t.line(0, -10, 0, 10);
	t.push();
	t.perspective(60, 0.1, 4096);
	t.camera(0, 0, 46, 0, 0, 0);
	t.translateZ(value);
	t.char('#');
	t.charColor(140, 255, 180);
	t.rect(6, 4);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.TRANSLATEZ', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: MOVE Z ONLY', x, y++, 100, 220, 255);
	drawText('Depth changes apparent scale.', x, y++, 140, 160, 190);
	drawText('Grid cross shows original axes.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`Z: ${value.toFixed(1)}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Call Signature

```ts
translateZ(pixels): void;
```

Translate subsequent shapes along the Z axis.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pixels` | `number` | Translation offset in grid cells. |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	t.perspective(58, 0.1, 4096);
	t.camera(0, 0, 48, 0, 0, 0);
	const time = t.frameCount * 0.03;
	for (let i = 0; i < 4; i++) {
		t.push();
		t.translate((i - 1.5) * 7, 0, 0);
		t.translateZ(Math.sin(time + i) * 18);
		t.char('#');
		t.charColor(120 + i * 30, 220, 255 - i * 20);
		t.box(4, 4, 4);
		t.pop();
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.TRANSLATEZ2', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: DEPTH MOTION', x, y++, 100, 220, 255);
	drawText('Boxes move toward camera.', x, y++, 140, 160, 190);
	drawText('Z changes perspective scale.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('API: t.translateZ(z)', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### triangle()

```ts
triangle(
   x1, 
   y1, 
   x2, 
   y2, 
   x3, 
   y3): void;
```

Draw a triangle with the current settings.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x1` | `number` | First vertex X coordinate in grid cells. |
| `y1` | `number` | First vertex Y coordinate in grid cells. |
| `x2` | `number` | Second vertex X coordinate in grid cells. |
| `y2` | `number` | Second vertex Y coordinate in grid cells. |
| `x3` | `number` | Third vertex X coordinate in grid cells. |
| `y3` | `number` | Third vertex Y coordinate in grid cells. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	const time = t.frameCount * 0.03;
	t.push();
	t.translate(8, 2);
	t.rotateZ(Math.sin(time) * 18);
	t.char('^');
	t.charColor(255, 210, 120);
	t.cellColor(30, 20, 10);
	t.triangle(-9, 6, 0, -7, 9, 6);
	t.pop();
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.TRIANGLE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: THREE POINT SHAPE', x, y++, 100, 220, 255);
	drawText('Uses three explicit vertices.', x, y++, 140, 160, 190);
	drawText('Rotation shows the filled area.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('API: t.triangle(...)', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### useTileColors()

```ts
useTileColors(enabled?): boolean | void;
```

Configure authored tileset color preservation on the base layer.

This is equivalent to calling [TextmodeLayer.useTileColors](../namespaces/layering/classes/TextmodeLayer.md#usetilecolors) on the base layer.

When disabled (default), tilesets on the base layer are recolored through the current
character (`primary`) and cell (`secondary`) colors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `enabled?` | `boolean` | Whether to preserve authored tileset colors. |

#### Returns

`boolean` \| `void`

Current base-layer tileset-color mode when called without arguments.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let authored = false;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

t.draw(() => {
	t.background(6, 10, 22);
	authored = Math.floor(t.frameCount / 120) % 2 === 0;
	t.useTileColors(authored);
	t.char(65);
	t.charColor(255, 210, 120);
	t.rect(12, 5);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.USETILECOLORS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: TILE COLORS', x, y++, 100, 220, 255);
	drawText('Toggles authored tile color.', x, y++, 140, 160, 190);
	drawText('charColor handles recolor mode.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(authored ? 'MODE: AUTHORED' : 'MODE: RECOLOR', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### windowResized()

```ts
windowResized(callback): void;
```

Set the callback that runs after a window resize.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` | Function to run after the window is resized. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let resizes = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
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

window.addEventListener('resize', () => {
	resizes++;
});

t.draw(() => {
	t.background(6, 10, 22);
	t.char('#');
	t.charColor(140, 220, 255);
	t.rect(12, 5);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.WINDOWRESIZED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: RESIZE CALLBACK', x, y++, 100, 220, 255);
	drawText('windowResized keeps canvas fit.', x, y++, 140, 160, 190);
	drawText('Browser resize updates count.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`RESIZES: ${resizes}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
