---
layout: doc
editLink: true
title: TextmodeColorModeState
description: Current color mode and channel maximums used by color parsing APIs.
category: Type Aliases
api: true
namespace: color
kind: TypeAlias
lastModified: 2026-06-08
---

[textmode.js](../../../index.md) / [color](../index.md) / TextmodeColorModeState

# Type Alias: TextmodeColorModeState

```ts
type TextmodeColorModeState = object;
```

Current color mode and channel maximums used by color parsing APIs.

## Properties

### maxes

```ts
maxes: [number, number, number, number];
```

Maximum values for channels 1, 2, 3, and alpha.

***

### mode

```ts
mode: TextmodeColorMode;
```

Active color interpretation mode.
