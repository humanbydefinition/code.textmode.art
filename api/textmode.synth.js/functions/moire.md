---
layout: doc
editLink: true
title: moire
description: moire function API reference for textmode.synth.js.
category: Functions
api: true
kind: Function
ecosystem: textmode.js
lastModified: 2026-04-07
---

[textmode.synth.js](../index.md) / moire

# Function: moire()

```ts
function moire(
   freqA?, 
   freqB?, 
   angleA?, 
   angleB?, 
   speed?, 
   phase?): SynthSource;
```

Generate moire interference patterns.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `freqA?` | `number` \| `number`[] \| (`ctx`) => `number` | Frequency of first grating (default: 20.0) |
| `freqB?` | `number` \| `number`[] \| (`ctx`) => `number` | Frequency of second grating (default: 21.0) |
| `angleA?` | `number` \| `number`[] \| (`ctx`) => `number` | Angle of first grating in radians (default: 0.0) |
| `angleB?` | `number` \| `number`[] \| (`ctx`) => `number` | Angle of second grating in radians (default: 1.5708) |
| `speed?` | `number` \| `number`[] \| (`ctx`) => `number` | Animation speed (default: 0.1) |
| `phase?` | `number` \| `number`[] \| (`ctx`) => `number` | Phase offset (default: 0.0) |

## Returns

[`SynthSource`](../classes/SynthSource.md)

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	plugins: [SynthPlugin],
});

t.layers.base.synth(moire(14, 15, 0.2, 1.2, 0.2, 0.1).color(0.7, 0.5, 1.1));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">↗ <a href="https://github.com/humanbydefinition/textmode.synth.js/blob/main/examples/SynthSource/moire/sketch.js" target="_blank" rel="noopener noreferrer">View sketch on GitHub</a></span>
  </div>
</div>
