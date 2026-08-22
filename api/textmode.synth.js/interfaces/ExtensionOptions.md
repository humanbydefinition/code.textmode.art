---
layout: doc
editLink: false
title: ExtensionOptions
description: Options controlling a single or batch registration.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-08-22
isInterface: true
---

[textmode.synth.js](../index.md) / ExtensionOptions

# Interface: ExtensionOptions

Options controlling a single or batch registration.


## Properties

| Property | Modifier | Type | Description |
| ------ | ------ | ------ | ------ |
| <a id="property-conflict"></a> `conflict?` | `readonly` | `"replace"` \| `"error"` | Conflict policy when a public name is already registered. |
| <a id="property-exposeglobal"></a> `exposeGlobal?` | `readonly` | `boolean` \| `"auto"` | Whether a `src`-type definition is exposed as a browser global. `'auto'` exposes only when a browser global object exists. |
