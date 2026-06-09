---
layout: doc
editLink: true
title: TextmodeFramebuffer
description: Framebuffer class for managing offscreen rendering targets initialized via Textmodifier.createFramebuffer.
category: Classes
api: true
kind: Class
lastModified: 2026-06-09
hasConstructor: false
---

[textmode.js](../index.md) / TextmodeFramebuffer

# Class: TextmodeFramebuffer

Framebuffer class for managing offscreen rendering targets initialized via [Textmodifier.createFramebuffer](Textmodifier/methods/createFramebuffer.md).

`TextmodeFramebuffer` instances contain 3 attachments to support the rendering pipeline:
- Attachment 0: Character and transform data *(RGBA)*
- Attachment 1: charColor *(RGBA)*
- Attachment 2: cellColor *(RGBA)*

## Extends

- `Disposable`

## Accessors

| Accessor | Description |
| ------ | ------ |
| [attachmentCount](TextmodeFramebuffer/accessors/attachmentCount.md) | Number of color attachments available on this framebuffer. |
| [framebuffer](TextmodeFramebuffer/accessors/framebuffer.md) | The underlying WebGLFramebuffer handle. |
| [height](TextmodeFramebuffer/accessors/height.md) | Height of the framebuffer in pixels. |
| [textures](TextmodeFramebuffer/accessors/textures.md) | The color attachment textures owned by this framebuffer. |
| [width](TextmodeFramebuffer/accessors/width.md) | Width of the framebuffer in pixels. |

## Methods

| Method | Description |
| ------ | ------ |
| [begin](TextmodeFramebuffer/methods/begin.md) | Begin rendering into this framebuffer. |
| [dispose](TextmodeFramebuffer/methods/dispose.md) | Dispose the framebuffer, attached textures, and optional depth renderbuffer. |
| [end](TextmodeFramebuffer/methods/end.md) | Finish rendering into this framebuffer and restore the previous framebuffer. |
| [readPixels](TextmodeFramebuffer/methods/readPixels.md) | Read RGBA pixel data from one attachment. |
| [resize](TextmodeFramebuffer/methods/resize.md) | Resize the framebuffer and all attached textures. |
