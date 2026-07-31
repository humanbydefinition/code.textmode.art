---
layout: doc
editLink: true
title: GlitchOptions
description: Configuration options for the 'glitch' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-07-31
isInterface: true
---

[textmode.filters.js](../index.md) / GlitchOptions

# Interface: GlitchOptions

Configuration options for the `'glitch'` filter.

Digital glitch effect with RGB channel separation, scanlines, and noise.
Creates a corrupted/broken digital signal aesthetic.

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

	const val = (2.5 + 2.5 * Math.sin(t.secs * 3.0)).toFixed(2);

	drawText('FILTERSPLUGIN.GLITCH', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: DIGITAL SIGNAL BREAKUP', x, y++, 100, 220, 255);
	drawText('Simulates data corruption artifacts.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('Glitch Amt: ' + val, x, y++, 140, 255, 180);
});

t.draw(() => {
	if (!video) return;
	const val = 2.5 + 2.5 * Math.sin(t.secs * 3.0);

	t.layers.base.filter('glitch', val);

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
| <a id="property-amount"></a> `amount` | `number` | Glitch intensity. - `0.0` = no glitch effect - `0.5` = subtle glitching - `1.0+` = intense, chaotic glitching **Default** `0.0` |
