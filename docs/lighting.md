---
title: Lighting
description: Add ambient and point lights to textmode.js scenes and control point-light falloff.
---

# Lighting

Lighting affects rendered output in the current layer, including 2D primitives, 3D primitives, and media or framebuffer content drawn through `image()`. It shades character and cell colors while preserving alpha.

## Ambient light

[`ambientLight()`](/api/textmode.js/classes/Textmodifier#ambientlight) adds light from all directions:

```js
t.ambientLight(40);
```

You can pass grayscale, RGB/RGBA components, CSS strings, arrays, or [`TextmodeColor`](/api/textmode.js/classes/TextmodeColor) values:

```js
t.ambientLight(80, 90, 120);
t.ambientLight('#223344');
```

Multiple ambient lights are additive.

## Point lights

[`pointLight()`](/api/textmode.js/classes/Textmodifier#pointlight) adds light from a position:

```js
t.pointLight(255, 220, 180, 20, -20, 40);
```

You can also pass an object position:

```js
t.pointLight('#ffe0a0', { x: 20, y: -20, z: 40 });
```

Up to five point lights are supported per frame. Additional point lights are ignored.

## Falloff

[`lightFalloff()`](/api/textmode.js/classes/Textmodifier#lightfalloff) controls point-light attenuation:

```js
t.lightFalloff(1, 0.04, 0.002);
```

The formula is:

```text
1 / (constant + distance * linear + distance * distance * quadratic)
```

Negative inputs are clamped to `0`. If all values resolve to `0`, falloff resets to `(1, 0, 0)`.

## Clear lights

[`noLights()`](/api/textmode.js/classes/Textmodifier#nolights) removes active lights and resets falloff:

```js
t.noLights();
```

This is useful when one part of the frame should render lit and another should render unlit.

## Frame-scoped state

Lighting state is frame-scoped and resets for each layer draw callback. Set lights in the same draw callback as the drawing commands they should affect:

```js
t.draw(() => {
  t.background(0);

  t.ambientLight(30);
  t.pointLight(255, 220, 160, 18, -18, 40);

  t.rotateY(t.frameCount);
  t.char('#');
  t.charColor(180, 220, 255);
  t.sphere(8);
});
```

## Related APIs

- [`Textmodifier.ambientLight()`](/api/textmode.js/classes/Textmodifier#ambientlight)
- [`Textmodifier.pointLight()`](/api/textmode.js/classes/Textmodifier#pointlight)
- [`Textmodifier.lightFalloff()`](/api/textmode.js/classes/Textmodifier#lightfalloff)
- [`Textmodifier.noLights()`](/api/textmode.js/classes/Textmodifier#nolights)
- [3D drawing](/docs/3d-drawing)
- [Cameras and projection](/docs/cameras-and-projection)
