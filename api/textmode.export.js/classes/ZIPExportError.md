---
layout: doc
editLink: false
title: ZIPExportError
description: Error raised by ZIP frame-sequence validation, capture, or archive creation.
category: Classes
api: true
kind: Class
ecosystem: textmode.js
lastModified: 2026-10-27
hasConstructor: true
---

[textmode.export.js](../index.md) / ZIPExportError

# Class: ZIPExportError

Error raised by ZIP frame-sequence validation, capture, or archive creation.


## Extends

- `Error`

## Constructors

### Constructor

```ts
new ZIPExportError(
   code, 
   message, 
   cause?): ZIPExportError;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `code` | [`ZIPExportErrorCode`](../type-aliases/ZIPExportErrorCode.md) |
| `message` | `string` |
| `cause?` | `unknown` |

#### Returns

`ZIPExportError`

#### Overrides

```ts
Error.constructor
```

## Properties

### cause?

```ts
readonly optional cause?: unknown;
```

#### Overrides

```ts
Error.cause
```

***

### code

```ts
readonly code: ZIPExportErrorCode;
```
