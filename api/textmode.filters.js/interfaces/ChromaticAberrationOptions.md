---
title: ChromaticAberrationOptions
description: Configuration options for the 'chromaticAberration' filter.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-02-06
isInterface: true
---

[textmode.filters.js](../index.md) / ChromaticAberrationOptions

# Interface: ChromaticAberrationOptions

Configuration options for the `'chromaticAberration'` filter.

RGB color channel separation effect that simulates lens distortion
found in cheap cameras or creates stylized glitch aesthetics.

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
  t.layers.base.filter('chromaticAberration', {
    amount: 6 + wobble * 4,
    direction: [Math.sin(t.secs), Math.cos(t.secs)],
  });
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="amount"></a> `amount` | `number` | Offset amount in pixels. Controls how far the red and blue channels are separated from green. **Default** `5.0` |
| <a id="direction"></a> `direction` | \[`number`, `number`\] | Direction of the color separation as `[x, y]`. - `[1, 0]` = horizontal separation - `[0, 1]` = vertical separation - `[1, 1]` = diagonal separation The vector is normalized internally, so `[2, 0]` is the same as `[1, 0]`. **Default** `[1.0, 0.0]` |
