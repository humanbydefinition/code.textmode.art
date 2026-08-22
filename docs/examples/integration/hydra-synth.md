---
title: Hydra Synth Integration
description: Combine Hydra live-coding visuals with textmode.js to create real-time ASCII art from video synthesizer outputs.
---

::: details hydra-synth {closed}

::: textmode-sandbox {template=static}

```html index.html [readonly]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>textmode.js | Example</title>

    <style>
      body {
        margin: 0;
        padding: 0;
        background: #000;
        overflow: hidden;
      }

      canvas {
        display: block;
      }
    </style>

    <!-- Import dependencies -->
    <script src="https://cdn.jsdelivr.net/npm/hydra-synth/dist/hydra-synth.js"></script>
    <script src="https://unpkg.com/textmode.js@latest/dist/textmode.umd.js"></script>
    <script src="https://unpkg.com/textmode.overlay.js@latest/dist/textmode.overlay.umd.js"></script>
  </head>

  <body>
    <script src="sketch.js"></script>
  </body>
</html>
```

```js sketch.js [active]
/**
 * @name [textmode.js] hydra-synth Example
 * @description A simple example of using textmode.js with hydra-synth.
 * @author humanbydefinition
 * @link https://github.com/humanbydefinition/textmode.js
 */

// Establish the WebGL context attributes before Hydra creates regl.
const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const gl = canvas.getContext('webgl', { preserveDrawingBuffer: true });

if (!gl) {
    throw new Error('WebGL is not available.');
}

// Initialize hydra-synth with the preserved canvas.
const hydraInstance = new Hydra({
    canvas,
    makeGlobal: false,
    detectAudio: false,
    width: window.innerWidth,
    height: window.innerHeight
});

const hydra = hydraInstance.synth;

// Create an animated, layered field with Hydra's normal autoLoop.
hydra
    .osc(9, 0.04, 1.1)
    .kaleid(5)
    .modulate(hydra.noise(2, 0.08), 0.12)
    .out();

// Initialize textmodifier
const tm = textmode.create({ plugins: [OverlayPlugin] });

const source = tm.overlay.setTarget(canvas);

tm.setup(() => {
    // Configure overlay settings
    source
        .characters(" .:-=+*#%@")           // Character set for brightness mapping
        .cellColorMode("fixed")             // Use fixed cell color
        .cellColor(0, 0, 0)                 // Black cell background
        .charColorMode("sampled")           // Sample character color from image
        .background(0, 0, 0, 255);        // Black background for transparent pixels
});

tm.draw(() => {
    tm.background(0);
    tm.image(source, tm.grid.cols, tm.grid.rows);
});

// Handle window resize
window.addEventListener('resize', () => {
    hydra.setResolution(window.innerWidth, window.innerHeight);
});
```

:::
