---
layout: doc
editLink: true
title: TextmodeColor
description: Color value used by textmode drawing APIs.
category: Classes
api: true
namespace: color
kind: Class
lastModified: 2026-07-31
hasConstructor: false
---

[textmode.js](../../../index.md) / [color](../index.md) / TextmodeColor

# Class: TextmodeColor

Color value used by textmode drawing APIs.

Values are stored as `0-255` integers for compatibility with public APIs.
Normalized versions are also available for shader uploads.

Use [Textmodifier.color](../../../classes/Textmodifier/methods/color.md) to create colors.

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const RAMP = ' .:-=+*#%@';
const labelLayer = t.layers.add();

t.draw(() => {
	t.background(6, 6, 14);
	const hw = Math.floor(t.grid.cols / 2);
	const hh = Math.floor(t.grid.rows / 2);
	const tm = t.frameCount * 0.05;

	const cRgb = t.color(240, 80, 50);
	const cHex = t.color('#30E0A0');
	const cGray = t.color(180);
	const cRgba = t.color(90, 140, 255, 200);

	for (let y = -hh; y <= hh; y++) {
		for (let x = -hw; x <= hw; x++) {
			const manhattan = Math.abs(x) + Math.abs(y);
			const chebyshev = Math.max(Math.abs(x), Math.abs(y));
			const ring = Math.floor(manhattan * 0.4 + chebyshev * 0.3 - tm) % 4;

			let col;
			if (ring === 0) col = cRgb;
			else if (ring === 1) col = cHex;
			else if (ring === 2) col = cGray;
			else col = cRgba;

			const val = (Math.sin(manhattan * 0.3 - tm) + 1) * 0.5;
			if (val > 0.15) {
				const idx = Math.min(RAMP.length - 1, Math.floor(val * RAMP.length));
				t.push();
				t.translate(x, y);
				t.charColor(col.r, col.g, col.b);
				t.cellColor(Math.floor(col.r * 0.12), Math.floor(col.g * 0.12), Math.floor(col.b * 0.12));
				t.char(RAMP[idx]);
				t.point();
				t.pop();
			}
		}
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	const cRgb = t.color(240, 80, 50);
	const cHex = t.color('#30E0A0');
	const cGray = t.color(180);

	t.push();
	t.printAlign('left', 'top');
	t.charColor(120, 240, 180);
	t.print('TEXTMODECOLOR.CREATION', x, y++);
	t.charColor(70, 100, 140);
	t.print('------------------------------------', x, y++);
	t.charColor(140, 210, 255);
	t.print('CONCEPT: COLOR CONSTRUCTOR FORMATS', x, y++);
	t.charColor(140, 160, 190);
	t.print('Creates instances from RGB, Hex,', x, y++);
	t.print('grayscale, and RGBA arguments.', x, y++);
	t.charColor(70, 100, 140);
	t.print('------------------------------------', x, y++);
	t.charColor(cRgb.r, cRgb.g, cRgb.b);
	t.print(`RGB : t.color(${cRgb.r}, ${cRgb.g}, ${cRgb.b})`, x, y++);
	t.charColor(cHex.r, cHex.g, cHex.b);
	t.print("HEX : t.color('#30E0A0')", x, y++);
	t.charColor(cGray.r, cGray.g, cGray.b);
	t.print(`GRAY: t.color(${cGray.r})`, x, y++);
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Properties

| Property | Description |
| ------ | ------ |
| [a](TextmodeColor/properties/a.md) | Alpha component (0-255). |
| [b](TextmodeColor/properties/b.md) | Blue component (0-255). |
| [g](TextmodeColor/properties/g.md) | Green component (0-255). |
| [r](TextmodeColor/properties/r.md) | Red component (0-255). |

## Accessors

| Accessor | Description |
| ------ | ------ |
| [normalized](TextmodeColor/accessors/normalized.md) | Normalized *(0-1)* RGBA tuple. |
| [rgb](TextmodeColor/accessors/rgb.md) | Plain RGB tuple with integer components. |
| [rgba](TextmodeColor/accessors/rgba.md) | Plain RGBA tuple with integer components. |

## Methods

| Method | Description |
| ------ | ------ |
| [withAlpha](TextmodeColor/methods/withAlpha.md) | Create a copy of this color with a different alpha value. |
