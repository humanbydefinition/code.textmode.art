---
title: GlitchOptions
description: Configuration options for the 'glitch' filter.
category: Interfaces
api: true
kind: Interface
lastModified: 2026-02-06
isInterface: true
---

[textmode.filters.js](../index.md) / GlitchOptions

# Interface: GlitchOptions

Configuration options for the `'glitch'` filter.

Digital glitch effect with RGB channel separation, scanlines, and noise.
Creates a corrupted/broken digital signal aesthetic.

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
  t.layers.base.filter('glitch', {
    amount: Math.max(0, 0.2 + wobble * 0.8),
  });
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="amount"></a> `amount` | `number` | Glitch intensity. - `0.0` = no glitch effect - `0.5` = subtle glitching - `1.0+` = intense, chaotic glitching **Default** `0.0` |
