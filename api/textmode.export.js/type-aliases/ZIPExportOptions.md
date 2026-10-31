---
layout: doc
editLink: false
title: ZIPExportOptions
description: Options for capturing a frame sequence as a ZIP archive.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-10-31
---

[textmode.export.js](../index.md) / ZIPExportOptions

# Type Alias: ZIPExportOptions

```ts
type ZIPExportOptions = { [F in ZIPFrameFormat]: ZIPCaptureOptions & { format: F; frameOptions?: ZIPFrameOptionsMap[F] } }[ZIPFrameFormat];
```

Options for capturing a frame sequence as a ZIP archive.

Set the required `format` to `png`, `jpg`, `webp`, `svg`, or `txt`.
Add shared capture settings such as `frameCount`, `frameRate`, and `filename`
from [ZIPCaptureOptions](../interfaces/ZIPCaptureOptions.md). Use `frameOptions` for settings specific to
the selected format; [ZIPFrameOptionsMap](../interfaces/ZIPFrameOptionsMap.md) lists the available options.
Set the archive filename and image format on the outer options, not in `frameOptions`.

## Examples

Capture 120 PNG frames at 30 frames per second, scaled to double size:
```ts
await t.saveZip({
    format: 'png',
    filename: 'animation',
    frameCount: 120,
    frameRate: 30,
    frameOptions: { scale: 2 },
});
```

Capture SVG frames with outlined characters:
```ts
const archive = await t.toZipBlob({
    format: 'svg',
    frameCount: 60,
    frameRate: 30,
    frameOptions: { drawMode: 'stroke', strokeWidth: 1.5 },
});
```

