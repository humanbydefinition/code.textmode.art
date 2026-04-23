---
layout: doc
editLink: true
title: FigTextCellContext
description: Public cell metadata exposed to FIGlet styling callbacks.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-04-19
isInterface: true
---

[textmode.figlet.js](../index.md) / FigTextCellContext

# Interface: FigTextCellContext

Public cell metadata exposed to FIGlet styling callbacks.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-char"></a> `char` | `string` | Final drawable sub-character after layout normalization. |
| <a id="property-col"></a> `col` | `number` | Absolute column within the rendered result. |
| <a id="property-row"></a> `row` | `number` | Absolute row within the rendered result. |
| <a id="property-inputindex"></a> `inputIndex` | `number` | Zero-based index into the original input string's character sequence. |
| <a id="property-inputchar"></a> `inputChar` | `string` | Original input character that produced this cell. |
| <a id="property-figcharcode"></a> `figCharCode` | `number` | FIGcharacter code used to produce this cell. |
| <a id="property-subrow"></a> `subRow` | `number` | Row within the source FIGcharacter. |
| <a id="property-subcol"></a> `subCol` | `number` | Column within the source FIGcharacter. |
| <a id="property-lineindex"></a> `lineIndex` | `number` | Logical rendered line index after explicit newline splitting. |
