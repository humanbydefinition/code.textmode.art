---
layout: doc
editLink: true
title: CharacterColorMapper
description: Handles color generation and mapping for characters. This class manages the unique RGB color assignment for character identification.
category: Classes
api: true
namespace: fonts
kind: Class
lastModified: 2026-04-19
hasConstructor: true
---

[textmode.js](../../../index.md) / [fonts](../index.md) / CharacterColorMapper

# Class: CharacterColorMapper

Handles color generation and mapping for characters.
This class manages the unique RGB color assignment for character identification.

## Constructors

### Constructor

```ts
new CharacterColorMapper(): CharacterColorMapper;
```

#### Returns

`CharacterColorMapper`

## Methods

### \_createCharacterObjects()

```ts
_createCharacterObjects(characters, font): object;
```

Creates TextmodeCharacter objects with unique color assignments.
Returns both an array (for public API and iteration) and a Map (for O(1) lookups).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `characters` | `string`[] | Array of character strings |
| `font` | [`TyprFont`](../interfaces/TyprFont.md) | The parsed font object from Typr |

#### Returns

`object`

Object containing both array and map of TextmodeCharacter objects

| Name | Type |
| ------ | ------ |
| `array` | [`TextmodeGlyph`](../type-aliases/TextmodeGlyph.md)[] |
| `map` | `Map`\<`string`, [`TextmodeGlyph`](../type-aliases/TextmodeGlyph.md)\> |
