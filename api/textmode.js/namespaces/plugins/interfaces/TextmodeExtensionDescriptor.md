---
layout: doc
editLink: false
title: TextmodeExtensionDescriptor
description: Descriptor for a plugin-provided method or accessor.
category: Interfaces
api: true
namespace: plugins
kind: Interface
lastModified: 2026-08-17
isInterface: true
---

[textmode.js](../../../index.md) / [plugins](../index.md) / TextmodeExtensionDescriptor

# Interface: TextmodeExtensionDescriptor\<TInstance\>

Descriptor for a plugin-provided method or accessor.


## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TInstance` *extends* `object` | `object` |

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-get"></a> `get?` | (`this`) => `unknown` | Accessor getter. Mutually exclusive with `value`. |
| <a id="property-set"></a> `set?` | (`this`, `value`) => `void` | Accessor setter. Mutually exclusive with `value`. |
| <a id="property-value"></a> `value?` | (`this`, ...`args`) => `unknown` | Method implementation. Mutually exclusive with `get` and `set`. |
