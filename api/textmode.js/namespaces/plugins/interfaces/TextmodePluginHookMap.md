---
layout: doc
editLink: false
title: TextmodePluginHookMap
description: Typed callback map used by TextmodePluginContext.on.
category: Interfaces
api: true
namespace: plugins
kind: Interface
lastModified: 2026-08-17
isInterface: true
---

[textmode.js](../../../index.md) / [plugins](../index.md) / TextmodePluginHookMap

# Interface: TextmodePluginHookMap

Typed callback map used by [TextmodePluginContext.on](TextmodePluginContext.md#on).


## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-compositeoutput"></a> `compositeOutput` | (`output`) => `void` \| [`TextmodeFramebuffer`](../../../classes/TextmodeFramebuffer.md) | Replaces composited scene output. **See** [API reference](https://code.textmode.art/api/textmode.js/namespaces/plugins/interfaces/TextmodePluginHookMap#property-compositeoutput) |
| <a id="property-layercreated"></a> `layerCreated` | (`layer`) => `void` | Runs for existing and future layers. **See** [API reference](https://code.textmode.art/api/textmode.js/namespaces/plugins/interfaces/TextmodePluginHookMap#property-layercreated) |
| <a id="property-layerdisposed"></a> `layerDisposed` | (`layer`) => `void` | Runs immediately before a plugin-visible base or user layer is disposed, including during host destruction. The layer's plugin extensions remain available while this callback runs. **See** [API reference](https://code.textmode.art/api/textmode.js/namespaces/plugins/interfaces/TextmodePluginHookMap#property-layerdisposed) |
| <a id="property-layeroutput"></a> `layerOutput` | (`context`) => `void` \| [`TextmodeFramebuffer`](../../../classes/TextmodeFramebuffer.md) | Replaces resolved or finalized layer output. **See** [API reference](https://code.textmode.art/api/textmode.js/namespaces/plugins/interfaces/TextmodePluginHookMap#property-layeroutput) |
| <a id="property-layerpostrender"></a> `layerPostRender` | (`layer`) => `void` | Runs after a visible layer's draw callback. **See** [API reference](https://code.textmode.art/api/textmode.js/namespaces/plugins/interfaces/TextmodePluginHookMap#property-layerpostrender) |
| <a id="property-layerprerender"></a> `layerPreRender` | (`layer`) => `void` | Runs before a visible layer's draw callback. **See** [API reference](https://code.textmode.art/api/textmode.js/namespaces/plugins/interfaces/TextmodePluginHookMap#property-layerprerender) |
| <a id="property-postdraw"></a> `postDraw` | () => `void` | Runs after presenting a user frame. **See** [API reference](https://code.textmode.art/api/textmode.js/namespaces/plugins/interfaces/TextmodePluginHookMap#property-postdraw) |
| <a id="property-postsetup"></a> `postSetup` | () => `void` \| `Promise`\<`void`\> | Runs after user setup and may be asynchronous. **See** [API reference](https://code.textmode.art/api/textmode.js/namespaces/plugins/interfaces/TextmodePluginHookMap#property-postsetup) |
| <a id="property-predraw"></a> `preDraw` | () => `void` | Runs before drawing a user frame. **See** [API reference](https://code.textmode.art/api/textmode.js/namespaces/plugins/interfaces/TextmodePluginHookMap#property-predraw) |
| <a id="property-presetup"></a> `preSetup` | () => `void` \| `Promise`\<`void`\> | Runs before user setup and may be asynchronous. **See** [API reference](https://code.textmode.art/api/textmode.js/namespaces/plugins/interfaces/TextmodePluginHookMap#property-presetup) |
