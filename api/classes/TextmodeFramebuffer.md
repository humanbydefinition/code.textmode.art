---
layout: doc
editLink: true
title: TextmodeFramebuffer
description: Framebuffer class for managing offscreen rendering targets initialized via Textmodifier.createFramebuffer.
category: Classes
api: true
kind: Class
lastModified: 2026-02-01
hasConstructor: false
---

[textmode.js](../index.md) / TextmodeFramebuffer

# Class: TextmodeFramebuffer

Framebuffer class for managing offscreen rendering targets initialized via [Textmodifier.createFramebuffer](Textmodifier.md#createframebuffer).

`TextmodeFramebuffer` instances contain 3 attachments to support the rendering pipeline:
- Attachment 0: Character and transform data *(RGBA)*
- Attachment 1: Primary color data *(RGBA)*
- Attachment 2: Secondary color data *(RGBA)*

## Extends

- `Disposable`

## Implements

- `IFramebuffer`

## Accessors

### attachmentCount

#### Get Signature

```ts
get attachmentCount(): number;
```

Get the number of color attachments in this framebuffer

##### Returns

`number`

***

### framebuffer

#### Get Signature

```ts
get framebuffer(): null | WebGLFramebuffer;
```

Get the WebGLFramebuffer object

##### Returns

`null` \| `WebGLFramebuffer`

***

### height

#### Get Signature

```ts
get height(): number;
```

Get the current framebuffer height in grid cells.

##### Returns

`number`

#### Implementation of

```ts
IFramebuffer.height
```

***

### textures

#### Get Signature

```ts
get textures(): WebGLTexture[];
```

Get all textures associated with this framebuffer.

Useful for binding textures for reading in shaders.

Textmode framebuffers allocate 3 attachments by default:
- 0: Character data (RG), flags (B), and rotation (A)
- 1: Character colors (RGBA)
- 2: Cell background colors (RGBA)

##### Returns

`WebGLTexture`[]

#### Implementation of

```ts
IFramebuffer.textures
```

***

### width

#### Get Signature

```ts
get width(): number;
```

Get the current framebuffer width in grid cells.

##### Returns

`number`

#### Implementation of

```ts
IFramebuffer.width
```

## Methods

### begin()

```ts
begin(): void;
```

Begin drawing to this framebuffer.

This method:
- Flushes any pending draw calls to maintain proper render order
- Saves the current framebuffer and viewport state
- Binds this framebuffer as the render target
- Clears all color attachments to transparent black
- Sets the viewport to match the framebuffer dimensions

All subsequent drawing operations will target this framebuffer until [end](#end) is called.

#### Returns

`void`

#### Implementation of

```ts
IFramebuffer.begin
```

***

### dispose()

```ts
dispose(): void;
```

Dispose of the resource and run all registered callbacks.
Subclasses should call super.dispose() at the end of their dispose method.

#### Returns

`void`

#### Implementation of

```ts
IFramebuffer.dispose
```

#### Overrides

```ts
Disposable.dispose
```

***

### end()

```ts
end(): void;
```

End rendering to this framebuffer and restore previous state.

This method:
- Flushes any pending draw calls into this framebuffer
- Restores the previously bound framebuffer
- Restores the previous viewport settings

After calling this method, rendering operations will target the previously active framebuffer.

#### Returns

`void`

#### Implementation of

```ts
IFramebuffer.end
```

***

### readPixels()

```ts
readPixels(attachmentIndex): Uint8Array;
```

Read pixels from a specific color attachment into an RGBA Uint8Array.

The returned pixel data:
- Is in RGBA format (4 bytes per pixel)
- Has top-left origin (first pixel is top-left corner)
- Is cached until the next render pass to this framebuffer

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `attachmentIndex` | `number` | The index of the color attachment to read (0-based)<br/> 0. Character data and transform info<br/> 1. Character colors<br/> 2. Cell background colors<br/> |

#### Returns

`Uint8Array`

A Uint8Array containing the pixel data in RGBA format

#### Implementation of

```ts
IFramebuffer.readPixels
```

***

### resize()

```ts
resize(width, height): void;
```

Resize the framebuffer to new dimensions.
This recreates the internal textures with the new size and invalidates any cached pixel data.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `width` | `number` | New width in grid cells |
| `height` | `number` | New height in grid cells |

#### Returns

`void`

#### Implementation of

```ts
IFramebuffer.resize
```
