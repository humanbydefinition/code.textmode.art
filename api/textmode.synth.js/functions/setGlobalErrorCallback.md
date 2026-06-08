---
layout: doc
editLink: true
title: setGlobalErrorCallback
description: Set a global error callback for dynamic parameter evaluation errors.
category: Functions
api: true
kind: Function
ecosystem: textmode.js
lastModified: 2026-06-08
---

[textmode.synth.js](../index.md) / setGlobalErrorCallback

# Function: setGlobalErrorCallback()

```ts
function setGlobalErrorCallback(callback): void;
```

Set a global error callback for dynamic parameter evaluation errors.

Provides a centralized way for live coding environments to receive
notifications whenever a dynamic parameter fails to evaluate.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | \| [`DynamicErrorCallback`](../type-aliases/DynamicErrorCallback.md) \| `null` |

## Returns

`void`

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="setGlobalErrorCallback" encoded-code="c2V0R2xvYmFsRXJyb3JDYWxsYmFjaygoZXJyb3IsIHVuaWZvcm1OYW1lKSA9PiB7CiAgY29uc29sZS5lcnJvcihgW1N5bnRoXSBQYXJhbWV0ZXIgIiR7dW5pZm9ybU5hbWV9IiBlcnJvcjpgLCBlcnJvcik7Cn0pOwoKY29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CiAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLAogIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LAogIHBsdWdpbnM6IFtTeW50aFBsdWdpbl0KfSk7Cgp0LmxheWVycy5iYXNlLnN5bnRoKAogIG9zYyg4LCAwLjEsIDEuMikKICAgIC5tb2R1bGF0ZShub2lzZSgoY3R4KSA9PiAxICsgTWF0aC5zaW4oY3R4LnRpbWUpICogMC41KSwgMC4yKQopOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKICB0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />
