---
layout: doc
editLink: true
title: TextmodePlugin
description: A plugin interface for extending the functionality of a Textmodifier instance.
category: Interfaces
api: true
namespace: plugins
kind: Interface
lastModified: 2026-06-08
isInterface: true
---

[textmode.js](../../../index.md) / [plugins](../index.md) / TextmodePlugin

# Interface: TextmodePlugin

A plugin interface for extending the functionality of a [Textmodifier](../../../classes/Textmodifier.md) instance.

Create plugins by implementing this interface.

## Properties

| Property | Description |
| ------ | ------ |
| [name](TextmodePlugin/properties/name.md) | Unique name for the plugin. |
| [version](TextmodePlugin/properties/version.md) | Version string for the plugin. |

## Methods

| Method | Description |
| ------ | ------ |
| [install](TextmodePlugin/methods/install.md) | Called when the plugin is installed on a [Textmodifier](../../../classes/Textmodifier.md) instance. |
| [uninstall](TextmodePlugin/methods/uninstall.md) | Called when the plugin is uninstalled from a [Textmodifier](../../../classes/Textmodifier.md) instance. |
