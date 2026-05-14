---
layout: doc
editLink: true
title: TextmodeColor
description: Represents a color in the textmode.js rendering system.
category: Classes
api: true
kind: Class
lastModified: 2026-05-14
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
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

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
	t.background(6, 10, 22);

	drawCenteredText('TextmodeColor.creation', -6, [240, 245, 255]);

	const col1 = t.color(255, 120, 80);
	t.push();
	t.translate(-6, 0);
	t.charColor(col1.r, col1.g, col1.b);

	const label1 = 'RGB: 255, 120, 80';
	for (let i = 0; i < label1.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(label1[i]);
		t.point();
		t.pop();
	}
	t.pop();

	const col2 = t.color('#80FFB0');
	t.push();
	t.translate(-6, 4);
	t.charColor(col2.r, col2.g, col2.b);

	const label2 = 'Hex: #80FFB0';
	for (let i = 0; i < label2.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(label2[i]);
		t.point();
		t.pop();
	}
	t.pop();

	const col3 = t.color(180);
	t.push();
	t.translate(-6, 8);
	t.charColor(col3.r, col3.g, col3.b);

	const label3 = 'Gray: 180';
	for (let i = 0; i < label3.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(label3[i]);
		t.point();
		t.pop();
	}
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Properties

### a

```ts
readonly a: number;
```

Alpha component (0-255).

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
	t.background(0);

	const time = t.frameCount * 0.05;
	const trailLen = 15;

	for (let i = 0; i < trailLen; i++) {
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

***

### b

```ts
readonly b: number;
```

Blue component (0-255).

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;

	for (let y = -6; y <= 6; y++) {
		const phase = y * 0.3 + time;
		const wave = Math.sin(phase);
		const shapedWave = 0.7 * Math.sin(phase) + 0.3 * Math.sin(phase * 3);
		const blue = Math.round(50 + shapedWave * 180);
		const c = t.color(80, 120, blue);

		const offset = shapedWave * 3;

		t.push();
		t.translate(offset, y);
		t.charColor(c.r, c.g, c.b);
		t.char('~');
		t.rect(Math.abs(shapedWave) * 12 + 2, 1);
		t.pop();
	}

	const centerBlue = Math.round(50 + Math.abs(Math.sin(time)) * 180);
	const label = `blue: ${t.color(80, 120, centerBlue).b}`;
	t.push();
	t.translate(-Math.floor(label.length / 2), 10);
	t.charColor(80, 120, centerBlue);

	for (let i = 0; i < label.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(label[i]);
		t.point();
		t.pop();
	}

	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### g

```ts
readonly g: number;
```

Green component (0-255).

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;

	for (let y = -6; y <= 6; y++) {
		const phase = y * 0.3 + time;
		const wave = Math.sin(phase);
		const shapedWave = 0.7 * Math.sin(phase) + 0.3 * Math.sin(phase * 3);
		const green = Math.round(50 + shapedWave * 180);
		const c = t.color(80, green, 120);

		const offset = shapedWave * 3;

		t.push();
		t.translate(offset, y);
		t.charColor(c.r, c.g, c.b);
		t.char('~');
		t.rect(Math.abs(shapedWave) * 12 + 2, 1);
		t.pop();
	}

	const centerGreen = Math.round(50 + Math.abs(Math.sin(time)) * 180);
	const label = `green: ${t.color(80, centerGreen, 120).g}`;
	t.push();
	t.translate(-Math.floor(label.length / 2), 10);
	t.charColor(80, centerGreen, 120);

	for (let i = 0; i < label.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(label[i]);
		t.point();
		t.pop();
	}

	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### r

```ts
readonly r: number;
```

Red component (0-255).

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;

	for (let y = -6; y <= 6; y++) {
		const phase = y * 0.3 + time;
		const shapedWave = 0.7 * Math.sin(phase) + 0.3 * Math.sin(phase * 3);
		const red = Math.round(80 + shapedWave * 175);
		const c = t.color(red, 40, 40);

		const offset = shapedWave * 3;

		t.push();
		t.translate(offset, y);
		t.charColor(c.r, c.g, c.b);
		t.char('~');
		t.rect(Math.abs(shapedWave) * 12 + 2, 1);
		t.pop();
	}

	const centerRed = Math.round(80 + Math.abs(Math.sin(time)) * 175);
	const label = `red: ${t.color(centerRed, 40, 40).r}`;
	t.push();
	t.translate(-Math.floor(label.length / 2), 10);
	t.charColor(centerRed, 40, 40);

	for (let i = 0; i < label.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(label[i]);
		t.point();
		t.pop();
	}

	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

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
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
	t.background(0);

	const base = t.color(50, 150, 255);

	for (let i = 0; i < 5; i++) {
		t.push();
		t.translate((i - 2) * 5, Math.sin(t.frameCount * 0.05 + i) * 5);

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
