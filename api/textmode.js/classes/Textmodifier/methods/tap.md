---
layout: doc
editLink: true
title: tap
description: Register a callback for tap gestures.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / tap

# Method: tap()

```ts
tap(callback): void;
```

Register a callback for tap gestures.

A tap is fired when the user quickly touches and releases the canvas without travelling far.
Use [input.touch.TouchTapEventData.taps](../../../namespaces/input/namespaces/touch/interfaces/TouchTapEventData.md#property-taps) to determine whether the gesture is a single or multi tap.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchTapHandler`](../../../namespaces/input/namespaces/touch/type-aliases/TouchTapHandler.md) | Handler to run when a tap gesture is detected. |

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

const pulses = [];
let count = 0;
let last = 'WAITING';

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
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

