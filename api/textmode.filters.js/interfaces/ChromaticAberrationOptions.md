---
layout: doc
editLink: true
title: ChromaticAberrationOptions
description: Configuration options for the 'chromaticAberration' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-07-31
isInterface: true
---

[textmode.filters.js](../index.md) / ChromaticAberrationOptions

# Interface: ChromaticAberrationOptions

Configuration options for the `'chromaticAberration'` filter.

RGB color channel separation effect that simulates lens distortion
found in cheap cameras or creates stylized glitch aesthetics.

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

	const val = Math.round(15 + 15 * Math.sin(t.secs * 1.5));

	drawText('FILTERSPLUGIN.CHROMATICABERRATION', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: CHANNEL SEPARATION', x, y++, 100, 220, 255);
	drawText('Separates red, green, blue channels.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('Amount: ' + val + 'px', x, y++, 140, 255, 180);
});

t.draw(() => {
	if (!video) return;
	const val = 15 + 15 * Math.sin(t.secs * 1.5);

	t.layers.base.filter('chromaticAberration', val);

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
| <a id="property-amount"></a> `amount` | `number` | Offset amount in pixels. Controls how far the red and blue channels are separated from green. **Default** `5.0` |
| <a id="property-direction"></a> `direction` | \[`number`, `number`\] | Direction of the color separation as `[x, y]`. - `[1, 0]` = horizontal separation - `[0, 1]` = vertical separation - `[1, 1]` = diagonal separation The vector is normalized internally, so `[2, 0]` is the same as `[1, 0]`. **Default** `[1.0, 0.0]` |
