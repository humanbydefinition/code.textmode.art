---
layout: doc
editLink: true
title: repeat
description: Repeat coordinates in both X and Y directions.
category: Methods
api: true
owner: SynthSource
kind: Method
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../../../index.md) / [SynthSource](../../SynthSource.md) / repeat

# Method: repeat()

```ts
repeat(
   repeatX?, 
   repeatY?, 
   offsetX?, 
   offsetY?): this;
```

Repeat coordinates in both X and Y directions.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `repeatX?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Number of X repetitions (default: 3.0) |
| `repeatY?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Number of Y repetitions (default: 3.0) |
| `offsetX?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | X offset between repetitions (default: 0.0) |
| `offsetY?` | [`SynthParameterValue`](../../../type-aliases/SynthParameterValue.md) | Y offset between repetitions (default: 0.0) |

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

	drawText(`SYNTHSOURCE.REPEAT`, x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CONCEPT: TILING COORDINATES`, x, y++, 100, 220, 255);
	drawText(`Repeats space on X and Y axes.`, x, y++, 140, 160, 190);
	drawText(`Creates multiple repeating tiles.`, x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`Repeat: Eased X & Y (2 to 5)`, x, y++, 140, 255, 180);
});

t.synth(shape(3, 0.3, 0.05).repeat([2, 5].ease('easeInOutSine'), [2, 5].ease('easeInOutSine')).color(0.8, 0.2, 0.8));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

