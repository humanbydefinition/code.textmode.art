---
layout: doc
editLink: true
title: shape
description: shape function API reference for textmode.synth.js.
category: Functions
api: true
kind: Function
ecosystem: textmode.js
lastModified: 2026-04-07
---

[textmode.synth.js](../index.md) / shape

# Function: shape()

```ts
function shape(
   sides?, 
   radius?, 
   smoothing?): SynthSource;
```

Generate geometric shapes (polygons).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sides?` | `number` \| `number`[] \| (`ctx`) => `number` | Number of sides (default: 3) |
| `radius?` | `number` \| `number`[] \| (`ctx`) => `number` | Radius of the shape (default: 0.3) |
| `smoothing?` | `number` \| `number`[] \| (`ctx`) => `number` | Edge smoothing amount (default: 0.01) |

## Returns

[`SynthSource`](../classes/SynthSource.md)

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	plugins: [SynthPlugin],
});

t.layers.base.synth(shape(6, 0.35, 0.02).rotate(() => t.secs));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.synth.js/blob/main/examples/SynthSource/shape/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>
