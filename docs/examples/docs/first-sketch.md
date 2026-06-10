---
title: First Sketch
description: Small complete textmode.js sketch with draw and resize callbacks.
---

::: textmode-sandbox {template=static :previewHeight="360"}

```html index.html [readonly]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>textmode.js | First sketch</title>

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

    <script src="https://unpkg.com/textmode.js@latest/dist/textmode.umd.js"></script>
  </head>

  <body>
    <script type="module" src="sketch.js"></script>
  </body>
</html>
```

```js sketch.js [active]
const t = textmode.create({
  width: window.innerWidth,
  height: window.innerHeight,
  fontSize: 16,
  frameRate: 60,
});

t.draw(() => {
  t.background(18, 20, 28);

  t.char("@");
  t.charColor(255, 180, 90);
  t.cellColor(0, 0, 0);

  t.rotateZ(t.frameCount * 2);
  t.rect(12, 8);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

:::
