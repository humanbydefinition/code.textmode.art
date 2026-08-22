---
layout: doc
editLink: false
title: Textmodifier
description: The main textmode.js drawing context.
category: Classes
api: true
kind: Class
lastModified: 2026-08-22
hasConstructor: false
---

[textmode.js](../index.md) / Textmodifier

# Class: Textmodifier

The main `textmode.js` drawing context.

A Textmodifier manages a canvas, renderer, layers, fonts, media sources, input,
animation, and the p5-style drawing API. When no canvas is supplied, it creates
one; when a canvas is supplied, it renders into that element.


## Extends

- `TextmodifierExtensions`

## 2D drawing

Draw points, lines, curves, and planar primitives.

| Method | Description |
| ------ | ------ |
| [arc](Textmodifier/methods/arc.md) | Draw an arc with the current settings. Position is controlled via [translate](Textmodifier/methods/translate.md), [push](Textmodifier/methods/push.md), and [pop](Textmodifier/methods/pop.md). |
| [bezierCurve](Textmodifier/methods/bezierCurve.md) | Draw a smooth cubic Bezier curve between two points. The curve thickness is controlled by the current [lineWeight](Textmodifier/methods/lineWeight.md) setting. |
| [ellipse](Textmodifier/methods/ellipse.md) | Draw an ellipse with the current settings. Position is controlled via [translate](Textmodifier/methods/translate.md), [push](Textmodifier/methods/push.md), and [pop](Textmodifier/methods/pop.md). |
| [line](Textmodifier/methods/line.md) | Draw a line from `(x1, y1)` to `(x2, y2)`. |
| [lineWeight](Textmodifier/methods/lineWeight.md) | Set or get line thickness for subsequent line and curve drawing. |
| [point](Textmodifier/methods/point.md) | Draw one cell with the current settings. |
| [rect](Textmodifier/methods/rect.md) | Draw a rectangle with the current settings. Position is controlled via [translate](Textmodifier/methods/translate.md), [push](Textmodifier/methods/push.md), and [pop](Textmodifier/methods/pop.md). |
| [triangle](Textmodifier/methods/triangle.md) | Draw a triangle with the current settings. |

## 3D drawing

Draw built-in three-dimensional primitives.

| Method | Description |
| ------ | ------ |
| [box](Textmodifier/methods/box.md) | Draw a box mesh primitive. |
| [cone](Textmodifier/methods/cone.md) | Draw a cone mesh primitive. |
| [cylinder](Textmodifier/methods/cylinder.md) | Draw a cylinder mesh primitive. |
| [ellipsoid](Textmodifier/methods/ellipsoid.md) | Draw an ellipsoid mesh primitive. |
| [sphere](Textmodifier/methods/sphere.md) | Draw a sphere mesh primitive. |
| [torus](Textmodifier/methods/torus.md) | Draw a torus mesh primitive. |

## Animation & timing

Control rendering cadence and read elapsed sketch time.

| Name | Description |
| ------ | ------ |
| [frameCount](Textmodifier/accessors/frameCount.md) | Current frame count. |
| [millis](Textmodifier/accessors/millis.md) | Milliseconds since the sketch started running. |
| [secs](Textmodifier/accessors/secs.md) | Seconds since the sketch started running. |
| [deltaTime](Textmodifier/methods/deltaTime.md) | Time in milliseconds between the current frame and the previous frame. |
| [frameRate](Textmodifier/methods/frameRate.md) | Set the target frame rate, or get the current measured frame rate when called without arguments. |
| [isLooping](Textmodifier/methods/isLooping.md) | Whether the automatic render loop is currently running. |
| [loop](Textmodifier/methods/loop.md) | Resume the rendering loop if it was stopped by [noLoop](Textmodifier/methods/noLoop.md). |
| [noLoop](Textmodifier/methods/noLoop.md) | Stop the automatic rendering loop. |
| [redraw](Textmodifier/methods/redraw.md) | Render a fixed number of frames on demand. |
| [targetFrameRate](Textmodifier/methods/targetFrameRate.md) | Set or get the target frame rate limit. |

