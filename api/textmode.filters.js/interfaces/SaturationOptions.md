---
title: SaturationOptions
description: Configuration options for the 'saturation' filter.
category: Interfaces
api: true
kind: Interface
lastModified: 2026-02-06
isInterface: true
---

[textmode.filters.js](../index.md) / SaturationOptions

# Interface: SaturationOptions

Configuration options for the `'saturation'` filter.

Adjusts color intensity without affecting luminance.
Perfect for creating vivid, oversaturated looks or desaturating to grayscale.

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
  t.layers.base.filter('saturation', {
    amount: 1 + wobble * 0.45,
  });
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="amount"></a> `amount` | `number` | Saturation multiplier. - `0.0` = grayscale (no color) - `1.0` = normal saturation (no change) - `> 1.0` = vivid/oversaturated colors **Default** `1.0` |
