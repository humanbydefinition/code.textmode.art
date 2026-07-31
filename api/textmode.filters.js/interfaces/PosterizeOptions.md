---
layout: doc
editLink: true
title: PosterizeOptions
description: Configuration options for the 'posterize' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-07-31
isInterface: true
---

[textmode.filters.js](../index.md) / PosterizeOptions

# Interface: PosterizeOptions

Configuration options for the `'posterize'` filter.

Reduces the color palette to a limited number of bands per channel,
creating a retro quantized/poster-like look.

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

	const val = Math.floor(8 + 6 * Math.sin(t.secs * 1.0));

	drawText('FILTERSPLUGIN.POSTERIZE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: COLOR BANDING', x, y++, 100, 220, 255);
	drawText('Reduces image to stepped tones.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('Color Levels: ' + val, x, y++, 140, 255, 180);
});

t.draw(() => {
	if (!video) return;
	const val = Math.floor(8 + 6 * Math.sin(t.secs * 1.0));

	t.layers.base.filter('posterize', {
		levels: val,
	});

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
| <a id="property-levels"></a> `levels` | `number` | Number of color levels per channel. Lower values create more dramatic banding effects. Higher values approach the original image quality. - `2` = extreme posterization (very few colors) - `4` = strong posterization (default) - `8+` = subtle posterization **Default** `4.0` |
