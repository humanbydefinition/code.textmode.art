---
layout: doc
editLink: false
title: VideoQuality
description: Video compression policy passed to Mediabunny.
category: Type Aliases
api: true
kind: TypeAlias
ecosystem: textmode.js
lastModified: 2026-08-24
---

[textmode.export.js](../index.md) / VideoQuality

# Type Alias: VideoQuality

```ts
type VideoQuality = 
  | VideoQualityLevel
  | {
  bitrate: number;
  bitrateMode?: VideoBitrateMode;
};
```

Video compression policy passed to Mediabunny.

Use a named [VideoQualityLevel](VideoQualityLevel.md) for content-dependent qualitative encoding. Use the object form to request a
positive target bitrate in bits per second and, optionally, constant or variable allocation. When `bitrateMode` is
omitted, Mediabunny defaults bitrate-based encoding to `'variable'`. A target bitrate guides the encoder but does
not guarantee an exact final file size.

## Examples

**Named qualitative quality**

```ts
await t.saveVideo({ quality: 'very-high' });
```

**Target bitrate with constant allocation**

```ts
await t.saveVideo({ quality: { bitrate: 8_000_000, bitrateMode: 'constant' } });
```

