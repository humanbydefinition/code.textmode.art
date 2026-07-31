---
layout: doc
editLink: true
title: GridDistortionOptions
description: Configuration options for the 'gridDistortion' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-07-31
isInterface: true
---

[textmode.filters.js](../index.md) / GridDistortionOptions

# Interface: GridDistortionOptions

Configuration options for the `'gridDistortion'` filter.

Distorts a monospaced character grid by varying the width and height
of individual cells. Create wave effects, perspective distortions,
or other grid warping effects by providing custom factor arrays.

This filter is designed specifically for textmode.js grids, allowing
you to create dynamic text distortion effects.

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

// Sine wave parameters
const config = {
	widthFrequency: 0.05,
	widthSpeed: 0.05,
	widthAmplitude: 1.0,
	heightFrequency: 0.1,
	heightSpeed: 0.03,
	heightAmplitude: 1.0,
};

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

	const wVar = (0.5 + 0.3 * Math.sin(t.secs * 1.0)).toFixed(2);
	const hVar = (0.5 + 0.3 * Math.cos(t.secs * 1.5)).toFixed(2);

	drawText('FILTERSPLUGIN.GRIDDISTORTION', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: COORDINATE SPACE WARPING', x, y++, 100, 220, 255);
	drawText('Warp grid columns and rows.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('Width Var: ' + wVar, x, y++, 140, 255, 180);
	drawText('Height Var: ' + hVar, x, y++, 140, 255, 180);
});

t.draw(() => {
	if (!video) return;

	const cols = t.grid.cols;
	const rows = t.grid.rows;
	const wVar = 0.5 + 0.3 * Math.sin(t.secs * 1.0);
	const hVar = 0.5 + 0.3 * Math.cos(t.secs * 1.5);

	// Generate sine wave pattern for width factors
	const widthFactors = [];
	for (let i = 0; i < cols; i++) {
		const sineValue = Math.sin(i * config.widthFrequency + t.secs * 60 * config.widthSpeed) * config.widthAmplitude;
		widthFactors.push((sineValue + config.widthAmplitude) / (2 * config.widthAmplitude));
	}

	// Generate sine wave pattern for height factors
	const heightFactors = [];
	for (let j = 0; j < rows; j++) {
		const sineValue =
			Math.sin(j * config.heightFrequency + t.secs * 60 * config.heightSpeed) * config.heightAmplitude;
		heightFactors.push((sineValue + config.heightAmplitude) / (2 * config.heightAmplitude));
	}

	// Apply grid distortion filter
	t.layers.base.filter('gridDistortion', {
		gridCellDimensions: [cols, rows],
		gridPixelDimensions: [t.grid.width, t.grid.height],
		gridOffsetDimensions: [t.grid.offsetX, t.grid.offsetY],
		widthFactors: widthFactors,
		heightFactors: heightFactors,
		widthVariationScale: wVar,
		heightVariationScale: hVar,
	});

	t.image(video, t.grid.cols, t.grid.rows);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-gridcelldimensions"></a> `gridCellDimensions` | \[`number`, `number`\] | Grid dimensions as `[columns, rows]`. Should match your textmode grid dimensions. Maximum value: `[128, 128]` **Default** `[80.0, 40.0]` |
| <a id="property-gridpixeldimensions"></a> `gridPixelDimensions` | \[`number`, `number`\] | Grid size in pixels as `[width, height]`. Typically calculated as: `[t.grid.cols * t.grid.cellWidth, t.grid.rows * t.grid.cellHeight]` **Default** `[640.0, 320.0]` |
| <a id="property-gridoffsetdimensions"></a> `gridOffsetDimensions` | \[`number`, `number`\] | Grid offset in pixels as `[offsetX, offsetY]`. Use `[t.grid.offsetX, t.grid.offsetY]` to match your grid position. **Default** `[0.0, 0.0]` |
| <a id="property-widthfactors"></a> `widthFactors` | `number`[] | Array of distortion values (0-1) for each column. Must contain at least as many elements as columns (max 128). Values control the relative width of each column: - `0.0` = minimum width - `0.5` = normal width - `1.0` = maximum width **Default** `Array(128).fill(0.5)` |
| <a id="property-heightfactors"></a> `heightFactors` | `number`[] | Array of distortion values (0-1) for each row. Must contain at least as many elements as rows (max 128). Values control the relative height of each row: - `0.0` = minimum height - `0.5` = normal height - `1.0` = maximum height **Default** `Array(128).fill(0.5)` |
| <a id="property-widthvariationscale"></a> `widthVariationScale` | `number` | Intensity multiplier for width distortion. Higher values create more dramatic width variations. **Default** `0.5` |
| <a id="property-heightvariationscale"></a> `heightVariationScale` | `number` | Intensity multiplier for height distortion. Higher values create more dramatic height variations. **Default** `0.5` |
