---
layout: doc
editLink: true
title: SynthSource
description: A chainable synthesis source that accumulates transforms to be compiled into a shader.
category: Classes
api: true
kind: Class
ecosystem: textmode.js
lastModified: 2026-06-07
hasConstructor: false
---

[textmode.synth.js](../index.md) / SynthSource

# Class: SynthSource

A chainable synthesis source that accumulates transforms to be compiled into a shader.

This is the core class that enables hydra-like method chaining for
generating procedural textmode visuals. Each method call adds a
transform to the chain, which is later compiled into a GLSL shader.

## Example

<TextmodeApiSandbox profile="textmode.synth.js" language="javascript" title="SynthSource" encoded-code="Y29uc3QgdCA9IHRleHRtb2RlLmNyZWF0ZSh7CiAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLAogIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LAogIHBsdWdpbnM6IFtTeW50aFBsdWdpbl0KfSk7Cgpjb25zdCBzeW50aCA9IG5vaXNlKDEwKQogIC5yb3RhdGUoMC4yKQogIC5zY3JvbGwoMC4xLCAwKQogIC5jaGFyQ29sb3Iob3NjKDUsIDAuMSwgMS4yKS5rYWxlaWQoNCkpCiAgLmNlbGxDb2xvcihvc2MoNSwgMC4xLCAxLjIpLmthbGVpZCg0KS5pbnZlcnQoKSkKICAuY2hhck1hcCgnQCMlKis9LTouICcpOwoKdC5sYXllcnMuYmFzZS5zeW50aChzeW50aCk7Cgp0LndpbmRvd1Jlc2l6ZWQoKCkgPT4gewogIHQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />

## Methods

