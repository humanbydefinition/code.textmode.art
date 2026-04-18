---
layout: doc
editLink: true
title: FigCharacter
description: A single parsed FIGcharacter from a FIGfont.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-04-18
isInterface: true
---

[textmode.figlet.js](../index.md) / FigCharacter

# Interface: FigCharacter

A single parsed FIGcharacter from a FIGfont.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-code"></a> `code` | `number` | Unicode code point represented by the FIGcharacter. |
| <a id="property-lines"></a> `lines` | `string`[] | Raw FIGcharacter rows with endmarks removed. |
| <a id="property-width"></a> `width` | `number` | Maximum row width after endmark removal. |
