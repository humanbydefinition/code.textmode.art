---
layout: doc
editLink: true
title: textmode.figlet.js
description: FIGlet font support for textmode.js
category: API Reference
api: true
kind: Project
ecosystem: textmode.js
lastModified: 2026-04-23
---

# textmode.figlet.js

## Classes

| Class | Description |
| ------ | ------ |
| [TextmodeFigFont](classes/TextmodeFigFont.md) | Parsed FIGfont resource used by `figText()` rendering. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [TextmodifierFigletExtensions](interfaces/TextmodifierFigletExtensions.md) | FIGlet methods added to the `textmode.js` `Textmodifier` API when [FigletPlugin](variables/FigletPlugin.md) is installed. |
| [FigFontHeader](interfaces/FigFontHeader.md) | Parsed FIGfont header metadata from the `.flf` header line. |
| [FigCharacter](interfaces/FigCharacter.md) | A single parsed FIGcharacter from a FIGfont. |
| [FigTextCellContext](interfaces/FigTextCellContext.md) | Public cell metadata exposed to FIGlet styling callbacks. |
| [FigTextOptions](interfaces/FigTextOptions.md) | Layout options for rendering FIGlet text. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [FigHorizontalLayout](type-aliases/FigHorizontalLayout.md) | Supported horizontal layout modes for FIGlet rendering. |
| [FigVerticalLayout](type-aliases/FigVerticalLayout.md) | Supported vertical layout modes for multi-line FIGlet rendering. |
| [FigWrapMode](type-aliases/FigWrapMode.md) | Supported wrap modes for FIGlet text layout. |
| [FigPrintDirection](type-aliases/FigPrintDirection.md) | Supported print directions for FIGlet text layout. |
| [FigTextColorValue](type-aliases/FigTextColorValue.md) | Accepted color input for per-cell FIGlet styling. |
| [FigTextColorResolver](type-aliases/FigTextColorResolver.md) | Resolver for per-cell FIGlet colors. |
| [FigTextAlign](type-aliases/FigTextAlign.md) | Horizontal alignment options for `figText()` placement. |
| [FigTextBaseline](type-aliases/FigTextBaseline.md) | Vertical alignment options for `figText()` placement. |

## Variables

| Variable | Description |
| ------ | ------ |
| [FigletPlugin](variables/FigletPlugin.md) | Plugin entrypoint for the FIGlet add-on. |
