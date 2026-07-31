---
layout: doc
editLink: true
title: EasingFunction
description: Easing functions from
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-07-31
---

[textmode.synth.js](../index.md) / EasingFunction

# Type Alias: EasingFunction

```ts
type EasingFunction = 
  | keyof typeof EASING_FUNCTIONS
  | ((t) => number);
```

Easing functions from https://gist.github.com/gre/1650294

Available easing functions: `'linear'`, `'easeInQuad'`, `'easeOutQuad'`, `'easeInOutQuad'`,
`'easeInCubic'`, `'easeOutCubic'`, `'easeInOutCubic'`, `'easeInQuart'`, `'easeOutQuart'`,
`'easeInOutQuart'`, `'easeInQuint'`, `'easeOutQuint'`, `'easeInOutQuint'`, `'sin'`

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	plugins: [SynthPlugin],
});

const labelLayer = t.layers.add();

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText(`EASINGFUNCTION.EASINGFUNCTION`, x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`CONCEPT: CURVED EASING TRANSITION`, x, y++, 100, 220, 255);
	drawText(`Eases array parameter changes.`, x, y++, 140, 160, 190);
	drawText(`Uses easeInOutCubic curve shape.`, x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`Curve: easeInOutCubic`, x, y++, 140, 255, 180);
});

t.synth(shape(4).rotate([-1.5, 1.5].ease('easeInOutCubic')));

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