## Cameras & projection

Control the camera and projection used for spatial drawing.

| Method | Description |
| ------ | ------ |
| [camera](Textmodifier/methods/camera.md) | Set an explicit camera transform for subsequent draw calls. |
| [createCamera](Textmodifier/methods/createCamera.md) | Create and activate a camera initialized from the current render camera state. |
| [lookAt](Textmodifier/methods/lookAt.md) | Update the look-at target and optional up vector for the active camera. |
| [ortho](Textmodifier/methods/ortho.md) | Enable orthographic projection for subsequent shape drawing. |
| [perspective](Textmodifier/methods/perspective.md) | Enable perspective projection and optionally set projection parameters. |
| [resetCamera](Textmodifier/methods/resetCamera.md) | Reset to the default auto camera behavior. |
| [setCamera](Textmodifier/methods/setCamera.md) | Activate a previously created camera object. |

## Canvas & display

Inspect and resize the canvas and display output.

| Name | Description |
| ------ | ------ |
| [displayHeight](Textmodifier/properties/displayHeight.md) | Physical screen height in pixels. |
| [displayWidth](Textmodifier/properties/displayWidth.md) | Physical screen width in pixels. |
| [windowHeight](Textmodifier/properties/windowHeight.md) | Current browser window height in pixels. |
| [windowWidth](Textmodifier/properties/windowWidth.md) | Current browser window width in pixels. |
| [canvas](Textmodifier/accessors/canvas.md) | Canvas containing the rendered output. |
| [height](Textmodifier/accessors/height.md) | Canvas height in pixels. |
| [width](Textmodifier/accessors/width.md) | Canvas width in pixels. |
| [pixelDensity](Textmodifier/methods/pixelDensity.md) | Get the current pixel density for HiDPI rendering. |
| [resizeCanvas](Textmodifier/methods/resizeCanvas.md) | Resize the canvas and adjust all related components accordingly. |
| [windowResized](Textmodifier/methods/windowResized.md) | Set the callback that runs after a window resize. |

## Characters & color

Set the glyph, colors, and per-character appearance for later drawing.

| Method | Description |
| ------ | ------ |
| [background](Textmodifier/methods/background.md) | Current background color. |
| [cellColor](Textmodifier/methods/cellColor.md) | Current cell background color. |
| [char](Textmodifier/methods/char.md) | Current character string used for drawing. |
| [charColor](Textmodifier/methods/charColor.md) | Current character color. |
| [charRotation](Textmodifier/methods/charRotation.md) | Set the character rotation for subsequent drawing, or get the current angle. |
| [clear](Textmodifier/methods/clear.md) | Clear the layer currently drawing to. |
| [color](Textmodifier/methods/color.md) | Create a reusable color object from a grayscale value. |
| [colorMode](Textmodifier/methods/colorMode.md) | Current color interpretation mode. |
| [fill](Textmodifier/methods/fill.md) | Alias for [cellColor](Textmodifier/methods/cellColor.md). Current fill (cell background) color. |
| [flipX](Textmodifier/methods/flipX.md) | Toggle horizontal flipping for subsequent characters, or get the current state. |
| [flipY](Textmodifier/methods/flipY.md) | Toggle vertical flipping for subsequent characters, or get the current state. |
| [invert](Textmodifier/methods/invert.md) | Toggle character/cell color inversion, or get the current state. |
| [stroke](Textmodifier/methods/stroke.md) | Alias for [charColor](Textmodifier/methods/charColor.md). Current stroke (character) color. |

## Conversion

Convert source imagery and post-process rendered output.

| Accessor | Description |
| ------ | ------ |
| [conversions](Textmodifier/accessors/conversions.md) | Access the conversion manager for this Textmodifier instance. |

## Custom geometry

Assemble vertex-based shapes with explicit topology.

