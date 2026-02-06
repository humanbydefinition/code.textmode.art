---
layout: doc
editLink: true
title: BuiltInFilterParams
description: Filter parameter types for built-in filters.
category: Interfaces
api: true
namespace: filters
kind: Interface
lastModified: 2026-02-01
isInterface: true
---

[textmode.js](../../../index.md) / [filters](../index.md) / BuiltInFilterParams

# Interface: BuiltInFilterParams

Filter parameter types for built-in filters.

Most filters accept either a single number (for the primary parameter)
or an object with named properties.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="grayscale"></a> `grayscale` | \| `number` \| `void` \| \{ `amount?`: `number`; \} | Converts to grayscale. Amount: 0-1, default 1 |
| <a id="invert"></a> `invert` | `void` | Inverts all colors (no params needed) |
| <a id="sepia"></a> `sepia` | \| `number` \| `void` \| \{ `amount?`: `number`; \} | Applies sepia tone. Amount: 0-1, default 1 |
| <a id="threshold"></a> `threshold` | \| `number` \| \{ `threshold?`: `number`; \} | Black/white threshold. Threshold: 0-1, default 0.5 |
