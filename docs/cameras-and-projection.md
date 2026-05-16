---
title: Cameras and Projection
description: Control 3D views in textmode.js with camera objects, direct camera settings, lookAt, perspective, and orthographic projection.
---

# Cameras and projection

Cameras control how 3D content is viewed. You can use direct p5-style camera calls or create a mutable [`TextmodeCamera`](/api/textmode.js/classes/TextmodeCamera) object. (¬‿¬)σ

## Direct camera calls

Use [`camera()`](/api/textmode.js/classes/Textmodifier#camera) to set eye position, target, and up vector:

```js
t.draw(() => {
  t.background(0);

  t.camera(0, 0, 60, 0, 0, 0, 0, 1, 0);

  t.box(12, 12, 12);
});
```

Use [`lookAt()`](/api/textmode.js/classes/Textmodifier#lookat) to update only the target:

```js
t.lookAt(0, 0, 0);
```

## Camera objects

[`createCamera()`](/api/textmode.js/classes/Textmodifier#createcamera) creates a camera object initialized from the current render camera state and sets it active:

```js
let cam;

t.setup(() => {
  cam = t.createCamera();
  cam.setPosition(0, 0, 70);
  cam.lookAt(0, 0, 0);
});

t.draw(() => {
  t.setCamera(cam);
  t.background(0);
  t.sphere(8);
});
```

Useful camera object methods:

- [`setPosition()`](/api/textmode.js/classes/TextmodeCamera#setposition)
- [`lookAt()`](/api/textmode.js/classes/TextmodeCamera#lookat)
- [`move()`](/api/textmode.js/classes/TextmodeCamera#move)
- [`setUp()`](/api/textmode.js/classes/TextmodeCamera#setup)
- [`copy()`](/api/textmode.js/classes/TextmodeCamera#copy)

## Reset the camera

Use [`resetCamera()`](/api/textmode.js/classes/Textmodifier#resetcamera) to return to the default camera behavior:

```js
t.resetCamera();
```

## Perspective projection

Perspective is the default. Use [`perspective()`](/api/textmode.js/classes/Textmodifier#perspective) when you need custom projection parameters:

```js
t.perspective(55, 0.1, 1000);
```

Parameters are vertical field of view in degrees, near plane, and far plane.

## Orthographic projection

Use [`ortho()`](/api/textmode.js/classes/Textmodifier#ortho) when objects should keep their apparent size regardless of depth:

```js
t.ortho();
```

Projection mode resets to perspective at the start of each frame. Call `ortho()` in each frame that should render orthographically.

## Layer cameras

Layers can have independent cameras:

```js
const layer = t.layers.add();
const layerCam = layer.createCamera();

layer.draw(() => {
  layer.setCamera(layerCam);
  t.background(0);
  t.box(10, 10, 10);
});
```

This is useful when a foreground HUD, a 2D base layer, and a 3D scene need different views.

## Related APIs

- [`Textmodifier.camera()`](/api/textmode.js/classes/Textmodifier#camera)
- [`Textmodifier.createCamera()`](/api/textmode.js/classes/Textmodifier#createcamera)
- [`Textmodifier.setCamera()`](/api/textmode.js/classes/Textmodifier#setcamera)
- [`Textmodifier.resetCamera()`](/api/textmode.js/classes/Textmodifier#resetcamera)
- [`Textmodifier.perspective()`](/api/textmode.js/classes/Textmodifier#perspective)
- [`Textmodifier.ortho()`](/api/textmode.js/classes/Textmodifier#ortho)
- [`TextmodeCamera`](/api/textmode.js/classes/TextmodeCamera)
