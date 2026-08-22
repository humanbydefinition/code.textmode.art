---
layout: doc
editLink: false
title: ExtensionRegistration
description: Handle returned by a successful registration.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-08-22
isInterface: true
---

[textmode.synth.js](../index.md) / ExtensionRegistration

# Interface: ExtensionRegistration

Handle returned by a successful registration.

`dispose()` restores the previous binding (method, source function, and
global property) and is idempotent. Disposing an older shadowed handle does
not remove a newer registration.


## Properties

| Property | Modifier | Type | Description |
| ------ | ------ | ------ | ------ |
| <a id="property-names"></a> `names` | `readonly` | readonly `string`[] | Public names registered by this call. |
| <a id="property-sources"></a> `sources` | `readonly` | `Readonly`\<`Record`\<`string`, [`SourceFunction`](../type-aliases/SourceFunction.md)\>\> | Standalone source functions for `src`-type definitions. |

## Methods

### dispose()

```ts
dispose(): void;
```

Revert this registration, restoring any previous bindings.

#### Returns

`void`

#### Example

```js
const registration = setFunction(definition);
registration.dispose();
```

