---
layout: doc
editLink: true
title: TextmodeError
description: Custom error class for textmode.js exceptions.
category: Classes
api: true
kind: Class
lastModified: 2026-02-01
hasConstructor: true
---

[textmode.js](../index.md) / TextmodeError

# Class: TextmodeError

Custom error class for textmode.js exceptions.

Provides formatted error messages with optional context data to help
debug issues.

## Extends

- `Error`

## Constructors

### Constructor

```ts
new TextmodeError(message, context?): TextmodeError;
```

Creates a new TextmodeError instance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `string` | The main error message |
| `context?` | `Record`\<`string`, `unknown`\> | Optional context data to include in the error message |

#### Returns

`TextmodeError`

#### Overrides

```ts
Error.constructor
```
