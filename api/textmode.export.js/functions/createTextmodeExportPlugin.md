---
title: createTextmodeExportPlugin
description: createTextmodeExportPlugin function API reference for textmode.export.js.
category: Functions
api: true
kind: Function
ecosystem: textmode.js
lastModified: 2026-02-06
---

[textmode.export.js](../index.md) / createTextmodeExportPlugin

# ~~Function: createTextmodeExportPlugin()~~

```ts
function createTextmodeExportPlugin(options): TextmodePlugin;
```

Creates the `textmode.export.js` plugin for textmode.js.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`TextmodeExportPluginOptions`](../interfaces/TextmodeExportPluginOptions.md) | Plugin options |

## Returns

`TextmodePlugin`

A textmode.js plugin instance.

## Deprecated

Use [ExportPlugin](../variables/ExportPlugin.md) directly instead.
This function is provided for backwards compatibility only.

## Example

```javascript
// Old way (deprecated)
import { createTextmodeExportPlugin } from 'textmode.export.js';
const t = textmode.create({ plugins: [createTextmodeExportPlugin()] });

// New way (recommended)
import { ExportPlugin } from 'textmode.export.js';
const t = textmode.create({ plugins: [ExportPlugin] });
```