| Name | Description |
| ------ | ------ |
| [LINE\_LOOP](Textmodifier/properties/LINE_LOOP.md) | Draw consecutive vertices as one connected closed loop. |
| [LINE\_STRIP](Textmodifier/properties/LINE_STRIP.md) | Draw consecutive vertices as one connected open path. |
| [LINES](Textmodifier/properties/LINES.md) | Draw each pair of recorded vertices as an independent line segment. |
| [POINTS](Textmodifier/properties/POINTS.md) | Draw each recorded vertex as a separate point. |
| [QUAD\_STRIP](Textmodifier/properties/QUAD_STRIP.md) | Draw paired vertices as a connected strip of quads. |
| [QUADS](Textmodifier/properties/QUADS.md) | Draw each group of four vertices as a quad split into two triangles. |
| [TRIANGLE\_FAN](Textmodifier/properties/TRIANGLE_FAN.md) | Draw triangles that all share the first recorded vertex. |
| [TRIANGLE\_STRIP](Textmodifier/properties/TRIANGLE_STRIP.md) | Draw overlapping triplets of vertices as a connected triangle strip. |
| [TRIANGLES](Textmodifier/properties/TRIANGLES.md) | Draw each group of three vertices as an independent triangle. |
| [beginShape](Textmodifier/methods/beginShape.md) | Start recording vertices for a custom 2D or 3D shape. Call [vertex](Textmodifier/methods/vertex.md) one or more times, then call [endShape](Textmodifier/methods/endShape.md) to draw the recorded shape. |
| [endShape](Textmodifier/methods/endShape.md) | Finish the active custom shape and enqueue its geometry. |
| [vertex](Textmodifier/methods/vertex.md) | Add a vertex to the active custom shape. The current transform, character, color, and line state are captured for this vertex. |

## Gamepad input

Read connected controllers and react to gamepad events.

| Name | Description |
| ------ | ------ |
| [gamepads](Textmodifier/properties/gamepads.md) | Currently connected gamepads as a compact readonly list. |
| [gamepad](Textmodifier/methods/gamepad.md) | Resolve a connected gamepad by its browser-assigned slot index. |
| [gamepadAxisChanged](Textmodifier/methods/gamepadAxisChanged.md) | Register the single-callback handler for meaningful gamepad axis changes. |
| [gamepadButtonPressed](Textmodifier/methods/gamepadButtonPressed.md) | Register the single-callback handler for gamepad button press events. |
| [gamepadButtonReleased](Textmodifier/methods/gamepadButtonReleased.md) | Register the single-callback handler for gamepad button release events. |
| [gamepadConnected](Textmodifier/methods/gamepadConnected.md) | Register the single-callback handler for gamepad connection events. |
| [gamepadDisconnected](Textmodifier/methods/gamepadDisconnected.md) | Register the single-callback handler for gamepad disconnection events. |

## Grid, fonts & glyphs

Configure the drawing grid and the glyph source that populates it.

| Name | Description |
| ------ | ------ |
| [font](Textmodifier/accessors/font.md) | Font or tileset used by the current drawing layer. |
| [grid](Textmodifier/accessors/grid.md) | Grid for the layer currently being drawn. |
| [createGlyphRamp](Textmodifier/methods/createGlyphRamp.md) | Create a reusable glyph ramp from a character sequence. |
| [fontSize](Textmodifier/methods/fontSize.md) | Set or get the base layer font size. |
| [loadFont](Textmodifier/methods/loadFont.md) | Load a font and optionally set it as the base layer's active font. |
| [loadTileset](Textmodifier/methods/loadTileset.md) | Load a tileset and optionally set it as the base layer's active glyph source. |
| [projectClientToGrid](Textmodifier/methods/projectClientToGrid.md) | Project CSS viewport/client coordinates into a textmode grid. |
| [useTileColors](Textmodifier/methods/useTileColors.md) | Configure authored tileset color preservation on the base layer. |

## Input events

Subscribe to input through the shared event interface.

| Method | Description |
| ------ | ------ |
| [inputGrid](Textmodifier/methods/inputGrid.md) | Get or set the grid used for mouse and touch coordinate mapping. |
| [off](Textmodifier/methods/off.md) | Remove a previously registered input event listener. |
| [on](Textmodifier/methods/on.md) | Register an input event listener. |
| [once](Textmodifier/methods/once.md) | Register an input event listener that removes itself after the first invocation. |

