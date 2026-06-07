---
layout: doc
editLink: true
title: TextmodeColor
description: Color value used by textmode drawing APIs.
category: Classes
api: true
namespace: color
kind: Class
lastModified: 2026-06-07
hasConstructor: false
---

[textmode.js](../../../index.md) / [color](../index.md) / TextmodeColor

# Class: TextmodeColor

Color value used by textmode drawing APIs.

Values are stored as `0-255` integers for compatibility with public APIs.
Normalized versions are also available for shader uploads.

Use [Textmodifier.color](../../../classes/Textmodifier/methods/color.md) to create colors.

## Example

<TextmodeApiSandbox profile="textmode.js" encoded-files="W3siaW5mbyI6Imh0bWwgaW5kZXguaHRtbCBbaGlkZGVuXSBbcmVhZG9ubHldIiwiY29kZSI6IjwhRE9DVFlQRSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI-XG4gIDxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8-XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8dGl0bGU-VGV4dG1vZGVDb2xvcjwvdGl0bGU-XG4gICAgPHN0eWxlPlxuICAgICAgaHRtbCxcbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICB9XG5cbiAgICAgIGNhbnZhcyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIDwvc3R5bGU-XG4gICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS90ZXh0bW9kZS5qc0AwLjE2LjAtYmV0YS4xL2Rpc3QvdGV4dG1vZGUudW1kLmpzXCI-PC9zY3JpcHQ-XG4gIDwvaGVhZD5cbiAgPGJvZHk-XG4gICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCIgc3JjPVwic2tldGNoLmpzXCI-PC9zY3JpcHQ-XG4gIDwvYm9keT5cbjwvaHRtbD4ifSx7ImluZm8iOiJqcyBza2V0Y2guanMgW2FjdGl2ZV0iLCJjb2RlIjoiY29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7XG5cdHBpeGVsRGVuc2l0eTogMSxcblx0d2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuXHRoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcblx0Zm9udFNpemU6IDE2LFxufSk7XG5cbmNvbnN0IGxhYmVsTGF5ZXIgPSB0LmxheWVycy5hZGQoKTtcblxudC5kcmF3KCgpID0-IHtcblx0dC5iYWNrZ3JvdW5kKDYsIDEwLCAyMik7XG59KTtcblxuZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkge1xuXHR0LnB1c2goKTtcblx0dC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpO1xuXHR0LmNoYXJDb2xvcihyLCBnLCBiKTtcblx0dC5wcmludCh0ZXh0LCB4LCB5KTtcblx0dC5wb3AoKTtcbn1cblxubGFiZWxMYXllci5kcmF3KCgpID0-IHtcblx0dC5jbGVhcigpO1xuXHRjb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTtcblx0Y29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTtcblx0bGV0IHkgPSB0b3AgKyAzO1xuXHRjb25zdCB4ID0gbGVmdCArIDM7XG5cblx0Y29uc3QgY29sMSA9IHQuY29sb3IoMjU1LCAxMjAsIDgwKTtcblx0Y29uc3QgY29sMiA9IHQuY29sb3IoJyM4MEZGQjAnKTtcblx0Y29uc3QgY29sMyA9IHQuY29sb3IoMTgwKTtcblxuXHRkcmF3VGV4dCgnVEVYVE1PREVDT0xPUi5DUkVBVElPTicsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7XG5cdGRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7XG5cdGRyYXdUZXh0KCdDT05DRVBUOiBTVEFUSUMgQ09MT1IgQ1JFQVRPUicsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7XG5cdGRyYXdUZXh0KCdTdXBwb3J0cyBSR0IsIEhleCBzdHJpbmdzLCBHcmF5cy4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApO1xuXHRkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApO1xuXHRkcmF3VGV4dCgnUkdCIDogMjU1LCAxMjAsIDgwJywgeCwgeSsrLCBjb2wxLnIsIGNvbDEuZywgY29sMS5iKTtcblx0ZHJhd1RleHQoJ0hleCA6ICM4MEZGQjAnLCB4LCB5KyssIGNvbDIuciwgY29sMi5nLCBjb2wyLmIpO1xuXHRkcmF3VGV4dCgnR3JheTogMTgwJywgeCwgeSsrLCBjb2wzLnIsIGNvbDMuZywgY29sMy5iKTtcbn0pO1xuXG50LndpbmRvd1Jlc2l6ZWQoKCkgPT4ge1xuXHR0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbn0pOyJ9XQ" />

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
