---
layout: doc
editLink: false
title: GIFExportOptions
description: Options for capturing deterministic textmode frames as an animated GIF.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-10-31
---

[textmode.export.js](../index.md) / GIFExportOptions

# Type Alias: GIFExportOptions

```ts
type GIFExportOptions = object;
```

Options for capturing deterministic textmode frames as an animated GIF.


## Properties

### filename?

```ts
filename?: string;
```

Target filename without extension. Defaults to an auto-generated value.


***

### frameCount?

```ts
frameCount?: number;
```

Desired total number of frames to capture. Defaults to `300`.


***

### frameRate?

```ts
frameRate?: number;
```

Target frame rate for the export, in frames per second. Defaults to `60`.


***

### onProgress?

```ts
onProgress?: (progress) => void;
```

Progress callback invoked throughout the recording lifecycle.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `progress` | [`GIFExportProgress`](GIFExportProgress.md) |

#### Returns

`void`


***

### prepareFrame?

```ts
prepareFrame?: PrepareExportFrame;
```

Prepares external media before each deterministic frame is redrawn.


***

### repeat?

```ts
repeat?: number;
```

GIF loop count. 0 = loop forever. Defaults to `0`.


***

### scale?

```ts
scale?: number;
```

Scale factor for the output image.

`1.0` = original size, `2.0` = double size, `0.5` = half size.

Defaults to `1.0`.


***

### signal?

```ts
signal?: AbortSignal;
```

Abort signal for cancelling capture or encoding.