## Keyboard input

Read keyboard state and react to keyboard events.

| Name | Description |
| ------ | ------ |
| [lastKeyPressed](Textmodifier/properties/lastKeyPressed.md) | Last key pressed, or `null` before any key press. |
| [lastKeyReleased](Textmodifier/properties/lastKeyReleased.md) | Last key released, or `null` before any key release. |
| [modifierState](Textmodifier/properties/modifierState.md) | Current modifier key state. |
| [pressedKeys](Textmodifier/properties/pressedKeys.md) | Keys currently being held down. |
| [isKeyPressed](Textmodifier/methods/isKeyPressed.md) | Check whether a key is currently pressed. |
| [keyPressed](Textmodifier/methods/keyPressed.md) | Register the single-callback handler for key press events. |
| [keyReleased](Textmodifier/methods/keyReleased.md) | Register the single-callback handler for key release events. |
| [keyTyped](Textmodifier/methods/keyTyped.md) | Register the single-callback handler for printable character input. |

## Layers & compositing

Manage layer stacks and choose how their output combines.

| Name | Description |
| ------ | ------ |
| [BLEND\_ADDITIVE](Textmodifier/properties/BLEND_ADDITIVE.md) | Add the layer's color channels to the layers below it. |
| [BLEND\_COLOR\_BURN](Textmodifier/properties/BLEND_COLOR_BURN.md) | Darken the layers below by inverting the color dodge relationship. |
| [BLEND\_COLOR\_DODGE](Textmodifier/properties/BLEND_COLOR_DODGE.md) | Brighten the layers below by dividing around the layer color. |
| [BLEND\_DARKEN](Textmodifier/properties/BLEND_DARKEN.md) | Keep the darker channel from either the layer or the layers below it. |
| [BLEND\_DIFFERENCE](Textmodifier/properties/BLEND_DIFFERENCE.md) | Use the absolute channel difference between the layer and the layers below. |
| [BLEND\_EXCLUSION](Textmodifier/properties/BLEND_EXCLUSION.md) | Use a lower-contrast difference blend between the layer and the layers below. |
| [BLEND\_HARD\_LIGHT](Textmodifier/properties/BLEND_HARD_LIGHT.md) | Apply an intense contrast blend driven by the layer's brightness. |
| [BLEND\_LIGHTEN](Textmodifier/properties/BLEND_LIGHTEN.md) | Keep the lighter channel from either the layer or the layers below it. |
| [BLEND\_MULTIPLY](Textmodifier/properties/BLEND_MULTIPLY.md) | Multiply the layer's colors with the layers below it. |
| [BLEND\_NORMAL](Textmodifier/properties/BLEND_NORMAL.md) | Draw the layer with standard source-over alpha compositing. |
| [BLEND\_OVERLAY](Textmodifier/properties/BLEND_OVERLAY.md) | Combine multiply and screen based on the brightness below the layer. |
| [BLEND\_SCREEN](Textmodifier/properties/BLEND_SCREEN.md) | Screen the layer against the layers below it. |
| [BLEND\_SOFT\_LIGHT](Textmodifier/properties/BLEND_SOFT_LIGHT.md) | Apply a softer contrast blend based on the layer's brightness. |
| [BLEND\_SUBTRACT](Textmodifier/properties/BLEND_SUBTRACT.md) | Subtract the layer's colors from the layers below it. |
| [layers](Textmodifier/accessors/layers.md) | Layer manager for this Textmodifier instance. |

## Lighting

Illuminate three-dimensional geometry.

| Method | Description |
| ------ | ------ |
| [ambientLight](Textmodifier/methods/ambientLight.md) | Add an ambient light using a grayscale value. |
| [lightFalloff](Textmodifier/methods/lightFalloff.md) | Configure distance attenuation used by point lights. |
| [noLights](Textmodifier/methods/noLights.md) | Remove all active lights (ambient and point) and reset light falloff to `(1, 0, 0)`. |
| [pointLight](Textmodifier/methods/pointLight.md) | Add a point light using RGB components and explicit XYZ position. |

