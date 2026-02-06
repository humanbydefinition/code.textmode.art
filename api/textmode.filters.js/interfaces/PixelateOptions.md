---
title: PixelateOptions
description: Configuration options for the 'pixelate' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-02-06
isInterface: true
---

[textmode.filters.js](../index.md) / PixelateOptions

# Interface: PixelateOptions

Configuration options for the `'pixelate'` filter.

Reduces image resolution to create a mosaic/pixelated effect
reminiscent of retro video games or censored content.

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
  t.layers.base.filter('pixelate', {
    pixelSize: 6 + wobble * 3,
  });
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="pixelsize"></a> `pixelSize` | `number` | Size of each pixel block in pixels. Larger values create bigger, more visible pixels. Minimum value: `1.0` **Default** `4.0` |
