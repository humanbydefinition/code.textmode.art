---
title: flok.cc
description: Use textmode.js inside flok.cc for collaborative browser-based live coding with Hydra visuals, Strudel audio, and multi-layer textmode compositions.
---

<script setup>
import { GalleryCard } from '../.vitepress/theme/components/Gallery'
import galleryData from '../.vitepress/data/gallery.json'

const flokItem = {
  id: 'textmode-flok',
  ...galleryData['textmode-flok']
}
</script>

# flok.cc

[`flok.cc`](https://flok.cc/) is a collaborative live coding environment that runs entirely in the browser. `textmode.js` is integrated as a first-class panel target, which makes it a strong fit for performances where ASCII visuals need to live beside Hydra, Strudel, Mercury, or other browser-native tools. (ง'̀-'́)ง

If you want a dedicated solo synth surface instead, see [synth.textmode.art](/docs/live-coding-synth-textmode-art).

<GalleryCard :item="flokItem" />

## What is flok.cc?

[flok.cc](https://flok.cc/) is a web-based platform for collaborative live coding. Multiple performers can code together in real time, each working on different visual or audio layers that combine into a unified performance.

Key features of the `textmode.js` integration:

- **Real-time collaboration**: multiple performers can work inside the same session.
- **Multiple language support**: combine `textmode.js` with Hydra, Strudel, Mercury, and more.
- **Browser-based setup**: no installation required, just a modern browser with WebGL2 support.
- **Audio-reactive visuals**: use Strudel analysis data to drive textmode graphics.

## Getting started with flok

1. Visit [flok.cc](https://flok.cc/).
2. Create a new session or join an existing one.
3. Add a **textmode** panel from the target dropdown.
4. Start coding.

When you select **textmode** as your target, you get access to a global `t` variable, a [`Textmodifier`](/api/textmode.js/classes/Textmodifier) instance that exposes the full `textmode.js` API.

## Basic example

```js
t.fontSize(24);

t.draw(() => {
  t.background(0);

  const halfCols = t.grid.cols / 2;
  const halfRows = t.grid.rows / 2;

  for (let y = -halfRows; y < halfRows; y++) {
    for (let x = -halfCols; x < halfCols; x++) {
      const dist = Math.sqrt(x * x + y * y);
      const wave = Math.sin(dist * 0.2 - t.frameCount * 0.1);

      t.push();
      t.translate(x, y, 0);
      t.char(wave > 0.5 ? "▓" : wave > 0 ? "▒" : "░");
      t.charColor(0, 150 + wave * 100, 255);
      t.point();
      t.pop();
    }
  }
});
```

Press `Ctrl+Enter` or `Cmd+Enter` to evaluate your code immediately.

## Loading assets

You can load fonts, images, and videos dynamically during a performance:

```js
await t.loadFont(
  "https://cdn.jsdelivr.net/gh/damianvila/font-bescii/fonts/v2.0/Bescii-Mono.ttf",
);
t.fontSize(8);

const img = await t.loadImage(
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
);
const vid = await t.loadVideo(
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
);

vid.play();
vid.loop();

img.characters(" .:-=+*#%@");
vid.characters(" .:-=+*#%@");

t.draw(() => {
  t.background(0);

  t.push();
  t.translate(-t.grid.cols / 4, 0, 0);
  t.image(img, 64, 64);
  t.pop();

  t.push();
  t.translate(t.grid.cols / 4, 0, 0);
  t.image(vid, 64, 64);
  t.pop();
});
```

## Hydra integration

One of the strongest aspects of the flok integration is direct access to Hydra output inside the `textmode` frame. The Hydra canvas is available through `t.overlay` as a [`TextmodeImage`](/api/textmode.js/namespaces/media/classes/TextmodeImage), so you can configure and render it like any other image source.

### Basic Hydra to textmode

```js
// Hydra code
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// Flor de Fuego
// https://flordefuego.github.io/
osc(30, 0.01, 1)
  .mult(osc(20, -0.1, 1).modulate(noise(3, 1)).rotate(0.7))
  .posterize([3, 10, 2].fast(0.5).smooth(1))
  .out();

// textmode.js code
t.fontSize(32);

t.draw(() => {
  t.background(0);
  t.overlay.characters(" .:-=+*#%@");
  t.overlay.cellColor(0, 0, 0, 0);
  t.image(t.overlay, t.grid.cols, t.grid.rows);
});
```

## Strudel audio reactivity

When Strudel runs alongside `textmode.js` in flok, you can use `fft()` data to build audio-reactive visuals.

### Accessing audio data

Enable analysis in the Strudel panel with `.analyze("flok-master")`:

```js
$: s("bd bd:1, ~ <sd sd:2>, [hh hh:1]*4 hh:2")
  .bank("RolandTR909")
  .gain(0.8)
  .analyze("flok-master");

$: note("<c2 [c2 eb2] f2 [eb2 d2]>/2")
  .s("sawtooth")
  .cutoff(sine.range(180, 600).slow(4))
  .gain(0.45)
  .analyze("flok-master");
```

Then use the FFT bins in the `textmode` panel:

```js
const FFT_BINS = 48;

t.draw(() => {
  t.background(0);

  const cols = t.grid.cols;
  const rows = t.grid.rows;
  const maxHeight = rows * 0.4;

  t.char("|");

  for (let i = 0; i < FFT_BINS; i++) {
    const value = typeof fft === "function" ? Math.max(0, fft(i, FFT_BINS)) : 0;
    const barHeight = Math.max(1, Math.pow(value, 0.7) * maxHeight);
    const x = -cols / 2 + (i / (FFT_BINS - 1)) * cols;
    const hue = (i / FFT_BINS) * 255;

    t.charColor(hue, 200, 255 - hue);

    t.push();
    t.translate(x, 0, 0);
    t.line(0, -barHeight, 0, barHeight);
    t.pop();
  }
});
```

## Multi-layer compositions

The flok integration supports the full `textmode.js` layering system, so you can combine Hydra conversions, audio-reactive overlays, and text layers inside a single patch.

```js
t.fontSize(32);

const audioLayer = t.layers.add({ blendMode: "additive", opacity: 0.8 });

audioLayer.draw(() => {
  t.clear();
  t.cellColor(0, 0, 0, 0);

  const FFT_BINS = 48;
  const maxH = t.grid.rows * 0.4;

  t.lineWeight(2);
  t.char("|");
  t.charColor(170, 210, 255, 210);

  for (let i = 0; i < FFT_BINS; i++) {
    const x = -t.grid.cols / 2 + (i / (FFT_BINS - 1)) * t.grid.cols;
    const v = typeof fft === "function" ? Math.max(0, fft(i, FFT_BINS)) : 0;
    const h = Math.max(1, Math.pow(v, 0.7) * maxH);

    t.push();
    t.translate(x, 0);
    t.line(0, -h, 0, h);
    t.pop();
  }
});

const LABEL = "flok x hydra x strudel x textmode.js";
const labelLayer = t.layers.add({ blendMode: "normal", opacity: 1.0 });

labelLayer.draw(() => {
  t.clear();
  t.charColor(255, 255, 255, 255);
  t.cellColor(0, 0, 0, 255);

  const startX = -Math.floor(LABEL.length / 2);
  t.push();
  t.translate(startX, 0);
  [...LABEL].forEach((char, i) => {
    t.push();
    t.char(char);
    t.translate(i, 0);
    t.rect(1, 1);
    t.pop();
  });
  t.pop();
});

t.draw(() => {
  t.background(0);
  t.overlay.characters(" .:-=+*#%@");
  t.overlay.cellColor(0, 0, 0, 0);
  t.image(t.overlay, t.grid.cols, t.grid.rows);
});
```

## Filter effects

The flok integration also supports `textmode.filters.js`, which gives you GPU-accelerated post-processing on top of the live output.

```js
osc(30, 0.01, 1)
  .mult(osc(20, -0.1, 1).modulate(noise(3, 1)).rotate(0.7))
  .posterize([3, 10, 2].fast(0.5).smooth(1))
  .out();

t.draw(() => {
  t.background(0);
  t.overlay.characters(" .:-=+*#%@");
  t.overlay.cellColor(0, 0, 0, 0);
  t.image(t.overlay, t.grid.cols, t.grid.rows);

  const angle = -t.frameCount * 0.05;
  const dirX = Math.cos(angle);
  const dirY = Math.sin(angle);
  const amount = 4.0 + 1.5 * (0.5 + 0.5 * Math.sin(t.frameCount * 0.1));

  t.filter("chromaticAberration", {
    amount,
    direction: [dirX, dirY],
  });

  t.filter("glitch", Math.sin(t.frameCount * 0.005) % 0.5);
});
```

## Runtime behavior

The flok integration is designed for performance use:

- If a re-evaluation fails, the previous visual state remains visible.
- Re-running code does not reset `t.frameCount`, which helps when you want motion to continue through edits.

## Full example

This combines Hydra conversion, Strudel FFT analysis, layering, and filters:

**Strudel panel**

```js
$: s("bd bd:1, ~ <sd sd:2>, [hh hh:1]*4 hh:2")
  .bank("RolandTR909")
  .gain(0.8)
  .analyze("flok-master");

$: note("<c2 [c2 eb2] f2 [eb2 d2]>/2".slow(1.5))
  .s("sawtooth")
  .cutoff(sine.range(180, 600).slow(4))
  .gain(0.45)
  .analyze("flok-master");
```

**textmode panel**

```js
osc(30, 0.01, 1)
  .mult(osc(20, -0.1, 1).modulate(noise(3, 1)).rotate(0.7))
  .posterize([3, 10, 2].fast(0.5).smooth(1))
  .out();

t.fontSize(32);

const FFT_BINS = 48;
const audioLayer = t.layers.add({ blendMode: "additive", opacity: 0.8 });

audioLayer.draw(() => {
  t.clear();
  t.cellColor(0, 0, 0, 0);

  const maxH = (t.grid.rows / 2) * 0.45;
  const xAt = (n) => -t.grid.cols / 2 + n * t.grid.cols;

  t.lineWeight(2);
  t.char("|");
  t.charColor(170, 210, 255, 210);

  for (let i = 0; i < FFT_BINS; i++) {
    const n = i / (FFT_BINS - 1);
    const x = xAt(n);
    const v = typeof fft === "function" ? Math.max(0, fft(i, FFT_BINS)) : 0;
    const h = Math.max(1, Math.pow(v, 0.7) * maxH);

    t.push();
    t.translate(x, 0);
    t.line(0, -h, 0, h);
    t.pop();
  }
});

const LABEL_TEXT = "flok x hydra x strudel x textmode.js";
const labelLayer = t.layers.add({ blendMode: "normal", opacity: 1.0 });

labelLayer.draw(() => {
  t.clear();
  t.charColor(255, 255, 255, 255);
  t.cellColor(0, 0, 0, 255);

  const startX = -Math.floor(LABEL_TEXT.length / 2);
  t.push();
  t.translate(startX, 0);
  [...LABEL_TEXT].forEach((char, i) => {
    t.push();
    t.char(char);
    t.translate(i, 0);
    t.rect(1, 1);
    t.pop();
  });
  t.pop();
});

t.draw(() => {
  t.background(0);
  t.overlay.characters(" .:-=+*#%@");
  t.overlay.cellColor(0, 0, 0, 0);
  t.image(t.overlay, t.grid.cols, t.grid.rows);

  const angle = -t.frameCount * 0.05;
  t.filter("chromaticAberration", {
    amount: 4.0 + 1.5 * (0.5 + 0.5 * Math.sin(t.frameCount * 0.1)),
    direction: [Math.cos(angle), Math.sin(angle)],
  });

  t.filter("glitch", Math.sin(t.frameCount * 0.005) % 0.5);
});
```

## Resources

- **flok.cc**: [https://flok.cc/](https://flok.cc/)
- **flok documentation**: [https://codeberg.org/munshkr/flok](https://codeberg.org/munshkr/flok)
- **Hydra**: [https://hydra.ojack.xyz/](https://hydra.ojack.xyz/)
- **Hydra docs**: [https://hydra.ojack.xyz/docs/](https://hydra.ojack.xyz/docs/)
- **Strudel**: [https://strudel.cc/](https://strudel.cc/)
- **Strudel docs**: [https://strudel.cc/learn/](https://strudel.cc/learn/)
