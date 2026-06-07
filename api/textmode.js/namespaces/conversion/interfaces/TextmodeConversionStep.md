---
layout: doc
editLink: true
title: TextmodeConversionStep
description: One pass in a source-level conversion stack.
category: Interfaces
api: true
namespace: conversion
kind: Interface
lastModified: 2026-06-07
isInterface: true
---

[textmode.js](../../../index.md) / [conversion](../index.md) / TextmodeConversionStep

# Interface: TextmodeConversionStep

One pass in a source-level conversion stack.

## Properties

| Property | Description |
| ------ | ------ |
| [brightnessEnd](TextmodeConversionStep/properties/brightnessEnd.md) | Maximum captured brightness for this pass in byte-space (0-255). Requires brightnessStart. |
| [brightnessStart](TextmodeConversionStep/properties/brightnessStart.md) | Minimum captured brightness for this pass in byte-space (0-255). Requires brightnessEnd. |
| [cellColor](TextmodeConversionStep/properties/cellColor.md) | Fixed cell color for this pass. |
| [cellColorMode](TextmodeConversionStep/properties/cellColorMode.md) | Cell color mode for this pass. |
| [characters](TextmodeConversionStep/properties/characters.md) | Characters used by this pass when the strategy maps through a character palette. |
| [charColor](TextmodeConversionStep/properties/charColor.md) | Fixed character color for this pass. |
| [charColorMode](TextmodeConversionStep/properties/charColorMode.md) | Character color mode for this pass. |
| [charRotation](TextmodeConversionStep/properties/charRotation.md) | Character rotation in degrees for this pass. |
| [flipX](TextmodeConversionStep/properties/flipX.md) | Flip characters horizontally for this pass. |
| [flipY](TextmodeConversionStep/properties/flipY.md) | Flip characters vertically for this pass. |
| [invert](TextmodeConversionStep/properties/invert.md) | Invert character/cell colors for this pass. |
| [mode](TextmodeConversionStep/properties/mode.md) | Conversion mode to run for this pass. |
| [options](TextmodeConversionStep/properties/options.md) | Strategy-specific options for this pass. |
