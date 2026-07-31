---
layout: doc
editLink: true
title: filters
description: Filter manager for this Textmodifier instance.
category: Accessors
api: true
owner: Textmodifier
kind: Accessor
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / filters

# Accessor: filters

## Get Signature

```ts
get filters(): TextmodeFilterManager;
```

Filter manager for this Textmodifier instance.

Use this to register custom filters that can be applied both globally
(via [filter](../methods/filter.md)) and on individual layers (via [TextmodeLayer.filter](../../../namespaces/layering/classes/TextmodeLayer/methods/filter.md)).

### Returns

[`TextmodeFilterManager`](../../../namespaces/filters/classes/TextmodeFilterManager.md)

### Examples

```ts
// Register a custom filter once
await t.filters.register('vignette', vignetteShader, {
    u_intensity: ['intensity', 0.5]
});

t.draw(() => {
    t.background(0);
    t.char('A');
    t.rect(10, 10);

    // Apply filter globally to final output
    t.filter('vignette', { intensity: 0.8 });

    // Or apply to a specific layer
    t.layers.base.filter('vignette', 0.5);
});
```

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();

let count = 0;

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

t.draw(() => {
	t.background(6, 10, 22);
	count = ['invert', 'grayscale', 'sepia'].filter((name) => t.filters.has(name)).length;
	t.char('#');
	t.charColor(140, 220, 255);
	t.rect(12, 5);
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;
	drawText('TEXTMODIFIER.FILTERS', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: FILTER REGISTRY', x, y++, 100, 220, 255);
	drawText('Queries available filters.', x, y++, 140, 160, 190);
	drawText('Registry is shared by output.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`BUILTINS: ${count}`, x, y++, 140, 255, 180);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

