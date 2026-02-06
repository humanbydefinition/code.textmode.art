---
layout: doc
editLink: true
title: TextmodePlugin
description: A plugin interface for extending the functionality of a Textmodifier instance.
category: Interfaces
api: true
namespace: plugins
kind: Interface
lastModified: 2026-02-06
isInterface: true
---

[textmode.js](../../../index.md) / [plugins](../index.md) / TextmodePlugin

# Interface: TextmodePlugin

A plugin interface for extending the functionality of a [Textmodifier](../../../classes/Textmodifier.md) instance.

Create plugins by implementing this interface.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | Unique name for the plugin. |
| <a id="version"></a> `version?` | `string` | Version string for the plugin. |

## Methods

### install()

```ts
install(textmodifier, api): void | Promise<void>;
```

Called when the plugin is installed on a [Textmodifier](../../../classes/Textmodifier.md) instance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `textmodifier` | [`Textmodifier`](../../../classes/Textmodifier.md) | The Textmodifier instance the plugin is being installed on. |
| `api` | [`TextmodePluginAPI`](TextmodePluginAPI.md) | An API object providing access to the Textmodifier's context and hook registration methods. |

#### Returns

`void` \| `Promise`\<`void`\>

***

### uninstall()?

```ts
optional uninstall(textmodifier, api): void | Promise<void>;
```

Called when the plugin is uninstalled from a [Textmodifier](../../../classes/Textmodifier.md) instance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `textmodifier` | [`Textmodifier`](../../../classes/Textmodifier.md) | The Textmodifier instance the plugin is being uninstalled from. |
| `api` | [`TextmodePluginAPI`](TextmodePluginAPI.md) | An API object providing access to the Textmodifier's context and hook registration methods. |

#### Returns

`void` \| `Promise`\<`void`\>
