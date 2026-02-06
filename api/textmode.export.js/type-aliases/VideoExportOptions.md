---
title: VideoExportOptions
description: Options for exporting the textmode content to video format.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-02-06
---

[textmode.export.js](../index.md) / VideoExportOptions

# Type Alias: VideoExportOptions

```ts
type VideoExportOptions = object;
```

Options for exporting the textmode content to video format.

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

### quality?

```ts
optional quality: number;
```

Encoder quality between 0.0 and 1.0. Higher values request higher fidelity. Defaults to `1.0` *(lossless)*.

***

### transparent?

```ts
optional transparent: boolean;
```

When true, attempts to preserve alpha data in the recording *(experimental)*. Defaults to `false`.

***

### onProgress()?

```ts
optional onProgress: (progress) => void;
```

Progress callback invoked throughout the recording lifecycle.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `progress` | [`VideoExportProgress`](VideoExportProgress.md) |

#### Returns

`void`

***

### debugLogging?

```ts
optional debugLogging: boolean;
```

Enables verbose logging. Defaults to `false`.
