---
layout: doc
editLink: true
title: print
description: Print a string of text onto the active drawing layer.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-07
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / print

# Method: print()

```ts
print(
   str, 
   x, 
   y, 
   options?): void;
```

Print a string of text onto the active drawing layer.

Supports custom leading, letter spacing, tab size, and inline BBCode-style formatting tags
like `[fg=red]`, `[bg=color]`, `[inv]`, `[rot=90]`, `[fx]`, `[fy]`, and their closing tags.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The text string to print. |
| `x` | `number` | Coordinate along the horizontal axis in cells. |
| `y` | `number` | Coordinate along the vertical axis in cells. |
| `options?` | \{ `leading?`: `number`; `letterSpacing?`: `number`; `markup?`: `boolean`; `tabSize?`: `number`; \} | Optional printing configurations. |
| `options.leading?` | `number` | Distance between printed lines in cells. |
| `options.letterSpacing?` | `number` | Extra horizontal spacing between characters in cells. |
| `options.markup?` | `boolean` | Whether to parse inline BBCode-style formatting tags. |
| `options.tabSize?` | `number` | Number of spaces used for tab characters. |

## Returns

`void`

## Example

<TextmodeApiSandbox profile="textmode.js" encoded-files="W3siaW5mbyI6Imh0bWwgaW5kZXguaHRtbCBbaGlkZGVuXSBbcmVhZG9ubHldIiwiY29kZSI6IjwhRE9DVFlQRSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI-XG4gIDxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8-XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8dGl0bGU-cHJpbnQ8L3RpdGxlPlxuICAgIDxzdHlsZT5cbiAgICAgIGh0bWwsXG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgfVxuXG4gICAgICBjYW52YXMge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vdGV4dG1vZGUuanNAMC4xNi4wLWJldGEuMS9kaXN0L3RleHRtb2RlLnVtZC5qc1wiPjwvc2NyaXB0PlxuICA8L2hlYWQ-XG4gIDxib2R5PlxuICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiIHNyYz1cInNrZXRjaC5qc1wiPjwvc2NyaXB0PlxuICA8L2JvZHk-XG48L2h0bWw-In0seyJpbmZvIjoianMgc2tldGNoLmpzIFthY3RpdmVdIiwiY29kZSI6ImNvbnN0IHQgPSB0ZXh0bW9kZS5jcmVhdGUoe1xuXHRwaXhlbERlbnNpdHk6IDEsXG5cdHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcblx0aGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG5cdGZvbnRTaXplOiAxNixcbn0pO1xuXG5jb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7XG5cbnQuZHJhdygoKSA9PiB7XG5cdHQuYmFja2dyb3VuZCg2LCAxMCwgMjIpO1xuXG5cdC8vIFN1YnRsZSBkeW5hbWljIGJhY2tncm91bmQgcGFydGljbGVzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgMTU7IGkrKykge1xuXHRcdGNvbnN0IGFuZ2xlID0gdC5mcmFtZUNvdW50ICogMC4wMiArIGk7XG5cdFx0Y29uc3QgcmFkaXVzID0gOCArIChpICUgMykgKiAyLjU7XG5cdFx0dC5wdXNoKCk7XG5cdFx0dC50cmFuc2xhdGUoTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzICogMS42LCBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXMpO1xuXHRcdHQuY2hhckNvbG9yKDMwLCA0NSwgODApO1xuXHRcdHQuY2hhcihpICUgMiA9PT0gMCA_ICcuJyA6ICcrJyk7XG5cdFx0dC5wb2ludCgpO1xuXHRcdHQucG9wKCk7XG5cdH1cbn0pO1xuXG5sYWJlbExheWVyLmRyYXcoKCkgPT4ge1xuXHR0LmNsZWFyKCk7XG5cdGNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpO1xuXHRjb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpO1xuXHRsZXQgeSA9IHRvcCArIDM7XG5cdGNvbnN0IHggPSBsZWZ0ICsgMztcblxuXHR0LnB1c2goKTtcblx0dC5jaGFyQ29sb3IoMTAwLCAyNTUsIDE0MCk7XG5cdHQucHJpbnQoJ1RFWFRNT0RJRklFUi5QUklOVCcsIHgsIHkrKyk7XG5cdHQucG9wKCk7XG5cblx0dC5wdXNoKCk7XG5cdHQuY2hhckNvbG9yKDgwLCAxMDAsIDE1MCk7XG5cdHQucHJpbnQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKyk7XG5cdHQucG9wKCk7XG5cblx0dC5wdXNoKCk7XG5cdHQuY2hhckNvbG9yKDEwMCwgMjIwLCAyNTUpO1xuXHR0LnByaW50KCdDT05DRVBUOiBOQVRJVkUgUklDSCBUWVBPR1JBUEhZJywgeCwgeSsrKTtcblx0dC5wb3AoKTtcblxuXHR0LnB1c2goKTtcblx0dC5jaGFyQ29sb3IoMTQwLCAxNjAsIDE5MCk7XG5cdHQucHJpbnQoJ1ByaW50cyBzdHJpbmdzIHdpdGggaW5saW5lIEJCQ29kZS1zdHlsZSB0YWdzOicsIHgsIHkrKyk7XG5cdHQucHJpbnQoJyAgLSBbZmc9Z3JlZW5dRm9yZWdyb3VuZCBDb2xvclsvZmddJywgeCwgeSsrKTtcblx0dC5wcmludCgnICAtIFtiZz1ibHVlXUJhY2tncm91bmQgQ29sb3JbL2JnXScsIHgsIHkrKyk7XG5cdHQucHJpbnQoJyAgLSBbaW52XUludmVydGVkIGNvbG9yc1svaW52XScsIHgsIHkrKyk7XG5cdHQucHJpbnQoJyAgLSBbcm90PTkwXVJvdGF0ZWRbL3JvdF0gW2Z4XUZsaXAgWFsvZnhdIFtmeV1GbGlwIFlbL2Z5XScsIHgsIHkrKyk7XG5cdHQucG9wKCk7XG5cblx0dC5wdXNoKCk7XG5cdHQuY2hhckNvbG9yKDgwLCAxMDAsIDE1MCk7XG5cdHQucHJpbnQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKyk7XG5cdHQucG9wKCk7XG5cblx0dC5wcmludCgnTkVTVEVEOiBbZmc9eWVsbG93XVtpbnZdW3JvdD0xODBdIExFVkVMIDA1IFsvcm90XVsvaW52XVsvZmddIHwgU1RBVFVTOiBbZmc9cmVkXUNSSVRJQ0FMWy9mZ10nLCB4LCB5KyspO1xufSk7XG5cbnQud2luZG93UmVzaXplZCgoKSA9PiB7XG5cdHQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xufSk7In1d" />
