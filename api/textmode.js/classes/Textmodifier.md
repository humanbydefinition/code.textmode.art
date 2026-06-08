---
layout: doc
editLink: true
title: Textmodifier
description: The main textmode.js drawing context.
category: Classes
api: true
kind: Class
lastModified: 2026-06-08
hasConstructor: false
---

[textmode.js](../index.md) / Textmodifier

# Class: Textmodifier

The main `textmode.js` drawing context.

A Textmodifier manages a canvas, renderer, layers, fonts, media sources, input,
animation, and the p5-style drawing API. When no canvas is supplied, it creates
one; when a canvas is supplied, it renders into or over that element depending
on the chosen options.

## Properties

| Property | Description |
| ------ | ------ |
| [displayHeight](Textmodifier/properties/displayHeight.md) | Physical screen height in pixels. |
| [displayWidth](Textmodifier/properties/displayWidth.md) | Physical screen width in pixels. |
| [gamepads](Textmodifier/properties/gamepads.md) | Currently connected gamepads as a compact readonly list. |
| [lastKeyPressed](Textmodifier/properties/lastKeyPressed.md) | Last key pressed, or `null` before any key press. |
| [lastKeyReleased](Textmodifier/properties/lastKeyReleased.md) | Last key released, or `null` before any key release. |
| [modifierState](Textmodifier/properties/modifierState.md) | Current modifier key state. |
| [mouse](Textmodifier/properties/mouse.md) | Current mouse position in center-based grid coordinates. |
| [mouseIsPressed](Textmodifier/properties/mouseIsPressed.md) | Whether a mouse button is currently held down. |
| [movedX](Textmodifier/properties/movedX.md) | Horizontal mouse movement accumulated since the previous rendered frame. |
| [movedY](Textmodifier/properties/movedY.md) | Vertical mouse movement accumulated since the previous rendered frame. |
| [pmouse](Textmodifier/properties/pmouse.md) | Mouse position from the previous rendered frame. |
| [pressedKeys](Textmodifier/properties/pressedKeys.md) | Keys currently being held down. |
| [touches](Textmodifier/properties/touches.md) | Currently active touches in grid coordinates. |
| [windowHeight](Textmodifier/properties/windowHeight.md) | Current browser window height in pixels. |
| [windowWidth](Textmodifier/properties/windowWidth.md) | Current browser window width in pixels. |

## Accessors

| Accessor | Description |
| ------ | ------ |
| [canvas](Textmodifier/accessors/canvas.md) | Canvas containing the rendered output. |
| [conversions](Textmodifier/accessors/conversions.md) | Access the conversion manager for this Textmodifier instance. |
| [errors](Textmodifier/accessors/errors.md) | Built-in fatal error layer controller. |
| [filters](Textmodifier/accessors/filters.md) | Filter manager for this Textmodifier instance. |
| [font](Textmodifier/accessors/font.md) | Font or tileset used by the current drawing layer. |
| [frameCount](Textmodifier/accessors/frameCount.md) | Current frame count. |
| [grid](Textmodifier/accessors/grid.md) | Grid for the layer currently being drawn. |
| [height](Textmodifier/accessors/height.md) | Canvas height in pixels. |
| [isDisposed](Textmodifier/accessors/isDisposed.md) | Whether this instance has been destroyed. |
| [isRenderingFrame](Textmodifier/accessors/isRenderingFrame.md) | Check if rendering is currently in progress for this frame. |
| [layers](Textmodifier/accessors/layers.md) | Layer manager for this Textmodifier instance. |
| [loading](Textmodifier/accessors/loading.md) | Built-in loading layer controller. |
| [millis](Textmodifier/accessors/millis.md) | Milliseconds since the sketch started running. |
| [overlay](Textmodifier/accessors/overlay.md) | Overlay source image for the target canvas or video, when overlay mode is enabled. |
| [secs](Textmodifier/accessors/secs.md) | Seconds since the sketch started running. |
| [width](Textmodifier/accessors/width.md) | Canvas width in pixels. |

## Methods

