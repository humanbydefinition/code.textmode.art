---
layout: doc
editLink: true
title: TextmodeErrorLevel
description: Controls how validation failures are reported.
category: Enumerations
api: true
namespace: errors
kind: Enum
lastModified: 2026-07-31
---

[textmode.js](../../../index.md) / [errors](../index.md) / TextmodeErrorLevel

# Enumeration: TextmodeErrorLevel

Controls how validation failures are reported.

> [!NOTE]
> This setting currently covers validation paths that use the shared error handler.
> Other runtime failures may still throw.

## Example

```js
// Set to `WARNING` level to log errors without stopping execution
textmode.setErrorLevel(TextmodeErrorLevel.WARNING);
```


## Enumeration Members

### ERROR

```ts
ERROR: 2;
```

Log validation failures as errors.

***

### SILENT

```ts
SILENT: 0;
```

Suppress all error output.
Validation failures are handled silently without any console messages.

***

### THROW

```ts
THROW: 3;
```

Throw exceptions on validation failures *(default behavior)*.

***

### WARNING

```ts
WARNING: 1;
```

Log validation failures as warnings.
