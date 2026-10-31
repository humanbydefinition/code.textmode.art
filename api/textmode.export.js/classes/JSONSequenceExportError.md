---
layout: doc
editLink: false
title: JSONSequenceExportError
description: Error raised by JSON sequence capture.
category: Classes
api: true
kind: Class
ecosystem: textmode.js
lastModified: 2026-10-31
hasConstructor: true
---

[textmode.export.js](../index.md) / JSONSequenceExportError

# Class: JSONSequenceExportError

Error raised by JSON sequence capture.


## Extends

- `Error`

## Constructors

### Constructor

```ts
new JSONSequenceExportError(
   code, 
   message, 
   cause?
): JSONSequenceExportError;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `code` | [`JSONSequenceExportErrorCode`](../type-aliases/JSONSequenceExportErrorCode.md) |
| `message` | `string` |
| `cause?` | `unknown` |

#### Returns

`JSONSequenceExportError`

#### Overrides

`Error.constructor`

## Properties

### cause?

```ts
readonly cause?: unknown;
```

#### Overrides

`Error.cause`

***

### code

```ts
readonly code: JSONSequenceExportErrorCode;
```
