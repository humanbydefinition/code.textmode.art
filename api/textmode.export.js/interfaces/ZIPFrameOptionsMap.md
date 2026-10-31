---
layout: doc
editLink: false
title: ZIPFrameOptionsMap
description: Options accepted by frameOptions for each ZIP frame format.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-10-31
isInterface: true
---

[textmode.export.js](../index.md) / ZIPFrameOptionsMap

# Interface: ZIPFrameOptionsMap

Options accepted by `frameOptions` for each ZIP frame format.

Choose the frame format with [ZIPExportOptions](../type-aliases/ZIPExportOptions.md). Set the archive filename
on [ZIPCaptureOptions](ZIPCaptureOptions.md), not inside `frameOptions`. For image frames,
the outer `format` also selects the image format.


## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-jpg"></a> `jpg` | `Omit`\<[`ImageExportOptions`](../type-aliases/ImageExportOptions.md), `"filename"` \| `"format"`\> | JPEG image settings, such as `scale`. See [ImageExportOptions](../type-aliases/ImageExportOptions.md). |
| <a id="property-png"></a> `png` | `Omit`\<[`ImageExportOptions`](../type-aliases/ImageExportOptions.md), `"filename"` \| `"format"`\> | PNG image settings, such as `scale`. See [ImageExportOptions](../type-aliases/ImageExportOptions.md). |
| <a id="property-svg"></a> `svg` | `Omit`\<[`SVGExportOptions`](../type-aliases/SVGExportOptions.md), `"filename"`\> | SVG layer settings, such as `drawMode`. See [SVGExportOptions](../type-aliases/SVGExportOptions.md). |
| <a id="property-txt"></a> `txt` | `Omit`\<[`TXTExportOptions`](../type-aliases/TXTExportOptions.md), `"filename"`\> | Text layer settings, such as `preserveTrailingSpaces`. See [TXTExportOptions](../type-aliases/TXTExportOptions.md). |
| <a id="property-webp"></a> `webp` | `Omit`\<[`ImageExportOptions`](../type-aliases/ImageExportOptions.md), `"filename"` \| `"format"`\> | WebP image settings, such as `scale`. See [ImageExportOptions](../type-aliases/ImageExportOptions.md). |
