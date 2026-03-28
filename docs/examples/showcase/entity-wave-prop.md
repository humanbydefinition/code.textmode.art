::: textmode-sandbox {template=static hideEditor sketchId=entity-wave-prop}

```html index.html [readonly]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>textmode | Entity Wave Propagation Example</title>

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
 * @name [textmode.js] Entity Based Wave Propagation
 * @description A Lissajous-curve entity floating around water, causing wave displacement.
 * @author trintlermint
 * @link https://github.com/humanbydefinition/textmode.js
 */
const tm = textmode.create({
  width: window.innerWidth,
  height: window.innerHeight,
  fontSize: 16,
  frameRate: 60,
});

let cols, rows, cur, prev;

// DAMP: wave damping factor. closer to 1 implies that longer-lasting ripples, lower means that ripples die quickly
const DAMP = 0.955;
const CHARS = " .'`~:;-=+*#%&@";
const TAIL_RIPPLE_OFFSET = 30;
const WHALE = [
  '       .                   ',
  '      ":"                  ',
  '    ___:____     |"\\/"|      ',
  '  ,\'        `.    \\  /      ',
  '  |  O        \\___/  |      ',
  '~^~^~^~^~^~^~^~^~^~^~^~^~',
];
// WHALE made by Riitta Rasimus, shared on Textmode EU


function precomputeCols(art) {
  const h = art.length;
  const w = Math.max(...art.map(l => l.length));
  const cols = [];
  for (let fx = 0; fx < w; fx++) {
    const col = [];
    for (let fy = 0; fy < h; fy++) {
      const ch = art[fy][fx];
      if (ch && ch !== ' ') col.push({ ch, vert: fy - Math.floor(h / 2) });
    }
    if (col.length) cols.push(col);
  }
  return { cols, h, w };
}

const whaleData = precomputeCols(WHALE);

let whaleTrail = [];
// TRAIL_LEN: how many past positions to remember. longer = longer visible body, shorter = stubby whale
const TRAIL_LEN = 80;

function init() {
  cols = tm.grid.cols;
  rows = tm.grid.rows;
  cur = new Float32Array(cols * rows);
  prev = new Float32Array(cols * rows);
  whaleTrail = [];
}

function drop(x, y, force) {
  x = Math.round(x);
  y = Math.round(y);
  // Remove everything below this line in drop() function to remove the splashes
  if (x < 1 || x >= cols - 1 || y < 1 || y >= rows - 1) return;
  const i = y * cols + x;
  cur[i] += force;
  // neighbor bleed: higher values gives a wider initial splash, lower gives tighter point ripple
  if (x > 1) cur[i - 1] += force * 0.4;
  if (x < cols - 2) cur[i + 1] += force * 0.4;
  if (y > 1) cur[i - cols] += force * 0.35;
  if (y < rows - 2) cur[i + cols] += force * 0.35;
}

tm.setup(() => { init(); });

