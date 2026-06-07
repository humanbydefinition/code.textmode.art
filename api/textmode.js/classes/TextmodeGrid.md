---
layout: doc
editLink: true
title: TextmodeGrid
description: Grid used by a textmode layer.
category: Classes
api: true
kind: Class
lastModified: 2026-06-07
hasConstructor: false
---

[textmode.js](../index.md) / TextmodeGrid

# Class: TextmodeGrid

Grid used by a textmode layer.

The grid determines how characters are positioned and sized. By default, it is
responsive and recalculates columns and rows from the canvas size and glyph cell size.

You can manually set `cols` and `rows` to lock the grid to a specific size.

## Example

<TextmodeApiSandbox profile="textmode.js" encoded-files="W3siaW5mbyI6Imh0bWwgaW5kZXguaHRtbCBbaGlkZGVuXSBbcmVhZG9ubHldIiwiY29kZSI6IjwhRE9DVFlQRSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI-XG4gIDxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8-XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8dGl0bGU-VGV4dG1vZGVHcmlkPC90aXRsZT5cbiAgICA8c3R5bGU-XG4gICAgICBodG1sLFxuICAgICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgIH1cblxuICAgICAgY2FudmFzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3RleHRtb2RlLmpzQDAuMTYuMC1iZXRhLjEvZGlzdC90ZXh0bW9kZS51bWQuanNcIj48L3NjcmlwdD5cbiAgPC9oZWFkPlxuICA8Ym9keT5cbiAgICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIiBzcmM9XCJza2V0Y2guanNcIj48L3NjcmlwdD5cbiAgPC9ib2R5PlxuPC9odG1sPiJ9LHsiaW5mbyI6ImpzIHNrZXRjaC5qcyBbYWN0aXZlXSIsImNvZGUiOiJjb25zdCB0ID0gdGV4dG1vZGUuY3JlYXRlKHtcblx0cGl4ZWxEZW5zaXR5OiAxLFxuXHR3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG5cdGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuXHRmb250U2l6ZTogMTYsXG59KTtcblxuY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpO1xuXG50LmRyYXcoKCkgPT4ge1xuXHR0LmJhY2tncm91bmQoNiwgMTAsIDIyKTtcblxuXHR0LnB1c2goKTtcblx0dC5jaGFyKCcrJyk7XG5cdHQuY2hhckNvbG9yKDEwMCwgMjU1LCAxODApO1xuXHR0LnJlY3QodC5ncmlkLmNvbHMsIHQuZ3JpZC5yb3dzKTtcblx0dC5wb3AoKTtcbn0pO1xuXG5mdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7XG5cdHQucHVzaCgpO1xuXHR0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7XG5cdHQuY2hhckNvbG9yKHIsIGcsIGIpO1xuXHR0LnByaW50KHRleHQsIHgsIHkpO1xuXHR0LnBvcCgpO1xufVxuXG5sYWJlbExheWVyLmRyYXcoKCkgPT4ge1xuXHR0LmNsZWFyKCk7XG5cdGNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpO1xuXHRjb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpO1xuXHRsZXQgeSA9IHRvcCArIDM7XG5cdGNvbnN0IHggPSBsZWZ0ICsgMztcblxuXHRkcmF3VGV4dCgnVEVYVE1PREVHUklELkNSRUFUSU9OJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTtcblx0ZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTtcblx0ZHJhd1RleHQoJ0NPTkNFUFQ6IENIQVJBQ1RFUiBHUklEIElOU1RBTkNFJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTtcblx0ZHJhd1RleHQoJ01hbmFnZXMgcG9zaXRpb25pbmcgYW5kIGxheW91dC4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApO1xuXHRkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApO1xuXHRjb25zdCBkaW1zID0gdC5ncmlkLmNvbHMgKyAneCcgKyB0LmdyaWQucm93cztcblx0ZHJhd1RleHQoYEdSSUQ6ICR7ZGltc31gLCB4LCB5KyssIDEwMCwgMjU1LCAxODApO1xufSk7XG5cbnQud2luZG93UmVzaXplZCgoKSA9PiB7XG5cdHQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xufSk7In1d" />

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
