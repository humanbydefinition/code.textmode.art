---
layout: doc
editLink: false
title: ZIPCaptureOptions
description: Options shared by all ZIP frame formats.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-10-27
isInterface: true
---

[textmode.export.js](../index.md) / ZIPCaptureOptions

# Interface: ZIPCaptureOptions

Options shared by all ZIP frame formats.


## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-filename"></a> `filename?` | `string` | Target archive filename, with or without `.zip`. |
| <a id="property-framecount"></a> `frameCount?` | `number` | Number of frames to capture. Defaults to `300`. |
| <a id="property-framerate"></a> `frameRate?` | `number` | Deterministic sampling rate. Defaults to `60`. |
| <a id="property-onprogress"></a> `onProgress?` | (`progress`) => `void` | Receives capture and archive lifecycle updates. |
| <a id="property-prepareframe"></a> `prepareFrame?` | `PrepareExportFrame` | Prepares external state before each deterministic redraw. |
| <a id="property-signal"></a> `signal?` | `AbortSignal` | Cancels capture, serialization, or archive finalization. |
