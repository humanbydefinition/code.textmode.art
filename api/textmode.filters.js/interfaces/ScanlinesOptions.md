---
title: ScanlinesOptions
description: Configuration options for the 'scanlines' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-02-06
isInterface: true
---

[textmode.filters.js](../index.md) / ScanlinesOptions

# Interface: ScanlinesOptions

Configuration options for the `'scanlines'` filter.

A standalone scanline effect that adds horizontal lines to the image
to simulate a CRT display or old monitor. More customizable than
the scanlines in crtMattias.

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
  t.layers.base.filter('scanlines', {
    count: 256,
    lineWidth: 0.5,
    intensity: 0.7 + wobble * 0.1,
    speed: 1 + wobble * 0.15,
    time: t.secs,
  });
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="count"></a> `count` | `number` | Number of scanlines across the image height. Higher values create finer, more dense lines. Minimum value: `10.0` **Default** `300.0` |
| <a id="linewidth"></a> `lineWidth` | `number` | Width of the lines relative to the spacing. - `0.0` = very thin lines (mostly transparent) - `0.5` = equal line and gap width - `1.0` = solid (no gaps) **Default** `0.5` |
| <a id="intensity"></a> `intensity` | `number` | Opacity/darkness of the scanlines. - `0.0` = invisible lines - `0.75` = clearly visible (default) - `1.0` = maximum darkness (solid black lines) **Default** `0.75` |
| <a id="speed"></a> `speed` | `number` | Scrolling speed of the lines. - `0.0` = static lines - `1.0` = normal scrolling speed - Higher values = faster scrolling **Default** `1.0` |
| <a id="time"></a> `time` | `number` | Animation time parameter. Increment this value each frame to animate the scrolling effect. **Default** `0.0` |
