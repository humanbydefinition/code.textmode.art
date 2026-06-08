---
layout: doc
editLink: true
title: ScanlinesOptions
description: Configuration options for the 'scanlines' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-06-08
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

| Property | Description |
| ------ | ------ |
| [count](ScanlinesOptions/properties/count.md) | Number of scanlines across the image height. |
| [lineWidth](ScanlinesOptions/properties/lineWidth.md) | Width of the lines relative to the spacing. |
| [intensity](ScanlinesOptions/properties/intensity.md) | Opacity/darkness of the scanlines. |
| [speed](ScanlinesOptions/properties/speed.md) | Scrolling speed of the lines. |
| [time](ScanlinesOptions/properties/time.md) | Animation time parameter. |