tm.draw(() => {
  if (!cur) return;
  const time = tm.frameCount / 60;

  // lissajous curve spanning the canvas, see: https://en.wikipedia.org/wiki/Lissajous_curve.
  // frequency multipliers (0.7, 1.9, 0.5, 1.7): change the shape of the swimming path.
  //   try integer ratios for closed loops (e.g. 1.0 and 2.0), irrational combs for drifting paths
  // amplitude multipliers (0.38, 0.12, 0.35, 0.1): how far the whale swims from center (pls look at curve to understand).
  //   larger values use more of the screen, smaller stays near the middle
  // 
  const sx = Math.sin(time * 0.7) * (cols * 0.38) +
             Math.sin(time * 1.9 + 1.2) * (cols * 0.12);
  const sy = Math.cos(time * 0.5) * (rows * 0.35) +
             Math.cos(time * 1.7 + 0.8) * (rows * 0.1);

  const headX = cols / 2 + sx;
  const headY = rows / 2 + sy;

  whaleTrail.unshift({ x: headX, y: headY });
  if (whaleTrail.length > TRAIL_LEN) whaleTrail.length = TRAIL_LEN;

  // head drop: frequency (% 2) and force (4) control how strong the bow wave (big thingie in front of the whale) is
  if (tm.frameCount % 2 === 0) {
    drop(headX, headY, 4);
  }
  // create a secondary ripple behind the whale.
  // the index (TAIL_RIPPLE_OFFSET) controls how far back the wave forms; force (1.5) controls its strength
  if (whaleTrail.length > 10 && tm.frameCount % 4 === 0) {
    const tail = whaleTrail[Math.min(whaleTrail.length - 1, TAIL_RIPPLE_OFFSET)];
    drop(tail.x, tail.y, 1.5);
  }

  // simulate wave propagation (dissipation of waves)
  const next = prev;
  for (let y = 1; y < rows - 1; y++) {
    const yo = y * cols;
    for (let x = 1; x < cols - 1; x++) {
      const i = yo + x;
      // the 0.5 here is the propagation speed factor. higher gives it faster wave spread, but >0.5 becomes can be a bit unstable
      next[i] = ((cur[i - 1] + cur[i + 1] + cur[i - cols] + cur[i + cols]) * 0.5 - prev[i]) * DAMP;
    }
  }
  // gravity (0.01) pulls ripples slightly downward(?) basically feels like dissolving in each frame. increase for a rain on water feeling
  for (let y = rows - 2; y >= 1; y--) {
    const yo = y * cols;
    for (let x = 1; x < cols - 1; x++) {
      next[yo + x] += next[(y - 1) * cols + x] * 0.01;
    }
  }
  prev = cur;
  cur = next;

  // render the water
  tm.background(0);
  const hc = Math.floor(cols / 2);
  const hr = Math.floor(rows / 2);

  for (let y = 0; y < rows; y++) {
    const yo = y * cols;
    for (let x = 0; x < cols; x++) {
      const h = cur[yo + x];
      const a = Math.abs(h);
      // visibility threshold, raise to hide faint ripples, lower for v.v.
      if (a < 0.06) continue;

      // char mapping: the 2.0 multiplier controls how quickly chars escalate i.e. @ to # faster.
      const ci = Math.min(Math.floor(a * 2.0), CHARS.length - 1);
      // brightness: the 50 multiplier controls overall water brightness
      const bright = Math.min(a * 50, 255);
      const r = Math.min(bright * 0.2, 80);
      const g = Math.min(bright * 0.55 + 30, 255);
      const b = Math.min(bright * 1.0 + 60, 255);

      tm.char(CHARS[ci]);
      tm.charColor(r, g, b);
      // cell bg tint: faint blue glow behind the characters
      //
      tm.cellColor(0, Math.min(a * 4, 18), Math.min(a * 10, 40));
      tm.push();
      tm.translate(x - hc, y - hr);
      tm.rect(1, 1);
      tm.pop();
    }
  }

  // WHALE
  const artCols = whaleData.cols;
  // spacing: distance between trail samples per art column.
  // higher gives creature more stretched/spread body, lower = compact
  const spacing = 1.8;
  for (let col = 0; col < artCols.length; col++) {
    const trailPos = Math.floor(col * spacing);
    if (trailPos >= whaleTrail.length) break;
    const pos = whaleTrail[trailPos];
    // The 0.7 controls how much the whale's tail dims. 0-1: no fade -> tail dark
    const fade = 1.0 - (col / artCols.length) * 0.7;

    for (const { ch, vert } of artCols[col]) {
      const gx = Math.round(pos.x);
      const gy = Math.round(pos.y) + vert;

      // whale color currently gives a base brightness (160) and has ratios to set rgb, change to your liking
      const bright = 160 * fade;
      const r = bright * 0.12;
      const g = Math.min(bright * 0.55 + 40, 190);
      const b = Math.min(bright + 70, 255);

      tm.char(ch);
      tm.charColor(r, g, b);
      tm.cellColor(0, Math.floor(fade * 3), Math.floor(fade * 10));
      tm.push();
      tm.translate(gx - hc, gy - hr);
      tm.rect(1, 1);
      tm.pop();
    }
  }
});

tm.windowResized(() => {
  tm.resizeCanvas(window.innerWidth, window.innerHeight);
  init();
});

```

:::

