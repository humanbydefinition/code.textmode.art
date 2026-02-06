---
layout: doc
editLink: true
title: SetupLifecycleHook
description: Callback type for setup lifecycle hooks.
category: Type Aliases
api: true
namespace: plugins
kind: TypeAlias
lastModified: 2026-02-06
---

[textmode.js](../../../index.md) / [plugins](../index.md) / SetupLifecycleHook

# Type Alias: SetupLifecycleHook()

```ts
type SetupLifecycleHook = () => void | Promise<void>;
```

Callback type for setup lifecycle hooks.

Can be synchronous or return a Promise for async operations.

## Returns

`void` \| `Promise`\<`void`\>
