---
layout: doc
editLink: true
title: width
description: Canvas width in pixels.
category: Accessors
api: true
owner: Textmodifier
kind: Accessor
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / width

# Accessor: width

## Get Signature

```ts
get width(): number;
```

Canvas width in pixels.

### Returns

`number`

### Example

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
	t.char('=');
	t.charColor(140, 220, 255);
	t.rect(t.grid.cols, 1);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.WIDTH', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: CANVAS WIDTH', x, y++, 100, 220, 255);
	drawText('Returns pixel width.', x, y++, 140, 160, 190);
	drawText('Line spans grid columns.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`WIDTH: ${t.width}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

