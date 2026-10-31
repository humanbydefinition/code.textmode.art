---
layout: doc
editLink: false
title: JSONSequenceExportProgress
description: Progress emitted by JSON frame-sequence capture.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-10-31
isInterface: true
---

[textmode.export.js](../index.md) / JSONSequenceExportProgress

# Interface: JSONSequenceExportProgress

Progress emitted by JSON frame-sequence capture.


## Properties

| Property | Type |
| ------ | ------ |
| <a id="property-frameindex"></a> `frameIndex` | `number` |
| <a id="property-message"></a> `message?` | `string` |
| <a id="property-progress"></a> `progress` | `number` |
| <a id="property-state"></a> `state` | `"error"` \| `"completed"` \| `"capturing"` \| `"finalizing"` |
| <a id="property-totalframes"></a> `totalFrames` | `number` |