## Loading & errors

Access built-in loading feedback and fatal-error controls.

| Accessor | Description |
| ------ | ------ |
| [errors](Textmodifier/accessors/errors.md) | Built-in fatal error layer controller. |
| [loading](Textmodifier/accessors/loading.md) | Built-in loading layer controller. |

## Math & vectors

Use creative-coding math helpers and mutable vectors.

| Method | Description |
| ------ | ------ |
| [abs](Textmodifier/methods/abs.md) | Calculate the absolute value of a number. |
| [acos](Textmodifier/methods/acos.md) | Calculate the arc cosine of a value. |
| [asin](Textmodifier/methods/asin.md) | Calculate the arc sine of a value. |
| [atan](Textmodifier/methods/atan.md) | Calculate the arc tangent of a value. |
| [atan2](Textmodifier/methods/atan2.md) | Calculate the angle from a vector's y and x components. |
| [ceil](Textmodifier/methods/ceil.md) | Round up to the closest integer. |
| [clamp](Textmodifier/methods/clamp.md) | Clamp a value between a minimum and maximum range. |
| [constrain](Textmodifier/methods/constrain.md) | Constrain a value between a minimum and maximum range. |
| [cos](Textmodifier/methods/cos.md) | Calculate the cosine of an angle. |
| [createVector](Textmodifier/methods/createVector.md) | Create a mutable vector. |
| [degrees](Textmodifier/methods/degrees.md) | Convert radians to degrees. |
| [dist](Textmodifier/methods/dist.md) | Calculate the Euclidean distance between two points. |
| [ease](Textmodifier/methods/ease.md) | Apply an easing curve to a normalized amount. |
| [exp](Textmodifier/methods/exp.md) | Calculate Euler's number raised to a value. |
| [floor](Textmodifier/methods/floor.md) | Round down to the closest integer. |
| [fract](Textmodifier/methods/fract.md) | Calculate the fractional part of a number. |
| [lerp](Textmodifier/methods/lerp.md) | Linear interpolation between two values. |
| [log](Textmodifier/methods/log.md) | Calculate the natural logarithm of a value. |
| [map](Textmodifier/methods/map.md) | Re-map a number from one range to another. |
| [max](Textmodifier/methods/max.md) | Return the largest value in a sequence. |
| [min](Textmodifier/methods/min.md) | Return the smallest value in a sequence. |
| [norm](Textmodifier/methods/norm.md) | Map a number from a range to a normalized 0 to 1 range. |
| [pow](Textmodifier/methods/pow.md) | Raise a base value to an exponent. |
| [radians](Textmodifier/methods/radians.md) | Convert degrees to radians. |
| [round](Textmodifier/methods/round.md) | Round to the closest integer or decimal place. |
| [sin](Textmodifier/methods/sin.md) | Calculate the sine of an angle. |
| [sq](Textmodifier/methods/sq.md) | Square a number. |
| [sqrt](Textmodifier/methods/sqrt.md) | Calculate the square root of a number. |
| [tan](Textmodifier/methods/tan.md) | Calculate the tangent of an angle. |

## Media & textures

Load visual sources and use them as drawing or texture input.

| Method | Description |
| ------ | ------ |
| [createTexture](Textmodifier/methods/createTexture.md) | Create a dynamic texture from an external canvas or video element. |
| [image](Textmodifier/methods/image.md) | Draw a framebuffer, image, video, or texture source to the currently bound framebuffer. |
| [loadImage](Textmodifier/methods/loadImage.md) | Load an image source that can be drawn with [image](Textmodifier/methods/image.md). |
| [loadVideo](Textmodifier/methods/loadVideo.md) | Load a video source that can be drawn with [image](Textmodifier/methods/image.md). |
| [noTexture](Textmodifier/methods/noTexture.md) | Clear the active texture for later geometry draws. |
| [texture](Textmodifier/methods/texture.md) | Bind a media source or framebuffer as the texture for later geometry draws. |

