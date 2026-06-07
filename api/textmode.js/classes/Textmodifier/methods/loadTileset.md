---
layout: doc
editLink: true
title: loadTileset
description: Load a tileset and optionally set it as the base layer's active glyph source.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-07
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

<TextmodeApiSandbox profile="textmode.js" encoded-files="W3siaW5mbyI6Imh0bWwgaW5kZXguaHRtbCBbaGlkZGVuXSBbcmVhZG9ubHldIiwiY29kZSI6IjwhRE9DVFlQRSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI-XG4gIDxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8-XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8dGl0bGU-bG9hZFRpbGVzZXQ8L3RpdGxlPlxuICAgIDxzdHlsZT5cbiAgICAgIGh0bWwsXG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgfVxuXG4gICAgICBjYW52YXMge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vdGV4dG1vZGUuanNAMC4xNi4wLWJldGEuMS9kaXN0L3RleHRtb2RlLnVtZC5qc1wiPjwvc2NyaXB0PlxuICA8L2hlYWQ-XG4gIDxib2R5PlxuICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiIHNyYz1cInNrZXRjaC5qc1wiPjwvc2NyaXB0PlxuICA8L2JvZHk-XG48L2h0bWw-In0seyJpbmZvIjoianMgc2tldGNoLmpzIFthY3RpdmVdIiwiY29kZSI6ImNvbnN0IHQgPSB0ZXh0bW9kZS5jcmVhdGUoe1xuXHRwaXhlbERlbnNpdHk6IDEsXG5cdHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcblx0aGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG5cdGZvbnRTaXplOiAxNixcbn0pO1xuXG5jb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7XG5cbmxldCBzb3VyY2U7XG5cbmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHtcblx0dC5wdXNoKCk7XG5cdHQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTtcblx0dC5jaGFyQ29sb3IociwgZywgYik7XG5cdHQucHJpbnQodGV4dCwgeCwgeSk7XG5cdHQucG9wKCk7XG59XG5cbnQuc2V0dXAoYXN5bmMgKCkgPT4ge1xuXHRzb3VyY2UgPSBhd2FpdCB0LmxvYWRUaWxlc2V0KHtcblx0XHRzb3VyY2U6ICdodHRwczovL2xpdHRsZWJpdHNwYWNlLmNvbS9yZXNvdXJjZXMvZm9udHMvVDY0LnBuZycsXG5cdFx0Y29sdW1uczogMTYsXG5cdFx0cm93czogMTYsXG5cdFx0Y291bnQ6IDI1Nixcblx0fSk7XG59KTtcblxudC5kcmF3KCgpID0-IHtcblx0dC5iYWNrZ3JvdW5kKDYsIDEwLCAyMik7XG5cdGlmIChzb3VyY2UpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDY0OyBpKyspIHtcblx0XHRcdHQucHVzaCgpO1xuXHRcdFx0dC50cmFuc2xhdGUoKGkgJSAxNikgLSA4LCBNYXRoLmZsb29yKGkgLyAxNikpO1xuXHRcdFx0dC5jaGFyKGkpO1xuXHRcdFx0dC5jaGFyQ29sb3IoMTIwLCAyMjAsIDI1NSk7XG5cdFx0XHR0LnBvaW50KCk7XG5cdFx0XHR0LnBvcCgpO1xuXHRcdH1cblx0fVxufSk7XG5cbmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7XG5cdHQuY2xlYXIoKTtcblx0Y29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7XG5cdGNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7XG5cdGxldCB5ID0gdG9wICsgMztcblx0Y29uc3QgeCA9IGxlZnQgKyAzO1xuXHRkcmF3VGV4dCgnVEVYVE1PRElGSUVSLkxPQURUSUxFU0VUJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTtcblx0ZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTtcblx0ZHJhd1RleHQoJ0NPTkNFUFQ6IExPQUQgVElMRVNFVCcsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7XG5cdGRyYXdUZXh0KCdMb2FkcyBtZWRpYSBmb3IgdGhpcyBleGFtcGxlLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7XG5cdGRyYXdUZXh0KCdIVUQgc3RheXMgb24gYSB0b3AgbGF5ZXIuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTtcblx0ZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTtcblx0ZHJhd1RleHQoc291cmNlID8gJ1RJTEVTRVQ6IFJFQURZJyA6ICdUSUxFU0VUOiBXQUlUJywgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTtcbn0pO1xuXG50LndpbmRvd1Jlc2l6ZWQoKCkgPT4ge1xuXHR0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbn0pOyJ9XQ" />
