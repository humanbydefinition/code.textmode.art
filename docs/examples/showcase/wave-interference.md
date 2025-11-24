

::: textmode-sandbox {template=static hideEditor sketchId=wave-interference}

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

    <!-- Import textmode.js -->
    <script src="https://unpkg.com/textmode.js@latest/dist/textmode.umd.js"></script>
  </head>

  <body>
    <script src="sketch.js"></script>
  </body>
</html>
```

```js sketch.js [active]
/**
 * @name [textmode.js] Animated Wave Pattern
 * @description A sine wave interference pattern using character-based graphics.
 * @author humanbydefinition
 * @link https://github.com/humanbydefinition/textmode.js
 */

// Create textmode instance
const tm = textmode.create({
    width: window.innerWidth,
    height: window.innerHeight,
    fontSize: 16
});

tm.draw(() => {
    tm.background(0);

    const time = tm.frameCount * 0.01;
    const step = 3;
    
    for (let gridY = 0; gridY < tm.grid.rows + step; gridY += step) {
        for (let gridX = 0; gridX < tm.grid.cols + step; gridX += step) {
            // Calculate distance from center (in grid coordinates)
            const dx = gridX - tm.grid.cols / 2;
            const dy = gridY - tm.grid.rows / 2;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Create ripple effect
            const wave = Math.sin(distance * 0.3 - time * 8) * 0.5 + 0.5;
            
            // Add secondary wave for interference
            const wave2 = Math.sin(gridX * 0.2 + time * 4) * Math.sin(gridY * 0.15 + time * 3);
            const combined = (wave + wave2 * 0.3) / 1.3;
            
            // Map to characters based on wave intensity
            if (combined > 0.7) {
                tm.char('#');
                tm.charColor(255, 200, 100);
            } else if (combined > 0.5) {
                tm.char('@');
                tm.charColor(200, 150, 255);
            } else if (combined > 0.3) {
                tm.char('%');
                tm.charColor(100, 255, 200);
            } else if (combined > 0.1) {
                tm.char('.');
                tm.charColor(150, 100, 255);
            } else {
                tm.char(' ');
            }
            
            // Convert grid coordinates to center-based coordinates
            const x = gridX + 1 - tm.grid.cols / 2;
            const y = gridY - tm.grid.rows / 2;
            
            tm.push();
            tm.translate(x, y, 0);
            tm.cellColor(0, 0, 0);
            tm.rect(step, step);
            tm.pop();
        }
    }
});

tm.windowResized(() => {
    tm.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

:::