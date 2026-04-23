---
layout: doc
editLink: true
title: TextureAtlas
description: Handles creation of texture atlases for font rendering. This class manages the Canvas 2D rendering and WebGL framebuffer creation. Supports both Typr.js path...
category: Classes
api: true
namespace: fonts
kind: Class
lastModified: 2026-04-19
hasConstructor: true
---

[textmode.js](../../../index.md) / [fonts](../index.md) / TextureAtlas

# Class: TextureAtlas

Handles creation of texture atlases for font rendering.
This class manages the Canvas 2D rendering and WebGL framebuffer creation.
Supports both Typr.js path-based rendering for uniform cross-browser text
and fallback fillText rendering.

## Constructors

### Constructor

```ts
new TextureAtlas(renderer): TextureAtlas;
```

Creates a new TextureAtlasCreation instance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `renderer` | `GLRenderer` | The WebGL renderer instance |

#### Returns

`TextureAtlas`

## Accessors

### columns

#### Get Signature

```ts
get columns(): number;
```

Returns the number of columns in the texture atlas.

##### Returns

`number`

***

### framebuffer

#### Get Signature

```ts
get framebuffer(): null | TextmodeFramebuffer;
```

Returns the WebGL framebuffer containing the texture atlas.

##### Returns

`null` \| [`TextmodeFramebuffer`](../../../classes/TextmodeFramebuffer.md)

***

### rows

#### Get Signature

```ts
get rows(): number;
```

Returns the number of rows in the texture atlas.

##### Returns

`number`

## Methods

### \_createTextureAtlas()

```ts
_createTextureAtlas(
   characters, 
   maxGlyphDimensions, 
   fontSize, 
   font): void;
```

Creates or updates the texture atlas from the given characters.
Reuses the existing framebuffer if possible, resizing if dimensions change.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `characters` | [`TextmodeGlyph`](../type-aliases/TextmodeGlyph.md)[] | Array of TextmodeCharacter objects |
| `maxGlyphDimensions` | [`GlyphDimensions`](../interfaces/GlyphDimensions.md) | Maximum dimensions of glyphs |
| `fontSize` | `number` | Font size for rendering |
| `font` | [`TyprFont`](../interfaces/TyprFont.md) | Typr.js font data object for path rendering |

#### Returns

`void`