| Method | Description |
| ------ | ------ |
| [charMap](SynthSource/methods/charMap.md) | Map character indices to a specific character set. This is the primary textmode-native way to define which characters to use. |
| [charColor](SynthSource/methods/charColor.md) | Set the character foreground color using a color source chain. |
| [char](SynthSource/methods/char.md) | Set the character indices using a character source chain. The number of characters is determined by `charMap()` if defined, otherwise falls back to the total characters in the layer's font. |
| [cellColor](SynthSource/methods/cellColor.md) | Set the cell background colors using a color source chain. |
| [paint](SynthSource/methods/paint.md) | Set both character foreground and cell background color using the same source chain. This is a convenience method that combines `.charColor()` and `.cellColor()` in one call. |
| [clone](SynthSource/methods/clone.md) | Create a deep clone of this SynthSource. Useful when you want to create a modified version of an existing chain without affecting the original. |
| [brightness](SynthSource/methods/brightness.md) | Adjust brightness. |
| [contrast](SynthSource/methods/contrast.md) | Adjust contrast. |
| [invert](SynthSource/methods/invert.md) | Invert colors. |
| [saturate](SynthSource/methods/saturate.md) | Adjust color saturation. |
| [hue](SynthSource/methods/hue.md) | Shift hue. |
| [colorama](SynthSource/methods/colorama.md) | Apply colorama effect (hue rotation based on luminance). |
| [posterize](SynthSource/methods/posterize.md) | Posterize colors to limited palette. |
| [luma](SynthSource/methods/luma.md) | Apply threshold based on luminance. |
| [thresh](SynthSource/methods/thresh.md) | Apply hard threshold. |
| [color](SynthSource/methods/color.md) | Multiply all channels by a scalar value (grayscale). |
| [r](SynthSource/methods/r.md) | Extract the red channel as a grayscale value. |
| [g](SynthSource/methods/g.md) | Extract the green channel as a grayscale value. |
| [b](SynthSource/methods/b.md) | Extract the blue channel as a grayscale value. |
| [shift](SynthSource/methods/shift.md) | Shift color channels by adding offset values. |
| [gamma](SynthSource/methods/gamma.md) | Apply gamma correction for nonlinear brightness control. |
| [levels](SynthSource/methods/levels.md) | Adjust input/output levels and gamma for precise tonal control. |
| [clamp](SynthSource/methods/clamp.md) | Clamp color values to a specified range for stability. |
| [seed](SynthSource/methods/seed.md) | Set a seed for deterministic randomness in this source chain. |
| [add](SynthSource/methods/add.md) | Add another source. |
| [sub](SynthSource/methods/sub.md) | Subtract another source. |
| [mult](SynthSource/methods/mult.md) | Multiply with another source. |
| [blend](SynthSource/methods/blend.md) | Blend with another source. |
| [diff](SynthSource/methods/diff.md) | Difference with another source. |
| [layer](SynthSource/methods/layer.md) | Layer another source on top. |
| [mask](SynthSource/methods/mask.md) | Mask using another source. |
| [screen](SynthSource/methods/screen.md) | Screen blend with another source. |
| [overlay](SynthSource/methods/overlay.md) | Overlay blend with another source. |
| [softlight](SynthSource/methods/softlight.md) | Soft light blend with another source. |
| [hardlight](SynthSource/methods/hardlight.md) | Hard light blend with another source. |
| [dodge](SynthSource/methods/dodge.md) | Color dodge blend with another source. |
| [burn](SynthSource/methods/burn.md) | Color burn blend with another source. |
| [lighten](SynthSource/methods/lighten.md) | Lighten blend with another source. |
| [darken](SynthSource/methods/darken.md) | Darken blend with another source. |
| [modulate](SynthSource/methods/modulate.md) | Modulate coordinates using another source. |
| [modulateScale](SynthSource/methods/modulateScale.md) | Modulate scale using another source. |
| [modulateRotate](SynthSource/methods/modulateRotate.md) | Modulate rotation using another source. |
| [modulatePixelate](SynthSource/methods/modulatePixelate.md) | Modulate pixelation using another source. |
| [modulateKaleid](SynthSource/methods/modulateKaleid.md) | Modulate kaleidoscope using another source. |
| [modulateScrollX](SynthSource/methods/modulateScrollX.md) | Modulate X scroll using another source. |
| [modulateScrollY](SynthSource/methods/modulateScrollY.md) | Modulate Y scroll using another source. |
| [modulateRepeat](SynthSource/methods/modulateRepeat.md) | Modulate repeat pattern with another source. |
| [modulateRepeatX](SynthSource/methods/modulateRepeatX.md) | Modulate X repeat with another source. |
| [modulateRepeatY](SynthSource/methods/modulateRepeatY.md) | Modulate Y repeat with another source. |
| [modulateHue](SynthSource/methods/modulateHue.md) | Modulate coordinates based on hue differences. |
| [rotate](SynthSource/methods/rotate.md) | Rotate coordinates. |
| [scale](SynthSource/methods/scale.md) | Scale coordinates. |
| [scroll](SynthSource/methods/scroll.md) | Scroll coordinates in both X and Y directions. |
| [scrollX](SynthSource/methods/scrollX.md) | Scroll coordinates in X direction. |
| [scrollY](SynthSource/methods/scrollY.md) | Scroll coordinates in Y direction. |
| [pixelate](SynthSource/methods/pixelate.md) | Pixelate the output. |
| [repeat](SynthSource/methods/repeat.md) | Repeat coordinates in both X and Y directions. |
| [repeatX](SynthSource/methods/repeatX.md) | Repeat coordinates in X direction. |
| [repeatY](SynthSource/methods/repeatY.md) | Repeat coordinates in Y direction. |
| [kaleid](SynthSource/methods/kaleid.md) | Apply kaleidoscope effect. |
| [polar](SynthSource/methods/polar.md) | Convert coordinates to polar space. |
| [twirl](SynthSource/methods/twirl.md) | Twirl distortion with radial falloff. |
| [swirl](SynthSource/methods/swirl.md) | Swirl distortion around a center. |
| [mirror](SynthSource/methods/mirror.md) | Mirror coordinates across X and/or Y axes. |
| [shear](SynthSource/methods/shear.md) | Shear coordinates along X and Y axes. |
| [barrel](SynthSource/methods/barrel.md) | Barrel distortion (bulge outward). |
| [pinch](SynthSource/methods/pinch.md) | Pinch distortion (pull inward). |
| [fisheye](SynthSource/methods/fisheye.md) | Fisheye lens distortion. |
| [osc](SynthSource/methods/osc.md) | Generate oscillating patterns using sine waves. |
| [noise](SynthSource/methods/noise.md) | Generate Perlin noise patterns. |
| [plasma](SynthSource/methods/plasma.md) | Generate plasma-like sine field patterns. |
| [moire](SynthSource/methods/moire.md) | Generate moire interference patterns. |
| [voronoi](SynthSource/methods/voronoi.md) | Generate voronoi patterns. |
| [gradient](SynthSource/methods/gradient.md) | Generate a rotating radial gradient. |
| [shape](SynthSource/methods/shape.md) | Generate geometric shapes (polygons). |
| [solid](SynthSource/methods/solid.md) | Generate a solid grayscale color. |
| [src](SynthSource/methods/src.md) | Sample the previous frame for feedback effects. |
