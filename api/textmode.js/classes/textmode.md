---
layout: doc
editLink: true
title: textmode
description: The main entry point for the textmode.js library.
category: Classes
api: true
kind: Class
lastModified: 2026-04-19
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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmode/creation/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/humanbydefinition.png" alt="humanbydefinition avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/humanbydefinition" target="_blank" rel="noopener noreferrer">@humanbydefinition</a></strong></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">📷 <a href="https://www.instagram.com/humanbydefinition/" target="_blank" rel="noopener noreferrer">Instagram</a>&nbsp;•&nbsp; 🐘 <a href="https://mastodon.social/@humanbydefinition" target="_blank" rel="noopener noreferrer">Mastodon</a>&nbsp;•&nbsp; 🦋 <a href="https://bsky.app/profile/humanbydefinition" target="_blank" rel="noopener noreferrer">BlueSky</a>&nbsp;•&nbsp; 🌐 <a href="https://code.textmode.art" target="_blank" rel="noopener noreferrer">Website</a></span>
  </div>
</div>

## Methods

### create()

```ts
static create(opts): Textmodifier;
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
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmode/create/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### setErrorLevel()

```ts
static setErrorLevel(level): void;
```

Set the global error handling level for the library. This applies to all [Textmodifier](Textmodifier.md) instances present.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `level` | [`TextmodeErrorLevel`](../enumerations/TextmodeErrorLevel.md) | The error handling level to set. |

#### Returns

`void`

#### Example

```javascript
const level = TextmodeErrorLevel.WARNING;

textmode.setErrorLevel(level);

const levels = ['SILENT', 'WARNING', 'ERROR', 'THROW'];
const summaries = ['no output', 'console.warn()', 'console.error()', 'throws'];
const color = [255, 210, 90];

const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

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
	const pulse = 0.65 + 0.35 * Math.sin(t.frameCount * 0.08);
	const glow = Math.round(80 * pulse);
	const activeColor = [color[0], Math.min(255, color[1] + glow), color[2]];
	const meter = levels.map((_, index) => (index <= level ? '|' : '░')).join('');

	t.background(18, 20, 28);

	drawCenteredText('ERROR LEVEL', -4, [180, 190, 210]);
	drawCenteredText(levels[level], -1, activeColor);
	drawCenteredText(meter, 1, activeColor);
	drawCenteredText(summaries[level], 4, [220, 220, 220]);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.js/blob/main/examples/Textmode/setErrorLevel/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>
