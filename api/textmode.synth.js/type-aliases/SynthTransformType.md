---
layout: doc
editLink: false
title: SynthTransformType
description: Transform type categories determining how functions compose in the shader pipeline.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-08-17
---

[textmode.synth.js](../index.md) / SynthTransformType

# Type Alias: SynthTransformType

```ts
type SynthTransformType = 
  | typeof TT_SRC
  | typeof TT_COORD
  | typeof TT_COLOR
  | typeof TT_COMBINE
  | typeof TT_COMBINE_COORD;
```

Transform type categories determining how functions compose in the shader pipeline.

Each type has specific input/output signatures:
- `src`: Source generators that produce colors from UV coordinates
- `coord`: Coordinate transforms that modify UV before sampling
- `color`: Color transforms that modify existing color values
- `combine`: Blending operations that combine two color sources
- `combineCoord`: Modulation that uses one source to affect another's coordinates

