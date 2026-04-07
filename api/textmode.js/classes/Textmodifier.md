---
layout: doc
editLink: true
title: Textmodifier
description: Manages textmode rendering on a HTMLCanvasElement and provides methods for drawing, font management, event handling, layer management, animation control, and...
category: Classes
api: true
kind: Class
lastModified: 2026-04-07
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

### lastKeyPressed

```ts
readonly lastKeyPressed: null | string;
```

Get the last key that was pressed.

Returns the key string of the last pressed key, or null if no key has been pressed.

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
	t.background(0);

	const lastKey = t.lastKeyPressed;
	if (lastKey) {
		t.char(lastKey);
		t.charColor(255, 255, 255);
		t.point();
	}
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/lastKeyPressed/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### lastKeyReleased

```ts
readonly lastKeyReleased: null | string;
```

Get the last key that was released.

Returns the key string of the last released key, or null if no key has been released.

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
	t.background(0);

	const lastKey = t.lastKeyReleased;
	if (lastKey) {
		t.char(lastKey);
		t.charColor(128, 128, 128);
		t.point();
	}
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/lastKeyReleased/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/modifierState/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### mouse

```ts
readonly mouse: MousePosition;
```

Get the current mouse position in center-based grid coordinates.

Returns the mouse position as grid cell coordinates where `(0, 0)` is the center cell.
This matches the drawing coordinate system, so coordinates can be used directly with `translate()`.

If the mouse is outside the grid or the instance is not ready,
it returns `{ x: Number.NEGATIVE_INFINITY, y: Number.NEGATIVE_INFINITY }`.

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
	t.background(0);

	if (t.mouse.x !== Number.NEGATIVE_INFINITY) {
		t.push();
		t.translate(t.mouse.x, t.mouse.y);
		t.char('*');
		t.charColor(255, 0, 0);
		t.cellColor(100);
		t.point();
		t.pop();
	}
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/mouse/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### pressedKeys

```ts
readonly pressedKeys: string[];
```

Get all currently pressed keys.

Returns an array of key strings that are currently being held down.

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

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
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/pressedKeys/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/touches/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/canvas/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/conversions/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### errors

#### Get Signature

```ts
get errors(): ErrorLayerController;
```

Provides access to the error layer controller to display fatal errors in a user-friendly way.

##### Returns

`ErrorLayerController`

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/errors/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 8 });

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
	const time = t.frameCount * 0.03;
	const hasInvert = t.filters.has('invert');
	const invertActive = hasInvert && Math.floor(t.frameCount / 90) % 2 === 1;

	t.background(8, 10, 20);
	t.char('@');
	t.charColor(120 + Math.sin(time) * 90, 160, 255);
	t.rotateZ(time * 45);
	t.rect(14, 14);

	if (invertActive) {
		t.filter('invert');
	}

	label('filters', -4, [255, 210, 90]);
	label(`filters.has('invert'): ${hasInvert}`, -1);
	label(invertActive ? 'invert filter active' : 'built-in filter available', 2, [150, 160, 190]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/filters/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### font

#### Get Signature

```ts
get font(): TextmodeFont;
```

Get the current font object used for rendering the base layer.

##### Returns

[`TextmodeFont`](../namespaces/loadables/classes/TextmodeFont.md)

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/font/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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

t.draw(() => {
	t.background(0);

	t.push();
	t.rotateZ(t.frameCount * 2);
	t.char('X');
	t.charColor(255);
	t.rect(10, 10);
	t.pop();

	if (t.frameCount % 60 < 30) {
		t.push();
		t.translate(15, 0);
		t.char('O');
		t.charColor(100, 200, 255);
		t.rect(5, 5);
		t.pop();
	}

	drawLabel(`frameCount: ${t.frameCount}`, -12);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/frameCount/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
		t.frameCount = 0;
	}
});

