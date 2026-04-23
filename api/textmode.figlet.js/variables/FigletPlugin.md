---
layout: doc
editLink: true
title: FigletPlugin
description: Plugin entrypoint for the FIGlet add-on.
category: Variables
api: true
kind: Variable
ecosystem: textmode.js
lastModified: 2026-04-23
---

[textmode.figlet.js](../index.md) / FigletPlugin

# Variable: FigletPlugin

```ts
const FigletPlugin: TextmodePlugin;
```

Plugin entrypoint for the FIGlet add-on.

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 8,
	frameRate: 60,
	plugins: [FigletPlugin],
});

const lines = {
	primary: 'PLUGIN',
	secondary: 'READY',
};

const primaryLayoutOptions = {
	horizontalLayout: 'fitted',
};

const secondaryLayoutOptions = {
	horizontalLayout: 'fitted',
};

let font;
let primaryBounds;
let secondaryBounds;

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

	primaryBounds = t.figTextBounds(lines.primary, primaryLayoutOptions);
	secondaryBounds = t.figTextBounds(lines.secondary, secondaryLayoutOptions);
});

t.draw(() => {
	t.background(8, 10, 16);

	if (!font || !primaryBounds || !secondaryBounds) {
		writeLabel('installing FigletPlugin + loading a FIGfont...', 0, [255, 214, 102]);
		return;
	}

	const phase = Date.now() * 0.0035;

	writeLabel('FigletPlugin installs FIGlet helpers onto this sketch', -14, [255, 214, 102]);

	t.figText(lines.primary, 0, -4, {
		...primaryLayoutOptions,
		charColor: (cell) => getWaveColor(phase, cell.col * 0.65 + cell.row * 0.4, [124, 214, 255], [255, 214, 102]),
	});

	t.figText(lines.secondary, 0, 6, {
		...secondaryLayoutOptions,
		charColor: (cell) =>
			getWaveColor(phase, cell.inputIndex * 1.2 - cell.row * 0.5, [255, 120, 150], [255, 214, 102]),
	});

	writeLabel(
		`font: ${font.name} | align: ${t.figTextAlign()} | baseline: ${t.figTextBaseline()}`,
		12,
		[220, 230, 255]
	);
	writeLabel(
		`bounds: ${primaryBounds.cols}x${primaryBounds.rows} / ${secondaryBounds.cols}x${secondaryBounds.rows}`,
		15,
		[160, 180, 220]
	);
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
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.figlet.js/blob/main/examples/FigletPlugin/init/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>
