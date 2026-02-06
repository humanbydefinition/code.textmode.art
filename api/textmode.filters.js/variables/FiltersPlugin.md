---
title: FiltersPlugin
description: GPU-accelerated image filters plugin for textmode.js.
category: Variables
api: true
kind: Variable
lastModified: 2026-02-06
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

```javascript
import { textmode } from 'textmode.js';
import { FiltersPlugin } from 'textmode.filters.js';

const t = textmode.create({
    plugins: [FiltersPlugin]
});

let frame = 0;
t.draw(() => {
    // Simple filter with shorthand value
    t.layers.base.filter('brightness', 1.2);

    // Filter with options object
    t.layers.base.filter('bloom', {
        threshold: 0.5,
        intensity: 1.5,
        radius: 8
    });

    // Animated filter
    t.layers.base.filter('filmGrain', {
        intensity: 0.2,
        time: frame * 0.016
    });

    t.background(0);
    frame++;
});
```
