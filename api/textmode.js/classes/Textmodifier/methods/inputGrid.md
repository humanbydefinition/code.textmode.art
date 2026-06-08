---
layout: doc
editLink: true
title: inputGrid
description: Get or set the grid used for mouse and touch coordinate mapping.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / inputGrid

# Method: inputGrid()

```ts
inputGrid(target?): void | TextmodeGrid | "topmost";
```

Get or set the grid used for mouse and touch coordinate mapping.

By default, input coordinates are mapped to the topmost visible layer's grid,
which changes dynamically as layers are shown/hidden. Use this method to lock
input mapping to a specific grid, or to return to responsive mode.

When called without arguments, returns the current input grid mode:<br/>
- `'topmost'` if using responsive mode (default)<br/>
- The specific `TextmodeGrid` if locked

## Parameters

| Parameter | Type |
| ------ | ------ |
| `target?` | [`TextmodeGrid`](../../TextmodeGrid.md) \| `"topmost"` |

## Returns

`void` \| [`TextmodeGrid`](../../TextmodeGrid.md) \| `"topmost"`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="inputGrid" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7Cgpjb25zdCBpbnB1dExheWVyID0gdC5sYXllcnMuYWRkKCk7CmxldCBsb2NrZWQgPSBmYWxzZTsKbGV0IG1vZGUgPSAndG9wbW9zdCc7Cgp0LnNldHVwKCgpID0-IHsKCWlucHV0TGF5ZXIuZ3JpZC5jb2xzID0gMjQ7CglpbnB1dExheWVyLmdyaWQucm93cyA9IDEyOwp9KTsKCnQubW91c2VDbGlja2VkKCgpID0-IHsKCWxvY2tlZCA9ICFsb2NrZWQ7Cgl0LmlucHV0R3JpZChsb2NrZWQgPyBpbnB1dExheWVyLmdyaWQgOiAndG9wbW9zdCcpOwoJbW9kZSA9IGxvY2tlZCA_ICdsb2NrZWQnIDogJ3RvcG1vc3QnOwp9KTsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKdC5kcmF3KCgpID0-IHsKCXQuYmFja2dyb3VuZCg2LCAxMCwgMjIpOwoJdC5jaGFyQ29sb3IoNjAsIDgwLCAxMjApOwoJdC5jaGFyKCcuJyk7Cgl0LnJlY3QodC5ncmlkLmNvbHMsIHQuZ3JpZC5yb3dzKTsKfSk7CgppbnB1dExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJdC5jaGFyQ29sb3IoMTAwLCAyMjAsIDI1NSk7Cgl0LmNoYXIoJysnKTsKCXQucmVjdChpbnB1dExheWVyLmdyaWQuY29scywgaW5wdXRMYXllci5ncmlkLnJvd3MpOwp9KTsKCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CgoJZHJhd1RleHQoJ1RFWFRNT0RJRklFUi5JTlBVVEdSSUQnLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDT05DRVBUOiBJTlBVVCBHUklEIExPQ0snLCB4LCB5KyssIDEwMCwgMjIwLCAyNTUpOwoJZHJhd1RleHQoJ01vdXNlIG1hcHBpbmcgY2FuIGxvY2suJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dChgTU9ERTogJHttb2RlfWAsIHgsIHkrKywgMTQwLCAyNTUsIDE4MCk7CglkcmF3VGV4dCgnQ0xJQ0sgVE8gVE9HR0xFJywgeCwgeSsrLCAyNTUsIDIyNSwgMTQwKTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
