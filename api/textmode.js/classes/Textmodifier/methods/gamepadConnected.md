---
layout: doc
editLink: true
title: gamepadConnected
description: Register the single-callback handler for gamepad connection events.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / gamepadConnected

# Method: gamepadConnected()

```ts
gamepadConnected(callback): void;
```

Register the single-callback handler for gamepad connection events.

This is a legacy-style single-callback shortcut for the `'gamepadConnected'` event.
Calling it replaces the previous callback registered through this same method while
leaving any listeners added via [Textmodifier.on](on.md) untouched.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`GamepadConnectionEventHandler`](../../../namespaces/input/namespaces/gamepad/type-aliases/GamepadConnectionEventHandler.md) | Handler to run with gamepad connection data when a controller connects. |

## Returns

`void`

## Example

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
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
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

