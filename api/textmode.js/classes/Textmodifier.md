---
layout: doc
editLink: true
title: Textmodifier
description: Manages textmode rendering on a HTMLCanvasElement and provides methods for drawing, font management, event handling, layer management, animation control, and...
category: Classes
api: true
kind: Class
lastModified: 2026-05-15
hasConstructor: false
---

[textmode.js](../index.md) / Textmodifier

# Class: Textmodifier

Manages textmode rendering on a [`HTMLCanvasElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement) and provides methods for drawing,
font management, event handling, layer management, animation control, and more. The heart of the `textmode.js` library.

If the `Textmodifier` instance is created without a canvas parameter,
it creates a new `HTMLCanvasElement` to draw on using the `textmode.js` drawing API.
If a canvas is provided, it will use that canvas instead.

## Properties

### gamepads

```ts
readonly gamepads: readonly TextmodeGamepadSnapshot[];
```

Get the currently connected gamepads as a compact readonly list.

The returned array is sorted by browser `Gamepad.index`, but unlike the browser API
it does not contain sparse `null` holes for disconnected slots. Use
[Textmodifier.gamepad](#gamepad) when you need to resolve a specific browser slot index.

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

function drawText(text, x, y, r = 220, g = r, b = r) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

function formatAxis(value) {
	return (value >= 0 ? '+' : '') + value.toFixed(2);
}

t.draw(() => {
	t.background(0);

	const pads = t.gamepads;

	drawText('gamepad polling api', -28, -18, 255, 255, 255);
	drawText(
		`connected: ${pads.length}`,
		-28,
		-16,
		pads.length > 0 ? 120 : 90,
		pads.length > 0 ? 220 : 90,
		pads.length > 0 ? 120 : 90
	);

	if (pads.length === 0) {
		drawText('connect a controller and press any button', -28, -6, 180, 180, 180);
		drawText('some browsers wait for input before exposing a pad', -28, -4, 110, 110, 110);
		return;
	}

	pads.slice(0, 2).forEach((pad, listIndex) => {
		const y = -12 + listIndex * 14;
		const slot = t.gamepad(pad.index);

		drawText(`slot ${pad.index}`, -28, y, 255, 200, 80);
		drawText(pad.mapping === 'standard' ? 'standard' : 'raw', -21, y, 120, 180, 255);
		drawText(slot ? 'ok' : 'missing', -13, y, slot ? 100 : 255, slot ? 160 : 80, slot ? 100 : 80);
		drawText(pad.id.slice(0, 50), -28, y + 1, 120, 120, 120);

		const axisStr = pad.axes
			.slice(0, 6)
			.map((v, i) => `a${i}:${formatAxis(v)}`)
			.join(' ');
		drawText(axisStr || 'no axes', -28, y + 3, 180, 200, 220);

		const btnStr = pad.buttons
			.slice(0, 17)
			.map((b) => (b.value >= 0.5 ? '#' : b.value > 0.01 ? ':' : '.'))
			.join('');
		drawText(`btn ${btnStr}`, -28, y + 5, 180, 200, 220);

		if (pad.buttons.length >= 8) {
			const l2 = pad.buttons[6].value.toFixed(2);
			const r2 = pad.buttons[7].value.toFixed(2);
			drawText(`l2:${l2} r2:${r2}`, -28, y + 7, 160, 160, 180);
		}

		if (pad.standard) {
			const face = pad.standard.faceButtons;
			const dpad = pad.standard.dpad;
			const ls = pad.standard.leftStick;
			const rs = pad.standard.rightStick;

			drawText(`  N:${face.north.pressed ? '#' : '.'}`, 6, y + 2, 160, 220, 160);
			drawText(`W:${face.west.pressed ? '#' : '.'} E:${face.east.pressed ? '#' : '.'}`, 6, y + 3, 160, 220, 160);
			drawText(`  S:${face.south.pressed ? '#' : '.'}`, 6, y + 4, 160, 220, 160);

			drawText(`  U:${dpad.up.pressed ? '#' : '.'}`, 18, y + 2, 220, 180, 120);
			drawText(
				`L:${dpad.left.pressed ? '#' : '.'} R:${dpad.right.pressed ? '#' : '.'}`,
				18,
				y + 3,
				220,
				180,
				120
			);
			drawText(`  D:${dpad.down.pressed ? '#' : '.'}`, 18, y + 4, 220, 180, 120);

			drawText('L-stick', 6, y + 6, 100, 140, 180);
			const lx = Math.round(10 + ls.x * 4);
			const ly = Math.round(y + 8 + ls.y * 2);
			t.push();
			t.translate(lx, ly);
			t.char(ls.magnitude > 0 ? '@' : '+');
			t.charColor(255, 220, 100);
			t.point();
			t.pop();

			drawText('R-stick', 18, y + 6, 100, 140, 180);
			const rx = Math.round(22 + rs.x * 4);
			const ry = Math.round(y + 8 + rs.y * 2);
			t.push();
			t.translate(rx, ry);
			t.char(rs.magnitude > 0 ? '@' : '+');
			t.charColor(100, 220, 255);
			t.point();
			t.pop();
		}
	});
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

Get the last key that was pressed.

Returns the key string of the last pressed key, or null if no key has been pressed.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.draw(() => {
	t.background(6, 10, 22);

	// Retrieve the property
	const lastKey = t.lastKeyPressed;

	t.push();
	t.charColor(100, 255, 200);
	if (lastKey) {
		t.char(lastKey.length === 1 ? lastKey : '?');
		t.rect(10, 10);
	} else {
		t.char('.');
		t.rect(4, 4);
	}
	t.pop();

	drawCenteredText('Textmodifier.lastKeyPressed', -20, [255, 255, 255]);
	drawCenteredText('A property holding the string value of the last key pressed.', -18, [150, 170, 200]);
	drawCenteredText('This value persists until a new key is pressed.', -16, [150, 170, 200]);

	drawCenteredText(`t.lastKeyPressed = ${lastKey ? '"' + lastKey + '"' : 'null'}`, 10, [100, 255, 200]);
	drawCenteredText('Press any key to update property', 18, [100, 100, 120]);
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

Get the last key that was released.

Returns the key string of the last released key, or null if no key has been released.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.draw(() => {
	t.background(6, 10, 22);

	// Retrieve the property
	const lastKey = t.lastKeyReleased;

	t.push();
	t.charColor(255, 140, 180);
	if (lastKey) {
		t.char(lastKey.length === 1 ? lastKey : '?');
		t.rect(10, 10);
	} else {
		t.char('.');
		t.rect(4, 4);
	}
	t.pop();

	drawCenteredText('Textmodifier.lastKeyReleased', -20, [255, 255, 255]);
	drawCenteredText('A property holding the string value of the last key released.', -18, [150, 170, 200]);
	drawCenteredText('Useful for detecting the end of a specific user action.', -16, [150, 170, 200]);

	drawCenteredText(`t.lastKeyReleased = ${lastKey ? '"' + lastKey + '"' : 'null'}`, 10, [255, 140, 180]);
	drawCenteredText('Press and RELEASE any key', 18, [100, 100, 120]);
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

Get current modifier key states.

Returns an object with boolean properties for each modifier key.

| Name | Type | Description |
| ------ | ------ | ------ |
| `alt` | `boolean` | Whether the Alt key is currently pressed |
| `ctrl` | `boolean` | Whether the Ctrl key is currently pressed |
| `meta` | `boolean` | Whether the Meta key *(Command on Mac, Windows key on Windows)* is currently pressed |
| `shift` | `boolean` | Whether the Shift key is currently pressed |

#### Example

```javascript
const t = textmode.create({ width: 640, height: 640, fontSize: 16 });

function drawLabel(text, x, y, color = 180) {
	t.push();
	t.translate(x - Math.floor(text.length / 2), y);
	t.charColor(color);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

function drawPanel(x, y, label, active, hue) {
	const pulse = 4 + Math.sin(t.frameCount * 0.08) * 2;
	const glow = active ? 255 : 70;
	const cell = active ? hue : 15;
	const icon = active ? '*' : '.';
	const status = active ? 'ON' : 'OFF';

	t.push();
	t.translate(x, y);
	t.charColor(glow, glow, glow);
	t.cellColor(cell, active ? hue : 15, 20);
	t.char(icon);
	t.rect(10 + pulse, 6 + pulse * 0.3);

	t.charColor(active ? 0 : 190, active ? 0 : 190, active ? 0 : 190);
	drawLabel(label, 0, -1, active ? 0 : 200);
	drawLabel(status, 0, 1, active ? 0 : 120);
	t.pop();
}

t.draw(() => {
	const { shift, ctrl, alt, meta } = t.modifierState;
	const activeCount = [shift, ctrl, alt, meta].filter(Boolean).length;
	const orbit = activeCount === 0 ? 0 : 6 + Math.sin(t.frameCount * 0.05) * 2;

	t.background(0);

	drawPanel(-12, -8, 'SHIFT', shift, 255);
	drawPanel(12, -8, 'CTRL', ctrl, 220);
	drawPanel(-12, 8, 'ALT', alt, 180);
	drawPanel(12, 8, 'META', meta, 140);

	drawLabel('hold shift ctrl alt or cmd', 0, -15, 200);
	drawLabel(activeCount === 0 ? 'idle input state' : `${activeCount} modifier active`, 0, 15, 160);

	t.push();
	t.rotateZ(t.frameCount * 2);
	t.char(activeCount === 0 ? '+' : '#');
	t.charColor(255, 220 - activeCount * 20, 120 + activeCount * 30);
	t.rect(4 + orbit * 0.2, 4 + orbit * 0.2);
	t.pop();
});
```

***

### mouse

```ts
readonly mouse: GridPosition;
```

Get the current mouse position in center-based grid coordinates.

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

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.draw(() => {
	t.background(6, 10, 22);

	const mx = t.mouse.x;
	const my = t.mouse.y;
	const isInside = mx !== Number.NEGATIVE_INFINITY;

	if (isInside) {
		t.push();
		t.translate(mx, 0);
		t.charColor(40, 50, 80);
		t.char('|');
		t.rect(1, t.grid.rows);
		t.pop();

		t.push();
		t.translate(0, my);
		t.charColor(40, 50, 80);
		t.char('-');
		t.rect(t.grid.cols, 1);
		t.pop();

		t.push();
		t.translate(mx, my);
		t.char('☼');
		t.charColor(255, 200, 100);
		t.point();

		t.translate(2, 0);
		const coordText = `(${mx.toFixed(1)}, ${my.toFixed(1)})`;
		t.charColor(255);
		for (let i = 0; i < coordText.length; i++) {
			t.push();
			t.translate(i, 0);
			t.char(coordText[i]);
			t.point();
			t.pop();
		}
		t.pop();
	}

	drawCenteredText('Textmodifier.mouse', -20, [255, 255, 255]);
	drawCenteredText('A property holding the current mouse position in grid cells.', -18, [150, 170, 200]);
	drawCenteredText('Values are Number.NEGATIVE_INFINITY if outside the canvas.', -16, [150, 170, 200]);

	if (!isInside) {
		drawCenteredText('Move mouse into the canvas to track', 14, [100, 100, 120]);
	}
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

Get whether a mouse button is currently being held down.

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

let charge = 0;

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.draw(() => {
	t.background(6, 10, 22);

	const mx = t.mouse.x;
	const my = t.mouse.y;
	const isInside = mx !== Number.NEGATIVE_INFINITY;

	if (t.mouseIsPressed && isInside) {
		charge = Math.min(1.0, charge + 0.05);
	} else {
		charge = Math.max(0, charge - 0.02);
	}

	if (isInside) {
		t.push();
		t.translate(mx, my);
		const size = 5 + charge * 20;
		t.charColor(255, 200, 100, charge * 255);
		t.char('☼');
		t.ellipse(size, size);
		t.char(t.mouseIsPressed ? '@' : '+');
		t.charColor(255, 255, 255);
		t.point();
		t.pop();
	}

	drawCenteredText('Textmodifier.mouseIsPressed', -20, [255, 255, 255]);
	drawCenteredText('Boolean state: true if any button is held.', -18, [150, 170, 200]);
	drawCenteredText('Checked every frame in the draw loop.', -16, [150, 170, 200]);

	drawCenteredText(`mouseIsPressed = ${t.mouseIsPressed}`, 10, t.mouseIsPressed ? [100, 255, 150] : [255, 100, 100]);
	drawCenteredText('Hold Click to "Charge" the cursor', 18, [255, 200, 100]);
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

Get the horizontal mouse movement accumulated since the previous rendered frame.

This is especially useful while pointer lock is active, where absolute mouse coordinates
stop being meaningful and relative movement becomes the primary input signal.

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let cursor = { x: 0, y: 0 };

t.mouseClicked(() => {
	if (document.pointerLockElement === t.canvas) {
		t.exitPointerLock();
	} else {
		t.requestPointerLock();
	}
});

t.draw(() => {
	t.background(0);

	if (document.pointerLockElement === t.canvas) {
		cursor.x += t.movedX * 0.08;
		cursor.y += t.movedY * 0.08;
	}

	cursor.x = Math.max(-t.grid.cols / 2, Math.min(t.grid.cols / 2, cursor.x));
	cursor.y = Math.max(-t.grid.rows / 2, Math.min(t.grid.rows / 2, cursor.y));

	t.push();
	t.translate(cursor.x, cursor.y);
	t.char(document.pointerLockElement === t.canvas ? '@' : '+');
	t.charColor(document.pointerLockElement === t.canvas ? 255 : 180, 220, 120);
	t.point();
	t.pop();
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

Get the vertical mouse movement accumulated since the previous rendered frame.

This is especially useful while pointer lock is active, where absolute mouse coordinates
stop being meaningful and relative movement becomes the primary input signal.

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let cursor = { x: 0, y: 0 };

t.mouseClicked(() => {
	if (document.pointerLockElement === t.canvas) {
		t.exitPointerLock();
	} else {
		t.requestPointerLock();
	}
});

t.draw(() => {
	t.background(0);

	if (document.pointerLockElement === t.canvas) {
		cursor.x += t.movedX * 0.08;
		cursor.y += t.movedY * 0.08;
	}

	cursor.x = Math.max(-t.grid.cols / 2, Math.min(t.grid.cols / 2, cursor.x));
	cursor.y = Math.max(-t.grid.rows / 2, Math.min(t.grid.rows / 2, cursor.y));

	t.push();
	t.translate(cursor.x, cursor.y);
	t.char(document.pointerLockElement === t.canvas ? '@' : '+');
	t.charColor(document.pointerLockElement === t.canvas ? 255 : 180, 220, 120);
	t.point();
	t.pop();
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

Get the mouse position from the previous rendered frame.

Unlike `previousPosition` in mouse event callbacks, this value is updated exactly once per
rendered frame. Use it inside `draw()` to measure frame-to-frame mouse motion or draw trails.

If no previous frame position is available yet, it returns
`{ x: Number.NEGATIVE_INFINITY, y: Number.NEGATIVE_INFINITY }`.

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

const segments = [];

t.draw(() => {
	t.background(0);

	const mouseInside = t.mouse.x !== Number.NEGATIVE_INFINITY;
	const previousInside = t.pmouse.x !== Number.NEGATIVE_INFINITY;

	if (mouseInside && previousInside) {
		segments.push({
			x1: t.pmouse.x,
			y1: t.pmouse.y,
			x2: t.mouse.x,
			y2: t.mouse.y,
			life: 1,
		});
	}

	for (let i = segments.length - 1; i >= 0; i--) {
		const segment = segments[i];
		segment.life -= 0.03;

		if (segment.life <= 0) {
			segments.splice(i, 1);
			continue;
		}

		t.push();
		t.char('-');
		t.lineWeight(1);
		t.charColor(100, 180 + segment.life * 75, 255, segment.life * 255);
		t.line(segment.x1, segment.y1, segment.x2, segment.y2);
		t.pop();
	}

	if (mouseInside) {
		t.push();
		t.translate(t.mouse.x, t.mouse.y);
		t.char('@');
		t.charColor(255, 220, 120);
		t.point();
		t.pop();
	}
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

Get all currently pressed keys.

Returns an array of key strings that are currently being held down.

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
	t.background(0);

	const pressed = t.pressedKeys;

	pressed.forEach((key, index) => {
		t.push();
		t.char(key[0] || '?');
		t.charColor(255, 200, 100);
		t.translate(index, 0);
		t.point();
		t.pop();
	});
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

Get the currently active touches in grid coordinates.

Returns a copy of each touch, including grid position, client coordinates, and pressure when
available. Use this inside a draw loop to react to active multi-touch scenarios.

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
	t.background(0);

	for (const touch of t.touches) {
		t.push();
		t.translate(touch.x, touch.y);

		const pulse = 1 + Math.sin(t.frameCount * 0.2) * 0.5;
		const radius = (touch.pressure || 0.5) * 20 * pulse;

		t.char('○');
		t.charColor(255, 100, 150);
		t.ellipse(radius, radius);

		t.char(((touch.id % 9) + 1).toString());
		t.charColor(255);
		t.point();
		t.pop();
	}

	if (t.touches.length === 0) {
		t.char('?');
		t.charColor(80);
		t.point();
	}
});
```

## Accessors

### canvas

#### Get Signature

```ts
get canvas(): HTMLCanvasElement;
```

Get the canvas containing the rendered output.

##### Returns

`HTMLCanvasElement`

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 8 });

t.canvas.title = 'Textmodifier.canvas example';
t.canvas.style.outline = '2px solid rgba(250, 204, 21, 0.5)';
t.canvas.style.outlineOffset = '-2px';
t.canvas.style.background = '#09090b';

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);
	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}
	t.pop();
}

t.draw(() => {
	t.background(9, 11, 21);
	label('canvas getter exposes the DOM canvas', -2, [255, 210, 90]);
	label(`${t.canvas.width} x ${t.canvas.height} pixels`, 1);
	label('this example adds an outline via t.canvas.style', 4, [150, 160, 190]);
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 8 });

let img;
let hasBrightness = false;

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);
	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}
	t.pop();
}

t.setup(async () => {
	const source = document.createElement('canvas');
	source.width = 96;
	source.height = 64;
	const ctx = source.getContext('2d');
	ctx.fillStyle = '#111827';
	ctx.fillRect(0, 0, source.width, source.height);
	ctx.fillStyle = '#38bdf8';
	ctx.fillRect(8, 8, 28, 48);
	ctx.fillStyle = '#f59e0b';
	ctx.beginPath();
	ctx.arc(66, 32, 18, 0, Math.PI * 2);
	ctx.fill();

	hasBrightness = t.conversions.has('brightness');
	img = await t.loadImage(source.toDataURL());
	if (hasBrightness) img.conversionMode('brightness');
	img.characters(' .:-=+*#%@');
});

t.draw(() => {
	t.background(8, 10, 20);
	if (img) {
		t.image(img, t.grid.cols - 8, t.grid.rows - 8);
	}
	label('conversions', -Math.floor(t.grid.rows / 2) + 2, [255, 210, 90]);
	label(`conversions.has('brightness'): ${hasBrightness}`, Math.floor(t.grid.rows / 2) - 3);
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

Provides access to the error layer controller to display fatal errors in a user-friendly way.

##### Returns

[`ErrorLayerController`](../namespaces/errors/classes/ErrorLayerController.md)

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 8 });

let triggerError = false;
window.addEventListener(
	'click',
	() => {
		triggerError = true;
	},
	{ once: true }
);

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);
	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}
	t.pop();
}

t.draw(() => {
	t.background(10, 12, 24);
	label('errors', -3, [255, 210, 90]);
	label(`controller available: ${Boolean(t.errors)}`, 0);
	label('click once to trigger a draw error overlay', 3, [150, 160, 190]);

	if (triggerError) {
		throw new Error('This example intentionally triggers the error layer.');
	}
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

Access the filter manager for this Textmodifier instance.

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

const filters = [
	{ name: null, label: 'NO FILTER', params: undefined },
	{ name: 'invert', label: 'INVERT', params: undefined },
	{ name: 'grayscale', label: 'GRAYSCALE (0.5)', params: 0.5 },
	{ name: 'grayscale', label: 'GRAYSCALE (1.0)', params: 1.0 },
	{ name: 'sepia', label: 'SEPIA (0.5)', params: 0.5 },
	{ name: 'sepia', label: 'SEPIA (1.0)', params: 1.0 },
	{ name: 'threshold', label: 'THRESHOLD (0.3)', params: 0.3 },
	{ name: 'threshold', label: 'THRESHOLD (0.7)', params: 0.7 },
];

let filterOffset = 0;

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

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.03;
	const idx = Math.floor((t.frameCount + filterOffset) / 120) % filters.length;
	const filter = filters[idx];

	t.push();
	t.charColor(255, 180, 100);
	t.cellColor(30, 50, 120);
	t.char('@');
	t.rotateZ(time * 50);
	t.rect(14, 14);
	t.pop();

	for (let i = 0; i < 6; i++) {
		const angle = time + (i / 6) * Math.PI * 2;
		t.push();
		t.translate(Math.round(Math.cos(angle) * 7), Math.round(Math.sin(angle) * 7));
		t.charColor(100 + i * 25, 255, 150 + i * 15);
		t.char('*');
		t.point();
		t.pop();
	}

	drawCenteredText('Textmodifier.filters', -12, [240, 245, 255]);
	drawCenteredText('Post-processing effects on the final canvas.', -10, [150, 170, 200]);

	drawCenteredText(filter.label, -6, filter.name === null ? [255, 100, 100] : [140, 255, 180]);
	if (filter.name) {
		const paramsStr = filter.params !== undefined ? `, ${filter.params}` : '';
		drawCenteredText(`t.filter('${filter.name}'${paramsStr})`, -4, [140, 180, 255]);
	}

	if (filter.name) {
		t.filter(filter.name, filter.params);
	}

	drawCenteredText(
		`invert:${t.filters.has('invert')}  grayscale:${t.filters.has('grayscale')}  sepia:${t.filters.has('sepia')}  threshold:${t.filters.has('threshold')}`,
		11,
		[100, 120, 150]
	);
	drawCenteredText('click to advance', 13, [80, 90, 120]);
});

t.mouseClicked(() => {
	filterOffset += 120;
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

Get the current font object used for rendering the base layer.

##### Returns

  \| [`TextmodeFont`](../namespaces/fonts/classes/TextmodeFont.md)
  \| [`TextmodeTileset`](../namespaces/fonts/classes/TextmodeTileset.md)

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
	t.background(0);

	const font = t.font;
	const count = font.characters.length;
	const info = `FONT CHARS: ${count}`;
	const barWidth = Math.min(Math.ceil(count / 10), t.grid.cols - 4);

	t.char('░');
	t.charColor(100, 100, 100);
	t.rect(barWidth + 2, 5);

	t.char('█');
	t.charColor(0, 150, 255);
	t.rect(barWidth, 3);

	for (let i = 0; i < info.length; i++) {
		t.push();
		t.translate(i - info.length / 2, 0);
		t.char(info[i]);
		t.cellColor(0);
		t.charColor(255);
		t.point();
		t.pop();
	}
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

Get the current frame count.

The frame count starts at 0, but is incremented at the beginning of each draw cycle.
This means that inside the first call to `draw()`, `frameCount` is 1.

This value is useful for timing-based animations, patterns, and state changes.

##### Returns

`number`

The number of frames rendered since the sketch started.

##### Example

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

t.draw(() => {
	t.background(6, 10, 22);

	const blinkOn = t.frameCount % 60 < 30;

	t.push();
	t.rotateZ(t.frameCount * 2);
	t.charColor(255);
	t.cellColor(120, 40, 60);
	t.char('X');
	t.rect(10, 10);
	t.pop();

	if (blinkOn) {
		t.push();
		t.translate(15, 0);
		t.charColor(100, 200, 255);
		t.cellColor(20, 40, 80);
		t.char('O');
		t.rect(5, 5);
		t.pop();
	}

	drawCenteredText('Textmodifier.frameCount', -12, [240, 245, 255]);
	drawCenteredText('Read-only counter incremented each frame.', -10, [150, 170, 200]);

	drawCenteredText(`t.frameCount = ${t.frameCount}`, -7, [140, 180, 255]);

	drawCenteredText('t.rotateZ(t.frameCount * 2)  ->  continuous rotation', -4, [255, 200, 100]);

	drawCenteredText(
		blinkOn ? 't.frameCount % 60 < 30  ->  visible (30 frames)' : 't.frameCount % 60 < 30  ->  hidden (30 frames)',
		11,
		blinkOn ? [140, 255, 180] : [255, 100, 100]
	);
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
| `value` | `number` | The new frame count value. |

##### Returns

`void`

##### Example

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

t.keyPressed((data) => {
	if (data.key === ' ') {
		t.frameCount = 0;
	}
});

t.draw(() => {
	t.background(6, 10, 22);

	const angle = t.frameCount * 0.08;

	for (let i = 0; i < 3; i++) {
		const phase = angle + (i / 3) * Math.PI * 2;
		const x = Math.round(Math.cos(phase) * 14);
		const y = Math.round(Math.sin(phase) * 7);
		const chars = ['@', '#', '*'];
		const colors = [
			[255, 180, 80],
			[100, 200, 255],
			[255, 100, 150],
		];
		const cellColors = [
			[60, 40, 20],
			[20, 40, 60],
			[60, 20, 40],
		];

		t.push();
		t.translate(x, y);
		t.charColor(colors[i][0], colors[i][1], colors[i][2]);
		t.cellColor(cellColors[i][0], cellColors[i][1], cellColors[i][2]);
		t.char(chars[i]);
		t.rect(4, 4);
		t.pop();
	}

	drawCenteredText('Textmodifier.frameCount2', -12, [240, 245, 255]);
	drawCenteredText('Writable counter — reset to replay animation.', -10, [150, 170, 200]);

	drawCenteredText(`t.frameCount = ${t.frameCount}`, -7, [140, 180, 255]);

	drawCenteredText('press SPACE to reset  ->  t.frameCount = 0', 12, [80, 90, 120]);
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

Get the grid whose layer is currently being drawn to.
If called outside of a layers draw callback, returns the base layer's grid.

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

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.draw(() => {
	t.background(6, 10, 22);

	const { cols, rows, cellWidth, cellHeight } = t.grid;
	const time = t.secs;

	t.push();
	t.charColor(30, 35, 50);
	t.char('.');
	t.rect(cols, rows);
	t.pop();

	const scanY = Math.floor((Math.sin(time * 0.8) * 0.5 + 0.5) * rows - rows / 2);
	const scanX = Math.floor((Math.cos(time * 1.1) * 0.5 + 0.5) * cols - cols / 2);

	t.push();
	t.translate(0, scanY);
	t.charColor(100, 200, 255, 150);
	t.char('-');
	t.rect(cols, 1);
	t.pop();

	t.push();
	t.translate(scanX, 0);
	t.charColor(100, 255, 150, 150);
	t.char('|');
	t.rect(1, rows);
	t.pop();

	t.push();
	t.translate(scanX, scanY);
	t.char('☼');
	t.charColor(255, 255, 255);
	t.point();
	t.pop();

	drawCenteredText('Textmodifier.grid', -14, [255, 255, 255]);
	drawCenteredText('Provides access to dimensions and cell properties.', -12, [150, 170, 200]);

	t.push();
	t.translate(0, 10);
	drawCenteredText(`Grid Size: ${cols} x ${rows} cells`, 0, [140, 180, 255]);
	drawCenteredText(`Cell Size: ${cellWidth} x ${cellHeight} pixels`, 2, [140, 180, 255]);
	drawCenteredText(`Canvas Area: ${t.grid.width} x ${t.grid.height} pixels`, 4, [140, 180, 255]);
	t.pop();

	drawCenteredText('Resize window to see grid update', 18, [100, 100, 120]);
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

Get the height of the canvas in pixels.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
	t.background(0);

	const height = t.height;
	const info = `HEIGHT: ${height}px`;
	const arrowLength = Math.floor(t.grid.rows / 2) - 3;

	for (let i = 0; i < arrowLength; i++) {
		t.push();
		t.translate(0, -arrowLength + i);
		t.char(i === 0 ? '╩' : '|');
		t.charColor(100, 255, 100);
		t.point();
		t.pop();
	}

	for (let i = 0; i < arrowLength; i++) {
		t.push();
		t.translate(0, arrowLength - i);
		t.char(i === 0 ? '╚' : '|');
		t.charColor(100, 255, 100);
		t.point();
		t.pop();
	}

	for (let i = 0; i < info.length; i++) {
		t.push();
		t.translate(i - info.length / 2, 0);
		t.char(info[i]);
		t.charColor(255);
		t.point();
		t.pop();
	}
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

Check if the instance has been disposed/destroyed.

##### Returns

`boolean`

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 8 });

const button = document.createElement('button');
button.textContent = 'destroy';
button.style.cssText =
	'position:fixed;left:12px;top:12px;padding:8px 10px;background:#18181b;color:#e4e4e7;border:1px solid #27272a;font:12px JetBrains Mono,monospace;cursor:pointer;';
document.body.appendChild(button);

const status = document.createElement('div');
status.style.cssText =
	'position:fixed;left:12px;top:50px;padding:8px 10px;background:#09090bcc;color:#e4e4e7;font:12px JetBrains Mono,monospace;border:1px solid #27272a;';
status.textContent = `isDisposed = ${t.isDisposed}`;
document.body.appendChild(status);

button.addEventListener('click', () => {
	t.destroy();
	setTimeout(() => {
		status.textContent = `isDisposed = ${t.isDisposed}`;
	}, 0);
});

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);
	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}
	t.pop();
}

t.draw(() => {
	t.background(10, 12, 24);
	label('isDisposed', -2, [255, 210, 90]);
	label('click the destroy button', 1);
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 8 });

let outsideFrame = false;
setInterval(() => {
	outsideFrame = t.isRenderingFrame;
}, 120);

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);
	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}
	t.pop();
}

