---
layout: doc
editLink: true
title: draw
description: Set the base layer draw callback.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / draw

# Method: draw()

```ts
draw(callback): void;
```

Set the base layer draw callback.

Put drawing commands for the main layer in this callback.

If multiple layers are added via [Textmodifier.layers](../accessors/layers.md), each layer has its own draw callback set via [TextmodeLayer.draw](../../../namespaces/layering/classes/TextmodeLayer/methods/draw.md).

Calling this method is equivalent to setting the callback on `textmodifier.layers.base`.
The direct base-layer callback has precedence if both are set.
```js
textmodifier.layers.base.draw(callback);
```

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` | Function to run before each base layer render. |

## Returns

`void`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="draw" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgcHVsc2UgPSAwOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDYsIDEwLCAyMik7CglwdWxzZSA9IDAuNSArIDAuNSAqIE1hdGguc2luKHQuZnJhbWVDb3VudCAqIDAuMDUpOwoJdC5wdXNoKCk7Cgl0LnRyYW5zbGF0ZSg4LCAyKTsKCXQuY2hhcignIycpOwoJdC5jaGFyQ29sb3IoMTIwLCAxMjAgKyBwdWxzZSAqIDEyMCwgMjU1KTsKCXQucmVjdCg2ICsgcHVsc2UgKiA4LCAzICsgcHVsc2UgKiA0KTsKCXQucG9wKCk7Cn0pOwoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCWRyYXdUZXh0KCdURVhUTU9ESUZJRVIuRFJBVycsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0NPTkNFUFQ6IEZSQU1FIENBTExCQUNLJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdkcmF3KCkgcnVucyBldmVyeSBmcmFtZS4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJ1B1bHNlIHByb3ZlcyBjb250aW51b3VzIHVwZGF0ZXMuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dChgUFVMU0U6ICR7cHVsc2UudG9GaXhlZCgyKX1gLCB4LCB5KyssIDE0MCwgMjU1LCAxODApOwp9KTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />
