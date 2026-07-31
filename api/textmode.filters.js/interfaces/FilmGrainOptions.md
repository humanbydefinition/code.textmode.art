---
layout: doc
editLink: true
title: FilmGrainOptions
description: Configuration options for the 'filmGrain' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-07-31
isInterface: true
---

[textmode.filters.js](../index.md) / FilmGrainOptions

# Interface: FilmGrainOptions

Configuration options for the `'filmGrain'` filter.

Adds an animated film grain/noise texture overlay to simulate vintage
film stock or analog video. The multi-layered noise creates an organic,
moving grain pattern that's less visible in darker areas, mimicking
real film characteristics.

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

	const intensity = (0.3 + 0.2 * Math.sin(t.secs * 2.0)).toFixed(2);

	drawText('FILTERSPLUGIN.FILMGRAIN', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: ANALOG NOISE OVERLAY', x, y++, 100, 220, 255);
	drawText('Simulates organic film grain.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('Intensity: ' + intensity, x, y++, 140, 255, 180);
	drawText('Size: 2.0', x, y++, 140, 255, 180);
});

t.draw(() => {
	if (!video) return;
	const intensity = 0.3 + 0.2 * Math.sin(t.secs * 2.0);

	t.layers.base.filter('filmGrain', {
		intensity: intensity,
		size: 2.0,
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
| <a id="property-intensity"></a> `intensity` | `number` | Strength of the grain effect. - `0.0` = no grain - `0.2` = subtle grain (default) - `0.5+` = heavy, noticeable grain **Default** `0.2` |
| <a id="property-size"></a> `size` | `number` | Size of grain particles. - `1.0` = fine grain - `2.0` = medium grain (default) - `5.0+` = coarse, chunky grain **Default** `2.0` |
| <a id="property-speed"></a> `speed` | `number` | Animation speed of the grain. - `0.0` = static grain (not recommended) - `1.0` = normal animation speed (default) - `2.0+` = fast, flickering grain **Default** `1.0` |
| <a id="property-time"></a> `time` | `number` | Animation time parameter. Increment this value each frame to animate the grain effect. **Default** `0.0` |
