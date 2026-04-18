---
layout: doc
editLink: true
title: FigFontHeader
description: Parsed FIGfont header metadata from the .flf header line.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-04-18
isInterface: true
---

[textmode.figlet.js](../index.md) / FigFontHeader

# Interface: FigFontHeader

Parsed FIGfont header metadata from the `.flf` header line.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-signature"></a> `signature` | `string` | Always `flf2a` for supported FIGfont v2 files. |
| <a id="property-hardblank"></a> `hardblank` | `string` | Hardblank character used by the font. |
| <a id="property-height"></a> `height` | `number` | Number of rows in every FIGcharacter. |
| <a id="property-baseline"></a> `baseline` | `number` | Baseline row reported by the font. |
| <a id="property-maxlength"></a> `maxLength` | `number` | Maximum line length declared by the font. |
| <a id="property-oldlayout"></a> `oldLayout` | `number` | Legacy horizontal layout bitfield. |
| <a id="property-commentlines"></a> `commentLines` | `number` | Number of comment lines immediately following the header. |
| <a id="property-printdirection"></a> `printDirection` | `number` | Font print direction: `0` left-to-right, `1` right-to-left. |
| <a id="property-fulllayout"></a> `fullLayout` | `number` | Full FIGfont layout flags when present. |
| <a id="property-codetagcount"></a> `codetagCount` | `number` | Number of code-tagged characters declared by the font. |