t.draw(() => {
	t.background(0);

	const angle = t.frameCount * 0.08;
	const x = Math.cos(angle) * 18;
	const y = Math.sin(angle) * 8;

	t.push();
	t.translate(x, y);
	t.char('@');
	t.charColor(255, 180, 80);
	t.rect(4, 4);
	t.pop();

	drawLabel('press SPACE to reset frameCount', -12);
	drawLabel(`frameCount: ${t.frameCount}`, -9);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/frameCount2/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### grid

#### Get Signature

```ts
get grid(): undefined | TextmodeGrid;
```

Get the grid whose layer is currently being drawn to.
If called outside of a layers draw callback, returns the base layer's grid.

If no grid is set (e.g., before user setup()), returns `undefined`.

##### Returns

`undefined` \| [`TextmodeGrid`](TextmodeGrid.md)

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
	t.background(0);

	const { cols, rows } = t.grid;
	const time = t.frameCount * 0.05;

	for (let y = -Math.floor(rows / 2); y < Math.floor(rows / 2); y++) {
		for (let x = -Math.floor(cols / 2); x < Math.floor(cols / 2); x++) {
			const distance = Math.sqrt(x * x + y * y);
			const ripple = Math.sin(distance * 0.4 - time);
			const charIndex = Math.floor((ripple + 1) * 2);
			const glyph = ['.', ':', '-', '=', '#'][charIndex] || '#';

			t.push();
			t.translate(x + 0.5, y + 0.5);
			t.char(glyph);
			t.charColor(100 + ripple * 155, 150 + ripple * 50, 255);
			t.point();
			t.pop();
		}
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/grid/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/height/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/isDisposed/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/isRenderingFrame/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/layers/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/loading/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/millis/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/millis2/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/millis3/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/millis4/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### overlay

#### Get Signature

```ts
get overlay(): 
  | undefined
  | TextmodeImage;
```

If in overlay mode, returns the [TextmodeImage](../namespaces/loadables/classes/TextmodeImage.md) instance capturing the target canvas/video content,
allowing further configuration of the conversion parameters.

##### Returns

  \| `undefined`
  \| [`TextmodeImage`](../namespaces/loadables/classes/TextmodeImage.md)

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/overlay/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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

t.draw(() => {
	t.background(0);

	const time = t.secs;
	const x = Math.sin(time * 2) * 20;
	const y = Math.cos(time * 3) * 10;

	t.push();
	t.translate(x, y);
	t.char('O');
	t.charColor(255, 100, 100);
	t.rect(3, 3);
	t.pop();

	drawLabel(`secs: ${t.secs.toFixed(2)}`, -12);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/secs/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
		t.secs += 2;
	}
});

t.draw(() => {
	t.background(0);

	const loopDuration = 5;
	const progress = (t.secs % loopDuration) / loopDuration;
	const x = (progress - 0.5) * t.grid.cols;

	t.push();
	t.translate(x, 0);
	t.char('>');
	t.charColor(50, 255, 100);
	t.rect(4, 4);
	t.pop();

	drawLabel('press SPACE to add 2 secs', -12);
	drawLabel(`secs: ${t.secs.toFixed(2)}`, -9);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/secs2/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
		t.secs = Math.max(0, Math.min(5, progress * 5));
		t.cursor('grabbing');
	} else {
		t.cursor('default');
	}

	const length = Math.min(t.grid.rows, t.grid.cols) * 0.35;
	const angle = Math.sin(t.secs * 3) * Math.PI * 0.3;
	const bobX = Math.sin(angle) * length;
	const bobY = Math.cos(angle) * length;

	t.charColor(80);
	t.char('.');
	t.line(0, 0, bobX, bobY);

	for (let i = 1; i <= 4; i++) {
		const lag = i * 0.08;
		const echoAngle = Math.sin((t.secs - lag) * 3) * Math.PI * 0.3;

		t.push();
		t.translate(Math.sin(echoAngle) * length, Math.cos(echoAngle) * length);
		t.char('o');
		t.charColor(50, 100, 255, 100 - i * 20);
		t.ellipse(6 - i, 6 - i);
		t.pop();
	}

	t.push();
	t.translate(bobX, bobY);
	t.char('O');
	t.charColor(255, 100 + Math.abs(Math.cos(t.secs * 3)) * 155, 50);
	t.ellipse(8, 8);
	t.pop();

	drawLabel('hold SPACE and move mouse to set secs', Math.floor(t.grid.rows / 2) - 3);
	drawLabel(`${t.secs.toFixed(2)} secs`, Math.floor(t.grid.rows / 2) - 1);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/secs3/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/width/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/ambientLight/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 8 });

t.draw(() => {
  t.background(10, 15, 25); // Deep space blue

  const time = t.frameCount * 0.02;
  const arcCount = 32;
  const baseSize = Math.min(t.grid.cols, t.grid.rows);

  for (let i = 0; i < arcCount; i++) {
    const phase = i / arcCount;
    const size = baseSize * (0.3 + 0.7 * Math.sin(time + phase * Math.PI));
    const startAngle = (time * 50 + i * 45) % 360;
    const sweep = 45 + 90 * (0.5 + 0.5 * Math.cos(time * 0.7 + i));

    t.push();
    t.rotateZ(i * (360 / arcCount) + time * 20);

    // Color shifting
    const r = 100 + 155 * Math.sin(time + phase);
    const g = 150 + 105 * Math.cos(time * 0.5 + phase);
    const b = 200 + 55 * Math.sin(time * 0.8);

    t.charColor(r, g, b);
    t.char(['+', '•', '·', '░'][i % 4]);
    t.lineWeight(2 + i % 3);

    t.arc(size, size, startAngle, startAngle + sweep);
    t.pop();
  }

  // Center core
  t.char('@');
  t.charColor(255, 255, 200);
  t.rotateZ(-time * 100);
  t.rect(2, 2);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/arc/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  // Set dynamic background
  t.background(
    127 + 127 * Math.sin(t.frameCount * 0.01),
    50,
    127 + 127 * Math.cos(t.frameCount * 0.01)
  );

  // Retrieve it to create a contrasting shape color
  const bg = t.background();
  t.charColor(255 - bg.r, 255 - bg.g, 255 - bg.b);

  t.char('☼');
  t.rect(10, 10);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/background/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  // Pulsing grayscale background
  const gray = 127 + 127 * Math.sin(t.frameCount * 0.05);
  t.background(gray);

  t.charColor(255 - gray); // Inverse color for text
  t.cellColor(0, 0, 0, 0); // Transparent cell background
  t.char('+');
  t.rect(20, 20);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/background2/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  // Colorful background based on time
  t.background(
    100 + 100 * Math.sin(t.frameCount * 0.03),
    100 + 100 * Math.sin(t.frameCount * 0.04),
    100 + 100 * Math.sin(t.frameCount * 0.05)
  );

  t.char('B');
  t.charColor(255);
  t.rect(10, 10);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/background3/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  // Switch between hex string and color object
  if (Math.floor(t.frameCount / 60) % 2 === 0) {
    t.background('#220044');
  } else {
    const col = t.color(0, 100, 50);
    t.background(col);
  }

  t.char('#');
  t.charColor(255);
  t.rect(15, 15);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/background4/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(5, 5, 10);

  const time = t.frameCount * 0.015;
  const petals = 8;
  const size = Math.min(t.grid.cols, t.grid.rows) * 0.35;

  t.lineWeight(1);

  for (let i = 0; i < petals; i++) {
    t.push();
    const angle = (i / petals) * 360 + t.frameCount * 0.2;
    t.rotateZ(angle);

    // Dynamic control points based on time
    const cp1 = size * (0.5 + 0.3 * Math.sin(time + i));
    const cp2 = size * (0.5 + 0.3 * Math.cos(time + i * 0.5));

    // Ethereal colors
    t.charColor(100 + 100 * Math.sin(time + i), 100, 255);
    t.char(['~', '≈', '∫'][i % 3]);

    t.bezierCurve(
      0, 0,            // Anchor 1
      cp1, -cp2,       // Control 1
      cp1, cp2,        // Control 2
      size, 0          // Anchor 2
    );
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/bezierCurve/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
	t.background(6, 8, 18);
	t.ambientLight(22, 24, 30);
	t.pointLight([255, 170, 120], { x: Math.cos(time) * 26, y: -8, z: 28 });
	t.camera(Math.sin(time * 0.5) * 18, -8, 84, 0, 0, 0);

	for (let i = 0; i < 4; i++) {
		t.push();
		t.translate((i - 1.5) * 12, Math.sin(time * 2 + i) * 2, -i * 8);
		t.rotateX(18 + Math.sin(time * 1.7 + i) * 10);
		t.rotateY(time * 42 + i * 18);
		t.char(['#', 'H', 'X', '@'][i]);
		t.charColor(140 + i * 22, 110 + i * 18, 255 - i * 24);
		t.cellColor(14 + i * 3, 12 + i * 2, 22 + i * 4);
		t.box(5 + i * 2, 4 + (i % 2) * 4, 3 + i * 1.5);
		t.pop();
	}

	label('box(width, height, depth)', Math.floor(t.grid.rows / 2) - 3);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/box/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/camera/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  // Set cell color based on position
  const x = Math.sin(t.frameCount * 0.05) * 10;
  if (x > 0) t.cellColor(50, 0, 0);
  else t.cellColor(0, 0, 50);

  // Query the current cell color to set the character color
  const cell = t.cellColor();
  t.charColor(255 - cell.r, 255 - cell.g, 255 - cell.b);

  t.char('.');
  t.translate(x, 0);
  t.rect(10, 10);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/cellColor/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);
  t.charColor(255);
  t.char(' ');

  // Vary cell brightness
  const brightness = 127 + 127 * Math.sin(t.frameCount * 0.1);
  t.cellColor(brightness);
  t.rect(10, 10);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/cellColor2/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);
  t.charColor(0, 0, 0);
  t.char('/');

  // Cyan cell background
  t.cellColor(0, 255, 255);
  t.rect(10, 10);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/cellColor3/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);
  t.char('@');

  // Use hex for cell background
  t.cellColor('#ff4400');
  t.rect(10, 10);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/cellColor4/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const chars = ['A', 'B', 'C'];
  const index = Math.floor(t.frameCount / 30) % chars.length;
  t.char(chars[index]);

  // Query the current character to decide the color
  const current = t.char();

  if (current === 'A') t.charColor(255, 100, 100);
  else if (current === 'B') t.charColor(100, 255, 100);
  else t.charColor(100, 100, 255);

  t.rect(10, 10);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/char/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

#### Call Signature

```ts
char(value): void;
```

Set the character to be used for subsequent rendering operations.
Accepts a single character string or a character index in the current font.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` \| `number` |

##### Returns

`void`

##### Example

```javascript
// Swapping characters over time
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  // Cycle through character indices
  const charIndex = Math.floor(t.frameCount / 10) % t.font.characters.length;
  t.char(charIndex);

  t.charColor(0, 255, 150);
  t.rotateZ(t.frameCount * 2);
  t.rect(15, 15);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/char2/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  // Set a dynamic base color
  t.charColor(
    127 + 127 * Math.sin(t.frameCount * 0.05),
    127 + 127 * Math.cos(t.frameCount * 0.05),
    200
  );

  // Draw base shape
  t.char('A');
  t.rect(10, 10);

  // Query the color we just set
  const col = t.charColor();

  // Create a complementary color (inverse) for the second shape
  t.push();
  t.translate(15, 0);
  t.charColor(255 - col.r, 255 - col.g, 255 - col.b);
  t.char('B');
  t.rect(10, 10);
  t.pop();
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/charColor/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);
  // Fade character color in and out
  const alpha = 127 + 127 * Math.sin(t.frameCount * 0.1);
  t.charColor(255, alpha);
  t.char('A');
  t.rect(10, 10);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/charColor2/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);
  // Cycle through colors
  t.charColor(
    Math.sin(t.frameCount * 0.05) * 127 + 128,
    Math.sin(t.frameCount * 0.05 + 2) * 127 + 128,
    Math.sin(t.frameCount * 0.05 + 4) * 127 + 128
  );
  t.char('=');
  t.rect(10, 10);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/charColor3/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);
  // Use hex color
  t.charColor('#FFD700'); // Gold
  t.char('$');
  t.rect(10, 10);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/charColor4/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
