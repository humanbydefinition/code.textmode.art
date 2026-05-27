---
layout: doc
editLink: true
title: TextmodeError
description: Error type that formats optional context data alongside the main message.
category: Classes
api: true
namespace: errors
kind: Class
lastModified: 2026-05-27
hasConstructor: true
---

[textmode.js](../../../index.md) / [errors](../index.md) / TextmodeError

# Class: TextmodeError

Error type that formats optional context data alongside the main message.

## Extends

- `Error`

## Constructors

### Constructor

```ts
new TextmodeError(
   message, 
   context?, 
   options?): TextmodeError;
```

Create a textmode.js error.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `string` | The main error message |
| `context?` | `Record`\<`string`, `unknown`\> | Optional context data to include in the error message |
| `options?` | `TextmodeErrorFormatOptions` | Optional message formatting options |

#### Returns

`TextmodeError`

#### Overrides

```ts
Error.constructor
```
