---
layout: doc
editLink: true
title: TextmodifierFigletExtensions
description: FIGlet methods added to the textmode.js Textmodifier API when FigletPlugin is installed.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-04-19
isInterface: true
---

[textmode.figlet.js](../index.md) / TextmodifierFigletExtensions

# Interface: TextmodifierFigletExtensions

FIGlet methods added to the `textmode.js` `Textmodifier` API when
[FigletPlugin](../variables/FigletPlugin.md) is installed.

## Methods

### loadFigFont()

```ts
loadFigFont(source): Promise<TextmodeFigFont>;
```

Load a FIGlet font from a `.flf` file URL or path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | `string` \| `URL` | The `.flf` file source. |

#### Returns

`Promise`\<[`TextmodeFigFont`](../classes/TextmodeFigFont.md)\>

A parsed FIGlet font instance.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
	frameRate: 60,
	plugins: [FigletPlugin],
});

let font;
let rendered;

function writeLabel(text, y, color = [220, 220, 220]) {
	const startX = -Math.floor(text.length / 2);
	t.charColor(...color);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(startX + i, y);
		t.char(text[i]);
		t.point();
		t.pop();
	}
}

function drawGrid(grid, originX, originY, color = [124, 214, 255]) {
	t.charColor(...color);

	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[row].length; col++) {
			const cell = grid[row][col];
			if (cell === ' ') {
				continue;
			}

			t.push();
			t.translate(originX + col, originY + row);
			t.char(cell);
			t.point();
			t.pop();
		}
	}
}

t.setup(async () => {
	font = await t.loadFigFont('https://cdn.jsdelivr.net/gh/xero/figlet-fonts@master/Bulbhead.flf');
	t.figFont(font);
	rendered = font.renderText('LOAD');
});

t.draw(() => {
	t.background(8, 10, 16);

	if (!font || !rendered) {
		writeLabel('loading a FIGfont with t.loadFigFont()', 0, [255, 214, 102]);
		return;
	}

	writeLabel('Textmodifier.loadFigFont', -10, [255, 214, 102]);
	drawGrid(rendered.grid, -Math.floor(rendered.cols / 2), -4);
	writeLabel(`loaded: ${font.name}`, 7, [220, 230, 255]);
	writeLabel(`active font: ${t.figFont()?.name ?? 'none'}`, 10, [160, 180, 220]);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.figlet.js/blob/main/examples/Textmodifier/loadFigFont/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### parseFigFont()

```ts
parseFigFont(name, data): TextmodeFigFont;
```

Parse a FIGlet font from raw `.flf` contents.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Human-readable font name. |
| `data` | `string` | Raw `.flf` file contents. |

#### Returns

[`TextmodeFigFont`](../classes/TextmodeFigFont.md)

A parsed FIGlet font instance.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
	frameRate: 60,
	plugins: [FigletPlugin],
});

let font;
let rendered;

function writeLabel(text, y, color = [220, 220, 220]) {
	const startX = -Math.floor(text.length / 2);
	t.charColor(...color);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(startX + i, y);
		t.char(text[i]);
		t.point();
		t.pop();
	}
}

function drawGrid(grid, originX, originY, color = [255, 120, 150]) {
	t.charColor(...color);

	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[row].length; col++) {
			const cell = grid[row][col];
			if (cell === ' ') {
				continue;
			}

			t.push();
			t.translate(originX + col, originY + row);
			t.char(cell);
			t.point();
			t.pop();
		}
	}
}

t.setup(async () => {
	const response = await fetch('https://cdn.jsdelivr.net/gh/xero/figlet-fonts@master/Bulbhead.flf');
	const data = await response.text();
	font = t.parseFigFont('Bulbhead copy', data);
	t.figFont(font);
	rendered = font.renderText('PARSE');
});