| Method | Description |
| ------ | ------ |
| [abs](Textmodifier/methods/abs.md) | Calculate the absolute value of a number. |
| [acos](Textmodifier/methods/acos.md) | Calculate the arc cosine of a value. |
| [ambientLight](Textmodifier/methods/ambientLight.md) | Add an ambient light using a grayscale value. |
| [applyMatrix](Textmodifier/methods/applyMatrix.md) | Multiply the current model transform by a custom 4x4 matrix. |
| [arc](Textmodifier/methods/arc.md) | Draw an arc with the current settings. Position is controlled via [translate](Textmodifier/methods/translate.md), [push](Textmodifier/methods/push.md), and [pop](Textmodifier/methods/pop.md). |
| [asin](Textmodifier/methods/asin.md) | Calculate the arc sine of a value. |
| [atan](Textmodifier/methods/atan.md) | Calculate the arc tangent of a value. |
| [atan2](Textmodifier/methods/atan2.md) | Calculate the angle from a vector's y and x components. |
| [background](Textmodifier/methods/background.md) | Current background color. |
| [bezierCurve](Textmodifier/methods/bezierCurve.md) | Draw a smooth cubic Bezier curve between two points. The curve thickness is controlled by the current [lineWeight](Textmodifier/methods/lineWeight.md) setting. |
| [box](Textmodifier/methods/box.md) | Draw a box mesh primitive. |
| [camera](Textmodifier/methods/camera.md) | Set an explicit camera transform for subsequent draw calls. |
| [ceil](Textmodifier/methods/ceil.md) | Round up to the closest integer. |
| [cellColor](Textmodifier/methods/cellColor.md) | Current cell background color. |
| [char](Textmodifier/methods/char.md) | Current character string used for drawing. |
| [charColor](Textmodifier/methods/charColor.md) | Current character color. |
| [charRotation](Textmodifier/methods/charRotation.md) | Set the character rotation for subsequent drawing, or get the current angle. |
| [clamp](Textmodifier/methods/clamp.md) | Clamp a value between a minimum and maximum range. |
| [clear](Textmodifier/methods/clear.md) | Clear the layer currently drawing to. |
| [color](Textmodifier/methods/color.md) | Create a reusable color object from a grayscale value. |
| [colorMode](Textmodifier/methods/colorMode.md) | Current color interpretation mode. |
| [cone](Textmodifier/methods/cone.md) | Draw a cone mesh primitive. |
| [constrain](Textmodifier/methods/constrain.md) | Constrain a value between a minimum and maximum range. |
| [cos](Textmodifier/methods/cos.md) | Calculate the cosine of an angle. |
| [createCamera](Textmodifier/methods/createCamera.md) | Create and activate a camera initialized from the current render camera state. |
| [~~createFilterShader~~](Textmodifier/methods/createFilterShader.md) | Create a material shader from fragment shader source or a file path. |
| [createFramebuffer](Textmodifier/methods/createFramebuffer.md) | Create a framebuffer for offscreen rendering. |
| [createGlyphRamp](Textmodifier/methods/createGlyphRamp.md) | Create a reusable glyph ramp from a character sequence. |
| [createMaterialShader](Textmodifier/methods/createMaterialShader.md) | Create a material shader from fragment shader source or a file path. |
| [createShader](Textmodifier/methods/createShader.md) | Create a shader from vertex and fragment source, or from file paths. |
| [createTexture](Textmodifier/methods/createTexture.md) | Create a dynamic texture from an external canvas or video element. |
| [createVector](Textmodifier/methods/createVector.md) | Create a mutable vector. |
| [cursor](Textmodifier/methods/cursor.md) | Set the mouse cursor for the textmode canvas. |
| [cylinder](Textmodifier/methods/cylinder.md) | Draw a cylinder mesh primitive. |
| [degrees](Textmodifier/methods/degrees.md) | Convert radians to degrees. |
| [deltaTime](Textmodifier/methods/deltaTime.md) | Time in milliseconds between the current frame and the previous frame. |
| [destroy](Textmodifier/methods/destroy.md) | Completely destroy this Textmodifier instance and free all associated resources. |
| [dist](Textmodifier/methods/dist.md) | Calculate the Euclidean distance between two points. |
| [doubleClicked](Textmodifier/methods/doubleClicked.md) | Register the single-callback handler for double-clicks. |
| [doubleTap](Textmodifier/methods/doubleTap.md) | Register a callback for double tap gestures. |
| [draw](Textmodifier/methods/draw.md) | Set the base layer draw callback. |
| [ease](Textmodifier/methods/ease.md) | Apply an easing curve to a normalized amount. |
| [ellipse](Textmodifier/methods/ellipse.md) | Draw an ellipse with the current settings. Position is controlled via [translate](Textmodifier/methods/translate.md), [push](Textmodifier/methods/push.md), and [pop](Textmodifier/methods/pop.md). |
| [ellipsoid](Textmodifier/methods/ellipsoid.md) | Draw an ellipsoid mesh primitive. |
| [exitPointerLock](Textmodifier/methods/exitPointerLock.md) | Exit pointer lock if the textmode canvas currently owns it. |
| [exp](Textmodifier/methods/exp.md) | Calculate Euler's number raised to a value. |
| [fill](Textmodifier/methods/fill.md) | Alias for [cellColor](Textmodifier/methods/cellColor.md). Current fill (cell background) color. |
| [filter](Textmodifier/methods/filter.md) | Apply a filter to the final composited output. |
| [finalDraw](Textmodifier/methods/finalDraw.md) | Set the final post-processing callback for the composited output. |
| [flipX](Textmodifier/methods/flipX.md) | Toggle horizontal flipping for subsequent characters, or get the current state. |
| [flipY](Textmodifier/methods/flipY.md) | Toggle vertical flipping for subsequent characters, or get the current state. |
| [floor](Textmodifier/methods/floor.md) | Round down to the closest integer. |
| [fontSize](Textmodifier/methods/fontSize.md) | Set or get the base layer font size. |
| [fract](Textmodifier/methods/fract.md) | Calculate the fractional part of a number. |
| [frameRate](Textmodifier/methods/frameRate.md) | Set the target frame rate, or get the current measured frame rate when called without arguments. |
| [gamepad](Textmodifier/methods/gamepad.md) | Resolve a connected gamepad by its browser-assigned slot index. |
| [gamepadAxisChanged](Textmodifier/methods/gamepadAxisChanged.md) | Register the single-callback handler for meaningful gamepad axis changes. |
| [gamepadButtonPressed](Textmodifier/methods/gamepadButtonPressed.md) | Register the single-callback handler for gamepad button press events. |
| [gamepadButtonReleased](Textmodifier/methods/gamepadButtonReleased.md) | Register the single-callback handler for gamepad button release events. |
| [gamepadConnected](Textmodifier/methods/gamepadConnected.md) | Register the single-callback handler for gamepad connection events. |
| [gamepadDisconnected](Textmodifier/methods/gamepadDisconnected.md) | Register the single-callback handler for gamepad disconnection events. |
| [image](Textmodifier/methods/image.md) | Draw a framebuffer, image, video, or texture source to the currently bound framebuffer. |
| [inputGrid](Textmodifier/methods/inputGrid.md) | Get or set the grid used for mouse and touch coordinate mapping. |
| [invert](Textmodifier/methods/invert.md) | Toggle character/cell color inversion, or get the current state. |
| [isKeyPressed](Textmodifier/methods/isKeyPressed.md) | Check whether a key is currently pressed. |
| [isLooping](Textmodifier/methods/isLooping.md) | Whether the automatic render loop is currently running. |
| [keyPressed](Textmodifier/methods/keyPressed.md) | Register the single-callback handler for key press events. |
| [keyReleased](Textmodifier/methods/keyReleased.md) | Register the single-callback handler for key release events. |
| [keyTyped](Textmodifier/methods/keyTyped.md) | Register the single-callback handler for printable character input. |
| [lerp](Textmodifier/methods/lerp.md) | Linear interpolation between two values. |
| [lightFalloff](Textmodifier/methods/lightFalloff.md) | Configure distance attenuation used by point lights. |
| [line](Textmodifier/methods/line.md) | Draw a line from `(x1, y1)` to `(x2, y2)`. |
| [lineWeight](Textmodifier/methods/lineWeight.md) | Set or get line thickness for subsequent line and curve drawing. |
| [loadFont](Textmodifier/methods/loadFont.md) | Load a font and optionally set it as the base layer's active font. |
| [loadImage](Textmodifier/methods/loadImage.md) | Load an image source that can be drawn with [image](Textmodifier/methods/image.md). |
| [loadTileset](Textmodifier/methods/loadTileset.md) | Load a tileset and optionally set it as the base layer's active glyph source. |
| [loadVideo](Textmodifier/methods/loadVideo.md) | Load a video source that can be drawn with [image](Textmodifier/methods/image.md). |
| [log](Textmodifier/methods/log.md) | Calculate the natural logarithm of a value. |
| [longPress](Textmodifier/methods/longPress.md) | Register a callback for long press gestures. |
| [lookAt](Textmodifier/methods/lookAt.md) | Update the look-at target and optional up vector for the active camera. |
| [loop](Textmodifier/methods/loop.md) | Resume the rendering loop if it was stopped by [noLoop](Textmodifier/methods/noLoop.md). |
| [map](Textmodifier/methods/map.md) | Re-map a number from one range to another. |
| [max](Textmodifier/methods/max.md) | Return the largest value in a sequence. |
| [min](Textmodifier/methods/min.md) | Return the smallest value in a sequence. |
| [mouseClicked](Textmodifier/methods/mouseClicked.md) | Register the single-callback handler for mouse clicks. |
| [mouseDragged](Textmodifier/methods/mouseDragged.md) | Register the single-callback handler for mouse dragging. |
| [mouseMoved](Textmodifier/methods/mouseMoved.md) | Register the single-callback handler for mouse movement. |
| [mousePressed](Textmodifier/methods/mousePressed.md) | Register the single-callback handler for mouse press events. |
| [mouseReleased](Textmodifier/methods/mouseReleased.md) | Register the single-callback handler for mouse release events. |
| [mouseScrolled](Textmodifier/methods/mouseScrolled.md) | Register the single-callback handler for mouse wheel scrolling. |
| [noise](Textmodifier/methods/noise.md) | Return deterministic multi-octave noise for a coordinate. |
| [noiseDetail](Textmodifier/methods/noiseDetail.md) | Adjust noise octaves and falloff. |
| [noiseSeed](Textmodifier/methods/noiseSeed.md) | Reset the noise lookup table to a seed. |
| [noLights](Textmodifier/methods/noLights.md) | Remove all active lights (ambient and point) and reset light falloff to `(1, 0, 0)`. |
| [noLoop](Textmodifier/methods/noLoop.md) | Stop the automatic rendering loop. |
| [norm](Textmodifier/methods/norm.md) | Map a number from a range to a normalized 0 to 1 range. |
| [off](Textmodifier/methods/off.md) | Remove a previously registered input event listener. |
| [on](Textmodifier/methods/on.md) | Register an input event listener. |
| [once](Textmodifier/methods/once.md) | Register an input event listener that removes itself after the first invocation. |
| [ortho](Textmodifier/methods/ortho.md) | Enable orthographic projection for subsequent shape drawing. |
| [perspective](Textmodifier/methods/perspective.md) | Enable perspective projection and optionally set projection parameters. |
| [pinch](Textmodifier/methods/pinch.md) | Register a callback for pinch gestures, receiving scale deltas. |
| [pixelDensity](Textmodifier/methods/pixelDensity.md) | Get the current pixel density for HiDPI rendering. |
| [point](Textmodifier/methods/point.md) | Draw one cell with the current settings. |
| [pointLight](Textmodifier/methods/pointLight.md) | Add a point light using RGB components and explicit XYZ position. |
| [pop](Textmodifier/methods/pop.md) | Restore the most recently saved rendering state from the state stack. Use with [push](Textmodifier/methods/push.md) to isolate style changes within a block. |
| [postDraw](Textmodifier/methods/postDraw.md) | Set the base layer post-draw callback. |
| [pow](Textmodifier/methods/pow.md) | Raise a base value to an exponent. |
| [print](Textmodifier/methods/print.md) | Print a string of text onto the active drawing layer. |
| [printAlign](Textmodifier/methods/printAlign.md) | Sets the text alignment rules for subsequent `print` calls. |
| [push](Textmodifier/methods/push.md) | Save the current rendering state to the state stack. Use with [pop](Textmodifier/methods/pop.md) to isolate style changes within a block. |
| [radians](Textmodifier/methods/radians.md) | Convert degrees to radians. |
| [random](Textmodifier/methods/random.md) | Return a random number from 0 up to, but not including, 1. |
| [randomGaussian](Textmodifier/methods/randomGaussian.md) | Return a normally distributed random number. |
| [randomSeed](Textmodifier/methods/randomSeed.md) | Reset the main sketch random generator to a seed. |
| [randomStream](Textmodifier/methods/randomStream.md) | Get an independent deterministic random stream for a name. |
| [rect](Textmodifier/methods/rect.md) | Draw a rectangle with the current settings. Position is controlled via [translate](Textmodifier/methods/translate.md), [push](Textmodifier/methods/push.md), and [pop](Textmodifier/methods/pop.md). |
| [redraw](Textmodifier/methods/redraw.md) | Render a fixed number of frames on demand. |
| [requestPointerLock](Textmodifier/methods/requestPointerLock.md) | Request browser pointer lock for the textmode canvas. |
| [resetCamera](Textmodifier/methods/resetCamera.md) | Reset to the default auto camera behavior. |
| [resetMatrix](Textmodifier/methods/resetMatrix.md) | Reset the current model transform to identity. |
| [resetShader](Textmodifier/methods/resetShader.md) | Reset the current shader to the default solid color shader. |
| [resizeCanvas](Textmodifier/methods/resizeCanvas.md) | Resize the canvas and adjust all related components accordingly. |
| [rotate](Textmodifier/methods/rotate.md) | Set rotation for subsequent shape drawing. |
| [rotateGesture](Textmodifier/methods/rotateGesture.md) | Register a callback for rotate gestures, receiving rotation deltas in degrees. |
| [rotateX](Textmodifier/methods/rotateX.md) | Set X-axis rotation for subsequent shape drawing, or get the current angle. |
| [rotateY](Textmodifier/methods/rotateY.md) | Set Y-axis rotation for subsequent shape drawing, or get the current angle. |
| [rotateZ](Textmodifier/methods/rotateZ.md) | Set Z-axis rotation for subsequent shape drawing, or get the current angle. |
| [round](Textmodifier/methods/round.md) | Round to the closest integer or decimal place. |
| [scale](Textmodifier/methods/scale.md) | Scale subsequent geometry in model space. |
| [setCamera](Textmodifier/methods/setCamera.md) | Activate a previously created camera object. |
| [setUniform](Textmodifier/methods/setUniform.md) | Set a uniform value on the current custom shader. |
| [setUniforms](Textmodifier/methods/setUniforms.md) | Set multiple uniform values on the current custom shader. |
| [setup](Textmodifier/methods/setup.md) | Set the setup callback that runs once initialization is complete. |
| [shader](Textmodifier/methods/shader.md) | Set a custom shader for subsequent drawing operations. |
| [sin](Textmodifier/methods/sin.md) | Calculate the sine of an angle. |
| [sphere](Textmodifier/methods/sphere.md) | Draw a sphere mesh primitive. |
| [sq](Textmodifier/methods/sq.md) | Square a number. |
| [sqrt](Textmodifier/methods/sqrt.md) | Calculate the square root of a number. |
| [stroke](Textmodifier/methods/stroke.md) | Alias for [charColor](Textmodifier/methods/charColor.md). Current stroke (character) color. |
| [swipe](Textmodifier/methods/swipe.md) | Register a callback for swipe gestures. |
| [tan](Textmodifier/methods/tan.md) | Calculate the tangent of an angle. |
| [tap](Textmodifier/methods/tap.md) | Register a callback for tap gestures. |
| [targetFrameRate](Textmodifier/methods/targetFrameRate.md) | Set or get the target frame rate limit. |
| [torus](Textmodifier/methods/torus.md) | Draw a torus mesh primitive. |
| [touchCancelled](Textmodifier/methods/touchCancelled.md) | Register the single-callback handler for browser-cancelled touches. |
| [touchEnded](Textmodifier/methods/touchEnded.md) | Register the single-callback handler for touch end events. |
| [touchMoved](Textmodifier/methods/touchMoved.md) | Register the single-callback handler for touch movement. |
| [touchStarted](Textmodifier/methods/touchStarted.md) | Register the single-callback handler for touch start events. |
| [translate](Textmodifier/methods/translate.md) | Translate subsequent shape drawing. |
| [translateX](Textmodifier/methods/translateX.md) | Current accumulated X-axis translation. |
| [translateY](Textmodifier/methods/translateY.md) | Current accumulated Y-axis translation. |
| [translateZ](Textmodifier/methods/translateZ.md) | Current accumulated Z-axis translation. |
| [triangle](Textmodifier/methods/triangle.md) | Draw a triangle with the current settings. |
| [useTileColors](Textmodifier/methods/useTileColors.md) | Configure authored tileset color preservation on the base layer. |
| [windowResized](Textmodifier/methods/windowResized.md) | Set the callback that runs after a window resize. |
