---
layout: doc
editLink: false
title: setFunction
description: Register one or more transform definitions using Hydra's setFunction() contract.
category: Functions
api: true
kind: Function
ecosystem: textmode.js
lastModified: 2026-08-24
---

[textmode.synth.js](../index.md) / setFunction

# Function: setFunction()

```ts
function setFunction(definitions, options?): ExtensionRegistration;
```

Register one or more transform definitions using Hydra's `setFunction()`
contract.

Accepts a single definition or an array of definitions installed atomically
(the whole batch validates before any state changes). The default conflict
policy is `replace`, so a definition can redefine a built-in or an earlier
registration; pass `{ conflict: 'error' }` to reject name collisions instead.
Previously created chains keep their captured definition.

A `src`-type definition becomes a standalone function returned in `sources`
and, in browser global mode, on `window`.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `definitions` | \| [`TransformDefinition`](../interfaces/TransformDefinition.md) \| readonly [`TransformDefinition`](../interfaces/TransformDefinition.md)[] | A single definition or an array of definitions |
| `options?` | [`ExtensionOptions`](../interfaces/ExtensionOptions.md) | Conflict policy and global exposure |

## Returns

[`ExtensionRegistration`](../interfaces/ExtensionRegistration.md)

A registration handle whose `dispose()` restores the prior bindings

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="setFunction" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KCdTRVQgRlVOQ1RJT046IENPT1JEJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogRk9MREVEIENPT1JESU5BVEVTJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdBIGNvb3JkIHJld3JpdGVzIF9zdCBmaXJzdC4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJ1N0cmFpZ2h0IGxpbmVzIGJlY29tZSBwbGVhdHMuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnbW9pcmUoLi4uKS5wbGVhdCg5LCAwLjI0KScsIHgsIHkrKywgMTQwLCAyNTUsIDE4MCk7Cn0pOwoKc2V0RnVuY3Rpb24oewoJbmFtZTogJ3BsZWF0JywKCXR5cGU6ICdjb29yZCcsCglpbnB1dHM6IFsKCQl7IG5hbWU6ICdmb2xkcycsIHR5cGU6ICdmbG9hdCcsIGRlZmF1bHQ6IDkgfSwKCQl7IG5hbWU6ICdkZXB0aCcsIHR5cGU6ICdmbG9hdCcsIGRlZmF1bHQ6IDAuMjQgfSwKCV0sCglnbHNsOiBgCgkJZmxvYXQgY29sdW1uID0gZmxvb3IoX3N0LnggKiBmb2xkcyk7CgkJZmxvYXQgbG9jYWwgPSBmcmFjdChfc3QueCAqIGZvbGRzKSAtIDAuNTsKCQlmbG9hdCBkaXJlY3Rpb24gPSBtb2QoY29sdW1uLCAyLjApICogMi4wIC0gMS4wOwoJCXZlYzIgc3QgPSBfc3Q7CgkJc3QueSArPSBkaXJlY3Rpb24gKiAoMC41IC0gYWJzKGxvY2FsKSkgKiBkZXB0aDsKCQlzdC54ICs9IHNpbigoX3N0LnkgKyB0aW1lICogMC4wMjUpICogMTguMCkgKiAwLjAxMjsKCQlyZXR1cm4gc3Q7CglgLAp9KTsKCmNvbnN0IGZvbGRzID0gbW9pcmUoOSwgMTIsIDAuMDMsIDEuNTcsIDAuMDE4KS5wbGVhdCg5LCAwLjI0KTsKY29uc3QgaW5rID0gZ3JhZGllbnQoMC4wMzUpLnBsZWF0KDksIDAuMjQpLmNvbG9yKDEuMCwgMC40MiwgMC4xNCk7Cgp0LnN5bnRoKGZvbGRzLmNoYXJNYXAoJyAuXy8tfFxcI0AnKS5jaGFyQ29sb3IoaW5rKS5jZWxsQ29sb3IoMC4wNDUsIDAuMDI1LCAwLjA3KSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />

