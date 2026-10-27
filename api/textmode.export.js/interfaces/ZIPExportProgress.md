---
layout: doc
editLink: false
title: ZIPExportProgress
description: Progress information emitted while ZIP frames are captured and archived.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-10-27
isInterface: true
---

[textmode.export.js](../index.md) / ZIPExportProgress

# Interface: ZIPExportProgress

Progress information emitted while ZIP frames are captured and archived.


## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-frameindex"></a> `frameIndex` | `number` | Number of completed frame entries. |
| <a id="property-message"></a> `message?` | `string` | Optional failure message for an `error` event. |
| <a id="property-progress"></a> `progress` | `number` | Normalized completed-frame ratio from `0` through `1`. |
| <a id="property-state"></a> `state` | [`ZIPExportState`](../type-aliases/ZIPExportState.md) | Current ZIP export state. |
| <a id="property-totalframes"></a> `totalFrames` | `number` | Total number of frame entries planned for the archive. |
