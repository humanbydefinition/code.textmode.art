---
layout: doc
editLink: true
deprecated: |-
  This interface is only used by the deprecated 
   function.
  Use 
   directly instead, and control overlay visibility at runtime via

  .
title: TextmodeExportPluginOptions
description: Options for configuring the export plugin.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-04-23
isInterface: true
---

[textmode.export.js](../index.md) / TextmodeExportPluginOptions

# Interface: TextmodeExportPluginOptions

Options for configuring the export plugin.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="overlay"></a> ~~`overlay?`~~ | `boolean` | Controls whether the export overlay UI should be created. Defaults to `true`. **Deprecated** Use runtime overlay controls instead: `textmodifier.exportOverlay.show()` / `.hide()` |
