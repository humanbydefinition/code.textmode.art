---
title: Advanced Features
description: Explore advanced features of textmode.js including offscreen framebuffers, custom GLSL shaders, 3D transformations, and multi-pass rendering.
---

# Advanced features

This section covers advanced features of `textmode.js` that enable sophisticated graphics and rendering techniques, including offscreen rendering with framebuffers, custom shaders, and 3D transformations.

## Framebuffers and offscreen rendering

Framebuffers allow you to render graphics offscreen and then use them as textures or images. This enables complex multi-pass rendering effects, feedback loops, and better performance optimization through render-to-texture techniques.

### Creating framebuffers

Create a framebuffer using the [`createFramebuffer()`](/api/textmode.js/classes/Textmodifier#createframebuffer) method with specified grid dimensions:

```js
const t = textmode.create({ width: 800, height: 600 });

let fb;

t.setup(() => {
    // Create a framebuffer with 50x30 grid cells
    fb = t.createFramebuffer({
        width: 50,
        height: 30
    });
});
```

The framebuffer uses the same Multiple Render Target (MRT) structure as the main rendering pipeline, with 3 attachments for character and color data.

### Rendering to framebuffers

Use [`begin()`](/api/textmode.js/classes/TextmodeFramebuffer#begin) and [`end()`](/api/textmode.js/classes/TextmodeFramebuffer#end) to redirect rendering operations to the framebuffer:

```js
t.draw(() => {
    // Render to offscreen buffer
    fb.begin();
    
    // All drawing operations now render to the framebuffer
    t.background(255, 0, 0);
    t.char('A');
    t.charColor(255);
    t.rect(20, 10);
    
    // Return to main canvas
    fb.end();
    
    // Render framebuffer to main canvas
    t.background(0);
    t.rotateZ(t.frameCount * 2);
    t.image(fb);
});
```

### Transforming framebuffer content

Framebuffers can be drawn with any transformation applied:

```js
t.draw(() => {
    // Draw something to framebuffer
    fb.begin();
    t.clear();
    t.charColor(255, 0, 0);
    t.char('A');
    t.rect(20, 10);
    fb.end();
    
    // Clear main canvas
    t.background(0);
    
    // Draw framebuffer with rotation
    t.push();
    t.translate(-10, 0);
    t.rotateZ(t.frameCount * 2);
    t.image(fb);
    t.pop();
    
    // Draw another copy with different transforms
    t.push();
    t.translate(10, 0);
    t.rotateZ(-t.frameCount * 2);
    t.image(fb);
    t.pop();
});
```

### Scaling framebuffer content

You can specify dimensions when drawing a framebuffer to scale its content:

```js
t.draw(() => {
    // Render at original size
    t.image(fb);
    
    // Render scaled to specific dimensions
    t.push();
    t.image(fb, 30, 20); // Scale to 30x20 cells
    t.pop();
});
```

## Custom shaders

`textmode.js` supports custom GLSL shaders for advanced visual effects. You can create custom filter shaders that process the character grid with GPU-accelerated effects.

### Creating filter shaders

Use [`createFilterShader()`](/api/textmode.js/classes/Textmodifier#createfiltershader) to create custom shaders from GLSL source code:

```js
const t = textmode.create({ width: 800, height: 600 });

let waveShader;

t.setup(async () => {
    waveShader = await t.createFilterShader(`#version 300 es
        precision highp float;
        
        in vec2 v_uv;
        uniform float u_time;
        
        layout(location = 0) out vec4 o_character;
        layout(location = 1) out vec4 o_primaryColor;
        layout(location = 2) out vec4 o_secondaryColor;
        
        void main() {
            float wave = sin(v_uv.x * 10.0 + u_time) * 0.5 + 0.5;
            vec3 color = vec3(wave, 1.0 - wave, 0.5);
            o_character = vec4(wave, 0.0, 0.0, 0.0);
            o_primaryColor = vec4(color, 1.0);
            o_secondaryColor = vec4(color * 0.5, 1.0);
        }
    `);
});
```

You can also load shaders from external files:

```js
t.setup(async () => {
    waveShader = await t.createFilterShader('./shader.frag');
});
```

### Applying shaders

Use the [`shader()`](/api/textmode.js/classes/Textmodifier#shader) method to set the current shader, and [`setUniform()`](/api/textmode.js/classes/Textmodifier#setuniform) or [`setUniforms()`](/api/textmode.js/classes/Textmodifier#setuniforms) to pass values:

```js
t.draw(() => {
    t.shader(waveShader);
    t.setUniform('u_time', t.frameCount * 0.003);
    t.rect(t.grid.cols, t.grid.rows);
});
```

### Setting multiple uniforms

Use [`setUniforms()`](/api/textmode.js/classes/Textmodifier#setuniforms) to pass multiple values in one call:

```javascript
const t = textmode.create({ width: 800, height: 600 });

let rippleShader;

t.setup(async () => {
    rippleShader = await t.createFilterShader(`#version 300 es
        precision highp float;
        
        in vec2 v_uv;
        uniform float u_time;
        uniform vec2 u_center;
        
        layout(location = 0) out vec4 o_character;
        layout(location = 1) out vec4 o_primaryColor;
        layout(location = 2) out vec4 o_secondaryColor;
        
        void main() {
            float dist = length(v_uv - u_center);
            float wave = sin(dist * 20.0 - u_time * 2.0) * 0.5 + 0.5;
            vec3 color = mix(vec3(0.2, 0.4, 0.8), vec3(0.9, 0.6, 0.3), wave);
            o_character = vec4(wave, 0.0, 0.0, 0.0);
            o_primaryColor = vec4(color, 1.0);
            o_secondaryColor = vec4(color * 0.4, 1.0);
        }
    `);
});

t.draw(() => {
    if (rippleShader) {
        t.shader(rippleShader);
        t.setUniforms({
            u_time: t.frameCount * 0.0005,
            u_center: [0.5, 0.5]
        });
        t.rect(t.grid.cols, t.grid.rows);
    }
});
```

### Shader output requirements

Custom filter shaders must output to three MRT attachments:

- `layout(location = 0) out vec4 o_character` - Character/transform data
- `layout(location = 1) out vec4 o_primaryColor` - Primary (foreground) color
- `layout(location = 2) out vec4 o_secondaryColor` - Secondary (background) color

## Advanced shader techniques

### Multi-pass rendering with framebuffers

Combine framebuffers with shaders for complex multi-pass effects:

```js
const t = textmode.create({ width: 800, height: 600 });

let fb1, fb2, blurShader;

t.setup(async () => {
    fb1 = t.createFramebuffer({ width: t.grid.cols, height: t.grid.rows });
    fb2 = t.createFramebuffer({ width: t.grid.cols, height: t.grid.rows });
    
    blurShader = await t.createFilterShader('./blur.frag');
});

t.draw(() => {
    // First pass: render scene to fb1
    fb1.begin();
    t.background(0);
    t.char('A');
    t.charColor(255, 100, 200);
    t.rotateZ(t.frameCount * 2);
    t.rect(t.grid.cols, t.grid.rows);
    fb1.end();
    
    // Second pass: apply blur shader to fb2
    fb2.begin();
    t.shader(blurShader);
    t.setUniform('u_intensity', 0.5);
    t.image(fb1);
    fb2.end();
    
    // Final pass: render to screen
    t.background(0);
    t.image(fb2);
});
```

### Feedback loops

Create visual feedback effects by ping-ponging between two framebuffers. This technique samples the previous frame's textures in the shader to create decay and trail effects:

```javascript
const t = textmode.create({ width: 800, height: 600 });

let prevFramebuffer, nextFramebuffer, feedbackShader;

t.setup(async () => {
    // Create two framebuffers for ping-ponging
    prevFramebuffer = t.createFramebuffer({ width: t.grid.cols, height: t.grid.rows });
    nextFramebuffer = t.createFramebuffer({ width: t.grid.cols, height: t.grid.rows });

    // Clear both framebuffers once so we start from a blank slate
    [prevFramebuffer, nextFramebuffer].forEach((fb) => {
        fb.begin();
        t.clear();
        fb.end();
    });
    
    feedbackShader = await t.createFilterShader(`#version 300 es
        precision highp float;
        
        in vec2 v_uv;
        
        uniform vec2 u_gridSize;
        uniform float u_decay;
        uniform sampler2D u_previousCharTexture;
        uniform sampler2D u_previousPrimaryTexture;
        uniform sampler2D u_previousSecondaryTexture;
        uniform float u_clearThreshold;
        
        layout(location = 0) out vec4 o_character;
        layout(location = 1) out vec4 o_primaryColor;
        layout(location = 2) out vec4 o_secondaryColor;

        vec2 quantizedGridUV() {
            // Reconstruct texel centers exactly like the internal copy shader
            vec2 flippedUV = vec2(v_uv.x, 1.0 - v_uv.y);
            vec2 uvTex = flippedUV * u_gridSize;
            return (floor(uvTex) + 0.5) / u_gridSize;
        }
        
        void main() {
            vec2 uv = quantizedGridUV();

            // Sample previous frame's data at exact cell centers
            vec4 prevChar = texture(u_previousCharTexture, uv);
            vec4 prevPrimary = texture(u_previousPrimaryTexture, uv);
            vec4 prevSecondary = texture(u_previousSecondaryTexture, uv);

            o_character = prevChar;
            o_primaryColor = vec4(prevPrimary.rgb - 0.01, 1.0);
            o_secondaryColor = prevSecondary;
        }
    `);
});

t.draw(() => {
    // Swap framebuffers (ping-pong)
    [prevFramebuffer, nextFramebuffer] = [nextFramebuffer, prevFramebuffer];
    
    // Render to next framebuffer
    nextFramebuffer.begin();
    
    // Apply decay shader with previous frame's textures
    t.shader(feedbackShader);
    t.setUniform('u_gridSize', [prevFramebuffer.width, prevFramebuffer.height]);
    t.setUniform('u_previousCharTexture', prevFramebuffer.textures[0]);
    t.setUniform('u_previousPrimaryTexture', prevFramebuffer.textures[1]);
    t.setUniform('u_previousSecondaryTexture', prevFramebuffer.textures[2]);
    t.rect(t.grid.cols, t.grid.rows);

    // Return to the default textmode pipeline before drawing new glyphs
    t.shader(null);
    
    // Draw new content
    t.push();
    t.char('*');
    t.charColor(255);
    t.translate(
        Math.cos(t.frameCount * 0.05) * 20,
        Math.sin(t.frameCount * 0.05) * 15
    );
    t.point();
    t.pop();
    
    nextFramebuffer.end();
    
    // Display next framebuffer on main canvas
    t.background(0);
    t.image(nextFramebuffer);
});
```

## 3D transformations

`textmode.js` supports 3D transformations for creating depth and perspective effects with your ASCII graphics.

### Rotation in 3D space

Use [`rotate()`](/api/textmode.js/classes/Textmodifier#rotate), [`rotateX()`](/api/textmode.js/classes/Textmodifier#rotatex), [`rotateY()`](/api/textmode.js/classes/Textmodifier#rotatey), or [`rotateZ()`](/api/textmode.js/classes/Textmodifier#rotatez):

```javascript
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
    t.background(0);
    
    // Draw three rectangles rotating in 3D space
    for (let i = 0; i < 3; i++) {
        t.push();
        t.translate(i * 15 - 15, 0, 0);
        
        const angle = t.frameCount * (1.5 + i * 0.5);
        // Each shape rotates around different axes
        t.rotate(angle * 0.7, angle * 0.5, angle);
        
        t.char(['T', 'X', 'T'][i]);
        t.charColor(100 + i * 60, 200 - i * 40, 255);
        t.rect(10, 10);
        t.pop();
    }
});
```

### Translation in 3D space

Use [`translate()`](/api/textmode.js/classes/Textmodifier#translate), [`translateX()`](/api/textmode.js/classes/Textmodifier#translatex), [`translateY()`](/api/textmode.js/classes/Textmodifier#translatey), or [`translateZ()`](/api/textmode.js/classes/Textmodifier#translatez):

```javascript
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
    t.background(0);
    
    // Animate shapes with different Z positions
    for (let i = 0; i < 3; i++) {
        t.push();
        const z = Math.sin(t.frameCount * 0.05 + i) * 20;
        t.translate(i * 12 - 12, 0, z);
        t.char('O');
        t.charColor(180 + z * 3, 120, 255);
        t.rect(8, 8);
        t.pop();
    }
});
```

### Orthographic projection

By default, `textmode.js` uses perspective projection. Switch to orthographic projection with [`ortho()`](/api/textmode.js/classes/Textmodifier#ortho):

```javascript
const t = textmode.create({ width: 800, height: 600 });

let useOrtho = false;

// Toggle with spacebar
t.keyPressed((data) => {
    if (data.key === ' ') {
        useOrtho = !useOrtho;
    }
});

t.draw(() => {
    t.background(0);
    
    // Enable orthographic projection if toggled on
    if (useOrtho) {
        t.ortho();
    }
    
    // Animate rectangle on z-axis
    const zPos = Math.sin(t.frameCount * 0.01) * 50;
    
    t.push();
    t.translate(0, 0, zPos);
    t.rotateZ(t.frameCount * 2);
    t.rotateX(t.frameCount * 1.5);
    t.char('A');
    t.charColor(255, 100, 200);
    t.rect(16, 16);
    t.pop();
});
```

**Note**: The projection mode resets to perspective at the start of each frame, so `ortho()` must be called in every frame where you want orthographic projection.

### State management with push/pop

Use [`push()`](/api/textmode.js/classes/Textmodifier#push) and [`pop()`](/api/textmode.js/classes/Textmodifier#pop) to isolate transformation and style changes:

```javascript
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
    t.background(0);
    
    // Draw multiple shapes with isolated transformations
    for (let i = 0; i < 3; i++) {
        t.push(); // Save state
        
        t.translate(i * 12 - 12, 0);
        t.rotateZ(t.frameCount * (1 + i * 0.5));
        t.charColor(100 + i * 70, 255 - i * 50, 150);
        t.char(['*', '@', '#'][i]);
        t.rect(8, 8);
        
        t.pop(); // Restore state - next iteration starts fresh
    }
});
```

## Summary

These advanced features unlock the full potential of `textmode.js` for creating sophisticated graphics and optimized applications. By combining framebuffers, custom shaders, 3D transformations, and multi-pass rendering techniques, you can create complex visual effects while maintaining excellent performance.