---
layout: doc
editLink: true
title: VignetteOptions
description: Configuration options for the 'vignette' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-06-08
isInterface: true
---

[textmode.filters.js](../index.md) / VignetteOptions

# Interface: VignetteOptions

Configuration options for the `'vignette'` filter.

Darkens the edges and corners of the image, drawing focus to the center.
Useful for creating a cinematic look or highlighting central content.

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
  t.layers.base.filter('vignette', {
    amount: 0.5 + wobble * 0.2,
    softness: 0.5,
    roundness: 0.5 + wobble * 0.15,
  });
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Properties

| Property | Description |
| ------ | ------ |
| [amount](VignetteOptions/properties/amount.md) | Intensity of the darkening effect. |
| [softness](VignetteOptions/properties/softness.md) | Falloff gradient softness. |
| [roundness](VignetteOptions/properties/roundness.md) | Shape of the vignette. |
