---
title: createFiltersPlugin
description: createFiltersPlugin function API reference for textmode.filters.js.
category: Functions
api: true
kind: Function
ecosystem: textmode.js
lastModified: 2026-02-06
---

[textmode.filters.js](../index.md) / createFiltersPlugin

# ~~Function: createFiltersPlugin()~~

```ts
function createFiltersPlugin(): TextmodePlugin;
```

Creates the `textmode.filters.js` plugin for textmode.js.

## Returns

`TextmodePlugin`

A textmode.js plugin instance.

## Deprecated

Use [FiltersPlugin](../variables/FiltersPlugin.md) directly instead.
This function is provided for backwards compatibility only.

## Example

```javascript
// Old way (deprecated)
import { createFiltersPlugin } from 'textmode.filters.js';
const t = textmode.create({ plugins: [createFiltersPlugin()] });

// New way (recommended)
import { FiltersPlugin } from 'textmode.filters.js';
const t = textmode.create({ plugins: [FiltersPlugin] });
```
