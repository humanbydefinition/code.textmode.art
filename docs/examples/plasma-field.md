

::: textmode-sandbox {template=static hideEditor sketchId=plasma-field}

```html index.html [readonly]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>textmode | Plasma Field Example</title>

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
 * @name [textmode.js] Plasma Field
 * @description A colorful plasma field effect using multiple sine waves.
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

    const time = tm.frameCount * 0.02;
    
    for (let y = 0; y < tm.grid.rows; y++) {
        for (let x = 0; x < tm.grid.cols; x++) {
            tm.push();
            
            // Normalize coordinates
            const nx = x / tm.grid.cols;
            const ny = y / tm.grid.rows;
            
            // Create multiple plasma waves
            const plasma1 = Math.sin(nx * 8 + time);
            const plasma2 = Math.sin(ny * 6 + time * 1.3);
            const plasma3 = Math.sin((nx + ny) * 4 + time * 0.8);
            const plasma4 = Math.sin(Math.sqrt(nx * nx + ny * ny) * 12 + time * 1.5);
            
            // Combine plasma values
            const combined = (plasma1 + plasma2 + plasma3 + plasma4) / 4;
            const intensity = (combined + 1) / 2; // Normalize to 0-1
            
            // Create rainbow color cycling
            const hue = (intensity + time * 0.5) % 1;
            const saturation = 1.0;
            const lightness = intensity;
            
            // Convert HSL to RGB
            const hsl2rgb = (h, s, l) => {
                const c = (1 - Math.abs(2 * l - 1)) * s;
                const x = c * (1 - Math.abs((h * 6) % 2 - 1));
                const m = l - c / 2;
                let r, g, b;
                
                if (h < 1/6) [r, g, b] = [c, x, 0];
                else if (h < 2/6) [r, g, b] = [x, c, 0];
                else if (h < 3/6) [r, g, b] = [0, c, x];
                else if (h < 4/6) [r, g, b] = [0, x, c];
                else if (h < 5/6) [r, g, b] = [x, 0, c];
                else [r, g, b] = [c, 0, x];
                
                return [
                    Math.floor((r + m) * 255),
                    Math.floor((g + m) * 255),
                    Math.floor((b + m) * 255)
                ];
            };
            
            const [r, g, b] = hsl2rgb(hue, saturation, lightness);
            
            // Map intensity to characters
            if (intensity > 0.8) {
                tm.char('█');
            } else if (intensity > 0.6) {
                tm.char('▓');
            } else if (intensity > 0.4) {
                tm.char('▒');
            } else if (intensity > 0.2) {
                tm.char('░');
            } else if (intensity > 0.1) {
                tm.char('·');
            } else {
                tm.char(' ');
            }
            
            tm.charColor(r, g, b);
            tm.cellColor(0, 0, 0);
            tm.rect(x, y, 1, 1);
            
            tm.pop();
        }
    }
});

tm.windowResized(() => {
    tm.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

:::
