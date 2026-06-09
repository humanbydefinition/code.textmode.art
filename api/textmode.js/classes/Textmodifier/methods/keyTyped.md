---
layout: doc
editLink: true
title: keyTyped
description: Register the single-callback handler for printable character input.
category: Methods
api: true
owner: Textmodifier
kind: Method
lastModified: 2026-06-09
---

[textmode.js](../../../index.md) / [Textmodifier](../../Textmodifier.md) / keyTyped

# Method: keyTyped()

```ts
keyTyped(callback): void;
```

Register the single-callback handler for printable character input.

This only fires for keys that produce character input, such as letters, numbers,
punctuation, and space. It does not fire for modifier keys or control-key chords.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`KeyboardEventHandler`](../../../namespaces/input/namespaces/keyboard/type-aliases/KeyboardEventHandler.md) | Handler to run with keyboard event data when a printable character is typed. |

## Returns

`void`

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="keyTyped" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CglwaXhlbERlbnNpdHk6IDEsCgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCWZvbnRTaXplOiAxNiwKfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CgpsZXQgdHlwZWQgPSAnJzsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKdC5rZXlUeXBlZCgoZGF0YSkgPT4gewoJdHlwZWQgPSAodHlwZWQgKyAoZGF0YS5rZXkgfHwgJycpKS5zbGljZSgtMTYpOwp9KTsKCnQuZHJhdygoKSA9PiB7Cgl0LmJhY2tncm91bmQoNiwgMTAsIDIyKTsKCWZvciAobGV0IGkgPSAwOyBpIDwgdHlwZWQubGVuZ3RoOyBpKyspIHsKCQl0LnB1c2goKTsKCQl0LnRyYW5zbGF0ZShpIC0gdHlwZWQubGVuZ3RoIC8gMiwgMCk7CgkJdC5jaGFyKHR5cGVkW2ldKTsKCQl0LmNoYXJDb2xvcigyNTUsIDIxMCwgMTIwKTsKCQl0LnBvaW50KCk7CgkJdC5wb3AoKTsKCX0KfSk7CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoJZHJhd1RleHQoJ1RFWFRNT0RJRklFUi5LRVlUWVBFRCcsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0NPTkNFUFQ6IFBSSU5UQUJMRSBJTlBVVCcsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnQ29sbGVjdHMgdHlwZWQgY2hhcmFjdGVycy4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJ0J1ZmZlciBrZWVwcyB0aGUgbGFzdCAxNi4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KCdURVhUOiAnICsgdHlwZWQuc2xpY2UoLTIwKSwgeCwgeSsrLCAxNDAsIDI1NSwgMTgwKTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />
