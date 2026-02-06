---
title: VignetteOptions
description: Configuration options for the 'vignette' filter.
category: Interfaces
api: true
kind: Interface
lastModified: 2026-02-06
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

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="amount"></a> `amount` | `number` | Intensity of the darkening effect. - `0.0` = no vignette - `0.5` = moderate vignette (default) - `1.0` = very dark edges **Default** `0.5` |
| <a id="softness"></a> `softness` | `number` | Falloff gradient softness. - `0.0` = hard edge (sharp transition) - `0.5` = moderate gradient (default) - `1.0` = very soft, gradual falloff **Default** `0.5` |
| <a id="roundness"></a> `roundness` | `number` | Shape of the vignette. - `0.0` = rectangular (follows screen edges) - `0.5` = rounded rectangle (default) - `1.0` = circular/elliptical **Default** `0.5` |
