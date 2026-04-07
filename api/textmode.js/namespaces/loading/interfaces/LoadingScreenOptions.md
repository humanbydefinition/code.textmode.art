---
layout: doc
editLink: true
title: LoadingScreenOptions
description: Options for configuring the loading screen.
category: Interfaces
api: true
namespace: loading
kind: Interface
lastModified: 2026-04-07
isInterface: true
---

[textmode.js](../../../index.md) / [loading](../index.md) / LoadingScreenOptions

# Interface: LoadingScreenOptions

Options for configuring the loading screen.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="transition"></a> `transition?` | `"none"` \| `"fade"` | Transition mode for loading completion. Default is `'fade'`. Use `'none'` to skip the fade (treated as `transitionDuration: 0`). |
| <a id="transitionduration"></a> `transitionDuration?` | `number` | Fade duration in milliseconds. Default is `500`. |
