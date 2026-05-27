---
layout: doc
editLink: true
title: TextmodeColor
description: Color value used by textmode drawing APIs.
category: Classes
api: true
kind: Class
lastModified: 2026-05-27
hasConstructor: false
---

[textmode.js](../index.md) / TextmodeColor

# Class: TextmodeColor

Color value used by textmode drawing APIs.

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

const labelLayer = t.layers.add();

t.draw(() => {
	t.background(6, 10, 22);
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	const col1 = t.color(255, 120, 80);
	const col2 = t.color('#80FFB0');
	const col3 = t.color(180);

	drawText('TEXTMODECOLOR.CREATION', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: STATIC COLOR CREATOR', x, y++, 100, 220, 255);
	drawText('Supports RGB, Hex strings, Grays.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('RGB : 255, 120, 80', x, y++, col1.r, col1.g, col1.b);
	drawText('Hex : #80FFB0', x, y++, col2.r, col2.g, col2.b);
	drawText('Gray: 180', x, y++, col3.r, col3.g, col3.b);
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

const labelLayer = t.layers.add();
let currentAlpha = 255;

t.draw(() => {
	t.background(0);

	const time = t.frameCount * 0.05;
	const trailLen = 15;

	for (let i = 0; i < trailLen; i++) {
		const alpha = 255 * (1 - i / trailLen);
		const col = t.color(255, 255, 255, alpha);

		const tOffset = time - i * 0.1;
		const x = Math.cos(tOffset) * 15;
		const y = Math.sin(tOffset) * 15;

		t.push();
		t.translate(x, y);
		t.char(col.a > 128 ? '@' : '.');
		t.charColor(col);
		t.point();
		t.pop();
	}

	const activeColor = t.color(255, 255, 255, 128 + Math.round(127 * Math.sin(time)));
	currentAlpha = activeColor.a;
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODECOLOR.A', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: ALPHA COLOR CHANNEL READ', x, y++, 100, 220, 255);
	drawText('Accesses alpha opacity of active color.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`ALPHA VALUE : ${currentAlpha}`, x, y++, 240, 240, 240);
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

const labelLayer = t.layers.add();
let centerBlue = 0;

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;

	for (let y = -6; y <= 6; y++) {
		const phase = y * 0.3 + time;
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

	centerBlue = Math.round(50 + Math.abs(Math.sin(time)) * 180);
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODECOLOR.B', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: BLUE COLOR CHANNEL READ', x, y++, 100, 220, 255);
	drawText('Accesses blue channel of active color.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`BLUE VALUE  : ${centerBlue}`, x, y++, 80, 120, centerBlue);
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

const labelLayer = t.layers.add();
let centerGreen = 0;

t.draw(() => {
	t.background(6, 10, 22);

	const time = t.frameCount * 0.02;

	for (let y = -6; y <= 6; y++) {
		const phase = y * 0.3 + time;
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

	centerGreen = Math.round(50 + Math.abs(Math.sin(time)) * 180);
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODECOLOR.G', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: GREEN COLOR CHANNEL READ', x, y++, 100, 220, 255);
	drawText('Accesses green channel of active color.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`GREEN VALUE : ${centerGreen}`, x, y++, 80, centerGreen, 120);
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

const labelLayer = t.layers.add();
let centerRed = 0;

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

	centerRed = Math.round(80 + Math.abs(Math.sin(time)) * 175);
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODECOLOR.R', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: RED COLOR CHANNEL READ', x, y++, 100, 220, 255);
	drawText('Accesses red channel of active color.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`RED VALUE : ${centerRed}`, x, y++, centerRed, 40, 40);
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

Normalized *(0-1)* RGBA tuple.

Useful for passing color data to WebGL shaders.

##### Returns

\[`number`, `number`, `number`, `number`\]

A [r, g, b, a] tuple where each component is between 0.0 and 1.0.

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

const labelLayer = t.layers.add();
const color = t.color(255, 128, 0, 255);
const labels = ['R', 'G', 'B', 'A'];
const colors = [
	[255, 100, 100],
	[120, 255, 140],
	[120, 180, 255],
	[240, 240, 240],
];

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

function drawMeter(label, value, y, rgb, phase, x) {
	const blocks = Math.round(value * 10);
	drawText(`${label} ${value.toFixed(2)}`, x, y, rgb[0], rgb[1], rgb[2]);

	for (let i = 0; i < 10; i++) {
		const active = i < blocks;
		const glow = active ? 40 + Math.round(60 * (0.5 + 0.5 * Math.sin(t.frameCount * 0.12 + phase + i))) : 0;
		const meterColor = active
			? [Math.min(255, rgb[0] + glow), Math.min(255, rgb[1] + glow), Math.min(255, rgb[2] + glow)]
			: [55, 65, 80];

		t.push();
		t.translate(x + 13 + i, y);
		t.charColor(meterColor[0], meterColor[1], meterColor[2]);
		t.char(active ? '|' : '.');
		t.point();
		t.pop();
	}
}

t.draw(() => {
	t.background(12, 16, 24);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	const normalized = color.normalized;
	const rgba = color.rgba.join(', ');

	drawText('TEXTMODECOLOR.NORMALIZED', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: NORMALIZED FLOAT VALUES', x, y++, 100, 220, 255);
	drawText(`RGBA : [${rgba}]`, x, y++, color.rgb[0], color.rgb[1], color.rgb[2]);
	drawText('------------------------------------', x, y++, 80, 100, 150);

	for (let i = 0; i < labels.length; i++) {
		drawMeter(labels[i], normalized[i], y++, colors[i], i * 0.8, x);
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

Plain RGB tuple with integer components.

##### Returns

\[`number`, `number`, `number`\]

A [r, g, b] tuple with values between 0 and 255.

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

const labelLayer = t.layers.add();
const color = t.color(50, 100, 200);
const labels = ['R', 'G', 'B'];
const channelColors = [
	[255, 110, 110],
	[120, 255, 140],
	[120, 180, 255],
];

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
	t.char('o');
	t.rect(8, 4);
	t.pop();
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	const [r, g, b] = color.rgb;

	drawText('TEXTMODECOLOR.RGB', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: RGB COLOR COMPONENTS', x, y++, 100, 220, 255);
	drawText('Accesses red, green, blue channels.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`RGB ARRAY : [${r}, ${g}, ${b}]`, x, y++, color.rgb[0], color.rgb[1], color.rgb[2]);
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

Plain RGBA tuple with integer components.

##### Returns

\[`number`, `number`, `number`, `number`\]

A [r, g, b, a] tuple with values between 0 and 255.

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

const labelLayer = t.layers.add();
const color = t.color(255, 128, 0, 100);

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

function drawSwatch(x, swatchColor, alpha = 255) {
	const left = x - 4;
	drawChecker(left, -2, 8, 4);

	t.push();
	t.translate(x, 0);
	t.charColor(swatchColor[0], swatchColor[1], swatchColor[2], alpha);
	t.char('@');
	t.rect(8, 4);
	t.pop();
}

t.draw(() => {
	const [r, g, b, a] = color.rgba;
	const offset = Math.min(11, Math.max(8, Math.floor(t.grid.cols / 4)));

	t.background(12, 16, 24);

	drawSwatch(-offset, [r, g, b], 255);
	drawSwatch(offset, [r, g, b], a);
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	const [r, g, b, a] = color.rgba;

	drawText('TEXTMODECOLOR.RGBA', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: RGBA COLOR SPECIFICATION', x, y++, 100, 220, 255);
	drawText(`COLOR ARY : [${r}, ${g}, ${b}, ${a}]`, x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('Left Swatch : Alpha = 255', x, y++, 140, 190, 255);
	drawText(`Right Swatch: Alpha = ${a}`, x, y++, 140, 190, 255);
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

const layers = Array.from({ length: 5 }, () => t.layers.add());
const labelLayer = t.layers.add();

t.draw(() => {
	t.background(0);
});

layers.forEach((layer, i) => {
	layer.draw(() => {
		t.clear();

		const base = t.color(50, 150, 255);
		const opacity = 100 + i * 30;

		t.push();
		t.translate((i - 2) * 5, Math.sin(t.frameCount * 0.05 + i) * 5);
		t.charColor(base.withAlpha(opacity));
		t.char(String.fromCharCode(65 + i));
		t.rect(12, 12);
		t.pop();
	});
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('TEXTMODECOLOR.WITHALPHA', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: CLONE COLOR WITH NEW ALPHA', x, y++, 100, 220, 255);
	drawText('Returns copy with adjusted opacity.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('Rendering layers A-E with alpha.', x, y++, 140, 190, 255);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
