---
layout: doc
editLink: true
title: TextmodeTileset
description: Bitmap tileset glyph source for textmode rendering.
category: Classes
api: true
namespace: fonts
kind: Class
lastModified: 2026-06-09
hasConstructor: false
---

[textmode.js](../../../index.md) / [fonts](../index.md) / TextmodeTileset

# Class: TextmodeTileset

Bitmap tileset glyph source for textmode rendering.

Tiles are imported from a source sheet, repacked into the same contiguous atlas layout
used by vector fonts, and exposed through the shared glyph-atlas contract.

`fontSize()` changes on a tileset only affect the effective output cell size.
The native atlas stays at the authored tile resolution.

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="TextmodeTileset" encoded-code="Y29uc3QgVDY0X1VSTCA9ICdodHRwczovL2xpdHRsZWJpdHNwYWNlLmNvbS9yZXNvdXJjZXMvZm9udHMvVDY0LnBuZyc7CmNvbnN0IFRJTEVfQ09MVU1OUyA9IDE2Owpjb25zdCBUSUxFX1JPV1MgPSAxNjsKY29uc3QgVElMRV9DT1VOVCA9IFRJTEVfQ09MVU1OUyAqIFRJTEVfUk9XUzsKCmNvbnN0IHQgPSB0ZXh0bW9kZS5jcmVhdGUoewoJcGl4ZWxEZW5zaXR5OiAxLAoJd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLAoJaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsCglmb250U2l6ZTogMTYsCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKbGV0IHRpbGVzZXQgPSBudWxsOwoKZnVuY3Rpb24gdGlsZXNldE9wdGlvbnMoKSB7CglyZXR1cm4gewoJCXNvdXJjZTogVDY0X1VSTCwKCQljb2x1bW5zOiBUSUxFX0NPTFVNTlMsCgkJcm93czogVElMRV9ST1dTLAoJCWNvdW50OiBUSUxFX0NPVU5ULAoJCWZvbnRTaXplOiAxNiwKCX07Cn0KCnQuc2V0dXAoYXN5bmMgKCkgPT4gewoJdGlsZXNldCA9IGF3YWl0IHQubG9hZFRpbGVzZXQodGlsZXNldE9wdGlvbnMoKSk7Cn0pOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDUsIDcsIDE4KTsKCWlmICghdGlsZXNldCkgcmV0dXJuOwoJY29uc3Qgc3RhcnRYID0gLU1hdGguZmxvb3IoVElMRV9DT0xVTU5TIC8gMik7Cgljb25zdCBzdGFydFkgPSAtTWF0aC5mbG9vcihUSUxFX1JPV1MgLyAyKTsKCWZvciAobGV0IGkgPSAwOyBpIDwgVElMRV9DT1VOVDsgaSsrKSB7CgkJdC5wdXNoKCk7CgkJdC50cmFuc2xhdGUoc3RhcnRYICsgKGkgJSBUSUxFX0NPTFVNTlMpLCBzdGFydFkgKyBNYXRoLmZsb29yKGkgLyBUSUxFX0NPTFVNTlMpKTsKCQl0LmNoYXIoaSk7CgkJdC5jaGFyQ29sb3IoMTIwICsgaSAqIDYsIDIyMCwgMjU1IC0gaSAqIDcpOwoJCXQucG9pbnQoKTsKCQl0LnBvcCgpOwoJfQp9KTsKCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CgoJZHJhd1RleHQoJ1RFWFRNT0RFVElMRVNFVC5DUkVBVElPTicsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0NPTkNFUFQ6IEdMWVBIIEFUTEFTIERBVEEnLCB4LCB5KyssIDEwMCwgMjIwLCAyNTUpOwoJZHJhd1RleHQoJ1Q2NCB3ZWIgdGlsZXNldCBmZWVkcyBnbHlwaHMuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnVDY0IFJFQURZJywgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />

## Extends

- `Disposable`

## Implements

- [`TextmodeGlyphAtlas`](../interfaces/TextmodeGlyphAtlas.md)

## Accessors

| Accessor | Description |
| ------ | ------ |
| [cellDimensions](TextmodeTileset/accessors/cellDimensions.md) | Effective tile cell dimensions used by the layer grid. |
| [cellHeight](TextmodeTileset/accessors/cellHeight.md) | Effective tile cell height used by the layer grid. |
| [cellWidth](TextmodeTileset/accessors/cellWidth.md) | Effective tile cell width used by the layer grid. |
| [characterMap](TextmodeTileset/accessors/characterMap.md) | Character-to-glyph lookup map for the tileset. |
| [characters](TextmodeTileset/accessors/characters.md) | Glyphs generated from the tileset mapping. |
| [columns](TextmodeTileset/accessors/columns.md) | Number of columns in the normalized glyph atlas. |
| [fontFramebuffer](TextmodeTileset/accessors/fontFramebuffer.md) | Tileset atlas framebuffer backing this glyph atlas. |
| [fontSize](TextmodeTileset/accessors/fontSize.md) | Effective font size used to scale tileset cells. |
| [framebuffer](TextmodeTileset/accessors/framebuffer.md) | Normalized glyph atlas framebuffer used by the ASCII shader. |
| [maxGlyphDimensions](TextmodeTileset/accessors/maxGlyphDimensions.md) | Effective tile dimensions used by the layer grid. |
| [nativeCellDimensions](TextmodeTileset/accessors/nativeCellDimensions.md) | Authored tile dimensions from the source tileset in pixels. |
| [rows](TextmodeTileset/accessors/rows.md) | Number of rows in the normalized glyph atlas. |
| [textureColumns](TextmodeTileset/accessors/textureColumns.md) | Number of columns in the repacked tileset atlas. |
| [textureRows](TextmodeTileset/accessors/textureRows.md) | Number of rows in the repacked tileset atlas. |

## Methods

| Method | Description |
| ------ | ------ |
| [dispose](TextmodeTileset/methods/dispose.md) | Dispose the tileset and release its shared atlas resources. |
