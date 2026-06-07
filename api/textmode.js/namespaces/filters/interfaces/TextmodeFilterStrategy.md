---
layout: doc
editLink: true
title: TextmodeFilterStrategy
description: Interface for implementing custom filter strategies.
category: Interfaces
api: true
namespace: filters
kind: Interface
lastModified: 2026-06-07
isInterface: true
---

[textmode.js](../../../index.md) / [filters](../index.md) / TextmodeFilterStrategy

# Interface: TextmodeFilterStrategy\<TParams\>

Interface for implementing custom filter strategies.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TParams` | `unknown` |

## Properties

| Property | Description |
| ------ | ------ |
| [id](TextmodeFilterStrategy/properties/id.md) | Unique identifier for this filter |

## Methods

| Method | Description |
| ------ | ------ |
| [createShader](TextmodeFilterStrategy/methods/createShader.md) | Create the shader program for this filter. Called once when the filter is first used (lazy initialization). |
| [createUniforms](TextmodeFilterStrategy/methods/createUniforms.md) | Create uniform values for this filter based on user parameters. Called each time the filter is applied. |
