---
layout: doc
editLink: true
title: TextmodeGlyphRamp
description: Immutable character sequence for mapping numbers to glyphs.
category: Classes
api: true
kind: Class
lastModified: 2026-07-31
hasConstructor: true
---

[textmode.js](../index.md) / TextmodeGlyphRamp

# Class: TextmodeGlyphRamp

Immutable character sequence for mapping numbers to glyphs.

`TextmodeGlyphRamp` stores a low-to-high sequence of grapheme clusters and maps
normalized values to one glyph from that sequence.

Use [Textmodifier.createGlyphRamp](Textmodifier/methods/createGlyphRamp.md) to create ramps inside a sketch.

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const ramp = t.createGlyphRamp(' .:-=+*#%@');
const labelLayer = t.layers.add();

t.draw(() => {
	t.background(6, 12, 16);
	const hw = Math.floor(t.grid.cols / 2);
	const hh = Math.floor(t.grid.rows / 2);
	const tm = t.frameCount * 0.035;

	const seeds = [
		{ x: Math.cos(tm) * (hw * 0.5), y: Math.sin(tm * 0.8) * (hh * 0.5) },
		{ x: Math.cos(tm + 2) * (hw * 0.5), y: Math.sin(tm * 1.1 + 2) * (hh * 0.5) },
		{ x: Math.cos(tm + 4) * (hw * 0.5), y: Math.sin(tm * 0.9 + 4) * (hh * 0.5) },
	];

	for (let y = -hh; y <= hh; y++) {
		for (let x = -hw; x <= hw; x++) {
			let dMin = Infinity;
			for (let i = 0; i < seeds.length; i++) {
				const d = Math.hypot(x - seeds[i].x, y - seeds[i].y);
				if (d < dMin) dMin = d;
			}

			const val = Math.min(1, dMin / (hw * 0.65));

			t.push();
			t.translate(x, y);
			t.charColor(Math.floor(40 + val * 200), Math.floor(220 - val * 100), Math.floor(160 + val * 85));
			t.cellColor(Math.floor(6 + val * 15), Math.floor(18 + val * 20), Math.floor(24 + val * 25));
			t.char(ramp.at(val));
			t.point();
			t.pop();
		}
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	t.push();
	t.printAlign('left', 'top');
	t.charColor(120, 240, 180);
	t.print('TEXTMODEGLYPHRAMP.CREATION', x, y++);
	t.charColor(70, 100, 140);
	t.print('------------------------------------', x, y++);
	t.charColor(140, 210, 255);
	t.print('CONCEPT: VORONOI GLYPH RAMP MAPPING', x, y++);
	t.charColor(140, 160, 190);
	t.print('Creates reusable density ramps.', x, y++);
	t.print('Maps Voronoi distances to glyphs.', x, y++);
	t.charColor(70, 100, 140);
	t.print('------------------------------------', x, y++);
	t.charColor(140, 255, 200);
	t.print(`RAMP LENGTH: ${ramp.length} GLYPHS`, x, y++);
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Constructors

### Constructor

```ts
new TextmodeGlyphRamp(characters): TextmodeGlyphRamp;
```

Create a ramp from characters ordered from low values to high values.

At least two grapheme clusters are required.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `characters` | `string` | Character sequence ordered from low to high. |

#### Returns

`TextmodeGlyphRamp`

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const ramp = t.createGlyphRamp(' .:-=+*#%@');
const labelLayer = t.layers.add();

t.draw(() => {
	t.background(6, 12, 16);
	const hw = Math.floor(t.grid.cols / 2);
	const hh = Math.floor(t.grid.rows / 2);
	const tm = t.frameCount * 0.035;

	const seeds = [
		{ x: Math.cos(tm) * (hw * 0.5), y: Math.sin(tm * 0.8) * (hh * 0.5) },
		{ x: Math.cos(tm + 2) * (hw * 0.5), y: Math.sin(tm * 1.1 + 2) * (hh * 0.5) },
		{ x: Math.cos(tm + 4) * (hw * 0.5), y: Math.sin(tm * 0.9 + 4) * (hh * 0.5) },
	];

	for (let y = -hh; y <= hh; y++) {
		for (let x = -hw; x <= hw; x++) {
			let dMin = Infinity;
			for (let i = 0; i < seeds.length; i++) {
				const d = Math.hypot(x - seeds[i].x, y - seeds[i].y);
				if (d < dMin) dMin = d;
			}

			const val = Math.min(1, dMin / (hw * 0.65));

			t.push();
			t.translate(x, y);
			t.charColor(Math.floor(40 + val * 200), Math.floor(220 - val * 100), Math.floor(160 + val * 85));
			t.cellColor(Math.floor(6 + val * 15), Math.floor(18 + val * 20), Math.floor(24 + val * 25));
			t.char(ramp.at(val));
			t.point();
			t.pop();
		}
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	t.push();
	t.printAlign('left', 'top');
	t.charColor(120, 240, 180);
	t.print('TEXTMODEGLYPHRAMP.CREATION', x, y++);
	t.charColor(70, 100, 140);
	t.print('------------------------------------', x, y++);
	t.charColor(140, 210, 255);
	t.print('CONCEPT: VORONOI GLYPH RAMP MAPPING', x, y++);
	t.charColor(140, 160, 190);
	t.print('Creates reusable density ramps.', x, y++);
	t.print('Maps Voronoi distances to glyphs.', x, y++);
	t.charColor(70, 100, 140);
	t.print('------------------------------------', x, y++);
	t.charColor(140, 255, 200);
	t.print(`RAMP LENGTH: ${ramp.length} GLYPHS`, x, y++);
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Properties

### characters

```ts
readonly characters: string;
```

The character sequence this ramp was created with.


***

### length

```ts
readonly length: number;
```

Number of grapheme clusters in the ramp.


## Methods

### at()

#### Call Signature

```ts
at(normalizedValue): string;
```

Map a normalized value to a character.

Values outside `[0, 1]` are clamped. `0` returns the first character, and
`1` returns the last character.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `normalizedValue` | `number` | Normalized value to map. |

##### Returns

`string`

Character from this ramp.

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const ramp = t.createGlyphRamp(' .:-=+*#%@');
const labelLayer = t.layers.add();

t.draw(() => {
	t.background(14, 8, 14);
	const hw = Math.floor(t.grid.cols / 2);
	const hh = Math.floor(t.grid.rows / 2);
	const tm = t.frameCount * 0.02;

	const n = 3 + Math.sin(tm * 0.5);
	const m = 5 + Math.cos(tm * 0.5);

	for (let y = -hh; y <= hh; y++) {
		for (let x = -hw; x <= hw; x++) {
			const nx = (x / (hw || 1)) * Math.PI;
			const ny = (y / (hh || 1)) * Math.PI;
			const w = Math.cos(n * nx) * Math.cos(m * ny) - Math.cos(m * nx) * Math.cos(n * ny);

			const norm = (w + 2) / 4;
			t.push();
			t.translate(x, y);
			t.charColor(Math.floor(255 - norm * 160), Math.floor(100 + norm * 150), Math.floor(200 - norm * 120));
			t.cellColor(Math.floor(25 - norm * 15), Math.floor(8 + norm * 12), Math.floor(20 + norm * 10));
			t.char(ramp.at(w, -2, 2));
			t.point();
			t.pop();
		}
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	const sampleW = Math.sin(t.frameCount * 0.05) * 2;

	t.push();
	t.printAlign('left', 'top');
	t.charColor(120, 240, 180);
	t.print('TEXTMODEGLYPHRAMP.AT', x, y++);
	t.charColor(70, 100, 140);
	t.print('------------------------------------', x, y++);
	t.charColor(140, 210, 255);
	t.print('CONCEPT: CHLADNI CYMATIC RESONANCE', x, y++);
	t.charColor(140, 160, 190);
	t.print('at(v, min, max) remaps standing wave', x, y++);
	t.print('nodal lines directly to the ramp.', x, y++);
	t.charColor(70, 100, 140);
	t.print('------------------------------------', x, y++);
	t.charColor(140, 255, 200);
	t.print(`W: ${sampleW.toFixed(2)} -> GLYPH: "${ramp.at(sampleW, -2, 2)}"`, x, y++);
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


#### Call Signature

```ts
at(
   value, 
   min, 
   max): string;
```

Map a value from a source range to a character.

The value is normalized using `min` and `max`, then mapped through this ramp.
Reversed ranges are supported. Equal range bounds are invalid.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | Value to map. |
| `min` | `number` | Source range minimum. |
| `max` | `number` | Source range maximum. |

##### Returns

`string`

Character from this ramp.

##### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const ramp = t.createGlyphRamp(' .:-=+*#%@');
const labelLayer = t.layers.add();

t.draw(() => {
	t.background(14, 8, 14);
	const hw = Math.floor(t.grid.cols / 2);
	const hh = Math.floor(t.grid.rows / 2);
	const tm = t.frameCount * 0.02;

	const n = 3 + Math.sin(tm * 0.5);
	const m = 5 + Math.cos(tm * 0.5);

	for (let y = -hh; y <= hh; y++) {
		for (let x = -hw; x <= hw; x++) {
			const nx = (x / (hw || 1)) * Math.PI;
			const ny = (y / (hh || 1)) * Math.PI;
			const w = Math.cos(n * nx) * Math.cos(m * ny) - Math.cos(m * nx) * Math.cos(n * ny);

			const norm = (w + 2) / 4;
			t.push();
			t.translate(x, y);
			t.charColor(Math.floor(255 - norm * 160), Math.floor(100 + norm * 150), Math.floor(200 - norm * 120));
			t.cellColor(Math.floor(25 - norm * 15), Math.floor(8 + norm * 12), Math.floor(20 + norm * 10));
			t.char(ramp.at(w, -2, 2));
			t.point();
			t.pop();
		}
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	const sampleW = Math.sin(t.frameCount * 0.05) * 2;

	t.push();
	t.printAlign('left', 'top');
	t.charColor(120, 240, 180);
	t.print('TEXTMODEGLYPHRAMP.AT', x, y++);
	t.charColor(70, 100, 140);
	t.print('------------------------------------', x, y++);
	t.charColor(140, 210, 255);
	t.print('CONCEPT: CHLADNI CYMATIC RESONANCE', x, y++);
	t.charColor(140, 160, 190);
	t.print('at(v, min, max) remaps standing wave', x, y++);
	t.print('nodal lines directly to the ramp.', x, y++);
	t.charColor(70, 100, 140);
	t.print('------------------------------------', x, y++);
	t.charColor(140, 255, 200);
	t.print(`W: ${sampleW.toFixed(2)} -> GLYPH: "${ramp.at(sampleW, -2, 2)}"`, x, y++);
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


***

### shift()

```ts
shift(amount): TextmodeGlyphRamp;
```

Return a shifted copy of this ramp.

Positive amounts rotate forward and negative amounts rotate backward.
Fractional amounts are truncated before rotation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `number` | Number of character steps to shift. |

#### Returns

`TextmodeGlyphRamp`

A new shifted ramp.

#### Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const baseRamp = t.createGlyphRamp(' .:-=+*#%@');
const labelLayer = t.layers.add();

t.draw(() => {
	t.background(6, 12, 18);
	const hw = Math.floor(t.grid.cols / 2);
	const hh = Math.floor(t.grid.rows / 2);
	const tm = t.frameCount * 0.04;

	for (let y = -hh; y <= hh; y++) {
		for (let x = -hw; x <= hw; x++) {
			const angle = Math.atan2(y, x);
			const dist = Math.hypot(x, y);
			const shiftAmt = Math.floor((angle / (Math.PI * 2)) * baseRamp.length + tm * 3);
			const shiftedRamp = baseRamp.shift(shiftAmt);
			const val = (Math.sin(dist * 0.3 - tm * 2) + 1) * 0.5;

			t.push();
			t.translate(x, y);
			t.charColor(Math.floor(60 + val * 180), Math.floor(200 - val * 80), Math.floor(240 - val * 60));
			t.cellColor(Math.floor(10 + val * 20), Math.floor(25 + val * 25), Math.floor(40 + val * 20));
			t.char(shiftedRamp.at(val));
			t.point();
			t.pop();
		}
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	const shifted = baseRamp.shift(Math.floor(t.frameCount * 0.1));

	t.push();
	t.printAlign('left', 'top');
	t.charColor(120, 240, 180);
	t.print('TEXTMODEGLYPHRAMP.SHIFT', x, y++);
	t.charColor(70, 100, 140);
	t.print('------------------------------------', x, y++);
	t.charColor(140, 210, 255);
	t.print('CONCEPT: SHIFTED GLYPH RAMP COPY', x, y++);
	t.charColor(140, 160, 190);
	t.print('shift(n) returns a rotated copy.', x, y++);
	t.print('Original ramp remains unchanged.', x, y++);
	t.charColor(70, 100, 140);
	t.print('------------------------------------', x, y++);
	t.charColor(140, 255, 200);
	t.print(`SHIFTED: "${shifted.characters}"`, x, y++);
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

