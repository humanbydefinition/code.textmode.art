---
layout: doc
editLink: true
title: TyprStatic
description: Main Typr interface Provides font parsing and table lookup functionality
category: Interfaces
api: true
namespace: fonts
kind: Interface
lastModified: 2026-04-19
isInterface: true
---

[textmode.js](../../../index.md) / [fonts](../index.md) / TyprStatic

# Interface: TyprStatic

Main Typr interface
Provides font parsing and table lookup functionality

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="b"></a> `B` | `TyprBinary` | Binary reading utilities |
| <a id="findtable"></a> `findTable` | (`data`, `tableName`, `offset`) => `null` \| \[`number`, `number`\] | Find a specific table in font data |
| <a id="parse"></a> `parse` | (`buffer`) => [`TyprFont`](TyprFont.md)[] | Parse font buffer and return array of fonts |
| <a id="t"></a> `T` | `TyprTableParsers` | Collection of table parsers |
