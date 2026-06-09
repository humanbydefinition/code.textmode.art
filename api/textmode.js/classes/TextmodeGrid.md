---
layout: doc
editLink: true
title: TextmodeGrid
description: Grid used by a textmode layer.
category: Classes
api: true
kind: Class
lastModified: 2026-06-09
hasConstructor: false
---

[textmode.js](../index.md) / TextmodeGrid

# Class: TextmodeGrid

Grid used by a textmode layer.

The grid determines how characters are positioned and sized. By default, it is
responsive and recalculates columns and rows from the canvas size and glyph cell size.

You can manually set `cols` and `rows` to lock the grid to a specific size.

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="TextmodeGrid" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDYsIDEwLCAyMik7CgoJdC5wdXNoKCk7Cgl0LmNoYXIoJysnKTsKCXQuY2hhckNvbG9yKDEwMCwgMjU1LCAxODApOwoJdC5yZWN0KHQuZ3JpZC5jb2xzLCB0LmdyaWQucm93cyk7Cgl0LnBvcCgpOwp9KTsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCglkcmF3VGV4dCgnVEVYVE1PREVHUklELkNSRUFUSU9OJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogQ0hBUkFDVEVSIEdSSUQgSU5TVEFOQ0UnLCB4LCB5KyssIDEwMCwgMjIwLCAyNTUpOwoJZHJhd1RleHQoJ01hbmFnZXMgcG9zaXRpb25pbmcgYW5kIGxheW91dC4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWNvbnN0IGRpbXMgPSB0LmdyaWQuY29scyArICd4JyArIHQuZ3JpZC5yb3dzOwoJZHJhd1RleHQoYEdSSUQ6ICR7ZGltc31gLCB4LCB5KyssIDEwMCwgMjU1LCAxODApOwp9KTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />

## Accessors

| Accessor | Description |
| ------ | ------ |
| [cellHeight](TextmodeGrid/accessors/cellHeight.md) | Height of each cell in screen pixels. |
| [cellWidth](TextmodeGrid/accessors/cellWidth.md) | Width of each cell in screen pixels. |
| [cols](TextmodeGrid/accessors/cols.md) | Number of columns in the grid. |
| [height](TextmodeGrid/accessors/height.md) | Total grid height in screen pixels. |
| [offsetX](TextmodeGrid/accessors/offsetX.md) | Horizontal offset in pixels from the canvas edge to the grid. |
| [offsetY](TextmodeGrid/accessors/offsetY.md) | Vertical offset in pixels from the canvas edge to the grid. |
| [rows](TextmodeGrid/accessors/rows.md) | Number of rows in the grid. |
| [width](TextmodeGrid/accessors/width.md) | Total grid width in screen pixels. |

## Methods

| Method | Description |
| ------ | ------ |
| [reset](TextmodeGrid/methods/reset.md) | Recalculate columns and rows from the current canvas and cell dimensions. |
| [responsive](TextmodeGrid/methods/responsive.md) | Restore responsive sizing so subsequent canvas resizes recompute columns and rows. |
