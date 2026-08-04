---
layout: doc
editLink: false
title: textmode.figlet.js
description: FIGlet font support for textmode.js
category: API Reference
api: true
kind: Project
ecosystem: textmode.js
lastModified: 2026-08-03
---

# textmode.figlet.js

Add FIGlet display typography to a textmode.js sketch.

Install [FigletPlugin](variables/FigletPlugin.md) to add FIGfont loading, selection, drawing, and
measurement helpers to the sketch's `Textmodifier`. Use
[TextmodeFigFont](classes/TextmodeFigFont.md) when you need to inspect a parsed font, plan its
layout, or render it without drawing to the canvas.

## Sketch workflow

1. Add [FigletPlugin](variables/FigletPlugin.md) to the sketch's plugins.
2. Load a `.flf` file with [TextmodifierFigletExtensions.loadFigFont](interfaces/TextmodifierFigletExtensions/methods/loadFigFont.md)
   or parse raw font data with [TextmodifierFigletExtensions.parseFigFont](interfaces/TextmodifierFigletExtensions/methods/parseFigFont.md).
3. Select the returned font with [TextmodifierFigletExtensions.figFont](interfaces/TextmodifierFigletExtensions/methods/figFont.md).
4. Draw with [TextmodifierFigletExtensions.figText](interfaces/TextmodifierFigletExtensions/methods/figText.md), or measure first
   with its width, height, and bounds helpers.

[FigTextOptions](interfaces/FigTextOptions.md) controls layout, wrapping, direction, and per-cell
colors. Use [TextmodeFigFont](classes/TextmodeFigFont.md) for reusable FIGfont resources and
lower-level planning.

## FIGfont resources

Parsed FIGfont resources and metadata for inspecting characters and
font-defined defaults.

| Name | Description |
| ------ | ------ |
| [TextmodeFigFont](classes/TextmodeFigFont.md) | Parsed FIGfont resource used by `figText()` rendering. |
| [FigCharacter](interfaces/FigCharacter.md) | A single parsed FIGcharacter from a FIGfont. |
| [FigFontHeader](interfaces/FigFontHeader.md) | Parsed FIGfont header metadata from the `.flf` header line. |

## Layout and rendering

Options and value types that control FIGlet composition, wrapping,
direction, and placement.

| Name | Description |
| ------ | ------ |
| [FigTextOptions](interfaces/FigTextOptions.md) | Layout options for rendering FIGlet text. |
| [FigHorizontalLayout](type-aliases/FigHorizontalLayout.md) | Supported horizontal layout modes for FIGlet rendering. |
| [FigPrintDirection](type-aliases/FigPrintDirection.md) | Supported print directions for FIGlet text layout. |
| [FigTextAlign](type-aliases/FigTextAlign.md) | Horizontal alignment options for `figText()` placement. |
| [FigTextBaseline](type-aliases/FigTextBaseline.md) | Vertical alignment options for `figText()` placement. |
| [FigVerticalLayout](type-aliases/FigVerticalLayout.md) | Supported vertical layout modes for multi-line FIGlet rendering. |
| [FigWrapMode](type-aliases/FigWrapMode.md) | Supported wrap modes for FIGlet text layout. |

## Styling

Per-cell color values and callback context for styling rendered FIGlet text.

| Name | Description |
| ------ | ------ |
| [FigTextCellContext](interfaces/FigTextCellContext.md) | Public cell metadata exposed to FIGlet styling callbacks. |
| [FigTextColorResolver](type-aliases/FigTextColorResolver.md) | Resolver for per-cell FIGlet colors. |
| [FigTextColorValue](type-aliases/FigTextColorValue.md) | Accepted color input for per-cell FIGlet styling. |

## Textmodifier extensions

Methods that [FigletPlugin](variables/FigletPlugin.md) adds to a textmode.js sketch.

| Interface | Description |
| ------ | ------ |
| [TextmodifierFigletExtensions](interfaces/TextmodifierFigletExtensions.md) | FIGlet methods added to the `textmode.js` `Textmodifier` API when [FigletPlugin](variables/FigletPlugin.md) is installed. |

## Workflow

The plugin entrypoint that enables the FIGlet sketch workflow.

| Variable | Description |
| ------ | ------ |
| [FigletPlugin](variables/FigletPlugin.md) | Plugin entrypoint for the FIGlet add-on. |
