---
layout: doc
editLink: false
title: textmode.export.js
description: Export plugin for textmode.js - Save your creations as images, GIFs, videos, SVG, JSON, and plain text.
category: API Reference
api: true
kind: Project
ecosystem: textmode.js
lastModified: 2026-08-24
---

# textmode.export.js

Export finished textmode.js artworks without leaving the sketch.

## Choose an output

Use **canvas capture** for the rendered image on screen: PNG, JPEG, WebP,
GIF, and video preserve compositing, filters, shaders, and post-processing.
Use **layer data export** when the artwork should stay editable or machine
readable: TXT and SVG read from the selected layer, while JSON can describe
either the selected layer or the full layer stack.

Start with [ExportPlugin](variables/ExportPlugin.md), then call the helpers added to your sketch
or use the built-in export overlay. For recipes and format trade-offs, read
the [Exporting guide](/docs/exporting).

## Workflow

Install the plugin and use the export helpers added to a textmode.js sketch.

| Name | Description |
| ------ | ------ |
| [TextmodeExportAPI](interfaces/TextmodeExportAPI.md) | Runtime export helpers that `ExportPlugin` attaches to the `Textmodifier` instance. |
| [ExportPlugin](variables/ExportPlugin.md) | Default export plugin instance for the standard textmode.js workflow. |

## Canvas capture

Export a still image from the rendered canvas.

| Type Alias | Description |
| ------ | ------ |
| [ImageExportOptions](type-aliases/ImageExportOptions.md) | Options for exporting the textmode content to image format. |

## GIF export

Capture deterministic frames and encode an animated GIF.

| Type Alias | Description |
| ------ | ------ |
| [GIFExportOptions](type-aliases/GIFExportOptions.md) | Options for capturing deterministic textmode frames as an animated GIF. |
| [GIFExportProgress](type-aliases/GIFExportProgress.md) | Progress information emitted while deterministic frames are captured and encoded as an animated GIF. |

## Video export

Capture deterministic frames and encode MP4 or WebM video with Mediabunny.

| Type Alias | Description |
| ------ | ------ |
| [VideoBitrateMode](type-aliases/VideoBitrateMode.md) | Bitrate allocation strategy for the native encoder. |
| [VideoExportFormat](type-aliases/VideoExportFormat.md) | Video container format produced by `saveVideo()` and `toVideoBlob()`. |
| [VideoExportOptions](type-aliases/VideoExportOptions.md) | Options for capturing deterministic textmode frames as MP4 or WebM video. |
| [VideoExportPhase](type-aliases/VideoExportPhase.md) | Detailed phase information for progress UIs that distinguish capability probing, frame capture, and output. |
| [VideoExportProgress](type-aliases/VideoExportProgress.md) | Progress information emitted while a deterministic video is probed, captured, and written. |
| [VideoHardwareAcceleration](type-aliases/VideoHardwareAcceleration.md) | WebCodecs hardware acceleration preference. |
| [VideoQuality](type-aliases/VideoQuality.md) | Video compression policy passed to Mediabunny. |
| [VideoQualityLevel](type-aliases/VideoQualityLevel.md) | Qualitative video quality level matching Mediabunny's five native levels. |
| [VideoRecordingState](type-aliases/VideoRecordingState.md) | High-level lifecycle state reported while a video export is captured, encoded, or completed. |
| [VideoSaveDestination](type-aliases/VideoSaveDestination.md) | Destination policy used by `saveVideo()`. |

## Layer data export

Export selected-layer text or vector data as TXT or SVG.

| Name | Description |
| ------ | ------ |
| [LayerExportOptions](interfaces/LayerExportOptions.md) | Shared option for exporters that read layer framebuffer data. |
| [SVGExportOptions](type-aliases/SVGExportOptions.md) | Options for exporting the textmode content to SVG format. |
| [TXTExportOptions](type-aliases/TXTExportOptions.md) | Options for exporting the textmode content to TXT format. |

## JSON document data

Export selected-layer or full-stack document data as JSON.

| Type Alias | Description |
| ------ | ------ |
| [JSONExportColorMode](type-aliases/JSONExportColorMode.md) | Supported JSON color output modes. |
| [JSONExportOptions](type-aliases/JSONExportOptions.md) | Options for exporting the textmode content to JSON format. |
| [JSONExportTarget](type-aliases/JSONExportTarget.md) | Target scope for JSON export. |
| [TextmodeDocumentJSON](type-aliases/TextmodeDocumentJSON.md) | JSON document exported by the JSON exporter. |

## Overlay

Configure and control the built-in export overlay.

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
