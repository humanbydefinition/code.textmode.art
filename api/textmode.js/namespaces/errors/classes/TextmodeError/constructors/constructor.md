---
layout: doc
editLink: true
title: constructor
description: Create a textmode.js error.
category: Constructors
api: true
owner: TextmodeError
namespace: errors
kind: Constructor
lastModified: 2026-06-07
---

[textmode.js](../../../../../index.md) / [errors](../../../index.md) / [TextmodeError](../../TextmodeError.md) / constructor

# Constructor: constructor()

# Constructor

```ts
new TextmodeError(
   message, 
   context?, 
   options?): TextmodeError;
```

Create a textmode.js error.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `string` | The main error message |
| `context?` | `Record`\<`string`, `unknown`\> | Optional context data to include in the error message |
| `options?` | [`TextmodeErrorFormatOptions`](../../../interfaces/TextmodeErrorFormatOptions.md) | Optional message formatting options |

## Returns

[`TextmodeError`](../../TextmodeError.md)

## Overrides

```ts
Error.constructor
```
