---
layout: doc
editLink: true
title: textmode
description: The main entry point for the textmode.js library.
category: Classes
api: true
kind: Class
lastModified: 2026-05-27
hasConstructor: false
---

[textmode.js](../index.md) / textmode

# Class: textmode

The main entry point for the `textmode.js` library.

Use it to create [Textmodifier](Textmodifier.md) instances and configure global library settings.

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
});

const labelLayer = t.layers.add();
const chars = 'TEXTMODE';

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

	drawText('TEXTMODE.CREATION', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: INITIALIZATION FUNCTION', x, y++, 100, 220, 255);
	drawText('Creates a Textmodifier instance.', x, y++, 140, 160, 190);
	drawText('Configures default viewport/canvas.', x, y++, 140, 160, 190);
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

The current `textmode.js` package version.

##### Returns

`string`

The package version string.

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
});

const labelLayer = t.layers.add();

t.draw(() => {
	t.background(6, 12, 10);
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

	drawText('TEXTMODE.VERSION', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: EXPOSES LIBRARY VERSION', x, y++, 100, 220, 255);
	drawText('Retrieves active semantic version.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`VERSION: ${textmode.version}`, x, y++, 140, 190, 255);
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

Create a [Textmodifier](Textmodifier.md) instance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | [`TextmodeOptions`](../type-aliases/TextmodeOptions.md) | Optional instance configuration. |

#### Returns

[`Textmodifier`](Textmodifier.md)

The created Textmodifier instance.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
const chars = ['.', '+', '*', 'o'];

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

	drawText('TEXTMODE.CREATE', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: STATIC CONTEXT BUILDER', x, y++, 100, 220, 255);
	drawText('Instantiates a sketch instance.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('Returns fully configured t context.', x, y++, 140, 190, 255);
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

Set the global error handling level for all [Textmodifier](Textmodifier.md) instances.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `level` | [`TextmodeErrorLevel`](../namespaces/errors/enumerations/TextmodeErrorLevel.md) | Error handling level to use. |

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

const labelLayer = t.layers.add();

t.draw(() => {
	const cycle = 180;
	const idx = Math.floor(t.frameCount / cycle) % levels.length;

	if (idx !== activeIndex) {
		activeIndex = idx;
		textmode.setErrorLevel(levels[activeIndex].value);
	}

	t.background(18, 20, 28);
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

	const level = levels[activeIndex];
	const meter = levels.map((_, i) => (i <= activeIndex ? '|' : '.')).join('');

	drawText('TEXTMODE.SETERRORLEVEL', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: GLOBAL ERROR HANDLING', x, y++, 100, 220, 255);
	drawText('Sets library diagnostic severity.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`ACTIVE LEVEL: ${level.name}`, x, y++, 255, 210, 90);
	drawText(`LEVEL METER : ${meter}`, x, y++, 255, 210, 90);
	drawText(`BEHAVIOR    : ${level.summary}`, x, y++, 140, 190, 255);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
