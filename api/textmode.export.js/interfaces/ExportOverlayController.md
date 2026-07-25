---
layout: doc
editLink: true
title: ExportOverlayController
description: Controller for managing the export overlay UI visibility at runtime.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-07-25
isInterface: true
---

[textmode.export.js](../index.md) / ExportOverlayController

# Interface: ExportOverlayController

Controller for managing the export overlay UI visibility at runtime.


## Methods

| Method | Description |
| ------ | ------ |
| [show](ExportOverlayController/methods/show.md) | Shows the export overlay UI. |
| [hide](ExportOverlayController/methods/hide.md) | Hides the export overlay UI. |
| [toggle](ExportOverlayController/methods/toggle.md) | Toggles the export overlay UI visibility. |
| [isVisible](ExportOverlayController/methods/isVisible.md) | Checks if the export overlay is currently visible. |
| [resetPosition](ExportOverlayController/methods/resetPosition.md) | Restores the export overlay to its default canvas-relative placement and clears any remembered placement. |
| [getPosition](ExportOverlayController/methods/getPosition.md) | Reads the current export overlay placement. |
| [setPosition](ExportOverlayController/methods/setPosition.md) | Moves the export overlay to a custom canvas-relative placement and remembers that placement for future sessions on the same origin. |
| [setDefaults](ExportOverlayController/methods/setDefaults.md) | Override the curated overlay defaults at runtime. |
| [getDefaults](ExportOverlayController/methods/getDefaults.md) | Read the current effective defaults for every format. |
| [resetDefaults](ExportOverlayController/methods/resetDefaults.md) | Restore one or all formats to the library's curated defaults. |