## Mouse input

Read pointer state, mouse events, and pointer-lock controls.

| Name | Description |
| ------ | ------ |
| [mouse](Textmodifier/properties/mouse.md) | Current mouse position in center-based grid coordinates. |
| [mouseIsPressed](Textmodifier/properties/mouseIsPressed.md) | Whether a mouse button is currently held down. |
| [movedX](Textmodifier/properties/movedX.md) | Horizontal mouse movement accumulated since the previous rendered frame. |
| [movedY](Textmodifier/properties/movedY.md) | Vertical mouse movement accumulated since the previous rendered frame. |
| [pmouse](Textmodifier/properties/pmouse.md) | Mouse position from the previous rendered frame. |
| [cursor](Textmodifier/methods/cursor.md) | Set the mouse cursor for the textmode canvas. |
| [doubleClicked](Textmodifier/methods/doubleClicked.md) | Register the single-callback handler for double-clicks. |
| [exitPointerLock](Textmodifier/methods/exitPointerLock.md) | Exit pointer lock if the textmode canvas currently owns it. |
| [mouseClicked](Textmodifier/methods/mouseClicked.md) | Register the single-callback handler for mouse clicks. |
| [mouseDragged](Textmodifier/methods/mouseDragged.md) | Register the single-callback handler for mouse dragging. |
| [mouseMoved](Textmodifier/methods/mouseMoved.md) | Register the single-callback handler for mouse movement. |
| [mousePressed](Textmodifier/methods/mousePressed.md) | Register the single-callback handler for mouse press events. |
| [mouseReleased](Textmodifier/methods/mouseReleased.md) | Register the single-callback handler for mouse release events. |
| [mouseScrolled](Textmodifier/methods/mouseScrolled.md) | Register the single-callback handler for mouse wheel scrolling. |
| [requestPointerLock](Textmodifier/methods/requestPointerLock.md) | Request browser pointer lock for the textmode canvas. |

## Randomness & noise

Generate deterministic random values and coherent noise.

| Method | Description |
| ------ | ------ |
| [noise](Textmodifier/methods/noise.md) | Return deterministic multi-octave noise for a coordinate. |
| [noiseDetail](Textmodifier/methods/noiseDetail.md) | Adjust noise octaves and falloff. |
| [noiseSeed](Textmodifier/methods/noiseSeed.md) | Reset the noise lookup table to a seed. |
| [random](Textmodifier/methods/random.md) | Return a random number from 0 up to, but not including, 1. |
| [randomGaussian](Textmodifier/methods/randomGaussian.md) | Return a normally distributed random number. |
| [randomSeed](Textmodifier/methods/randomSeed.md) | Reset the main sketch random generator to a seed. |
| [randomStream](Textmodifier/methods/randomStream.md) | Get an independent deterministic random stream for a name. |

## Shaders & framebuffers

Build GPU effects and offscreen rendering pipelines.

| Method | Description |
| ------ | ------ |
| [createFramebuffer](Textmodifier/methods/createFramebuffer.md) | Create a framebuffer for offscreen rendering. |
| [createMaterialShader](Textmodifier/methods/createMaterialShader.md) | Create a material shader from fragment shader source or a file path. |
| [createShader](Textmodifier/methods/createShader.md) | Create a shader from vertex and fragment source, or from file paths. |
| [resetShader](Textmodifier/methods/resetShader.md) | Reset the current shader to the default solid color shader. |
| [setUniform](Textmodifier/methods/setUniform.md) | Set a uniform value on the current custom shader. |
| [setUniforms](Textmodifier/methods/setUniforms.md) | Set multiple uniform values on the current custom shader. |
| [shader](Textmodifier/methods/shader.md) | Set a custom shader for subsequent drawing operations. |

## Sketch lifecycle

Configure callbacks and manage the lifetime of a sketch.

