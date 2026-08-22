---
layout: doc
editLink: false
title: textmode.overlay.js
description: DOM overlay target plugin for textmode.js
category: API Reference
api: true
kind: Project
ecosystem: textmode.js
lastModified: 2026-08-22
---

# textmode.overlay.js

DOM overlay target capture and geometry synchronization for textmode.js.

## Sketch workflow

1. Add [OverlayPlugin](variables/OverlayPlugin.md) to the sketch's plugins.
2. Bind a live canvas or video with `t.overlay.setTarget()`.
3. Shape the returned texture with the standard character, color, conversion,
   and transform settings.
4. Show, hide, or toggle the output canvas while drawing continues.

## Overlay controller

The per-instance controller that samples a target and keeps the output aligned.

| Interface | Description |
| ------ | ------ |
| [TextmodeOverlayController](interfaces/TextmodeOverlayController.md) | Controls the sampled target and DOM alignment for one textmode.js instance. |

## Target types

The live browser media elements the overlay can sample.

| Type Alias | Description |
| ------ | ------ |
| [TextmodeOverlayTarget](type-aliases/TextmodeOverlayTarget.md) | A live browser media element that can be sampled by the overlay controller. |

## Workflow

The plugin that installs the overlay controller on textmode.js layers.

| Variable | Description |
| ------ | ------ |
| [OverlayPlugin](variables/OverlayPlugin.md) | Installs an isolated overlay controller on each textmode.js instance. |
