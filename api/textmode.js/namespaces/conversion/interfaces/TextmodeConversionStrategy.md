---
layout: doc
editLink: true
title: TextmodeConversionStrategy
description: Interface for defining a custom textmode conversion strategy.
category: Interfaces
api: true
namespace: conversion
kind: Interface
lastModified: 2026-06-07
isInterface: true
---

[textmode.js](../../../index.md) / [conversion](../index.md) / TextmodeConversionStrategy

# Interface: TextmodeConversionStrategy

Interface for defining a custom textmode conversion strategy.

A conversion strategy defines how a source image is converted into textmode attributes
(glyph index, charColor, cellColor) via a custom shader.

To register a custom strategy, implement this interface and pass it to [TextmodeConversionManager.register](../classes/TextmodeConversionManager/methods/register.md).

## Properties

| Property | Description |
| ------ | ------ |
| [id](TextmodeConversionStrategy/properties/id.md) | Unique identifier for this conversion strategy. This ID is used to select the strategy via [TextmodeSource.conversionMode](../../media/classes/TextmodeSource/methods/conversionMode.md). |

## Methods

| Method | Description |
| ------ | ------ |
| [createShader](TextmodeConversionStrategy/methods/createShader.md) | Create the shader program for this conversion strategy. Called once when the strategy is first used for a given source. |
| [createUniforms](TextmodeConversionStrategy/methods/createUniforms.md) | Create uniform values for this conversion strategy. Called every frame before rendering the conversion pass. |
