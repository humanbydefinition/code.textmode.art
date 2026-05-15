---
layout: doc
editLink: true
title: ErrorScreenRendererContext
description: Context object passed to error renderer callbacks.
category: Interfaces
api: true
kind: Interface
lastModified: 2026-05-15
isInterface: true
---

[textmode.js](../index.md) / ErrorScreenRendererContext

# Interface: ErrorScreenRendererContext

Context object passed to error renderer callbacks.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-errordetails"></a> `errorDetails?` | `string` | Optional error details (for example stack trace). |
| <a id="property-errormessage"></a> `errorMessage` | `string` | Primary error message shown on screen. |
| <a id="property-errortitle"></a> `errorTitle` | `string` | Error title, usually derived from the error name. |
| <a id="property-grid"></a> `grid` | [`TextmodeGrid`](../classes/TextmodeGrid.md) | Grid metadata for positioning. |
| <a id="property-textmodifier"></a> `textmodifier` | [`Textmodifier`](../classes/Textmodifier.md) | The Textmodifier instance for rendering text and graphics. |
