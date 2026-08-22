---
title: p5.js Integration
description: Use textmode.js with p5.js sketches to render creative coding projects as real-time ASCII textmode graphics.
---

::: details p5.js {open}

::: textmode-sandbox {template=static}

```html index.html [readonly]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>textmode.js | Example</title>

    <style>
      html,
      body {
        margin: 0;
        padding: 0;
      }

      canvas {
        display: block;
      }
    </style>

    <!-- Import textmode.js -->
    <script src="https://cdn.jsdelivr.net/npm/p5@1.11.9/lib/p5.js"></script>
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
 * @name [textmode.js] p5.js example
 * @description A simple example of using textmode.js with p5.js in WEBGL mode.
 * @author humanbydefinition
 * @link https://github.com/humanbydefinition/textmode.js
 */

let tm;

function setup() {
  // One source pixel per display pixel is sufficient for textmode conversion.
  // p5.js 1.x preserves WEBGL drawing buffers by default.
  pixelDensity(1);
  const canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();

  // Initialize textmode.js with the p5.js canvas
  tm = textmode.create({ plugins: [OverlayPlugin], fontSize: 16 });

  const source = tm.overlay.setTarget(canvas.canvas);

  tm.setup(() => {
      // Configure overlay settings
      source
          .characters(" .:-=+*#%@")           // Character set for brightness mapping
          .cellColorMode("fixed")             // Use fixed cell color
          .cellColor(0, 0, 0)                 // Black cell background
          .charColorMode("sampled")           // Sample character color from image
          .background(0, 0, 0, 255);          // Black background for transparent pixels
  });

  tm.draw(() => {
      tm.background(0);
      tm.image(source, tm.grid.cols, tm.grid.rows);
  });
}

function draw() {
  background(2, 5, 14);
  const time = millis() * 0.001;
  const spacing = min(width, height) / 7.5;

  ambientLight(35, 45, 70);
  directionalLight(90, 180, 255, -0.4, 0.6, -1);
  pointLight(255, 80, 150, 0, 0, 320);

  rotateX(-0.8);
  rotateZ(0.12 * sin(time * 0.35));

  for (let y = -3; y <= 3; y++) {
    for (let x = -3; x <= 3; x++) {
      const distance = sqrt(x * x + y * y);
      const phase = time * 1.1 + x * 0.62 + y * 0.44;
      const lift = sin(phase) * spacing * 0.8;
      const depth = spacing * (0.45 + 0.16 * cos(phase + distance));

      push();
      translate(x * spacing, y * spacing, lift);
      rotateZ(phase * 0.08);
      ambientMaterial(80 + x * 18, 150 + y * 12, 230);
      box(spacing * 0.55, spacing * 0.55, depth);
      pop();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
```

:::