t.draw(() => {
	t.background(8, 10, 18);

	if (!font || !rendered) {
		writeLabel('parsing raw FIGfont text with t.parseFigFont()', 0, [255, 214, 102]);
		return;
	}

	writeLabel('Textmodifier.parseFigFont', -10, [255, 214, 102]);
	drawGrid(rendered.grid, -Math.floor(rendered.cols / 2), -4);
	writeLabel(`parsed: ${font.name}`, 7, [220, 230, 255]);
	writeLabel(`characters: ${font.characters.size}`, 10, [160, 180, 220]);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.figlet.js/blob/main/examples/Textmodifier/parseFigFont/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### figFont()

#### Call Signature

```ts
figFont(): TextmodeFigFont | undefined;
```

Get the active FIGlet font used by `figText()`.

##### Returns

[`TextmodeFigFont`](../classes/TextmodeFigFont.md) \| `undefined`

The currently active FIGlet font, if any.

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
	frameRate: 60,
	plugins: [FigletPlugin],
});

let bulbhead;
let colossal;

function writeLabel(text, y, color = [220, 220, 220]) {
	const startX = -Math.floor(text.length / 2);
	t.charColor(...color);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(startX + i, y);
		t.char(text[i]);
		t.point();
		t.pop();
	}
}

t.setup(async () => {
	[bulbhead, colossal] = await Promise.all([
		t.loadFigFont('https://cdn.jsdelivr.net/gh/xero/figlet-fonts@master/Bulbhead.flf'),
		t.loadFigFont('https://cdn.jsdelivr.net/gh/xero/figlet-fonts@master/Colossal.flf'),
	]);

	t.figTextAlign('center');
	t.figTextBaseline('center');
});

t.draw(() => {
	t.background(9, 10, 16);

	if (!bulbhead || !colossal) {
		writeLabel('setting and reading the active font with t.figFont()', 0, [255, 214, 102]);
		return;
	}

	const useBulbhead = Math.floor(Date.now() / 1400) % 2 === 0;
	const activeFont = useBulbhead ? bulbhead : colossal;
	const sample = useBulbhead ? 'BULB' : 'BIG';

	t.figFont(activeFont);

	writeLabel('Textmodifier.figFont', -12, [255, 214, 102]);
	t.charColor(124, 214, 255);
	t.figText(sample, 0, -2, {
		horizontalLayout: 'fitted',
	});
	writeLabel(`setter -> ${activeFont.name}`, 9, [220, 230, 255]);
	writeLabel(`getter -> ${t.figFont()?.name ?? 'none'}`, 12, [160, 180, 220]);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.figlet.js/blob/main/examples/Textmodifier/figFont/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

#### Call Signature

```ts
figFont(font): void;
```

Set the active FIGlet font used by `figText()`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `font` | [`TextmodeFigFont`](../classes/TextmodeFigFont.md) | The FIGlet font to use for subsequent text rendering. |

##### Returns

`void`

***

### figText()

```ts
figText(
   text, 
   col, 
   row, 
   options?): void;
```

Render a FIGlet string onto the current textmode grid using the active FIGlet font.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | The text to render. |
| `col` | `number` | Target column in grid space. |
| `row` | `number` | Target row in grid space. |
| `options?` | [`FigTextOptions`](FigTextOptions.md) | Optional layout overrides. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
	frameRate: 60,
	plugins: [FigletPlugin],
});

let font;

function writeLabel(text, y, color = [220, 220, 220]) {
	const startX = -Math.floor(text.length / 2);
	t.charColor(...color);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(startX + i, y);
		t.char(text[i]);
		t.point();
		t.pop();
	}
}

function getWaveColor(phase, seed, from, to) {
	const wave = 0.5 + 0.5 * Math.sin(phase + seed);
	return from.map((start, index) => Math.round(start + (to[index] - start) * wave));
}

t.setup(async () => {
	font = await t.loadFigFont('https://cdn.jsdelivr.net/gh/xero/figlet-fonts@master/Bulbhead.flf');
	t.figFont(font);
	t.figTextAlign('center');
	t.figTextBaseline('center');
});

