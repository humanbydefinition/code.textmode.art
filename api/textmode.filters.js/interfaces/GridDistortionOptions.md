---
title: GridDistortionOptions
description: Configuration options for the 'gridDistortion' filter.
category: Interfaces
api: true
kind: Interface
lastModified: 2026-02-06
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
  plugins: [FiltersPlugin],
});

let video;

t.setup(async () => {
  video = await t.loadVideo('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');
  video.play();
  video.loop();
  video.characters(' .:-=+*#%@');
});

t.draw(() => {
  t.background(0);
  if (video) {
    t.image(video, t.grid.cols, t.grid.rows);
  }

  const wobble = Math.sin(t.secs * 2);
  const widthFactors = Array.from({ length: t.grid.cols }, (_, i) => (Math.sin(i * 0.18 + t.frameCount * 0.04) + 1) * 0.5);
  const heightFactors = Array.from({ length: t.grid.rows }, (_, i) => (Math.sin(i * 0.24 + t.secs * 1.5) + 1) * 0.5);
  t.layers.base.filter('gridDistortion', {
    gridCellDimensions: [t.grid.cols, t.grid.rows],
    gridPixelDimensions: [t.grid.width, t.grid.height],
    gridOffsetDimensions: [t.grid.offsetX, t.grid.offsetY],
    widthFactors,
    heightFactors,
    widthVariationScale: 0.35 + wobble * 0.15,
    heightVariationScale: 0.35 + wobble * 0.15,
  });
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="gridcelldimensions"></a> `gridCellDimensions` | \[`number`, `number`\] | Grid dimensions as `[columns, rows]`. Should match your textmode grid dimensions. Maximum value: `[128, 128]` **Default** `[80.0, 40.0]` |
| <a id="gridpixeldimensions"></a> `gridPixelDimensions` | \[`number`, `number`\] | Grid size in pixels as `[width, height]`. Typically calculated as: `[t.grid.cols * t.grid.cellWidth, t.grid.rows * t.grid.cellHeight]` **Default** `[640.0, 320.0]` |
| <a id="gridoffsetdimensions"></a> `gridOffsetDimensions` | \[`number`, `number`\] | Grid offset in pixels as `[offsetX, offsetY]`. Use `[t.grid.offsetX, t.grid.offsetY]` to match your grid position. **Default** `[0.0, 0.0]` |
| <a id="widthfactors"></a> `widthFactors` | `number`[] | Array of distortion values (0-1) for each column. Must contain at least as many elements as columns (max 128). Values control the relative width of each column: - `0.0` = minimum width - `0.5` = normal width - `1.0` = maximum width **Default** `Array(128).fill(0.5)` |
| <a id="heightfactors"></a> `heightFactors` | `number`[] | Array of distortion values (0-1) for each row. Must contain at least as many elements as rows (max 128). Values control the relative height of each row: - `0.0` = minimum height - `0.5` = normal height - `1.0` = maximum height **Default** `Array(128).fill(0.5)` |
| <a id="widthvariationscale"></a> `widthVariationScale` | `number` | Intensity multiplier for width distortion. Higher values create more dramatic width variations. **Default** `0.5` |
| <a id="heightvariationscale"></a> `heightVariationScale` | `number` | Intensity multiplier for height distortion. Higher values create more dramatic height variations. **Default** `0.5` |
