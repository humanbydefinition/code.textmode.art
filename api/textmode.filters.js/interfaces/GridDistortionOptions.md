---
layout: doc
editLink: true
title: GridDistortionOptions
description: Configuration options for the 'gridDistortion' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-06-08
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
  video = await t.loadVideo('https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4');
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

| Property | Description |
| ------ | ------ |
| [gridCellDimensions](GridDistortionOptions/properties/gridCellDimensions.md) | Grid dimensions as `[columns, rows]`. |
| [gridPixelDimensions](GridDistortionOptions/properties/gridPixelDimensions.md) | Grid size in pixels as `[width, height]`. |
| [gridOffsetDimensions](GridDistortionOptions/properties/gridOffsetDimensions.md) | Grid offset in pixels as `[offsetX, offsetY]`. |
| [widthFactors](GridDistortionOptions/properties/widthFactors.md) | Array of distortion values (0-1) for each column. |
| [heightFactors](GridDistortionOptions/properties/heightFactors.md) | Array of distortion values (0-1) for each row. |
| [widthVariationScale](GridDistortionOptions/properties/widthVariationScale.md) | Intensity multiplier for width distortion. |
| [heightVariationScale](GridDistortionOptions/properties/heightVariationScale.md) | Intensity multiplier for height distortion. |