t.draw(() => {
	t.background(8, 10, 16);

	if (!font) {
		writeLabel('drawing FIGlet cells with t.figText()', 0, [255, 214, 102]);
		return;
	}

	const phase = Date.now() * 0.0035;

	writeLabel('Textmodifier.figText', -12, [255, 214, 102]);
	t.figText('DRAW', 0, -1, {
		horizontalLayout: 'fitted',
		charColor: (cell) => getWaveColor(phase, cell.col * 0.55 + cell.row * 0.35, [124, 214, 255], [255, 214, 102]),
		cellColor: (cell) => (cell.subCol === 0 ? [24, 28, 52, 255] : undefined),
	});
	writeLabel('per-cell color callbacks can style the rendered glyph plan', 10, [220, 230, 255]);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.figlet.js/blob/main/examples/Textmodifier/figText/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### figTextWidth()

```ts
figTextWidth(text, options?): number;
```

Measure the rendered width of a FIGlet string in grid cells.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | The text to measure. |
| `options?` | [`FigTextOptions`](FigTextOptions.md) | Optional layout overrides. |

#### Returns

`number`

Width in grid cells.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
	frameRate: 60,
	plugins: [FigletPlugin],
});

const sampleText = 'WIDTH';
const sampleOptions = {
	horizontalLayout: 'fitted',
};

let font;
let width;

function writeLabel(text, y, color = [220, 220, 220]) {
	const startX = -Math.floor(text.length / 2);
	t.charColor(...color);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(startX + i, y);
		t.char(text[i]);
		t.point();
		t.pop();
	}
}

function drawHorizontalMeasure(originX, y, cols, color = [255, 120, 150]) {
	t.charColor(...color);

	for (let col = 0; col < cols; col++) {
		t.push();
		t.translate(originX + col, y);
		t.char(col === 0 || col === cols - 1 ? '+' : '-');
		t.point();
		t.pop();
	}
}

t.setup(async () => {
	font = await t.loadFigFont('https://cdn.jsdelivr.net/gh/xero/figlet-fonts@master/Bulbhead.flf');
	t.figFont(font);
	t.figTextAlign('center');
	t.figTextBaseline('center');
	width = t.figTextWidth(sampleText, sampleOptions);
});

t.draw(() => {
	t.background(8, 10, 18);

	if (!font || width === undefined) {
		writeLabel('measuring rendered width with t.figTextWidth()', 0, [255, 214, 102]);
		return;
	}

	const originX = -Math.floor(width / 2);

	writeLabel('Textmodifier.figTextWidth', -12, [255, 214, 102]);
	drawHorizontalMeasure(originX, -8, width);
	t.charColor(124, 214, 255);
	t.figText(sampleText, 0, 0, sampleOptions);
	writeLabel(`width: ${width} cols`, 10, [220, 230, 255]);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.figlet.js/blob/main/examples/Textmodifier/figTextWidth/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### figTextHeight()

```ts
figTextHeight(text, options?): number;
```

Measure the rendered height of a FIGlet string in grid cells.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | The text to measure. |
| `options?` | [`FigTextOptions`](FigTextOptions.md) | Optional layout overrides. |

#### Returns

`number`

Height in grid cells.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
	frameRate: 60,
	plugins: [FigletPlugin],
});

const sampleText = 'TALL';
const sampleOptions = {
	horizontalLayout: 'fitted',
};

let font;
let width;
let height;

function writeLabel(text, y, color = [220, 220, 220]) {
	const startX = -Math.floor(text.length / 2);
	t.charColor(...color);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(startX + i, y);
		t.char(text[i]);
		t.point();
		t.pop();
	}
}

function drawVerticalMeasure(x, originY, rows, color = [255, 120, 150]) {
	t.charColor(...color);

	for (let row = 0; row < rows; row++) {
		t.push();
		t.translate(x, originY + row);
		t.char(row === 0 || row === rows - 1 ? '+' : '|');
		t.point();
		t.pop();
	}
}

t.setup(async () => {
	font = await t.loadFigFont('https://cdn.jsdelivr.net/gh/xero/figlet-fonts@master/Bulbhead.flf');
	t.figFont(font);
	t.figTextAlign('center');
	t.figTextBaseline('center');
	width = t.figTextWidth(sampleText, sampleOptions);
	height = t.figTextHeight(sampleText, sampleOptions);
});

