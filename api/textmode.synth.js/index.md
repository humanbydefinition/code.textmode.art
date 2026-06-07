---
layout: doc
editLink: true
title: textmode.synth.js
description: A derivative work of hydra-synth by Olivia Jack, adapted for the textmode.js ecosystem, providing a visual synthesis system for procedural generation of char...
category: API Reference
api: true
kind: Project
ecosystem: textmode.js
lastModified: 2026-06-07
---

# textmode.synth.js

A derivative work of [hydra-synth](https://github.com/hydra-synth/hydra-synth) by [Olivia Jack](https://github.com/ojack),
adapted for the [textmode.js](https://github.com/humanbydefinition/textmode.js) ecosystem, providing
a visual synthesis system for procedural generation of characters, colors,
and visual effects through method chaining.

## Example

<TextmodeApiSandbox profile="textmode.synth.js" encoded-files="W3siaW5mbyI6Imh0bWwgaW5kZXguaHRtbCBbaGlkZGVuXSBbcmVhZG9ubHldIiwiY29kZSI6IjwhRE9DVFlQRSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI-XG4gIDxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8-XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8dGl0bGU-dGV4dG1vZGUuc3ludGguanM8L3RpdGxlPlxuICAgIDxzdHlsZT5cbiAgICAgIGh0bWwsXG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgfVxuXG4gICAgICBjYW52YXMge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vdGV4dG1vZGUuanNAMC4xNi4wLWJldGEuMS9kaXN0L3RleHRtb2RlLnVtZC5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vdGV4dG1vZGUuc3ludGguanNAMS42LjAvZGlzdC90ZXh0bW9kZS5zeW50aC51bWQuanNcIj48L3NjcmlwdD5cbiAgPC9oZWFkPlxuICA8Ym9keT5cbiAgICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIiBzcmM9XCJza2V0Y2guanNcIj48L3NjcmlwdD5cbiAgPC9ib2R5PlxuPC9odG1sPiJ9LHsiaW5mbyI6ImpzIHNrZXRjaC5qcyBbYWN0aXZlXSIsImNvZGUiOiJjb25zdCB0ID0gdGV4dG1vZGUuY3JlYXRlKHtcbiAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgcGx1Z2luczogW1N5bnRoUGx1Z2luXVxufSk7XG5cbmNvbnN0IHN5bnRoID0gbm9pc2UoOClcbiAgLnJvdGF0ZSgwLjIpXG4gIC5rYWxlaWQoNSlcbiAgLmNoYXJDb2xvcihvc2MoNiwgMC4xLCAxLjIpKVxuICAuY2VsbENvbG9yKG9zYyg2LCAwLjEsIDEuMikuaW52ZXJ0KCkpXG4gIC5jaGFyTWFwKCdAIyUqKz0tOi4gJyk7XG5cbnQubGF5ZXJzLmJhc2Uuc3ludGgoc3ludGgpO1xuXG50LndpbmRvd1Jlc2l6ZWQoKCkgPT4ge1xuICB0LnJlc2l6ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbn0pOyJ9XQ" />

## Classes

| Class | Description |
| ------ | ------ |
| [SynthSource](classes/SynthSource.md) | A chainable synthesis source that accumulates transforms to be compiled into a shader. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [SynthContext](interfaces/SynthContext.md) | Context passed to dynamic parameter functions during rendering. |
| [ModulatedArray](interfaces/ModulatedArray.md) | Extended array interface with modulation methods. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [SynthParameterValue](type-aliases/SynthParameterValue.md) | Dynamic parameter value types supported by the synth system. |
| [EasingFunction](type-aliases/EasingFunction.md) | Easing functions from https://gist.github.com/gre/1650294 |
| [DynamicErrorCallback](type-aliases/DynamicErrorCallback.md) | Callback signature for dynamic parameter evaluation errors. Live coding environments can use this to display errors without interrupting rendering. |

## Variables

| Variable | Description |
| ------ | ------ |
| [SynthPlugin](variables/SynthPlugin.md) | The `textmode.synth.js` plugin to install. |

## Functions

| Function | Description |
| ------ | ------ |
| [cellColor](functions/cellColor.md) | Create a synth source with cell background color defined. |
| [char](functions/char.md) | Create a character source from any color/pattern source. |
| [charColor](functions/charColor.md) | Create a synth source with character foreground color defined. |
| [gradient](functions/gradient.md) | Generate a rotating radial gradient. |
| [noise](functions/noise.md) | Generate Perlin noise patterns. |
| [plasma](functions/plasma.md) | Generate plasma-like sine field patterns. |
| [moire](functions/moire.md) | Generate moire interference patterns. |
| [osc](functions/osc.md) | Generate oscillating patterns using sine waves. |
| [paint](functions/paint.md) | Create a synth source with both character and cell colors defined. |
| [shape](functions/shape.md) | Generate geometric shapes (polygons). |
| [solid](functions/solid.md) | Generate a solid grayscale color. |
| [src](functions/src.md) | Sample a source for synth compositions. |
| [voronoi](functions/voronoi.md) | Generate voronoi patterns. |
| [setGlobalErrorCallback](functions/setGlobalErrorCallback.md) | Set a global error callback for dynamic parameter evaluation errors. |
