---
layout: doc
editLink: true
title: TextmodeColor
description: Represents a color in the textmode.js rendering system.
category: Classes
api: true
kind: Class
lastModified: 2026-04-06
hasConstructor: false
---

[textmode.js](../index.md) / TextmodeColor

# Class: TextmodeColor

Represents a color in the `textmode.js` rendering system.

Values are stored as `0-255` integers for compatibility with public APIs.
Normalized versions are also available for shader uploads.

Use [Textmodifier.color](Textmodifier.md#color) to create colors.

## Example

```javascript
// Demonstrating color creation and manipulation
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(10, 5, 15);

  const time = t.frameCount * 0.02;
  const count = 100;

  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2 * 3 + time;
    const radius = 5 + i * 0.4;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    t.push();
    t.translate(x, y);

    // Demonstrate different color creation methods based on index
    let col;
    if (i % 3 === 0) {
      // RGB: Warm colors
      col = t.color(255, i * 2, 50);
    } else if (i % 3 === 1) {
      // Hex: Teal accents
      col = t.color('#00FFCC');
    } else {
      // Grayscale: White stars
      col = t.color(255, 150);
    }

    t.charColor(col);
    t.char(i % 5 === 0 ? '+' : '#');
    t.point();
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="https://code.textmode.art/docs/leaderboard" target="_blank" rel="noopener noreferrer">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeColor/creation/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

## Properties

### a

```ts
readonly a: number;
```

Alpha component (0-255).

#### Example

```javascript
// Alpha transparency
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const time = t.frameCount * 0.05;
  const trailLen = 15;

  for (let i = 0; i < trailLen; i++) {
    // Create a fading white color
    const alpha = 255 * (1 - i / trailLen);
    const col = t.color(255, 255, 255, alpha);

    // Circular motion with lag
    const tOffset = time - i * 0.1;
    const x = Math.cos(tOffset) * 15;
    const y = Math.sin(tOffset) * 15;

    t.push();
    t.translate(x, y);
    t.char(col.a > 128 ? '@' : '.'); // Use alpha property to change char
    t.charColor(col);
    t.point();
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="https://code.textmode.art/docs/leaderboard" target="_blank" rel="noopener noreferrer">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeColor/a/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### b

```ts
readonly b: number;
```

Blue component (0-255).

#### Example

```javascript
// Blue channel waves
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0, 0, 20);

  for (let y = -10; y < 10; y++) {
    const phase = y * 0.2 + t.frameCount * 0.05;
    const offset = Math.sin(phase) * 5;

    // Generate a color for this wave
    const waveColor = t.color(50, 100, 150 + Math.sin(phase) * 100);

    t.push();
    t.translate(0, y * 2);
    t.char('~');

    // Read the blue component to modulate opacity
    t.charColor(100, 200, waveColor.b, waveColor.b); // Blue determines alpha

    t.rect(t.grid.cols * 0.8 + offset, 1);
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="https://code.textmode.art/docs/leaderboard" target="_blank" rel="noopener noreferrer">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeColor/b/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### g

```ts
readonly g: number;
```

Green component (0-255).

#### Example

```javascript
// Green channel visualization
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0, 10, 0); // Dim phosphor background

  const time = (t.frameCount * 0.05) % (Math.PI * 2);
  const radius = Math.min(t.grid.cols, t.grid.rows) * 0.4;

  // Scan the grid area
  for (let y = -radius; y < radius; y++) {
    for (let x = -radius; x < radius; x++) {
      if (x * x + y * y > radius * radius) continue;

      // Calculate angle of point relative to center
      let a = Math.atan2(y, x);
      if (a < 0) a += Math.PI * 2;

      // Calculate distance from scan line angle
      let diff = time - a;
      if (diff < 0) diff += Math.PI * 2;

      // Fade out trail
      const brightness = Math.max(0, 255 - diff * 100);

      // Blip targets
      const isTarget = (Math.abs(x - 10) < 2 && Math.abs(y + 5) < 2);
      const g = isTarget ? Math.max(brightness, 150 + Math.sin(t.frameCount*0.5)*100) : brightness;

      const col = t.color(0, g, 0);

      if (col.g > 20) {
        t.push();
        t.translate(x, y);
        t.charColor(col);
        // Use green intensity to pick character
        t.char(col.g > 180 ? '█' : col.g > 80 ? '▒' : '·');
        t.point();
        t.pop();
      }
    }
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="https://code.textmode.art/docs/leaderboard" target="_blank" rel="noopener noreferrer">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeColor/g/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### r

```ts
readonly r: number;
```

Red component (0-255).

#### Example

```javascript
// Visualizing the red component
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const cols = 20;
  const step = t.grid.cols / cols;

  for (let i = 0; i < cols; i++) {
    // Create a dynamic color
    const r = (Math.sin(t.frameCount * 0.05 + i * 0.5) * 0.5 + 0.5) * 255;
    const col = t.color(r, 0, 0);

    t.push();
    t.translate((i - cols / 2) * step + step / 2, 0);

    // Use the red component property to drive height
    const height = (col.r / 255) * t.grid.rows * 0.8;

    t.charColor(col);
    t.char('|');
    t.rect(step - 1, height);
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="https://code.textmode.art/docs/leaderboard" target="_blank" rel="noopener noreferrer">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeColor/r/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

## Accessors

### normalized

#### Get Signature

```ts
get normalized(): [number, number, number, number];
```

Returns the normalized *(0-1)* RGBA array.

Useful for passing color data to WebGL shaders.

##### Returns

\[`number`, `number`, `number`, `number`\]

A [r, g, b, a] tuple where each component is between 0.0 and 1.0.

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

const color = t.color(255, 128, 0, 255);
const labels = ['R', 'G', 'B', 'A'];
const colors = [
	[255, 100, 100],
	[120, 255, 140],
	[120, 180, 255],
	[240, 240, 240],
];

function drawText(text, x, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(x, y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	drawText(text, -Math.floor(text.length / 2), y, rgb);
}

function drawMeter(label, value, y, rgb, phase) {
	const blocks = Math.round(value * 10);
	drawText(`${label} ${value.toFixed(2)}`, -13, y, rgb);

	for (let i = 0; i < 10; i++) {
		const active = i < blocks;
		const glow = active ? 40 + Math.round(60 * (0.5 + 0.5 * Math.sin(t.frameCount * 0.12 + phase + i))) : 0;
		const meterColor = active
			? [Math.min(255, rgb[0] + glow), Math.min(255, rgb[1] + glow), Math.min(255, rgb[2] + glow)]
			: [55, 65, 80];

		t.push();
		t.translate(1 + i, y);
		t.charColor(meterColor[0], meterColor[1], meterColor[2]);
		t.char(active ? '|' : '░');
		t.point();
		t.pop();
	}
}

t.draw(() => {
	const normalized = color.normalized;
	const rgba = color.rgba.join(', ');

	t.background(12, 16, 24);

	drawCenteredText('NORMALIZED', -6, [180, 190, 220]);
	drawCenteredText(`RGBA: ${rgba}`, -2, color.rgb);
	drawCenteredText(`[${normalized.map((value) => value.toFixed(2)).join(', ')}]`, 0, [230, 235, 245]);

	for (let i = 0; i < labels.length; i++) {
		drawMeter(labels[i], normalized[i], 3 + i * 2, colors[i], i * 0.8);
	}
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="https://code.textmode.art/docs/leaderboard" target="_blank" rel="noopener noreferrer">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeColor/normalized/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### rgb

#### Get Signature

```ts
get rgb(): [number, number, number];
```

Returns a plain RGB array with integer components.

##### Returns

\[`number`, `number`, `number`\]

A [r, g, b] tuple with values between 0 and 255.

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

const color = t.color(50, 100, 200);
const labels = ['R', 'G', 'B'];
const channelColors = [
	[255, 110, 110],
	[120, 255, 140],
	[120, 180, 255],
];

function drawCenteredText(text, y, rgb = [255, 255, 255]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	const [r, g, b] = color.rgb;
	const values = [r, g, b];

	t.background(10, 14, 24);

	for (let i = 0; i < values.length; i++) {
		const angle = t.frameCount * 0.03 + (Math.PI * 2 * i) / values.length;
		const radius = 6 + (values[i] / 255) * 8;
		const x = Math.round(Math.cos(angle) * radius * 1.4);
		const y = Math.round(Math.sin(angle) * radius);

		t.push();
		t.translate(x, y);
		t.charColor(channelColors[i][0], channelColors[i][1], channelColors[i][2]);
		t.char(labels[i]);
		t.point();
		t.pop();
	}

	t.push();
	t.charColor(color);
	t.char('■');
	t.rect(8, 4);
	t.pop();

	drawCenteredText('RGB', -6, [180, 190, 220]);
	drawCenteredText(`[${r}, ${g}, ${b}]`, 5, color.rgb);
	drawCenteredText('red, green, blue components', 8, [170, 180, 205]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="https://code.textmode.art/docs/leaderboard" target="_blank" rel="noopener noreferrer">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeColor/rgb/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### rgba

#### Get Signature

```ts
get rgba(): [number, number, number, number];
```

Returns a plain RGBA array with integer components.

##### Returns

\[`number`, `number`, `number`, `number`\]

A [r, g, b, a] tuple with values between 0 and 255.

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

const color = t.color(255, 128, 0, 100);

function drawText(text, x, y, rgb = [255, 255, 255], alpha = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(rgb[0], rgb[1], rgb[2], alpha);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

function drawCenteredText(text, y, rgb = [255, 255, 255], alpha = 255) {
	drawText(text, -Math.floor(text.length / 2), y, rgb, alpha);
}

function drawChecker(x, y, width, height) {
	for (let row = 0; row < height; row++) {
		for (let col = 0; col < width; col++) {
			if ((row + col) % 2 !== 0) {
				continue;
			}

			t.push();
			t.translate(x + col, y + row);
			t.charColor(90, 100, 120, 90);
			t.char('.');
			t.point();
			t.pop();
		}
	}
}

function drawSwatch(x, label, swatchColor, alpha = 255) {
	const left = x - 4;
	drawChecker(left, -2, 8, 4);

	t.push();
	t.translate(x, 0);
	t.charColor(swatchColor[0], swatchColor[1], swatchColor[2], alpha);
	t.char('@');
	t.rect(8, 4);
	t.pop();

	drawText(label, x - Math.floor(label.length / 2), 4, [220, 225, 235]);
}

t.draw(() => {
	const [r, g, b, a] = color.rgba;
	const offset = Math.min(11, Math.max(8, Math.floor(t.grid.cols / 4)));

	t.background(12, 16, 24);

	drawCenteredText('RGBA', -7, [180, 190, 220]);
	drawCenteredText(`[${r}, ${g}, ${b}, ${a}]`, -5, [230, 235, 245]);

	drawSwatch(-offset, 'RGBA 255', [r, g, b], 255);
	drawSwatch(offset, `RGBA ${a}`, [r, g, b], a);

	drawCenteredText('alpha changes opacity', 7, [170, 180, 205]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="https://code.textmode.art/docs/leaderboard" target="_blank" rel="noopener noreferrer">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeColor/rgba/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

## Methods

### withAlpha()

```ts
withAlpha(alpha): TextmodeColor;
```

Create a copy of this color with a different alpha value.

Useful for creating semi-transparent variations of existing colors without
manually copying RGB components.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `alpha` | `number` | The new alpha value (0-255). Values outside this range will be clamped. |

#### Returns

`TextmodeColor`

A new TextmodeColor instance with the updated alpha.

#### Example

```javascript
// Modifying alpha of a base color
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const base = t.color(50, 150, 255);

  // Draw overlapping plates with varying opacity
  for (let i = 0; i < 5; i++) {
    t.push();
    t.translate((i - 2) * 5, Math.sin(t.frameCount * 0.05 + i) * 5);

    // Create a variation of the base color
    const opacity = 100 + i * 30;
    t.charColor(base.withAlpha(opacity));

    t.char(String.fromCharCode(65 + i));
    t.rect(12, 12);
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="https://code.textmode.art/docs/leaderboard" target="_blank" rel="noopener noreferrer">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/TextmodeColor/withAlpha/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>
