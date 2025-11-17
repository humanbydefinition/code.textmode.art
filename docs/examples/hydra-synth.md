::: details hydra-synth {closed}

::: sandbox {template=static}

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
    <script src="https://unpkg.com/textmode.js@0.6.0-beta.2/dist/textmode.umd.js"></script>
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

// Initialize hydra-synth
const hydraInstance = new Hydra({
    makeGlobal: false,
    detectAudio: false,
    width: window.innerWidth,
    height: window.innerHeight
});

const hydra = hydraInstance.synth;

// Create animated pattern with hydra
hydra.osc().rotate().out();

// Get the canvas that hydra is rendering to
const canvas = hydraInstance.canvas;

// Initialize textmodifier
const tm = textmode.create({ canvas: canvas, overlay: true });

tm.setup(() => {
    // Configure overlay settings
    tm.overlay
        .characters(" .:-=+*#%@")           // Character set for brightness mapping
        .cellColorMode("fixed")             // Use fixed cell color
        .cellColor(0, 0, 0)                 // Black cell background
        .charColorMode("sampled")           // Sample character color from image
        .background(0, 0, 0, 255);        // Black background for transparent pixels
});

tm.draw(() => {
    tm.background(0);
    tm.image(tm.overlay, tm.grid.cols, tm.grid.rows);
});

// Handle window resize
window.addEventListener('resize', () => {
    hydra.setResolution(window.innerWidth, window.innerHeight);
});
```

:::