| Name | Description |
| ------ | ------ |
| [isDisposed](Textmodifier/accessors/isDisposed.md) | Whether this instance has been destroyed. |
| [isRenderingFrame](Textmodifier/accessors/isRenderingFrame.md) | Check if rendering is currently in progress for this frame. |
| [destroy](Textmodifier/methods/destroy.md) | Completely destroy this Textmodifier instance and free all associated resources. |
| [draw](Textmodifier/methods/draw.md) | Set the base layer draw callback. |
| [postDraw](Textmodifier/methods/postDraw.md) | Set the base layer post-draw callback. |
| [setup](Textmodifier/methods/setup.md) | Set the setup callback that runs once initialization is complete. |

## Text rendering

Lay out and draw strings on the active layer.

| Method | Description |
| ------ | ------ |
| [print](Textmodifier/methods/print.md) | Print a string of text onto the active drawing layer. |
| [printAlign](Textmodifier/methods/printAlign.md) | Sets the text alignment rules for subsequent `print` calls. |

## Touch & gestures

React to touch lifecycle events and derived gestures.

| Name | Description |
| ------ | ------ |
| [touches](Textmodifier/properties/touches.md) | Currently active touches in grid coordinates. |
| [doubleTap](Textmodifier/methods/doubleTap.md) | Register a callback for double tap gestures. |
| [longPress](Textmodifier/methods/longPress.md) | Register a callback for long press gestures. |
| [pinch](Textmodifier/methods/pinch.md) | Register a callback for pinch gestures, receiving scale deltas. |
| [rotateGesture](Textmodifier/methods/rotateGesture.md) | Register a callback for rotate gestures, receiving rotation deltas in degrees. |
| [swipe](Textmodifier/methods/swipe.md) | Register a callback for swipe gestures. |
| [tap](Textmodifier/methods/tap.md) | Register a callback for tap gestures. |
| [touchCancelled](Textmodifier/methods/touchCancelled.md) | Register the single-callback handler for browser-cancelled touches. |
| [touchEnded](Textmodifier/methods/touchEnded.md) | Register the single-callback handler for touch end events. |
| [touchMoved](Textmodifier/methods/touchMoved.md) | Register the single-callback handler for touch movement. |
| [touchStarted](Textmodifier/methods/touchStarted.md) | Register the single-callback handler for touch start events. |

## Transforms & state

Position geometry and isolate changes to draw state.

| Method | Description |
| ------ | ------ |
| [applyMatrix](Textmodifier/methods/applyMatrix.md) | Multiply the current model transform by a custom 4x4 matrix. |
| [pop](Textmodifier/methods/pop.md) | Restore the most recently saved rendering state, shader, and uniforms from the state stack. Use with [push](Textmodifier/methods/push.md) to isolate style changes within a block. |
| [push](Textmodifier/methods/push.md) | Save the current rendering state, shader, and uniforms to the state stack. Use with [pop](Textmodifier/methods/pop.md) to isolate style changes within a block. |
| [resetMatrix](Textmodifier/methods/resetMatrix.md) | Reset the current model transform to identity. |
| [rotate](Textmodifier/methods/rotate.md) | Set rotation for subsequent shape drawing. |
| [rotateX](Textmodifier/methods/rotateX.md) | Set X-axis rotation for subsequent shape drawing, or get the current angle. |
| [rotateY](Textmodifier/methods/rotateY.md) | Set Y-axis rotation for subsequent shape drawing, or get the current angle. |
| [rotateZ](Textmodifier/methods/rotateZ.md) | Set Z-axis rotation for subsequent shape drawing, or get the current angle. |
| [scale](Textmodifier/methods/scale.md) | Scale subsequent geometry in model space. |
| [translate](Textmodifier/methods/translate.md) | Translate subsequent shape drawing. |
| [translateX](Textmodifier/methods/translateX.md) | Current accumulated X-axis translation. |
| [translateY](Textmodifier/methods/translateY.md) | Current accumulated Y-axis translation. |
| [translateZ](Textmodifier/methods/translateZ.md) | Current accumulated Z-axis translation. |