t.draw(() => {
	t.background(8, 10, 18);

	if (!font || width === undefined || height === undefined) {
		writeLabel('measuring rendered height with t.figTextHeight()', 0, [255, 214, 102]);
		return;
	}

	const originX = -Math.floor(width / 2);
	const originY = -Math.floor(height / 2);

	writeLabel('Textmodifier.figTextHeight', -12, [255, 214, 102]);
	drawVerticalMeasure(originX - 3, originY, height);
	t.charColor(124, 214, 255);
	t.figText(sampleText, 0, 0, sampleOptions);
	writeLabel(`height: ${height} rows`, 10, [220, 230, 255]);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.figlet.js/blob/main/examples/Textmodifier/figTextHeight/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### figTextBounds()

```ts
figTextBounds(text, options?): object;
```

Measure the rendered bounds of a FIGlet string in grid cells.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | The text to measure. |
| `options?` | [`FigTextOptions`](FigTextOptions.md) | Optional layout overrides. |

#### Returns

`object`

Width and height in grid cells.

| Name | Type |
| ------ | ------ |
| `cols` | `number` |
| `rows` | `number` |

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
	frameRate: 60,
	plugins: [FigletPlugin],
});

const sampleText = 'FRAME';
const sampleOptions = {
	horizontalLayout: 'fitted',
};

let font;
let bounds;

function writeLabel(text, y, color = [220, 220, 220]) {
	const startX = -Math.floor(text.length / 2);
	t.charColor(...color);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(startX + i, y);
		t.char(text[i]);
		t.point();
		t.pop();
	}
}

function drawFrame(cols, rows, originX, originY, color = [255, 120, 150]) {
	t.charColor(...color);

	for (let col = 0; col < cols; col++) {
		for (const row of [0, rows - 1]) {
			t.push();
			t.translate(originX + col, originY + row);
			t.char(col === 0 || col === cols - 1 ? '+' : '-');
			t.point();
			t.pop();
		}
	}

	for (let row = 1; row < rows - 1; row++) {
		for (const col of [0, cols - 1]) {
			t.push();
			t.translate(originX + col, originY + row);
			t.char('|');
			t.point();
			t.pop();
		}
	}
}

t.setup(async () => {
	font = await t.loadFigFont('https://cdn.jsdelivr.net/gh/xero/figlet-fonts@master/Bulbhead.flf');
	t.figFont(font);
	t.figTextAlign('center');
	t.figTextBaseline('center');
	bounds = t.figTextBounds(sampleText, sampleOptions);
});

t.draw(() => {
	t.background(8, 10, 18);

	if (!font || !bounds) {
		writeLabel('measuring width and height with t.figTextBounds()', 0, [255, 214, 102]);
		return;
	}

	const originX = -Math.floor(bounds.cols / 2);
	const originY = -Math.floor(bounds.rows / 2);

	writeLabel('Textmodifier.figTextBounds', -12, [255, 214, 102]);
	drawFrame(bounds.cols, bounds.rows, originX, originY);
	t.charColor(124, 214, 255);
	t.figText(sampleText, 0, 0, sampleOptions);
	writeLabel(`bounds: ${bounds.cols} cols × ${bounds.rows} rows`, 10, [220, 230, 255]);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.figlet.js/blob/main/examples/Textmodifier/figTextBounds/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### figTextAlign()

#### Call Signature

```ts
figTextAlign(): FigTextAlign;
```

Get the current horizontal FIGlet text alignment.

##### Returns

[`FigTextAlign`](../type-aliases/FigTextAlign.md)

The current alignment mode.

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
	frameRate: 60,
	plugins: [FigletPlugin],
});

let font;

function writeLabel(text, y, color = [220, 220, 220]) {
	const startX = -Math.floor(text.length / 2);
	t.charColor(...color);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(startX + i, y);
		t.char(text[i]);
		t.point();
		t.pop();
	}
}

function drawVerticalGuide(col, top, bottom, color = [64, 72, 96]) {
	t.charColor(...color);

	for (let row = top; row <= bottom; row++) {
		t.push();
		t.translate(col, row);
		t.char('|');
		t.point();
		t.pop();
	}
}

t.setup(async () => {
	font = await t.loadFigFont('https://cdn.jsdelivr.net/gh/xero/figlet-fonts@master/Bulbhead.flf');
	t.figFont(font);
	t.figTextBaseline('center');
});

