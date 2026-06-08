---
layout: doc
editLink: true
title: CrtMattiasOptions
description: Configuration options for the 'crtMattias' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-06-08
isInterface: true
---

[textmode.filters.js](../index.md) / CrtMattiasOptions

# Interface: CrtMattiasOptions

Configuration options for the `'crtMattias'` filter.

CRT monitor emulation effect with screen curvature, animated scanlines,
blur, vignette, and film grain noise. Based on Mattias Gustavsson's
classic CRT shader.

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
  t.layers.base.filter('crtMattias', {
    curvature: 0.45 + wobble * 0.1,
    scanSpeed: 1 + wobble * 0.25,
    time: t.secs,
  });
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## See

[Original shader by Mattias Gustavsson](https://github.com/libretro/glsl-shaders/blob/master/crt/shaders/crt-mattias.glsl)

## Properties

| Property | Description |
| ------ | ------ |
| [curvature](CrtMattiasOptions/properties/curvature.md) | Amount of screen curvature/barrel distortion. |
| [scanSpeed](CrtMattiasOptions/properties/scanSpeed.md) | Speed of the scrolling scanline effect. |
| [time](CrtMattiasOptions/properties/time.md) | Animation time parameter. |
