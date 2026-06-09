---
layout: doc
editLink: true
title: TextmodeFigFont
description: Parsed FIGfont resource used by figText() rendering.
category: Classes
api: true
kind: Class
ecosystem: textmode.js
lastModified: 2026-06-09
hasConstructor: false
---

[textmode.figlet.js](../index.md) / TextmodeFigFont

# Class: TextmodeFigFont

Parsed FIGfont resource used by `figText()` rendering.

## Extends

- `Disposable`

## Accessors

| Accessor | Description |
| ------ | ------ |
| [name](TextmodeFigFont/accessors/name.md) | The display name associated with this FIGfont. |
| [header](TextmodeFigFont/accessors/header.md) | The parsed FIGfont header metadata. |
| [characters](TextmodeFigFont/accessors/characters.md) | Parsed FIGcharacters keyed by Unicode code point. |
| [hardblank](TextmodeFigFont/accessors/hardblank.md) | Hardblank character declared by the font. |
| [height](TextmodeFigFont/accessors/height.md) | Number of rows in each FIGcharacter. |
| [baseline](TextmodeFigFont/accessors/baseline.md) | Baseline row declared by the font. |
| [defaultLayout](TextmodeFigFont/accessors/defaultLayout.md) | Default horizontal layout implied by the header metadata. |
| [defaultPrintDirection](TextmodeFigFont/accessors/defaultPrintDirection.md) | Default print direction implied by the FIGfont header metadata. |
| [defaultVerticalLayout](TextmodeFigFont/accessors/defaultVerticalLayout.md) | Default vertical layout implied by the FIGfont header metadata. |

## Methods

| Method | Description |
| ------ | ------ |
| [getCharacter](TextmodeFigFont/methods/getCharacter.md) | Look up a FIGcharacter by Unicode code point or by the first character in a string. |
| [planText](TextmodeFigFont/methods/planText.md) | Plan a string into positioned FIGlet cells and logical lines. |
| [renderText](TextmodeFigFont/methods/renderText.md) | Render a string into a FIGlet sub-character grid. |
| [measureText](TextmodeFigFont/methods/measureText.md) | Measure rendered FIGlet text without drawing it. |
| [\_addOnDispose](TextmodeFigFont/methods/addOnDispose.md) | Register a callback to run when the resource is disposed. |
| [dispose](TextmodeFigFont/methods/dispose.md) | Dispose the resource and invoke all registered callbacks. |
