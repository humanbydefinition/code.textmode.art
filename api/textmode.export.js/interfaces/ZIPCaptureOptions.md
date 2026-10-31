---
layout: doc
editLink: false
title: ZIPCaptureOptions
description: Options shared by all ZIP frame formats.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-10-31
isInterface: true
---

[textmode.export.js](../index.md) / ZIPCaptureOptions

# Interface: ZIPCaptureOptions

Options shared by all ZIP frame formats.

Set these alongside the required `format` in [ZIPExportOptions](../type-aliases/ZIPExportOptions.md).
For example, `frameCount: 120` and `frameRate: 30` capture four seconds.


## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-filename"></a> `filename?` | `string` | Target archive filename, with or without `.zip`. |
| <a id="property-framecount"></a> `frameCount?` | `number` | Number of frames to capture, from 1 through 65,534. Defaults to `300`. |
| <a id="property-framerate"></a> `frameRate?` | `number` | Number of frames to capture per second. Must be greater than zero and finite. Defaults to `60`. |
| <a id="property-onprogress"></a> `onProgress?` | (`progress`) => `void` | Receives capture and archive lifecycle updates. |
| <a id="property-prepareframe"></a> `prepareFrame?` | `PrepareExportFrame` | Updates external state before each frame is drawn. The callback receives `frameIndex` (starting at zero), `frameCount`, `frameRate`, `startSeconds`, `centerSeconds`, `endSeconds`, and an optional abort `signal`. Use `centerSeconds` to sample external media. Capture waits for a returned promise before drawing. |
| <a id="property-signal"></a> `signal?` | `AbortSignal` | Cancels capture, serialization, or archive finalization. |
