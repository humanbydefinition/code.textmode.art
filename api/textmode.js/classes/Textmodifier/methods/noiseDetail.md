---
layout: doc
editLink: true
title: noiseDetail
description: Adjust noise octaves and falloff.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / noiseDetail

# Method: noiseDetail()

```ts
noiseDetail(octaves, falloff?): void;
```

Adjust noise octaves and falloff.

Higher octaves add fine detail. Falloff controls how much each octave
contributes compared to the previous one.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `octaves` | `number` | Number of octaves to use. |
| `falloff?` | `number` | Amplitude falloff between octaves. |

## Returns

`void`

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
	seed: 'noise-detail',
});

const labelLayer = t.layers.add();
const ramp = ' .:-=+*#%@';

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

function drawPanel(offsetX, octaves, falloff) {
	const top = -Math.floor(t.grid.rows / 2) + 11;
	t.noiseDetail(octaves, falloff);
	for (let y = 0; y < Math.min(16, t.grid.rows - 13); y += 1) {
		for (let x = 0; x < 20; x += 1) {
			const value = t.noise(x * 0.14, y * 0.14, t.frameCount * 0.012);
			const index = Math.floor(value * (ramp.length - 1));
			t.push();
			t.translate(offsetX + x, top + y);
			t.char(ramp[index]);
			t.charColor(90 + value * 150, 140 + value * 100, 255);
			t.point();
			t.pop();
		}
	}
}

t.draw(() => {
	t.background(5, 8, 18);
	drawPanel(-24, 2, 0.35);
	drawPanel(4, 7, 0.65);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODIFIER.NOISEDETAIL', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: OCTAVES + FALLOFF', x, y++, 100, 220, 255);
	drawText('Left: soft, low detail.', x, y++, 140, 160, 190);
	drawText('Right: richer fine texture.', x, y++, 140, 160, 190);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

