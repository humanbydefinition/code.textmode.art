---
layout: doc
editLink: true
title: loadVideo
description: Load a video source that can be drawn with image.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / loadVideo

# Method: loadVideo()

```ts
loadVideo(src): Promise<TextmodeVideo>;
```

Load a video source that can be drawn with [image](image.md).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `src` | `string` | Video URL. |

## Returns

`Promise`\<[`TextmodeVideo`](../../../namespaces/media/classes/TextmodeVideo.md)\>

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let source;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.setup(async () => {
	source = await t.loadVideo('https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4');
	source.play();
});

t.draw(() => {
	t.background(0);
	if (source) t.image(source, t.grid.cols, t.grid.rows);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.LOADVIDEO', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: LOAD VIDEO', x, y++, 100, 220, 255);
	drawText('Loads media for this example.', x, y++, 140, 160, 190);
	drawText('HUD stays on a top layer.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(source ? 'VIDEO: READY' : 'VIDEO: WAIT', x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

