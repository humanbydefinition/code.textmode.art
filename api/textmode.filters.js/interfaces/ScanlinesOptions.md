---
layout: doc
editLink: true
title: ScanlinesOptions
description: Configuration options for the 'scanlines' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-07-31
isInterface: true
---

[textmode.filters.js](../index.md) / ScanlinesOptions

# Interface: ScanlinesOptions

Configuration options for the `'scanlines'` filter.

A standalone scanline effect that adds horizontal lines to the image
to simulate a CRT display or old monitor. More customizable than
the scanlines in crtMattias.

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
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

	const intensity = (0.5 + 0.3 * Math.sin(t.secs * 1.5)).toFixed(2);

	drawText('FILTERSPLUGIN.SCANLINES', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: DISPLAY SCAN GRID', x, y++, 100, 220, 255);
	drawText('Overlays drifting raster lines.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('Line Count: 300', x, y++, 140, 255, 180);
	drawText('Intensity: ' + intensity, x, y++, 140, 255, 180);
});

t.draw(() => {
	if (!video) return;
	const intensity = 0.5 + 0.3 * Math.sin(t.secs * 1.5);

	t.layers.base.filter('scanlines', {
		count: 300,
		intensity: intensity,
		speed: 1.0,
		time: t.secs,
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
| <a id="property-count"></a> `count` | `number` | Number of scanlines across the image height. Higher values create finer, more dense lines. Minimum value: `10.0` **Default** `300.0` |
| <a id="property-linewidth"></a> `lineWidth` | `number` | Width of the lines relative to the spacing. - `0.0` = very thin lines (mostly transparent) - `0.5` = equal line and gap width - `1.0` = solid (no gaps) **Default** `0.5` |
| <a id="property-intensity"></a> `intensity` | `number` | Opacity/darkness of the scanlines. - `0.0` = invisible lines - `0.75` = clearly visible (default) - `1.0` = maximum darkness (solid black lines) **Default** `0.75` |
| <a id="property-speed"></a> `speed` | `number` | Scrolling speed of the lines. - `0.0` = static lines - `1.0` = normal scrolling speed - Higher values = faster scrolling **Default** `1.0` |
| <a id="property-time"></a> `time` | `number` | Animation time parameter. Increment this value each frame to animate the scrolling effect. **Default** `0.0` |
