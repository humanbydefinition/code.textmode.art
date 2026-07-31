---
layout: doc
editLink: true
title: swirl
description: Swirl distortion around a center.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / swirl

# Method: swirl()

```ts
swirl(
   amount?, 
   centerX?, 
   centerY?): this;
```

Swirl distortion around a center.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Swirl strength (default: 4.0) |
| `centerX?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Center X (default: 0.5) |
| `centerY?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Center Y (default: 0.5) |

## Returns

`this`

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	plugins: [SynthPlugin],
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText(`SYNTHSOURCE.SWIRL`, x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CONCEPT: RADIAL SWIRL WARPING`, x, y++, 100, 220, 255);
	drawText(`Swirls coordinate domain.`, x, y++, 140, 160, 190);
	drawText(`Creates localized center rotation.`, x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`Strength: Eased (0 to 3)`, x, y++, 140, 255, 180);
});

t.synth(noise(5).swirl([0, 3].ease('easeInOutSine')).color(0.9, 0.5, 0.2));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

