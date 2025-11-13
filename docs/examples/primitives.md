::: details primitives {open}

::: sandbox {template=static rtl :previewHeight="600"}

```html index.html [readonly]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>textmode | Primitives example</title>

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
 * @name [textmode.js] Primitives showcase
 * @description Demonstration of all available drawing primitives in textmode.js arranged in a 3x2 grid layoutm.
 * @author humanbydefinition
 * @link https://github.com/humanbydefinition/textmode.js
 */

const tm = textmode.create({
    width: window.innerWidth,
    height: window.innerHeight,
    fontSize: 16,
    frameRate: 60
});

// Calculate grid layout (3 columns x 2 rows)
const cols = 3;
const rows = 2;
let cellWidth;
let cellHeight;

const colors = [
    [255, 100, 100], // Red for rectangles
    [100, 255, 100], // Green for ellipses
    [100, 100, 255], // Blue for lines
    [255, 255, 100], // Yellow for triangles
    [255, 100, 255], // Magenta for bezier curves
    [100, 255, 255], // Cyan for arcs
];

// Helper function to draw text labels
const drawLabel = (text, x, y) => {
    tm.push();
    tm.charColor(255, 255, 255);
    tm.cellColor(0, 0, 0);
    [...text].forEach((char, i) => {
        tm.char(char);
        tm.rect(x + i, y, 1, 1);
    });
    tm.pop();
};

tm.setup(() => {
  cellWidth = Math.floor(tm.grid.cols / cols);
  cellHeight = Math.floor(tm.grid.rows / rows);
});

tm.draw(() => {
    tm.background(20, 20, 30, 255); // Dark blue background

    // Title
    drawLabel('TEXTMODE.JS PRIMITIVES', Math.floor(tm.grid.cols / 2) - 10, 1);

    // 1. RECTANGLE (top-left)
    const rectX = 0;
    const rectY = 0;
    const rectCenterX = rectX * cellWidth + cellWidth / 2;
    const rectCenterY = rectY * cellHeight + cellHeight / 2 + 1;

    tm.push();
    tm.char('•');
    tm.charColor(...colors[0]);
    tm.cellColor(0, 0, 0);
    tm.rotateZ(tm.frameCount * 2);
    tm.rect(rectCenterX - 5, rectCenterY - 2, 10, 4);
    tm.pop();

    drawLabel('RECT', rectCenterX - 2, rectCenterY + 3);

    // 2. ELLIPSE (top-center)
    const ellipseX = 1;
    const ellipseY = 0;
    const ellipseCenterX = ellipseX * cellWidth + cellWidth / 2;
    const ellipseCenterY = ellipseY * cellHeight + cellHeight / 2 + 1;

    tm.push();
    tm.char('⌐');
    tm.charColor(...colors[1]);
    tm.cellColor(0, 0, 0);
    tm.rotateZ(tm.frameCount * 2);
    tm.ellipse(ellipseCenterX, ellipseCenterY, 10, 6);
    tm.pop();

    drawLabel('ELLIPSE', ellipseCenterX - 3, ellipseCenterY + 3);

    // 3. LINE (top-right)
    const lineX = 2;
    const lineY = 0;
    const lineCenterX = lineX * cellWidth + cellWidth / 2;
    const lineCenterY = lineY * cellHeight + cellHeight / 2 + 1;

    tm.push();
    tm.char('─');
    tm.charColor(...colors[2]);
    tm.cellColor(0, 0, 0);
    tm.lineWeight(2);
    tm.rotateZ(tm.frameCount * 2);
    tm.line(lineCenterX - 6, lineCenterY - 2, lineCenterX + 6, lineCenterY + 2);
    tm.pop();

    drawLabel('LINE', lineCenterX - 2, lineCenterY + 3);

    // 4. TRIANGLE (bottom-left)
    const triX = 0;
    const triY = 1;
    const triCenterX = triX * cellWidth + cellWidth / 2;
    const triCenterY = triY * cellHeight + cellHeight / 2 + 1;

    tm.push();
    tm.char('▲');
    tm.charColor(...colors[3]);
    tm.cellColor(0, 0, 0);
    tm.rotateZ(tm.frameCount * 2);
    tm.triangle(
        triCenterX, triCenterY - 3,        // Top point
        triCenterX - 5, triCenterY + 2,    // Bottom left
        triCenterX + 5, triCenterY + 2     // Bottom right
    );
    tm.pop();

    drawLabel('TRIANGLE', triCenterX - 4, triCenterY + 4);

    // 5. BEZIER CURVE (bottom-center)
    const bezierX = 1;
    const bezierY = 1;
    const bezierCenterX = bezierX * cellWidth + cellWidth / 2;
    const bezierCenterY = bezierY * cellHeight + cellHeight / 2 + 1;

    tm.push();
    tm.char('~');
    tm.charColor(...colors[4]);
    tm.cellColor(0, 0, 0);
    tm.lineWeight(2);
    tm.rotateZ(tm.frameCount * 2);
    
    // Animated S-curve
    const curveOffset = Math.sin(tm.frameCount * 0.04) * 2;
    tm.bezierCurve(
        bezierCenterX - 6, bezierCenterY + 2,                    // Start point
        bezierCenterX - 3, bezierCenterY - 3 + curveOffset,      // Control point 1
        bezierCenterX + 3, bezierCenterY + 3 - curveOffset,      // Control point 2
        bezierCenterX + 6, bezierCenterY - 2                     // End point
    );
    tm.pop();

    drawLabel('BEZIER', bezierCenterX - 3, bezierCenterY + 4);

    // 6. ARC (bottom-right)
    const arcX = 2;
    const arcY = 1;
    const arcCenterX = arcX * cellWidth + cellWidth / 2;
    const arcCenterY = arcY * cellHeight + cellHeight / 2 + 1;

    tm.push();
    tm.char('σ');
    tm.charColor(...colors[5]);
    tm.cellColor(0, 0, 0);
    
    tm.push();
    tm.rotateZ(tm.frameCount * 1.5);
    tm.arc(arcCenterX, arcCenterY, 10, 10, 0, 180);
    tm.pop();

    drawLabel('ARC', arcCenterX - 1, arcCenterY + 4);
});

tm.windowResized(() => {
    tm.resizeCanvas(window.innerWidth, window.innerHeight);
    cellWidth = Math.floor(tm.grid.cols / cols);
    cellHeight = Math.floor(tm.grid.rows / rows);
});
```
:::
