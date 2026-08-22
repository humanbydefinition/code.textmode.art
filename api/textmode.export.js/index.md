---
layout: doc
editLink: false
title: textmode.export.js
description: Export plugin for textmode.js - Save your creations as images, GIFs, videos, SVG, JSON, and plain text.
category: API Reference
api: true
kind: Project
ecosystem: textmode.js
lastModified: 2026-08-22
---

# textmode.export.js

Export finished textmode.js artworks without leaving the sketch.

## Choose an output

Use **canvas capture** for the exact image on screen: PNG, JPEG, WebP, GIF,
or video preserve compositing, filters, shaders, and post-processing. Use
**layer data export** when the artwork should stay editable or machine
readable: TXT, SVG, and JSON read from the selected layer, while JSON can
also describe the full layer stack.

Start with [ExportPlugin](variables/ExportPlugin.md), then call the helpers added to your sketch
or use the built-in export overlay. For recipes and format trade-offs, read
the [Exporting guide](/docs/exporting).

## Animation export

| Type Alias | Description |
| ------ | ------ |
| [GIFExportOptions](type-aliases/GIFExportOptions.md) | Options for exporting the textmode content to GIF format. |
| [GIFExportProgress](type-aliases/GIFExportProgress.md) | Progress information emitted during the GIF export process. |
| [VideoBitrateMode](type-aliases/VideoBitrateMode.md) | Bitrate allocation strategy for the native encoder. |
| [VideoBitratePreset](type-aliases/VideoBitratePreset.md) | Subjective bitrate preset used when an exact bits-per-second value is not supplied. |
| [VideoExportFormat](type-aliases/VideoExportFormat.md) | Video container format written by `saveVideo`. |
| [VideoExportOptions](type-aliases/VideoExportOptions.md) | Options for exporting the textmode content to video format. |
| [VideoExportPhase](type-aliases/VideoExportPhase.md) | More granular phase information for progress UIs that need to distinguish setup, rendering, and finalization. |
| [VideoExportProgress](type-aliases/VideoExportProgress.md) | Progress information emitted during the video export process. |
| [VideoHardwareAcceleration](type-aliases/VideoHardwareAcceleration.md) | WebCodecs hardware acceleration preference. |
| [VideoLatencyMode](type-aliases/VideoLatencyMode.md) | Encoder scheduling mode. |
| [VideoRecordingState](type-aliases/VideoRecordingState.md) | Lifecycle state reported while a video export is being prepared, recorded, encoded, or completed. |

## Canvas capture

| Type Alias | Description |
| ------ | ------ |
| [ImageExportOptions](type-aliases/ImageExportOptions.md) | Options for exporting the textmode content to image format. |

## JSON document data

| Type Alias | Description |
| ------ | ------ |
| [JSONExportColorMode](type-aliases/JSONExportColorMode.md) | Supported JSON color output modes. |
| [JSONExportOptions](type-aliases/JSONExportOptions.md) | Options for exporting the textmode content to JSON format. |
| [JSONExportTarget](type-aliases/JSONExportTarget.md) | Target scope for JSON export. |
| [TextmodeDocumentJSON](type-aliases/TextmodeDocumentJSON.md) | JSON document exported by the JSON exporter. |

## Layer data export

| Name | Description |
| ------ | ------ |
| [LayerExportOptions](interfaces/LayerExportOptions.md) | Shared option for exporters that read layer framebuffer data. |
| [SVGExportOptions](type-aliases/SVGExportOptions.md) | Options for exporting the textmode content to SVG format. |
| [TXTExportOptions](type-aliases/TXTExportOptions.md) | Options for exporting the textmode content to TXT format. |

## Other

| Type Alias | Description |
| ------ | ------ |
| [VideoContentHint](type-aliases/VideoContentHint.md) | Hint for the encoder's content-aware rate control. |

## Overlay

| Name | Description |
| ------ | ------ |
| [ExportOverlayController](interfaces/ExportOverlayController.md) | Controller for managing the export overlay UI visibility at runtime. |
| [ExportOverlayPosition](interfaces/ExportOverlayPosition.md) | Current canvas-relative placement state for the export overlay UI. |
| [ExportOverlayPositionInput](interfaces/ExportOverlayPositionInput.md) | Canvas-relative placement coordinates for the export overlay UI. |
| [ExportDefaults](type-aliases/ExportDefaults.md) | Per-format default options used to seed the overlay UI inputs at mount time and after a [ExportOverlayController.resetDefaults](interfaces/ExportOverlayController.md#resetdefaults) call. |
| [ExportDefaultsPatch](type-aliases/ExportDefaultsPatch.md) | Partial patch accepted by [ExportOverlayController.setDefaults](interfaces/ExportOverlayController.md#setdefaults). |
| [GIFOverlayDefaults](type-aliases/GIFOverlayDefaults.md) | Default GIF export fields controlled by the export overlay. |
| [ImageOverlayDefaults](type-aliases/ImageOverlayDefaults.md) | Default image export fields controlled by the export overlay. |
| [JSONOverlayDefaults](type-aliases/JSONOverlayDefaults.md) | Default JSON export fields controlled by the export overlay. |
| [SVGOverlayDefaults](type-aliases/SVGOverlayDefaults.md) | Default SVG export fields controlled by the export overlay. |
| [TXTOverlayDefaults](type-aliases/TXTOverlayDefaults.md) | Default TXT export fields controlled by the export overlay. |
| [VideoOverlayDefaults](type-aliases/VideoOverlayDefaults.md) | Default video export fields controlled by the export overlay. |

## Workflow

| Name | Description |
| ------ | ------ |
| [TextmodeExportAPI](interfaces/TextmodeExportAPI.md) | Runtime export helpers that `ExportPlugin` attaches to the `Textmodifier` instance. |
| [ExportPlugin](variables/ExportPlugin.md) | Default export plugin instance for the standard textmode.js workflow. |
