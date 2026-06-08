---
layout: doc
editLink: true
title: loadTileset
description: Load a tileset and optionally set it as the base layer's active glyph source.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-08
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / loadTileset

# Method: loadTileset()

```ts
loadTileset(tilesetSource, setActive?): Promise<TextmodeTileset>;
```

Load a tileset and optionally set it as the base layer's active glyph source.

Accepts either tileset load options or an existing [TextmodeTileset](../../../namespaces/fonts/classes/TextmodeTileset.md)
instance to use as a reusable source.

If `setActive` is true (default), the tileset is set as the base layer's glyph source.
If `setActive` is false, the tileset is loaded/initialized and returned without modifying the layer.

The returned tileset can be reused on other layers via [TextmodeLayer.loadTileset](../../../namespaces/layering/classes/TextmodeLayer/methods/loadTileset.md),
which creates a layer-local fork rather than sharing a mutable instance by reference.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `tilesetSource` | \| [`TextmodeTilesetOptions`](../../../namespaces/fonts/interfaces/TextmodeTilesetOptions.md) \| [`TextmodeTileset`](../../../namespaces/fonts/classes/TextmodeTileset.md) | `undefined` | Tileset options or reusable TextmodeTileset instance. |
| `setActive` | `boolean` | `true` | Whether to activate the tileset on the base layer. Defaults to `true`. |

## Returns

`Promise`\<[`TextmodeTileset`](../../../namespaces/fonts/classes/TextmodeTileset.md)\>

The loaded TextmodeTileset.

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="loadTileset" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgc291cmNlOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9Cgp0LnNldHVwKGFzeW5jICgpID0-IHsKCXNvdXJjZSA9IGF3YWl0IHQubG9hZFRpbGVzZXQoewoJCXNvdXJjZTogJ2h0dHBzOi8vbGl0dGxlYml0c3BhY2UuY29tL3Jlc291cmNlcy9mb250cy9UNjQucG5nJywKCQljb2x1bW5zOiAxNiwKCQlyb3dzOiAxNiwKCQljb3VudDogMjU2LAoJfSk7Cn0pOwoKdC5kcmF3KCgpID0-IHsKCXQuYmFja2dyb3VuZCg2LCAxMCwgMjIpOwoJaWYgKHNvdXJjZSkgewoJCWZvciAobGV0IGkgPSAwOyBpIDwgNjQ7IGkrKykgewoJCQl0LnB1c2goKTsKCQkJdC50cmFuc2xhdGUoKGkgJSAxNikgLSA4LCBNYXRoLmZsb29yKGkgLyAxNikpOwoJCQl0LmNoYXIoaSk7CgkJCXQuY2hhckNvbG9yKDEyMCwgMjIwLCAyNTUpOwoJCQl0LnBvaW50KCk7CgkJCXQucG9wKCk7CgkJfQoJfQp9KTsKCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CglkcmF3VGV4dCgnVEVYVE1PRElGSUVSLkxPQURUSUxFU0VUJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogTE9BRCBUSUxFU0VUJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdMb2FkcyBtZWRpYSBmb3IgdGhpcyBleGFtcGxlLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnSFVEIHN0YXlzIG9uIGEgdG9wIGxheWVyLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoc291cmNlID8gJ1RJTEVTRVQ6IFJFQURZJyA6ICdUSUxFU0VUOiBXQUlUJywgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
