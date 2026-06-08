---
layout: doc
editLink: true
title: useTileColors
description: Configure authored tileset color preservation on the base layer.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / useTileColors

# Method: useTileColors()

```ts
useTileColors(enabled?): boolean | void;
```

Configure authored tileset color preservation on the base layer.

This is equivalent to calling [TextmodeLayer.useTileColors](../../../namespaces/layering/classes/TextmodeLayer/methods/useTileColors.md) on the base layer.

When disabled (default), tilesets on the base layer are recolored through the current
character (`charColor`) and cell (`cellColor`) colors.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `enabled?` | `boolean` | Whether to preserve authored tileset colors. |

## Returns

`boolean` \| `void`

Current base-layer tileset-color mode when called without arguments.

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="useTileColors" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgYXV0aG9yZWQgPSBmYWxzZTsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKdC5kcmF3KCgpID0-IHsKCXQuYmFja2dyb3VuZCg2LCAxMCwgMjIpOwoJYXV0aG9yZWQgPSBNYXRoLmZsb29yKHQuZnJhbWVDb3VudCAvIDEyMCkgJSAyID09PSAwOwoJdC51c2VUaWxlQ29sb3JzKGF1dGhvcmVkKTsKCXQuY2hhcig2NSk7Cgl0LmNoYXJDb2xvcigyNTUsIDIxMCwgMTIwKTsKCXQucmVjdCgxMiwgNSk7Cn0pOwoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCWRyYXdUZXh0KCdURVhUTU9ESUZJRVIuVVNFVElMRUNPTE9SUycsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0NPTkNFUFQ6IFRJTEUgQ09MT1JTJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdUb2dnbGVzIGF1dGhvcmVkIHRpbGUgY29sb3IuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCdjaGFyQ29sb3IgaGFuZGxlcyByZWNvbG9yIG1vZGUuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dChhdXRob3JlZCA_ICdNT0RFOiBBVVRIT1JFRCcgOiAnTU9ERTogUkVDT0xPUicsIHgsIHkrKywgMTQwLCAyNTUsIDE4MCk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />
