---
layout: doc
editLink: true
title: ease
description: Apply an easing curve to a normalized amount.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / ease

# Method: ease()

```ts
ease(name, amount): number;
```

Apply an easing curve to a normalized amount.

Inputs are clamped to the 0-1 range for animation-friendly behavior.
Outputs are not clamped, so back, elastic, and bounce curves can overshoot.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | \| `"linear"` \| `"inQuad"` \| `"outQuad"` \| `"inOutQuad"` \| `"inCubic"` \| `"outCubic"` \| `"inOutCubic"` \| `"inQuart"` \| `"outQuart"` \| `"inOutQuart"` \| `"inQuint"` \| `"outQuint"` \| `"inOutQuint"` \| `"inSine"` \| `"outSine"` \| `"inOutSine"` \| `"inExpo"` \| `"outExpo"` \| `"inOutExpo"` \| `"inCirc"` \| `"outCirc"` \| `"inOutCirc"` \| `"inBack"` \| `"outBack"` \| `"inOutBack"` \| `"inElastic"` \| `"outElastic"` \| `"inOutElastic"` \| `"inBounce"` \| `"outBounce"` \| `"inOutBounce"` | Easing curve name. |
| `amount` | `number` | Normalized amount to ease. |

## Returns

`number`

Eased amount.

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
const duration = 120;
const curves = [
	{ name: 'linear', char: 'o', y: -6, color: [120, 190, 255] },
	{ name: 'inQuad', char: 'q', y: -3, color: [255, 210, 120] },
	{ name: 'outSine', char: 's', y: 0, color: [255, 140, 180] },
	{ name: 'inOutCubic', char: '@', y: 3, color: [120, 255, 170] },
	{ name: 'outBounce', char: 'b', y: 6, color: [190, 160, 255] },
];

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

function plot(x, y, char, r, g, b) {
	t.push();
	t.translate(Math.round(x), y);
	t.charColor(r, g, b);
	t.char(char);
	t.point();
	t.pop();
}

t.draw(() => {
	t.background(5, 8, 18);

	const amount = (t.frameCount % duration) / duration;
	const labelWidth = 10;
	const width = Math.max(8, Math.min(24, t.grid.cols - labelWidth - 10));
	const totalWidth = labelWidth + 2 + width;
	const labelX = -Math.floor(totalWidth / 2);
	const left = labelX + labelWidth + 2;

	for (const curve of curves) {
		const eased = t.ease(curve.name, amount);
		const x = t.lerp(left, left + width, eased);
		const [r, g, b] = curve.color;

		drawText(curve.name, labelX, curve.y - 1, r, g, b);

		for (let step = 0; step <= width; step++) {
			plot(left + step, curve.y, '-', 70, 95, 140);
		}

		plot(x, curve.y, curve.char, r, g, b);
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	const amount = (t.frameCount % duration) / duration;

	drawText('TEXTMODIFIER.EASE', x, y++, 100, 255, 140);
	drawText('----------------------', x, y++, 80, 100, 150);
	drawText('CURVES IN MOTION', x, y++, 100, 220, 255);
	drawText('same amount, different timing', x, y++, 140, 160, 190);
	drawText(`amount: ${amount.toFixed(2)}`, x, y++, 220, 230, 255);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

