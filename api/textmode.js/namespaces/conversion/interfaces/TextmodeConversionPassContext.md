---
layout: doc
editLink: true
title: TextmodeConversionPassContext
description: Metadata describing the active pass while a conversion stack is being rendered.
category: Interfaces
api: true
namespace: conversion
kind: Interface
lastModified: 2026-05-19
isInterface: true
---

[textmode.js](../../../index.md) / [conversion](../index.md) / TextmodeConversionPassContext

# Interface: TextmodeConversionPassContext

Metadata describing the active pass while a conversion stack is being rendered.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-count"></a> `count` | `number` | Total number of passes in the active stack. |
| <a id="property-index"></a> `index` | `number` | Zero-based index of the active pass. |
| <a id="property-mode"></a> `mode` | `string` | Conversion mode being rendered for this pass. |
| <a id="property-options"></a> `options` | [`TextmodeConversionStepOptions`](../type-aliases/TextmodeConversionStepOptions.md) | Strategy-specific options for this pass. |
