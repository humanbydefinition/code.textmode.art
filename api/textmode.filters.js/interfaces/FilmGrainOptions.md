---
layout: doc
editLink: true
title: FilmGrainOptions
description: Configuration options for the 'filmGrain' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-06-08
isInterface: true
---

[textmode.filters.js](../index.md) / FilmGrainOptions

# Interface: FilmGrainOptions

Configuration options for the `'filmGrain'` filter.

Adds an animated film grain/noise texture overlay to simulate vintage
film stock or analog video. The multi-layered noise creates an organic,
moving grain pattern that's less visible in darker areas, mimicking
real film characteristics.

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
  t.layers.base.filter('filmGrain', {
    intensity: 0.2 + wobble * 0.1,
    size: 2 + wobble * 0.5,
    speed: 1 + wobble * 0.2,
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
| [intensity](FilmGrainOptions/properties/intensity.md) | Strength of the grain effect. |
| [size](FilmGrainOptions/properties/size.md) | Size of grain particles. |
| [speed](FilmGrainOptions/properties/speed.md) | Animation speed of the grain. |
| [time](FilmGrainOptions/properties/time.md) | Animation time parameter. |
