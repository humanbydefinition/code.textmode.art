---
layout: doc
editLink: false
title: TextmodeFilterManager
description: Registers filter shaders and applies layer/global filter chains.
category: Classes
api: true
namespace: filters
kind: Class
lastModified: 2026-08-05
hasConstructor: false
---

[textmode.js](../../../index.md) / [filters](../index.md) / TextmodeFilterManager

# Class: TextmodeFilterManager

Registers filter shaders and applies layer/global filter chains.

## Example

```ts
// Register a custom filter
await t.filters.register('brightness', brightnessShader, {
    u_amount: ['amount', 1.0]
});

// Use the filter globally
t.filter('brightness', 1.5);

// Or on a layer
t.layers.base.filter('brightness', { amount: 0.8 });
```


## Methods

### has()

```ts
has(id): boolean;
```

Check if a filter with the given ID is registered.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The filter ID to check |

#### Returns

`boolean`

true if the filter exists

#### Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="TextmodeFilterManager" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7IHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CmxldCBoYXNDdXN0b20gPSBmYWxzZTsKCnQuc2V0dXAoYXN5bmMgKCkgPT4gewoJY29uc3QgZnJhZ21lbnQgPSBgI3ZlcnNpb24gMzAwIGVzCgkJcHJlY2lzaW9uIGhpZ2hwIGZsb2F0OwoJCWluIHZlYzIgdl91djsKCQl1bmlmb3JtIHNhbXBsZXIyRCB1X3NyYzsKCQlvdXQgdmVjNCBvdXRDb2xvcjsKCQl2b2lkIG1haW4oKSB7CgkJCW91dENvbG9yID0gdGV4dHVyZSh1X3NyYywgdl91dik7CgkJfQoJYDsKCglhd2FpdCB0LmZpbHRlcnMucmVnaXN0ZXIoJ2N1c3RvbS1ub29wJywgZnJhZ21lbnQsIHt9KTsKfSk7Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDYsIDksIDIwKTsKCgloYXNDdXN0b20gPSB0LmZpbHRlcnMuaGFzKCdjdXN0b20tbm9vcCcpOwoKCXQucHVzaCgpOwoJdC5jaGFyKCcjJyk7Cgl0LnJvdGF0ZVoodC5mcmFtZUNvdW50ICogMS41KTsKCXQuY2hhckNvbG9yKDI1NSwgMjIwLCAxMjApOwoJdC5yZWN0KDEyLCAxMik7Cgl0LnBvcCgpOwp9KTsKCnQubW91c2VDbGlja2VkKGFzeW5jICgpID0-IHsKCWlmIChoYXNDdXN0b20pIHsKCQl0LmZpbHRlcnMudW5yZWdpc3RlcignY3VzdG9tLW5vb3AnKTsKCX0gZWxzZSB7CgkJY29uc3QgZnJhZ21lbnQgPSBgI3ZlcnNpb24gMzAwIGVzCgkJCXByZWNpc2lvbiBoaWdocCBmbG9hdDsKCQkJaW4gdmVjMiB2X3V2OwoJCQl1bmlmb3JtIHNhbXBsZXIyRCB1X3NyYzsKCQkJb3V0IHZlYzQgb3V0Q29sb3I7CgkJCXZvaWQgbWFpbigpIHsKCQkJCW91dENvbG9yID0gdGV4dHVyZSh1X3NyYywgdl91dik7CgkJCX0KCQlgOwoJCWF3YWl0IHQuZmlsdGVycy5yZWdpc3RlcignY3VzdG9tLW5vb3AnLCBmcmFnbWVudCwge30pOwoJfQp9KTsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCgljb25zdCBpc0ludmVydCA9IHQuZmlsdGVycy5oYXMoJ2ludmVydCcpOwoKCWRyYXdUZXh0KCdGSUxURVJTLkhBUycsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0NPTkNFUFQ6IENIRUNLIFJFR0lTVEVSRUQgRklMVEVSJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdQZXJmb3JtcyBsb29rdXAgaW4gZmlsdGVyIHJlZ2lzdHJ5LicsIHgsIHkrKywgMTQwLCAxNjAsIDE5MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoYGhhcygnaW52ZXJ0JykgICAgIDogJHtpc0ludmVydH1gLCB4LCB5KyssIDE4MCwgMjU1LCAxODApOwoJZHJhd1RleHQoCgkJYGhhcygnY3VzdG9tLW5vb3AnKTogJHtoYXNDdXN0b219YCwKCQl4LAoJCXkrKywKCQloYXNDdXN0b20gPyAxODAgOiAyNTUsCgkJaGFzQ3VzdG9tID8gMjU1IDogMTIwLAoJCWhhc0N1c3RvbSA_IDE4MCA6IDEyMAoJKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dChoYXNDdXN0b20gPyAnQ2xpY2sgdG8gdW5yZWdpc3Rlci4nIDogJ0NsaWNrIHRvIHJlZ2lzdGVyIGN1c3RvbS1ub29wLicsIHgsIHkrKywgMTIwLCAyMDUsIDI1NSk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />

***

### register()

```ts
register(
   id, 
   shader, 
uniformDefs?): Promise<void>;
```

