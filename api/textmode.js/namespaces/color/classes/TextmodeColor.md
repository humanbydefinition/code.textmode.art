---
layout: doc
editLink: true
title: TextmodeColor
description: Color value used by textmode drawing APIs.
category: Classes
api: true
namespace: color
kind: Class
lastModified: 2026-06-08
hasConstructor: false
---

[textmode.js](../../../index.md) / [color](../index.md) / TextmodeColor

# Class: TextmodeColor

Color value used by textmode drawing APIs.

Values are stored as `0-255` integers for compatibility with public APIs.
Normalized versions are also available for shader uploads.

Use [Textmodifier.color](../../../classes/Textmodifier/methods/color.md) to create colors.

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="TextmodeColor" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDYsIDEwLCAyMik7Cn0pOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWNvbnN0IGNvbDEgPSB0LmNvbG9yKDI1NSwgMTIwLCA4MCk7Cgljb25zdCBjb2wyID0gdC5jb2xvcignIzgwRkZCMCcpOwoJY29uc3QgY29sMyA9IHQuY29sb3IoMTgwKTsKCglkcmF3VGV4dCgnVEVYVE1PREVDT0xPUi5DUkVBVElPTicsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0NPTkNFUFQ6IFNUQVRJQyBDT0xPUiBDUkVBVE9SJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdTdXBwb3J0cyBSR0IsIEhleCBzdHJpbmdzLCBHcmF5cy4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdSR0IgOiAyNTUsIDEyMCwgODAnLCB4LCB5KyssIGNvbDEuciwgY29sMS5nLCBjb2wxLmIpOwoJZHJhd1RleHQoJ0hleCA6ICM4MEZGQjAnLCB4LCB5KyssIGNvbDIuciwgY29sMi5nLCBjb2wyLmIpOwoJZHJhd1RleHQoJ0dyYXk6IDE4MCcsIHgsIHkrKywgY29sMy5yLCBjb2wzLmcsIGNvbDMuYik7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />

## Properties

| Property | Description |
| ------ | ------ |
| [a](TextmodeColor/properties/a.md) | Alpha component (0-255). |
| [b](TextmodeColor/properties/b.md) | Blue component (0-255). |
| [g](TextmodeColor/properties/g.md) | Green component (0-255). |
| [r](TextmodeColor/properties/r.md) | Red component (0-255). |

## Accessors

| Accessor | Description |
| ------ | ------ |
| [normalized](TextmodeColor/accessors/normalized.md) | Normalized *(0-1)* RGBA tuple. |
| [rgb](TextmodeColor/accessors/rgb.md) | Plain RGB tuple with integer components. |
| [rgba](TextmodeColor/accessors/rgba.md) | Plain RGBA tuple with integer components. |

## Methods

| Method | Description |
| ------ | ------ |
| [withAlpha](TextmodeColor/methods/withAlpha.md) | Create a copy of this color with a different alpha value. |
