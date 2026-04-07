---
layout: doc
editLink: true
title: TextmodeError
description: Custom error class for textmode.js exceptions.
category: Classes
api: true
namespace: errors
kind: Class
lastModified: 2026-04-07
hasConstructor: true
---

[textmode.js](../../../index.md) / [errors](../index.md) / TextmodeError

# Class: TextmodeError

Custom error class for textmode.js exceptions.

Provides formatted error messages with optional context data to help
debug issues.

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

Creates a new TextmodeError instance.

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
