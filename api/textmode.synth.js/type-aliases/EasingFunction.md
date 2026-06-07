---
layout: doc
editLink: true
title: EasingFunction
description: Easing functions from
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-06-07
---

[textmode.synth.js](../index.md) / EasingFunction

# Type Alias: EasingFunction

```ts
type EasingFunction = keyof typeof EASING_FUNCTIONS | ((t) => number);
```

Easing functions from https://gist.github.com/gre/1650294

Available easing functions: `'linear'`, `'easeInQuad'`, `'easeOutQuad'`, `'easeInOutQuad'`,
`'easeInCubic'`, `'easeOutCubic'`, `'easeInOutCubic'`, `'easeInQuart'`, `'easeOutQuart'`,
`'easeInOutQuart'`, `'easeInQuint'`, `'easeOutQuint'`, `'easeInOutQuint'`, `'sin'`

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="EasingFunction" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7Cgl3aWR0aDogd2luZG93LmlubmVyV2lkdGgsCgloZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwKCXBsdWdpbnM6IFtTeW50aFBsdWdpbl0sCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwoKZnVuY3Rpb24gZHJhd0V4YW1wbGVMYWJlbCh0ZXh0LCBjb2wsIHJvdywgY29sb3IgPSAnI2ZmZmZmZicpIHsKCXQuY29sb3IoY29sb3IpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5wcmludCh0ZXh0LCBjb2wsIHJvdyk7Cn0KCmZ1bmN0aW9uIGRyYXdFeGFtcGxlTGFiZWxzKCkgewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoKCWRyYXdFeGFtcGxlTGFiZWwoJ0Vhc2luZ0Z1bmN0aW9uLmVhc2luZ0Z1bmN0aW9uJywgbGVmdCArIDEsIHRvcCArIDEpOwp9CgpsYWJlbExheWVyLmRyYXcoZHJhd0V4YW1wbGVMYWJlbHMpOwoKdC5sYXllcnMuYmFzZS5zeW50aChzaGFwZSg0KS5yb3RhdGUoWy0xLjUsIDEuNV0uZWFzZSgnZWFzZUluT3V0Q3ViaWMnKSkpOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />
