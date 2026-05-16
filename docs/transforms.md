---
title: Transforms
description: Move, rotate, scale, isolate, reset, and manually apply transform matrices in textmode.js.
---

# Transforms

Transforms change the coordinate system for future drawing. They are one of the main ways to compose motion and layout in `textmode.js`.

## Translate

Use [`translate()`](/api/textmode.js/classes/Textmodifier#translate) to move future drawing:

```js
t.translate(10, -4);
t.rect(8, 8);
```

You can also use axis-specific helpers:

- [`translateX()`](/api/textmode.js/classes/Textmodifier#translatex)
- [`translateY()`](/api/textmode.js/classes/Textmodifier#translatey)
- [`translateZ()`](/api/textmode.js/classes/Textmodifier#translatez)

When called without arguments, the axis-specific helpers return the current translation component.

## Rotate

Use [`rotateZ()`](/api/textmode.js/classes/Textmodifier#rotatez) for normal 2D rotation:

```js
t.rotateZ(t.frameCount * 2);
t.rect(12, 6);
```

Use [`rotateX()`](/api/textmode.js/classes/Textmodifier#rotatex), [`rotateY()`](/api/textmode.js/classes/Textmodifier#rotatey), or [`rotate(x, y, z)`](/api/textmode.js/classes/Textmodifier#rotate) for 3D rotation:

```js
t.rotate(t.frameCount, t.frameCount * 0.7, 0);
t.rect(12, 6);
```

Angles are in degrees.

## Scale

Use [`scale()`](/api/textmode.js/classes/Textmodifier#scale) to scale future drawing:

```js
t.scale(2, 1);
t.rect(6, 6);
```

## Save and restore state

Use [`push()`](/api/textmode.js/classes/Textmodifier#push) and [`pop()`](/api/textmode.js/classes/Textmodifier#pop) to isolate transforms and drawing state:

```js
t.push();
t.translate(-12, 0);
t.rotateZ(t.frameCount);
t.charColor(255, 120, 80);
t.rect(8, 8);
t.pop();

t.rect(8, 8); // unaffected by the previous translate, rotate, and color
```

State includes transforms, character settings, colors, line weight, shader state, camera state, and lighting state.

## Reset and apply matrices

[`resetMatrix()`](/api/textmode.js/classes/Textmodifier#resetmatrix) clears the current transform:

```js
t.resetMatrix();
```

[`applyMatrix()`](/api/textmode.js/classes/Textmodifier#applymatrix) applies a custom matrix when you need lower-level transform control:

```js
t.applyMatrix(
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  4, 0, 0, 1
);
```

Most sketches should prefer `translate`, `rotate`, and `scale`; `applyMatrix` is for integrations and advanced projection experiments.

## Transform order matters

Transforms compose in order. Moving and then rotating is different from rotating and then moving:

```js
t.push();
t.translate(12, 0);
t.rotateZ(45);
t.rect(8, 8);
t.pop();

t.push();
t.rotateZ(45);
t.translate(12, 0);
t.rect(8, 8);
t.pop();
```

## Related APIs

- [`Textmodifier.translate()`](/api/textmode.js/classes/Textmodifier#translate)
- [`Textmodifier.rotate()`](/api/textmode.js/classes/Textmodifier#rotate)
- [`Textmodifier.scale()`](/api/textmode.js/classes/Textmodifier#scale)
- [`Textmodifier.applyMatrix()`](/api/textmode.js/classes/Textmodifier#applymatrix)
- [`Textmodifier.resetMatrix()`](/api/textmode.js/classes/Textmodifier#resetmatrix)
- [`Textmodifier.push()`](/api/textmode.js/classes/Textmodifier#push)
- [`Textmodifier.pop()`](/api/textmode.js/classes/Textmodifier#pop)

