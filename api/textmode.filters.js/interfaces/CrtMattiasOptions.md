---
layout: doc
editLink: true
title: CrtMattiasOptions
description: Configuration options for the 'crtMattias' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-07-31
isInterface: true
---

[textmode.filters.js](../index.md) / CrtMattiasOptions

# Interface: CrtMattiasOptions

Configuration options for the `'crtMattias'` filter.

CRT monitor emulation effect with screen curvature, animated scanlines,
blur, vignette, and film grain noise. Based on Mattias Gustavsson's
classic CRT shader.

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 32,
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

	const curv = (0.4 + 0.3 * Math.sin(t.secs * 1.0)).toFixed(2);

	drawText('FILTERSPLUGIN.CRTMATTIAS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: CATHODE RAY TUBE EMULATOR', x, y++, 100, 220, 255);
	drawText('Applies screen curvature and scanlines.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('Curvature: ' + curv, x, y++, 140, 255, 180);
	drawText('Scan Speed: 1.5', x, y++, 140, 255, 180);
});

t.draw(() => {
	if (!video) return;
	const curv = 0.4 + 0.3 * Math.sin(t.secs * 1.0);

	t.layers.base.filter('crtMattias', {
		curvature: curv,
		scanSpeed: 1.5,
		time: t.secs,
	});

	t.background(0);
	t.image(video);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## See

 - [Original shader by Mattias Gustavsson](https://github.com/libretro/glsl-shaders/blob/master/crt/shaders/crt-mattias.glsl)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-curvature"></a> `curvature` | `number` | Amount of screen curvature/barrel distortion. - `0.0` = flat screen - `0.5` = moderate curvature (default) - `1.0` = maximum curvature **Default** `0.5` |
| <a id="property-scanspeed"></a> `scanSpeed` | `number` | Speed of the scrolling scanline effect. Higher values make the scanline crawl faster. **Default** `1.0` |
| <a id="property-time"></a> `time` | `number` | Animation time parameter. Increment this value each frame to animate the effect. Typically use elapsed time in seconds or frame count. **Default** `0.0` |
