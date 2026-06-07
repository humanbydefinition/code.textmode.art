---
layout: doc
editLink: true
title: TextmodeCamera
description: Mutable camera object used for p5-style camera workflows.
category: Classes
api: true
kind: Class
lastModified: 2026-06-07
hasConstructor: false
---

[textmode.js](../index.md) / TextmodeCamera

# Class: TextmodeCamera

Mutable camera object used for p5-style camera workflows.

Instances can be created with [Textmodifier.createCamera](Textmodifier/methods/createCamera.md) and activated with
[Textmodifier.setCamera](Textmodifier/methods/setCamera.md). Mutating the object does not affect rendering until
it is applied again with `setCamera`.

## Accessors

| Accessor | Description |
| ------ | ------ |
| [eyeX](TextmodeCamera/accessors/eyeX.md) | Current X position of the camera eye. |
| [eyeY](TextmodeCamera/accessors/eyeY.md) | Current Y position of the camera eye. |
| [eyeZ](TextmodeCamera/accessors/eyeZ.md) | Current Z position of the camera eye. |
| [targetX](TextmodeCamera/accessors/targetX.md) | Current X position of the camera target. |
| [targetY](TextmodeCamera/accessors/targetY.md) | Current Y position of the camera target. |
| [targetZ](TextmodeCamera/accessors/targetZ.md) | Current Z position of the camera target. |
| [upX](TextmodeCamera/accessors/upX.md) | Current X component of the camera up vector. |
| [upY](TextmodeCamera/accessors/upY.md) | Current Y component of the camera up vector. |
| [upZ](TextmodeCamera/accessors/upZ.md) | Current Z component of the camera up vector. |

## Methods

| Method | Description |
| ------ | ------ |
| [copy](TextmodeCamera/methods/copy.md) | Create a copy of this camera. |
| [lookAt](TextmodeCamera/methods/lookAt.md) | Set camera look-at target. |
| [move](TextmodeCamera/methods/move.md) | Move eye and target together in world space. |
| [setPosition](TextmodeCamera/methods/setPosition.md) | Set camera eye position. |
| [setUp](TextmodeCamera/methods/setUp.md) | Set camera up vector. |
