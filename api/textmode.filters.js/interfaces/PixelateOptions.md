---
layout: doc
editLink: true
title: PixelateOptions
description: Configuration options for the 'pixelate' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-07-31
isInterface: true
---

[textmode.filters.js](../index.md) / PixelateOptions

# Interface: PixelateOptions

Configuration options for the `'pixelate'` filter.

Reduces image resolution to create a mosaic/pixelated effect
reminiscent of retro video games or censored content.

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
	plugins: [FiltersPlugin],
});
const labelLayer = t.layers.add();

let video;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.setup(async () => {
	video = await t.loadVideo('https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4');
	video.play();
	video.loop();
	video.characters(' .:-=+*#%@');
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2),
		top = -Math.floor(t.grid.rows / 2);
	let y = top + 3,
		x = left + 3;

	const val = (8 + 6 * Math.sin(t.secs * 1.5)).toFixed(2);

	drawText('FILTERSPLUGIN.PIXELATE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: RESOLUTION DOWNSAMPLING', x, y++, 100, 220, 255);
	drawText('Groups characters into blocky cells.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('Pixel Size: ' + val, x, y++, 140, 255, 180);
});

t.draw(() => {
	if (!video) return;
	const val = 8 + 6 * Math.sin(t.secs * 1.5);

	t.layers.base.filter('pixelate', val);

	t.background(0);
	t.image(video);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-pixelsize"></a> `pixelSize` | `number` | Size of each pixel block in pixels. Larger values create bigger, more visible pixels. Minimum value: `1.0` **Default** `4.0` |
