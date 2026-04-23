---
layout: doc
editLink: true
title: TextmodeGlyph
description: Represents a single glyph entry in a textmode glyph atlas.
category: Type Aliases
api: true
namespace: fonts
kind: TypeAlias
lastModified: 2026-04-19
---

[textmode.js](../../../index.md) / [fonts](../index.md) / TextmodeGlyph

# Type Alias: TextmodeGlyph

```ts
type TextmodeGlyph = object;
```

Represents a single glyph entry in a textmode glyph atlas.

## Properties

### atlasIndex

```ts
atlasIndex: number;
```

Stable atlas slot used by the ASCII shader. Slot 0 is reserved for missing glyphs.

***

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

The shader color associated with the character.

***

### glyphData?

```ts
optional glyphData: GlyphData;
```

Glyph outline data including advance width and path information.

***

### sourceIndex

```ts
sourceIndex: number;
```

Source-order index before atlas normalization.

***

### unicode

```ts
unicode: number;
```

The first Unicode code point of the character, kept for backward compatibility.

***

### unicodeSequence

```ts
unicodeSequence: number[];
```

Full Unicode code-point sequence for this glyph token.
