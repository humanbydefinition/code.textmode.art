---
title: textmode.export.js
description: Export plugin for textmode.js - save artworks as images, videos, SVG, and text.
category: API Reference
api: true
kind: Project
ecosystem: textmode.js
lastModified: 2026-02-06
---

# textmode.export.js

Export plugin for textmode.js - save artworks as images, videos, SVG, and text.

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

### Animation formats
- [GIF](type-aliases/GIFExportOptions.md) - Save as animated GIF
- [WEBM](type-aliases/VideoExportOptions.md) - Save as video file

## Interfaces

| Interface | Description |
| ------ | ------ |
| [ExportOverlayController](interfaces/ExportOverlayController.md) | Controller for managing the export overlay UI visibility at runtime. |
| [TextmodeExportAPI](interfaces/TextmodeExportAPI.md) | Runtime export helpers that `createExportPlugin` attaches to the `Textmodifier` instance. |
| [~~TextmodeExportPluginOptions~~](interfaces/TextmodeExportPluginOptions.md) | Options for configuring the export plugin. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [GIFExportProgress](type-aliases/GIFExportProgress.md) | Progress information emitted during the GIF export process. |
| [GIFExportOptions](type-aliases/GIFExportOptions.md) | Options for exporting the textmode content to GIF format. |
| [ImageExportOptions](type-aliases/ImageExportOptions.md) | Options for exporting the textmode content to image format. |
| [SVGExportOptions](type-aliases/SVGExportOptions.md) | Options for exporting the textmode content to SVG format. |
| [TXTExportOptions](type-aliases/TXTExportOptions.md) | Options for exporting the textmode content to TXT format. |
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
