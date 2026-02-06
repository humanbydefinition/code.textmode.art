---
title: BrightnessOptions
description: Configuration options for the 'brightness' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-02-06
isInterface: true
---

[textmode.filters.js](../index.md) / BrightnessOptions

# Interface: BrightnessOptions

Configuration options for the `'brightness'` filter.

Adjusts image brightness by multiplying pixel values.

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
  t.layers.base.filter('brightness', {
    amount: 1 + wobble * 0.25,
  });
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="amount"></a> `amount` | `number` | Brightness multiplier. - `1.0` = normal brightness (no change) - `> 1.0` = brighter - `< 1.0` = darker - `0.0` = completely black **Default** `1.0` |
