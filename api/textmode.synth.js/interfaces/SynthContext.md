---
layout: doc
editLink: true
title: SynthContext
description: Context passed to dynamic parameter functions during rendering.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-05-15
isInterface: true
---

[textmode.synth.js](../index.md) / SynthContext

# Interface: SynthContext

Context passed to dynamic parameter functions during rendering.

## Example

```javascript
const t = textmode.create({
  width: window.innerWidth,
  height: window.innerHeight,
  plugins: [SynthPlugin]
});

t.layers.base.synth(
  noise((ctx) => 6 + Math.sin(ctx.time) * 4)
    .kaleid(5)
);

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-time"></a> `time` | `number` | Current time in seconds |
| <a id="property-framecount"></a> `frameCount` | `number` | Current frame count |
| <a id="property-width"></a> `width` | `number` | Grid width in pixels |
| <a id="property-height"></a> `height` | `number` | Grid height in pixels |
| <a id="property-cols"></a> `cols` | `number` | Grid columns |
| <a id="property-rows"></a> `rows` | `number` | Grid rows |
| <a id="property-bpm"></a> `bpm` | `number` | Current BPM (beats per minute) for array modulation timing |
| <a id="property-onerror"></a> `onError?` | (`error`, `uniformName`) => `void` | Optional callback for handling dynamic parameter evaluation errors |
