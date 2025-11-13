::: textmode-sandbox {template=static hideEditor sketchId=digital-rain}

```html index.html [readonly]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>textmode | Digital Rain Example</title>

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
 * @name [textmode.js] Digital Rain
 * @description Matrix-style falling digital rain using character-based graphics.
 * @author humanbydefinition
 * @link https://github.com/humanbydefinition/textmode.js
 */

// Create textmode instance
const tm = textmode.create({
    width: window.innerWidth,
    height: window.innerHeight,
    fontSize: 16
});

// Rain drop system
const drops = [];
const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

tm.setup(() => {
    // Initialize rain drops
    for (let x = 0; x < tm.grid.cols; x++) {
        drops[x] = {
            y: Math.random() * -50,
            speed: Math.random() * 0.3 + 0.1,
            length: Math.floor(Math.random() * 15) + 5,
            chars: []
        };
        
        // Generate random characters for this drop
        for (let i = 0; i < drops[x].length; i++) {
            drops[x].chars[i] = chars[Math.floor(Math.random() * chars.length)];
        }
    }
});


tm.draw(() => {
    tm.background(0);

    // Update and draw each rain drop
    for (let x = 0; x < drops.length; x++) {
        const drop = drops[x];
        
        // Draw the trail
        for (let i = 0; i < drop.length; i++) {
            const y = drop.y - i;
            
            if (y >= 0 && y < tm.grid.rows) {
                tm.push();
                
                // Calculate fade based on position in trail
                const fade = (drop.length - i) / drop.length;
                
                // Head of the trail is brightest white
                if (i === 0) {
                    tm.charColor(255, 255, 255);
                } else {
                    // Body fades from bright green to dark green
                    const green = Math.floor(255 * fade * 0.8);
                    tm.charColor(0, green, 0);
                }
                
                // Occasionally change character for glitch effect
                if (Math.random() < 0.1) {
                    drop.chars[i] = chars[Math.floor(Math.random() * chars.length)];
                }
                
                tm.char(drop.chars[i]);
                tm.cellColor(0, 0, 0);
                tm.rect(x, Math.floor(y), 1, 1);
                
                tm.pop();
            }
        }
        
        // Update drop position
        drop.y += drop.speed;
        
        // Reset drop when it goes off screen
        if (drop.y - drop.length > tm.grid.rows) {
            drop.y = Math.random() * -50;
            drop.speed = Math.random() * 0.3 + 0.1;
            drop.length = Math.floor(Math.random() * 15) + 5;
            
            // Generate new random characters
            for (let i = 0; i < drop.length; i++) {
                drop.chars[i] = chars[Math.floor(Math.random() * chars.length)];
            }
        }
    }
});

tm.windowResized(() => {
    tm.resizeCanvas(window.innerWidth, window.innerHeight);
    
    // Reinitialize drops for new grid size
    drops.length = 0;
    for (let x = 0; x < tm.grid.cols; x++) {
        drops[x] = {
            y: Math.random() * -50,
            speed: Math.random() * 0.3 + 0.1,
            length: Math.floor(Math.random() * 15) + 5,
            chars: []
        };
        
        for (let i = 0; i < drops[x].length; i++) {
            drops[x].chars[i] = chars[Math.floor(Math.random() * chars.length)];
        }
    }
});
```

:::
