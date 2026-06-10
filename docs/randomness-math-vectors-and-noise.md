---
title: Randomness, Math, Vectors, and Noise
description: Use deterministic randomness, math helpers, vectors, easing curves, and noise fields in textmode.js sketches.
---

# Randomness, math, vectors, and noise

Generative sketches often need controlled variation: repeatable random layouts, smooth motion, procedural fields, and small math helpers that keep code readable. `textmode.js` includes these tools on the sketch instance so they share the same creative-coding style as the drawing API.

## Deterministic sketches

Pass [`seed`](/api/textmode.js/type-aliases/TextmodeOptions#seed) to [`textmode.create()`](/api/textmode.js/classes/textmode/methods/create) when a sketch should produce the same random sequence each time it runs:

```js
import { textmode } from "textmode.js";

const t = textmode.create({
  width: 800,
  height: 600,
  fontSize: 14,
  seed: "poster-17",
});
```

The seed controls the instance-scoped random generator used by [`random()`](/api/textmode.js/classes/Textmodifier/methods/random) and [`randomGaussian()`](/api/textmode.js/classes/Textmodifier/methods/randomGaussian). This makes exported frames, saved sketches, and live performances easier to reproduce.

## Random values

[`random()`](/api/textmode.js/classes/Textmodifier/methods/random) supports the common creative-coding overloads:

```js
const amount = t.random(); // 0 up to, but not including, 1
const column = Math.floor(t.random(t.grid.cols)); // 0 up to cols
const offset = t.random(-4, 4); // -4 up to 4
const glyph = t.random([".", ":", "*", "#"]) ?? ".";
```

Use [`randomSeed()`](/api/textmode.js/classes/Textmodifier/methods/randomSeed) when you want to restart the sequence without recreating the sketch:

```js
t.mousePressed(() => {
  t.randomSeed("new-composition");
  t.redraw();
});
```

## Seeded layout

A common pattern is to generate stable layout data once, then animate it deterministically:

```js
const stars = [];

t.setup(() => {
  for (let i = 0; i < 140; i++) {
    stars.push({
      x: t.random(-t.grid.cols / 2, t.grid.cols / 2),
      y: t.random(-t.grid.rows / 2, t.grid.rows / 2),
      glyph: t.random([".", "+", "*"]) ?? ".",
      phase: t.random(Math.PI * 2),
    });
  }
});

t.draw(() => {
  t.background(4, 6, 14);

  for (const star of stars) {
    const pulse = Math.sin(t.secs * 1.5 + star.phase) * 0.5 + 0.5;
    t.char(star.glyph);
    t.charColor(120 + pulse * 135, 170 + pulse * 70, 255);
    t.point(star.x, star.y);
  }
});
```

## Independent random streams

Use [`randomStream(name)`](/api/textmode.js/classes/Textmodifier/methods/randomStream) when one subsystem should not affect another. For example, changing particle count should not shift the random choices used by labels, palettes, or exported metadata:

```js
const particleRandom = t.randomStream("particles");
const paletteRandom = t.randomStream("palette");

const palette = ["#80ffb0", "#78d8ff", "#ffd37a", "#ff87c7"];

const particles = Array.from({ length: 80 }, () => ({
  x: particleRandom.random(-30, 30),
  y: particleRandom.random(-18, 18),
  color: paletteRandom.random(palette) ?? "#ffffff",
}));
```

Named streams are deterministic for the sketch seed and stream name, but they advance independently.

## Gaussian variation

[`randomGaussian(mean, sd)`](/api/textmode.js/classes/Textmodifier/methods/randomGaussian) returns a normal distribution. Values cluster around the mean, which is useful for softer spatial layouts:

```js
for (let i = 0; i < 120; i++) {
  const x = t.randomGaussian(0, 10);
  const y = t.randomGaussian(0, 5);
  const brightness = t.randomGaussian(190, 32);

  t.char("*");
  t.charColor(brightness, brightness, 255);
  t.point(x, y);
}
```

## Standalone generators

Use [`TextmodeRandom`](/api/textmode.js/classes/TextmodeRandom) when you need deterministic randomness outside a `Textmodifier` instance:

```js
import { TextmodeRandom } from "textmode.js";

const rng = new TextmodeRandom("thumbnail-grid");
const rotation = rng.random(-15, 15);
const label = rng.random(["north", "south", "east", "west"]);
```

This is useful for build tools, data preparation, tests, or shared modules that should not depend on a running sketch.

## Math helpers

`textmode.js` mirrors common creative-coding math helpers so sketches can stay concise:

```js
const amount = t.constrain(t.mouseX / t.grid.cols, 0, 1);
const x = t.lerp(-20, 20, amount);
const y = t.map(Math.sin(t.secs), -1, 1, -8, 8);
const distance = t.dist(0, 0, x, y);
```

Useful helpers include [`map()`](/api/textmode.js/classes/Textmodifier/methods/map), [`lerp()`](/api/textmode.js/classes/Textmodifier/methods/lerp), [`constrain()`](/api/textmode.js/classes/Textmodifier/methods/constrain), [`clamp()`](/api/textmode.js/classes/Textmodifier/methods/clamp), [`dist()`](/api/textmode.js/classes/Textmodifier/methods/dist), [`degrees()`](/api/textmode.js/classes/Textmodifier/methods/degrees), [`radians()`](/api/textmode.js/classes/Textmodifier/methods/radians), and the numeric helpers listed in the [Textmodifier API](/api/textmode.js/classes/Textmodifier).

## Easing

[`ease(name, amount)`](/api/textmode.js/classes/Textmodifier/methods/ease) applies named easing curves to normalized values:

```js
const duration = 120;
const amount = (t.frameCount % duration) / duration;
const eased = t.ease("inOutCubic", amount);

t.translate(t.lerp(-18, 18, eased), 0);
t.char("@");
t.point();
```

Inputs are clamped to `0..1`. Some easing curves, such as back, elastic, and bounce, can overshoot in their output.

## Vectors

Use [`createVector()`](/api/textmode.js/classes/Textmodifier/methods/createVector) to create mutable [`TextmodeVector`](/api/textmode.js/classes/TextmodeVector) values for position, velocity, forces, steering, and geometry:

```js
const position = t.createVector(-20, 0);
const velocity = t.createVector(0.2, 0.05);
const target = t.createVector(18, 0);

t.draw(() => {
  const desired = target.copy().sub(position).setMag(0.25);
  velocity.add(desired).limit(0.8);
  position.add(velocity);

  t.background(0);
  t.char("@");
  t.charColor(120, 255, 180);
  t.point(position.x, position.y);
});
```

Vector methods are chainable and mutate the instance unless the method name says otherwise, such as `copy()`.

## Noise fields

[`noise()`](/api/textmode.js/classes/Textmodifier/methods/noise) returns smooth deterministic noise in one, two, or three dimensions. Use it when random values should flow instead of flicker:

```js
const ramp = t.createGlyphRamp(" .:-=+*#%@");

t.draw(() => {
  t.background(5, 8, 18);

  for (let y = -20; y < 20; y++) {
    for (let x = -35; x < 35; x++) {
      const value = t.noise(x * 0.08, y * 0.08, t.secs * 0.25);

      t.char(ramp.at(value));
      t.charColor(80 + value * 120, 130 + value * 90, 255);
      t.point(x, y);
    }
  }
});
```

Use [`noiseSeed()`](/api/textmode.js/classes/Textmodifier/methods/noiseSeed) to reset the noise field and [`noiseDetail()`](/api/textmode.js/classes/Textmodifier/methods/noiseDetail) to adjust octave count and falloff:

```js
t.noiseSeed("terrain");
t.noiseDetail(5, 0.55);
```

## Related APIs

- [`TextmodeOptions.seed`](/api/textmode.js/type-aliases/TextmodeOptions#seed)
- [`Textmodifier.random()`](/api/textmode.js/classes/Textmodifier/methods/random)
- [`Textmodifier.randomSeed()`](/api/textmode.js/classes/Textmodifier/methods/randomSeed)
- [`Textmodifier.randomGaussian()`](/api/textmode.js/classes/Textmodifier/methods/randomGaussian)
- [`Textmodifier.randomStream()`](/api/textmode.js/classes/Textmodifier/methods/randomStream)
- [`TextmodeRandom`](/api/textmode.js/classes/TextmodeRandom)
- [`Textmodifier.ease()`](/api/textmode.js/classes/Textmodifier/methods/ease)
- [`Textmodifier.createVector()`](/api/textmode.js/classes/Textmodifier/methods/createVector)
- [`TextmodeVector`](/api/textmode.js/classes/TextmodeVector)
- [`Textmodifier.noise()`](/api/textmode.js/classes/Textmodifier/methods/noise)
- [`Textmodifier.noiseSeed()`](/api/textmode.js/classes/Textmodifier/methods/noiseSeed)
- [`Textmodifier.noiseDetail()`](/api/textmode.js/classes/Textmodifier/methods/noiseDetail)