t.draw(() => {
	t.background(8, 10, 16);

	if (!font || !t.grid) {
		writeLabel('changing placement with t.figTextAlign()', 0, [255, 214, 102]);
		return;
	}

	const left = -t.grid.cols / 2 + 5;
	const center = 0;
	const right = t.grid.cols / 2 - 5;

	writeLabel('Textmodifier.figTextAlign', -13, [255, 214, 102]);
	drawVerticalGuide(left, -10, 12);
	drawVerticalGuide(center, -10, 12);
	drawVerticalGuide(right, -10, 12);

	t.charColor(255, 120, 150);
	t.figTextAlign('left');
	t.figText('LEFT', left, -6, {
		horizontalLayout: 'fitted',
	});

	t.charColor(255, 214, 102);
	t.figTextAlign('center');
	t.figText('CENTER', center, 1, {
		horizontalLayout: 'fitted',
	});

	t.charColor(124, 214, 255);
	t.figTextAlign('right');
	t.figText('RIGHT', right, 8, {
		horizontalLayout: 'fitted',
	});

	writeLabel(`current align: ${t.figTextAlign()}`, 14, [220, 230, 255]);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.figlet.js/blob/main/examples/Textmodifier/figTextAlign/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

#### Call Signature

```ts
figTextAlign(align): void;
```

Set the horizontal FIGlet text alignment.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `align` | [`FigTextAlign`](../type-aliases/FigTextAlign.md) | Alignment mode for subsequent `figText()` calls. |

##### Returns

`void`

***

### figTextBaseline()

#### Call Signature

```ts
figTextBaseline(): FigTextBaseline;
```

Get the current vertical FIGlet text baseline mode.

##### Returns

[`FigTextBaseline`](../type-aliases/FigTextBaseline.md)

The current baseline mode.

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
	frameRate: 60,
	plugins: [FigletPlugin],
});

let font;

function writeLabel(text, y, color = [220, 220, 220]) {
	const startX = -Math.floor(text.length / 2);
	t.charColor(...color);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(startX + i, y);
		t.char(text[i]);
		t.point();
		t.pop();
	}
}

function drawHorizontalGuide(row, left, right, color = [64, 72, 96]) {
	t.charColor(...color);

	for (let col = left; col <= right; col++) {
		t.push();
		t.translate(col, row);
		t.char('-');
		t.point();
		t.pop();
	}
}

t.setup(async () => {
	font = await t.loadFigFont('https://cdn.jsdelivr.net/gh/xero/figlet-fonts@master/Bulbhead.flf');
	t.figFont(font);
	t.figTextAlign('center');
});

t.draw(() => {
	t.background(8, 10, 16);

	if (!font || !t.grid) {
		writeLabel('changing vertical anchoring with t.figTextBaseline()', 0, [255, 214, 102]);
		return;
	}

	const left = -t.grid.cols / 2 + 4;
	const right = t.grid.cols / 2 - 4;
	const top = -10;
	const middle = 0;
	const bottom = 10;

	writeLabel('Textmodifier.figTextBaseline', -13, [255, 214, 102]);
	drawHorizontalGuide(top, left, right);
	drawHorizontalGuide(middle, left, right);
	drawHorizontalGuide(bottom, left, right);

	t.charColor(255, 120, 150);
	t.figTextBaseline('top');
	t.figText('TOP', 0, top, {
		horizontalLayout: 'fitted',
	});

	t.charColor(255, 214, 102);
	t.figTextBaseline('center');
	t.figText('MID', 0, middle, {
		horizontalLayout: 'fitted',
	});

	t.charColor(124, 214, 255);
	t.figTextBaseline('bottom');
	t.figText('BOT', 0, bottom, {
		horizontalLayout: 'fitted',
	});

	writeLabel(`current baseline: ${t.figTextBaseline()}`, 14, [220, 230, 255]);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.figlet.js/blob/main/examples/Textmodifier/figTextBaseline/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

#### Call Signature

```ts
figTextBaseline(baseline): void;
```

Set the vertical FIGlet text baseline mode.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseline` | [`FigTextBaseline`](../type-aliases/FigTextBaseline.md) | Baseline mode for subsequent `figText()` calls. |

##### Returns

`void`