t.draw(() => {
	t.background(10, 12, 24);
	label('isRenderingFrame', -3, [255, 210, 90]);
	label(`inside draw(): ${t.isRenderingFrame}`, 0);
	label(`outside draw(): ${outsideFrame}`, 3, [150, 160, 190]);
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

Access the layer manager for this Textmodifier instance.

Use this to create and manage multiple layers within the textmode rendering context.
Each layer has its own grid, font, draw callback, and filters.

##### Returns

[`TextmodeLayerManager`](../namespaces/layering/classes/TextmodeLayerManager.md)

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

const topLayer = t.layers.add();

t.draw(() => {
	t.background(0);

	t.push();
	t.rotateZ(t.frameCount);
	t.char('▼');
	t.charColor(50, 100, 150);
	t.rect(40, 40);
	t.pop();
});

topLayer.draw(() => {
	t.clear();

	const time = t.frameCount * 0.05;
	const x = Math.sin(time) * 10;

	t.push();
	t.char('æ');
	t.charColor(255, 200, 0);
	t.cellColor(0, 0, 0, 0);
	t.translate(x, 0);
	t.point();
	t.pop();
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

Provides access to the loading layer controller to control boot-time loading UX.

##### Returns

[`LoadingLayerController`](../namespaces/loading/classes/LoadingLayerController.md)

##### Example

```javascript
const t = textmode.create({
	width: 800,
	height: 600,
	loadingScreen: { transitionDuration: 400 },
});

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

t.setup(async () => {
	t.loading.draw((ctx) => {
		const tm = ctx.textmodifier;

		tm.background(6, 10, 18);
		tm.push();
		tm.translate(-8, -6, 0);
		tm.charColor(255, 255, 255);
		tm.char('*');
		tm.point();
		tm.pop();

		const label = 'CUSTOM LOADING';
		for (let i = 0; i < label.length; i++) {
			tm.push();
			tm.translate(i - label.length / 2 + 0.5, 0, 0);
			tm.char(label[i]);
			tm.charColor(255, 220, 120);
			tm.point();
			tm.pop();
		}
	});

	await wait(1200);
});

t.draw(() => {
	t.background(8, 12, 24);

	const label = 'LOADING COMPLETE';
	for (let i = 0; i < label.length; i++) {
		t.push();
		t.translate(i - label.length / 2 + 0.5, 0);
		t.char(label[i]);
		t.charColor(120, 220, 255);
		t.point();
		t.pop();
	}
});
```

***

### millis

#### Get Signature

```ts
get millis(): number;
```

Get the number of milliseconds since the sketch started running.

`millis` keeps track of how long a sketch has been running in milliseconds
(thousandths of a second). This information is often helpful for timing events
and animations.

Time tracking begins before the code in [setup](#setup) runs. If loading screen is
enabled, `millis` begins tracking as soon as the loading screen starts.

This property is connected to [secs](#secs) - setting one will affect the other.

##### Returns

`number`

Number of milliseconds since starting the sketch.

##### Examples

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

function drawLabel(text, y) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(180);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	t.background(0);

	const pulse = (t.millis % 1000) / 1000;
	const scale = 1 + Math.sin(pulse * Math.PI) * 0.5;
	const alpha = 255 * (1 - pulse);

	t.char('o');
	t.charColor(255, 50, 50, alpha);
	t.rect(10 * scale, 10 * scale);

	drawLabel(`millis: ${Math.floor(t.millis)}`, -12);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

function drawLabel(text, y) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(180);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	t.background(0);

	const time = t.millis / 1000;
	const x = Math.sin(time) * 20;

	t.push();
	t.translate(x, 0);
	t.char('O');
	t.charColor(100, 220, 255);
	t.point();
	t.pop();

	drawLabel('millis / 1000 drives horizontal motion', -12);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

```javascript
const t = textmode.create({ width: 800, height: 600 });

function drawLabel(text, y) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(180);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.keyPressed((data) => {
	if (data.key === ' ') {
		t.millis = 0;
	}
});

t.draw(() => {
	t.background(0);

	const duration = 3000;
	const elapsed = t.millis;
	const progress = (elapsed % duration) / duration;
	const barWidth = 40;
	const barHeight = 4;
	const width = barWidth * progress;

	t.charColor(64);
	t.char('-');
	t.rect(barWidth, barHeight);

	t.push();
	t.translate(-barWidth / 2 + width / 2, 0);
	t.char('=');
	t.charColor(100, 200, 255);
	t.rect(width, barHeight);
	t.pop();

	drawLabel('press SPACE to reset millis', -8);
	drawLabel(`${(elapsed / 1000).toFixed(1)}s`, -5);
});
```

#### Set Signature

```ts
set millis(value): void;
```

Set the elapsed milliseconds by adjusting the internal start time.

This allows seeking/scrubbing in animations. Setting `millis` will also
affect the value returned by [secs](#secs) since they are connected.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | The new elapsed time in milliseconds |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

function drawLabel(text, y) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(200);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	t.background(0);

	if (t.isKeyPressed(' ')) {
		const progress = (t.mouse.x + t.grid.cols / 2) / t.grid.cols;
		t.millis = Math.max(0, Math.min(10000, progress * 10000));
		t.cursor('ew-resize');
	} else {
		t.cursor('default');
	}

	const time = t.millis;
	const count = 120;
	const maxRadius = Math.min(t.grid.cols, t.grid.rows) * 0.35;

	for (let i = 0; i < count; i++) {
		const pct = i / count;
		const angle = i * 0.45 + time * 0.002;
		const radius = pct * maxRadius;

		t.push();
		t.translate(Math.cos(angle) * radius, Math.sin(angle) * radius);
		t.char(i % 3 === 0 ? 'O' : '.');
		t.charColor((time * 0.1 + i * 5) % 255, 255 - ((time * 0.1 + i * 5) % 255), 200);
		t.point();
		t.pop();
	}

	drawLabel('hold SPACE and move mouse to set millis', Math.floor(t.grid.rows / 2) - 3);
	drawLabel(`${Math.floor(t.millis)} ms`, Math.floor(t.grid.rows / 2) - 1);
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

If in overlay mode, returns the [TextmodeImage](../namespaces/media/classes/TextmodeImage.md) instance capturing the target canvas/video content,
allowing further configuration of the conversion parameters.

##### Returns

  \| [`TextmodeImage`](../namespaces/media/classes/TextmodeImage.md)
  \| `undefined`

##### Example

```javascript
const sourceCanvas = document.createElement('canvas');
sourceCanvas.width = 360;
sourceCanvas.height = 240;
sourceCanvas.style.cssText = 'display:block;margin:0 auto;background:#050816;';
document.body.appendChild(sourceCanvas);

const source = sourceCanvas.getContext('2d');
const t = textmode.create({ canvas: sourceCanvas, overlay: true, fontSize: 8 });

function paint(time) {
	source.fillStyle = '#050816';
	source.fillRect(0, 0, sourceCanvas.width, sourceCanvas.height);
	source.fillStyle = '#38bdf8';
	source.fillRect(40 + Math.sin(time * 0.0012) * 60, 30, 80, 80);
	source.fillStyle = '#f59e0b';
	source.beginPath();
	source.arc(220, 120 + Math.sin(time * 0.0018) * 50, 38, 0, Math.PI * 2);
	source.fill();
	source.fillStyle = '#e4e4e7';
	source.font = '24px monospace';
	source.fillText('overlay', 118, 210);
	requestAnimationFrame(paint);
}

t.setup(() => {
	t.overlay.characters(' .:-=+*#%@').charColorMode('sampled').cellColorMode('fixed').cellColor(0, 0, 0);
	requestAnimationFrame(paint);
});

t.draw(() => {
	t.clear();
	if (t.overlay) {
		t.image(t.overlay, t.grid.cols, t.grid.rows);
	}
});
```

***

### secs

#### Get Signature

```ts
get secs(): number;
```

Get the number of seconds since the sketch started running.

`secs` is a convenience property that returns the elapsed time in seconds
instead of milliseconds. Equivalent to `millis / 1000`.

Time tracking begins before the code in [setup](#setup) runs. If loading screen is
enabled, `secs` begins tracking as soon as the loading screen starts.

This property is connected to [millis](#millis) - setting one will affect the other.

##### Returns

`number`

Number of seconds since starting the sketch.

##### Examples

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.secs;
	const radius = 15;

	const x = Math.cos(time * 1.5) * radius;
	const y = Math.sin(time * 2.0) * radius * 0.5;

	t.push();
	t.translate(x, y);
	t.char('☼');
	t.charColor(255, 200, 100);
	t.rect(5, 5);
	t.pop();

	// Trail indicating previous seconds
	for (let i = 1; i <= 10; i++) {
		const pastTime = time - i * 0.1;
		const px = Math.cos(pastTime * 1.5) * radius;
		const py = Math.sin(pastTime * 2.0) * radius * 0.5;

		t.push();
		t.translate(px, py);
		t.char('·');
		t.charColor(100, 150, 255, (1 - i / 10) * 150);
		t.point();
		t.pop();
	}

	drawCenteredText('Textmodifier.secs', -12, [255, 255, 255]);
	drawCenteredText('The elapsed time in seconds since the sketch started.', -10, [150, 170, 200]);
	drawCenteredText(`t.secs = ${t.secs.toFixed(3)}`, 10, [140, 180, 255]);
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

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.keyPressed((data) => {
	if (data.key === ' ') {
		// You can manually add to t.secs to "skip" time forward
		t.secs += 1.0;
	}
});

t.draw(() => {
	t.background(6, 10, 22);

	const cycle = 4.0;
	const progress = (t.secs % cycle) / cycle;

	const barWidth = 50;
	const startX = -Math.floor(barWidth / 2);
	const x = startX + progress * barWidth;

	t.push();
	t.charColor(40, 45, 60);
	t.char('-');
	t.rect(barWidth, 1);
	t.pop();

	t.push();
	t.translate(Math.floor(x), 0);
	t.char('>');
	t.charColor(100, 255, 150);
	t.rect(4, 4);
	t.pop();

	drawCenteredText('Textmodifier.secs (Time Manipulation)', -12, [255, 255, 255]);
	drawCenteredText('t.secs is a read-write property.', -10, [150, 170, 200]);
	drawCenteredText('Press SPACE to jump 1.0s ahead', 10, [100, 255, 150]);
	drawCenteredText(`Current Time: ${t.secs.toFixed(2)}s`, 12, [140, 180, 255]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Set Signature

```ts
set secs(value): void;
```

Set the elapsed seconds by adjusting the internal start time.

This allows seeking/scrubbing in animations. Setting `secs` will also
affect the value returned by [millis](#millis) since they are connected.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | The new elapsed time in seconds |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.draw(() => {
	t.background(6, 10, 22);

	const barWidth = 40;
	const startX = -Math.floor(barWidth / 2);

	// Scrubbing logic: Override t.secs while holding mouse button
	if (t.mouseIsPressed && t.mouse.x !== Number.NEGATIVE_INFINITY) {
		const progress = (t.mouse.x - startX) / barWidth;
		const scrub = progress * 10;
		t.secs = Math.max(0, Math.min(10, scrub));
		t.cursor('grabbing');
	} else {
		t.cursor('default');
	}

	const time = t.secs;
	const length = 15;
	const angle = Math.sin(time * 2) * 60; // Pendulum swing

	t.push();
	t.rotateZ(angle);
	t.charColor(60, 70, 100);
	t.char('|');
	t.rect(1, length);

	t.translate(0, length);
	t.char('O');
	t.charColor(255, 140, 180);
	t.ellipse(8, 8);
	t.pop();

	drawCenteredText('Textmodifier.secs (Time Scrubbing)', -18, [255, 255, 255]);
	drawCenteredText('Hold Click and drag horizontally to scrub time.', -16, [150, 170, 200]);
	drawCenteredText(`t.secs = ${t.secs.toFixed(2)}s`, 12, [255, 140, 180]);

	t.push();
	t.translate(0, 15);
	t.charColor(40, 45, 60);
	t.char('-');
	t.rect(barWidth, 1);

	t.translate(Math.floor((t.secs / 10) * barWidth) + startX, 0);
	t.char('^');
	t.charColor(255);
	t.point();
	t.pop();
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

Get the width of the canvas in pixels.

##### Returns

`number`

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
	t.background(0);

	const width = t.width;
	const info = `WIDTH: ${width}px`;
	const arrowLength = Math.floor(t.grid.cols / 2) - 4;

	for (let i = 0; i < arrowLength; i++) {
		t.push();
		t.translate(-arrowLength + i, 0);
		t.char(i === 0 ? '<' : '-');
		t.charColor(255, 100, 100);
		t.point();
		t.pop();
	}

	for (let i = 0; i < arrowLength; i++) {
		t.push();
		t.translate(arrowLength - i, 0);
		t.char(i === 0 ? '>' : '-');
		t.charColor(255, 100, 100);
		t.point();
		t.pop();
	}

	for (let i = 0; i < info.length; i++) {
		t.push();
		t.translate(i - info.length / 2, 0);
		t.char(info[i]);
		t.charColor(255);
		t.point();
		t.pop();
	}
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
	fontSize: 8,
	frameRate: 60,
});

const spires = [];

for (let x = -3; x <= 3; x++) {
	for (let z = -3; z <= 3; z++) {
		if (Math.abs(x) + Math.abs(z) > 5) {
			continue;
		}

		spires.push({
			x,
			z,
			phase: (x + 3) * 0.7 + (z + 3) * 1.1,
		});
	}
}

t.draw(() => {
	const time = t.frameCount * 0.02;
	const ember = 78 + 42 * Math.sin(time * 0.9);
	const tide = 56 + 38 * Math.cos(time * 0.7);
	const bloom = 44 + 30 * Math.sin(time * 1.4 + 0.6);

	t.background(3, 6, 14);

	t.ambientLight(24, 24, 30);
	t.ambientLight(ember, 42, 18);
	t.ambientLight(14, bloom, tide);

	t.camera(Math.sin(time * 0.45) * 28, -10 + Math.cos(time * 0.3) * 6, 120, 0, -6, 0);

	t.push();
	t.rotateX(18);
	t.rotateY(time * 16);

	for (let i = 0; i < spires.length; i++) {
		const spire = spires[i];
		const pulse = 0.5 + 0.5 * Math.sin(time * 1.6 + spire.phase);
		const height = 6 + pulse * 10;
		const drift = Math.sin(time * 2.1 + spire.phase * 1.3) * 1.5;

		t.push();
		t.translate(spire.x * 8, drift - height * 0.5, spire.z * 8);
		t.rotateY(time * 30 + spire.phase * 50);
		t.char(i % 2 === 0 ? '#' : 'H');
		t.charColor(120 + pulse * 100, 80 + pulse * 60, 170 + pulse * 70);
		t.cellColor(12 + pulse * 20, 10 + pulse * 14, 20 + pulse * 24);
		t.box(4, height, 4);
		t.pop();
	}

	t.push();
	t.translate(0, -3 + Math.sin(time * 2) * 1.2, 0);
	t.rotateX(90 + Math.sin(time * 1.3) * 12);
	t.rotateY(time * 42);
	t.char('*');
	t.charColor(255, 220, 180);
	t.cellColor(30, 18, 22);
	t.torus(11, 2.6);
	t.pop();

	t.pop();
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

function trsMatrixY(angle, tx, ty, tz, sx, sy, sz) {
	const c = Math.cos(angle);
	const s = Math.sin(angle);

	return new Float32Array([c * sx, 0, -s * sx, 0, 0, sy, 0, 0, s * sz, 0, c * sz, 0, tx, ty, tz, 1]);
}

function drawLabel(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

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
	t.perspective(60, 0.1, 4096);
	const camera = t.createCamera();
	camera.setPosition(0, 6, 54).lookAt(0, 0, 0);
	t.setCamera(camera);
});

t.draw(() => {
	const time = t.frameCount * 0.02;
	t.background(5, 7, 18);

	const left = trsMatrixY(time * 1.4, -12, 0, 0, 1.1, 1.1, 1.1);
	t.push();
	t.applyMatrix(left);
	t.char('M');
	t.charColor(255, 140, 120);
	t.box(8, 8, 8);
	t.pop();

	const right = trsMatrixY(time * 2.0, 12, 0, 0, 1.0, 1.0, 1.0);
	t.push();
	t.applyMatrix(right);
	t.scale(1.0 + Math.sin(time * 2.2) * 0.2);
	t.char('S');
	t.charColor(120, 205, 255);
	t.torus(3.2, 1.3);
	t.pop();

	drawLabel('applyMatrix() + scale()', -Math.floor(t.grid.rows * 0.36), [255, 225, 140]);
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
| `width` | `number` | Width of the arc in grid cells |
| `height` | `number` | Height of the arc in grid cells |
| `startAngle` | `number` | Starting angle in degrees |
| `endAngle` | `number` | Ending angle in degrees |

#### Returns

`void`

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

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;
	const startAngle = (time * 50) % 360;
	const endAngle = startAngle + 90 + Math.sin(time) * 45;

	t.push();
	t.charColor(40, 50, 80);
	t.char('.');
	t.rect(t.grid.cols, t.grid.rows);
	t.pop();

	drawCenteredText('Textmodifier.arc', -12, [240, 245, 255]);
	drawCenteredText('Drawing circular or elliptical paths.', -10, [150, 170, 200]);

	t.push();
	t.char('#');
	t.charColor(140, 180, 255);
	t.lineWeight(1);

	// Params: width, height, startAngle (deg), endAngle (deg)
	t.arc(24, 14, startAngle, endAngle);

	t.push();
	t.charColor(60, 70, 100, 150);
	t.char('.');

	const startRad = (startAngle * Math.PI) / 180;
	t.line(0, 0, Math.cos(startRad) * 12, Math.sin(startRad) * 7);

	const endRad = (endAngle * Math.PI) / 180;
	t.line(0, 0, Math.cos(endRad) * 12, Math.sin(endRad) * 7);
	t.pop();
	t.pop();

	drawCenteredText(`START: ${startAngle.toFixed(1).padStart(5, '0')} DEG`, 8, [255, 225, 140]);
	drawCenteredText(`END:   ${endAngle.toFixed(1).padStart(5, '0')} DEG`, 10, [140, 255, 180]);
	drawCenteredText('t.arc(width, height, start, end)', 13, [100, 120, 150]);
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

Get the current background color.

##### Returns

[`TextmodeColor`](TextmodeColor.md)

The current background color as a [TextmodeColor](TextmodeColor.md).

##### Example

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

t.draw(() => {
	const time = t.frameCount * 0.02;

	const r = Math.round(40 + 40 * Math.sin(time));
	const b = Math.round(60 + 40 * Math.cos(time * 0.7));
	t.background(r, 20, b);

	const bg = t.background();

	drawCenteredText('Textmodifier.background', -12, [240, 245, 255]);
	drawCenteredText('Setting and retrieving the canvas background color.', -10, [150, 170, 200]);

	t.push();
	t.charColor(255, 225, 140);
	t.char('#');
	t.rect(14, 6);
	t.pop();

	drawCenteredText('RGB GETTER READOUT', 8, [140, 255, 180]);
	drawCenteredText(
		`R: ${bg.r.toString().padStart(3, '0')}  G: ${bg.g.toString().padStart(3, '0')}  B: ${bg.b.toString().padStart(3, '0')}`,
		10,
		[140, 180, 255]
	);
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

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);
	t.cellColor(0, 0, 0, 0);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	const time = t.frameCount * 0.05;
	const gray = Math.round(127 + 127 * Math.sin(time));

	t.background(gray);

	// that remains perfectly visible regardless of the background brightness.
	t.push();
	t.cellColor(255 - gray);
	t.charColor(gray);
	t.char('+');
	t.rect(20, 10);
	t.pop();

	drawCenteredText('Textmodifier.background (Grayscale)', -12, [240, 120, 255]);
	drawCenteredText('Passing a single number sets an R=G=B gray level.', -10, [150, 170, 200]);

	drawCenteredText('INVERTED CELL SCHEMATIC', 8, [255, 225, 140]);
	drawCenteredText(`BG_VAL: ${gray.toString().padStart(3, '0')}`, 10, [140, 180, 255]);
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

t.draw(() => {
	const cycle = Math.floor(t.frameCount / 60) % 3;
	const hex = ['#1e1b4b', '#064e3b', '#4c1d95'][cycle];
	t.background(hex);

	drawCenteredText('Textmodifier.background (Hex)', -12, [240, 245, 255]);
	drawCenteredText('Passing a hex string (e.g. #RRGGBB) to set the color.', -10, [150, 170, 200]);

	t.push();
	t.charColor(255, 255, 255, 100);
	t.char('.');
	t.rect(24, 1);
	t.pop();

	drawCenteredText('HEX STRING MODE', 8, [140, 220, 255]);
	drawCenteredText(`ACTIVE: ${hex}`, 10, [255, 225, 140]);
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

const colorA = t.color(100, 20, 20); // Dark Red
const colorB = t.color(20, 20, 100); // Dark Blue

t.draw(() => {
	const time = t.frameCount * 0.05;
	const blend = 0.5 + 0.5 * Math.sin(time);

	t.background(blend > 0.5 ? colorA : colorB);

	drawCenteredText('Textmodifier.background (Color Object)', -12, [240, 245, 255]);
	drawCenteredText('Passing a TextmodeColor object directly for reuse.', -10, [150, 170, 200]);

	t.push();
	t.charColor(255, 225, 140);
	t.char('#');
	t.rect(14, 6);
	t.pop();

	drawCenteredText('REUSABLE COLOR OBJECT', 8, [140, 255, 180]);
	drawCenteredText(`ACTIVE_ID: ${blend > 0.5 ? 'colorA' : 'colorB'}`, 10, [140, 180, 255]);
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

Draw a smooth cubic bezier curve between two points with two control points.
The curve thickness is controlled by the current [lineWeight](#lineweight) setting.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x1` | `number` | Start point X coordinate in grid cells |
| `y1` | `number` | Start point Y coordinate in grid cells |
| `cp1x` | `number` | First control point X coordinate in grid cells |
| `cp1y` | `number` | First control point Y coordinate in grid cells |
| `cp2x` | `number` | Second control point X coordinate in grid cells |
| `cp2y` | `number` | Second control point Y coordinate in grid cells |
| `x2` | `number` | End point X coordinate in grid cells |
| `y2` | `number` | End point Y coordinate in grid cells |

#### Returns

`void`

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

function drawPoint(x, y, char, rgb, label) {
	t.push();
	t.translate(x, y);
	t.char(char);
	t.charColor(rgb[0], rgb[1], rgb[2]);
	t.point();

	t.push();
	t.translate(1, 1);
	t.charColor(rgb[0], rgb[1], rgb[2], 150);
	for (let i = 0; i < label.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(label[i]);
		t.point();
		t.pop();
	}
	t.pop();
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;

	const x1 = -15,
		y1 = 0;
	const x2 = 15,
		y2 = 0;

	const cp1x = -10 + Math.cos(time) * 5;
	const cp1y = -8 + Math.sin(time) * 4;

	const cp2x = 10 + Math.sin(time * 0.7) * 5;
	const cp2y = 8 + Math.cos(time * 0.8) * 4;

	t.push();
	t.charColor(40, 50, 80);
	t.char('.');
	t.rect(t.grid.cols, t.grid.rows);
	t.pop();

	drawCenteredText('Textmodifier.bezierCurve', -12, [240, 245, 255]);
	drawCenteredText('Drawing smooth paths using four control points.', -10, [150, 170, 200]);

	t.push();
	t.charColor(60, 70, 100, 120);
	t.char('.');
	t.line(x1, y1, cp1x, cp1y);
	t.line(x2, y2, cp2x, cp2y);
	t.pop();

	t.push();
	t.char('#');
	t.charColor(140, 180, 255);
	t.lineWeight(1);
	t.bezierCurve(x1, y1, cp1x, cp1y, cp2x, cp2y, x2, y2);
	t.pop();

	drawPoint(x1, y1, 'o', [140, 255, 180], 'START');
	drawPoint(x2, y2, 'o', [255, 140, 180], 'END');
	drawPoint(cp1x, cp1y, '+', [255, 225, 140], 'CP1');
	drawPoint(cp2x, cp2y, '+', [255, 225, 140], 'CP2');

	drawCenteredText('CUBIC BEZIER SCHEMATIC', 10, [140, 220, 255]);
	drawCenteredText('t.bezierCurve(x1, y1, cp1x, cp1y, cp2x, cp2y, x2, y2)', 13, [100, 120, 150]);
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

let w = 0,
	h = 0,
	d = 0;

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

	drawCenteredText('Textmodifier.box', -12, [240, 245, 255]);
	drawCenteredText('A 3D box primitive with width, height, and depth.', -10, [150, 170, 200]);

	drawCenteredText(`WIDTH:  ${w.toFixed(1)}`, 8, [140, 180, 255]);
	drawCenteredText(`HEIGHT: ${h.toFixed(1)}`, 10, [140, 255, 180]);
	drawCenteredText(`DEPTH:  ${d.toFixed(1)}`, 12, [255, 225, 140]);

	drawCenteredText('t.box(width, height, depth)', 15, [100, 120, 150]);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;

	w = 12 + Math.sin(time) * 4;
	h = 8 + Math.cos(time * 0.7) * 3;
	d = 10 + Math.sin(time * 0.5) * 4;

	t.ambientLight(30, 40, 60);
	t.pointLight([255, 225, 140], 0, -20, 30);
	t.camera(15, -10, 40, 0, 0, 0);

	t.push();
	t.rotateX(time * 20);
	t.rotateY(time * 30);
	t.char('#');
	t.charColor(140, 180, 255);
	t.cellColor(20, 30, 60);

	t.box(w, h, d);
	t.pop();
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

Sets an explicit camera transform (eye, target, up) for subsequent draw calls.

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

const scene = [
	{ x: -14, y: -4, z: 0, char: 'A', color: [255, 120, 120] },
	{ x: 0, y: 8, z: -12, char: 'B', color: [120, 255, 160] },
	{ x: 14, y: -2, z: 10, char: 'C', color: [120, 180, 255] },
];

function drawScene() {
	for (let i = 0; i < scene.length; i++) {
		const item = scene[i];

		t.push();
		t.translate(item.x, item.y, item.z);
		t.rotateX(t.frameCount * (1 + i * 0.15));
		t.rotateY(t.frameCount * (1.3 + i * 0.2));
		t.char(item.char);
		t.charColor(item.color[0], item.color[1], item.color[2]);
		t.rect(8, 8);
		t.pop();
	}
}

function drawLabel(text, y) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y, 0);
	t.charColor(220);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	t.background(8, 10, 24);

	const time = t.frameCount * 0.02;
	t.perspective(58, 0.1, 4096);
	t.camera(Math.cos(time) * 38, 12 + Math.sin(time * 0.5) * 8, Math.sin(time) * 38, 0, 0, 0);

	drawScene();
	drawLabel('camera(eyeX, eyeY, eyeZ, 0, 0, 0)', Math.floor(t.grid.rows / 2) - 3);
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

Get the current cell background color.

##### Returns

[`TextmodeColor`](TextmodeColor.md)

The current cell color as a [TextmodeColor](TextmodeColor.md).

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let currentR = 0,
	currentG = 0,
	currentB = 0;

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);
	t.cellColor(0, 0, 0, 0);

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

	drawCenteredText('Textmodifier.cellColor', -12, [240, 245, 255]);
	drawCenteredText('Setting the background color of individual cells.', -10, [150, 170, 200]);

	drawCenteredText('RGB GETTER READOUT', 8, [140, 255, 180]);
	drawCenteredText(
		`R: ${currentR.toString().padStart(3, '0')}  G: ${currentG.toString().padStart(3, '0')}  B: ${currentB.toString().padStart(3, '0')}`,
		10,
		[140, 180, 255]
	);

	drawCenteredText('t.cellColor(r, g, b)', 13, [100, 120, 150]);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.03;
	const r = Math.round(127 + 127 * Math.sin(time));
	const g = Math.round(127 + 127 * Math.cos(time * 0.7));
	const b = 150;

	t.cellColor(r, g, b);

	const cell = t.cellColor();
	currentR = cell.r;
	currentG = cell.g;
	currentB = cell.b;

	t.push();
	t.charColor(255);
	t.char('#');
	t.rect(14, 6);
	t.pop();
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

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);
	t.cellColor(0, 0, 0, 0);

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

	drawCenteredText('Textmodifier.cellColor (Grayscale)', -12, [240, 245, 255]);
	drawCenteredText('Passing a single number sets an R=G=B cell background.', -10, [150, 170, 200]);

	drawCenteredText('t.cellColor(gray)', 12, [100, 120, 150]);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.05;
	const gray = Math.round(127 + 127 * Math.sin(time));

	t.cellColor(gray);

	t.push();
	t.charColor(255 - gray);
	t.char('+');
	t.rect(20, 10);
	t.pop();

	t.push();
	t.resetCamera();
	drawCenteredText('GRAYSCALE PULSE', 8, [255, 225, 140]);
	drawCenteredText(`VALUE: ${gray.toString().padStart(3, '0')}`, 10, [140, 180, 255]);
	t.pop();
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

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);
	t.cellColor(0, 0, 0, 0);

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

	drawCenteredText('Textmodifier.cellColor (Hex)', -12, [240, 245, 255]);
	drawCenteredText('Passing a hex string (e.g. #RRGGBB) to set the background.', -10, [150, 170, 200]);

	drawCenteredText('t.cellColor(hexString)', 13, [100, 120, 150]);
});

t.draw(() => {
	t.background(6, 10, 22);

	const cycle = Math.floor(t.frameCount / 60) % 3;
	const hex = ['#1e1b4b', '#064e3b', '#4c1d95'][cycle];
	t.cellColor(hex);

	t.push();
	t.charColor(255, 255, 255);
	t.char('/');
	t.rect(20, 8);
	t.pop();

	t.push();
	t.resetCamera();
	drawCenteredText('HEX STRING MODE', 8, [140, 220, 255]);
	drawCenteredText(`ACTIVE: ${hex}`, 10, [255, 225, 140]);
	t.pop();
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

const colorA = t.color(120, 20, 40); // Dark Red-Brown
const colorB = t.color(20, 60, 100);

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);
	t.cellColor(0, 0, 0, 0);

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

	drawCenteredText('Textmodifier.cellColor (Color Object)', -12, [240, 245, 255]);
	drawCenteredText('Passing a TextmodeColor object directly for reuse.', -10, [150, 170, 200]);

	drawCenteredText('t.cellColor(colorObject)', 13, [100, 120, 150]);
});

t.draw(() => {
	t.background(6, 10, 22);

	const cycle = Math.floor(t.frameCount / 60) % 2;
	const activeColor = cycle === 0 ? colorA : colorB;

	t.cellColor(activeColor);

	t.push();
	t.charColor(255, 225, 140);
	t.char('@');
	t.rect(14, 6);
	t.pop();

	t.push();
	t.resetCamera();
	drawCenteredText('REUSABLE COLOR OBJECT', 8, [140, 255, 180]);
	drawCenteredText(`ACTIVE_ID: ${cycle === 0 ? 'colorA' : 'colorB'}`, 10, [140, 180, 255]);
	t.pop();
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

Get the current character string used for rendering.

##### Returns

`string`

The current character string.

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let currentChar = '';

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);
	t.cellColor(0, 0, 0, 0);

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

	drawCenteredText('Textmodifier.char', -12, [240, 245, 255]);
	drawCenteredText('Assigning glyphs via strings and querying state.', -10, [150, 170, 200]);

	drawCenteredText('GETTER READOUT', 8, [140, 255, 180]);
	drawCenteredText(`ACTIVE_CHAR: "${currentChar}"`, 10, [140, 180, 255]);

	drawCenteredText('t.char(string)', 13, [100, 120, 150]);
});

t.draw(() => {
	t.background(6, 10, 22);

	const cycle = Math.floor(t.frameCount / 60) % 3;
	const charSet = ['@', '#', 'X'];

	t.char(charSet[cycle]);

	currentChar = t.char();

	t.push();
	t.charColor(255, 180, 100);
	t.rotateZ(t.frameCount * 2);
	t.rect(14, 14);
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Call Signature

```ts
char(value): void;
```

Set the character to be used for subsequent rendering operations.
Accepts a single character string or a character index in the current font.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` | The character string or font character index to set for rendering |

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

let currentIndex = 0;
let currentChar = '';

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);
	t.cellColor(0, 0, 0, 0);

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

	drawCenteredText('Textmodifier.char (Index)', -12, [240, 245, 255]);
	drawCenteredText('Selecting glyphs using their numeric index in the font.', -10, [150, 170, 200]);

	drawCenteredText('INDEX SELECTOR', 8, [255, 225, 140]);
	drawCenteredText(
		`INDEX: ${currentIndex.toString().padStart(3, '0')}  RESULT: "${currentChar}"`,
		10,
		[140, 180, 255]
	);

	drawCenteredText('t.char(indexNumber)', 13, [100, 120, 150]);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.2;
	const count = t.font.characters.length;

	currentIndex = Math.floor(time) % count;
	t.char(currentIndex);

	currentChar = t.char();

	t.push();
	t.charColor(120, 255, 180);
	t.rotateZ(t.frameCount * 3);
	t.rect(12, 12);
	t.pop();
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

Get the current character color.

##### Returns

[`TextmodeColor`](TextmodeColor.md)

The current character color as a [TextmodeColor](TextmodeColor.md).

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let currentR = 0,
	currentG = 0,
	currentB = 0;

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);
	t.cellColor(0, 0, 0, 0);

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

	drawCenteredText('Textmodifier.charColor', -12, [240, 245, 255]);
	drawCenteredText('Setting the primary stroke color of character glyphs.', -10, [150, 170, 200]);

	drawCenteredText('RGB GETTER READOUT', 8, [140, 255, 180]);
	drawCenteredText(
		`R: ${currentR.toString().padStart(3, '0')}  G: ${currentG.toString().padStart(3, '0')}  B: ${currentB.toString().padStart(3, '0')}`,
		10,
		[140, 180, 255]
	);

	drawCenteredText('t.charColor(r, g, b)', 13, [100, 120, 150]);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.04;
	const r = Math.round(150 + 105 * Math.sin(time));
	const g = Math.round(150 + 105 * Math.cos(time * 0.7));
	const b = 120;

	t.charColor(r, g, b);

	const col = t.charColor();
	currentR = col.r;
	currentG = col.g;
	currentB = col.b;

	t.push();
	t.char('#');
	t.rotateZ(time * 20);
	t.rect(14, 6);
	t.pop();
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

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);
	t.cellColor(0, 0, 0, 0);

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

	drawCenteredText('Textmodifier.charColor (Grayscale)', -12, [240, 245, 255]);
	drawCenteredText('Passing a single number sets an R=G=B stroke level.', -10, [150, 170, 200]);

	drawCenteredText('t.charColor(gray, alpha)', 12, [100, 120, 150]);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.05;
	const gray = Math.round(127 + 127 * Math.sin(time));
	const alpha = Math.round(127 + 127 * Math.cos(time * 0.7));

	t.charColor(gray, alpha);

	t.push();
	t.char('+');
	t.rotateZ(time * 30);
	t.rect(20, 10);
	t.pop();

	t.push();
	t.resetCamera();
	drawCenteredText('GRAYSCALE + ALPHA PULSE', 8, [255, 225, 140]);
	drawCenteredText(
		`GRAY: ${gray.toString().padStart(3, '0')}  ALPHA: ${alpha.toString().padStart(3, '0')}`,
		10,
		[140, 180, 255]
	);
	t.pop();
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

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);
	t.cellColor(0, 0, 0, 0);

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

	drawCenteredText('Textmodifier.charColor (Hex)', -12, [240, 245, 255]);
	drawCenteredText('Passing a hex string (e.g. #RRGGBB) to set the stroke.', -10, [150, 170, 200]);

	drawCenteredText('t.charColor(hexString)', 13, [100, 120, 150]);
});

t.draw(() => {
	t.background(6, 10, 22);

	const cycle = Math.floor(t.frameCount / 60) % 3;
	const hex = ['#fbbf24', '#34d399', '#60a5fa'][cycle];
	t.charColor(hex);

	t.push();
	t.char('=');
	t.rotateZ(t.frameCount * 2);
	t.rect(20, 8);
	t.pop();

	t.push();
	t.resetCamera();
	drawCenteredText('HEX STRING MODE', 8, [140, 220, 255]);
	drawCenteredText(`ACTIVE: ${hex}`, 10, [255, 225, 140]);
	t.pop();
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

const colorA = t.color(255, 200, 100); // Gold
const colorB = t.color(100, 200, 255); // Sky Blue

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);
	t.cellColor(0, 0, 0, 0);

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

	drawCenteredText('Textmodifier.charColor (Color Object)', -12, [240, 245, 255]);
	drawCenteredText('Passing a TextmodeColor object directly for reuse.', -10, [150, 170, 200]);

	drawCenteredText('t.charColor(colorObject)', 13, [100, 120, 150]);
});

t.draw(() => {
	t.background(6, 10, 22);

	const cycle = Math.floor(t.frameCount / 60) % 2;
	const activeColor = cycle === 0 ? colorA : colorB;

	t.charColor(activeColor);

	t.push();
	t.char('$');
	t.rotateZ(t.frameCount * 3);
	t.rect(14, 6);
	t.pop();

	t.push();
	t.resetCamera();
	drawCenteredText('REUSABLE COLOR OBJECT', 8, [140, 255, 180]);
	drawCenteredText(`ACTIVE_ID: ${cycle === 0 ? 'colorA' : 'colorB'}`, 10, [140, 180, 255]);
	t.pop();
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

Set the character rotation angle for subsequent character rendering, or get current angle.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `degrees?` | `number` | The rotation angle in degrees (optional) |

#### Returns

`number` \| `void`

The current rotation angle in degrees if called without arguments

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let currentAngle = 0;

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);
	t.cellColor(0, 0, 0, 0);

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

	drawCenteredText('Textmodifier.charRotation', -12, [240, 245, 255]);
	drawCenteredText('Rotating individual characters within their grid cells.', -10, [150, 170, 200]);

	drawCenteredText('ROTATION GAUGE', 10, [140, 255, 180]);
	drawCenteredText(`ANGLE: ${currentAngle.toFixed(1).padStart(5, '0')} DEG`, 12, [140, 180, 255]);

	drawCenteredText('t.charRotation(degrees)', 15, [100, 120, 150]);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 1.5;
	const angle = time % 360;

	t.charRotation(angle);

	currentAngle = t.charRotation();

	t.push();
	t.charRotation(0); // Ensure crosshair is static
	t.charColor(60, 70, 100);
	t.char('.');
	t.line(-10, 0, 10, 0);
	t.line(0, -6, 0, 6);

	drawCenteredText('N', -8, [60, 70, 100]);
	drawCenteredText('S', 8, [60, 70, 100]);
	t.translate(-12, 0);
	t.char('W');
	t.point();
	t.translate(24, 0);
	t.char('E');
	t.point();
	t.pop();

	t.push();
	t.charColor(255, 180, 100);
	t.char('+');
	t.rect(10, 6);
	t.pop();
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

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);
	t.cellColor(0, 0, 0, 0);

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

	drawCenteredText('Textmodifier.clear', -12, [240, 245, 255]);
	drawCenteredText('Resetting the current layer buffer to a blank state.', -10, [150, 170, 200]);

	const statusColor = clearEnabled ? [140, 255, 180] : [255, 100, 100];
	drawCenteredText('STATUS: ' + (clearEnabled ? 'CLEAR ACTIVE' : 'CLEAR DISABLED'), 6, statusColor);
	drawCenteredText(
		clearEnabled ? 'The drawing buffer is wiped every frame.' : 'Buffer persists, creating motion trails.',
		9,
		[100, 120, 150]
	);

	drawCenteredText('t.clear()', 13, [100, 120, 150]);
});

t.draw(() => {
	if (t.frameCount % 180 === 0) {
		clearEnabled = !clearEnabled;
		// Ensure a fresh start when re-enabling clear.
		if (clearEnabled) t.clear();
	}

	if (clearEnabled) {
		t.clear();
	}

	const time = t.frameCount * 0.05;
	const x = Math.round(Math.cos(time) * 15);
	const y = Math.round(Math.sin(time * 0.7) * 4);

	t.push();
	t.translate(x, y);
	t.charColor(255, 225, 140);
	t.char('#');
	t.rect(4, 2);
	t.pop();
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

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);
	t.cellColor(0, 0, 0, 0);

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

	drawCenteredText('Textmodifier.color (Grayscale)', -12, [240, 245, 255]);
	drawCenteredText('Creating reusable colors from gray and alpha levels.', -10, [150, 170, 200]);

	drawCenteredText('t.color(gray, alpha)', 12, [100, 120, 150]);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.04;

	const count = 5;
	for (let i = 0; i < count; i++) {
		const phase = i / count;
		const brightness = 100 + 155 * Math.sin(time + phase);
		const alpha = 100 + 155 * Math.cos(time + phase);

		const col = t.color(brightness, alpha);

		t.push();
		t.translate((i - 2) * 8, 0);
		t.charColor(col);
		t.char('#');
		t.rect(6, 6);
		t.pop();
	}
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

const colorCyan = t.color(100, 220, 255);
const colorGold = t.color(255, 225, 140, 150); // Semi-transparent

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);
	t.cellColor(0, 0, 0, 0);

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

	drawCenteredText('Textmodifier.color (RGB)', -12, [240, 245, 255]);
	drawCenteredText('Creating reusable colors from RGB or RGBA values.', -10, [150, 170, 200]);

	drawCenteredText('t.color(r, g, b, a)', 12, [100, 120, 150]);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.03;

	t.push();
	t.char('o');

	t.push();
	t.translate(Math.cos(time) * 10, Math.sin(time) * 5);
	t.charColor(colorCyan);
	t.ellipse(14, 14);
	t.pop();

	// Static golden core (semi-transparent)
	t.push();
	t.charColor(colorGold);
	t.rect(10, 10);
	t.pop();

	t.pop();
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

const baseColor = t.color('#6366f1'); // Indigo

const clonedColor = t.color(baseColor);

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);
	t.cellColor(0, 0, 0, 0);

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

	drawCenteredText('Textmodifier.color (Hex/Clone)', -12, [240, 245, 255]);
	drawCenteredText('Creating colors from hex strings or existing objects.', -10, [150, 170, 200]);

	drawCenteredText('t.color("#RRGGBB") / t.color(otherColor)', 12, [100, 120, 150]);
});

t.draw(() => {
	t.background(6, 10, 22);

	t.push();
	t.charColor(clonedColor);
	t.char('#');
	t.rect(14, 6);
	t.pop();

	drawCenteredText('CLONED INDIGO COLOR', 8, [140, 180, 255]);
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

let radius = 0,
	height = 0;

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);
	t.cellColor(0, 0, 0);

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

	drawCenteredText('Textmodifier.cone', -12, [240, 245, 255]);
	drawCenteredText('A 3D cone primitive defined by radius and height.', -10, [150, 170, 200]);

	drawCenteredText(`RADIUS: ${radius.toFixed(1)}`, 8, [140, 180, 255]);
	drawCenteredText(`HEIGHT: ${height.toFixed(1)}`, 10, [255, 225, 140]);

	drawCenteredText('t.cone(radius, height)', 13, [100, 120, 150]);
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;

	radius = 6 + Math.sin(time) * 2;
	height = 12 + Math.cos(time * 0.7) * 4;

	t.ambientLight(30, 40, 60);
	t.pointLight([255, 225, 140], 0, -20, 30);
	t.camera(15, -10, 40, 0, 2, 0);

	t.push();
	t.rotateX(time * 20);
	t.rotateY(time * 30);
	t.char('#');
	t.charColor(140, 180, 255);
	t.cellColor(20, 30, 60);

	t.cone(radius, height);
	t.pop();
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

Creates a camera object initialized from the current render camera state and sets it active.

Useful for workflows where camera properties are mutated over time and
reapplied via [setCamera](#setcamera).

#### Returns

[`TextmodeCamera`](TextmodeCamera.md)

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let camera;

const scene = [
	{ x: -14, y: -4, z: 0, char: 'A', color: [255, 120, 120] },
	{ x: 0, y: 6, z: -10, char: 'B', color: [120, 255, 160] },
	{ x: 14, y: -2, z: 8, char: 'C', color: [120, 180, 255] },
];

function drawScene() {
	for (let i = 0; i < scene.length; i++) {
		const item = scene[i];

		t.push();
		t.translate(item.x, item.y, item.z);
		t.rotateX(t.frameCount * (1 + i * 0.15));
		t.rotateY(t.frameCount * (1.4 + i * 0.2));
		t.char(item.char);
		t.charColor(item.color[0], item.color[1], item.color[2]);
		t.rect(8, 8);
		t.pop();
	}
}

function drawLabel(text, y) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y, 0);
	t.charColor(220);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.setup(() => {
	t.perspective(58, 0.1, 4096);
	camera = t.createCamera();
});

t.draw(() => {
	t.background(8, 10, 24);

	const time = t.frameCount * 0.02;
	camera
		.setPosition(Math.cos(time) * 34, Math.sin(time * 0.6) * 10, Math.sin(time) * 34)
		.lookAt(0, 0, 0)
		.setUp(0, 1, 0);
	t.setCamera(camera);

	drawScene();
	drawLabel('createCamera() for a reusable camera object', Math.floor(t.grid.rows / 2) - 3);
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

Create a custom filter shader from fragment shader source code or a file path.
The fragment shader automatically receives the standard vertex shader inputs
and must output to the 3 MRT attachments (character/transform, primary color, secondary color).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fragmentSource` | `string` | The fragment shader source code or a file path (e.g., './shader.frag') |

#### Returns

`Promise`\<[`TextmodeShader`](TextmodeShader.md)\>

A Promise that resolves to a compiled shader ready for use with [shader](#shader)

#### Example

```javascript
const t = textmode.create({
	width: 800,
	height: 600,
});

let waveShader;

t.setup(async () => {
	waveShader = await t.createFilterShader('./shader.frag');

	// Or create from inline source
	//   precision highp float;
	//   in vec2 v_uv;
	//   in vec3 v_character;
	//   layout(location = 0) out vec4 o_character;
	// `);
});

t.draw(() => {
	if (waveShader) {
		t.shader(waveShader);
		t.setUniform('u_time', t.frameCount * 0.003);
		t.rect(t.grid.cols, t.grid.rows);
	}
});
```

***

### createFramebuffer()

```ts
createFramebuffer(options): TextmodeFramebuffer;
```

Create a new framebuffer for offscreen rendering.

The framebuffer uses the same MRT structure as the main rendering pipeline.
By default it allocates 3 attachments (character + color data).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`TextmodeFramebufferOptions`](../type-aliases/TextmodeFramebufferOptions.md) | Configuration options for the framebuffer. |

#### Returns

[`TextmodeFramebuffer`](TextmodeFramebuffer.md)

A new Framebuffer instance.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

const fb = t.createFramebuffer({
	width: 24,
	height: 14,
});

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);
	t.cellColor(0, 0, 0, 0);

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

	drawCenteredText('Textmodifier.createFramebuffer', -12, [240, 245, 255]);
	drawCenteredText('Creating an offscreen buffer for nested rendering.', -10, [150, 170, 200]);

	drawCenteredText('FRAMEBUFFER METRICS', 8, [140, 255, 180]);
	drawCenteredText(`COLS: ${fb.width}  ROWS: ${fb.height}  ATTACHMENTS: ${fb.attachmentCount}`, 10, [140, 180, 255]);

	drawCenteredText('t.createFramebuffer({ width, height })', 13, [100, 120, 150]);
});

t.draw(() => {
	t.background(6, 10, 22);
	const time = t.frameCount * 0.05;

	fb.begin();
	t.clear();
	t.background(20, 30, 60);

	t.push();
	t.rotateZ(time * 30);
	t.charColor(255, 180, 100);
	t.char('#');
	t.rect(11, 5);
	t.pop();

	t.push();
	t.charColor(120, 180, 255);
	t.char('+');
	t.point();
	t.pop();
	fb.end();

	t.push();
	// t.rotateZ(Math.sin(time * 0.5) * 10);
	t.image(fb);
	t.pop();
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

Create a shader from vertex and fragment source code or file paths.
Accepts inline shader source or file paths (e.g. './shader.frag', './shader.vert', '.frag', '.vert').

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vertexSource` | `string` | The vertex shader source code or a file path |
| `fragmentSource` | `string` | The fragment shader source code or a file path |

#### Returns

`Promise`\<[`TextmodeShader`](TextmodeShader.md)\>

A Promise that resolves to a compiled shader

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let customShader;

t.setup(async () => {
	const vert = `#version 300 es
    in vec4 a_position;
    in vec2 a_uv;
    out vec2 v_uv;
    void main() {
      gl_Position = a_position;
      v_uv = a_uv;
    }
  `;

	const frag = `#version 300 es
    precision highp float;
    in vec2 v_uv;
    layout(location = 0) out vec4 o_character;
    layout(location = 1) out vec4 o_primaryColor;
    layout(location = 2) out vec4 o_secondaryColor;

    void main() {
       o_character = vec4(0.1, 0.0, 0.0, 0.0);
       o_primaryColor = vec4(1.0, 0.0, 0.0, 1.0);
       o_secondaryColor = vec4(0.0);
    }
  `;

	customShader = await t.createShader(vert, frag);
});

t.draw(() => {
	if (customShader) {
		t.shader(customShader);
		t.rect(10, 10);
	}
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

Create a texture from an external canvas or video element for integration with other WebGL libraries.

This method enables seamless integration with libraries like three.js, p5.js, Babylon.js,
hydra-synth, or any library that renders to a canvas element.

The texture automatically updates each frame to capture the latest content from the source.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | `HTMLCanvasElement` \| `HTMLVideoElement` | Canvas or video element from an external library |

#### Returns

[`TextmodeTexture`](../namespaces/media/classes/TextmodeTexture.md)

A TextmodeTexture that can be drawn with image()

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

const sourceCanvas = document.createElement('canvas');
sourceCanvas.width = 180;
sourceCanvas.height = 120;

const sourceContext = sourceCanvas.getContext('2d');
const texture = t.createTexture(sourceCanvas);
texture.characters(' .:-=+*#%@');

function drawSourceCanvas() {
	if (!sourceContext) {
		return;
	}

	const time = t.frameCount * 0.05;
	sourceContext.fillStyle = '#050816';
	sourceContext.fillRect(0, 0, sourceCanvas.width, sourceCanvas.height);

	const gradient = sourceContext.createLinearGradient(0, 0, sourceCanvas.width, sourceCanvas.height);
	gradient.addColorStop(0, '#1d4ed8');
	gradient.addColorStop(1, '#fb7185');
	sourceContext.fillStyle = gradient;
	sourceContext.fillRect(18, 18, sourceCanvas.width - 36, sourceCanvas.height - 36);

	sourceContext.save();
	sourceContext.translate(sourceCanvas.width / 2, sourceCanvas.height / 2);
	sourceContext.rotate(time * 0.8);
	sourceContext.fillStyle = '#fef08a';
	sourceContext.fillRect(-18, -44, 36, 88);
	sourceContext.restore();
}

function drawLabel(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	drawSourceCanvas();

	t.background(5, 7, 18);
	t.image(texture, t.grid.cols - 8, t.grid.rows - 10);

	drawLabel('createTexture(canvas)', -Math.floor(t.grid.rows * 0.34), [255, 225, 140]);
	drawLabel(
		`source matches ${texture.source === sourceCanvas ? 'yes' : 'no'}`,
		Math.floor(t.grid.rows * 0.3),
		[120, 205, 255]
	);
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

// Configuration for the interactive "Hot Zone"
const ZONE_W = 20;
const ZONE_H = 10;

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);
	t.cellColor(0, 0, 0, 0);

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

	drawCenteredText('Textmodifier.cursor', -12, [240, 245, 255]);
	drawCenteredText('Updating the system cursor based on grid interaction.', -10, [150, 170, 200]);

	const mx = t.mouse.x === Number.NEGATIVE_INFINITY ? 'OFF' : Math.round(t.mouse.x);
	const my = t.mouse.y === Number.NEGATIVE_INFINITY ? 'OFF' : Math.round(t.mouse.y);

	const halfW = ZONE_W / 2;
	const halfH = ZONE_H / 2;
	const isHovering = t.mouse.x >= -halfW && t.mouse.x < halfW && t.mouse.y >= -halfH && t.mouse.y < halfH;

	drawCenteredText('INTERACTION MONITOR', 8, [140, 255, 180]);
	drawCenteredText(`MOUSE: [${mx}, ${my}]  HOVER: ${isHovering}`, 10, [140, 180, 255]);
	drawCenteredText(`CURSOR: ${isHovering ? 'pointer' : 'default'}`, 12, [255, 225, 140]);

	drawCenteredText('t.cursor(typeString)', 15, [100, 120, 150]);
});

t.draw(() => {
	t.background(6, 10, 22);

	const halfW = ZONE_W / 2;
	const halfH = ZONE_H / 2;

	const isHovering = t.mouse.x >= -halfW && t.mouse.x < halfW && t.mouse.y >= -halfH && t.mouse.y < halfH;

	t.cursor(isHovering ? 'pointer' : 'default');

	t.push();
	t.char(isHovering ? '#' : '.');
	t.charColor(isHovering ? [140, 255, 180] : [60, 70, 100]);
	t.rect(ZONE_W, ZONE_H);
	t.pop();
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 8 });

function label(text, y) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y, 0);
	t.charColor(220);
	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}
	t.pop();
}

t.draw(() => {
	const time = t.frameCount * 0.02;
	t.background(4, 7, 15);
	t.ambientLight(22, 24, 30);
	t.pointLight([120, 220, 255], { x: 20, y: -12, z: 24 });
	t.camera(Math.sin(time * 0.35) * 14, -6, 88, 0, 2, -8);

	for (let i = 0; i < 6; i++) {
		t.push();
		t.translate((i - 2.5) * 9, 10 - i * 2, -i * 8);
		t.rotateY(time * 22 + i * 12);
		t.char(i % 2 === 0 ? '|' : 'I');
		t.charColor(110 + i * 18, 180 + i * 10, 255 - i * 18);
		t.cellColor(14 + i * 2, 18 + i * 2, 24 + i * 3);
		t.cylinder(2.4 + i * 0.35, 8 + i * 3);
		t.pop();
	}

	label('cylinder(radius, height)', Math.floor(t.grid.rows / 2) - 3);
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

Returns the time in milliseconds between the current frame and the previous frame.

`deltaTime()` is useful for creating frame-rate-independent animations. By multiplying
velocities and movements by `deltaTime()`, animations will run at consistent speeds
regardless of the actual frame rate.

#### Returns

`number`

Time elapsed between current and previous frame in milliseconds.

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let x = -40;
const speed = 0.05;

function drawLabel(text, y) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(180);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	t.background(0);

	x += speed * t.deltaTime();
	if (x > t.grid.cols / 2 + 5) {
		x = -t.grid.cols / 2 - 5;
	}

	t.push();
	t.translate(x, 0);
	t.char('>');
	t.charColor(255, 100, 50);
	t.rect(4, 2);
	t.pop();

	drawLabel(`deltaTime(): ${t.deltaTime().toFixed(2)} ms`, -12);
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 8 });

let destroyed = false;
const status = document.createElement('div');
status.style.cssText =
	'position:fixed;left:12px;top:12px;padding:8px 10px;background:#09090bcc;color:#e4e4e7;font:12px JetBrains Mono,monospace;border:1px solid #27272a;';
status.textContent = 'destroy() will run after 3 seconds';
document.body.appendChild(status);

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);
	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}
	t.pop();
}

t.draw(() => {
	const remaining = Math.max(0, 180 - t.frameCount);
	t.background(10, 12, 24);
	label('destroy()', -2, [255, 210, 90]);
	label(`frames until cleanup: ${remaining}`, 1);

	if (!destroyed && remaining === 0) {
		destroyed = true;
		status.textContent = 'destroy() called...';
		t.destroy();
		setTimeout(() => {
			status.textContent = `destroyed, isDisposed = ${t.isDisposed}`;
		}, 0);
	}
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

Set a callback function that will be called when the mouse is double-clicked.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`MouseEventHandler`](../namespaces/input/namespaces/mouse/type-aliases/MouseEventHandler.md) | The function to call when the mouse is double-clicked |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

const bursts = [];

t.doubleClicked((data) => {
	if (data.position.x === Number.NEGATIVE_INFINITY) return;

	for (let i = 0; i < 16; i++) {
		const angle = (Math.PI * 2 * i) / 16;
		bursts.push({
			x: data.position.x,
			y: data.position.y,
			vx: Math.cos(angle) * 0.8,
			vy: Math.sin(angle) * 0.8,
			life: 1,
		});
	}
});

t.draw(() => {
	t.background(0);

	for (let i = bursts.length - 1; i >= 0; i--) {
		const burst = bursts[i];
		burst.x += burst.vx;
		burst.y += burst.vy;
		burst.life -= 0.02;

		if (burst.life <= 0) {
			bursts.splice(i, 1);
			continue;
		}

		t.push();
		t.translate(burst.x, burst.y);
		t.char(['*', '+', '·'][i % 3]);
		t.charColor(255, 180 + burst.life * 75, 80, burst.life * 255);
		t.point();
		t.pop();
	}
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
| `callback` | [`TouchTapHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchTapHandler.md) | The function to call when a double tap is detected. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let pulse = 0;
let activeColor = t.color(100, 200, 255);

t.doubleTap(() => {
	pulse = 20;
	activeColor = t.color(Math.random() * 255, 200, Math.random() * 255);
});

t.draw(() => {
	t.background(0);
	if (pulse > 0) pulse -= 1;

	const size = 15 + pulse;
	t.char('▓');
	t.charColor(activeColor);
	t.rect(size, size);

	if (pulse > 0) {
		t.push();
		t.char('░');
		t.charColor(255, 255, 255, pulse * 12);
		t.rect(size + 5, size + 5);
		t.pop();
	}
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

Set a draw callback function for the base layer.

This callback function is where all drawing commands should be placed for textmode rendering on the main layer.

If multiple layers are added via [Textmodifier.layers](#layers), each layer has its own draw callback set via [TextmodeLayer.draw](../namespaces/layering/classes/TextmodeLayer.md#draw).
This allows for complex multi-layered compositions with independent rendering logic per layer.

Calling this method is equivalent to setting the draw callback on the base layer,
while the direct layer callback has precedence if both are set.
```js
textmodifier.layers.base.draw(callback);
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` | The function to call before each render |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
	t.background(0);

	const time = t.frameCount * 0.05;

	for (let i = 0; i < 20; i++) {
		const angle = time + i * 0.3;
		const radius = 10 + i;
		const x = Math.cos(angle) * radius;
		const y = Math.sin(angle) * radius;

		t.push();
		t.translate(x, y);
		t.rotateZ(angle);
		t.charColor(255 - i * 10, 100 + i * 5, 200);
		t.char(['+', 'x', 'o'][i % 3]);
		t.rect(2, 2);
		t.pop();
	}
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
| `width?` | `number` | Width of the ellipse in grid cells (defaults to 1) |
| `height?` | `number` | Height of the ellipse in grid cells (defaults to 1) |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.secs;

	const rx = 20 + Math.sin(time * 1.5) * 10;
	const ry = 12 + Math.cos(time * 2.0) * 8;

	t.push();
	t.charColor(100, 200, 255);
	t.char('•');
	t.ellipse(rx, ry);

	t.push();
	t.charColor(255, 100, 100);
	t.char('-');
	t.line(0, 0, rx, 0);
	t.translate(rx, 0);
	t.char('>');
	t.point();
	t.pop();

	t.push();
	t.charColor(100, 255, 100);
	t.char('|');
	t.line(0, 0, 0, ry);
	t.translate(0, ry);
	t.char('v');
	t.point();
	t.pop();
	t.pop();

	drawCenteredText('Textmodifier.ellipse', -22, [255, 255, 255]);
	drawCenteredText('Draws a 2D ellipse with two radii.', -20, [150, 170, 200]);
	drawCenteredText('radiusX for width, radiusY for height.', -18, [150, 170, 200]);
	drawCenteredText(`t.ellipse(radiusX: ${rx.toFixed(1)}, radiusY: ${ry.toFixed(1)})`, 18, [140, 180, 255]);
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
	fontSize: 8, // Higher resolution for 3D geometry
});

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.draw(() => {
	t.background(6, 10, 22);
	t.ambientLight(30, 35, 50);
	t.pointLight([255, 200, 150], { x: 30, y: -20, z: 40 });

	const time = t.secs;

	const rx = 15 + Math.sin(time * 1.2) * 5;
	const ry = 10 + Math.cos(time * 1.5) * 4;
	const rz = 20 + Math.sin(time * 0.8) * 8;

	t.push();
	t.rotateY(time * 20);
	t.rotateX(time * 10);

	t.charColor(150, 160, 200);
	t.char('0');
	t.ellipsoid(rx, ry, rz);
	t.pop();

	drawCenteredText('Textmodifier.ellipsoid', -35, [255, 255, 255]);
	drawCenteredText('Draws a 3D ellipsoid with independent radii for X, Y, and Z axes.', -32, [150, 170, 200]);
	drawCenteredText(`t.ellipsoid(${rx.toFixed(1)}, ${ry.toFixed(1)}, ${rz.toFixed(1)})`, 32, [140, 180, 255]);
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let cursor = { x: 0, y: 0 };

t.mouseClicked(() => {
	if (document.pointerLockElement === t.canvas) {
		t.exitPointerLock();
	} else {
		t.requestPointerLock();
	}
});

t.draw(() => {
	t.background(0);

	if (document.pointerLockElement === t.canvas) {
		cursor.x += t.movedX * 0.08;
		cursor.y += t.movedY * 0.08;
	}

	cursor.x = Math.max(-t.grid.cols / 2, Math.min(t.grid.cols / 2, cursor.x));
	cursor.y = Math.max(-t.grid.rows / 2, Math.min(t.grid.rows / 2, cursor.y));

	t.push();
	t.translate(cursor.x, cursor.y);
	t.char(document.pointerLockElement === t.canvas ? '@' : '+');
	t.charColor(document.pointerLockElement === t.canvas ? 255 : 180, 220, 120);
	t.point();
	t.pop();
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

Alias for [cellColor](#cellcolor). Get the current fill (cell background) color.

##### Returns

[`TextmodeColor`](TextmodeColor.md)

The current cell color as a [TextmodeColor](TextmodeColor.md).

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

function drawLabel(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	const pulse = (Math.sin(t.frameCount * 0.04) + 1) * 0.5;
	t.background(5, 7, 18);

	t.stroke(255, 140 + pulse * 80, 90);
	t.fill(20, 50 + pulse * 90, 140 + pulse * 80);

	t.push();
	t.rotateZ(t.frameCount * 1.1);
	t.rect(t.grid.cols - 12, t.grid.rows - 12);
	t.pop();

	const stroke = t.stroke();
	const fill = t.fill();

	drawLabel(`stroke ${stroke.r},${stroke.g},${stroke.b}`, -Math.floor(t.grid.rows * 0.34), [255, 225, 140]);
	drawLabel(`fill ${fill.r},${fill.g},${fill.b}`, Math.floor(t.grid.rows * 0.3), [120, 205, 255]);
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

function drawLabel(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	const pulse = (Math.sin(t.frameCount * 0.04) + 1) * 0.5;
	t.background(5, 7, 18);

	t.stroke(255, 140 + pulse * 80, 90);
	t.fill(20, 50 + pulse * 90, 140 + pulse * 80);

	t.push();
	t.rotateZ(t.frameCount * 1.1);
	t.rect(t.grid.cols - 12, t.grid.rows - 12);
	t.pop();

	const stroke = t.stroke();
	const fill = t.fill();

	drawLabel(`stroke ${stroke.r},${stroke.g},${stroke.b}`, -Math.floor(t.grid.rows * 0.34), [255, 225, 140]);
	drawLabel(`fill ${fill.r},${fill.g},${fill.b}`, Math.floor(t.grid.rows * 0.3), [120, 205, 255]);
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

function drawLabel(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	const pulse = (Math.sin(t.frameCount * 0.04) + 1) * 0.5;
	t.background(5, 7, 18);

	t.stroke(255, 140 + pulse * 80, 90);
	t.fill(20, 50 + pulse * 90, 140 + pulse * 80);

	t.push();
	t.rotateZ(t.frameCount * 1.1);
	t.rect(t.grid.cols - 12, t.grid.rows - 12);
	t.pop();

	const stroke = t.stroke();
	const fill = t.fill();

	drawLabel(`stroke ${stroke.r},${stroke.g},${stroke.b}`, -Math.floor(t.grid.rows * 0.34), [255, 225, 140]);
	drawLabel(`fill ${fill.r},${fill.g},${fill.b}`, Math.floor(t.grid.rows * 0.3), [120, 205, 255]);
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

function drawLabel(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	const pulse = (Math.sin(t.frameCount * 0.04) + 1) * 0.5;
	t.background(5, 7, 18);

	t.stroke(255, 140 + pulse * 80, 90);
	t.fill(20, 50 + pulse * 90, 140 + pulse * 80);

	t.push();
	t.rotateZ(t.frameCount * 1.1);
	t.rect(t.grid.cols - 12, t.grid.rows - 12);
	t.pop();

	const stroke = t.stroke();
	const fill = t.fill();

	drawLabel(`stroke ${stroke.r},${stroke.g},${stroke.b}`, -Math.floor(t.grid.rows * 0.34), [255, 225, 140]);
	drawLabel(`fill ${fill.r},${fill.g},${fill.b}`, Math.floor(t.grid.rows * 0.3), [120, 205, 255]);
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

const filters = [
	{ name: 'invert', params: undefined, label: 'INVERT' },
	{ name: 'grayscale', params: 1.0, label: 'GRAYSCALE (1.0)' },
	{ name: 'sepia', params: 0.8, label: 'SEPIA (0.8)' },
	{ name: 'threshold', params: 0.5, label: 'THRESHOLD (0.5)' },
];

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

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;
	const count = 12;

	t.push();
	t.charColor(40, 50, 80);
	t.char('.');
	t.rect(t.grid.cols, t.grid.rows);
	t.pop();

	for (let i = 0; i < count; i++) {
		const angle = (i / count) * Math.PI * 2 + time;
		const radius = 10 + 5 * Math.sin(time * 3 + i);

		t.push();
		t.translate(Math.round(Math.cos(angle) * radius * 1.5), Math.round(Math.sin(angle) * radius));
		t.rotateZ(angle * 50);
		t.charColor(100 + i * 20, 255 - i * 10, 150 + i * 10);
		t.char(['@', '%', '#', '*'][i % 4]);
		t.rect(8, 4);
		t.pop();
	}

	const filterIdx = Math.floor(t.frameCount / 120) % (filters.length + 1);

	if (filterIdx < filters.length) {
		const active = filters[filterIdx];
		t.filter(active.name, active.params);
	}
});

labelLayer.draw(() => {
	t.clear();

	drawCenteredText('Textmodifier.filter', -12, [240, 245, 255]);
	drawCenteredText('Applying post-processing to the canvas output.', -10, [150, 170, 200]);

	const filterIdx = Math.floor(t.frameCount / 120) % (filters.length + 1);

	if (filterIdx < filters.length) {
		const active = filters[filterIdx];
		drawCenteredText('ACTIVE FILTER: ' + active.label, 10, [140, 255, 180]);
	} else {
		drawCenteredText('NO FILTER (NORMAL)', 10, [255, 100, 100]);
	}

	drawCenteredText('t.filter(name, params)', 13, [100, 120, 150]);
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

const filters = [
	{ name: 'invert', params: undefined, label: 'INVERT' },
	{ name: 'grayscale', params: 1.0, label: 'GRAYSCALE (1.0)' },
	{ name: 'sepia', params: 0.8, label: 'SEPIA (0.8)' },
	{ name: 'threshold', params: 0.5, label: 'THRESHOLD (0.5)' },
];

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

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;
	const count = 12;

	t.push();
	t.charColor(40, 50, 80);
	t.char('.');
	t.rect(t.grid.cols, t.grid.rows);
	t.pop();

	for (let i = 0; i < count; i++) {
		const angle = (i / count) * Math.PI * 2 + time;
		const radius = 10 + 5 * Math.sin(time * 3 + i);

		t.push();
		t.translate(Math.round(Math.cos(angle) * radius * 1.5), Math.round(Math.sin(angle) * radius));
		t.rotateZ(angle * 50);
		t.charColor(100 + i * 20, 255 - i * 10, 150 + i * 10);
		t.char(['@', '%', '#', '*'][i % 4]);
		t.rect(8, 4);
		t.pop();
	}

	const filterIdx = Math.floor(t.frameCount / 120) % (filters.length + 1);

	if (filterIdx < filters.length) {
		const active = filters[filterIdx];
		t.filter(active.name, active.params);
	}
});

labelLayer.draw(() => {
	t.clear();

	drawCenteredText('Textmodifier.filter', -12, [240, 245, 255]);
	drawCenteredText('Applying post-processing to the canvas output.', -10, [150, 170, 200]);

	const filterIdx = Math.floor(t.frameCount / 120) % (filters.length + 1);

	if (filterIdx < filters.length) {
		const active = filters[filterIdx];
		drawCenteredText('ACTIVE FILTER: ' + active.label, 10, [140, 255, 180]);
	} else {
		drawCenteredText('NO FILTER (NORMAL)', 10, [255, 100, 100]);
	}

	drawCenteredText('t.filter(name, params)', 13, [100, 120, 150]);
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

Set a final draw callback function for the composited output.

This callback runs after all visible layers have been composited and after
global filters queued via [filter](#filter) during normal draw callbacks have
been applied. Filters queued with `t.filter()` inside this callback are applied
to the final composited texture before it is presented to the canvas.

Use [postDraw](#postdraw) when you want to affect only the base layer. Use this
method when you want to affect the final image made from all layers.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` | The function to call before the final texture is presented. |

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

Toggle horizontal flipping for subsequent character rendering, or get current state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `toggle?` | `boolean` | Whether to flip horizontally (optional) |

#### Returns

`boolean` \| `void`

The current flip state if called without arguments

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

t.draw(() => {
	t.background(6, 10, 22);

	const rows = 10;
	const time = t.frameCount * 0.04;

	// Gently rock the whole field to contrast normal vs mirrored rows
	t.push();
	t.rotateZ(Math.sin(time * 0.4) * 6);

	for (let i = 0; i < rows; i++) {
		const phase = i / (rows - 1);
		const y = (phase - 0.5) * t.grid.rows * 0.75;
		const wave = Math.sin(time + i * 0.6) * 5;
		const pulse = 0.6 + 0.4 * Math.sin(time * 2 + i * 0.9);

		t.push();
		t.translate(wave - 4, y);
		t.charColor(Math.round(180 + 75 * pulse), Math.round(180 + 75 * pulse), 100);
		t.char('R');
		t.point();
		t.pop();

		t.push();
		t.translate(-wave + 4, y);
		t.flipX(true);
		t.charColor(Math.round(180 + 75 * pulse), 100, Math.round(180 + 75 * pulse));
		t.char('R');
		t.point();
		t.pop();

		if (i % 2 === 0) {
			t.push();
			t.translate(wave * 2 - 12, y);
			t.charColor(100, Math.round(180 + 75 * pulse), 80);
			t.char('R');
			t.point();
			t.pop();

			t.push();
			t.translate(-wave * 2 + 12, y);
			t.flipX(true);
			t.charColor(100, 80, Math.round(180 + 75 * pulse));
			t.char('R');
			t.point();
			t.pop();
		}
	}

	t.pop();

	drawCenteredText('Textmodifier.flipX', -14, [240, 245, 255]);
	drawCenteredText('Mirroring glyphs horizontally.', -12, [150, 170, 200]);
	drawCenteredText('t.flipX(false)  original  |  t.flipX(true)  mirrored', -10, [255, 200, 100]);

	drawCenteredText(`t.flipX() = ${t.flipX()}`, 12, [140, 180, 255]);
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

Toggle vertical flipping for subsequent character rendering, or get current state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `toggle?` | `boolean` | Whether to flip vertically (optional) |

#### Returns

`boolean` \| `void`

The current flip state if called without arguments

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

t.draw(() => {
	t.background(6, 10, 22);

	const count = 30;
	const time = t.frameCount * 0.04;

	for (let i = 0; i < count; i++) {
		const x = (i / (count - 1) - 0.5) * t.grid.cols * 0.75;
		const wave = Math.sin(time * 1.5 + i * 0.35) * 2.5;
		const glow = 0.5 + 0.5 * Math.sin(time + i * 0.15);
		const skyY = -7 + wave;
		const waterY = 7 + wave;

		t.push();
		t.translate(x, skyY);
		t.charColor(Math.round(160 + 95 * glow), Math.round(160 + 95 * glow), 255);
		t.char('^');
		t.point();
		t.pop();

		t.push();
		t.translate(x, waterY);
		t.flipY(true);
		t.charColor(Math.round(30 + 40 * glow), Math.round(80 + 60 * glow), Math.round(150 + 105 * glow));
		t.char('^');
		t.point();
		t.pop();
	}

	drawCenteredText('Textmodifier.flipY', -4, [240, 245, 255]);
	drawCenteredText('Reflecting glyphs vertically.', -2, [150, 170, 200]);
	drawCenteredText('t.flipY(false)  original  |  t.flipY(true)  reflected', 0, [255, 200, 100]);

	drawCenteredText(`t.flipY() = ${t.flipY()}`, 12, [140, 180, 255]);
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

Get or set the font size used for rendering.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `size?` | `number` | The font size to set. |

#### Returns

`number` \| `void`

The current font size if called without arguments.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const sizes = [8, 16, 32];
let sizeIndex = 1;

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

t.draw(() => {
	t.background(6, 10, 22);

	const currentSize = t.fontSize();
	const time = t.frameCount * 0.03;

	t.push();
	t.charColor(15, 24, 42);
	t.char('.');
	t.rect(t.grid.cols, t.grid.rows);
	t.pop();

	t.push();
	t.charColor(255, 180, 100);
	t.cellColor(40, 65, 140);
	t.char('#');
	t.rotateZ(time * 80);
	t.rect(6, 6);
	t.pop();

	for (let i = 0; i < 4; i++) {
		const angle = time + (i / 4) * Math.PI * 2;
		t.push();
		t.translate(Math.round(Math.cos(angle) * 5), Math.round(Math.sin(angle) * 5));
		t.charColor(100 + i * 50, 200, 255 - i * 30);
		t.char('*');
		t.point();
		t.pop();
	}

	drawCenteredText('Textmodifier.fontSize', -12, [240, 245, 255]);
	drawCenteredText('Setting and retrieving the current font size.', -10, [150, 170, 200]);

	drawCenteredText(`t.fontSize() = ${currentSize}px  |  Grid: ${t.grid.cols}x${t.grid.rows}`, -6, [140, 180, 255]);

	drawCenteredText('click to cycle: 8 / 16 / 32', 11, [80, 90, 120]);
});

t.mouseClicked(() => {
	sizeIndex = (sizeIndex + 1) % sizes.length;
	t.fontSize(sizes[sizeIndex]);
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

Set the target frame rate. If called without arguments, returns the current measured frame rate.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fps?` | `number` | The maximum frames per second for rendering (optional). |

#### Returns

`number` \| `void`

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

t.mouseClicked(() => {
	const current = Math.round(t.targetFrameRate());
	t.frameRate(current === 60 ? 10 : 60);
});

t.draw(() => {
	t.background(6, 10, 22);

	const measured = t.frameRate();
	const targetRounded = Math.round(t.targetFrameRate());
	const nearTarget = Math.abs(measured - targetRounded) < 5;

	// Rotating arm (smooth at 60 fps, visibly choppy at 10 fps)
	t.push();
	t.rotateZ(t.frameCount * 3);
	t.charColor(255, 200, 100);
	t.cellColor(60, 40, 20);
	t.char('#');
	t.rect(10, 3);
	t.pop();

	t.push();
	t.rotateZ(t.frameCount * 0.5);
	t.translate(8, 0);
	t.charColor(100, 200, 255);
	t.cellColor(20, 40, 60);
	t.char('*');
	t.rect(3, 3);
	t.pop();

	drawCenteredText('Textmodifier.frameRate', -12, [240, 245, 255]);
	drawCenteredText('Setting target and reading measured frame rate.', -10, [150, 170, 200]);

	drawCenteredText(`t.frameRate() = ${measured.toFixed(1)} fps`, -6, nearTarget ? [140, 255, 180] : [255, 140, 100]);
	drawCenteredText(`t.targetFrameRate() = ${targetRounded} fps`, -3, [140, 180, 255]);

	drawCenteredText('click to toggle 10 / 60 fps', 11, [80, 90, 120]);
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

function drawText(text, x, y, r = 220, g = r, b = r) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

function formatAxis(value) {
	return (value >= 0 ? '+' : '') + value.toFixed(2);
}

t.draw(() => {
	t.background(0);

	drawText('gamepad(index)', -28, -18, 255, 255, 255);
	drawText('resolve specific browser slots even when indexes are sparse', -28, -16, 140, 140, 140);
	drawText(`compact list length: ${t.gamepads.length}`, -28, -14, 120, 180, 255);

	for (let slotIndex = 0; slotIndex < 4; slotIndex++) {
		const pad = t.gamepad(slotIndex);
		const y = -10 + slotIndex * 7;

		drawText(`slot ${slotIndex}`, -28, y, 255, 200, 90);

		if (!pad) {
			drawText('empty', -20, y, 90, 90, 90);
			drawText('connect a controller or press a button to wake the browser api', -28, y + 2, 100, 100, 100);
			continue;
		}

		drawText(pad.id.slice(0, 48), -20, y, 180, 180, 180);
		drawText(`mapping: ${pad.mapping || 'raw'}`, -28, y + 2, 120, 180, 255);

		const axes = pad.axes
			.slice(0, 4)
			.map((value, axisIndex) => `a${axisIndex}:${formatAxis(value)}`)
			.join(' ');
		drawText(axes || 'no axes', -11, y + 2, 160, 200, 220);

		const pressedCount = pad.buttons.filter((button) => button.value >= 0.5).length;
		const triggerValue = pad.buttons[6] ? pad.buttons[6].value.toFixed(2) : '--';
		drawText(`pressed:${pressedCount} l2:${triggerValue}`, -28, y + 4, 160, 220, 160);
	}
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

Set a callback function that will be called when a gamepad axis changes meaningfully.

Axis callbacks are derived from per-frame polling, not native DOM events. For continuous
stick or trigger state, polling [Textmodifier.gamepads](#gamepads) inside `draw()` is often the
simpler choice; use this callback when you specifically want change notifications.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`GamepadAxisEventHandler`](../namespaces/input/namespaces/gamepad/type-aliases/GamepadAxisEventHandler.md) | The function to call when an axis changes. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

const vectors = [];

function drawText(text, x, y, r = 220, g = r, b = r, a = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b, a);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

function arrowForDelta(delta) {
	if (delta > 0.08) return '>';
	if (delta < -0.08) return '<';
	return '|';
}

t.gamepadAxisChanged((data) => {
	const label = data.standardAxisName || `axis[${data.axisIndex}]`;
	vectors.unshift({
		label,
		value: data.value,
		delta: data.delta,
		x: -18 + (data.axisIndex % 4) * 12,
		y: -4 + (vectors.length % 6) * 3,
		life: 1,
	});

	if (vectors.length > 24) vectors.length = 24;
});

t.draw(() => {
	t.background(0);

	drawText('gamepadAxisChanged()', -28, -18, 255, 255, 255);
	drawText('move a stick or analog trigger to emit change notifications', -28, -16, 140, 140, 140);

	if (vectors.length === 0) {
		drawText('waiting for analog movement...', -28, -4, 100, 100, 100);
	}

	for (let i = vectors.length - 1; i >= 0; i--) {
		const vector = vectors[i];
		vector.life -= 0.018;
		vector.x += vector.delta * 4;

		if (vector.life <= 0) {
			vectors.splice(i, 1);
			continue;
		}

		const a = Math.round(255 * vector.life);
		const arrow = arrowForDelta(vector.delta);
		drawText(arrow, Math.round(vector.x - 2), vector.y, 120, 200, 255, a);
		drawText(
			`${vector.label} ${(vector.value >= 0 ? '+' : '') + vector.value.toFixed(2)}`,
			Math.round(vector.x),
			vector.y,
			180,
			220,
			255,
			a
		);
	}
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

Set a callback function that will be called when a gamepad button crosses the press threshold.

This is a legacy-style single-callback shortcut for the `'gamepadButtonPressed'` event.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`GamepadButtonEventHandler`](../namespaces/input/namespaces/gamepad/type-aliases/GamepadButtonEventHandler.md) | The function to call when a button is pressed. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

const hits = [];

function drawText(text, x, y, r = 220, g = r, b = r, a = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b, a);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.gamepadButtonPressed((data) => {
	const label = data.standardButtonName || `btn[${data.buttonIndex}]`;
	hits.unshift({
		text: `slot ${data.gamepad.index}  ${label}  ${data.button.value.toFixed(2)}`,
		x: -24 + (hits.length % 3) * 18,
		y: -3 + (hits.length % 5) * 3,
		life: 1,
	});

	if (hits.length > 18) hits.length = 18;
});

t.draw(() => {
	t.background(0);

	drawText('gamepadButtonPressed()', -28, -18, 255, 255, 255);
	drawText('press any gamepad button to spawn a hit marker', -28, -16, 140, 140, 140);
	drawText(`connected: ${t.gamepads.length}`, -28, -14, 120, 180, 255);

	if (hits.length === 0) {
		drawText('waiting for a button press...', -28, -4, 100, 100, 100);
	}

	for (let i = hits.length - 1; i >= 0; i--) {
		const hit = hits[i];
		hit.life -= 0.02;
		hit.y -= 0.04;

		if (hit.life <= 0) {
			hits.splice(i, 1);
			continue;
		}

		const a = Math.round(255 * hit.life);
		drawText('+', hit.x - 2, Math.round(hit.y), 255, 220, 90, a);
		drawText(hit.text, hit.x, Math.round(hit.y), 255, 200, 110, a);
	}
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

Set a callback function that will be called when a gamepad button crosses the release threshold.

This is a legacy-style single-callback shortcut for the `'gamepadButtonReleased'` event.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`GamepadButtonEventHandler`](../namespaces/input/namespaces/gamepad/type-aliases/GamepadButtonEventHandler.md) | The function to call when a button is released. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

const releases = [];

function drawText(text, x, y, r = 220, g = r, b = r, a = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b, a);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.gamepadButtonReleased((data) => {
	const label = data.standardButtonName || `btn[${data.buttonIndex}]`;
	releases.unshift({
		text: `slot ${data.gamepad.index}  ${label}`,
		age: 0,
	});

	if (releases.length > 10) releases.length = 10;
});

t.draw(() => {
	t.background(0);

	drawText('gamepadButtonReleased()', -28, -18, 255, 255, 255);
	drawText('release a held button to log its edge transition', -28, -16, 140, 140, 140);
	drawText('release log', -28, -12, 180, 180, 180);
	drawText('----------------------------------------', -28, -11, 60, 60, 60);

	if (releases.length === 0) {
		drawText('hold a button, then let go', -28, -6, 100, 100, 100);
	}

	for (let i = 0; i < releases.length; i++) {
		const entry = releases[i];
		entry.age++;
		const fade = Math.max(0.2, 1 - entry.age / 240);
		const a = Math.round(255 * fade);
		const cool = 100 + Math.round(120 * fade);

		drawText('v', -28, -8 + i * 2, 120, 160, 255, a);
		drawText(entry.text, -26, -8 + i * 2, 140, 180, cool, a);
	}
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

Set a callback function that will be called when a gamepad becomes available.

This is a legacy-style single-callback shortcut for the `'gamepadConnected'` event.
Calling it replaces the previous callback registered through this same method while
leaving any listeners added via [Textmodifier.on](#on) untouched.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`GamepadConnectionEventHandler`](../namespaces/input/namespaces/gamepad/type-aliases/GamepadConnectionEventHandler.md) | The function to call when a controller connects. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

const bursts = [];
const ledger = [];

function drawText(text, x, y, r = 220, g = r, b = r, a = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b, a);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.gamepadConnected((data) => {
	const burstY = -6 + (bursts.length % 5) * 3;
	bursts.push({
		slot: data.gamepad.index,
		id: data.gamepad.id.slice(0, 32),
		x: -16 + (bursts.length % 4) * 12,
		y: burstY,
		radius: 0,
		life: 1,
	});

	ledger.unshift(`slot ${data.gamepad.index}  ${data.gamepad.id.slice(0, 36)}`);
	if (ledger.length > 6) ledger.length = 6;
});

t.draw(() => {
	t.background(0);

	drawText('gamepadConnected()', -28, -18, 255, 255, 255);
	drawText('plug in or wake a controller to trigger the callback', -28, -16, 140, 140, 140);
	drawText(`connected now: ${t.gamepads.length}`, -28, -14, 100, 200, 120);

	for (let i = bursts.length - 1; i >= 0; i--) {
		const burst = bursts[i];
		burst.radius += 0.4;
		burst.life -= 0.015;

		if (burst.life <= 0) {
			bursts.splice(i, 1);
			continue;
		}

		const a = Math.round(255 * burst.life);
		drawText(`slot ${burst.slot}`, burst.x - 2, burst.y - 2, 255, 200, 80, a);

		for (let ring = 0; ring < 8; ring++) {
			const angle = (Math.PI * 2 * ring) / 8;
			const x = Math.round(burst.x + Math.cos(angle) * burst.radius);
			const y = Math.round(burst.y + Math.sin(angle) * burst.radius * 0.6);
			drawText('*', x, y, 100, 220, 140, a);
		}
	}

	drawText('recent arrivals', -28, -8, 180, 180, 180);
	drawText('----------------------------------------------', -28, -7, 60, 60, 60);

	if (ledger.length === 0) {
		drawText('waiting for the first connection event...', -28, -5, 100, 100, 100);
	}

	for (let i = 0; i < ledger.length; i++) {
		drawText(ledger[i], -28, -5 + i * 2, 160, 220, 180);
	}
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

Set a callback function that will be called when a previously connected gamepad disappears.

This is a legacy-style single-callback shortcut for the `'gamepadDisconnected'` event.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`GamepadConnectionEventHandler`](../namespaces/input/namespaces/gamepad/type-aliases/GamepadConnectionEventHandler.md) | The function to call when a controller disconnects. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

const departures = [];

function drawText(text, x, y, r = 220, g = r, b = r, a = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b, a);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.gamepadDisconnected((data) => {
	departures.unshift({
		text: `slot ${data.gamepad.index}  ${data.gamepad.id.slice(0, 36)}`,
		age: 0,
	});

	if (departures.length > 8) departures.length = 8;
});

t.draw(() => {
	t.background(0);

	drawText('gamepadDisconnected()', -28, -18, 255, 255, 255);
	drawText('disconnect or power down a controller to record its exit', -28, -16, 140, 140, 140);
	drawText(`connected now: ${t.gamepads.length}`, -28, -14, 120, 180, 255);

	drawText('last disconnect events', -28, -10, 200, 200, 200);
	drawText('----------------------------------------------', -28, -9, 60, 60, 60);

	if (departures.length === 0) {
		drawText('no disconnect observed yet', -28, -6, 110, 110, 110);
		drawText('the callback fires when a previously tracked pad disappears', -28, -4, 90, 90, 90);
	}

	for (let i = departures.length - 1; i >= 0; i--) {
		const entry = departures[i];
		entry.age++;
	}

	for (let i = 0; i < departures.length; i++) {
		const entry = departures[i];
		const fade = Math.max(0.2, 1 - entry.age / 300);
		const a = Math.round(255 * fade);
		const marker = fade > 0.6 ? 'x' : '.';

		drawText(marker, -28, -6 + i * 2, 255, 110, 110, a);
		drawText(entry.text, -26, -6 + i * 2, 255, 160, 160, a);
	}
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

Draw a TextmodeFramebuffer, TextmodeImage, TextmodeVideo, or TextmodeTexture to the current render target.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | \| [`TextmodeFramebuffer`](TextmodeFramebuffer.md) \| [`TextmodeImage`](../namespaces/media/classes/TextmodeImage.md) \| [`TextmodeTexture`](../namespaces/media/classes/TextmodeTexture.md) \| [`TextmodeVideo`](../namespaces/media/classes/TextmodeVideo.md) | The TextmodeFramebuffer, TextmodeImage, TextmodeVideo, or TextmodeTexture to render |
| `width?` | `number` | Width in grid cells to potentially scale the content (defaults to ideal fit, respecting aspect ratio) |
| `height?` | `number` | Height in grid cells to potentially scale the content (defaults to ideal fit, respecting aspect ratio) |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: 800,
	height: 600,
});

const fb = t.createFramebuffer({ width: 30, height: 20 });

t.draw(() => {
	fb.begin();
	t.clear();
	t.charColor(255, 0, 0);
	t.char('A');
	t.rect(20, 10);
	fb.end();

	t.background(0);

	t.image(fb);
});
```

***

### inputGrid()

```ts
inputGrid(target?): void | TextmodeGrid | "topmost";
```

Get or set the grid used for mouse and touch input coordinate mapping.

By default, input coordinates are mapped to the topmost visible layer's grid,
which changes dynamically as layers are shown/hidden. Use this method to lock
input mapping to a specific grid or layer, or to return to responsive mode.

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 8 });

let uiLayer;

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);
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
	uiLayer = t.layers.add({ fontSize: 16 });
	uiLayer.draw(() => {
		t.clear();
		t.char('+');
		t.charColor(70, 100, 140);
		t.rect(t.grid.cols - 2, t.grid.rows - 2);
		label('top layer uses a larger grid', 0, [140, 170, 220]);
	});
});

t.draw(() => {
	const lockBaseGrid = Math.floor(t.frameCount / 180) % 2 === 1;
	t.inputGrid(lockBaseGrid ? t.layers.base.grid : 'topmost');
	t.background(10, 12, 24);

	if (t.mouse.x !== Number.NEGATIVE_INFINITY) {
		t.push();
		t.translate(t.mouse.x, t.mouse.y);
		t.char('*');
		t.charColor(255, 210, 90);
		t.point();
		t.pop();
	}

	label('inputGrid()', -4, [255, 210, 90]);
	label(lockBaseGrid ? 'locked to base grid' : 'responsive topmost grid', -1);
	label('watch mouse precision change every 3 seconds', 2, [150, 160, 190]);
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

Toggle color inversion for subsequent character rendering, or get current state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `toggle?` | `boolean` | Whether to invert colors (optional) |

#### Returns

`boolean` \| `void`

The current inversion state if called without arguments

#### Example

```javascript
// Swapping foreground and background
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
	t.background(0);

	const count = 15;
	for (let i = 0; i < count; i++) {
		t.push();
		t.translate((i - (count - 1) / 2) * 6, 0);

		const shouldInvert = (i + Math.floor(t.frameCount / 30)) % 2 === 0;
		t.invert(shouldInvert);

		t.charColor(255, 100, 100);
		t.cellColor(0, 50, 100);
		t.char('█');
		t.rect(5, 20);
		t.pop();
	}
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

Check if a specific key is currently being pressed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key to check (e.g., 'a', 'Enter', 'ArrowLeft') |

#### Returns

`boolean`

true if the key is currently pressed, false otherwise

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

let x = 0;
let y = 0;
const history = [];

function drawKey(label, key, dx, dy) {
	const active = t.isKeyPressed(key);
	t.push();
	t.translate(dx, dy);

	t.cellColor(active ? [60, 100, 255] : [40, 45, 60]);
	t.rect(3, 3);

	t.charColor(active ? [255, 255, 255] : [150, 160, 180]);
	t.translate(1, 1);
	t.char(label);
	t.point();

	t.pop();
}

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.draw(() => {
	t.background(6, 10, 22);

	const speed = 0.5;
	let moving = false;

	if (t.isKeyPressed('w')) {
		y -= speed;
		moving = true;
	}
	if (t.isKeyPressed('s')) {
		y += speed;
		moving = true;
	}
	if (t.isKeyPressed('a')) {
		x -= speed;
		moving = true;
	}
	if (t.isKeyPressed('d')) {
		x += speed;
		moving = true;
	}

	history.push({ x, y });
	if (history.length > 20) history.shift();

	history.forEach((pos, i) => {
		const alpha = (i / history.length) * 0.5;
		t.push();
		t.translate(pos.x, pos.y);
		t.charColor(100, 150, 255, alpha * 255);
		t.char('·');
		t.point();
		t.pop();
	});

	t.push();
	t.translate(x, y);
	t.char(moving ? '☼' : '○');
	t.charColor(100, 200, 255);
	t.point();
	t.pop();

	drawCenteredText('Textmodifier.isKeyPressed', -12, [255, 255, 255]);
	drawCenteredText('Returns true if the specified key is currently held down.', -10, [150, 170, 200]);
	drawCenteredText('Use for continuous movement or real-time state checks.', -9, [150, 170, 200]);

	t.push();
	t.translate(0, 8);
	drawKey('W', 'w', -1, -4);
	drawKey('A', 'a', -5, 0);
	drawKey('S', 's', -1, 0);
	drawKey('D', 'd', 3, 0);
	t.pop();

	drawCenteredText('Press WASD to move the player', 14, [100, 255, 150]);
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

Check whether the textmodifier is currently running the automatic render loop.

#### Returns

`boolean`

True if the render loop is currently active, false otherwise.

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

function drawLabel(text, y) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(180);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.mousePressed(() => {
	if (t.isLooping()) {
		t.noLoop();
		t.redraw();
	} else {
		t.loop();
	}
});

t.draw(() => {
	t.background(0);

	t.push();
	t.rotateZ(t.frameCount * 5);
	t.char(t.isLooping() ? '>' : '|');
	t.charColor(t.isLooping() ? 0 : 255, t.isLooping() ? 255 : 100, 100);
	t.rect(10, 10);
	t.pop();

	drawLabel(`isLooping(): ${t.isLooping()}`, -12);
	drawLabel('click to toggle loop state', -9);
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

Set a callback function that will be called when a key is pressed down.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`KeyboardEventHandler`](../namespaces/input/namespaces/keyboard/type-aliases/KeyboardEventHandler.md) | The function to call when a key is pressed |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const keyHistory = [];
let pulse = 0;

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.keyPressed((data) => {
	keyHistory.unshift({
		key: data.key,
		code: data.code,
		time: t.secs,
	});

	if (keyHistory.length > 5) keyHistory.pop();

	pulse = 1.0;
});

t.draw(() => {
	t.background(6, 10, 22);

	const lastKey = keyHistory[0] ? keyHistory[0].key : 'NONE';
	t.push();
	t.charColor(100, 200, 255, pulse * 255);
	t.char(lastKey.length === 1 ? lastKey : '?');
	t.rect(12 + pulse * 4, 12 + pulse * 4);
	t.pop();

	pulse *= 0.9; // Fade out the pulse

	drawCenteredText('--- KEY EVENT LOG ---', 8, [100, 255, 150]);
	keyHistory.forEach((entry, i) => {
		const alpha = 1.0 - i * 0.2;
		const logText = `Key: "${entry.key}" | Code: ${entry.code}`;
		drawCenteredText(logText, 10 + i * 2, [200, 210, 230, alpha * 255]);
	});

	drawCenteredText('Textmodifier.keyPressed', -20, [255, 255, 255]);
	drawCenteredText('Triggers once per key press event.', -18, [150, 170, 200]);
	drawCenteredText('Unlike isKeyPressed, this does not repeat when held.', -16, [150, 170, 200]);

	drawCenteredText('Press any key to trigger event', 20, [100, 100, 120]);
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

Set a callback function that will be called when a key is released.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`KeyboardEventHandler`](../namespaces/input/namespaces/keyboard/type-aliases/KeyboardEventHandler.md) | The function to call when a key is released |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

let releaseInfo = null;
let fade = 0;

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.keyReleased((data) => {
	releaseInfo = {
		key: data.key,
		code: data.code,
	};
	fade = 1.0;
});

t.draw(() => {
	t.background(6, 10, 22);

	if (releaseInfo) {
		t.push();
		t.charColor(255, 100, 100, fade * 255);
		t.char(releaseInfo.key.length === 1 ? releaseInfo.key : '?');
		t.rect(12, 12);
		t.pop();

		drawCenteredText(`Released: "${releaseInfo.key}"`, 8, [255, 150, 150, fade * 255]);
		fade *= 0.95;
	}

	drawCenteredText('Textmodifier.keyReleased', -20, [255, 255, 255]);
	drawCenteredText('An event callback that triggers when a key is released.', -18, [150, 170, 200]);
	drawCenteredText('Useful for stopping actions like movement or charging.', -16, [150, 170, 200]);

	drawCenteredText('Press and RELEASE any key', 18, [100, 100, 120]);
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

Set a callback function that will be called when a printable character is typed.

This only fires for keys that produce character input, such as letters, numbers,
punctuation, and space. It does not fire for modifier keys or control-key chords.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`KeyboardEventHandler`](../namespaces/input/namespaces/keyboard/type-aliases/KeyboardEventHandler.md) | The function to call when a printable character is typed |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

let inputText = '';
let lastChar = '';
let charPulse = 0;

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.keyTyped((data) => {
	lastChar = data.key;
	charPulse = 1.0;

	// Append to our string
	inputText += data.key;
	if (inputText.length > 20) inputText = inputText.slice(-20);
});

t.keyPressed((data) => {
	if (data.key === 'Backspace') {
		inputText = inputText.slice(0, -1);
	}
});

t.draw(() => {
	t.background(6, 10, 22);

	const cursor = t.frameCount % 60 < 30 ? '_' : ' ';
	const display = `> ${inputText}${cursor}`;

	t.push();
	t.charColor(100, 255, 150);
	t.translate(-Math.floor(display.length / 2), 2);
	t.push();
	t.cellColor(20, 40, 30);
	t.translate(Math.floor(display.length / 2), 0);
	t.rect(display.length + 4, 3);
	t.pop();

	for (let i = 0; i < display.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(display[i]);
		t.point();
		t.pop();
	}
	t.pop();

	if (charPulse > 0) {
		t.push();
		t.translate(0, -8);
		t.char(lastChar);
		t.charColor(100, 200, 255, charPulse * 255);
		t.rect(10 + charPulse * 10, 10 + charPulse * 10);
		t.pop();
		charPulse *= 0.92;
	}

	drawCenteredText('Textmodifier.keyTyped', -20, [255, 255, 255]);
	drawCenteredText('Triggers when a printable character is typed.', -18, [150, 170, 200]);
	drawCenteredText('Best for text input, as it handles case and symbols.', -17, [150, 170, 200]);

	drawCenteredText('Type on your keyboard to enter text', 14, [100, 100, 120]);
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
	fontSize: 8,
	frameRate: 60,
});

function drawBeacon(x, y, z, size, glyph, colors, spin) {
	t.push();
	t.translate(x, y, z);
	t.rotateX(20 + spin * 0.4);
	t.rotateY(spin);
	t.char(glyph);
	t.charColor(colors[0], colors[1], colors[2]);
	t.cellColor(colors[0] * 0.15, colors[1] * 0.12, colors[2] * 0.16);
	t.box(size, size * 1.8, size);
	t.pop();
}

t.draw(() => {
	const time = t.frameCount * 0.02;
	const focus = 0.5 + 0.5 * Math.sin(time * 0.9);
	const linear = 0.01 + (1 - focus) * 0.09;
	const quadratic = 0.0006 + (1 - focus) * 0.0065;
	const lightPosition = {
		x: Math.sin(time * 1.3) * 18,
		y: -8 + Math.cos(time * 1.7) * 5,
		z: 28 * Math.cos(time * 0.55),
	};

	t.background(3, 4, 10);
	t.ambientLight(12, 14, 18);
	t.lightFalloff(1, linear, quadratic);
	t.pointLight('#7ae7ff', lightPosition);
	t.pointLight([255, 170, 80], {
		x: -lightPosition.x * 0.55,
		y: lightPosition.y * 0.6,
		z: -lightPosition.z * 0.35,
	});

	t.camera(0, -10, 132, 0, -4, -34);

	t.push();
	t.rotateX(12);

	for (let i = 0; i < 11; i++) {
		const z = 24 - i * 14;
		const breath = Math.sin(time * 1.4 + i * 0.45);
		const pillarHeight = 9 + i * 0.45 + (breath * 0.5 + 0.5) * 3;
		const roofY = -pillarHeight * 0.5 - 3;
		const floorY = 12;

		t.push();
		t.translate(0, floorY, z);
		t.char('=');
		t.charColor(50, 80, 120);
		t.cellColor(8, 12, 18);
		t.box(28, 1, 8);
		t.pop();

		drawBeacon(-11, 12 - pillarHeight * 0.5, z, 2.6, 'H', [70, 190, 255], time * 40 + i * 18);
		drawBeacon(11, 12 - pillarHeight * 0.5, z, 2.6, 'H', [255, 150, 90], -time * 36 - i * 20);

		t.push();
		t.translate(0, roofY, z);
		t.rotateZ(Math.sin(time * 1.1 + i * 0.3) * 4);
		t.char('-');
		t.charColor(180, 210, 255);
		t.cellColor(20, 28, 38);
		t.box(22, 2, 2);
		t.pop();

		t.push();
		t.translate(Math.sin(time * 1.2 + i) * 4, roofY - 2.6, z);
		t.rotateY(time * 60 + i * 24);
		t.char('o');
		t.charColor(230, 240, 255);
		t.cellColor(16, 20, 30);
		t.sphere(1.4 + (focus * 0.5 + 0.5) * 0.4);
		t.pop();
	}

	t.pop();
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

Draw a line from point (x1, y1) to point (x2, y2) with the settings.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x1` | `number` | X-coordinate of the line start point in grid cells |
| `y1` | `number` | Y-coordinate of the line start point in grid cells |
| `x2` | `number` | X-coordinate of the line end point in grid cells |
| `y2` | `number` | Y-coordinate of the line end point in grid cells |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
	t.background(10, 10, 20);

	const time = t.frameCount * 0.01;
	const lineCount = 24;
	const radius = Math.min(t.grid.cols, t.grid.rows) * 0.4;

	t.lineWeight(2);

	// Spinning web of lines
	for (let i = 0; i < lineCount; i++) {
		const phase1 = (i / lineCount) * Math.PI * 2;
		const phase2 = phase1 + Math.PI + Math.sin(time) * Math.PI;

		const x1 = Math.cos(phase1 + time) * radius;
		const y1 = Math.sin(phase1 * 2 + time * 1.5) * radius * 0.5;

		const x2 = Math.cos(phase2 - time * 0.7) * radius * 0.8;
		const y2 = Math.sin(phase2 * 1.5 - time) * radius;

		const r = 127 + 127 * Math.sin(phase1 + time);
		const g = 127 + 127 * Math.cos(phase1 * 0.5 + time);
		t.charColor(r, g, 255);

		t.char(['+', '-', '|', '/'][i % 4]);

		t.line(x1, y1, x2, y2);
	}
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

Set or get the line weight (thickness).

If called with a value, sets the line weight for subsequent drawing operations.
If called without arguments, returns the current line weight.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `weight?` | `number` | The line weight (thickness) to set. |

#### Returns

`number` \| `void`

The current line weight if called without arguments.

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
	t.background('#050810');

	const layers = 6;
	const spacing = 4;

	for (let i = 0; i < layers; i++) {
		const phase = t.frameCount * 0.03 + i * 0.8;
		const pulse = 1 + 4 * (0.5 + 0.5 * Math.sin(phase));
		const wobble = Math.sin(phase * 1.6) * 5;

		t.lineWeight(Math.round(pulse));
		t.charColor(160 + i * 12, 200, 255);
		t.char(['-', '+', '×'][i % 3]);

		const y = (i - (layers - 1) / 2) * spacing;
		t.line(-20, y + wobble, 20, y - wobble);
	}
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

Load a font, optionally setting it as the base layer's active font.

Accepts either a URL string to load a new font, or an existing [TextmodeFont](../namespaces/fonts/classes/TextmodeFont.md)
instance to use as a reusable source.

If `setActive` is true (default), the font is set as the base layer's font.
If `setActive` is false, the font is loaded/initialized and returned without modifying the layer.

The returned font can be reused on other layers via [TextmodeLayer.loadFont](../namespaces/layering/classes/TextmodeLayer.md#loadfont),
which creates a layer-local fork rather than sharing a mutable instance by reference.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `fontSource` | `string` \| [`TextmodeFont`](../namespaces/fonts/classes/TextmodeFont.md) | `undefined` | The URL of the font to load, or an existing TextmodeFont instance. |
| `setActive` | `boolean` | `true` | Whether to set the font as the base layer's active font. Defaults to `true`. |

#### Returns

`Promise`\<[`TextmodeFont`](../namespaces/fonts/classes/TextmodeFont.md)\>

The loaded TextmodeFont instance.

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });
const accentLayer = t.layers.add({ fontSize: 16, blendMode: 'additive' });

function drawLabel(label, y, color) {
	const startX = -label.length / 2;
	t.charColor(...color);

	for (let i = 0; i < label.length; i++) {
		t.push();
		t.translate(startX + i + 0.5, y);
		t.char(label[i]);
		t.point();
		t.pop();
	}
}

t.setup(async () => {
	await t.loadFont('../../layering/FROGBLOCK-V2.1.ttf');

	const accentFont = await t.loadFont('../../primitives/CHUNKY.ttf', false);
	await accentLayer.loadFont(accentFont);
});

t.draw(() => {
	t.background(5, 8, 18);
	drawLabel('ACTIVE FONT', -4, [255, 235, 120]);
	drawLabel('BASE LAYER', 1, [220, 240, 255]);
});

accentLayer.draw(() => {
	t.clear();
	drawLabel('PRELOADED FONT', 6, [120, 220, 255]);
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

Load an image and return a TextmodeImage that can be drawn with image().

The loaded image can be rendered to the canvas using the [image](#image) method.
This function returns a Promise that resolves when the image has loaded.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `src` | `string` | URL of the image file |

#### Returns

`Promise`\<[`TextmodeImage`](../namespaces/media/classes/TextmodeImage.md)\>

A Promise that resolves to a TextmodeImage object

#### Example

```javascript
// Loading and rendering external assets
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let img;

t.setup(async () => {
	const url = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80';
	img = await t.loadImage(url);

	img.characters(' .:-=+*#%@');
});

t.draw(() => {
	t.background(0);
	if (img) {
		const scale = 1 + Math.sin(t.frameCount * 0.05) * 0.1;
		t.rotateZ(Math.sin(t.frameCount * 0.02) * 5);
		t.image(img, t.grid.cols * scale, t.grid.rows * scale);
	}
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

Load a tileset, optionally setting it as the base layer's active glyph source.

Accepts either tileset load options or an existing [TextmodeTileset](../namespaces/fonts/classes/TextmodeTileset.md)
instance to use as a reusable source.

If `setActive` is true (default), the tileset is set as the base layer's glyph source.
If `setActive` is false, the tileset is loaded/initialized and returned without modifying the layer.

The returned tileset can be reused on other layers via [TextmodeLayer.loadTileset](../namespaces/layering/classes/TextmodeLayer.md#loadtileset),
which creates a layer-local fork rather than sharing a mutable instance by reference.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `tilesetSource` | \| [`TextmodeTilesetOptions`](../namespaces/fonts/interfaces/TextmodeTilesetOptions.md) \| [`TextmodeTileset`](../namespaces/fonts/classes/TextmodeTileset.md) | `undefined` | Tileset load options or an existing TextmodeTileset instance. |
| `setActive` | `boolean` | `true` | Whether to set the tileset as the base layer's active glyph source. Defaults to `true`. |

#### Returns

`Promise`\<[`TextmodeTileset`](../namespaces/fonts/classes/TextmodeTileset.md)\>

The loaded TextmodeTileset instance.

#### Example

```javascript
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });
const tilesLayer = t.layers.add({ fontSize: 8 });
const previewLayer = t.layers.add({ fontSize: 32, blendMode: 'additive' });

let tileset = null;

function getActiveTile() {
	const index = Math.floor((t.frameCount * 0.35) % TILE_COUNT);
	return {
		index,
		col: index % TILE_COLUMNS,
		row: Math.floor(index / TILE_COLUMNS),
	};
}

function drawLabel(label, x, y, color) {
	t.charColor(...color);

	for (let i = 0; i < label.length; i++) {
		t.push();
		t.translate(x - label.length / 2 + i + 0.5, y);
		t.char(label[i]);
		t.point();
		t.pop();
	}
}

t.setup(async () => {
	tileset = await t.loadTileset(
		{
			source: 'https://littlebitspace.com/resources/fonts/T64.png',
			columns: TILE_COLUMNS,
			rows: TILE_ROWS,
			count: TILE_COUNT,
		},
		false
	);

	await tilesLayer.loadTileset(tileset);
	await previewLayer.loadTileset(tileset);

	tilesLayer.useTileColors(false);
	previewLayer.useTileColors(false);
});

t.draw(() => {
	t.background(5, 8, 18);

	drawLabel('LOAD TILESET', 0, -Math.floor(t.grid.rows * 0.42), [255, 236, 160]);
	drawLabel('T64   16 X 16   8 X 8 CELLS', 0, -Math.floor(t.grid.rows * 0.35), [120, 210, 255]);

	if (!tileset) {
		drawLabel('LOADING TILESET...', 0, 0, [180, 190, 220]);
		return;
	}

	const activeTile = getActiveTile();
	drawLabel(`INDEX ${String(activeTile.index).padStart(3, '0')}`, 0, Math.floor(t.grid.rows * 0.36), [255, 220, 120]);
	drawLabel(`COL ${activeTile.col}   ROW ${activeTile.row}`, 0, Math.floor(t.grid.rows * 0.42), [160, 190, 255]);
});

tilesLayer.draw(() => {
	if (!tileset) {
		return;
	}

	t.clear();

	const activeTile = getActiveTile();
	const startX = -18;
	const startY = -7.5;

	for (let index = 0; index < TILE_COUNT; index++) {
		const col = index % TILE_COLUMNS;
		const row = Math.floor(index / TILE_COLUMNS);
		const distance = Math.abs(index - activeTile.index);
		const glow = Math.max(0, 1 - distance / 32);

		t.push();
		t.translate(startX + col, startY + row);
		t.char(index);
		t.charColor(70 + glow * 185, 110 + glow * 120, 160 + glow * 90);
		t.point();
		t.pop();
	}
});

previewLayer.draw(() => {
	if (!tileset) {
		return;
	}

	t.clear();

	const activeTile = getActiveTile();
	const previewX = 13;
	const previewY = 0;

	t.push();
	t.translate(previewX, previewY);
	t.rotateZ(t.frameCount * 1.5);
	t.char(activeTile.index);
	t.charColor(255, 245, 180);
	t.point();
	t.pop();

	for (let orbit = 0; orbit < 6; orbit++) {
		const angle = t.frameCount * 2 + orbit * 60;
		const radius = 4.5;
		const orbitIndex = (activeTile.index + orbit + 1) % TILE_COUNT;
		const x = previewX + Math.cos((angle * Math.PI) / 180) * radius;
		const y = previewY + Math.sin((angle * Math.PI) / 180) * radius;

		t.push();
		t.translate(x, y);
		t.char(orbitIndex);
		t.charColor(90, 210, 255);
		t.point();
		t.pop();
	}
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

Load a video and return a TextmodeVideo that can be drawn with image().

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `src` | `string` | URL of the video file |

#### Returns

`Promise`\<[`TextmodeVideo`](../namespaces/media/classes/TextmodeVideo.md)\>

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let video;

t.setup(async () => {
	const url = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
	video = await t.loadVideo(url);

	video.play();
	video.loop();

	video.characters(' .:-=+*#%@');
});

t.draw(() => {
	t.background(0);
	if (video) {
		t.rotateY(t.frameCount);
		t.image(video, 40, 30);
	}
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
| `callback` | [`TouchLongPressHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchLongPressHandler.md) | The function to call when a long press gesture is detected. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

const bursts = [];

t.longPress((data) => {
	bursts.push({ x: data.touch.x, y: data.touch.y, life: 0 });
});

t.draw(() => {
	t.background(0);

	for (let i = bursts.length - 1; i >= 0; i--) {
		const burst = bursts[i];
		burst.life += 1;

		t.push();
		t.translate(burst.x, burst.y);
		t.rotateZ(burst.life * 5);

		const size = burst.life * 1.5;
		const alpha = Math.max(0, 255 - burst.life * 4);

		t.char('☼');
		t.charColor(255, 200, 100, alpha);
		t.rect(size, size);
		t.pop();

		if (burst.life > 60) bursts.splice(i, 1);
	}

	if (bursts.length === 0) {
		t.charColor(100);
		t.char('?');
		t.rect(1, 1);
	}
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

Updates the current look-at target (and optional up vector) for the active camera.

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

const scene = [
	{ x: -16, y: 0, z: 0, char: 'L', color: [255, 120, 120] },
	{ x: 0, y: 6, z: -14, char: 'M', color: [120, 255, 160] },
	{ x: 16, y: 0, z: 0, char: 'R', color: [120, 180, 255] },
];

function drawScene(targetX, targetY, targetZ) {
	for (let i = 0; i < scene.length; i++) {
		const item = scene[i];

		t.push();
		t.translate(item.x, item.y, item.z);
		t.rotateY(t.frameCount * (1 + i * 0.2));
		t.rotateZ(t.frameCount * (0.7 + i * 0.15));
		t.char(item.char);
		t.charColor(item.color[0], item.color[1], item.color[2]);
		t.rect(8, 8);
		t.pop();
	}

	t.push();
	t.translate(targetX, targetY, targetZ);
	t.char('*');
	t.charColor(255, 255, 120);
	t.point();
	t.pop();
}

function drawLabel(text, y) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y, 0);
	t.charColor(220);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.setup(() => {
	t.perspective(58, 0.1, 4096);
	t.camera(0, 14, 42, 0, 0, 0);
});

t.draw(() => {
	t.background(8, 10, 24);

	const time = t.frameCount * 0.03;
	const targetX = Math.cos(time) * 12;
	const targetY = Math.sin(time * 0.7) * 8;
	const targetZ = Math.sin(time) * 12;

	t.lookAt(targetX, targetY, targetZ);
	drawScene(targetX, targetY, targetZ);

	drawLabel('lookAt() follows the moving target marker', Math.floor(t.grid.rows / 2) - 3);
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

let paused = false;
let resumed = 0;

function drawLabel(text, y, color = 180) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.mouseClicked(() => {
	if (paused) {
		paused = false;
		resumed++;
		t.loop();
	}
});

t.draw(() => {
	t.background(0);

	if (!paused && resumed === 0 && t.frameCount >= 90) {
		paused = true;
		t.noLoop();
		t.redraw();
	}

	t.push();
	t.rotateZ(t.frameCount * 4);
	t.char(resumed > 0 ? '*' : 'A');
	t.charColor(paused ? 255 : 100, paused ? 170 : 255, 160);
	t.rect(14, 14);
	t.pop();

	drawLabel(paused ? 'click to call loop()' : 'auto-pause at frame 90', -12);
	drawLabel(`loop() calls: ${resumed}`, -9, paused ? 255 : 140);
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

Set a callback function that will be called when the mouse is clicked.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`MouseEventHandler`](../namespaces/input/namespaces/mouse/type-aliases/MouseEventHandler.md) | The function to call when the mouse is clicked |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const echoes = [];

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.mouseClicked((data) => {
	if (data.position.x === Number.NEGATIVE_INFINITY) return;

	echoes.push({
		x: data.position.x,
		y: data.position.y,
		time: t.secs,
		life: 1.0,
	});

	if (echoes.length > 10) echoes.shift();
});

t.draw(() => {
	t.background(6, 10, 22);

	for (let i = 0; i < echoes.length; i++) {
		const e = echoes[i];
		e.life *= 0.95;

		if (e.life < 0.01) {
			echoes.splice(i, 1);
			i--;
			continue;
		}

		t.push();
		t.translate(e.x, e.y);

		const radius = (1.0 - e.life) * 20;
		t.charColor(100, 200, 255, e.life * 255);
		t.char('○');
		t.ellipse(radius, radius);

		t.charColor(50, 100, 255, e.life * 100);
		t.char('·');
		t.ellipse(radius * 0.6, radius * 0.6);

		t.pop();
	}

	if (t.mouse.x !== Number.NEGATIVE_INFINITY) {
		t.push();
		t.translate(t.mouse.x, t.mouse.y);
		t.char('+');
		t.charColor(255);
		t.point();
		t.pop();
	}

	drawCenteredText('Textmodifier.mouseClicked', -20, [255, 255, 255]);
	drawCenteredText('An event callback that triggers on a full mouse click.', -18, [150, 170, 200]);
	drawCenteredText('Click anywhere to create a ripple effect.', -16, [150, 170, 200]);
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

Set a callback function that will be called when the mouse moves while a button is held down.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`MouseEventHandler`](../namespaces/input/namespaces/mouse/type-aliases/MouseEventHandler.md) | The function to call when the mouse is dragged |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const trail = [];

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.mouseDragged((data) => {
	if (data.position.x === Number.NEGATIVE_INFINITY) return;

	trail.push({
		x: data.position.x,
		y: data.position.y,
		life: 1.0,
		char: ['#', '*', '•', '·'][Math.floor(Math.random() * 4)],
	});

	if (trail.length > 200) trail.shift();
});

t.draw(() => {
	t.background(6, 10, 22);

	for (let i = 0; i < trail.length; i++) {
		const p = trail[i];
		p.life *= 0.96;

		if (p.life < 0.05) {
			trail.splice(i, 1);
			i--;
			continue;
		}

		t.push();
		t.translate(p.x, p.y);
		t.char(p.char);
		t.charColor(100, 200, 255, p.life * 255);
		t.point();
		t.pop();
	}

	drawCenteredText('Textmodifier.mouseDragged', -20, [255, 255, 255]);
	drawCenteredText('Fires while moving with a button held.', -18, [150, 170, 200]);
	drawCenteredText('Great for drawing or dragging objects.', -16, [150, 170, 200]);

	drawCenteredText('Click and DRAG to paint', 18, [100, 255, 150]);
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

Set a callback function that will be called when the mouse moves.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`MouseEventHandler`](../namespaces/input/namespaces/mouse/type-aliases/MouseEventHandler.md) | The function to call when the mouse moves |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.draw(() => {
	t.background(6, 10, 22);

	const mx = t.mouse.x;
	const my = t.mouse.y;
	const isInside = mx !== Number.NEGATIVE_INFINITY;

	// Full-screen Magnetic Field Effect
	const stepX = 6;
	const stepY = 3;
	const halfCols = Math.floor(t.grid.cols / 2);
	const halfRows = Math.floor(t.grid.rows / 2);

	t.charColor(60, 70, 100);
	for (let y = -halfRows; y <= halfRows; y += stepY) {
		for (let x = -halfCols; x <= halfCols; x += stepX) {
			t.push();
			t.translate(x, y);

			if (isInside) {
				const dist = Math.sqrt((mx - x) ** 2 + (my - y) ** 2);
				const influence = Math.max(0, 1.0 - dist / 30);

				const angle = Math.atan2(my - y, mx - x) * (180 / Math.PI);
				t.rotateZ(angle);

				t.charColor(60 + influence * 100, 70 + influence * 150, 100 + influence * 155);
				t.char(influence > 0.5 ? '»' : '›');
			} else {
				t.char('·');
			}

			t.point();
			t.pop();
		}
	}

	if (isInside) {
		t.push();
		t.translate(mx, my);
		t.char('☼');
		t.charColor(255, 255, 255);
		t.point();
		t.pop();
	}

	drawCenteredText('Textmodifier.mouseMoved', -22, [255, 255, 255]);
	drawCenteredText('Fires whenever the mouse moves.', -20, [150, 170, 200]);
	drawCenteredText('Use for hover or proximity effects.', -18, [150, 170, 200]);

	if (!isInside) {
		drawCenteredText('Move mouse to attract the field', 18, [100, 150, 255]);
	}
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

Set a callback function that will be called when the mouse is pressed down.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`MouseEventHandler`](../namespaces/input/namespaces/mouse/type-aliases/MouseEventHandler.md) | The function to call when the mouse is pressed |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

let hit = { x: 0, y: 0, time: -1 };

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.mousePressed((data) => {
	if (data.position.x === Number.NEGATIVE_INFINITY) return;
	hit.x = data.position.x;
	hit.y = data.position.y;
	hit.time = t.secs;
});

t.draw(() => {
	t.background(6, 10, 22);

	const elapsed = t.secs - hit.time;
	const life = Math.max(0, 1.0 - elapsed * 2);

	if (life > 0) {
		const particleCount = 12;
		for (let i = 0; i < particleCount; i++) {
			const angle = (i / particleCount) * Math.PI * 2;
			const r = (1.0 - life) * 30;
			t.push();
			t.translate(hit.x + Math.cos(angle) * r, hit.y + Math.sin(angle) * r);
			t.charColor(255, 200, 100, life * 255);
			t.char('*');
			t.point();
			t.pop();
		}
		t.push();
		t.translate(hit.x, hit.y);
		t.charColor(255, 255, 255, life * 255);
		t.char('O');
		t.ellipse(life * 10, life * 10);
		t.pop();
	}

	if (t.mouse.x !== Number.NEGATIVE_INFINITY) {
		t.push();
		t.translate(t.mouse.x, t.mouse.y);
		t.char(t.mouseIsPressed ? '•' : '○');
		t.charColor(255);
		t.point();
		t.pop();
	}

	drawCenteredText('Textmodifier.mousePressed', -22, [255, 255, 255]);
	drawCenteredText('Triggers once when a button is hit.', -20, [150, 170, 200]);
	drawCenteredText('Best for one-time actions or UI hits.', -18, [150, 170, 200]);

	drawCenteredText('CLICK to trigger explosion', 18, [255, 200, 100]);
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

Set a callback function that will be called when the mouse is released.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`MouseEventHandler`](../namespaces/input/namespaces/mouse/type-aliases/MouseEventHandler.md) | The function to call when the mouse is released |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

let dragStart = null;
let lastRelease = null;

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.mousePressed((data) => {
	if (data.position.x === Number.NEGATIVE_INFINITY) return;
	dragStart = { x: data.position.x, y: data.position.y };
});

t.mouseReleased((data) => {
	if (!dragStart) return;
	lastRelease = {
		x: data.position.x,
		y: data.position.y,
		sx: dragStart.x,
		sy: dragStart.y,
		time: t.secs,
	};
	dragStart = null;
});

t.draw(() => {
	t.background(6, 10, 22);

	if (dragStart && t.mouse.x !== Number.NEGATIVE_INFINITY) {
		t.push();
		t.charColor(100, 200, 255);
		t.char('.');
		t.line(dragStart.x, dragStart.y, t.mouse.x, t.mouse.y);
		t.translate(dragStart.x, dragStart.y);
		t.char('O');
		t.point();
		t.pop();
	}

	if (lastRelease) {
		const life = Math.max(0, 1.0 - (t.secs - lastRelease.time) * 1.5);
		if (life > 0) {
			t.push();
			t.charColor(255, 140, 180, life * 255);
			t.char('-');
			t.line(lastRelease.sx, lastRelease.sy, lastRelease.x, lastRelease.y);
			t.translate(lastRelease.x, lastRelease.y);
			t.char('X');
			t.point();
			t.pop();
		}
	}

	drawCenteredText('Textmodifier.mouseReleased', -22, [255, 255, 255]);
	drawCenteredText('Triggers once when a button is let go.', -20, [150, 170, 200]);
	drawCenteredText('Used to finalize drags or projectiles.', -18, [150, 170, 200]);

	drawCenteredText('Click, Drag, and RELEASE to "slingshot"', 18, [255, 140, 180]);
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

Set a callback function that will be called when the mouse wheel is scrolled.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`MouseEventHandler`](../namespaces/input/namespaces/mouse/type-aliases/MouseEventHandler.md) | The function to call when the mouse wheel is scrolled |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

let scale = 10.0;
let scrollFlash = 0;

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.mouseScrolled((data) => {
	scale -= data.delta.y * 0.1;
	scale = Math.max(2, Math.min(40, scale));
	scrollFlash = 1.0;
});

t.draw(() => {
	t.background(6, 10, 22);

	t.push();
	const flashColor = [100 + scrollFlash * 155, 200 + scrollFlash * 55, 255];
	t.charColor(flashColor);
	t.char('█');
	t.ellipse(scale, scale);
	t.char('○');
	t.ellipse(scale * 0.5, scale * 0.5);
	t.pop();

	scrollFlash *= 0.9;

	drawCenteredText('Textmodifier.mouseScrolled', -22, [255, 255, 255]);
	drawCenteredText('Triggers on scroll wheel or touchpad.', -20, [150, 170, 200]);
	drawCenteredText('Delta shows direction and speed.', -18, [150, 170, 200]);

	drawCenteredText(`Current Scale: ${scale.toFixed(1)}`, 14, [100, 200, 255]);
	drawCenteredText('Use Mouse Wheel to Zoom', 18, [100, 255, 150]);
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
	fontSize: 8,
	frameRate: 60,
});

function drawReactorCluster(centerX, time, mode) {
	const armColors =
		mode === 'lit'
			? [
					[255, 170, 110],
					[110, 190, 255],
					[180, 120, 255],
				]
			: [
					[255, 120, 120],
					[120, 220, 160],
					[120, 190, 255],
				];

	t.push();
	t.translate(centerX, 0, 0);
	t.rotateX(18);
	t.rotateY(time * 24);

	t.push();
	t.rotateY(time * 55);
	t.char(mode === 'lit' ? '@' : '#');
	t.charColor(255, 235, 180);
	t.cellColor(28, 20, 24);
	t.sphere(4.8);
	t.pop();

	for (let i = 0; i < 3; i++) {
		const orbit = i * 120 + time * 40;

		t.push();
		t.rotateY(orbit);
		t.translate(15, Math.sin(time * 2 + i) * 3, 0);
		t.rotateX(time * 70 + i * 40);
		t.rotateZ(time * 45 + i * 25);
		t.char(mode === 'lit' ? 'X' : '+');
		t.charColor(armColors[i][0], armColors[i][1], armColors[i][2]);
		t.cellColor(armColors[i][0] * 0.12, armColors[i][1] * 0.12, armColors[i][2] * 0.14);
		t.box(4, 12, 4);
		t.pop();
	}

	t.push();
	t.translate(0, -9 + Math.sin(time * 1.6) * 2, 0);
	t.rotateX(90);
	t.rotateY(-time * 50);
	t.char(mode === 'lit' ? '*' : '=');
	t.charColor(220, 240, 255);
	t.cellColor(16, 18, 28);
	t.torus(12, 2.2);
	t.pop();

	t.pop();
}

t.draw(() => {
	const time = t.frameCount * 0.02;
	const leftX = -24;

	t.background(4, 5, 12);
	t.camera(0, -6, 118, 0, -2, 0);

	t.ambientLight(28, 30, 40);
	t.lightFalloff(1, 0.025, 0.001);
	t.pointLight([255, 170, 100], {
		x: leftX + Math.cos(time * 1.1) * 18,
		y: -10 + Math.sin(time * 1.7) * 6,
		z: Math.sin(time * 1.1) * 18,
	});
	t.pointLight([90, 180, 255], {
		x: leftX + Math.cos(time * 1.4 + Math.PI) * 16,
		y: 8 + Math.cos(time * 1.3) * 4,
		z: Math.sin(time * 1.4 + Math.PI) * 16,
	});
	drawReactorCluster(leftX, time, 'lit');

	t.noLights();
	drawReactorCluster(24, time, 'flat');
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

This method pauses the render loop without, allowing
it to be resumed later with [loop](#loop). This is useful for temporarily pausing
animation while maintaining the ability to continue it.

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

function toggleLoop() {
	if (t.isLooping) {
		t.noLoop();
	} else {
		t.loop();
	}
}

t.mousePressed(toggleLoop);
t.keyPressed((e) => {
	if (e.key === ' ') toggleLoop();
});

t.draw(() => {
	t.background(6, 10, 22);

	const looping = t.isLooping;
	const time = t.secs;

	t.push();
	t.rotateZ(time * 60);
	t.charColor(looping ? [100, 255, 150] : [255, 100, 100]);
	t.char(looping ? '☼' : '×');
	t.rect(15, 15);
	t.pop();

	t.push();
	t.translate(0, 10);
	const statusText = looping ? 'STATUS: RUNNING' : 'STATUS: STOPPED';
	drawCenteredText(statusText, 0, looping ? [100, 255, 150] : [255, 100, 100]);
	drawCenteredText(`Frame Count: ${t.frameCount}`, 2, [140, 180, 255]);
	t.pop();

	drawCenteredText('Textmodifier.noLoop', -20, [255, 255, 255]);
	drawCenteredText('Stops the continuous execution of the draw loop.', -18, [150, 170, 200]);
	drawCenteredText('Use loop() to restart or redraw() for a single frame.', -16, [150, 170, 200]);

	drawCenteredText('Click or Press SPACE to toggle loop', 18, [100, 100, 120]);
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

Remove a previously registered event listener.

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

Register an event listener. Multiple listeners can coexist on the same event —
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

Register a one-shot event listener that automatically removes itself after the first invocation.

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

Enables orthographic projection for subsequent shape rendering operations.

By default, textmode uses a perspective projection. Calling this method switches to an
orthographic projection, where objects maintain their size regardless of depth (Z position).

The projection mode is reset to perspective at the beginning of each frame.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `near?` | `number` | Optional near clipping plane distance. |
| `far?` | `number` | Optional far clipping plane distance. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

function drawLabel(text, y) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y, 0);
	t.charColor(220);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	t.background(0);
	t.ortho();

	const count = 12;

	for (let i = 0; i < count; i++) {
		const angle = (i / count) * Math.PI * 2 + t.frameCount * 0.02;
		const x = Math.cos(angle) * 20;
		const y = Math.sin(angle) * 20;
		const z = Math.sin(t.frameCount * 0.05 + i) * 50;

		t.push();
		t.translate(x, y, z);
		t.charColor(200, 255, 100);
		t.char('#');
		t.rect(5, 5);
		t.pop();
	}

	drawLabel('ortho(): z depth no longer changes size', Math.floor(t.grid.rows / 2) - 3);
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

Enables perspective projection and optionally sets projection parameters.

The default perspective is tuned to match textmode.js legacy depth behavior.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fov?` | `number` | Vertical field-of-view in degrees (optional). |
| `near?` | `number` | Near clipping plane distance (optional, must be > 0). |
| `far?` | `number` | Far clipping plane distance (optional, must be > near). |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

const scene = [
	{ x: -16, y: 0, z: -18, char: 'A', color: [255, 120, 120] },
	{ x: 0, y: 0, z: 0, char: 'B', color: [120, 255, 160] },
	{ x: 16, y: 0, z: 18, char: 'C', color: [120, 180, 255] },
];

function drawLabel(text, y) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y, 0);
	t.charColor(220);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

function drawScene() {
	for (let i = 0; i < scene.length; i++) {
		const item = scene[i];

		t.push();
		t.translate(item.x, item.y, item.z);
		t.rotateY(t.frameCount * (1.2 + i * 0.2));
		t.rotateX(t.frameCount * (0.8 + i * 0.15));
		t.char(item.char);
		t.charColor(item.color[0], item.color[1], item.color[2]);
		t.rect(8, 8);
		t.pop();
	}
}

t.draw(() => {
	t.background(8, 10, 24);

	const progress = (t.mouse.x + t.grid.cols / 2) / t.grid.cols;
	const fov = 30 + Math.max(0, Math.min(1, progress)) * 70;

	t.perspective(fov, 0.1, 4096);
	t.camera(0, 0, 58, 0, 0, 0);
	drawScene();

	drawLabel(`perspective(${fov.toFixed(1)}, 0.1, 4096)`, Math.floor(t.grid.rows / 2) - 3);
	drawLabel('move mouse horizontally to change fov', Math.floor(t.grid.rows / 2) - 1);
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
| `callback` | [`TouchPinchHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchPinchHandler.md) | The function to call when a pinch gesture is detected. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

let currentScale = 1;

t.pinch((data) => {
	currentScale = Math.max(0.5, Math.min(5, data.scale));
});

t.draw(() => {
	t.background(0);
	const size = 20 * currentScale;
	t.char('▒');
	t.charColor(255, 100 + currentScale * 20, 150);
	t.rect(size, size);
});
```

***

### point()

```ts
point(): void;
```

Draw a 1x1 rectangle with the current settings.

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.05;

	t.char('.');
	t.charColor(40, 45, 60);
	for (let y = -15; y <= 15; y += 5) {
		for (let x = -30; x <= 30; x += 10) {
			t.push();
			t.translate(x, y);
			t.point();
			t.pop();
		}
	}

	const count = 40;
	for (let i = 0; i < count; i++) {
		const angle = time + i * 0.2;
		const r = i * 0.6;
		const x = Math.cos(angle) * r;
		const y = Math.sin(angle) * r;

		t.push();
		t.translate(x, y);
		t.char(['•', '·', '°', '*'][i % 4]);
		t.charColor(100, 150 + i * 2, 255, (1 - i / count) * 255);
		t.point();
		t.pop();
	}

	let px = 0,
		py = 0;
	if (t.mouse.x !== Number.NEGATIVE_INFINITY) {
		px = t.mouse.x;
		py = t.mouse.y;
	} else {
		px = Math.sin(time * 0.7) * 20;
		py = Math.cos(time * 0.5) * 10;
	}

	t.push();
	t.translate(px, py);
	t.char('☼');
	t.charColor(255, 200, 100);
	t.point();

	t.translate(2, 0);
	t.charColor(255);
	const label = `point(${Math.floor(px)}, ${Math.floor(py)})`;
	for (let i = 0; i < label.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(label[i]);
		t.point();
		t.pop();
	}
	t.pop();

	drawCenteredText('Textmodifier.point', -20, [255, 255, 255]);
	drawCenteredText('Draws the current character and color at the origin.', -18, [150, 170, 200]);

	if (t.mouse.x === Number.NEGATIVE_INFINITY) {
		drawCenteredText('Move mouse to control the tracker', 20, [100, 100, 120]);
	}
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
	fontSize: 8,
	frameRate: 60,
});

const orbitLights = [
	{ color: [255, 120, 90], radius: 22, lift: 10, speed: 0.8, phase: 0 },
	{ color: [255, 220, 90], radius: 18, lift: 8, speed: -1.05, phase: Math.PI * 0.4 },
	{ color: [100, 220, 255], radius: 24, lift: 12, speed: 0.62, phase: Math.PI * 0.8 },
	{ color: [120, 255, 170], radius: 16, lift: 9, speed: -0.9, phase: Math.PI * 1.2 },
	{ color: [190, 120, 255], radius: 20, lift: 7, speed: 1.2, phase: Math.PI * 1.6 },
];

t.draw(() => {
	const time = t.frameCount * 0.02;

	t.background(2, 4, 10);
	t.ambientLight(20, 20, 28);
	t.lightFalloff(1, 0.018, 0.0009);
	t.camera(Math.sin(time * 0.28) * 22, -6 + Math.sin(time * 0.21) * 8, 118, 0, 0, 0);

	for (let i = 0; i < orbitLights.length; i++) {
		const light = orbitLights[i];
		const angle = time * light.speed * 0.1 * Math.PI * 2 + light.phase;

		t.pointLight(light.color, {
			x: Math.cos(angle) * light.radius,
			y: Math.sin(angle * 1.7) * light.lift,
			z: Math.sin(angle) * light.radius,
		});
	}

	t.push();
	t.rotateX(18);
	t.rotateY(time * 28);

	for (let i = 0; i < 6; i++) {
		t.push();
		t.rotateY(i * 60 + time * 12);
		t.translate(14, Math.sin(time * 2 + i) * 2, 0);
		t.rotateX(time * 40 + i * 25);
		t.char(i % 2 === 0 ? 'X' : 'H');
		t.charColor(120 + i * 18, 130 + (i % 3) * 30, 255 - i * 16);
		t.cellColor(16 + i * 6, 18 + i * 4, 28 + i * 3);
		t.box(4, 12, 4);
		t.pop();
	}

	t.push();
	t.rotateY(-time * 55);
	t.char('@');
	t.charColor(245, 245, 255);
	t.cellColor(20, 22, 32);
	t.sphere(5.5);
	t.pop();

	t.push();
	t.translate(0, 0, 0);
	t.rotateX(90);
	t.rotateY(time * 48);
	t.char('*');
	t.charColor(220, 230, 255);
	t.cellColor(18, 20, 32);
	t.torus(12, 2.2);
	t.pop();

	t.pop();
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
	t.background(0);

	for (let i = 0; i < 3; i++) {
		t.push();
		t.translate(i * 12 - 12, 0);
		t.rotateZ(t.frameCount * (1 + i * 0.5));
		t.charColor(100 + i * 70, 255 - i * 50, 150);
		t.char(['*', '@', '#'][i]);
		t.rect(8, 8);
		t.pop();
	}
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

Set a post-draw callback function for the base layer.

This callback runs after the base layer's draw callback, ASCII conversion, and
any filters queued on the base layer during draw. Filters queued on
`t.layers.base` inside this callback are applied to the base layer before
other layers are composited on top.

Calling this method is equivalent to setting the post-draw callback on the base layer:
```js
textmodifier.layers.base.postDraw(callback);
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` | The function to call after the base layer has been drawn and filtered. |

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
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
	t.background(0);

	for (let i = 0; i < 3; i++) {
		t.push();
		t.translate(i * 12 - 12, 0);
		t.rotateZ(t.frameCount * (1 + i * 0.5));
		t.charColor(100 + i * 70, 255 - i * 50, 150);
		t.char(['*', '@', '#'][i]);
		t.rect(8, 8);
		t.pop();
	}
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
| `width?` | `number` | Width of the rectangle in grid cells (defaults to 1) |
| `height?` | `number` | Height of the rectangle in grid cells (defaults to 1) |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
	t.background(0);

	const time = t.frameCount * 0.5;
	const squareCount = 64;
	const maxSize = Math.max(t.grid.cols, t.grid.rows) * 1.5;

	for (let i = squareCount; i > 0; i--) {
		const progress = i / squareCount;
		const size = maxSize * Math.pow(progress, 1.5);
		const rotation = time + i * 15;

		t.push();
		t.rotateZ(rotation);

		const brightness = Math.round(255 * (1 - progress));
		t.charColor(brightness, Math.round(brightness * 0.5), 255);
		t.char(['░', '▒', '▓', '█'][i % 4]);

		t.rect(size, size);
		t.pop();
	}
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

Execute the render function a specified number of times.

This method is useful when the render loop has been stopped with [noLoop](#noloop),
allowing you to trigger rendering on demand.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `n?` | `number` | The number of times to execute the render function. Defaults to 1. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600, fontSize: 16 });

let manualMode = false;
let bursts = 0;
let rings = 1;

function drawLabel(text, y, color = 180) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

function triggerRedraw(count) {
	if (!manualMode) {
		return;
	}

	bursts++;
	rings = (rings % 5) + 1;
	t.redraw(count);
}

t.keyPressed((data) => {
	if (data.key === ' ') {
		triggerRedraw(1);
	}

	if (data.key === 'Enter') {
		triggerRedraw(3);
	}
});

t.mousePressed(() => {
	triggerRedraw(1);
});

t.draw(() => {
	if (!manualMode && t.frameCount >= 90) {
		manualMode = true;
		t.noLoop();
	}

	t.background(0);

	for (let i = 0; i < rings; i++) {
		t.push();
		t.rotateZ(t.frameCount * 4 + i * 22);
		t.char(i % 2 === 0 ? 'O' : '+');
		t.charColor(80 + i * 35, 160 + i * 15, 255);
		t.rect(6 + i * 4, 6 + i * 4);
		t.pop();
	}

	drawLabel(manualMode ? 'manual redraw mode' : 'auto pause at frame 90', -12, 220);
	drawLabel('space/click = redraw(1)', -9);
	drawLabel('enter = redraw(3)', -6);
	drawLabel(`bursts: ${bursts}`, 12, manualMode ? 255 : 120);
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let cursor = { x: 0, y: 0 };

t.mouseClicked(() => {
	if (document.pointerLockElement === t.canvas) {
		t.exitPointerLock();
	} else {
		t.requestPointerLock();
	}
});

t.draw(() => {
	t.background(0);

	if (document.pointerLockElement === t.canvas) {
		cursor.x += t.movedX * 0.08;
		cursor.y += t.movedY * 0.08;
	}

	cursor.x = Math.max(-t.grid.cols / 2, Math.min(t.grid.cols / 2, cursor.x));
	cursor.y = Math.max(-t.grid.rows / 2, Math.min(t.grid.rows / 2, cursor.y));

	t.push();
	t.translate(cursor.x, cursor.y);
	t.char(document.pointerLockElement === t.canvas ? '@' : '+');
	t.charColor(document.pointerLockElement === t.canvas ? 255 : 180, 220, 120);
	t.point();
	t.pop();
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

Resets to the default auto camera behavior.

This clears any active explicit camera and returns view calculation to renderer-managed defaults.

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let customCamera;
let autoMode = false;

const scene = [
	{ x: -12, y: 0, z: -10, char: 'A', color: [255, 120, 120] },
	{ x: 0, y: 0, z: 0, char: 'B', color: [120, 255, 160] },
	{ x: 12, y: 0, z: 10, char: 'C', color: [120, 180, 255] },
];

function drawScene() {
	for (let i = 0; i < scene.length; i++) {
		const item = scene[i];

		t.push();
		t.translate(item.x, item.y, item.z);
		t.rotateX(t.frameCount * (0.8 + i * 0.1));
		t.rotateY(t.frameCount * (1.1 + i * 0.15));
		t.char(item.char);
		t.charColor(item.color[0], item.color[1], item.color[2]);
		t.rect(8, 8);
		t.pop();
	}
}

function drawLabel(text, y) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y, 0);
	t.charColor(220);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.setup(() => {
	t.perspective(58, 0.1, 4096);
	customCamera = t.createCamera();
	customCamera.setPosition(0, 14, 34).lookAt(0, 0, 0);
	t.setCamera(customCamera);
});

t.mouseClicked(() => {
	autoMode = !autoMode;

	if (autoMode) {
		t.resetCamera();
		return;
	}

	t.setCamera(customCamera);
});

t.draw(() => {
	t.background(8, 10, 24);
	drawScene();
	drawLabel('click to toggle resetCamera()', Math.floor(t.grid.rows / 2) - 3);
	drawLabel(autoMode ? 'auto camera active' : 'custom camera active', Math.floor(t.grid.rows / 2) - 1);
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

function drawLabel(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	t.background(5, 7, 18);

	t.push();
	t.translate(-8, 0);
	t.rotateZ(t.frameCount * 1.6);
	t.charColor(255, 140, 120);
	t.rect(10, 10);
	t.pop();

	t.push();
	t.translate(8, 0);
	t.rotateZ(t.frameCount * 1.6);
	t.resetMatrix();
	t.translate(8, 0);
	t.charColor(120, 205, 255);
	t.rect(10, 10);
	t.pop();

	drawLabel('left keeps rotation', -Math.floor(t.grid.rows * 0.34), [255, 225, 140]);
	drawLabel('right calls resetMatrix()', Math.floor(t.grid.rows * 0.3), [120, 205, 255]);
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let portalShader;

t.setup(async () => {
	portalShader = await t.createFilterShader(`#version 300 es
    precision highp float;
    in vec2 v_uv;
    uniform float u_time;
    layout(location = 0) out vec4 o_char;
    layout(location = 1) out vec4 o_prim;
    layout(location = 2) out vec4 o_sec;

    void main() {
      vec2 p = v_uv * 2.0 - 1.0;
      float r = length(p);
      float a = atan(p.y, p.x);

      float charPattern = floor(r * 8.0) / 8.0 + sin(a * 6.0 + u_time * 0.3) * 0.1;
      o_char = vec4(charPattern, 0.0, 0.0, 1.0);

      float wave = sin(r * 20.0 - u_time * 5.0 + sin(a * 10.0));
      o_prim = vec4(0.5 + 0.5 * cos(u_time + r * 2.0), 0.2 + wave * 0.3, 0.8, 1.0);
      o_sec = vec4(0.0);
    }
  `);
});

t.draw(() => {
	t.background(0);

	if (portalShader) {
		t.shader(portalShader);
		t.setUniform('u_time', t.frameCount * 0.02);

		t.rect(t.grid.cols, t.grid.rows);
	}

	t.resetShader();

	const count = 8;
	for (let i = 0; i < count; i++) {
		const angle = t.frameCount * 0.05 + (i / count) * Math.PI * 2;
		const x = Math.cos(angle) * 15;
		const y = Math.sin(angle) * 15;

		t.push();
		t.translate(x, y);
		t.rotateZ(angle * 2);
		t.char('♦');
		t.charColor(255, 200, 100);
		t.rect(5, 5);
		t.pop();
	}
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
const t = textmode.create({ width: 600, height: 400 });

let direction = 1;

function drawLabel(label, y, color) {
	const startX = -label.length / 2;
	t.charColor(...color);

	for (let i = 0; i < label.length; i++) {
		t.push();
		t.translate(startX + i + 0.5, y);
		t.char(label[i]);
		t.point();
		t.pop();
	}
}

t.draw(() => {
	if (t.frameCount % 90 === 0) {
		const nextWidth = direction > 0 ? 800 : 600;
		const nextHeight = direction > 0 ? 600 : 400;
		t.resizeCanvas(nextWidth, nextHeight);
		direction *= -1;
		return;
	}

	t.background(10, 16, 28);
	drawLabel(`${t.width} x ${t.height}`, -2, [255, 230, 120]);
	drawLabel('resizeCanvas()', 0, [220, 240, 255]);
	drawLabel('updates grid + viewport', 2, [120, 220, 255]);
});
```

***

### rotate()

#### Call Signature

```ts
rotate(): void;
```

Sets the rotation angles for subsequent shape rendering operations.

All geometries rotate around the center of the shape.

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
	t.background(0);

	for (let i = 0; i < 3; i++) {
		t.push();
		t.translate(i * 15 - 15, 0, 0);

		const angle = t.frameCount * (1.5 + i * 0.5);
		// Each shape rotates around different combinations of axes
		t.rotate(angle * 0.7, angle * 0.5, angle);

		t.char(['T', 'X', 'T'][i]);
		t.charColor(100 + i * 60, 200 - i * 40, 255);
		t.rect(10, 10);
		t.pop();
	}
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
| `callback` | [`TouchRotateHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchRotateHandler.md) | The function to call when a rotation gesture is detected. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

let rotation = 0;

t.rotateGesture((data) => {
	rotation += data.deltaRotation;
});

t.draw(() => {
	t.background(0);
	t.rotateZ(rotation);
	t.char('☼');
	t.charColor(100, 255, 200);
	t.rect(20, 20);

	t.push();
	t.translate(15, 0);
	t.char('•');
	t.charColor(255, 100, 100);
	t.rect(5, 5);
	t.pop();
});
```

***

### rotateX()

```ts
rotateX(degrees?): number | void;
```

Sets the X-axis rotation angle for subsequent shape rendering operations, or gets the current angle.

All geometries rotate around the center of the shape.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `degrees?` | `number` | The rotation angle in degrees around the X-axis. If not provided, returns the current accumulated rotation. |

#### Returns

`number` \| `void`

The current X-axis rotation in degrees if called without arguments.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 2;
	let angle = time;

	if (t.mouse.y !== Number.NEGATIVE_INFINITY) {
		angle = t.mouse.y * 10;
	}

	t.push();
	t.charColor(40, 50, 80);
	for (let i = -2; i <= 2; i++) {
		t.push();
		t.translate(0, i * 10, 0);
		t.char('-');
		t.rect(60, 1);
		t.pop();
	}
	t.pop();

	t.push();
	t.rotateX(angle);
	const currentAngle = t.rotateX();
	const intensity = Math.abs(Math.cos((currentAngle * Math.PI) / 180));
	t.charColor(120, 255, 180);
	t.char(intensity > 0.3 ? '█' : '▒');
	t.rect(30, 15);
	t.pop();

	drawCenteredText(`Current X-Angle: ${Math.floor(currentAngle % 360)}°`, 12, [255, 225, 140]);

	drawCenteredText('Textmodifier.rotateX', -18, [255, 255, 255]);
	drawCenteredText('Rotates the coordinate system around the X-axis (Pitch).', -16, [150, 170, 200]);
	drawCenteredText('t.rotateX(degrees)', 18, [140, 180, 255]);

	if (t.mouse.y === Number.NEGATIVE_INFINITY) {
		drawCenteredText('Move mouse Y to control rotation', 21, [100, 100, 120]);
	}
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

Sets the Y-axis rotation angle for subsequent shape rendering operations, or gets the current angle.

All geometries rotate around the center of the shape.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `degrees?` | `number` | The rotation angle in degrees around the Y-axis. If not provided, returns the current accumulated rotation. |

#### Returns

`number` \| `void`

The current Y-axis rotation in degrees if called without arguments.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 2;
	let angle = time;

	if (t.mouse.x !== Number.NEGATIVE_INFINITY) {
		angle = t.mouse.x * 10;
	}

	t.push();
	t.charColor(40, 50, 80);
	for (let i = -2; i <= 2; i++) {
		t.push();
		t.translate(i * 15, 0, 0);
		t.char('|');
		t.rect(1, 40);
		t.pop();
	}
	t.pop();

	t.push();
	t.rotateY(angle);
	const currentAngle = t.rotateY();
	const side = Math.cos((currentAngle * Math.PI) / 180);
	t.charColor(100, 200, 255);
	t.char(Math.abs(side) > 0.2 ? '█' : '│');
	t.rect(15, 30);
	t.pop();

	drawCenteredText(`Current Y-Angle: ${Math.floor(currentAngle % 360)}°`, 12, [255, 225, 140]);

	drawCenteredText('Textmodifier.rotateY', -18, [255, 255, 255]);
	drawCenteredText('Rotates the coordinate system around the Y-axis (Yaw).', -16, [150, 170, 200]);
	drawCenteredText('t.rotateY(degrees)', 18, [140, 180, 255]);

	if (t.mouse.x === Number.NEGATIVE_INFINITY) {
		drawCenteredText('Move mouse X to control rotation', 21, [100, 100, 120]);
	}
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

Sets the Z-axis rotation angle for subsequent shape rendering operations, or gets the current angle.

All geometries rotate around the center of the shape.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `degrees?` | `number` | The rotation angle in degrees around the Z-axis. If not provided, returns the current accumulated rotation. |

#### Returns

`number` \| `void`

The current Z-axis rotation in degrees if called without arguments.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 2;
	let angle = time;

	if (t.mouse.x !== Number.NEGATIVE_INFINITY) {
		angle = Math.atan2(t.mouse.y, t.mouse.x) * (180 / Math.PI);
	}

	t.push();
	t.charColor(40, 50, 80);
	for (let i = 0; i < 8; i++) {
		t.push();
		t.rotateZ(i * 45);
		t.char('-');
		t.translate(15, 0);
		t.rect(20, 1);
		t.pop();
	}
	t.pop();

	t.push();
	t.rotateZ(angle);
	const currentAngle = t.rotateZ();
	t.charColor(255, 140, 180);
	t.char('+');
	t.rect(20, 20);
	t.pop();

	drawCenteredText(`Current Z-Angle: ${Math.floor(currentAngle % 360)}°`, 12, [255, 225, 140]);

	drawCenteredText('Textmodifier.rotateZ', -18, [255, 255, 255]);
	drawCenteredText('Rotates the coordinate system around the Z-axis (Roll).', -16, [150, 170, 200]);
	drawCenteredText('t.rotateZ(degrees)', 18, [140, 180, 255]);

	if (t.mouse.x === Number.NEGATIVE_INFINITY) {
		drawCenteredText('Move mouse to control angle', 21, [100, 100, 120]);
	}
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

function trsMatrixY(angle, tx, ty, tz, sx, sy, sz) {
	const c = Math.cos(angle);
	const s = Math.sin(angle);

	return new Float32Array([c * sx, 0, -s * sx, 0, 0, sy, 0, 0, s * sz, 0, c * sz, 0, tx, ty, tz, 1]);
}

function drawLabel(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

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
	t.perspective(60, 0.1, 4096);
	const camera = t.createCamera();
	camera.setPosition(0, 6, 54).lookAt(0, 0, 0);
	t.setCamera(camera);
});

t.draw(() => {
	const time = t.frameCount * 0.02;
	t.background(5, 7, 18);

	const left = trsMatrixY(time * 1.4, -12, 0, 0, 1.1, 1.1, 1.1);
	t.push();
	t.applyMatrix(left);
	t.char('M');
	t.charColor(255, 140, 120);
	t.box(8, 8, 8);
	t.pop();

	const right = trsMatrixY(time * 2.0, 12, 0, 0, 1.0, 1.0, 1.0);
	t.push();
	t.applyMatrix(right);
	t.scale(1.0 + Math.sin(time * 2.2) * 0.2);
	t.char('S');
	t.charColor(120, 205, 255);
	t.torus(3.2, 1.3);
	t.pop();

	drawLabel('applyMatrix() + scale()', -Math.floor(t.grid.rows * 0.36), [255, 225, 140]);
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

Sets the active camera from a previously created camera object.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `camera` | [`TextmodeCamera`](TextmodeCamera.md) | Camera instance to activate. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let cameraA;
let cameraB;
let useA = true;

const scene = [
	{ x: -16, y: 0, z: 0, char: 'L', color: [255, 120, 120] },
	{ x: 0, y: 0, z: -12, char: 'M', color: [120, 255, 160] },
	{ x: 16, y: 0, z: 0, char: 'R', color: [120, 180, 255] },
];

function drawScene() {
	for (let i = 0; i < scene.length; i++) {
		const item = scene[i];

		t.push();
		t.translate(item.x, item.y, item.z);
		t.rotateY(t.frameCount * (0.9 + i * 0.2));
		t.rotateZ(t.frameCount * (0.7 + i * 0.15));
		t.char(item.char);
		t.charColor(item.color[0], item.color[1], item.color[2]);
		t.rect(8, 8);
		t.pop();
	}
}

function drawLabel(text, y) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y, 0);
	t.charColor(220);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.setup(() => {
	t.perspective(58, 0.1, 4096);
	cameraA = t.createCamera();
	cameraA.setPosition(-32, 10, 24).lookAt(0, 0, 0);

	cameraB = cameraA.copy().setPosition(32, 10, 24).lookAt(0, 0, 0);
	t.setCamera(cameraA);
});

t.mouseClicked(() => {
	useA = !useA;
	t.setCamera(useA ? cameraA : cameraB);
});

t.draw(() => {
	t.background(8, 10, 24);
	drawScene();
	drawLabel('click to switch setCamera(cameraA / cameraB)', Math.floor(t.grid.rows / 2) - 3);
	drawLabel(useA ? 'cameraA active' : 'cameraB active', Math.floor(t.grid.rows / 2) - 1);
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

Set a uniform value for the current custom shader.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the uniform variable |
| `value` | `UniformValue` | The value to set |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let pulseShader;
t.setup(async () => {
	pulseShader = await t.createFilterShader(`#version 300 es
    precision highp float;
    in vec2 v_uv;
    uniform float u_time;
    layout(location = 0) out vec4 o_char;
    layout(location = 1) out vec4 o_col;
    layout(location = 2) out vec4 o_bg;
    void main() {
      float p = 0.5 + 0.5 * sin(u_time + v_uv.x);
      o_char = vec4(p, 0.0, 0.0, 1.0);
      o_col = vec4(v_uv, 1.0, 1.0);
      o_bg = vec4(0.0, 0.0, 0.0, 1.0);
    }
  `);
});

t.draw(() => {
	t.background(0);
	if (pulseShader) {
		t.shader(pulseShader);
		t.setUniform('u_time', t.frameCount * 0.001);
		t.rect(t.grid.cols, t.grid.rows);
	}
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

Set multiple uniform values for the current custom shader.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `uniforms` | `Record`\<`string`, `UniformValue`\> | Object containing uniform name-value pairs |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let ripple;
t.setup(async () => {
	ripple = await t.createFilterShader(`#version 300 es
    precision highp float;
    in vec2 v_uv;
    uniform float u_time; uniform vec2 u_mouse;
    layout(location = 0) out vec4 o_c;
    layout(location = 1) out vec4 o_p;
    layout(location = 2) out vec4 o_s;
    void main() {
      float d = length(v_uv - u_mouse);
      float w = 0.5 + 0.5 * sin(d * 20.0 - u_time);
      o_c = vec4(w, 0.0, 0.0, 1.0);
      o_p = vec4(0.2, 0.5, 1.0, 1.0);
      o_s = vec4(0.0);
    }
  `);
});

t.draw(() => {
	t.background(0);
	if (ripple) {
		t.shader(ripple);
		t.setUniforms({
			u_time: t.frameCount * 0.05,
			u_mouse: [t.mouse.x, t.mouse.y],
		});
		t.rect(t.grid.cols, t.grid.rows);
	}
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

Set a setup callback function that will be executed once when initialization is complete.

This callback is called after font loading and grid initialization, allowing access to
properties like `textmodifier.grid.cols` for calculating layout or setup variables.

The callback can be asynchronous (return a Promise).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` \| `Promise`\<`void`\> | The function to call when setup is complete |

#### Returns

`Promise`\<`void`\>

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let stamp;

function drawLabel(label, y, color) {
	const startX = -label.length / 2;
	t.charColor(...color);

	for (let i = 0; i < label.length; i++) {
		t.push();
		t.translate(startX + i + 0.5, y);
		t.char(label[i]);
		t.point();
		t.pop();
	}
}

t.setup(() => {
	stamp = t.createFramebuffer({ width: 18, height: 6 });

	stamp.begin();
	t.background(35, 20, 70);
	drawLabel('READY', 0, [255, 210, 120]);
	stamp.end();
});

t.draw(() => {
	t.background(6, 10, 18);
	drawLabel('SETUP RUNS ONCE', -8, [220, 240, 255]);

	for (let i = 0; i < 5; i++) {
		t.push();
		t.translate(Math.sin(t.frameCount * 0.03 + i) * 16, i * 4 - 1);
		t.image(stamp);
		t.pop();
	}
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

Set a custom shader for subsequent rendering operations.

The shader persists until explicitly reset via [resetShader](#resetshader) or by calling `shader(null)`.
This behavior matches p5.js, allowing multiple draw calls with the same shader.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `shader` | [`TextmodeShader`](TextmodeShader.md) \| `null` | The custom shader to use, or `null` to reset to the default shader. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

let glitchShader;

t.setup(async () => {
	glitchShader = await t.createFilterShader(`#version 300 es
  precision highp float;
  in vec2 v_uv;
  uniform float u_intensity;
  layout(location = 0) out vec4 o_character;
  layout(location = 1) out vec4 o_primaryColor;
  layout(location = 2) out vec4 o_secondaryColor;

  void main() {
    vec2 offset = vec2(sin(v_uv.y * 50.0) * u_intensity, 0.0);
    float pattern = fract(v_uv.x * 20.0 + offset.x);
    vec3 color = vec3(pattern, 1.0 - pattern, 0.5);
    o_character = vec4(pattern, 0.0, 0.0, 0.0);
    o_primaryColor = vec4(color, 1.0);
    o_secondaryColor = vec4(color * 0.5, 1.0);
  }
`);
});

t.draw(() => {
	t.shader(glitchShader);
	t.setUniform('u_intensity', Math.sin(t.frameCount * 0.1) * 0.02);

	t.translate(10, 10);
	t.rect(20, 20);
	t.translate(25, 0);
	t.rect(20, 20);

	t.resetShader();
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 8 });

function label(text, y) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y, 0);
	t.charColor(220);
	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}
	t.pop();
}

t.draw(() => {
	const time = t.frameCount * 0.02;
	t.background(4, 6, 16);
	t.ambientLight(18, 20, 26);
	t.pointLight([120, 210, 255], { x: 18, y: -10, z: 26 });
	t.pointLight([255, 150, 100], { x: -20, y: 8, z: -18 });
	t.camera(Math.cos(time * 0.45) * 16, -5, 76, 0, 0, 0);

	t.push();
	t.rotateY(time * 38);
	t.rotateX(16);
	t.char('@');
	t.charColor(230, 240, 255);
	t.cellColor(18, 24, 34);
	t.sphere(10 + Math.sin(time * 1.3) * 1.5);
	t.pop();

	for (let i = 0; i < 3; i++) {
		t.push();
		t.rotateY(i * 120 + time * (46 + i * 12));
		t.translate(20, Math.sin(time * 2 + i) * 4, 0);
		t.char(['o', '*', '+'][i]);
		t.charColor(255, 180 - i * 30, 120 + i * 50);
		t.cellColor(18, 12, 22 + i * 6);
		t.sphere(2.2 + i * 0.7);
		t.pop();
	}

	label('sphere(radius)', Math.floor(t.grid.rows / 2) - 3);
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

Alias for [charColor](#charcolor). Get the current stroke (character) color.

##### Returns

[`TextmodeColor`](TextmodeColor.md)

The current character color as a [TextmodeColor](TextmodeColor.md).

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

function drawLabel(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	const pulse = (Math.sin(t.frameCount * 0.04) + 1) * 0.5;
	t.background(5, 7, 18);

	t.stroke(255, 140 + pulse * 80, 90);
	t.fill(20, 50 + pulse * 90, 140 + pulse * 80);

	t.push();
	t.rotateZ(t.frameCount * 1.1);
	t.rect(t.grid.cols - 12, t.grid.rows - 12);
	t.pop();

	const stroke = t.stroke();
	const fill = t.fill();

	drawLabel(`stroke ${stroke.r},${stroke.g},${stroke.b}`, -Math.floor(t.grid.rows * 0.34), [255, 225, 140]);
	drawLabel(`fill ${fill.r},${fill.g},${fill.b}`, Math.floor(t.grid.rows * 0.3), [120, 205, 255]);
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

function drawLabel(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	const pulse = (Math.sin(t.frameCount * 0.04) + 1) * 0.5;
	t.background(5, 7, 18);

	t.stroke(255, 140 + pulse * 80, 90);
	t.fill(20, 50 + pulse * 90, 140 + pulse * 80);

	t.push();
	t.rotateZ(t.frameCount * 1.1);
	t.rect(t.grid.cols - 12, t.grid.rows - 12);
	t.pop();

	const stroke = t.stroke();
	const fill = t.fill();

	drawLabel(`stroke ${stroke.r},${stroke.g},${stroke.b}`, -Math.floor(t.grid.rows * 0.34), [255, 225, 140]);
	drawLabel(`fill ${fill.r},${fill.g},${fill.b}`, Math.floor(t.grid.rows * 0.3), [120, 205, 255]);
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

function drawLabel(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	const pulse = (Math.sin(t.frameCount * 0.04) + 1) * 0.5;
	t.background(5, 7, 18);

	t.stroke(255, 140 + pulse * 80, 90);
	t.fill(20, 50 + pulse * 90, 140 + pulse * 80);

	t.push();
	t.rotateZ(t.frameCount * 1.1);
	t.rect(t.grid.cols - 12, t.grid.rows - 12);
	t.pop();

	const stroke = t.stroke();
	const fill = t.fill();

	drawLabel(`stroke ${stroke.r},${stroke.g},${stroke.b}`, -Math.floor(t.grid.rows * 0.34), [255, 225, 140]);
	drawLabel(`fill ${fill.r},${fill.g},${fill.b}`, Math.floor(t.grid.rows * 0.3), [120, 205, 255]);
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 16 });

function drawLabel(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	const pulse = (Math.sin(t.frameCount * 0.04) + 1) * 0.5;
	t.background(5, 7, 18);

	t.stroke(255, 140 + pulse * 80, 90);
	t.fill(20, 50 + pulse * 90, 140 + pulse * 80);

	t.push();
	t.rotateZ(t.frameCount * 1.1);
	t.rect(t.grid.cols - 12, t.grid.rows - 12);
	t.pop();

	const stroke = t.stroke();
	const fill = t.fill();

	drawLabel(`stroke ${stroke.r},${stroke.g},${stroke.b}`, -Math.floor(t.grid.rows * 0.34), [255, 225, 140]);
	drawLabel(`fill ${fill.r},${fill.g},${fill.b}`, Math.floor(t.grid.rows * 0.3), [120, 205, 255]);
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

Swipes provide the dominant direction (`up`, `down`, `left`, `right`), travelled distance, and
velocity in CSS pixels per millisecond. Useful for panning, flicks, or quick shortcuts.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchSwipeHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchSwipeHandler.md) | The function to call when a swipe gesture is detected. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

let arrow = '•';
let r = 128;
let g = 128;
let b = 128;

t.swipe((data) => {
	const horizontal = Math.abs(data.direction.x) >= Math.abs(data.direction.y);

	if (horizontal) {
		if (data.direction.x < 0) {
			arrow = '◀';
			r = 100;
			g = 100;
			b = 255;
		} else {
			arrow = '▶';
			r = 255;
			g = 255;
			b = 100;
		}
		return;
	}

	if (data.direction.y < 0) {
		arrow = '▲';
		r = 255;
		g = 100;
		b = 100;
	} else {
		arrow = '▼';
		r = 100;
		g = 255;
		b = 100;
	}
});

t.draw(() => {
	t.background(0);
	const size = 8 + Math.sin(t.frameCount * 0.1) * 2;
	t.char(arrow);
	t.charColor(r, g, b);
	t.rect(size, size);
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
| `callback` | [`TouchTapHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchTapHandler.md) | The function to call when a tap gesture is detected. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

const markers = [];

t.tap((data) => {
	markers.push({ x: data.touch.x, y: data.touch.y, life: 60 });
});

t.draw(() => {
	t.background(0);

	for (let i = markers.length - 1; i >= 0; i--) {
		const marker = markers[i];

		t.push();
		t.translate(marker.x, marker.y);
		t.char('X');
		t.charColor(255, 100, 100, (marker.life / 60) * 255);
		t.rect(3, 3);
		t.pop();

		marker.life -= 1;
		if (marker.life <= 0) markers.splice(i, 1);
	}

	if (markers.length === 0) {
		t.charColor(100);
		t.char('?');
		t.rect(1, 1);
	}
});
```

***

### targetFrameRate()

```ts
targetFrameRate(fps?): number | void;
```

Set or get the target frame rate limit.

Works similarly to [frameRate](#framerate), but gets the target frame rate instead of the current measured frame rate.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fps?` | `number` | Optional new target frame rate. If not provided, returns current target frame rate. |

#### Returns

`number` \| `void`

Current target frame rate when getting, void when setting

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const targets = [15, 30, 60];
let targetIndex = 2;

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

t.mouseClicked(() => {
	targetIndex = (targetIndex + 1) % targets.length;
	t.targetFrameRate(targets[targetIndex]);
});

t.draw(() => {
	t.background(6, 10, 22);

	const target = Math.round(t.targetFrameRate());
	const time = t.frameCount;

	// Three concentric rotating elements at different speeds —
	// all slow down and speed up together when target changes
	t.push();
	t.rotateZ(time * 1.5);
	t.charColor(255, 180, 100);
	t.cellColor(60, 40, 20);
	t.char('#');
	t.rect(10, 3);
	t.pop();

	t.push();
	t.rotateZ(time * -0.8);
	t.translate(8, 0);
	t.charColor(100, 200, 255);
	t.cellColor(20, 40, 60);
	t.char('*');
	t.rect(3, 3);
	t.pop();

	t.push();
	t.rotateZ(time * 0.4);
	t.translate(13, 0);
	t.charColor(255, 100, 150);
	t.cellColor(60, 20, 40);
	t.char('o');
	t.rect(2, 2);
	t.pop();

	drawCenteredText('Textmodifier.targetFrameRate', -12, [240, 245, 255]);
	drawCenteredText('Getting and setting the target frame rate.', -10, [150, 170, 200]);

	drawCenteredText(`t.targetFrameRate() = ${target} fps`, -6, [140, 180, 255]);

	drawCenteredText('click to cycle: 15 / 30 / 60', 11, [80, 90, 120]);
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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 8 });

function label(text, y) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y, 0);
	t.charColor(220);
	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}
	t.pop();
}

t.draw(() => {
	const time = t.frameCount * 0.02;
	t.background(5, 5, 15);
	t.ambientLight(22, 20, 28);
	t.pointLight([255, 220, 140], { x: Math.sin(time) * 24, y: -10, z: 18 });
	t.camera(0, -4, 76, 0, 0, 0);

	for (let i = 0; i < 3; i++) {
		t.push();
		t.translate((i - 1) * 14, 0, -i * 8);
		t.rotateX(90 + Math.sin(time * 1.5 + i) * 22);
		t.rotateY(time * (50 + i * 18));
		t.char(['*', '0', '+'][i]);
		t.charColor(255 - i * 30, 180 + i * 20, 140 + i * 35);
		t.cellColor(20 + i * 2, 12 + i * 2, 24 + i * 4);
		t.torus(6 + i * 2.5, 1.5 + i * 0.8);
		t.pop();
	}

	label('torus(radius, tubeRadius)', Math.floor(t.grid.rows / 2) - 3);
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

Set a callback function that will be called when a touch is cancelled by the browser.

Cancellation can occur when the browser takes ownership for scrolling or if the gesture
leaves the window. Treat this as an aborted touch and clean up any in-progress state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchEventHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchEventHandler.md) | The function to call when a touch is cancelled. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

let message = 'OK';
let colorIntensity = 100;

t.touchStarted(() => {
	message = 'TOUCH';
	colorIntensity = 200;
});

t.touchEnded(() => {
	message = 'OK';
	colorIntensity = 100;
});

t.touchCancelled(() => {
	message = 'CANCEL';
	colorIntensity = 0;
});

t.draw(() => {
	t.background(0);
	t.char(message.charAt(0));
	t.charColor(255, colorIntensity, colorIntensity);
	t.rotateZ(t.frameCount * 0.1);
	t.rect(15, 15);

	if (message === 'CANCEL' && t.frameCount % 60 === 0) {
		message = 'OK';
		colorIntensity = 100;
	}
});
```

***

### touchEnded()

```ts
touchEnded(callback): void;
```

Set a callback function that will be called when a touch ends normally.

This fires after the finger leaves the canvas surface and the browser raises a `touchend`
event. Use it to finalise state such as drawing strokes or completing gestures.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchEventHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchEventHandler.md) | The function to call when a touch ends. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

const ghosts = [];

t.touchEnded((data) => {
	ghosts.push({ x: data.touch.x, y: data.touch.y, alpha: 255 });
});

t.draw(() => {
	t.background(0);

	for (let i = ghosts.length - 1; i >= 0; i--) {
		const ghost = ghosts[i];

		t.push();
		t.translate(ghost.x, ghost.y);
		t.char('○');
		t.charColor(255, 100, 100, ghost.alpha);
		t.ellipse(10, 10);
		t.pop();

		ghost.alpha -= 10;
		if (ghost.alpha <= 0) ghosts.splice(i, 1);
	}

	if (ghosts.length === 0) {
		t.charColor(100);
		t.char('?');
		t.rect(1, 1);
	}
});
```

***

### touchMoved()

```ts
touchMoved(callback): void;
```

Set a callback function that will be called when a touch point moves across the canvas.

The provided callback is invoked continuously while the browser reports move events. Use the
`previousTouch` and `deltaTime` fields to derive velocity or gesture behaviour.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchEventHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchEventHandler.md) | The function to call when a touch moves. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

let posX = 0;
let posY = 0;

t.touchMoved((data) => {
	const { touch, previousTouch } = data;

	if (previousTouch) {
		posX += touch.x - previousTouch.x;
		posY += touch.y - previousTouch.y;
	}
});

t.draw(() => {
	t.background(0);
	t.push();
	t.translate(posX, posY);

	const r = Math.abs(Math.sin(posX * 0.05)) * 255;
	const b = Math.abs(Math.cos(posY * 0.05)) * 255;
	t.charColor(r, 200, b);
	t.char('◈');
	t.rect(8, 8);
	t.pop();
});
```

***

### touchStarted()

```ts
touchStarted(callback): void;
```

Set a callback function that will be called when a touch point begins.

The callback receives [input.touch.TouchEventData](../namespaces/input/namespaces/touch/interfaces/TouchEventData.md) containing the touch that triggered the event,
all active touches, and the original DOM event. Use this to react when the user places one or
more fingers on the canvas.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchEventHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchEventHandler.md) | The function to call when a touch starts. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

const ripples = [];

t.touchStarted((data) => {
	ripples.push({
		x: data.touch.x,
		y: data.touch.y,
		r: Math.random() * 255,
		g: Math.random() * 255,
		b: Math.random() * 255,
		startFrame: t.frameCount,
	});
});

t.draw(() => {
	t.background(0);

	for (let i = ripples.length - 1; i >= 0; i--) {
		const ripple = ripples[i];
		const age = t.frameCount - ripple.startFrame;
		const size = age * 0.5;
		const alpha = Math.max(0, 255 - age * 4);

		if (alpha <= 0) {
			ripples.splice(i, 1);
			continue;
		}

		t.push();
		t.translate(ripple.x, ripple.y);
		t.char('O');
		t.charColor(ripple.r, ripple.g, ripple.b, alpha);
		t.ellipse(size, size);
		t.pop();
	}
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

Sets the translation offsets for subsequent shape rendering operations.

All geometries are displaced by the specified amounts. Similar to p5.js translate().

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x?` | `number` | Translation along the X-axis in grid cells (optional, defaults to 0) |
| `y?` | `number` | Translation along the Y-axis in grid cells (optional, defaults to 0) |
| `z?` | `number` | Translation along the Z-axis in grid cells (optional, defaults to 0) |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.03;
	const radius = 15;

	const count = 12;
	for (let i = 0; i < count; i++) {
		const angle = (i / count) * Math.PI * 2 + time;
		const x = Math.cos(angle) * radius;
		const y = Math.sin(angle * 0.5) * radius * 0.5;
		const z = Math.sin(angle) * radius;

		t.push();
		t.translate(x, y, z);

		const alpha = 100 + (z / radius) * 155;
		t.charColor(100, 200, 255, alpha);
		t.char('☼');
		t.point();

		if (i === 0) {
			t.push();
			t.translate(2, 0);
			t.charColor(255, 255, 255, alpha);
			const coordText = `(${x.toFixed(1)}, ${y.toFixed(1)}, ${z.toFixed(1)})`;
			for (let j = 0; j < coordText.length; j++) {
				t.push();
				t.translate(j, 0);
				t.char(coordText[j]);
				t.point();
				t.pop();
			}
			t.pop();
		}
		t.pop();
	}

	drawCenteredText('Textmodifier.translate', -12, [255, 255, 255]);
	drawCenteredText('Moves the coordinate system by (x, y, z) cells.', -10, [150, 170, 200]);
	drawCenteredText('t.translate(x, y, z)', 10, [140, 180, 255]);
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

Gets the current accumulated X-axis translation offset.

##### Returns

`number`

The current X-axis translation in grid cells.

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.05;
	const xPos = Math.sin(time) * 20;

	t.push();
	t.charColor(60, 70, 100);
	t.translate(-30, 0);
	t.char('-');
	t.rect(60, 1);
	t.pop();

	t.push();
	t.translateX(xPos);

	const currentX = t.translateX();

	t.charColor(120, 255, 180);
	t.char('X');
	t.rect(5, 5);

	t.push();
	t.translate(0, 4);
	const label = `X: ${currentX.toFixed(1)}`;
	t.translate(-Math.floor(label.length / 2), 0);
	t.charColor(255);
	for (let i = 0; i < label.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(label[i]);
		t.point();
		t.pop();
	}
	t.pop();
	t.pop();

	drawCenteredText('Textmodifier.translateX', -12, [255, 255, 255]);
	drawCenteredText('Sets or returns the horizontal translation.', -10, [150, 170, 200]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Call Signature

```ts
translateX(pixels): void;
```

Sets the X-axis translation offset for subsequent shape rendering operations.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pixels` | `number` | The translation offset in grid cells along the X-axis. |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.04;
	const count = 30;

	// Multiple elements oscillating in X
	for (let i = 0; i < count; i++) {
		const phase = i / count;
		const y = (phase - 0.5) * 30;
		const xOffset = Math.sin(time + phase * 6) * 20;

		t.push();
		t.translateY(y);
		t.translateX(xOffset);

		t.charColor(120, 255, 180, (phase * 0.8 + 0.2) * 255);
		t.char('█');
		t.rect(4, 1);
		t.pop();
	}

	drawCenteredText('Textmodifier.translateX (Field)', -16, [255, 255, 255]);
	drawCenteredText('Applying individual X translations to multiple layers.', -14, [150, 170, 200]);
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

Gets the current accumulated Y-axis translation offset.

##### Returns

`number`

The current Y-axis translation in grid cells.

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.05;
	const yPos = Math.sin(time) * 12;

	t.push();
	t.charColor(60, 70, 100);
	t.translate(0, -15);
	t.char('|');
	t.rect(1, 30);
	t.pop();

	t.push();
	t.translateY(yPos);

	const currentY = t.translateY();

	t.charColor(255, 140, 180);
	t.char('Y');
	t.rect(5, 5);

	t.push();
	t.translate(4, 0);
	const label = `Y: ${currentY.toFixed(1)}`;
	t.charColor(255);
	for (let i = 0; i < label.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(label[i]);
		t.point();
		t.pop();
	}
	t.pop();
	t.pop();

	drawCenteredText('Textmodifier.translateY', -12, [255, 255, 255]);
	drawCenteredText('Sets or returns the vertical translation.', -10, [150, 170, 200]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Call Signature

```ts
translateY(pixels): void;
```

Sets the Y-axis translation offset for subsequent shape rendering operations.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pixels` | `number` | The translation offset in grid cells along the Y-axis. |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.draw(() => {
	t.background(6, 10, 22);

	const count = 40;
	const speed = 0.5;

	// Cascading elements using translateY
	for (let i = 0; i < count; i++) {
		const x = (i / count - 0.5) * 60;
		const offset = (i * 7.5) % 30;
		const y = ((t.frameCount * speed + offset) % 30) - 15;

		t.push();
		t.translateX(x);
		t.translateY(y);

		const brightness = (1 - (y + 15) / 30) * 255;
		t.charColor(255, 140, 180, brightness);
		t.char('|');
		t.point();
		t.pop();
	}

	drawCenteredText('Textmodifier.translateY (Cascading)', -16, [255, 255, 255]);
	drawCenteredText('Simulating vertical motion with wrapping translateY.', -14, [150, 170, 200]);
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

Gets the current accumulated Z-axis translation offset.

##### Returns

`number`

The current Z-axis translation in grid cells.

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.03;
	const zPos = Math.sin(time) * 40;

	t.push();
	t.charColor(40, 50, 80);
	for (let i = -2; i <= 2; i++) {
		t.push();
		t.translate(i * 10, 0, 0);
		t.char('|');
		t.rect(1, 40);
		t.pop();
		t.push();
		t.translate(0, i * 10, 0);
		t.char('-');
		t.rect(40, 1);
		t.pop();
	}
	t.pop();

	t.push();
	t.translateZ(zPos);

	const currentZ = t.translateZ();

	// Fade based on depth
	const alpha = 255 * (1 - (currentZ + 40) / 120);
	t.charColor(140, 180, 255, alpha);
	t.char('Z');
	t.rect(8, 8);

	t.push();
	t.translate(0, 6);
	const label = `Z: ${currentZ.toFixed(1)}`;
	t.translate(-Math.floor(label.length / 2), 0);
	t.charColor(255, 255, 255, alpha);
	for (let i = 0; i < label.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(label[i]);
		t.point();
		t.pop();
	}
	t.pop();
	t.pop();

	drawCenteredText('Textmodifier.translateZ', -12, [255, 255, 255]);
	drawCenteredText('Sets or returns the depth (Z) translation.', -10, [150, 170, 200]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Call Signature

```ts
translateZ(pixels): void;
```

Sets the Z-axis translation offset for subsequent shape rendering operations.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pixels` | `number` | The translation offset in grid cells along the Z-axis. |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

function drawCenteredText(text, row, rgb = [240, 245, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), row);
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

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.05;
	const zOsc = Math.sin(time) * 30;

	t.push();
	t.charColor(30, 40, 60);
	t.char('.');
	t.rect(40, 20);
	t.pop();

	t.push();
	t.translateZ(0); // Standard depth
	t.charColor(100, 120, 150);
	t.char('O');
	t.rect(15, 15);
	t.pop();

	t.push();
	// Move the core back and forth through the ring
	t.translateZ(zOsc);

	const currentZ = t.translateZ();
	const isAhead = currentZ > 0;

	if (isAhead) {
		t.charColor(255, 200, 100);
		t.char('☼');
	} else {
		t.charColor(100, 150, 255);
		t.char('•');
	}

	t.rect(6, 6);

	t.push();
	t.translate(0, 5);
	const zLabel = `Z: ${currentZ.toFixed(1)}`;
	t.translate(-Math.floor(zLabel.length / 2), 0);
	t.charColor(255);
	for (let i = 0; i < zLabel.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(zLabel[i]);
		t.point();
		t.pop();
	}
	t.pop();
	t.pop();

	drawCenteredText('Textmodifier.translateZ (Depth Interaction)', -12, [255, 255, 255]);
	drawCenteredText('Objects with higher Z values are rendered in front.', -10, [150, 170, 200]);
	drawCenteredText(
		isAhead ? 'Core is IN FRONT of Ring' : 'Core is BEHIND Ring',
		12,
		isAhead ? [255, 200, 100] : [100, 150, 255]
	);
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
| `x1` | `number` | X-coordinate of the first vertex in grid cells |
| `y1` | `number` | Y-coordinate of the first vertex in grid cells |
| `x2` | `number` | X-coordinate of the second vertex in grid cells |
| `y2` | `number` | Y-coordinate of the second vertex in grid cells |
| `x3` | `number` | X-coordinate of the third vertex in grid cells |
| `y3` | `number` | Y-coordinate of the third vertex in grid cells |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
	t.background(5, 5, 10);

	const time = t.frameCount * 0.02;
	const count = 12;
	const radius = Math.min(t.grid.cols, t.grid.rows) * 0.35;

	for (let i = 0; i < count; i++) {
		const angle = (i / count) * Math.PI * 2;
		const pulse = 0.5 + 0.5 * Math.sin(time + i * 0.5);

		const x = Math.cos(angle + time * 0.5) * radius * pulse;
		const y = Math.sin(angle + time * 0.5) * radius * pulse;

		t.push();
		t.translate(x, y);
		t.rotateZ(i * 30 + time * 100);

		t.charColor(150 + pulse * 105, 100, 255 - pulse * 100);
		t.char(['/', '\\', '|', '-'][i % 4]);
		t.lineWeight(1 + Math.floor(pulse * 3));

		const s = 4 + pulse * 8;
		t.triangle(
			0,
			-s, // Top vertex
			-s,
			s * 0.7, // Bottom left
			s,
			s * 0.7 // Bottom right
		);
		t.pop();
	}
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

Get or set whether the base layer should use authored tileset colors directly during the final ASCII pass.

This is equivalent to calling [TextmodeLayer.useTileColors](../namespaces/layering/classes/TextmodeLayer.md#usetilecolors) on
[base layer](#layers).

When disabled (default), tilesets on the base layer are recolored through the current
character (`primary`) and cell (`secondary`) colors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `enabled?` | `boolean` | Whether the base layer should use authored tileset colors directly. |

#### Returns

`boolean` \| `void`

The current base-layer tileset-color mode if called without arguments.

#### Example

```javascript
const TILE_COLUMNS = 16;
const TILE_ROWS = 16;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;

const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let tileset = null;
let usesTileColors = false;

function activeTileIndex() {
	return Math.floor((t.frameCount * 0.35) % TILE_COUNT);
}

function drawLabel(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.setup(async () => {
	tileset = await t.loadTileset({
		source: 'https://littlebitspace.com/resources/fonts/T64.png',
		columns: TILE_COLUMNS,
		rows: TILE_ROWS,
		count: TILE_COUNT,
	});
});

t.draw(() => {
	t.background(4, 7, 18);

	if (!tileset) {
		drawLabel('loading tileset...', 0, [255, 225, 140]);
		return;
	}

	const tileIndex = activeTileIndex();
	t.useTileColors(usesTileColors);
	t.char(tileIndex);
	t.charColor(255, 90, 90);
	t.cellColor(20, 60, 160);
	t.point();

	drawLabel('base layer tileset colors', -Math.floor(t.grid.rows * 0.34), [255, 225, 140]);
	drawLabel('T64  16 x 16  8 x 8 cells', Math.floor(t.grid.rows * 0.2));
	drawLabel(
		usesTileColors ? 'authored colors enabled' : 'char + cell recolor active',
		Math.floor(t.grid.rows * 0.28)
	);
	drawLabel('click to toggle useTileColors()', Math.floor(t.grid.rows * 0.36), [120, 205, 255]);
});

t.mouseClicked(() => {
	usesTileColors = !usesTileColors;
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

Set a callback function that will be called when the window is resized.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` | The function to call when the window is resized. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

function drawLabel(label, y, color) {
	const startX = -label.length / 2;
	t.charColor(...color);

	for (let i = 0; i < label.length; i++) {
		t.push();
		t.translate(startX + i + 0.5, y);
		t.char(label[i]);
		t.point();
		t.pop();
	}
}

t.draw(() => {
	t.background(8, 12, 24);
	drawLabel('WINDOW RESIZED', -6, [255, 230, 120]);
	drawLabel(`${t.width} x ${t.height}`, 0, [220, 240, 255]);
	drawLabel('stretch the browser window', 6, [120, 220, 255]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
