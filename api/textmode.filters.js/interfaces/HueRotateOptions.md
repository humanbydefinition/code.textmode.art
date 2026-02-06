---
title: HueRotateOptions
description: Configuration options for the 'hueRotate' filter.
category: Interfaces
api: true
kind: Interface
lastModified: 2026-02-06
isInterface: true
---

[textmode.filters.js](../index.md) / HueRotateOptions

# Interface: HueRotateOptions

Configuration options for the `'hueRotate'` filter.

Shifts all colors around the color wheel by a specified angle.
Useful for color grading or creating surreal color effects.

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
  const hue = (t.frameCount * 2 + wobble * 45) % 360;
  t.layers.base.filter('hueRotate', {
    angle: hue,
  });
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="angle"></a> `angle` | `number` | Rotation angle in degrees. - `0` = no change - `180` = complementary colors - `360` = full rotation (same as 0) Values wrap around, so `370` is equivalent to `10`. **Default** `0.0` |
