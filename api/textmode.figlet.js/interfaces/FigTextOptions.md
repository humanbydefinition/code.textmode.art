---
layout: doc
editLink: true
title: FigTextOptions
description: Layout options for rendering FIGlet text.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-04-18
isInterface: true
---

[textmode.figlet.js](../index.md) / FigTextOptions

# Interface: FigTextOptions

Layout options for rendering FIGlet text.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-horizontallayout"></a> `horizontalLayout?` | [`FigHorizontalLayout`](../type-aliases/FigHorizontalLayout.md) | Override the font's default horizontal layout. |
| <a id="property-verticallayout"></a> `verticalLayout?` | [`FigVerticalLayout`](../type-aliases/FigVerticalLayout.md) | Override the vertical composition mode for multi-line FIGlet layout. |
| <a id="property-direction"></a> `direction?` | [`FigPrintDirection`](../type-aliases/FigPrintDirection.md) | Override the effective print direction for layout. |
| <a id="property-wrap"></a> `wrap?` | [`FigWrapMode`](../type-aliases/FigWrapMode.md) | Optional wrap strategy for multi-line layout. |
| <a id="property-maxcols"></a> `maxCols?` | `number` | Maximum rendered columns per logical line before wrapping occurs. |
| <a id="property-charcolor"></a> `charColor?` | [`FigTextColorResolver`](../type-aliases/FigTextColorResolver.md) | Override or resolve the foreground color for each rendered FIGlet cell. |
| <a id="property-cellcolor"></a> `cellColor?` | [`FigTextColorResolver`](../type-aliases/FigTextColorResolver.md) | Override or resolve the background color for each rendered FIGlet cell. |
