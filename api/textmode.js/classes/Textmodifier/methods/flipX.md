---
layout: doc
editLink: true
title: flipX
description: Toggle horizontal flipping for subsequent characters, or get the current state.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / flipX

# Method: flipX()

```ts
flipX(toggle?): boolean | void;
```

Toggle horizontal flipping for subsequent characters, or get the current state.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `toggle?` | `boolean` | Whether to flip horizontally. |

## Returns

`boolean` \| `void`

Current flip state when called without arguments.

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	for (let i = 0; i < 8; i++) {
		const y = (i - 3.5) * 2;
		t.push();
		t.translate(-6, y);
		t.char('R');
		t.charColor(140, 220, 255);
		t.point();
		t.pop();
		t.push();
		t.translate(8, y);
		t.flipX(true);
		t.char('R');
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
	drawText('TEXTMODIFIER.FLIPX', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: MIRROR GLYPH X', x, y++, 100, 220, 255);
	drawText('Left column is normal.', x, y++, 140, 160, 190);
	drawText('Right column is flipped.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`FLIP X: ${t.flipX()}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

