---
layout: doc
editLink: true
title: TextmodeCamera
description: Mutable camera object used for p5-style camera workflows.
category: Classes
api: true
kind: Class
lastModified: 2026-04-23
hasConstructor: true
---

[textmode.js](../index.md) / TextmodeCamera

# Class: TextmodeCamera

Mutable camera object used for p5-style camera workflows.

Instances can be created with [Textmodifier.createCamera](Textmodifier.md#createcamera) and activated with
[Textmodifier.setCamera](Textmodifier.md#setcamera). Mutating the object does not affect rendering until
it is applied again with `setCamera`.

## Constructors

### Constructor

```ts
new TextmodeCamera(
   eyeX, 
   eyeY, 
   eyeZ, 
   targetX, 
   targetY, 
   targetZ, 
   upX, 
   upY, 
   upZ): TextmodeCamera;
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `eyeX` | `number` | `0` |
| `eyeY` | `number` | `0` |
| `eyeZ` | `number` | `0` |
| `targetX` | `number` | `0` |
| `targetY` | `number` | `0` |
| `targetZ` | `number` | `0` |
| `upX` | `number` | `0` |
| `upY` | `number` | `1` |
| `upZ` | `number` | `0` |

#### Returns

`TextmodeCamera`

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let camera;

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

t.setup(() => {
	t.perspective(58, 0.1, 4096);
	camera = t.createCamera();
});

t.draw(() => {
	t.background(8, 10, 24);

	camera.setPosition(Math.sin(t.frameCount * 0.03) * 26, 8, 54).lookAt(0, 0, 0);
	t.setCamera(camera);
	t.char('+');
	t.charColor(120, 180, 255);
	t.line(-22, 0, 22, 0);
	t.char('#');
	t.charColor(255, 160, 120);
	t.rect(6, 6);
	label(`eyeX ${camera.eyeX.toFixed(1)}`, Math.floor(t.grid.rows / 2) - 3);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeCamera/eyeX/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let camera;

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

t.setup(() => {
	t.perspective(58, 0.1, 4096);
	camera = t.createCamera();
});

t.draw(() => {
	t.background(8, 10, 24);

	camera.setPosition(0, 8 + Math.sin(t.frameCount * 0.04) * 12, 52).lookAt(0, 0, 0);
	t.setCamera(camera);

	for (let i = 0; i < 3; i++) {
		t.push();
		t.translate((i - 1) * 12, -8 + i * 6, -i * 10);
		t.char(['A', 'P', 'E'][i]);
		t.charColor(120 + i * 30, 160 + i * 20, 255);
		t.triangle(0, -4, -4, 4, 4, 4);
		t.pop();
	}

	label(`eyeY ${camera.eyeY.toFixed(1)}`, Math.floor(t.grid.rows / 2) - 3);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeCamera/eyeY/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let camera;

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

t.setup(() => {
	t.perspective(58, 0.1, 4096);
	camera = t.createCamera();
});

t.draw(() => {
	t.background(8, 10, 24);

	camera.setPosition(0, 0, 36 + Math.sin(t.frameCount * 0.03) * 18).lookAt(0, 0, 0);
	t.setCamera(camera);
	t.char('0');
	t.charColor(255, 180, 120);
	t.ellipse(10, 10);
	t.char('+');
	t.charColor(120, 180, 255);
	t.arc(18, 18, 30, 330);
	label(`eyeZ ${camera.eyeZ.toFixed(1)}`, Math.floor(t.grid.rows / 2) - 3);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeCamera/eyeZ/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let camera;

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

t.setup(() => {
	t.perspective(58, 0.1, 4096);
	camera = t.createCamera().setPosition(0, 10, 46);
});

t.draw(() => {
	t.background(8, 10, 24);

	camera.lookAt(Math.sin(t.frameCount * 0.03) * 16, 0, 0);
	t.setCamera(camera);

	for (let i = 0; i < 5; i++) {
		t.push();
		t.translate((i - 2) * 8, 0, -i * 8);
		t.char(['L', 'E', 'F', 'T', 'R'][i]);
		t.charColor(130 + i * 20, 160, 255 - i * 24);
		t.rect(5, 5);
		t.pop();
	}

	t.push();
	t.translate(camera.targetX, 0, 0);
	t.char('*');
	t.charColor(255, 255, 120);
	t.point();
	t.pop();

	label(`targetX ${camera.targetX.toFixed(1)}`, Math.floor(t.grid.rows / 2) - 3);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeCamera/targetX/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let camera;

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

t.setup(() => {
	t.perspective(58, 0.1, 4096);
	camera = t.createCamera().setPosition(0, 10, 46);
});

t.draw(() => {
	t.background(8, 10, 24);

	camera.lookAt(0, Math.sin(t.frameCount * 0.03) * 12, 0);
	t.setCamera(camera);
	t.char('O');
	t.charColor(120, 180, 255);
	t.ellipse(16, 8);
	t.push();
	t.translate(0, camera.targetY, 0);
	t.char('*');
	t.charColor(255, 255, 120);
	t.point();
	t.pop();
	label(`targetY ${camera.targetY.toFixed(1)}`, Math.floor(t.grid.rows / 2) - 3);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeCamera/targetY/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let camera;

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

t.setup(() => {
	t.perspective(58, 0.1, 4096);
	camera = t.createCamera().setPosition(0, 8, 44);
});

t.draw(() => {
	t.background(8, 10, 24);

	camera.lookAt(0, 0, -20 + Math.sin(t.frameCount * 0.03) * 18);
	t.setCamera(camera);

	for (let i = 0; i < 4; i++) {
		t.push();
		t.translate(0, 0, -i * 14);
		t.char(['N', 'E', 'A', 'R'][i]);
		t.charColor(150 + i * 20, 150, 255 - i * 30);
		t.rect(8 - i, 8 - i);
		t.pop();
	}

	t.push();
	t.translate(0, 0, camera.targetZ);
	t.char('*');
	t.charColor(255, 255, 120);
	t.point();
	t.pop();

	label(`targetZ ${camera.targetZ.toFixed(1)}`, Math.floor(t.grid.rows / 2) - 3);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeCamera/targetZ/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let camera;

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

t.setup(() => {
	t.perspective(58, 0.1, 4096);
	camera = t.createCamera().setPosition(0, 0, 54).lookAt(0, 0, 0);
});

t.draw(() => {
	t.background(8, 10, 24);

	camera.setUp(Math.sin(t.frameCount * 0.03) * 0.9, 1, 0);
	t.setCamera(camera);
	t.char('-');
	t.charColor(120, 180, 255);
	for (let i = -2; i <= 2; i++) t.line(-22, i * 4, 22, i * 4);
	label(`upX ${camera.upX.toFixed(2)}`, Math.floor(t.grid.rows / 2) - 3);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeCamera/upX/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let camera;

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

t.setup(() => {
	t.perspective(58, 0.1, 4096);
	camera = t.createCamera().setPosition(0, 0, 54).lookAt(0, 0, 0);
});

t.draw(() => {
	t.background(8, 10, 24);

	camera.setUp(0, 0.25 + 0.75 * (0.5 + 0.5 * Math.sin(t.frameCount * 0.03)), 0.4);
	t.setCamera(camera);
	t.char('A');
	t.charColor(255, 170, 120);
	t.triangle(0, -12, -10, 10, 10, 10);
	label(`upY ${camera.upY.toFixed(2)}`, Math.floor(t.grid.rows / 2) - 3);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeCamera/upY/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let camera;

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

t.setup(() => {
	t.perspective(58, 0.1, 4096);
	camera = t.createCamera().setPosition(0, 0, 54).lookAt(0, 0, 0);
});

t.draw(() => {
	t.background(8, 10, 24);

	camera.setUp(0, 1, Math.sin(t.frameCount * 0.03) * 0.9);
	t.setCamera(camera);
	t.char('+');
	t.charColor(120, 180, 255);
	t.arc(18, 18, 45, 315);
	t.char('0');
	t.charColor(255, 170, 120);
	t.ellipse(6, 6);
	label(`upZ ${camera.upZ.toFixed(2)}`, Math.floor(t.grid.rows / 2) - 3);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeCamera/upZ/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let originalCamera;
let clonedCamera;

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

t.setup(() => {
	t.perspective(58, 0.1, 4096);
	originalCamera = t.createCamera().setPosition(-28, 12, 28).lookAt(0, 0, 0);
	clonedCamera = originalCamera.copy().setPosition(28, 12, 28);
});

t.draw(() => {
	t.background(8, 10, 24);

	const time = t.frameCount * 0.025;
	clonedCamera.lookAt(Math.sin(time) * 10, 0, 0);
	t.setCamera(Math.floor(t.frameCount / 120) % 2 === 0 ? originalCamera : clonedCamera);

	for (let i = 0; i < 5; i++) {
		t.push();
		t.translate((i - 2) * 10, Math.sin(time * 2 + i) * 3, -i * 8);
		t.rotateY(t.frameCount * (0.8 + i * 0.1));
		t.char(['O', 'R', 'I', 'G', '!'][i]);
		t.charColor(140 + i * 20, 120 + i * 16, 255 - i * 20);
		t.ellipse(5 + i, 3 + i * 0.6);
		t.pop();
	}

	label('copy() makes an independent clone', Math.floor(t.grid.rows / 2) - 3);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeCamera/copy/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let camera;

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

t.setup(() => {
	t.perspective(58, 0.1, 4096);
	camera = t.createCamera().setPosition(0, 14, 42);
});

t.draw(() => {
	t.background(8, 10, 24);

	const time = t.frameCount * 0.03;
	camera.lookAt(Math.cos(time) * 12, Math.sin(time * 0.7) * 8, Math.sin(time) * 14);
	t.setCamera(camera);

	for (let i = 0; i < 4; i++) {
		t.push();
		t.translate((i - 1.5) * 10, -6 + i * 4, -i * 10);
		t.rotateZ(t.frameCount * (0.8 + i * 0.1));
		t.char(['A', 'B', 'C', 'D'][i]);
		t.charColor(120 + i * 30, 150 + i * 20, 255 - i * 30);
		t.triangle(0, -4, -4, 4, 4, 4);
		t.pop();
	}

	t.push();
	t.translate(camera.targetX, camera.targetY, camera.targetZ);
	t.char('*');
	t.charColor(255, 255, 120);
	t.point();
	t.pop();

	label('lookAt() tracks the moving marker', Math.floor(t.grid.rows / 2) - 3);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeCamera/lookAt/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let camera;
let previousX = 0;

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

t.setup(() => {
	t.perspective(58, 0.1, 4096);
	camera = t.createCamera().setPosition(0, 6, 48).lookAt(0, 6, -40);
});

t.draw(() => {
	t.background(8, 10, 24);

	const nextX = Math.sin(t.frameCount * 0.02) * 18;
	camera.move(nextX - previousX, 0, 0);
	previousX = nextX;
	t.setCamera(camera);

	for (let i = 0; i < 7; i++) {
		const z = -i * 14;
		t.push();
		t.translate(0, 0, z);
		t.char('|');
		t.charColor(120, 180, 255);
		t.line(-12, 0, -12, 10);
		t.line(12, 0, 12, 10);
		t.translate(0, 5, 0);
		t.char('+');
		t.line(-12, 0, 12, 0);
		t.pop();
	}

	label('move() strafes eye and target together', Math.floor(t.grid.rows / 2) - 3);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeCamera/move/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let camera;

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

t.setup(() => {
	t.perspective(58, 0.1, 4096);
	camera = t.createCamera();
});

t.draw(() => {
	t.background(8, 10, 24);

	const time = t.frameCount * 0.02;
	camera.setPosition(Math.cos(time) * 34, 10 + Math.sin(time * 0.7) * 8, Math.sin(time) * 34).lookAt(0, 0, 0);
	t.setCamera(camera);

	for (let i = 0; i < 3; i++) {
		t.push();
		t.translate((i - 1) * 18, 0, -i * 8);
		t.rotateY(t.frameCount * (1 + i * 0.25));
		t.char(['L', 'M', 'R'][i]);
		t.charColor(255 - i * 60, 120 + i * 30, 120 + i * 50);
		t.rect(8, 12);
		t.pop();
	}

	label('setPosition() orbits three towers', Math.floor(t.grid.rows / 2) - 3);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeCamera/setPosition/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let camera;

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

t.setup(() => {
	t.perspective(58, 0.1, 4096);
	camera = t.createCamera().setPosition(0, 0, 54).lookAt(0, 0, 0);
});

t.draw(() => {
	t.background(8, 10, 24);

	const time = t.frameCount * 0.025;
	camera.setUp(Math.sin(time) * 0.8, 1, Math.cos(time) * 0.6);
	t.setCamera(camera);

	for (let i = 0; i < 6; i++) {
		t.char(i % 2 === 0 ? '-' : '=');
		t.charColor(110 + i * 18, 180, 255);
		t.line(-24, -10 + i * 4, 24, -10 + i * 4);
	}

	t.char('#');
	t.charColor(255, 170, 120);
	t.rect(6, 6);
	label('setUp() banks and rolls the horizon', Math.floor(t.grid.rows / 2) - 3);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeCamera/setUp/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>
