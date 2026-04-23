---
layout: doc
editLink: true
title: TextmodeTileset
description: Manages a bitmap tileset as a normalized glyph atlas.
category: Classes
api: true
namespace: fonts
kind: Class
lastModified: 2026-04-19
hasConstructor: true
---

[textmode.js](../../../index.md) / [fonts](../index.md) / TextmodeTileset

# Class: TextmodeTileset

Manages a bitmap tileset as a normalized glyph atlas.

Tiles are imported from a source sheet, repacked into the same contiguous atlas layout
used by vector fonts, and exposed through the shared glyph-atlas contract.

`fontSize()` changes on a tileset only affect the effective output cell size.
The native atlas stays at the authored tile resolution.

## Extends

- `Disposable`

## Constructors

### Constructor

```ts
new TextmodeTileset(
   renderer, 
   fontSize?, 
   options?): TextmodeTileset;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `renderer` | `GLRenderer` |
| `fontSize?` | `number` |
| `options?` | [`TextmodeTilesetOptions`](../interfaces/TextmodeTilesetOptions.md) |

#### Returns

`TextmodeTileset`

#### Overrides

```ts
Disposable.constructor
```

## Properties

### \_isInitialized

```ts
_isInitialized: boolean = false;
```

## Accessors

### cellDimensions

#### Get Signature

```ts
get cellDimensions(): GlyphDimensions;
```

##### Returns

[`GlyphDimensions`](../interfaces/GlyphDimensions.md)

#### Implementation of

```ts
TextmodeGlyphAtlas.cellDimensions
```

***

### cellHeight

#### Get Signature

```ts
get cellHeight(): number;
```

##### Returns

`number`

#### Implementation of

```ts
TextmodeGlyphAtlas.cellHeight
```

***

### cellWidth

#### Get Signature

```ts
get cellWidth(): number;
```

##### Returns

`number`

#### Implementation of

```ts
TextmodeGlyphAtlas.cellWidth
```

***

### characterMap

#### Get Signature

```ts
get characterMap(): Map<string, TextmodeGlyph>;
```

##### Returns

`Map`\<`string`, [`TextmodeGlyph`](../type-aliases/TextmodeGlyph.md)\>

#### Implementation of

```ts
TextmodeGlyphAtlas.characterMap
```

***

### characters

#### Get Signature

```ts
get characters(): TextmodeGlyph[];
```

##### Returns

[`TextmodeGlyph`](../type-aliases/TextmodeGlyph.md)[]

#### Implementation of

```ts
TextmodeGlyphAtlas.characters
```

***

### columns

#### Get Signature

```ts
get columns(): number;
```

##### Returns

`number`

#### Implementation of

```ts
TextmodeGlyphAtlas.columns
```

***

### fontFramebuffer

#### Get Signature

```ts
get fontFramebuffer(): TextmodeFramebuffer;
```

##### Returns

[`TextmodeFramebuffer`](../../../classes/TextmodeFramebuffer.md)

***

### fontSize

#### Get Signature

```ts
get fontSize(): number;
```

##### Returns

`number`

***

### framebuffer

#### Get Signature

```ts
get framebuffer(): TextmodeFramebuffer;
```

##### Returns

[`TextmodeFramebuffer`](../../../classes/TextmodeFramebuffer.md)

#### Implementation of

```ts
TextmodeGlyphAtlas.framebuffer
```

***

### maxGlyphDimensions

#### Get Signature

```ts
get maxGlyphDimensions(): GlyphDimensions;
```

##### Returns

[`GlyphDimensions`](../interfaces/GlyphDimensions.md)

***

### nativeCellDimensions

#### Get Signature

```ts
get nativeCellDimensions(): GlyphDimensions;
```

##### Returns

[`GlyphDimensions`](../interfaces/GlyphDimensions.md)

***

### rows

#### Get Signature

```ts
get rows(): number;
```

##### Returns

`number`

#### Implementation of

```ts
TextmodeGlyphAtlas.rows
```

***

### textureColumns

#### Get Signature

```ts
get textureColumns(): number;
```

##### Returns

`number`

***

### textureRows

#### Get Signature

```ts
get textureRows(): number;
```

##### Returns

`number`

## Methods

### \_getCharacterColor()

```ts
_getCharacterColor(character): [number, number, number];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `character` | `string` |

#### Returns

\[`number`, `number`, `number`\]

***

### \_getCharacterColors()

```ts
_getCharacterColors(characters): [number, number, number][];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `characters` | `string` |

#### Returns

\[`number`, `number`, `number`\][]

***

### dispose()

```ts
dispose(): void;
```

Dispose of the resource and run all registered callbacks.
Subclasses should call super.dispose() at the end of their dispose method.

#### Returns

`void`

#### Overrides

```ts
Disposable.dispose
```

***

### getCharacterColor()

```ts
getCharacterColor(character): [number, number, number];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `character` | `string` |

#### Returns

\[`number`, `number`, `number`\]

#### Implementation of

```ts
TextmodeGlyphAtlas.getCharacterColor
```

***

### getCharacterColors()

```ts
getCharacterColors(characters): [number, number, number][];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `characters` | `string` |

#### Returns

\[`number`, `number`, `number`\][]

#### Implementation of

```ts
TextmodeGlyphAtlas.getCharacterColors
```
