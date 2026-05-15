---
layout: doc
editLink: true
title: textmode
description: The main entry point for the textmode.js library.
category: Classes
api: true
kind: Class
lastModified: 2026-05-15
hasConstructor: false
---

[textmode.js](../index.md) / textmode

# Class: textmode

The main entry point for the `textmode.js` library.

Provides static methods for creating [Textmodifier](Textmodifier.md) instances and managing global settings.

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
});

const label = 'textmode.create()';
const chars = 'TEXTMODE';

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
	t.background(8, 12, 24);

	for (let i = 0; i < chars.length; i++) {
		const angle = t.frameCount * 0.03 + (Math.PI * 2 * i) / chars.length;
		const radius = 7 + Math.sin(t.frameCount * 0.08 + i) * 2;
		const x = Math.round(Math.cos(angle) * radius * 1.6);
		const y = Math.round(Math.sin(angle) * radius);

		t.push();
		t.translate(x, y);
		t.charColor(120 + i * 14, 180 + i * 6, 255);
		t.char(chars[i]);
		t.point();
		t.pop();
	}

	drawCenteredText(label, 0, [240, 245, 255]);
	drawCenteredText('creates a Textmodifier', 5, [140, 170, 210]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Accessors

### version

#### Get Signature

```ts
get static version(): string;
```

Returns the version of `textmode.js` being used.

##### Returns

`string`

The version string of the library.

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

const versionLabel = `VERSION: ${textmode.version}`;

t.draw(() => {
	t.background(0, 20, 0);

	t.push();
	t.translate(-versionLabel.length / 2, 0);
	t.charColor(0, 255, 0);

	for (let i = 0; i < versionLabel.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(versionLabel[i]);
		t.point();
		t.pop();
	}

	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Methods

### create()

```ts
static create(opts?): Textmodifier;
```

Create a new [Textmodifier](Textmodifier.md) instance with optional configuration.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | [`TextmodeOptions`](../type-aliases/TextmodeOptions.md) | Configuration options for the Textmodifier instance |

#### Returns

[`Textmodifier`](Textmodifier.md)

A new Textmodifier instance

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const label = 'textmode.create()';
const chars = ['.', '+', '*', 'o'];

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
	t.background(6, 14, 22);

	for (let ray = 0; ray < 12; ray++) {
		const angle = t.frameCount * 0.03 + (Math.PI * 2 * ray) / 12;

		for (let step = 3; step <= 10; step++) {
			const pulse = 0.5 + 0.5 * Math.sin(t.frameCount * 0.08 - step + ray * 0.4);
			const radius = step * (1.6 + pulse * 0.6);
			const x = Math.round(Math.cos(angle) * radius * 1.7);
			const y = Math.round(Math.sin(angle) * radius);
			const char = chars[(ray + step) % chars.length];

			t.push();
			t.translate(x, y);
			t.charColor(70 + step * 18, 160 + Math.round(pulse * 70), 255);
			t.char(char);
			t.point();
			t.pop();
		}
	}

	drawCenteredText(label, 0, [240, 245, 255]);
	drawCenteredText('returns a Textmodifier', 5, [130, 180, 230]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### setErrorLevel()

```ts
static setErrorLevel(level): void;
```

Set the global error handling level for the library. This applies to all [Textmodifier](Textmodifier.md) instances present.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `level` | [`TextmodeErrorLevel`](../namespaces/errors/enumerations/TextmodeErrorLevel.md) | The error handling level to set. |

#### Returns

`void`

#### Example

```javascript
const levels = [
	{ name: 'SILENT', value: TextmodeErrorLevel.SILENT, summary: 'no output' },
	{ name: 'WARNING', value: TextmodeErrorLevel.WARNING, summary: 'console.warn()' },
	{ name: 'ERROR', value: TextmodeErrorLevel.ERROR, summary: 'console.error()' },
	{ name: 'THROW', value: TextmodeErrorLevel.THROW, summary: 'throws' },
];

let activeIndex = 1;
textmode.setErrorLevel(levels[activeIndex].value);

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
	const cycle = 180;
	const idx = Math.floor(t.frameCount / cycle) % levels.length;

	if (idx !== activeIndex) {
		activeIndex = idx;
		textmode.setErrorLevel(levels[activeIndex].value);
	}

	const level = levels[activeIndex];
	const pulse = 0.65 + 0.35 * Math.sin(t.frameCount * 0.08);
	const glow = Math.round(80 * pulse);
	const activeColor = [255, Math.min(255, 210 + glow), 90];
	const meter = levels.map((_, i) => (i <= activeIndex ? '|' : '░')).join('');

	t.background(18, 20, 28);

	drawCenteredText('ERROR LEVEL', -4, [180, 190, 210]);
	drawCenteredText(level.name, -1, activeColor);
	drawCenteredText(meter, 1, activeColor);
	drawCenteredText(level.summary, 4, [220, 220, 220]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
