---
layout: doc
editLink: true
title: FigTextCellContext
description: Public cell metadata exposed to FIGlet styling callbacks.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-06-08
isInterface: true
---

[textmode.figlet.js](../index.md) / FigTextCellContext

# Interface: FigTextCellContext

Public cell metadata exposed to FIGlet styling callbacks.

## Properties

| Property | Description |
| ------ | ------ |
| [char](FigTextCellContext/properties/char.md) | Final drawable sub-character after layout normalization. |
| [col](FigTextCellContext/properties/col.md) | Absolute column within the rendered result. |
| [row](FigTextCellContext/properties/row.md) | Absolute row within the rendered result. |
| [inputIndex](FigTextCellContext/properties/inputIndex.md) | Zero-based index into the original input string's character sequence. |
| [inputChar](FigTextCellContext/properties/inputChar.md) | Original input character that produced this cell. |
| [figCharCode](FigTextCellContext/properties/figCharCode.md) | FIGcharacter code used to produce this cell. |
| [subRow](FigTextCellContext/properties/subRow.md) | Row within the source FIGcharacter. |
| [subCol](FigTextCellContext/properties/subCol.md) | Column within the source FIGcharacter. |
| [lineIndex](FigTextCellContext/properties/lineIndex.md) | Logical rendered line index after explicit newline splitting. |
