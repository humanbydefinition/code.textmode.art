---
title: 3D Drawing
description: Draw textmode.js 3D primitives with depth, transforms, cameras, and lighting.
---

# 3D drawing

`textmode.js` includes 3D primitives that render as textmode cells. The API is intentionally close to p5-style creative coding while keeping the textmode character and color model. (ﾉ≧∀≦)ﾉ

## 3D primitives

Available methods:

- [`box(width, height?, depth?)`](/api/textmode.js/classes/Textmodifier#box)
- [`sphere(radius)`](/api/textmode.js/classes/Textmodifier#sphere)
- [`torus(radius, tubeRadius)`](/api/textmode.js/classes/Textmodifier#torus)
- [`cone(radius, height?)`](/api/textmode.js/classes/Textmodifier#cone)
- [`cylinder(radius, height?)`](/api/textmode.js/classes/Textmodifier#cylinder)
- [`ellipsoid(radiusX, radiusY, radiusZ)`](/api/textmode.js/classes/Textmodifier#ellipsoid)

```js
t.draw(() => {
  t.background(8, 10, 24);

  t.char("A");
  t.charColor(255, 180, 90);
  t.cellColor(0);

  t.rotateX(t.frameCount);
  t.rotateY(t.frameCount * 1.4);
  t.box(12, 12, 12);
});
```

## Use 3D transforms

The same transform stack works for 2D and 3D:

```js
t.push();
t.translate(-10, 0, 0);
t.rotateY(t.frameCount);
t.sphere(6);
t.pop();

t.push();
t.translate(10, 0, 0);
t.rotateX(t.frameCount);
t.torus(6, 2);
t.pop();
```

Use [`push()`](/api/textmode.js/classes/Textmodifier#push) and [`pop()`](/api/textmode.js/classes/Textmodifier#pop) to keep each object independent.

## Projection

Perspective projection is the default. Switch to orthographic projection with [`ortho()`](/api/textmode.js/classes/Textmodifier#ortho):

```js
t.ortho();
t.box(12, 12, 12);
```

Use [`perspective()`](/api/textmode.js/classes/Textmodifier#perspective) to set perspective parameters:

```js
t.perspective(60, 0.1, 1000);
```

Projection state resets at the start of each frame, so call `ortho()` or custom `perspective()` settings in every frame where they matter.

## Cameras and lights

3D scenes become easier to control with:

- [Cameras and projection](/docs/cameras-and-projection)
- [Lighting](/docs/lighting)

```js
t.camera(0, 0, 60, 0, 0, 0);
t.ambientLight(40);
t.pointLight(255, 220, 180, 20, -20, 40);
```

## Textmode-specific styling

3D primitives still use textmode state:

```js
t.char("#");
t.charColor(120, 220, 255);
t.cellColor(4, 8, 16);
t.charRotation(45);
t.sphere(8);
```

The result is not a pixel-shaded mesh. It is a mesh expressed through character cells, glyph color, and cell color.

## Related APIs

- [`Textmodifier.box()`](/api/textmode.js/classes/Textmodifier#box)
- [`Textmodifier.sphere()`](/api/textmode.js/classes/Textmodifier#sphere)
- [`Textmodifier.torus()`](/api/textmode.js/classes/Textmodifier#torus)
- [`Textmodifier.cone()`](/api/textmode.js/classes/Textmodifier#cone)
- [`Textmodifier.cylinder()`](/api/textmode.js/classes/Textmodifier#cylinder)
- [`Textmodifier.ellipsoid()`](/api/textmode.js/classes/Textmodifier#ellipsoid)
- [Transforms](/docs/transforms)
