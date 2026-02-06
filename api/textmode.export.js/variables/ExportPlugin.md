---
title: ExportPlugin
description: Export plugin for textmode.js.
category: Variables
api: true
kind: Variable
ecosystem: textmode.js
lastModified: 2026-02-06
---

[textmode.export.js](../index.md) / ExportPlugin

# Variable: ExportPlugin

```ts
const ExportPlugin: TextmodePlugin;
```

Export plugin for textmode.js.

Add this plugin to your textmode.js instance to enable exporting artworks
as images, videos, SVG, and text files. Includes an overlay UI for quick
access to all export options, which can be controlled at runtime.

## Example

```js
import { textmode } from 'textmode.js';
import { ExportPlugin } from 'textmode.export.js';

const t = textmode.create({
    plugins: [ExportPlugin]
});

t.draw(() => {
    t.background(0);
    t.char('A');
    t.rotateZ(t.frameCount);
    t.rect(16, 16);
});

// Export methods are now available
t.saveCanvas({ format: 'png', scale: 2.0 });
t.saveSVG({ filename: 'my-artwork' });
t.saveGIF({ duration: 3, fps: 30 });

// Control overlay visibility at runtime
t.exportOverlay.hide();  // Hide the overlay
t.exportOverlay.show();  // Show the overlay
t.exportOverlay.toggle(); // Toggle visibility
```
