---
layout: doc
editLink: true
title: textmode.export.js
description: Export plugin for textmode.js - save artworks as images, videos, SVG, JSON, and text.
category: API Reference
api: true
kind: Project
ecosystem: textmode.js
lastModified: 2026-06-09
---

# textmode.export.js

Export plugin for textmode.js - save artworks as images, videos, SVG, JSON, and text.

This plugin adds comprehensive export capabilities to textmode.js instances,
allowing you to save your generative artworks in multiple formats with a
convenient overlay UI for quick access to all export options.

## Available export formats

### Image formats
- [PNG/JPEG/WebP](type-aliases/ImageExportOptions.md) - Save canvas as raster image

### Vector formats
- [SVG](type-aliases/SVGExportOptions.md) - Save as scalable vector graphics

### Text formats
- [TXT](type-aliases/TXTExportOptions.md) - Save text content as plain text
- [JSON](type-aliases/JSONExportOptions.md) - Save document data as structured JSON

### Animation formats
- [GIF](type-aliases/GIFExportOptions.md) - Save as animated GIF
- [Video](type-aliases/VideoExportOptions.md) - Save as WebM or MP4 video

## Interfaces

| Interface | Description |
| ------ | ------ |
| [LayerExportOptions](interfaces/LayerExportOptions.md) | Shared option for exporters that read layer framebuffer data. |
| [JSONRGBAColor](interfaces/JSONRGBAColor.md) | RGBA color representation used in JSON exports. |
| [JSONCellTransform](interfaces/JSONCellTransform.md) | Cell transform data for JSON exports. |
| [JSONObjectRowCell](interfaces/JSONObjectRowCell.md) | Rich per-cell representation for readable JSON exports. |
| [JSONObjectRowsCellCollection](interfaces/JSONObjectRowsCellCollection.md) | Row-based cell encoding. |
| [JSONLayerGrid](interfaces/JSONLayerGrid.md) | Grid dimensions exported for a layer. |
| [JSONExportMetadata](interfaces/JSONExportMetadata.md) | Optional export metadata. |
| [TextmodeSelectedDocumentLayer](interfaces/TextmodeSelectedDocumentLayer.md) | Selected-layer entry in a JSON document export. |
| [TextmodeSelectedDocumentJSON](interfaces/TextmodeSelectedDocumentJSON.md) | Selected-layer document exported by the JSON exporter. |
| [TextmodeDocumentLayer](interfaces/TextmodeDocumentLayer.md) | Single layer entry in an all-layers JSON export. |
| [TextmodeAllDocumentJSON](interfaces/TextmodeAllDocumentJSON.md) | Layer stack document exported by the JSON exporter. |
| [ExportOverlayController](interfaces/ExportOverlayController.md) | Controller for managing the export overlay UI visibility at runtime. |
| [TextmodeExportAPI](interfaces/TextmodeExportAPI.md) | Runtime export helpers that `createExportPlugin` attaches to the `Textmodifier` instance. |
| [~~TextmodeExportPluginOptions~~](interfaces/TextmodeExportPluginOptions.md) | Options for configuring the export plugin. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [GIFExportProgress](type-aliases/GIFExportProgress.md) | Progress information emitted during the GIF export process. |
| [GIFExportOptions](type-aliases/GIFExportOptions.md) | Options for exporting the textmode content to GIF format. |
| [ImageExportOptions](type-aliases/ImageExportOptions.md) | Options for exporting the textmode content to image format. |
| [JSONExportTarget](type-aliases/JSONExportTarget.md) | Target scope for JSON export. |
| [JSONDocumentFormat](type-aliases/JSONDocumentFormat.md) | Canonical JSON document format identifier. |
| [JSONDocumentVersion](type-aliases/JSONDocumentVersion.md) | Canonical JSON document format version. |
| [JSONExportColorMode](type-aliases/JSONExportColorMode.md) | Supported JSON color output modes. |
| [JSONColorValue](type-aliases/JSONColorValue.md) | Color value used in the exported JSON document. |
| [JSONCellCollection](type-aliases/JSONCellCollection.md) | Supported JSON cell collection variants. |
| [TextmodeDocumentJSON](type-aliases/TextmodeDocumentJSON.md) | JSON document exported by the JSON exporter. |
| [JSONExportOptions](type-aliases/JSONExportOptions.md) | Options for exporting the textmode content to JSON format. |
| [SVGExportOptions](type-aliases/SVGExportOptions.md) | Options for exporting the textmode content to SVG format. |
| [TXTExportOptions](type-aliases/TXTExportOptions.md) | Options for exporting the textmode content to TXT format. |
| [VideoRecordingState](type-aliases/VideoRecordingState.md) | Lifecycle state reported while a video export is being prepared, recorded, encoded, or completed. |
| [VideoExportPhase](type-aliases/VideoExportPhase.md) | More granular phase information for progress UIs that need to distinguish setup, rendering, and finalization. |
| [VideoBitratePreset](type-aliases/VideoBitratePreset.md) | Subjective bitrate preset used when an exact bits-per-second value is not supplied. |
| [VideoExportFormat](type-aliases/VideoExportFormat.md) | Video container format written by `saveVideo`. |
| [VideoBitrateMode](type-aliases/VideoBitrateMode.md) | Bitrate allocation strategy for the native encoder. |
| [VideoLatencyMode](type-aliases/VideoLatencyMode.md) | Encoder scheduling mode. |
| [VideoHardwareAcceleration](type-aliases/VideoHardwareAcceleration.md) | WebCodecs hardware acceleration preference. |
| [VideoExportErrorCode](type-aliases/VideoExportErrorCode.md) | - |
| [VideoExportProgress](type-aliases/VideoExportProgress.md) | Progress information emitted during the video export process. |
| [VideoExportOptions](type-aliases/VideoExportOptions.md) | Options for exporting the textmode content to video format. |

## Variables

| Variable | Description |
| ------ | ------ |
| [ExportPlugin](variables/ExportPlugin.md) | Export plugin for textmode.js. |

## Functions

| Function | Description |
| ------ | ------ |
| [~~createTextmodeExportPlugin~~](functions/createTextmodeExportPlugin.md) | Creates the `textmode.export.js` plugin for textmode.js. |