Register a custom filter with the given ID, shader, and uniform definitions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | Unique filter identifier |
| `shader` | `string` \| [`TextmodeShader`](../../../classes/TextmodeShader.md) | Pre-compiled GLShader, fragment shader source string, or path to a .frag/.glsl file |
| `uniformDefs` | [`TextmodeFilterUniformDefinitions`](../type-aliases/TextmodeFilterUniformDefinitions.md) | Maps uniform names to [paramName, defaultValue] tuples |

#### Returns

`Promise`\<`void`\>

#### Example

```ts
// Register with inline shader source
await t.filters.register('blur', blurFragSource, {
    u_radius: ['radius', 5.0],
    u_direction: ['direction', [1.0, 0.0]]
});

// Register with file path
await t.filters.register('vignette', './vignette.frag', {
    u_intensity: ['intensity', 0.5]
});
```


***

### unregister()

```ts
unregister(id): boolean;
```

Unregister a filter by its ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The filter ID to unregister |

#### Returns

`boolean`

true if the filter was unregistered, false if it wasn't found

#### Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="TextmodeFilterManager" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7IHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgfSk7Cgpjb25zdCBsYWJlbExheWVyID0gdC5sYXllcnMuYWRkKCk7CmxldCBmaWx0ZXJBY3RpdmUgPSBmYWxzZTsKCnQuc2V0dXAoYXN5bmMgKCkgPT4gewoJY29uc3QgZnJhZ21lbnQgPSBgI3ZlcnNpb24gMzAwIGVzCgkJcHJlY2lzaW9uIGhpZ2hwIGZsb2F0OwoJCWluIHZlYzIgdl91djsKCQl1bmlmb3JtIHNhbXBsZXIyRCB1X3NyYzsKCQlvdXQgdmVjNCBvdXRDb2xvcjsKCQl2b2lkIG1haW4oKSB7CgkJCXZlYzQgY29sID0gdGV4dHVyZSh1X3NyYywgdl91dik7CgkJCW91dENvbG9yID0gdmVjNChjb2wuciAqIDAuMSwgY29sLmcgKiAxLjUsIGNvbC5iICogMC4yLCBjb2wuYSk7CgkJfQoJYDsKCglhd2FpdCB0LmZpbHRlcnMucmVnaXN0ZXIoJ2dyZWVuLXdhc2gnLCBmcmFnbWVudCwge30pOwoJZmlsdGVyQWN0aXZlID0gdHJ1ZTsKfSk7Cgp0LmRyYXcoKCkgPT4gewoJdC5iYWNrZ3JvdW5kKDYsIDksIDIwKTsKCgl0LnB1c2goKTsKCXQuY2hhcignIycpOwoJdC5yb3RhdGVaKHQuZnJhbWVDb3VudCAqIDEuMik7Cgl0LmNoYXJDb2xvcigyNTUsIDIyMCwgMTIwKTsKCXQucmVjdCgxNCwgMTQpOwoJdC5wb3AoKTsKCglpZiAoZmlsdGVyQWN0aXZlICYmIHQuZmlsdGVycy5oYXMoJ2dyZWVuLXdhc2gnKSkgewoJCXQuZmlsdGVyKCdncmVlbi13YXNoJyk7Cgl9Cn0pOwoKdC5tb3VzZUNsaWNrZWQoKCkgPT4gewoJaWYgKCFmaWx0ZXJBY3RpdmUpIHJldHVybjsKCXQuZmlsdGVycy51bnJlZ2lzdGVyKCdncmVlbi13YXNoJyk7CglmaWx0ZXJBY3RpdmUgPSBmYWxzZTsKfSk7CgpmdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCB4LCB5LCByID0gMjIwLCBnID0gMjMwLCBiID0gMjU1KSB7Cgl0LnB1c2goKTsKCXQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTsKCXQuY2hhckNvbG9yKHIsIGcsIGIpOwoJdC5wcmludCh0ZXh0LCB4LCB5KTsKCXQucG9wKCk7Cn0KCmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7Cgl0LmNsZWFyKCk7Cgljb25zdCBsZWZ0ID0gLU1hdGguZmxvb3IodC5ncmlkLmNvbHMgLyAyKTsKCWNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7CglsZXQgeSA9IHRvcCArIDM7Cgljb25zdCB4ID0gbGVmdCArIDM7CgoJY29uc3Qgc3RhdGVTdHIgPSBmaWx0ZXJBY3RpdmUgPyAnQUNUSVZFJyA6ICdJTkFDVElWRSc7CgoJZHJhd1RleHQoJ0ZJTFRFUlMuVU5SRUdJU1RFUicsIHgsIHkrKywgMTAwLCAyNTUsIDE0MCk7CglkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApOwoJZHJhd1RleHQoJ0NPTkNFUFQ6IERJU1BPU0UgQ1VTVE9NIEZJTFRFUicsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7CglkcmF3VGV4dCgnUmVtb3ZlcyByZWdpc3RlcmVkIGN1c3RvbSBzaGFkZXIuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dChgRklMVEVSIFNUQVRFOiAke3N0YXRlU3RyfWAsIHgsIHkrKywgMTQwLCAxOTAsIDI1NSk7CglkcmF3VGV4dCgKCQlmaWx0ZXJBY3RpdmUgPyAnQ2xpY2sgdG8gdW5yZWdpc3RlciBncmVlbi13YXNoLicgOiAnRmlsdGVyIHVucmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHkuJywKCQl4LAoJCXkrKywKCQkxODAsCgkJMjU1LAoJCTE4MAoJKTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />

