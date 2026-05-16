---
title: Animation and Timing
description: Control frame rate, frame counters, elapsed time, manual redraws, and loop state in textmode.js.
---

# Animation and timing

`textmode.js` runs an automatic draw loop by default. Timing APIs help you animate consistently and coordinate rendering with other systems.

## Frame count

[`frameCount`](/api/textmode.js/classes/Textmodifier#framecount) increments at the beginning of each draw cycle:

```js
t.draw(() => {
  t.background(0);
  t.rotateZ(t.frameCount * 2);
  t.rect(10, 10);
});
```

You can also set it when you need to restart or jump an animation:

```js
t.frameCount = 0;
```

## Elapsed time

[`millis`](/api/textmode.js/classes/Textmodifier#millis) and [`secs`](/api/textmode.js/classes/Textmodifier#secs) track elapsed sketch time:

```js
t.draw(() => {
  const pulse = Math.sin(t.secs * Math.PI * 2);
  t.charColor(200 + pulse * 55, 180, 255);
  t.rect(10, 10);
});
```

Setting one updates the other, which is useful when seeking through time-based sketches.

## Delta time

Use [`deltaTime()`](/api/textmode.js/classes/Textmodifier#deltatime) for frame-rate-independent motion:

```js
let x = 0;

t.draw(() => {
  const seconds = t.deltaTime() / 1000;
  x += 12 * seconds;

  t.background(0);
  t.translate(x, 0);
  t.char('*');
  t.point();
});
```

## Frame rate

[`frameRate()`](/api/textmode.js/classes/Textmodifier#framerate) sets the target frame rate when called with a value and returns the measured current frame rate when called without one:

```js
t.frameRate(30);
console.log(t.frameRate());
```

[`targetFrameRate()`](/api/textmode.js/classes/Textmodifier#targetframerate) gets or sets the configured cap directly:

```js
t.targetFrameRate(24);
```

## Loop control

Use loop control when the sketch should render only on demand:

```js
t.noLoop();

t.mousePressed(() => {
  t.redraw();
});
```

Useful methods:

- [`noLoop()`](/api/textmode.js/classes/Textmodifier#noloop) pauses automatic rendering.
- [`loop()`](/api/textmode.js/classes/Textmodifier#loop) resumes it.
- [`redraw(n)`](/api/textmode.js/classes/Textmodifier#redraw) renders one or more frames immediately.
- [`isLooping()`](/api/textmode.js/classes/Textmodifier#islooping) reports automatic loop state.

## Coordinating with another renderer

When another library owns the render loop, pause `textmode.js` and trigger it after the host has rendered:

```js
t.noLoop();

function animate() {
  requestAnimationFrame(animate);

  hostRenderer.render(scene, camera);
  t.redraw();
}

animate();
```

This is common when sampling another canvas with [`createTexture()`](/api/textmode.js/classes/Textmodifier#createtexture) or sharing a WebGL context.

## Related APIs

- [`Textmodifier.frameCount`](/api/textmode.js/classes/Textmodifier#framecount)
- [`Textmodifier.millis`](/api/textmode.js/classes/Textmodifier#millis)
- [`Textmodifier.secs`](/api/textmode.js/classes/Textmodifier#secs)
- [`Textmodifier.deltaTime()`](/api/textmode.js/classes/Textmodifier#deltatime)
- [`Textmodifier.frameRate()`](/api/textmode.js/classes/Textmodifier#framerate)
- [`Textmodifier.targetFrameRate()`](/api/textmode.js/classes/Textmodifier#targetframerate)
- [`Textmodifier.noLoop()`](/api/textmode.js/classes/Textmodifier#noloop)
- [`Textmodifier.redraw()`](/api/textmode.js/classes/Textmodifier#redraw)

