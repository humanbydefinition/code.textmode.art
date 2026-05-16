---
title: Framebuffers
description: Render textmode.js content offscreen, draw framebuffer results back into a scene, read pixels, resize buffers, and build multi-pass effects.
---

# Framebuffers

Framebuffers let you render offscreen and use the result later. They are useful for multi-pass effects, feedback loops, cached render passes, readback, and shader workflows. (＠\_＠)

Create them with [`createFramebuffer()`](/api/textmode.js/classes/Textmodifier#createframebuffer).

## Create a framebuffer

```js
let fb;

t.setup(() => {
  fb = t.createFramebuffer({
    width: t.grid.cols,
    height: t.grid.rows,
  });
});
```

Framebuffer width and height are in grid cells. If `width` or `height` is omitted from the options object, that dimension uses the current textmode grid size.

## Render offscreen

Use [`begin()`](/api/textmode.js/classes/TextmodeFramebuffer#begin) and [`end()`](/api/textmode.js/classes/TextmodeFramebuffer#end):

```js
t.draw(() => {
  fb.begin();
  t.clear();
  t.char("A");
  t.charColor(255, 120, 80);
  t.rect(20, 10);
  fb.end();

  t.background(0);
  t.rotateZ(t.frameCount);
  t.image(fb);
});
```

Everything between `begin()` and `end()` renders into the framebuffer instead of the active layer.

## Draw a framebuffer

Framebuffers can be drawn with [`image()`](/api/textmode.js/classes/Textmodifier#image):

```js
t.image(fb);
t.image(fb, 40, 20);
```

The optional width and height scale the framebuffer result in grid cells.

## Multi-pass rendering

Use multiple framebuffers when one pass should feed another:

```js
fbA.begin();
t.clear();
t.char("*");
t.rect(20, 10);
fbA.end();

fbB.begin();
t.shader(waveShader);
t.setUniform("u_source", fbA.textures[0]);
t.image(fbA);
t.shader(null);
fbB.end();

t.image(fbB);
```

For feedback effects, ping-pong between two framebuffers so the current frame can sample the previous result.

## Read and resize

[`readPixels()`](/api/textmode.js/classes/TextmodeFramebuffer#readpixels) reads framebuffer data when you need CPU-side inspection or export support:

```js
const pixels = fb.readPixels();
```

[`resize()`](/api/textmode.js/classes/TextmodeFramebuffer#resize) updates framebuffer dimensions:

```js
fb.resize(t.grid.cols, t.grid.rows);
```

Call [`dispose()`](/api/textmode.js/classes/TextmodeFramebuffer#dispose) when a manually created framebuffer is no longer needed.

## Related APIs

- [`Textmodifier.createFramebuffer()`](/api/textmode.js/classes/Textmodifier#createframebuffer)
- [`TextmodeFramebuffer`](/api/textmode.js/classes/TextmodeFramebuffer)
- [`TextmodeFramebufferOptions`](/api/textmode.js/type-aliases/TextmodeFramebufferOptions)
- [`Textmodifier.image()`](/api/textmode.js/classes/Textmodifier#image)
- [Shaders](/docs/shaders)
