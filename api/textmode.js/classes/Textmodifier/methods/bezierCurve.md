---
layout: doc
editLink: true
title: bezierCurve
description: Draw a smooth cubic Bezier curve between two points. The curve thickness is controlled by the current lineWeight setting.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / bezierCurve

# Method: bezierCurve()

```ts
bezierCurve(
   x1, 
   y1, 
   cp1x, 
   cp1y, 
   cp2x, 
   cp2y, 
   x2, 
   y2): void;
```

Draw a smooth cubic Bezier curve between two points.
The curve thickness is controlled by the current [lineWeight](lineWeight.md) setting.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x1` | `number` | Start point X coordinate in grid cells. |
| `y1` | `number` | Start point Y coordinate in grid cells. |
| `cp1x` | `number` | First control point X coordinate in grid cells. |
| `cp1y` | `number` | First control point Y coordinate in grid cells. |
| `cp2x` | `number` | Second control point X coordinate in grid cells. |
| `cp2y` | `number` | Second control point Y coordinate in grid cells. |
| `x2` | `number` | End point X coordinate in grid cells. |
| `y2` | `number` | End point Y coordinate in grid cells. |

## Returns

`void`

## Example

<TextmodeApiSandbox profile="textmode.js" encoded-files="W3siaW5mbyI6Imh0bWwgaW5kZXguaHRtbCBbaGlkZGVuXSBbcmVhZG9ubHldIiwiY29kZSI6IjwhRE9DVFlQRSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI-XG4gIDxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8-XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8dGl0bGU-YmV6aWVyQ3VydmU8L3RpdGxlPlxuICAgIDxzdHlsZT5cbiAgICAgIGh0bWwsXG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgfVxuXG4gICAgICBjYW52YXMge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vdGV4dG1vZGUuanNAMC4xNi4wLWJldGEuMS9kaXN0L3RleHRtb2RlLnVtZC5qc1wiPjwvc2NyaXB0PlxuICA8L2hlYWQ-XG4gIDxib2R5PlxuICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiIHNyYz1cInNrZXRjaC5qc1wiPjwvc2NyaXB0PlxuICA8L2JvZHk-XG48L2h0bWw-In0seyJpbmZvIjoianMgc2tldGNoLmpzIFthY3RpdmVdIiwiY29kZSI6ImNvbnN0IHQgPSB0ZXh0bW9kZS5jcmVhdGUoe1xuXHRwaXhlbERlbnNpdHk6IDEsXG5cdHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcblx0aGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG5cdGZvbnRTaXplOiAxNixcbn0pO1xuXG5jb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7XG5cbmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHtcblx0dC5wdXNoKCk7XG5cdHQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTtcblx0dC5jaGFyQ29sb3IociwgZywgYik7XG5cdHQucHJpbnQodGV4dCwgeCwgeSk7XG5cdHQucG9wKCk7XG59XG5cbnQuZHJhdygoKSA9PiB7XG5cdHQuYmFja2dyb3VuZCg2LCAxMCwgMjIpO1xuXHRjb25zdCB0aW1lID0gdC5mcmFtZUNvdW50ICogMC4wMjU7XG5cdGNvbnN0IGNwMXggPSAtOCArIE1hdGguc2luKHRpbWUpICogNjtcblx0Y29uc3QgY3AxeSA9IC03O1xuXHRjb25zdCBjcDJ4ID0gOCArIE1hdGguY29zKHRpbWUgKiAwLjgpICogNjtcblx0Y29uc3QgY3AyeSA9IDc7XG5cdHQucHVzaCgpO1xuXHR0LnRyYW5zbGF0ZSg3LCAxKTtcblx0dC5jaGFyQ29sb3IoNjAsIDcwLCAxMDApO1xuXHR0LmNoYXIoJy4nKTtcblx0dC5saW5lKC0xNCwgMCwgY3AxeCwgY3AxeSk7XG5cdHQubGluZSgxNCwgMCwgY3AyeCwgY3AyeSk7XG5cdHQuY2hhcignIycpO1xuXHR0LmNoYXJDb2xvcigxNDAsIDIyMCwgMjU1KTtcblx0dC5iZXppZXJDdXJ2ZSgtMTQsIDAsIGNwMXgsIGNwMXksIGNwMngsIGNwMnksIDE0LCAwKTtcblx0dC5wb3AoKTtcbn0pO1xuXG5sYWJlbExheWVyLmRyYXcoKCkgPT4ge1xuXHR0LmNsZWFyKCk7XG5cdGNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpO1xuXHRjb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpO1xuXHRsZXQgeSA9IHRvcCArIDM7XG5cdGNvbnN0IHggPSBsZWZ0ICsgMztcblx0ZHJhd1RleHQoJ1RFWFRNT0RJRklFUi5CRVpJRVJDVVJWRScsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7XG5cdGRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7XG5cdGRyYXdUZXh0KCdDT05DRVBUOiBDVUJJQyBDVVJWRScsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7XG5cdGRyYXdUZXh0KCdUd28gY29udHJvbCBwb2ludHMgYmVuZCBwYXRoLicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7XG5cdGRyYXdUZXh0KCdHdWlkZSBsaW5lcyBzaG93IGhhbmRsZXMuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTtcblx0ZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTtcblx0ZHJhd1RleHQoJ0FQSTogdC5iZXppZXJDdXJ2ZSguLi4pJywgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTtcbn0pO1xuXG50LndpbmRvd1Jlc2l6ZWQoKCkgPT4ge1xuXHR0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbn0pOyJ9XQ" />
