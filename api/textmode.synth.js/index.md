---
layout: doc
editLink: false
title: textmode.synth.js
description: Synth engine for textmode.js
category: API Reference
api: true
kind: Project
ecosystem: textmode.js
lastModified: 2026-08-05
---

# textmode.synth.js

Create shader-backed, live-coded textmode scenes by composing generators and
transforms into a [SynthSource](classes/SynthSource.md) chain.

## Sketch workflow

1. Add [SynthPlugin](variables/SynthPlugin.md) to the sketch's plugins.
2. Start a chain with a source generator such as [noise](functions/noise.md) or [osc](functions/osc.md).
3. Shape it with coordinate, color, combination, and modulation transforms.
4. Route the result to character, foreground-color, and cell-color channels
   with [char](functions/char.md), [charColor](functions/charColor.md), [cellColor](functions/cellColor.md), and [paint](functions/paint.md).
5. Apply the completed chain with `t.synth(source)`.

Use [src](functions/src.md) for feedback, layer, image, or video sampling. Parameters
accept values, callbacks that receive [SynthContext](interfaces/SynthContext.md), or modulated
arrays for time-based motion.

## Origins

textmode.synth.js adapts the compositional approach of
[hydra-synth](https://github.com/hydra-synth/hydra-synth) by
[Olivia Jack](https://github.com/ojack) for the
[textmode.js](https://github.com/humanbydefinition/textmode.js) ecosystem.

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="textmode.synth.js" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CiAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLAogIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LAogIHBsdWdpbnM6IFtTeW50aFBsdWdpbl0KfSk7Cgpjb25zdCBzeW50aCA9IG5vaXNlKDgpCiAgLnJvdGF0ZSgwLjIpCiAgLmthbGVpZCg1KQogIC5jaGFyQ29sb3Iob3NjKDYsIDAuMSwgMS4yKSkKICAuY2VsbENvbG9yKG9zYyg2LCAwLjEsIDEuMikuaW52ZXJ0KCkpCiAgLmNoYXJNYXAoJ0AjJSorPS06LiAnKTsKCnQuc3ludGgoc3ludGgpOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKICB0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTsKfSk7" />

## Live-Coding Errors

Hooks for reporting invalid or failed dynamic parameter evaluation without stopping rendering.

| Name | Description |
| ------ | ------ |
| [DynamicErrorCallback](type-aliases/DynamicErrorCallback.md) | Callback signature for dynamic parameter evaluation errors. Live coding environments can use this to display errors without interrupting rendering. |
| [setGlobalErrorCallback](functions/setGlobalErrorCallback.md) | Set a global error callback for dynamic parameter evaluation errors. |

## Output Channels

Functions that route synthesized values to characters, foreground colors, and cell colors.

| Function | Description |
| ------ | ------ |
| [cellColor](functions/cellColor.md) | Create a synth source with cell background color defined. |
| [char](functions/char.md) | Create a character source from any color/pattern source. |
| [charColor](functions/charColor.md) | Create a synth source with character foreground color defined. |
| [paint](functions/paint.md) | Create a synth source with both character and cell colors defined. |

## Parameter Modulation

Values, callbacks, context, easing, and arrays for time-varying synth parameters.

| Name | Description |
| ------ | ------ |
| [ModulatedArray](interfaces/ModulatedArray.md) | Extended array interface with modulation methods. |
| [SynthContext](interfaces/SynthContext.md) | Context passed to dynamic parameter functions during rendering. |
| [EasingFunction](type-aliases/EasingFunction.md) | Easing functions from https://gist.github.com/gre/1650294 |
| [SynthParameterValue](type-aliases/SynthParameterValue.md) | Dynamic parameter value types supported by the synth system. |
| [EASING\_FUNCTIONS](variables/EASING_FUNCTIONS.md) | Easing functions from https://gist.github.com/gre/1650294 |

## Sources & Sampling

Functions that start a chain from procedural patterns, feedback, layers, or media.

| Function | Description |
| ------ | ------ |
| [gradient](functions/gradient.md) | Generate a rotating radial gradient. |
| [moire](functions/moire.md) | Generate moire interference patterns. |
| [noise](functions/noise.md) | Generate Perlin noise patterns. |
| [osc](functions/osc.md) | Generate oscillating patterns using sine waves. |
| [plasma](functions/plasma.md) | Generate plasma-like sine field patterns. |
| [shape](functions/shape.md) | Generate geometric shapes (polygons). |
| [solid](functions/solid.md) | Generate a solid grayscale color. |
| [src](functions/src.md) | Sample a source for synth compositions. |
| [voronoi](functions/voronoi.md) | Generate voronoi patterns. |

## Synthesis Chains

The chainable source object that records transforms for shader compilation.

| Class | Description |
| ------ | ------ |
| [SynthSource](classes/SynthSource.md) | A chainable synthesis source that accumulates transforms to be compiled into a shader. |

## Workflow

The plugin that enables synthesis on textmode.js layers.

| Variable | Description |
| ------ | ------ |
| [SynthPlugin](variables/SynthPlugin.md) | The `textmode.synth.js` plugin to install. |
