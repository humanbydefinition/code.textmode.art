---
layout: doc
editLink: true
title: camera
description: Set explicit camera parameters for this layer.
category: Methods
api: true
owner: TextmodeLayer
namespace: layering
kind: Method
lastModified: 2026-06-09
---

[textmode.js](../../../../../index.md) / [layering](../../../index.md) / [TextmodeLayer](../../TextmodeLayer.md) / camera

# Method: camera()

```ts
camera(
   eyeX, 
   eyeY, 
   eyeZ, 
   targetX?, 
   targetY?, 
   targetZ?, 
   upX?, 
   upY?, 
   upZ?): void;
```

Set explicit camera parameters for this layer.

## Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `eyeX` | `number` | `undefined` |
| `eyeY` | `number` | `undefined` |
| `eyeZ` | `number` | `undefined` |
| `targetX` | `number` | `0` |
| `targetY` | `number` | `0` |
| `targetZ` | `number` | `0` |
| `upX` | `number` | `0` |
| `upY` | `number` | `1` |
| `upZ` | `number` | `0` |

## Returns

`void`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="camera" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBzY2VuZSA9IHQubGF5ZXJzLmFkZCgpOwpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgY2FtWCA9IDA7CmNvbnN0IGNhbVkgPSAxMDsKY29uc3QgY2FtWiA9IDQyOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgY29sb3IgPSBbMjAwLCAyMjAsIDI1NV0pIHsKCXQucHVzaCgpOwoJdC50cmFuc2xhdGUoeCwgeSk7Cgl0LmNoYXJDb2xvcihjb2xvclswXSwgY29sb3JbMV0sIGNvbG9yWzJdKTsKCWZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykgewoJCXQuY2hhcih0ZXh0W2ldKTsKCQl0LnBvaW50KCk7CgkJdC50cmFuc2xhdGUoMSwgMCk7Cgl9Cgl0LnBvcCgpOwp9Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDgsIDEwLCAxOCk7CgoJY29uc3QgdGltZSA9IHQuZnJhbWVDb3VudCAqIDAuMDM7CgljYW1YID0gTWF0aC5zaW4odGltZSkgKiAyMjsKCgkvLyBVcGRhdGUgbGF5ZXIgY2FtZXJhCglzY2VuZS5jYW1lcmEoY2FtWCwgY2FtWSwgY2FtWiwgMCwgMCwgMCk7Cn0pOwoKc2NlbmUuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgl0LnBvaW50TGlnaHQoWzI1NSwgMjAwLCAxMjBdLCB7IHg6IDIwLCB5OiAtMTUsIHo6IDMwIH0pOwoKCS8vIFJvdGF0ZSBjZW50ZXIgc2hhcGUgZ3JvdXAKCXQucHVzaCgpOwoJdC5yb3RhdGVZKHQuZnJhbWVDb3VudCAqIDEuNSk7CgoJLy8gQ2VudGVyIGN1YmUKCXQucHVzaCgpOwoJdC5jaGFyKCcjJyk7Cgl0LmNoYXJDb2xvcigxMjAsIDIyMCwgMjU1KTsKCXQuYm94KDgsIDgsIDgpOwoJdC5wb3AoKTsKCgkvLyBMZWZ0IHBpbGxhcgoJdC5wdXNoKCk7Cgl0LnRyYW5zbGF0ZSgtMTIsIDAsIDApOwoJdC5jaGFyKCdIJyk7Cgl0LmNoYXJDb2xvcigyNTUsIDEyMCwgMTIwKTsKCXQuYm94KDQsIDEyLCA0KTsKCXQucG9wKCk7CgoJLy8gUmlnaHQgcGlsbGFyCgl0LnB1c2goKTsKCXQudHJhbnNsYXRlKDEyLCAwLCAwKTsKCXQuY2hhcignTycpOwoJdC5jaGFyQ29sb3IoMTIwLCAyNTUsIDEyMCk7Cgl0LmJveCg0LCAxMiwgNCk7Cgl0LnBvcCgpOwoKCXQucG9wKCk7Cn0pOwoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCgljb25zdCBleWVTdHIgPSBgQ2FtIEV5ZSAgIDogWyR7Y2FtWC50b0ZpeGVkKDEpfSwgJHtjYW1ZLnRvRml4ZWQoMSl9LCAke2NhbVoudG9GaXhlZCgxKX1dYDsKCWRyYXdUZXh0KCdURVhUTU9ERUxBWUVSLkNBTUVSQScsIHgsIHkrKywgWzEwMCwgMjU1LCAxNDBdKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIFs4MCwgMTAwLCAxNTBdKTsKCWRyYXdUZXh0KCdDT05DRVBUOiBMQVlFUiBDQU1FUkEnLCB4LCB5KyssIFsxMDAsIDIyMCwgMjU1XSk7CglkcmF3VGV4dCgnU2V0cyBhIDNEIGNhbWVyYSBvbiBvbmUgbGF5ZXIuJywgeCwgeSsrLCBbMTQwLCAxNjAsIDE5MF0pOwoJZHJhd1RleHQoJ0Jhc2UgYmFja2dyb3VuZCBzdGF5cyBmbGF0LicsIHgsIHkrKywgWzE0MCwgMTYwLCAxOTBdKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIFs4MCwgMTAwLCAxNTBdKTsKCWRyYXdUZXh0KGV5ZVN0ciwgeCwgeSsrLCBbMTIwLCAyNTUsIDE4MF0pOwoJZHJhd1RleHQoJ1RhcmdldDogWzAuMCwgMC4wLCAwLjBdJywgeCwgeSsrLCBbMjAwLCAyMDAsIDIwMF0pOwp9KTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />
