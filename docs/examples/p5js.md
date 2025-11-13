::: details p5.js {open}

::: sandbox {template=static}

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
  const canvas = createCanvas(windowWidth, windowHeight, WEBGL);

  // Initialize textmode.js with the p5.js canvas
  tm = textmode.create({ canvas: canvas.canvas, overlay: true, fontSize: 16 });

  tm.setup(() => {
      // Configure overlay settings
      tm.overlay
          .characters(" .:-=+*#%@")           // Character set for brightness mapping
          .cellColorMode("fixed")             // Use fixed cell color
          .cellColor(0, 0, 0)                 // Black cell background
          .charColorMode("sampled")           // Sample character color from image
          .background(0, 0, 0, 255);          // Black background for transparent pixels
  });

  tm.draw(() => {
      tm.clear();
      tm.image(tm.overlay, 0, 0, tm.grid.cols, tm.grid.rows);
  });
}

function draw() {
  clear();
  push();
  fill(255);
  rotateX(radians(frameCount * 3));
  rotateZ(radians(frameCount));
  directionalLight(255, 255, 255, 0, 0, -1);
  box(800, 100, 100);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
```

:::