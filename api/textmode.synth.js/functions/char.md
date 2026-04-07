---
layout: doc
editLink: true
title: char
description: char function API reference for textmode.synth.js.
category: Functions
api: true
kind: Function
ecosystem: textmode.js
lastModified: 2026-04-07
---

[textmode.synth.js](../index.md) / char

# Function: char()

```ts
function char(source): SynthSource;
```

Create a character source from any color/pattern source.

This function converts any pattern (like `osc()`, `noise()`, `voronoi()`) into
character indices. The pattern's luminance or color values are mapped to character indices.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | [`SynthSource`](../classes/SynthSource.md) | A SynthSource producing color values that will be mapped to characters |

## Returns

[`SynthSource`](../classes/SynthSource.md)

A new SynthSource configured for character generation

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	plugins: [SynthPlugin],
});

t.layers.base.synth(
	char(osc(6, 0.1, 1.2)).charMap('@#%*+=-:. ').charColor(osc(12, 0.05, 0.2))
);

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.synth.js/blob/main/examples/char/char/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>
