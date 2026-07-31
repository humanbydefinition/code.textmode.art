---
layout: doc
editLink: true
title: FiltersPlugin
description: GPU-accelerated image filters plugin for textmode.js.
category: Variables
api: true
kind: Variable
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.filters.js](../index.md) / FiltersPlugin

# Variable: FiltersPlugin

```ts
const FiltersPlugin: TextmodePlugin;
```

GPU-accelerated image filters plugin for textmode.js.

Add this plugin to your textmode.js instance to enable additional customizable
visual effects that run entirely on the GPU via WebGL2 fragment shaders.

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

	const val = (1.5 + 1.0 * Math.sin(t.secs * 2.0)).toFixed(2);

	drawText('FILTERSPLUGIN.BRIGHTNESS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: LUMINESCENCE CONTROL', x, y++, 100, 220, 255);
	drawText('Adjusts base image brightness.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('Amount: ' + val, x, y++, 140, 255, 180);
});

t.draw(() => {
	if (!video) return;
	const val = 1.5 + 1.0 * Math.sin(t.secs * 2.0);

	t.layers.base.filter('brightness', val);

	t.background(0);
	t.image(video);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

