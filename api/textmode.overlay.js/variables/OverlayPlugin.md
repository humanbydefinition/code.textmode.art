---
layout: doc
editLink: false
title: OverlayPlugin
description: Installs an isolated overlay controller on each textmode.js instance.
category: Variables
api: true
kind: Variable
ecosystem: textmode.js
lastModified: 2026-08-24
---

[textmode.overlay.js](../index.md) / OverlayPlugin

# Variable: OverlayPlugin

```ts
const OverlayPlugin: TextmodePlugin;
```

Installs an isolated overlay controller on each textmode.js instance.

## Example

```ts
const t = textmode.create({ plugins: [OverlayPlugin] });
t.overlay.setTarget(document.querySelector('canvas'));
```

