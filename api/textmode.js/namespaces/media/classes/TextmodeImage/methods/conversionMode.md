---
layout: doc
editLink: true
title: conversionMode
description: Select the conversion mode for this source.
category: Methods
api: true
owner: TextmodeImage
namespace: media
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../../../index.md) / [media](../../../index.md) / [TextmodeImage](../../TextmodeImage.md) / conversionMode

# Method: conversionMode()

```ts
conversionMode(mode): this;
```

Select the conversion mode for this source.

`textmode.js` includes only a single built-in conversion strategy `'brightness'`.

Additional conversion strategies may be provided via add-on libraries.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mode` | `string` | Conversion mode to use. |

## Returns

`this`

This instance for chaining.

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="conversionMode" encoded-code="Y29uc3QgSU1BR0VfVVJMID0gJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA2OTA1OTI1MzQ2LTIxYmRhNGQzMmRmND93PTkwMCZxPTgwJzsKY29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiA4LAp9KTsKCmNvbnN0IGxhYmVsTGF5ZXIgPSB0LmxheWVycy5hZGQoKTsKbGV0IHNvdXJjZSA9IG51bGw7Cgp0LnNldHVwKGFzeW5jICgpID0-IHsKCXNvdXJjZSA9IGF3YWl0IHQubG9hZEltYWdlKElNQUdFX1VSTCk7Cglzb3VyY2UuY29udmVyc2lvbk1vZGUoJ2JyaWdodG5lc3MnKTsKCXNvdXJjZS5jaGFyYWN0ZXJzKCcgLjotPSsqIyVAJyk7Cn0pOwoKdC5kcmF3KCgpID0-IHsKCXQuYmFja2dyb3VuZCg0LCA3LCAxOCk7Cgl0LmJhY2tncm91bmQoMCk7CglpZiAoIXNvdXJjZSkgcmV0dXJuOwoKCXQuaW1hZ2Uoc291cmNlLCBzb3VyY2Uud2lkdGgsIHNvdXJjZS5oZWlnaHQpOwp9KTsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCglkcmF3VGV4dCgnVEVYVE1PREVTT1VSQ0UuQ09OVkVSU0lPTk1PREUnLCB4LCB5KyssIDEwMCwgMjU1LCAxNDApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDT05DRVBUOiBTRVQgSU1BR0UgQ09OVkVSU0lPTiBNT0RFJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdTZXRzIG1vZGUgdXNlZCBmb3IgcGl4ZWwgbWFwcGluZy4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdDT05WRVJTSU9OIE1PREU6IGJyaWdodG5lc3MnLCB4LCB5KyssIDE0MCwgMTkwLCAyNTUpOwp9KTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />

## Inherited from

[`TextmodeSource`](../../TextmodeSource.md).[`conversionMode`](../../TextmodeSource/methods/conversionMode.md)
