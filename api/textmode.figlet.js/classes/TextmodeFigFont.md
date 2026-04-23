---
layout: doc
editLink: true
title: TextmodeFigFont
description: Parsed FIGfont resource used by figText() rendering.
category: Classes
api: true
kind: Class
ecosystem: textmode.js
lastModified: 2026-04-23
hasConstructor: false
---

[textmode.figlet.js](../index.md) / TextmodeFigFont

# Class: TextmodeFigFont

Parsed FIGfont resource used by `figText()` rendering.

## Extends

- `Disposable`

## Accessors

### name

#### Get Signature

```ts
get name(): string;
```

The display name associated with this FIGfont.

##### Returns

`string`

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
	rendered = font.renderText(font.name.toUpperCase());
});

t.draw(() => {
	t.background(8, 10, 16);

	if (!font || !rendered) {
		writeLabel('loading font name metadata...', 0, [255, 214, 102]);
		return;
	}

	writeLabel('TextmodeFigFont.name', -12, [255, 214, 102]);
	drawGrid(rendered.grid, -Math.floor(rendered.cols / 2), -6);
	writeLabel(`font.name -> ${font.name}`, 9, [220, 230, 255]);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.figlet.js/blob/main/examples/TextmodeFigFont/name/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### header

#### Get Signature

```ts
get header(): FigFontHeader;
```

The parsed FIGfont header metadata.

##### Returns

[`FigFontHeader`](../interfaces/FigFontHeader.md)

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

function drawGrid(grid, originX, originY, color = [255, 214, 102]) {
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
	font = await t.loadFigFont('https://cdn.jsdelivr.net/gh/xero/figlet-fonts@master/Colossal.flf');
	rendered = font.renderText('HDR');
});

t.draw(() => {
	t.background(7, 9, 18);

	if (!font || !rendered) {
		writeLabel('loading font header metadata...', 0, [255, 214, 102]);
		return;
	}

	writeLabel('TextmodeFigFont.header', -12, [255, 214, 102]);
	drawGrid(rendered.grid, -Math.floor(rendered.cols / 2), -6, [255, 120, 150]);
	writeLabel(`signature: ${font.header.signature} | rows: ${font.header.height}`, 8, [220, 230, 255]);
	writeLabel(`baseline: ${font.header.baseline} | fullLayout: ${font.header.fullLayout}`, 11, [160, 180, 220]);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.figlet.js/blob/main/examples/TextmodeFigFont/header/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### characters

#### Get Signature

```ts
get characters(): Map<number, FigCharacter>;
```

Parsed FIGcharacters keyed by Unicode code point.

##### Returns

`Map`\<`number`, [`FigCharacter`](../interfaces/FigCharacter.md)\>

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
	rendered = font.renderText('ABC');
});

t.draw(() => {
	t.background(8, 10, 16);

	if (!font || !rendered) {
		writeLabel('loading character map...', 0, [255, 214, 102]);
		return;
	}

	const previewCodes = [32, 33, 34, 35, 36].filter((code) => font.characters.has(code)).join(', ');

	writeLabel('TextmodeFigFont.characters', -12, [255, 214, 102]);
	drawGrid(rendered.grid, -Math.floor(rendered.cols / 2), -6);
	writeLabel(`font.characters.size -> ${font.characters.size}`, 8, [220, 230, 255]);
	writeLabel(`first codes: ${previewCodes}`, 11, [160, 180, 220]);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.figlet.js/blob/main/examples/TextmodeFigFont/characters/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### hardblank

#### Get Signature

```ts
get hardblank(): string;
```

Hardblank character declared by the font.

##### Returns

`string`

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

function drawGrid(grid, originX, originY, color = [255, 214, 102]) {
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
	rendered = font.renderText('A B');
});

t.draw(() => {
	t.background(9, 10, 18);

	if (!font || !rendered) {
		writeLabel('loading hardblank metadata...', 0, [255, 214, 102]);
		return;
	}

	const codePoint = font.hardblank.codePointAt(0);

	writeLabel('TextmodeFigFont.hardblank', -12, [255, 214, 102]);
	drawGrid(rendered.grid, -Math.floor(rendered.cols / 2), -6, [124, 214, 255]);
	writeLabel(`font.hardblank -> "${font.hardblank}"`, 8, [220, 230, 255]);
	writeLabel(`code point: ${codePoint}`, 11, [160, 180, 220]);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.figlet.js/blob/main/examples/TextmodeFigFont/hardblank/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### height

#### Get Signature

```ts
get height(): number;
```

Number of rows in each FIGcharacter.

##### Returns

`number`

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

function drawRuler(x, y, height) {
	t.charColor(255, 120, 150);
	t.char('|');

	for (let row = 0; row < height; row++) {
		t.push();
		t.translate(x, y + row);
		t.point();
		t.pop();
	}
}

t.setup(async () => {
	font = await t.loadFigFont('https://cdn.jsdelivr.net/gh/xero/figlet-fonts@master/Colossal.flf');
	rendered = font.renderText('HI');
});

t.draw(() => {
	t.background(8, 10, 18);

	if (!font || !rendered) {
		writeLabel('loading font height...', 0, [255, 214, 102]);
		return;
	}

	const originX = -Math.floor(rendered.cols / 2);
	const originY = -6;

	writeLabel('TextmodeFigFont.height', -12, [255, 214, 102]);
	drawRuler(originX - 2, originY, font.height);
	drawGrid(rendered.grid, originX, originY);
	writeLabel(`font.height -> ${font.height} rows`, 9, [220, 230, 255]);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.figlet.js/blob/main/examples/TextmodeFigFont/height/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### baseline

#### Get Signature

```ts
get baseline(): number;
```

Baseline row declared by the font.

##### Returns

`number`

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

function drawBaseline(originX, originY, cols, baseline) {
	t.charColor(255, 120, 150);
	t.char('-');

	for (let col = 0; col < cols; col++) {
		t.push();
		t.translate(originX + col, originY + baseline);
		t.point();
		t.pop();
	}
}

t.setup(async () => {
	font = await t.loadFigFont('https://cdn.jsdelivr.net/gh/xero/figlet-fonts@master/Colossal.flf');
	rendered = font.renderText('BASE');
});

t.draw(() => {
	t.background(7, 10, 18);

	if (!font || !rendered) {
		writeLabel('loading baseline metadata...', 0, [255, 214, 102]);
		return;
	}

	const originX = -Math.floor(rendered.cols / 2);
	const originY = -7;

	writeLabel('TextmodeFigFont.baseline', -13, [255, 214, 102]);
	drawBaseline(originX, originY, rendered.cols, font.baseline);
	drawGrid(rendered.grid, originX, originY);
	writeLabel(`font.baseline -> row ${font.baseline}`, 10, [220, 230, 255]);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.figlet.js/blob/main/examples/TextmodeFigFont/baseline/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### defaultLayout

#### Get Signature

```ts
get defaultLayout(): FigHorizontalLayout;
```

Default horizontal layout implied by the header metadata.

##### Returns

[`FigHorizontalLayout`](../type-aliases/FigHorizontalLayout.md)

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
let plan;

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

function drawPlan(renderPlan, originX, originY, color = [124, 214, 255]) {
	t.charColor(...color);

	for (const cell of renderPlan.cells) {
		t.push();
		t.translate(originX + cell.col, originY + cell.row);
		t.char(cell.char);
		t.point();
		t.pop();
	}
}

t.setup(async () => {
	font = await t.loadFigFont('https://cdn.jsdelivr.net/gh/xero/figlet-fonts@master/Bulbhead.flf');
	plan = font.planText('LAYOUT', {
		horizontalLayout: font.defaultLayout,
	});
});

t.draw(() => {
	t.background(8, 10, 18);

	if (!font || !plan) {
		writeLabel('loading default layout...', 0, [255, 214, 102]);
		return;
	}

	writeLabel('TextmodeFigFont.defaultLayout', -12, [255, 214, 102]);
	drawPlan(plan, -Math.floor(plan.cols / 2), -6);
	writeLabel(`font.defaultLayout -> ${font.defaultLayout}`, 8, [220, 230, 255]);
	writeLabel(`planned width: ${plan.cols} cols`, 11, [160, 180, 220]);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.figlet.js/blob/main/examples/TextmodeFigFont/defaultLayout/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### defaultPrintDirection

#### Get Signature

```ts
get defaultPrintDirection(): "ltr" | "rtl";
```

Default print direction implied by the FIGfont header metadata.

##### Returns

`"ltr"` \| `"rtl"`

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
let plan;

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

function drawPlan(renderPlan, originX, originY, color = [255, 214, 102]) {
	t.charColor(...color);

	for (const cell of renderPlan.cells) {
		t.push();
		t.translate(originX + cell.col, originY + cell.row);
		t.char(cell.char);
		t.point();
		t.pop();
	}
}

t.setup(async () => {
	font = await t.loadFigFont('https://cdn.jsdelivr.net/gh/xero/figlet-fonts@master/Bulbhead.flf');
	plan = font.planText('FLOW', {
		direction: 'font',
	});
});

t.draw(() => {
	t.background(9, 10, 18);

	if (!font || !plan) {
		writeLabel('loading print direction metadata...', 0, [255, 214, 102]);
		return;
	}

	writeLabel('TextmodeFigFont.defaultPrintDirection', -12, [255, 214, 102]);
	drawPlan(plan, -Math.floor(plan.cols / 2), -6, [124, 214, 255]);
	writeLabel(`font.defaultPrintDirection -> ${font.defaultPrintDirection}`, 8, [220, 230, 255]);
	writeLabel(`effective plan.direction -> ${plan.direction}`, 11, [160, 180, 220]);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.figlet.js/blob/main/examples/TextmodeFigFont/defaultPrintDirection/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### defaultVerticalLayout

#### Get Signature

```ts
get defaultVerticalLayout(): FigVerticalLayout;
```

Default vertical layout implied by the FIGfont header metadata.

##### Returns

[`FigVerticalLayout`](../type-aliases/FigVerticalLayout.md)

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
	rendered = font.renderText('UP\nDOWN', {
		verticalLayout: font.defaultVerticalLayout,
	});
});

t.draw(() => {
	t.background(8, 10, 18);

	if (!font || !rendered) {
		writeLabel('loading vertical layout metadata...', 0, [255, 214, 102]);
		return;
	}

	writeLabel('TextmodeFigFont.defaultVerticalLayout', -13, [255, 214, 102]);
	drawGrid(rendered.grid, -Math.floor(rendered.cols / 2), -8);
	writeLabel(`font.defaultVerticalLayout -> ${font.defaultVerticalLayout}`, 9, [220, 230, 255]);
	writeLabel(`rendered height: ${rendered.rows} rows`, 12, [160, 180, 220]);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.figlet.js/blob/main/examples/TextmodeFigFont/defaultVerticalLayout/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

## Methods

### getCharacter()

```ts
getCharacter(value): FigCharacter | undefined;
```

Look up a FIGcharacter by Unicode code point or by the first character in a string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` | Unicode code point or string to resolve. |

#### Returns

[`FigCharacter`](../interfaces/FigCharacter.md) \| `undefined`

The matching FIGcharacter, if present.

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
let figCharacter;
let previewLines = [];

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

function drawLines(lines, originX, originY, color = [124, 214, 255]) {
	t.charColor(...color);

	for (let row = 0; row < lines.length; row++) {
		for (let col = 0; col < lines[row].length; col++) {
			const cell = lines[row][col];
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
	figCharacter = font.getCharacter('A');
	previewLines = (figCharacter?.lines ?? []).map((line) => line.replaceAll(font.hardblank, ' '));
});

t.draw(() => {
	t.background(10, 9, 18);

	if (!font || !figCharacter) {
		writeLabel('resolving FIGcharacter metadata with getCharacter()', 0, [255, 214, 102]);
		return;
	}

	writeLabel('TextmodeFigFont.getCharacter', -10, [255, 214, 102]);
	drawLines(previewLines, -Math.floor(figCharacter.width / 2), -4, [124, 214, 255]);
	writeLabel(`glyph: ${String.fromCodePoint(figCharacter.code)} (${figCharacter.code})`, 6, [220, 230, 255]);
	writeLabel(`width: ${figCharacter.width} | rows: ${figCharacter.lines.length}`, 9, [160, 180, 220]);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.figlet.js/blob/main/examples/TextmodeFigFont/getCharacter/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### planText()

```ts
planText(text, options?): FigRenderPlan;
```

Plan a string into positioned FIGlet cells and logical lines.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |
| `options` | [`FigTextOptions`](../interfaces/FigTextOptions.md) |

#### Returns

`FigRenderPlan`

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
let plan;

const palette = [
	[255, 214, 102],
	[124, 214, 255],
	[255, 120, 150],
];

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

function drawPlan(renderPlan, originX, originY) {
	for (const cell of renderPlan.cells) {
		const color = palette[cell.lineIndex % palette.length];
		t.charColor(...color);
		t.push();
		t.translate(originX + cell.col, originY + cell.row);
		t.char(cell.char);
		t.point();
		t.pop();
	}
}

t.setup(async () => {
	font = await t.loadFigFont('https://cdn.jsdelivr.net/gh/xero/figlet-fonts@master/Bulbhead.flf');
	plan = font.planText('PLAN TEXT WRAPS WORDS', {
		maxCols: 58,
		wrap: 'word',
	});
});

t.draw(() => {
	t.background(7, 10, 18);

	if (!font || !plan) {
		writeLabel('planning FIGlet layout with planText()', 0, [255, 214, 102]);
		return;
	}

	writeLabel('TextmodeFigFont.planText', -12, [255, 214, 102]);
	drawPlan(plan, -Math.floor(plan.cols / 2), -6);
	writeLabel(`lines: ${plan.lines.length} | direction: ${plan.direction}`, 8, [220, 230, 255]);
	writeLabel(`bounds: ${plan.cols} cols x ${plan.rows} rows`, 11, [160, 180, 220]);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.figlet.js/blob/main/examples/TextmodeFigFont/planText/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### renderText()

```ts
renderText(text, options?): FigTextResult;
```

Render a string into a FIGlet sub-character grid.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |
| `options` | [`FigTextOptions`](../interfaces/FigTextOptions.md) |

#### Returns

`FigTextResult`

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

function drawGrid(grid, originX, originY) {
	for (let row = 0; row < grid.length; row++) {
		const wave = Math.sin(t.frameCount * 0.07 + row * 0.45) * 0.5 + 0.5;
		t.charColor(110 + wave * 145, 170 + row * 8, 255);

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
	font = await t.loadFigFont('https://cdn.jsdelivr.net/gh/xero/figlet-fonts@master/Isometric1.flf');
	rendered = font.renderText('GRID\nAPI');
});

t.draw(() => {
	t.background(8, 10, 20);

	if (!font || !rendered) {
		writeLabel('rendering a character grid with renderText()', 0, [255, 214, 102]);
		return;
	}

	writeLabel('TextmodeFigFont.renderText', -12, [255, 214, 102]);
	drawGrid(rendered.grid, -Math.floor(rendered.cols / 2), -7);
	writeLabel(`rendered grid: ${rendered.cols} cols × ${rendered.rows} rows`, 8, [220, 230, 255]);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.figlet.js/blob/main/examples/TextmodeFigFont/renderText/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### measureText()

```ts
measureText(text, options?): object;
```

Measure rendered FIGlet text without drawing it.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |
| `options` | [`FigTextOptions`](../interfaces/FigTextOptions.md) |

#### Returns

`object`

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

let font;
let measurement;
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

function drawBounds(cols, rows, originX, originY, color = [255, 120, 150]) {
	t.charColor(...color);
	t.char('+');

	for (let col = 0; col < cols; col++) {
		t.push();
		t.translate(originX + col, originY);
		t.point();
		t.pop();

		t.push();
		t.translate(originX + col, originY + rows - 1);
		t.point();
		t.pop();
	}

	for (let row = 0; row < rows; row++) {
		t.push();
		t.translate(originX, originY + row);
		t.point();
		t.pop();

		t.push();
		t.translate(originX + cols - 1, originY + row);
		t.point();
		t.pop();
	}
}

t.setup(async () => {
	font = await t.loadFigFont('https://cdn.jsdelivr.net/gh/xero/figlet-fonts@master/Colossal.flf');
	measurement = font.measureText('MEASURE');
	rendered = font.renderText('MEASURE');
});

t.draw(() => {
	t.background(8, 10, 18);

	if (!font || !measurement || !rendered) {
		writeLabel('measuring rendered bounds with measureText()', 0, [255, 214, 102]);
		return;
	}

	const originX = -Math.floor(measurement.cols / 2);
	const originY = -4;

	writeLabel('TextmodeFigFont.measureText', -11, [255, 214, 102]);
	drawBounds(measurement.cols, measurement.rows, originX, originY, [255, 120, 150]);
	drawGrid(rendered.grid, originX, originY, [124, 214, 255]);
	writeLabel(`bounds: ${measurement.cols} cols × ${measurement.rows} rows`, 9, [220, 230, 255]);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.figlet.js/blob/main/examples/TextmodeFigFont/measureText/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>

***

### \_addOnDispose()

```ts
_addOnDispose(callback): void;
```

Register a callback to run when the resource is disposed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` | Callback to run on disposal. |

#### Returns

`void`

#### Inherited from

```ts
Disposable._addOnDispose
```

***

### dispose()

```ts
dispose(): void;
```

Dispose the resource and invoke all registered callbacks.

#### Returns

`void`

#### Inherited from

```ts
Disposable.dispose
```
