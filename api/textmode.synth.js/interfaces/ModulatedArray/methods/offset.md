---
layout: doc
editLink: true
title: offset
description: Set time offset for array cycling.
category: Methods
api: true
owner: ModulatedArray
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [ModulatedArray](../../ModulatedArray.md) / offset

# Method: offset()

```ts
offset(offset): this;
```

Set time offset for array cycling.

Shifts when the array starts cycling through its values.
Useful for creating phase-shifted animations where multiple arrays
cycle with the same speed but at different times.

The offset wraps around at 1.0, so offset(0.5) starts halfway through
the cycle, and offset(1.5) is equivalent to offset(0.5).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offset` | `number` | Time offset 0-1, wraps at 1.0 (default: 0) |

## Returns

`this`

The array for chaining

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
	plugins: [SynthPlugin],
});

t.bpm(18);

const labelLayer = t.layers.add();
const glyphs = ' .:-=+*#%@';
const slow = [0.0, 1.0].fast(0.16).ease('easeInOutSine');
const turn = [-0.42, 0.42].fast(0.14).ease('easeInOutSine');

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

	drawText('MODULATEDARRAY.OFFSET', x, y++, 110, 255, 170);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('PHASE OFFSET CYCLING', x, y++, 120, 220, 255);
	drawText('Offsets stagger shared motion.', x, y++, 160, 180, 210);
	drawText('Three color fields orbit slowly.', x, y++, 160, 180, 210);
	drawText('------------------------------------', x, y++, 70, 110, 140);
	drawText('Separate animated ink and paper.', x, y++, 150, 255, 190);
});

const ink = osc(6, 0.018, 1.6).rotate(turn, 0.002).color(0.9, 0.58, 1.0).modulateKaleid(noise(2.0, 0.014), 5);
const paper = plasma(3.2, 0.024, 0.2, 1.08).color(0.08, 0.035, 0.16).hue(slow);
const turnA = [-0.35, 0.35].fast(0.12).ease('easeInOutSine');

t.synth(
	osc(10, 0.024, 1.0)
		.rotate(turnA)
		.kaleid(5)
		.screen(osc(10, 0.02, 1.7).rotate(turnA.offset(0.33)), 0.38)
		.screen(osc(10, 0.018, 2.4).rotate(turnA.offset(0.66)), 0.32)
		.modulate(noise(2.3, 0.018), 0.035)
		.contrast(1.2)
		.charMap(glyphs)
		.charColor(ink)
		.cellColor(paper)
);

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

