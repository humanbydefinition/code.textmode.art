---
title: PosterizeOptions
description: Configuration options for the 'posterize' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-02-06
isInterface: true
---

[textmode.filters.js](../index.md) / PosterizeOptions

# Interface: PosterizeOptions

Configuration options for the `'posterize'` filter.

Reduces the color palette to a limited number of bands per channel,
creating a retro quantized/poster-like look.

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
  t.layers.base.filter('posterize', {
    levels: Math.max(2, Math.round(5 + wobble * 3)),
  });
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="levels"></a> `levels` | `number` | Number of color levels per channel. Lower values create more dramatic banding effects. Higher values approach the original image quality. - `2` = extreme posterization (very few colors) - `4` = strong posterization (default) - `8+` = subtle posterization **Default** `4.0` |
