---
layout: doc
editLink: true
title: TextmodeFilterManager
description: Registers filter shaders and applies layer/global filter chains.
category: Classes
api: true
namespace: filters
kind: Class
lastModified: 2026-06-09
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

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="TextmodeFilterManager" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7IHBpeGVsRGVuc2l0eTogMSwgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB9KTsKCmNvbnN0IGxhYmVsTGF5ZXIgPSB0LmxheWVycy5hZGQoKTsKbGV0IGhhc0N1c3RvbSA9IGZhbHNlOwoKdC5zZXR1cChhc3luYyAoKSA9PiB7Cgljb25zdCBmcmFnbWVudCA9IGAjdmVyc2lvbiAzMDAgZXMKCQlwcmVjaXNpb24gaGlnaHAgZmxvYXQ7CgkJaW4gdmVjMiB2X3V2OwoJCXVuaWZvcm0gc2FtcGxlcjJEIHVfc3JjOwoJCW91dCB2ZWM0IG91dENvbG9yOwoJCXZvaWQgbWFpbigpIHsKCQkJb3V0Q29sb3IgPSB0ZXh0dXJlKHVfc3JjLCB2X3V2KTsKCQl9CglgOwoKCWF3YWl0IHQuZmlsdGVycy5yZWdpc3RlcignY3VzdG9tLW5vb3AnLCBmcmFnbWVudCwge30pOwp9KTsKCnQuZHJhdygoKSA9PiB7Cgl0LmJhY2tncm91bmQoNiwgOSwgMjApOwoKCWhhc0N1c3RvbSA9IHQuZmlsdGVycy5oYXMoJ2N1c3RvbS1ub29wJyk7CgoJdC5wdXNoKCk7Cgl0LmNoYXIoJyMnKTsKCXQucm90YXRlWih0LmZyYW1lQ291bnQgKiAxLjUpOwoJdC5jaGFyQ29sb3IoMjU1LCAyMjAsIDEyMCk7Cgl0LnJlY3QoMTIsIDEyKTsKCXQucG9wKCk7Cn0pOwoKdC5tb3VzZUNsaWNrZWQoYXN5bmMgKCkgPT4gewoJaWYgKGhhc0N1c3RvbSkgewoJCXQuZmlsdGVycy51bnJlZ2lzdGVyKCdjdXN0b20tbm9vcCcpOwoJfSBlbHNlIHsKCQljb25zdCBmcmFnbWVudCA9IGAjdmVyc2lvbiAzMDAgZXMKCQkJcHJlY2lzaW9uIGhpZ2hwIGZsb2F0OwoJCQlpbiB2ZWMyIHZfdXY7CgkJCXVuaWZvcm0gc2FtcGxlcjJEIHVfc3JjOwoJCQlvdXQgdmVjNCBvdXRDb2xvcjsKCQkJdm9pZCBtYWluKCkgewoJCQkJb3V0Q29sb3IgPSB0ZXh0dXJlKHVfc3JjLCB2X3V2KTsKCQkJfQoJCWA7CgkJYXdhaXQgdC5maWx0ZXJzLnJlZ2lzdGVyKCdjdXN0b20tbm9vcCcsIGZyYWdtZW50LCB7fSk7Cgl9Cn0pOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWNvbnN0IGlzSW52ZXJ0ID0gdC5maWx0ZXJzLmhhcygnaW52ZXJ0Jyk7CgoJZHJhd1RleHQoJ0ZJTFRFUlMuSEFTJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogQ0hFQ0sgUkVHSVNURVJFRCBGSUxURVInLCB4LCB5KyssIDEwMCwgMjIwLCAyNTUpOwoJZHJhd1RleHQoJ1BlcmZvcm1zIGxvb2t1cCBpbiBmaWx0ZXIgcmVnaXN0cnkuJywgeCwgeSsrLCAxNDAsIDE2MCwgMTkwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dChgaGFzKCdpbnZlcnQnKSAgICAgOiAke2lzSW52ZXJ0fWAsIHgsIHkrKywgMTgwLCAyNTUsIDE4MCk7CglkcmF3VGV4dCgKCQlgaGFzKCdjdXN0b20tbm9vcCcpOiAke2hhc0N1c3RvbX1gLAoJCXgsCgkJeSsrLAoJCWhhc0N1c3RvbSA_IDE4MCA6IDI1NSwKCQloYXNDdXN0b20gPyAyNTUgOiAxMjAsCgkJaGFzQ3VzdG9tID8gMTgwIDogMTIwCgkpOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KGhhc0N1c3RvbSA_ICdDbGljayB0byB1bnJlZ2lzdGVyLicgOiAnQ2xpY2sgdG8gcmVnaXN0ZXIgY3VzdG9tLW5vb3AuJywgeCwgeSsrLCAxMjAsIDIwNSwgMjU1KTsKfSk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewoJdC5yZXNpemVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7Cn0pOw" />

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

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="TextmodeFilterManager" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7IHBpeGVsRGVuc2l0eTogMSwgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB9KTsKCmNvbnN0IGxhYmVsTGF5ZXIgPSB0LmxheWVycy5hZGQoKTsKbGV0IGZpbHRlckFjdGl2ZSA9IGZhbHNlOwoKdC5zZXR1cChhc3luYyAoKSA9PiB7Cgljb25zdCBmcmFnbWVudCA9IGAjdmVyc2lvbiAzMDAgZXMKCQlwcmVjaXNpb24gaGlnaHAgZmxvYXQ7CgkJaW4gdmVjMiB2X3V2OwoJCXVuaWZvcm0gc2FtcGxlcjJEIHVfc3JjOwoJCW91dCB2ZWM0IG91dENvbG9yOwoJCXZvaWQgbWFpbigpIHsKCQkJdmVjNCBjb2wgPSB0ZXh0dXJlKHVfc3JjLCB2X3V2KTsKCQkJb3V0Q29sb3IgPSB2ZWM0KGNvbC5yICogMC4xLCBjb2wuZyAqIDEuNSwgY29sLmIgKiAwLjIsIGNvbC5hKTsKCQl9CglgOwoKCWF3YWl0IHQuZmlsdGVycy5yZWdpc3RlcignZ3JlZW4td2FzaCcsIGZyYWdtZW50LCB7fSk7CglmaWx0ZXJBY3RpdmUgPSB0cnVlOwp9KTsKCnQuZHJhdygoKSA9PiB7Cgl0LmJhY2tncm91bmQoNiwgOSwgMjApOwoKCXQucHVzaCgpOwoJdC5jaGFyKCcjJyk7Cgl0LnJvdGF0ZVoodC5mcmFtZUNvdW50ICogMS4yKTsKCXQuY2hhckNvbG9yKDI1NSwgMjIwLCAxMjApOwoJdC5yZWN0KDE0LCAxNCk7Cgl0LnBvcCgpOwoKCWlmIChmaWx0ZXJBY3RpdmUgJiYgdC5maWx0ZXJzLmhhcygnZ3JlZW4td2FzaCcpKSB7CgkJdC5maWx0ZXIoJ2dyZWVuLXdhc2gnKTsKCX0KfSk7Cgp0Lm1vdXNlQ2xpY2tlZCgoKSA9PiB7CglpZiAoIWZpbHRlckFjdGl2ZSkgcmV0dXJuOwoJdC5maWx0ZXJzLnVucmVnaXN0ZXIoJ2dyZWVuLXdhc2gnKTsKCWZpbHRlckFjdGl2ZSA9IGZhbHNlOwp9KTsKCmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHsKCXQucHVzaCgpOwoJdC5wcmludEFsaWduKCdsZWZ0JywgJ3RvcCcpOwoJdC5jaGFyQ29sb3IociwgZywgYik7Cgl0LnByaW50KHRleHQsIHgsIHkpOwoJdC5wb3AoKTsKfQoKbGFiZWxMYXllci5kcmF3KCgpID0-IHsKCXQuY2xlYXIoKTsKCWNvbnN0IGxlZnQgPSAtTWF0aC5mbG9vcih0LmdyaWQuY29scyAvIDIpOwoJY29uc3QgdG9wID0gLU1hdGguZmxvb3IodC5ncmlkLnJvd3MgLyAyKTsKCWxldCB5ID0gdG9wICsgMzsKCWNvbnN0IHggPSBsZWZ0ICsgMzsKCgljb25zdCBzdGF0ZVN0ciA9IGZpbHRlckFjdGl2ZSA_ICdBQ1RJVkUnIDogJ0lOQUNUSVZFJzsKCglkcmF3VGV4dCgnRklMVEVSUy5VTlJFR0lTVEVSJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogRElTUE9TRSBDVVNUT00gRklMVEVSJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdSZW1vdmVzIHJlZ2lzdGVyZWQgY3VzdG9tIHNoYWRlci4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KGBGSUxURVIgU1RBVEU6ICR7c3RhdGVTdHJ9YCwgeCwgeSsrLCAxNDAsIDE5MCwgMjU1KTsKCWRyYXdUZXh0KAoJCWZpbHRlckFjdGl2ZSA_ICdDbGljayB0byB1bnJlZ2lzdGVyIGdyZWVuLXdhc2guJyA6ICdGaWx0ZXIgdW5yZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseS4nLAoJCXgsCgkJeSsrLAoJCTE4MCwKCQkyNTUsCgkJMTgwCgkpOwp9KTsKCnQud2luZG93UmVzaXplZCgoKSA9PiB7Cgl0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />
