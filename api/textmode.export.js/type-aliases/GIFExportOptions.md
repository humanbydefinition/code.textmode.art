---
title: GIFExportOptions
description: Options for exporting the textmode content to GIF format.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-02-06
---

[textmode.export.js](../index.md) / GIFExportOptions

# Type Alias: GIFExportOptions

```ts
type GIFExportOptions = object;
```

Options for exporting the textmode content to GIF format.

## Properties

### filename?

```ts
optional filename: string;
```

Target filename without extension. Defaults to an auto-generated value.

***

### frameCount?

```ts
optional frameCount: number;
```

Desired total number of frames to capture. Defaults to `300`.

***

### frameRate?

```ts
optional frameRate: number;
```

Target frame rate for the export, in frames per second. Defaults to `60`.

***

### scale?

```ts
optional scale: number;
```

Scale factor for the output image.

`1.0` = original size, `2.0` = double size, `0.5` = half size.

Defaults to `1.0`.

***

### repeat?

```ts
optional repeat: number;
```

GIF loop count. 0 = loop forever. Defaults to `0`.

***

### onProgress()?

```ts
optional onProgress: (progress) => void;
```

Progress callback invoked throughout the recording lifecycle.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `progress` | [`GIFExportProgress`](GIFExportProgress.md) |

#### Returns

`void`