// Rotating characters independently of geometry
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const count = 64;
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const x = Math.cos(angle) * 20;
    const y = Math.sin(angle) * 20;

    t.push();
    t.translate(x, y);

    // Rotate the character itself
    t.charRotation(t.frameCount * 5 + i * 30);

    t.charColor(255, 200, 100);
    t.char('+');
    t.point();
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/charRotation/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  // Clear the canvas fully at the start of each frame
  // This prevents "trails" from previous frames
  t.clear();

  t.background(0);

  const x = Math.sin(t.frameCount * 0.05) * 20;
  t.push();
  t.translate(x, 0);
  t.charColor(255);
  t.char('X');
  t.rect(5, 5);
  t.pop();
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/clear/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
// Dynamic color creation
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const count = 10;
  for (let i = 0; i < count; i++) {
    // Create a reusable color for each slice
    const brightness = (i / (count - 1)) * 255;
    const col = t.color(brightness);

    t.push();
    t.translate((i - (count - 1) / 2) * 5, 0);
    t.charColor(col);
    t.char('█');
    t.rect(4, 30);
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/color/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: 800, height: 600 });

// Create reusable colors
const red = t.color(255, 50, 50);
const blue = t.color(50, 100, 255);
// Semi-transparent yellow
const yellow = t.color(255, 255, 0, 150);

t.draw(() => {
  t.background(20);

  // Draw overlapping circles to show mixing
  const x = Math.sin(t.frameCount * 0.05) * 10;

  t.char('O');

  t.push();
  t.translate(-8 + x, 0);
  t.charColor(red);
  t.ellipse(16, 16);
  t.pop();

  t.push();
  t.translate(8 - x, 0);
  t.charColor(blue);
  t.ellipse(16, 16);
  t.pop();

  // Center shape
  t.charColor(yellow);
  t.ellipse(12, 12);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/color2/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const dusk = t.color('#203040');
const copy = t.color(dusk);
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/color3/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
	t.background(5, 7, 16);
	t.ambientLight(20, 22, 26);
	t.pointLight([255, 170, 100], { x: -22, y: -10, z: 18 });
	t.camera(Math.sin(time * 0.3) * 12, -6, 82, 0, 2, 0);

	for (let i = 0; i < 5; i++) {
		t.push();
		t.translate((i - 2) * 10, 4 - Math.sin(time * 1.8 + i) * 3, -i * 4);
		t.rotateZ(Math.sin(time * 1.4 + i) * 10);
		t.rotateY(time * 30 + i * 25);
		t.char(['A', 'V', 'M', 'W', 'Y'][i]);
		t.charColor(255, 140 + i * 18, 110 + i * 20);
		t.cellColor(22 + i * 2, 12 + i * 2, 16 + i * 2);
		t.cone(3 + i * 0.7, 8 + i * 2);
		t.pop();
	}

	label('cone(radius, height)', Math.floor(t.grid.rows / 2) - 3);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/cone/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/createCamera/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
})

let waveShader;

t.setup(async () => {
  // Load shader from file
  waveShader = await t.createFilterShader('./shader.frag');

  // Or create from inline source
  // waveShader = await t.createFilterShader(`#version 300 es
  //   precision highp float;
  //
  //   in vec2 v_uv;
  //   in vec3 v_character;
  //   in vec4 v_primaryColor;
  //   in vec4 v_secondaryColor;
  //
  //   uniform float u_time;
  //
  //   layout(location = 0) out vec4 o_character;
  //   layout(location = 1) out vec4 o_primaryColor;
  //   layout(location = 2) out vec4 o_secondaryColor;
  //
  //   void main() {
  //     // Shader code here
  //   }
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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/createFilterShader/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
  width: 800,
  height: 600,
});

// Create a framebuffer with 50x30 grid cells
const fb = t.createFramebuffer({
  width: 50,
  height: 30
});

t.draw(() => {
  // Render to framebuffer
  fb.begin();
  t.background(255, 0, 0);
  t.charColor(255);
  t.char('A');
  t.rect(20, 10);
  fb.end();

  // Render framebuffer to main canvas
  t.background(0);
  t.rotateZ(t.frameCount * 2);
  t.image(fb);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/createFramebuffer/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: 800, height: 600 });

