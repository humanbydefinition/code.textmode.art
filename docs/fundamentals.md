---
title: Fundamentals
description: Learn the fundamental concepts and features of textmode.js, a creative-coding library for real-time ASCII and textmode graphics in the browser.
---

# Fundamentals

This section covers the fundamental concepts and features of the `textmode.js` library, providing a solid foundation for understanding how to create and manipulate text mode graphics using the library.

## Creating a canvas to draw on

To create a canvas for drawing, you can use the [`textmode.create()`](/api/classes/textmode#create) method. This method initializes a new textmode canvas with the specified dimensions and font size.

Here's an example of how to create a canvas:

```javascript
import { textmode } from 'textmode.js'; // ESM (not needed/allowed in UMD)

const t = textmode.create({ width: 800, height: 600, fontSize: 16 });

t.setup(() => {
    // Optional setup code here 
    // (e.g., load fonts/shaders, initialize variables that access 't')
});
```

The `create()` method a [`Textmodifier`](/api/classes/Textmodifier) instance, which is the main interface for drawing and manipulating the textmode canvas.

:::info
For more details on the available initialization options, refer to [`TextmodeOptions`](/api/type-aliases/TextmodeOptions).

The [`setup`](/api/classes/Textmodifier#setup) callback is optional and can be used to perform any setup tasks that require access to the fully initialized `Textmodifier` instance. If you don't need to perform any setup tasks, you don't need to provide this callback.
:::

## Drawing on the canvas

Once you have created a canvas, you can start drawing on it by defining a [`draw`](/api/classes/Textmodifier#draw) callback function. This function is called on each frame, allowing you to create animations and dynamic graphics.

`textmode.js` provides a variety of drawing primitives, such as `rect()`, `line()`, and `triangle()`, which you can use to create shapes on the grid. To define how a shape should look, you can set various cell properties like `char()`, `charColor()`, and `cellColor()`, which define the character, character color, and cell background color, respectively for subsequent drawing operations.

<!--@include: ./examples/primitives.md-->

### Coordinate system

The coordinate system in `textmode.js` is grid-based, where each character occupies a cell in a 2D grid. The center of the grid is `(0, 0, 0)`. The grid dimensions are dynamically calculated based on the canvas size, the set font, and its size. You can access the grid dimensions via the [`grid`](/api/classes/Textmodifier#grid) property of the `Textmodifier` instance.

```javascript
console.log(t.grid.cols); // Number of columns
console.log(t.grid.rows); // Number of rows
```

### Primitives

As seen in the example above, `textmode.js` provides several drawing primitives to create textmode graphics. Each drawn shape can be customized using various cell properties, as well as shape properties like `rotate()` and `lineWeight()`.

#### Rectangle

The [`rect(width, height)`](/api/classes/Textmodifier#rect) method draws a filled rectangle of characters on the grid using the previously specified properties.

```javascript
t.rect(10, 5);
```

#### Line
The [`line(x1, y1, x2, y2)`](/api/classes/Textmodifier#line) method draws a line between two points `(x1, y1)` and `(x2, y2)` using the previously specified properties.

```javascript
t.lineWeight(2); // Set line weight to 2 cells
t.line(-10, 0, 10, 0);
```

#### Triangle
The [`triangle(x1, y1, x2, y2, x3, y3)`](/api/classes/Textmodifier#triangle) method draws a filled triangle on the grid using the previously specified properties.

```javascript
t.triangle(0, 0, 10, 0, 5, 5);
```

#### Ellipse
The [`ellipse(width, height)`](/api/classes/Textmodifier#ellipse) method draws a filled ellipse on the grid using the previously specified properties.

```javascript
t.ellipse(10, 5);
```

#### Bezier curve
The [`bezierCurve(x1, y1, cx1, cy1, cx2, cy2, x2, y2)`](/api/classes/Textmodifier#bezierCurve) method draws a cubic Bezier curve on the grid using the previously specified properties. The curve is defined by its start point `(x1, y1)`, end point `(x2, y2)`, and two control points `(cx1, cy1)` and `(cx2, cy2)`.

```javascript
t.lineWeight(1); // Set line weight to 1 cell
t.bezierCurve(0, 0, 10, 5, 5, 10, 10, 0);
```

#### Arc
The [`arc(width, height, startAngle, endAngle)`](/api/classes/Textmodifier#arc) method draws an arc on the grid using the previously specified properties.

```javascript
t.arc(10, 5, 0, 180);
```

### Cell properties

When drawing shapes, you can customize the appearance of the affected cells using the following methods:
- [`char(character)`](/api/classes/Textmodifier#char)
    - Sets the character to be used for subsequent drawing operations.
- [`charColor(r, g, b, a?)`](/api/classes/Textmodifier#charcolor)
    - Sets the character color for subsequent drawing operations.
- [`cellColor(r, g, b, a?)`](/api/classes/Textmodifier#cellcolor)
    - Sets the background color for subsequent drawing operations.
- [`flipX(boolean | number)`](/api/classes/Textmodifier#flipx)
    - Toggles horizontal flipping for subsequent drawing operations.
- [`flipY(boolean | number)`](/api/classes/Textmodifier#flipy)
    - Toggles vertical flipping for subsequent drawing operations.
- [`invert(boolean | number)`](/api/classes/Textmodifier#invert)
    - Swaps the character and cell colors for subsequent drawing operations.
- [`charRotation(angle)`](/api/classes/Textmodifier#charrotation)
    - Sets the rotation angle *(in degrees)* of the characters for subsequent drawing operations.

### Geometry properties
- [`rotate(angleX, angleY, angleZ)`](/api/classes/Textmodifier#rotate)
    - Rotates subsequent shapes around the specified axes by the given angles (in degrees). The rotation is applied around the center of the shape.
- [`lineWeight(weight)`](/api/classes/Textmodifier#lineweight)
    - Sets the line weight in number of cells for subsequent line drawing operations.
        - Affects only the `line()` and `bezierCurve()` methods.
- [`rotateX(angle)`](/api/classes/Textmodifier#rotatex)
    - Rotates subsequent shapes around the X-axis by the given angle (in degrees).
- [`rotateY(angle)`](/api/classes/Textmodifier#rotatey)
    - Rotates subsequent shapes around the Y-axis by the given angle (in degrees).
- [`rotateZ(angle)`](/api/classes/Textmodifier#rotatez)
    - Rotates subsequent shapes around the Z-axis by the given angle (in degrees).
- [`translate(x, y, z?)`](/api/classes/Textmodifier#translate)
    - Translates subsequent shapes by the specified amounts along the X, Y, and optional Z axes.
- [`translateX(x)`](/api/classes/Textmodifier#translatex)
    - Translates subsequent shapes by the specified amount along the X-axis.
- [`translateY(y)`](/api/classes/Textmodifier#translatey)
    - Translates subsequent shapes by the specified amount along the Y-axis.
- [`translateZ(z)`](/api/classes/Textmodifier#translatez)
    - Translates subsequent shapes by the specified amount along the Z-axis.

### Canvas control

Methods for managing the overall canvas state:

- [`background(r, g, b, a)`](/api/classes/Textmodifier#background)
    - Sets the background color for the entire canvas.
- [`clear()`](/api/classes/Textmodifier#clear)
    - Clears the entire canvas, setting all cells to transparent.

### State management

Methods for saving and restoring drawing settings:

- [`push()`](/api/classes/Textmodifier#push)
    - Saves the current drawing state (cell properties, transformations, etc.) onto a stack.
- [`pop()`](/api/classes/Textmodifier#pop)
    - Restores the most recently saved drawing state from the stack.

### Advanced rendering

Methods for custom shaders and advanced rendering techniques:

- [`shader(shader)`](/api/classes/Textmodifier#shader)
    - Sets a custom shader for subsequent drawing operations.
- [`setUniform(name, value)`](/api/classes/Textmodifier#setuniform)
    - Sets a uniform value for the current shader.
- [`setUniforms(uniforms)`](/api/classes/Textmodifier#setuniforms)
    - Sets multiple uniform values for the current shader.
- [`createFilterShader(fragmentSource)`](/api/classes/Textmodifier#createfiltershader)
    - Creates a custom filter shader from fragment shader source code.
- [`ortho()`](/api/classes/Textmodifier#ortho)
    - Render subsequent frames in orthographic projection mode.

## Using custom filter shaders

Besides drawing with the built-in primitives, you can also create custom filter shaders to apply advanced effects onto rectangles. Due to the unique rendering pipeline of `textmode.js`, custom shaders operate on a per-cell basis rather than per-pixel. This means that each invocation of the shader corresponds to a single cell in the textmode grid. 

`textmode.js` is currently dependent on `WebGL2`, so custom fragment shaders need to be written in `GLSL ES 3.00`, and follow the naming conventions for input varyings and output locations. The library currently uses three output attachments to store per-cell data, which can be written to in your shader.

### Multiple render targets (MRT) overview

Your custom shader must output to all three MRT attachments. Each attachment serves a specific purpose in the textmode rendering pipeline:

```glsl
#version 300 es
precision highp float;

in vec2 v_uv;

uniform float u_time;

layout(location = 0) out vec4 o_character;      // Character (RG), rotation (A), transform (B)
layout(location = 1) out vec4 o_primaryColor;   // Character color
layout(location = 2) out vec4 o_secondaryColor; // Background color

void main() {
	// write per‑cell data here
	o_character = vec4(fract(u_time), 0.0, 0.0, 1.0);
	o_primaryColor = vec4(1.0);
	o_secondaryColor = vec4(0.0, 0.0, 0.0, 1.0);
}
```

Create and use such a shader via the runtime API:

```js
const shader = t.createFilterShader(fragmentSource);
t.draw(() => {
	t.shader(shader);
	t.setUniform('u_time', t.frameCount * 0.016);
	t.rect(0, 0, t.grid.cols, t.grid.rows);
});
```

### Character selection (`o_character`)

**Purpose**: Determines which character from the font atlas is displayed in each cell, along with rotation and transform data.

**Format**: This attachment packs multiple pieces of data into its channels:
- **Red channel**: Lower 8 bits of the character index (0-255)
- **Green channel**: Upper 8 bits of the character index (0-255)
- **Blue channel**: Transform flags (invert, flipX, flipY)
- **Alpha channel**: Character rotation angle (0-1 maps to 0-360°)

```glsl
// Example: Select character at index 65 with no rotation or transforms
int charIndex = 65;
float r = float(charIndex % 256) / 255.0;        // Lower byte
float g = float(charIndex / 256) / 255.0;        // Upper byte
o_character = vec4(r, g, 0.0, 1.0);              // Blue=transforms, Alpha=rotation

// For procedural character selection with rotation:
float noise = someNoiseFunction(v_uv);
int procedural_index = int(noise * 255.0);       // Map to character range
float rotation = fract(u_time * 0.1);            // Animated rotation (0-1)
o_character = vec4(float(procedural_index) / 255.0, 0.0, 0.0, rotation);
```

:::info
`textmode.js` provides a built-in functionality to access shader color data for all available characters in the current font. Make sure to check out the [TextmodeFont.characters](/api/textmode.js/namespaces/loadables/classes/TextmodeFont#characters) property for more details, which can be accessed via `t.font.characters` from the `Textmodifier` instance.
:::

### Primary color (`o_primaryColor`)

**Purpose**: Sets the character color.

**Format**: Standard RGBA color with values between 0.0 and 1.0.

```glsl
// Solid red characters
o_primaryColor = vec4(1.0, 0.0, 0.0, 1.0);

// Animated rainbow effect
float hue = fract(u_time * 0.1 + v_uv.x);
vec3 rainbow = hsv2rgb(vec3(hue, 1.0, 1.0));     // Assuming hsv2rgb function
o_primaryColor = vec4(rainbow, 1.0);

// Gradient based on position
vec3 gradient = mix(vec3(1.0, 0.0, 0.0), vec3(0.0, 0.0, 1.0), v_uv.x);
o_primaryColor = vec4(gradient, 1.0);
```

### Secondary color (`o_secondaryColor`)

**Purpose**: Sets the cell background color.

**Format**: Standard RGBA color with values between 0.0 and 1.0.

```glsl
// Black background (typical)
o_secondaryColor = vec4(0.0, 0.0, 0.0, 1.0);

// Transparent background
o_secondaryColor = vec4(0.0, 0.0, 0.0, 0.0);

// Animated background color
float pulse = sin(u_time * 2.0) * 0.5 + 0.5;
o_secondaryColor = vec4(0.0, 0.0, pulse * 0.2, 1.0);
```

### Character rotation and transforms

**Purpose**: Character rotation and transform flags are now packed into the `o_character` attachment.

**Rotation** *(Alpha channel)*: Rotation angle normalized to 0-1 (maps to 0-360°)

```glsl
// Rotate character by 45 degrees
float angle = 45.0;                              // Degrees
float normalized = angle / 360.0;                // Normalize to 0-1
o_character.a = normalized;

// Continuous rotation over time
float rotationAngle = fract(u_time * 0.1);       // Already normalized
o_character.a = rotationAngle;

// Per-cell rotation based on position
float positionAngle = atan(v_uv.y - 0.5, v_uv.x - 0.5);
o_character.a = fract(positionAngle / (2.0 * 3.14159));
```

**Transform flags** *(Blue channel)*: Boolean flags for color inversion and flipping are packed into the blue channel.

The blue channel encodes three boolean flags as bit values:
- **Bit 0** (value 1): Color inversion flag *(swap character/cell colors)*
- **Bit 1** (value 2): Horizontal flip flag  
- **Bit 2** (value 4): Vertical flip flag

```glsl
// Pack transform flags using bitwise operations
int invertFlag = 0;  // or 1
int flipXFlag = 0;   // or 1
int flipYFlag = 0;   // or 1
float packedFlags = float(invertFlag | (flipXFlag << 1) | (flipYFlag << 2)) / 255.0;
o_character.b = packedFlags;

// Example: Invert colors only
int invertFlag = 1;
int flipXFlag = 0;
int flipYFlag = 0;
o_character.b = float(invertFlag | (flipXFlag << 1) | (flipYFlag << 2)) / 255.0;

// Example: Flip horizontally and vertically
int invertFlag = 0;
int flipXFlag = 1;
int flipYFlag = 1;
o_character.b = float(invertFlag | (flipXFlag << 1) | (flipYFlag << 2)) / 255.0;

// Conditional transformations based on position
int invertFlag = int(v_uv.x > 0.5 ? 1 : 0);      // Invert right half
int flipXFlag = int(v_uv.y > 0.5 ? 1 : 0);       // Flip bottom half horizontally
int flipYFlag = 0;
o_character.b = float(invertFlag | (flipXFlag << 1) | (flipYFlag << 2)) / 255.0;
```

<!--@include: ./examples/shader-noise.md-->

## Summary

These are the fundamental concepts and features of `textmode.js`. With this knowledge, you can start creating your own textmode graphics and animations using the library. For more advanced topics and features, refer to the other sections of this documentation.

:::info Next steps
-> To learn about using custom fonts, refer to the [Fonts](/docs/fonts) section.

-> To learn about exporting your creations, refer to the [Exporting](/docs/exporting) section.

-> For input and interactivity, read [Event handling](/docs/events).

-> See the API in action in [Examples](/docs/examples).
:::