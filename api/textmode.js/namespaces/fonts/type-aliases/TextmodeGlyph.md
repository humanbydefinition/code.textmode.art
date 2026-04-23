---
layout: doc
editLink: true
title: TextmodeGlyph
description: Represents a single glyph entry in a textmode glyph atlas.
category: Type Aliases
api: true
namespace: fonts
kind: TypeAlias
lastModified: 2026-04-23
---

[textmode.js](../../../index.md) / [fonts](../index.md) / TextmodeGlyph

# Type Alias: TextmodeGlyph

```ts
type TextmodeGlyph = object;
```

Represents a single glyph entry in a textmode glyph atlas.

## Properties

### character

```ts
character: string;
```

The character itself.

***

### color

```ts
color: [number, number, number];
```

RGB-encoded glyph identity used by the render pipeline and exposed through character color lookups.

***

### glyphData?

```ts
optional glyphData: GlyphData | null;
```

Glyph outline data including advance width and path information.

Only available for [TextmodeFont](../classes/TextmodeFont.md) glyphs, not [TextmodeTileset](../classes/TextmodeTileset.md) glyphs,
since tilesets use pre-rendered bitmap data instead of vector outlines.

***

### unicode

```ts
unicode: number;
```

The Unicode code point of the character.
