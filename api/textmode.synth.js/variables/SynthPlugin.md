---
layout: doc
editLink: false
title: SynthPlugin
description: textmode.synth.js plugin for textmode.js.
category: Variables
api: true
kind: Variable
ecosystem: textmode.js
lastModified: 2026-08-24
---

[textmode.synth.js](../index.md) / SynthPlugin

# Variable: SynthPlugin

```ts
const SynthPlugin: TextmodePlugin;
```

textmode.synth.js plugin for textmode.js.

Adds procedural synthesis to TextmodeLayer instances through the
native textmode.js plugin system. Layer extensions (`synth`, `clearSynth`,
`bpm`) and Textmodifier extensions (`synth`, `bpm`, `seed`) are registered
via TextmodePluginContext.defineExtension, so the host owns their
cleanup when the plugin is removed.

