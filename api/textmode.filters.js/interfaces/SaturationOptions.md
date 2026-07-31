---
layout: doc
editLink: true
title: SaturationOptions
description: Configuration options for the 'saturation' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-07-31
isInterface: true
---

[textmode.filters.js](../index.md) / SaturationOptions

# Interface: SaturationOptions

Configuration options for the `'saturation'` filter.

Adjusts color intensity without affecting luminance.
Perfect for creating vivid, oversaturated looks or desaturating to grayscale.

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

	const val = (1.0 + 1.0 * Math.sin(t.secs * 2.0)).toFixed(2);

	drawText('FILTERSPLUGIN.SATURATION', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: CHROMATIC INTENSITY', x, y++, 100, 220, 255);
	drawText('Pushes colors between gray and vivid.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('Saturation: ' + val, x, y++, 140, 255, 180);
});

t.draw(() => {
	if (!video) return;
	const val = 1.0 + 1.0 * Math.sin(t.secs * 2.0);

	t.layers.base.filter('saturation', val);

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
| <a id="property-amount"></a> `amount` | `number` | Saturation multiplier. - `0.0` = grayscale (no color) - `1.0` = normal saturation (no change) - `> 1.0` = vivid/oversaturated colors **Default** `1.0` |
