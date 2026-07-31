---
layout: doc
editLink: true
title: HueRotateOptions
description: Configuration options for the 'hueRotate' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-07-31
isInterface: true
---

[textmode.filters.js](../index.md) / HueRotateOptions

# Interface: HueRotateOptions

Configuration options for the `'hueRotate'` filter.

Shifts all colors around the color wheel by a specified angle.
Useful for color grading or creating surreal color effects.

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

	const val = Math.floor((t.secs * 60) % 360);

	drawText('FILTERSPLUGIN.HUEROTATE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: COLOR WHEEL ROTATION', x, y++, 100, 220, 255);
	drawText('Cycles colors around HSV wheel.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('Hue Angle: ' + val + '°', x, y++, 140, 255, 180);
});

t.draw(() => {
	if (!video) return;
	const val = (t.secs * 60) % 360;

	t.layers.base.filter('hueRotate', val);

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
| <a id="property-angle"></a> `angle` | `number` | Rotation angle in degrees. - `0` = no change - `180` = complementary colors - `360` = full rotation (same as 0) Values wrap around, so `370` is equivalent to `10`. **Default** `0.0` |
