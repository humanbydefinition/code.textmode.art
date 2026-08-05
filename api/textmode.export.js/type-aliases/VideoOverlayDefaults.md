---
layout: doc
editLink: false
title: VideoOverlayDefaults
description: Default video export fields controlled by the export overlay.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-08-05
---

[textmode.export.js](../index.md) / VideoOverlayDefaults

# Type Alias: VideoOverlayDefaults

```ts
type VideoOverlayDefaults = Pick<VideoExportOptions, 
  | "format"
  | "frameCount"
  | "frameRate"
  | "bitrateMode"
  | "latencyMode"
  | "hardwareAcceleration"
  | "keyFrameInterval"
  | "transparent"> & object;
```

Default video export fields controlled by the export overlay.

## Type Declaration

| Name | Type |
| ------ | ------ |
| `bitrate?` | [`VideoBitratePreset`](VideoBitratePreset.md) |

