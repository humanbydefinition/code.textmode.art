---
layout: doc
editLink: true
title: FiltersPlugin
description: GPU-accelerated image filters plugin for textmode.js.
category: Variables
api: true
kind: Variable
ecosystem: textmode.js
lastModified: 2026-05-15
---

[textmode.filters.js](../index.md) / FiltersPlugin

# Variable: FiltersPlugin

```ts
const FiltersPlugin: TextmodePlugin;
```

GPU-accelerated image filters plugin for textmode.js.

Add this plugin to your textmode.js instance to enable additional customizable
visual effects that run entirely on the GPU via WebGL2 fragment shaders.

## Example

<TextmodeApiSandbox profile="textmode.filters.js" language="javascript" title="FiltersPlugin" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CiAgICBwbHVnaW5zOiBbRmlsdGVyc1BsdWdpbl0KfSk7CgpsZXQgZnJhbWUgPSAwOwp0LmRyYXcoKCkgPT4gewogICAgLy8gU2ltcGxlIGZpbHRlciB3aXRoIHNob3J0aGFuZCB2YWx1ZQogICAgdC5sYXllcnMuYmFzZS5maWx0ZXIoJ2JyaWdodG5lc3MnLCAxLjIpOwoKICAgIC8vIEZpbHRlciB3aXRoIG9wdGlvbnMgb2JqZWN0CiAgICB0LmxheWVycy5iYXNlLmZpbHRlcignYmxvb20nLCB7CiAgICAgICAgdGhyZXNob2xkOiAwLjUsCiAgICAgICAgaW50ZW5zaXR5OiAxLjUsCiAgICAgICAgcmFkaXVzOiA4CiAgICB9KTsKCiAgICAvLyBBbmltYXRlZCBmaWx0ZXIKICAgIHQubGF5ZXJzLmJhc2UuZmlsdGVyKCdmaWxtR3JhaW4nLCB7CiAgICAgICAgaW50ZW5zaXR5OiAwLjIsCiAgICAgICAgdGltZTogZnJhbWUgKiAwLjAxNgogICAgfSk7CgogICAgdC5iYWNrZ3JvdW5kKDApOwogICAgZnJhbWUrKzsKfSk7" />
