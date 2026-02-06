---
title: ContrastOptions
description: Configuration options for the 'contrast' filter.
category: Interfaces
api: true
kind: Interface
lastModified: 2026-02-06
isInterface: true
---

[textmode.filters.js](../index.md) / ContrastOptions

# Interface: ContrastOptions

Configuration options for the `'contrast'` filter.

Adjusts image contrast by scaling pixel values around mid-gray.

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
  t.layers.base.filter('contrast', {
    amount: 1 + wobble * 0.35,
  });
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="amount"></a> `amount` | `number` | Contrast multiplier. - `1.0` = normal contrast (no change) - `> 1.0` = more contrast (darker darks, brighter brights) - `< 1.0` = less contrast (more gray/washed out) - `0.0` = solid gray **Default** `1.0` |
