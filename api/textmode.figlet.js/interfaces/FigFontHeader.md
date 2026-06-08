---
layout: doc
editLink: true
title: FigFontHeader
description: Parsed FIGfont header metadata from the .flf header line.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-06-08
isInterface: true
---

[textmode.figlet.js](../index.md) / FigFontHeader

# Interface: FigFontHeader

Parsed FIGfont header metadata from the `.flf` header line.

## Properties

| Property | Description |
| ------ | ------ |
| [signature](FigFontHeader/properties/signature.md) | Always `flf2a` for supported FIGfont v2 files. |
| [hardblank](FigFontHeader/properties/hardblank.md) | Hardblank character used by the font. |
| [height](FigFontHeader/properties/height.md) | Number of rows in every FIGcharacter. |
| [baseline](FigFontHeader/properties/baseline.md) | Baseline row reported by the font. |
| [maxLength](FigFontHeader/properties/maxLength.md) | Maximum line length declared by the font. |
| [oldLayout](FigFontHeader/properties/oldLayout.md) | Legacy horizontal layout bitfield. |
| [commentLines](FigFontHeader/properties/commentLines.md) | Number of comment lines immediately following the header. |
| [printDirection](FigFontHeader/properties/printDirection.md) | Font print direction: `0` left-to-right, `1` right-to-left. |
| [fullLayout](FigFontHeader/properties/fullLayout.md) | Full FIGfont layout flags when present. |
| [codetagCount](FigFontHeader/properties/codetagCount.md) | Number of code-tagged characters declared by the font. |
