---
layout: doc
editLink: true
title: gamepadAxisChanged
description: Register the single-callback handler for meaningful gamepad axis changes.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / gamepadAxisChanged

# Method: gamepadAxisChanged()

```ts
gamepadAxisChanged(callback): void;
```

Register the single-callback handler for meaningful gamepad axis changes.

Axis callbacks are derived from per-frame polling, not native DOM events. For continuous
stick or trigger state, polling [Textmodifier.gamepads](../properties/gamepads.md) inside `draw()` is often the
simpler choice; use this callback when you specifically want change notifications.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`GamepadAxisEventHandler`](../../../namespaces/input/namespaces/gamepad/type-aliases/GamepadAxisEventHandler.md) | Handler to run with gamepad axis data when an axis changes. |

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

let lastAxis = 'waiting';

t.gamepadAxisChanged((data) => {
	const name = data.standardAxisName || 'axis ' + data.axisIndex;
	lastAxis = name + ' ' + data.value.toFixed(2);
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