let customShader;

t.setup(async () => {
  // Define a vertex shader that passes through position and UVs
  const vert = `#version 300 es
    in vec4 a_position;
    in vec2 a_uv;
    out vec2 v_uv;
    void main() {
      gl_Position = a_position;
      v_uv = a_uv;
    }
  `;

  // Define a fragment shader that outputs a solid color
  // Note: Must match the MRT output layout of the textmode pipeline
  const frag = `#version 300 es
    precision highp float;
    in vec2 v_uv;
    layout(location = 0) out vec4 o_character;
    layout(location = 1) out vec4 o_primaryColor;
    layout(location = 2) out vec4 o_secondaryColor;

    void main() {
       // Output character data (RG=char index/value)
       o_character = vec4(0.1, 0.0, 0.0, 0.0);
       // Output primary color (Red)
       o_primaryColor = vec4(1.0, 0.0, 0.0, 1.0);
       // Output secondary color (Transparent)
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
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/createShader/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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

[`TextmodeTexture`](../namespaces/loadables/classes/TextmodeTexture.md)

A TextmodeTexture that can be drawn with image()

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
const t = textmode.create({ width: 800, height: 600 });
const target = { width: 30, height: 15 };

t.draw(() => {
	t.background(0);
	t.charColor(255);
	t.char('*');
	t.rect(target.width, target.height);

	const halfRectWidth = target.width / 2;
	const halfRectHeight = target.height / 2;

	const hovering =
		t.mouse.x !== Number.NEGATIVE_INFINITY &&
		t.mouse.x >= -halfRectWidth &&
		t.mouse.x < halfRectWidth &&
		t.mouse.y >= -halfRectHeight &&
		t.mouse.y < halfRectHeight;

	t.cursor(hovering ? 'pointer' : 'default');
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/cursor/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/cylinder/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: 800, height: 600 });

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
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/deltaTime/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/destroy/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### doubleTap()

```ts
doubleTap(callback): void;
```

Register a callback for double tap gestures.

Double taps reuse the same TouchTapEventData as taps with `taps` set to `2`. This
helper lets you supply a dedicated handler when you want to treat double taps differently.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchTapHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchTapHandler.md) | The function to call when a double tap is detected. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

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
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/doubleTap/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/draw/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 8 });

t.draw(() => {
  t.background(5, 5, 15);

  const time = t.frameCount * 0.02;
  const orbitCount = 12;
  const baseSize = Math.min(t.grid.cols, t.grid.rows);

  // Draw a series of harmonically rotating orbital rings
  for (let i = 0; i < orbitCount; i++) {
    const phase = i / orbitCount;

    t.push();
    // Complex 3D rotation based on index and time
    t.rotateX(time * 23 + i * 15);
    t.rotateY(time * 31 + i * 25);
    t.rotateZ(time * 17 + i * 35);

    // Color shifts through a cool-to-warm spectrum
    t.charColor(150 + 105 * Math.sin(time + phase * 6), 100, 255);

    // Select character based on "depth" or index for texture variety
    t.char(['░', '▒', '▓', '█', '•', '·'][i % 6]);
    t.lineWeight(1 + (i % 3));

    const s = baseSize * (0.4 + 0.6 * Math.sin(time * 0.5 + phase * Math.PI));
    t.ellipse(s, s * 0.7);
    t.pop();
  }

  // Pulsing central star
  t.push();
  t.char('☼');
  t.charColor(255, 255, 200);
  t.rotateZ(-time * 100);
  const pulse = 2 + Math.sin(time * 8) * 0.5;
  t.ellipse(pulse, pulse);
  t.pop();
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/ellipse/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
	t.background(5, 6, 16);
	t.ambientLight(18, 22, 28);
	t.pointLight([255, 190, 120], { x: -20, y: -10, z: 24 });
	t.camera(Math.cos(time * 0.35) * 16, -6, 86, 0, 0, 0);

	for (let i = 0; i < 4; i++) {
		t.push();
		t.translate((i - 1.5) * 12, Math.sin(time * 1.6 + i) * 3, -i * 8);
		t.rotateX(time * 34 + i * 15);
		t.rotateY(time * 42 + i * 20);
		t.char(['o', 'O', '0', '@'][i]);
		t.charColor(255 - i * 20, 150 + i * 20, 140 + i * 28);
		t.cellColor(18 + i * 2, 12 + i * 2, 20 + i * 4);
		t.ellipsoid(4 + i * 1.4, 2.5 + i * 0.8, 6 + i * 1.8);
		t.pop();
	}

	label('ellipsoid(radiusX, radiusY, radiusZ)', Math.floor(t.grid.rows / 2) - 3);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/ellipsoid/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
	t.background(0);

	const time = t.frameCount * 0.02;
	const count = 12;

	for (let i = 0; i < count; i++) {
		const angle = (i / count) * Math.PI * 2 + time;
		const radius = 15 + 5 * Math.sin(time * 3 + i);

		t.push();
		t.translate(Math.cos(angle) * radius, Math.sin(angle) * radius);
		t.rotateZ(angle * 50);
		t.charColor(127 + 127 * Math.sin(i), 127 + 127 * Math.cos(i), 200);
		t.char(['@', '%', '#', '*'][i % 4]);
		t.rect(12, 12);
		t.pop();
	}

	const threshold = 0.4 + 0.2 * Math.sin(time * 2);
	t.filter('threshold', threshold);

	if (Math.floor(time) % 2 === 0) {
		t.filter('invert');
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/filter/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
	t.background(0);

	const time = t.frameCount * 0.02;
	const count = 12;

	for (let i = 0; i < count; i++) {
		const angle = (i / count) * Math.PI * 2 + time;
		const radius = 15 + 5 * Math.sin(time * 3 + i);

		t.push();
		t.translate(Math.cos(angle) * radius, Math.sin(angle) * radius);
		t.rotateZ(angle * 50);
		t.charColor(127 + 127 * Math.sin(i), 127 + 127 * Math.cos(i), 200);
		t.char(['@', '%', '#', '*'][i % 4]);
		t.rect(12, 12);
		t.pop();
	}

	const threshold = 0.4 + 0.2 * Math.sin(time * 2);
	t.filter('threshold', threshold);

	if (Math.floor(time) % 2 === 0) {
		t.filter('invert');
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/filter/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
// Using flipX for symmetry
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const count = 10;
  for (let i = 0; i < count; i++) {
    const phase = i / count;
    const y = (phase - 0.5) * t.grid.rows * 0.8;
    const x = Math.sin(t.frameCount * 0.05 + i) * 10;

    // Draw original
    t.push();
    t.translate(x, y);
    t.char('R');
    t.charColor(255);
    t.point();
    t.pop();

    // Draw mirrored
    t.push();
    t.translate(-x, y);
    t.flipX(true);
    t.char('R');
    t.charColor(255, 100, 100);
    t.point();
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/flipX/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
// Using flipY for vertical reflection
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0, 10, 20);

  const count = 32;
  for (let i = 0; i < count; i++) {
    const x = (i / (count - 1) - 0.5) * t.grid.cols * 0.7;
    const y = -10 + Math.sin(t.frameCount * 0.05 + i) * 2;

    // Draw original (Sky)
    t.push();
    t.translate(x, y);
    t.char('^');
    t.charColor(200, 200, 255);
    t.point();
    t.pop();

    // Draw reflected (Water)
    t.push();
    t.translate(x, -y);
    t.flipY(true);
    t.char('^');
    // Dimmer and bluer for reflection
    t.charColor(50, 100, 200, 150);
    t.point();
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/flipY/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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

t.setup(() => {
  // Set the base layer font size.
  t.fontSize(28);
});

t.draw(() => {
  const currentSize = t.fontSize();
  const pulse = 2 + Math.sin(t.frameCount * 0.08) * 1.5;

  t.background(6, 10, 18);

  drawLabel('FONT SIZE', -5, [255, 230, 120]);
  drawLabel(`${currentSize}px`, 0, [220, 240, 255]);

  t.charColor(120, 220, 255);
  t.char('#');

  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2 + t.frameCount * 0.03;
    const radius = currentSize / 8 + pulse;

    t.push();
    t.translate(Math.cos(angle) * radius, Math.sin(angle) * radius + 6);
    t.point();
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/fontSize/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let target = 60;

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

t.mouseClicked(() => {
	target = target === 60 ? 10 : 60;
	t.frameRate(target);
});

t.draw(() => {
	t.background(0);

	for (let i = 0; i < 18; i++) {
		const angle = t.frameCount * 0.05 + i * 0.35;
		const radius = 4 + i * 0.8;

		t.push();
		t.translate(Math.cos(angle) * radius, Math.sin(angle) * radius);
		t.char(i % 2 === 0 ? '*' : '+');
		t.charColor(80 + i * 8, 255 - i * 6, 120);
		t.point();
		t.pop();
	}

	drawLabel('click to toggle frameRate(10/60)', Math.floor(t.grid.rows / 2) - 4);
	drawLabel(`measured fps: ${t.frameRate().toFixed(1)}`, Math.floor(t.grid.rows / 2) - 2);
	drawLabel(`target: ${target}`, Math.floor(t.grid.rows / 2));
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/frameRate/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
| `source` | \| [`TextmodeFramebuffer`](TextmodeFramebuffer.md) \| [`TextmodeImage`](../namespaces/loadables/classes/TextmodeImage.md) \| [`TextmodeTexture`](../namespaces/loadables/classes/TextmodeTexture.md) \| [`TextmodeVideo`](../namespaces/loadables/classes/TextmodeVideo.md) | The TextmodeFramebuffer, TextmodeImage, TextmodeVideo, or TextmodeTexture to render |
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

const fb = t.createFramebuffer({width: 30, height: 20});

t.draw(() => {
  // Draw something to the framebuffer
  fb.begin();
  t.clear();
  t.charColor(255, 0, 0);
  t.char('A');
  t.rect(20, 10);
  fb.end();

  // Clear main canvas and render framebuffer content
  t.background(0);

  // Render at original size
  t.image(fb);

  // Render scaled version
  // t.image(fb, 60, 40);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/image/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/inputGrid/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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

    // Toggle inversion based on position and time
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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/invert/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: 800, height: 600 });

let playerX = 0;
let playerY = 0;

t.draw(() => {
	t.background(0);

	if (t.isKeyPressed('ArrowUp')) {
		playerY -= 1;
	}
	if (t.isKeyPressed('ArrowDown')) {
		playerY += 1;
	}
	if (t.isKeyPressed('ArrowLeft')) {
		playerX -= 1;
	}
	if (t.isKeyPressed('ArrowRight')) {
		playerX += 1;
	}

	t.char('@');
	t.charColor(255, 255, 0);
	t.translate(playerX, playerY);
	t.point();
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/isKeyPressed/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/isLooping/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: 800, height: 600 });

let lastKey = '?';
let pulse = 0;

t.keyPressed((data) => {
	lastKey = data.key;
	pulse = 6;
});

t.draw(() => {
	t.background(0);

	const glow = Math.max(0, pulse--);
	const brightness = 120 + glow * 20;
	t.charColor(brightness, brightness, 0);

	t.push();
	t.char(lastKey.length ? lastKey[0] : '?');
	t.point();
	t.pop();
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/keyPressed/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: 800, height: 600 });

let lastRelease = '?';
let fade = 0;

t.keyReleased((data) => {
	lastRelease = data.key;
	fade = 10;
});

t.draw(() => {
	t.background(0);

	const glow = Math.max(0, fade--);
	const color = 80 + glow * 17;
	t.charColor(color, color, 255);
	t.char(lastRelease.length ? lastRelease[0] : '?');
	t.point();
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/keyReleased/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
	fontSize: 10,
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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/lightFalloff/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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

    // Points on two different rotating circles
    const x1 = Math.cos(phase1 + time) * radius;
    const y1 = Math.sin(phase1 * 2 + time * 1.5) * radius * 0.5;

    const x2 = Math.cos(phase2 - time * 0.7) * radius * 0.8;
    const y2 = Math.sin(phase2 * 1.5 - time) * radius;

    // Emergent color based on line index
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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/line/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
// Dynamic line thickness
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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/lineWeight/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### loadFont()

```ts
loadFont(fontSource, setActive): Promise<TextmodeFont>;
```

Load a font, optionally setting it as the base layer's active font.

Accepts either a URL string to load a new font, or an existing [TextmodeFont](../namespaces/loadables/classes/TextmodeFont.md)
instance to use as a reusable source.

If `setActive` is true (default), the font is set as the base layer's font.
If `setActive` is false, the font is loaded/initialized and returned without modifying the layer.

The returned font can be reused on other layers via [TextmodeLayer.loadFont](../namespaces/layering/classes/TextmodeLayer.md#loadfont),
which creates a layer-local fork rather than sharing a mutable instance by reference.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `fontSource` | \| `string` \| [`TextmodeFont`](../namespaces/loadables/classes/TextmodeFont.md) | `undefined` | The URL of the font to load, or an existing TextmodeFont instance. |
| `setActive` | `boolean` | `true` | Whether to set the font as the base layer's active font. Defaults to `true`. |

#### Returns

`Promise`\<[`TextmodeFont`](../namespaces/loadables/classes/TextmodeFont.md)\>

The loaded TextmodeFont instance.

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });
const accentLayer = t.layers.add({ fontSize: 24, blendMode: 'additive' });

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
  // Load a font and make it active on the base layer immediately.
  await t.loadFont('../../layering/FROGBLOCK-V2.1.ttf');

  // Preload a second font without changing the active base-layer font.
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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/loadFont/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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

`Promise`\<[`TextmodeImage`](../namespaces/loadables/classes/TextmodeImage.md)\>

A Promise that resolves to a TextmodeImage object

#### Example

```javascript
// Loading and rendering external assets
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let img;

t.setup(async () => {
  // Remote image URL
  const url = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80';
  img = await t.loadImage(url);

  // Configure character mapping for the image
  img.characters(" .:-=+*#%@");
});

t.draw(() => {
  t.background(0);
  if (img) {
    // Pulse image scale and rotation
    const scale = 1 + Math.sin(t.frameCount * 0.05) * 0.1;
    t.rotateZ(Math.sin(t.frameCount * 0.02) * 5);
    t.image(img, t.grid.cols * scale, t.grid.rows * scale);
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/loadImage/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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

`Promise`\<[`TextmodeVideo`](../namespaces/loadables/classes/TextmodeVideo.md)\>

#### Example

```javascript
// Video to ASCII conversion
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let video;

t.setup(async () => {
  const url = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
  video = await t.loadVideo(url);

  // Configure video playback
  video.play();
  video.loop();

  // Set ASCII density characters
  video.characters(" .:-=+*#%@");
});

t.draw(() => {
  t.background(0);
  if (video) {
    // Rotate and draw the video
    t.rotateY(t.frameCount);
    t.image(video, 40, 30);
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/loadVideo/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: 800, height: 600 });

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
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/longPress/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/lookAt/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: 800, height: 600, fontSize: 16 });

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
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/loop/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

const echoes = [];

t.mouseClicked((data) => {
	if (data.position.x === Number.NEGATIVE_INFINITY) return;
	echoes.push({ x: data.position.x, y: data.position.y, age: 0 });
});

t.draw(() => {
	t.background(0);

	for (let i = 0; i < echoes.length; i++) {
		const echo = echoes[i];
		echo.age += 1;
		const maxAge = 60;

		if (echo.age > maxAge) {
			echoes.splice(i, 1);
			continue;
		}

		t.push();
		t.translate(echo.x, echo.y);

		const progress = echo.age / maxAge;
		const radius = progress * 30;
		const alpha = 255 * (1 - progress);

		t.charColor(100, 200, 255, alpha);
		t.char('○');
		t.ellipse(radius, radius);

		if (progress > 0.2) {
			t.charColor(50, 100, 255, alpha * 0.5);
			t.char('·');
			t.ellipse(radius * 0.6, radius * 0.6);
		}

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
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/mouseClicked/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

const trail = [];
let previous = null;

t.mouseMoved((data) => {
	if (data.position.x === Number.NEGATIVE_INFINITY) return;

	const x = data.position.x;
	const y = data.position.y;
	const dx = previous ? x - previous.x : 0;
	const dy = previous ? y - previous.y : 0;
	previous = { x, y };

	trail.push({
		x,
		y,
		vx: dx * 0.2 + (Math.random() - 0.5),
		vy: dy * 0.2 + (Math.random() - 0.5),
		life: 1.0,
		char: ['+', '*', '.', '·'][Math.floor(Math.random() * 4)],
	});
});

t.draw(() => {
	t.background(0);

	for (let i = trail.length - 1; i >= 0; i--) {
		const particle = trail[i];
		particle.x += particle.vx;
		particle.y += particle.vy;
		particle.life -= 0.02;

		if (particle.life <= 0) {
			trail.splice(i, 1);
			continue;
		}

		t.push();
		t.translate(particle.x, particle.y);
		t.charColor(255 * particle.life, 100 + 155 * (1 - particle.life), 255);
		t.char(particle.char);
		t.point();
		t.pop();
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/mouseMoved/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let isPressing = false;
const particles = [];

t.mousePressed(() => {
	isPressing = true;
});

t.mouseReleased(() => {
	isPressing = false;
});

t.draw(() => {
	t.background(0);

	if (isPressing && t.mouse.x !== Number.NEGATIVE_INFINITY) {
		for (let i = 0; i < 5; i++) {
			const angle = Math.random() * Math.PI * 2;
			const speed = Math.random() * 0.5 + 0.2;

			particles.push({
				x: t.mouse.x,
				y: t.mouse.y,
				vx: Math.cos(angle) * speed,
				vy: Math.sin(angle) * speed,
				life: 1.0,
			});
		}
	}

	for (let i = particles.length - 1; i >= 0; i--) {
		const particle = particles[i];
		particle.x += particle.vx;
		particle.y += particle.vy;
		particle.life -= 0.02;

		if (particle.life <= 0) {
			particles.splice(i, 1);
			continue;
		}

		t.push();
		t.translate(particle.x, particle.y);
		const chars = ['.', 'o', '*', '@'];
		t.char(chars[Math.floor(particle.life * 3.99)]);
		t.charColor(255, particle.life * 255, 100);
		t.point();
		t.pop();
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/mousePressed/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: 800, height: 600 });

const lines = [];
let dragStart = null;

t.mousePressed((data) => {
	if (data.position.x === Number.NEGATIVE_INFINITY) return;
	dragStart = { x: data.position.x, y: data.position.y };
});

t.mouseReleased((data) => {
	if (!dragStart || data.position.x === Number.NEGATIVE_INFINITY) return;

	const x = data.position.x;
	const y = data.position.y;
	const centerX = (dragStart.x + x) / 2;
	const centerY = (dragStart.y + y) / 2;
	const dx = x - dragStart.x;
	const dy = y - dragStart.y;

	lines.push({ cx: centerX, cy: centerY, dx, dy, age: 0, maxAge: 30 });
	dragStart = null;
});

t.draw(() => {
	t.background(0);

	for (let i = lines.length - 1; i >= 0; i--) {
		const line = lines[i];
		line.age += 1;

		if (line.age >= line.maxAge) {
			lines.splice(i, 1);
			continue;
		}

		const life = 1 - line.age / line.maxAge;
		const brightness = Math.round(150 * life);

		t.push();
		t.charColor(brightness, brightness, 255);
		t.char('-');
		t.lineWeight(2);
		t.translate(line.cx, line.cy);
		t.line(-line.dx / 2, -line.dy / 2, line.dx / 2, line.dy / 2);
		t.pop();
	}

	if (dragStart && t.mouse.x !== Number.NEGATIVE_INFINITY) {
		const centerX = (dragStart.x + t.mouse.x) / 2;
		const centerY = (dragStart.y + t.mouse.y) / 2;
		const dx = t.mouse.x - dragStart.x;
		const dy = t.mouse.y - dragStart.y;

		t.push();
		t.charColor(255, 200, 0);
		t.char('o');
		t.lineWeight(2);
		t.translate(centerX, centerY);
		t.line(-dx / 2, -dy / 2, dx / 2, dy / 2);
		t.pop();
	}
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/mouseReleased/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: 800, height: 600 });

const rings = [];

t.mouseScrolled((data) => {
	if (data.position.x === Number.NEGATIVE_INFINITY) return;

	const scrollSpeed = 2;
	const intensity = Math.min(scrollSpeed * 30, 255);
	const scrollDown = (data.delta?.y || 0) > 0;

	rings.push({
		x: data.position.x,
		y: data.position.y,
		radius: 1,
		maxRadius: 5 + scrollSpeed * 0.5,
		color: intensity,
		scrollDown,
		age: 0,
		maxAge: 20,
	});
});

t.draw(() => {
	t.background(0);

	for (let i = rings.length - 1; i >= 0; i--) {
		const ring = rings[i];
		ring.age += 1;
		ring.radius += (ring.maxRadius - ring.radius) * 0.15;

		if (ring.age >= ring.maxAge) {
			rings.splice(i, 1);
			continue;
		}

		const life = 1 - ring.age / ring.maxAge;
		const brightness = Math.round(ring.color * life);

		t.push();

		if (ring.scrollDown) {
			t.charColor(brightness * 0.5, brightness * 0.8, 255);
		} else {
			t.charColor(255, brightness * 0.6, brightness * 0.3);
		}

		t.translate(ring.x, ring.y);

		for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 6) {
			const ox = Math.round(Math.cos(angle) * ring.radius);
			const oy = Math.round(Math.sin(angle) * ring.radius);

			t.push();
			t.translate(ox, oy);
			t.char('o');
			t.point();
			t.pop();
		}

		t.pop();
	}
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/mouseScrolled/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/noLights/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: 800, height: 600 });

let paused = false;

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

	if (!paused && t.frameCount >= 120) {
		paused = true;
		t.noLoop();
	}

	t.push();
	t.rotateZ(t.frameCount * 3);
	t.char('A');
	t.charColor(paused ? 255 : 100, paused ? 100 : 255, 160);
	t.rect(14, 14);
	t.pop();

	drawLabel(paused ? 'paused by noLoop()' : 'auto-pause at frame 120', -12);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/noLoop/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/ortho/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/perspective/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/pinch/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(10, 10, 20);

  const time = t.frameCount * 0.05;
  const radius = Math.min(t.grid.cols, t.grid.rows) * 0.35;

  // Draw a rhythmic particle trail using point()
  for (let i = 0; i < 30; i++) {
    const angle = time - i * 0.1;
    const r = radius * (0.8 + 0.4 * Math.sin(time * 0.3 + i * 0.2));
    const x = Math.cos(angle) * r;
    const y = Math.sin(angle) * r;

    const life = 1 - i / 30;
    t.push();
    t.translate(x, y);
    t.char(['*', '·', '•', '°'][i % 4]);
    t.charColor(255 * life, 150 * life, 255);
    t.point();
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/point/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/pointLight/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
  t.background(0);

  // Draw three rotating shapes with isolated transformations and colors
  for (let i = 0; i < 3; i++) {
    t.push(); // Save state
    t.translate(i * 12 - 12, 0);
    t.rotateZ(t.frameCount * (1 + i * 0.5));
    t.charColor(100 + i * 70, 255 - i * 50, 150);
    t.char(['*', '@', '#'][i]);
    t.rect(8, 8);
    t.pop(); // Restore state - next iteration starts fresh
  }
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/pop/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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

  // Draw three rotating shapes with isolated transformations and colors
  for (let i = 0; i < 3; i++) {
    t.push(); // Save state
    t.translate(i * 12 - 12, 0);
    t.rotateZ(t.frameCount * (1 + i * 0.5));
    t.charColor(100 + i * 70, 255 - i * 50, 150);
    t.char(['*', '@', '#'][i]);
    t.rect(8, 8);
    t.pop(); // Restore state - next iteration starts fresh
  }
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/push/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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

  // Draw squares from back to front for a depth effect
  for (let i = squareCount; i > 0; i--) {
    const progress = i / squareCount;
    const size = maxSize * Math.pow(progress, 1.5);
    const rotation = time + i * 15;

    t.push();
    t.rotateZ(rotation);

    // Dynamic coloring based on "depth"
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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/rect/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/redraw/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/resetCamera/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### resetMatrix()

```ts
resetMatrix(): void;
```

Reset the current model transform to identity.

This clears translation, rotation, and scale state for subsequent draw calls.

#### Returns

`void`

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

t.setup(async() => {
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

      // Characters: slow/spatial pattern (avoid rapid flickering)
      float charPattern = floor(r * 8.0) / 8.0 + sin(a * 6.0 + u_time * 0.3) * 0.1;
      o_char = vec4(charPattern, 0.0, 0.0, 1.0);

      // Colors: can animate rapidly for smooth visual effect
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

    // Draw the portal background
    t.rect(t.grid.cols, t.grid.rows);
  }

  // Reset to default shader for foreground objects
  t.resetShader();

  // Draw floating objects in front of the portal
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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/resetShader/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/resizeCanvas/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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

  // Draw three rectangles rotating in 3D space with different axes
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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/rotate/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/rotateGesture/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
// A field of oscillating slabs
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const cols = 5;
  const rows = 5;
  const spacing = 12;

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      t.push();
      // Position in grid
      t.translate((x - (cols - 1) / 2) * spacing, (y - (rows - 1) / 2) * spacing);

      // Rotation with phase shift based on position
      const angle = t.frameCount * 4 + (x + y) * 20;
      t.rotateX(angle);

      // Aesthetic coloring based on rotation phase
      const intensity = Math.sin(angle * Math.PI / 180);
      const brightness = 127 + 127 * intensity;

      t.charColor(brightness, 150, 255 - brightness);
      t.char(Math.abs(intensity) > 0.5 ? '█' : '▒');

      t.rect(10, 8);
      t.pop();
    }
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/rotateX/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
// A vertical stack of spinning glyphs
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const count = 15;
  const spacing = 4;

  for (let i = 0; i < count; i++) {
    const phase = i / count;
    const angle = t.frameCount * 3 + i * 20;

    t.push();
    // Stack vertically
    t.translate(0, (i - (count - 1) / 2) * spacing);

    // Rotate around Y axis (vertical spin)
    t.rotateY(angle);

    // Dynamic character selection based on "side" of rotation
    const side = Math.cos(angle * Math.PI / 180);
    t.char(side > 0 ? '▓' : '░');

    // Cyberpunk color palette
    t.charColor(100, 255, 200);
    if (Math.abs(side) < 0.2) t.charColor(255, 255, 255); // Flash on edge

    t.rect(20, 3);
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/rotateY/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
// Layered rotation and symmetry
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(10, 5, 20);

  const layers = 8;
  const time = t.frameCount;

  for (let i = 0; i < layers; i++) {
    const progress = i / layers;
    const angle = time * (1 + progress) + i * 45;

    t.push();
    // Rotate around Z axis (flat spin)
    t.rotateZ(angle);

    // Dynamic size and character
    const size = 30 - i * 3;
    t.char(['.', '=', '+', '!', '?'][i % 5]);

    // Neon color gradient
    t.charColor(255, 100 + i * 20, 200 - i * 10);

    t.rect(size, size);
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/rotateZ/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/setCamera/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
// Passing CPU values to Shaders
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
    // Sync CPU state to GPU uniform
    t.setUniform('u_time', t.frameCount * 0.001);
    t.rect(t.grid.cols, t.grid.rows);
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/setUniform/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
// Bulk uniform updates
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
      u_mouse: [t.mouse.x, t.mouse.y]
    });
    t.rect(t.grid.cols, t.grid.rows);
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/setUniforms/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
  // One-time setup work can allocate reusable resources.
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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/setup/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
| `shader` | `null` \| [`TextmodeShader`](TextmodeShader.md) | The custom shader to use, or `null` to reset to the default shader. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

let glitchShader;

t.setup(async() => {
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

    // Draw multiple shapes with the same shader
    t.translate(10, 10);
    t.rect(20, 20);
    t.translate(25, 0);
    t.rect(20, 20);

    t.resetShader(); // Reset to default when done
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/shader/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/sphere/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/swipe/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### tap()

```ts
tap(callback): void;
```

Register a callback for tap gestures.

A tap is fired when the user quickly touches and releases the canvas without travelling far.
Use TouchTapEventData.taps to determine whether the gesture is a single or multi tap.

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/tap/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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

	const fps = 32.5 + Math.sin(Date.now() * 0.001) * 27.5;
	t.targetFrameRate(fps);

	const pulse = Math.sin(t.frameCount * 0.1) * 10 + 15;

	t.charColor(255, 100, 200);
	t.char('O');
	t.ellipse(pulse, pulse);

	t.charColor(255);
	t.char('.');
	t.ellipse(pulse * 0.6, pulse * 0.6);

	t.push();
	t.translate(0, Math.floor(t.grid.rows / 2) - 3);
	t.charColor(0, 255, 100);
	t.char('|');
	t.rect(fps * 0.5, 1);
	t.pop();

	drawLabel(`targetFrameRate: ${t.targetFrameRate().toFixed(1)}`, Math.floor(t.grid.rows / 2) - 1);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/targetFrameRate/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/torus/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/touchCancelled/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/touchEnded/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/touchMoved/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### touchStarted()

```ts
touchStarted(callback): void;
```

Set a callback function that will be called when a touch point begins.

The callback receives TouchEventData containing the touch that triggered the event,
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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/touchStarted/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
// Rhythmic translation field
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const count = 32;
  const time = t.frameCount * 0.05;

  for (let i = 0; i < count; i++) {
    const phase = i / count;
    const x = (phase - 0.5) * t.grid.cols * 0.8;
    const y = Math.sin(time + phase * 10) * 15;

    t.push();
    // Displace glyph in space
    t.translate(x, y, Math.cos(time + phase * 5) * 10);

    t.charColor(100, 155 + y * 5, 255);
    t.char('≈');
    t.point();
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/translate/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  t.push();
  // Move based on sine wave
  t.translateX(Math.sin(t.frameCount * 0.05) * 20);

  // Use the actual position to determine rotation speed
  const x = t.translateX();
  t.rotateZ(t.frameCount + x);

  t.charColor(150 + x * 5, 200, 255);
  t.char('X');
  t.rect(10, 10);
  t.pop();
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/translateX/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
// Horizontal oscillation field
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0, 10, 0);

  const count = 64;
  for (let i = 0; i < count; i++) {
    t.push();
    // Vertical position
    t.translateY((i - (count - 1) / 2));

    // Oscillating horizontal position
    const x = Math.sin(t.frameCount * 0.04 + i * 0.5) * 25;
    t.translateX(x);

    t.charColor(0, 255, 100);
    t.char('█');
    t.rect(4, 2);
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/translateX2/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const yPos = Math.sin(t.frameCount * 0.03) * 15;

  t.push();
  t.translateY(yPos);

  // Visualize the Y coordinate
  const currentY = t.translateY();
  if (currentY > 0) t.char('▲');
  else t.char('▼');

  t.charColor(255, 255 - Math.abs(currentY) * 10, 100);
  t.rect(8, 8);
  t.pop();
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/translateY/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
// Cascading vertical motion
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0, 0, 10);

  const drops = 128;
  for (let i = 0; i < drops; i++) {
    t.push();
    // Horizontal position
    t.translateX((i - (drops - 1) / 2) * 8);

    // Vertical fall with wrapping
    const speed = 1 + (i % 3) * 0.5;
    const y = (t.frameCount * speed + i * 20) % (t.grid.rows + 10) - (t.grid.rows + 10) / 2;
    t.translateY(y);

    t.charColor(100, 200, 255);
    t.char('|');
    t.point();
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/translateY2/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  t.push();
  t.translateZ(Math.sin(t.frameCount * 0.05) * 50);

  const depth = t.translateZ();

  // Fade out as it goes further back (manual fog effect)
  const alpha = 50 + (depth + 50) * 2;
  t.charColor(255, 255, 255, alpha);

  t.char('Z');
  t.rect(10, 10);
  t.pop();
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/translateZ/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
  t.background(0);
  t.char('O');
  t.charColor(180, 120, 255);
  t.translateZ(Math.sin(t.frameCount * 0.05) * 20); // Pulse in/out
  t.rect(12, 12);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/translateZ2/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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

    // Coordinate rotation for a kaleidoscopic effect
    const x = Math.cos(angle + time * 0.5) * radius * pulse;
    const y = Math.sin(angle + time * 0.5) * radius * pulse;

    t.push();
    t.translate(x, y);
    t.rotateZ(i * 30 + time * 100);

    // Aesthetic color gradient
    t.charColor(150 + pulse * 105, 100, 255 - pulse * 100);
    t.char(['/', '\\', '|', '-'][i % 4]);
    t.lineWeight(1 + Math.floor(pulse * 3));

    const s = 4 + pulse * 8;
    t.triangle(
      0, -s,           // Top vertex
      -s, s * 0.7,     // Bottom left
      s, s * 0.7       // Bottom right
    );
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/triangle/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmodifier/windowResized/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>
