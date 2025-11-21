::: details perlin noise shader example {open}

::: sandbox {template=static rtl}

```html index.html [readonly]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>textmode | Noise shader</title>

    <style>
      body {
        margin: 0;
        padding: 0;
        background: #000;
        overflow: hidden;
      }

      canvas {
        display: block;
      }
    </style>

    <!-- Import textmode.js -->
    <script src="https://unpkg.com/textmode.js@latest/dist/textmode.umd.js"></script>
  </head>

  <body>
    <script src="sketch.js"></script>
  </body>
</html>
```

```js sketch.js [active]
/**
 * @name [textmode.js] Shader Noise
 * @description Demonstration of custom filter shaders with animated Perlin noise traversing across the grid.
 * @author humanbydefinition
 * @link https://github.com/humanbydefinition/textmode.js
 */

// Perlin noise shader that traverses over time
const perlinNoiseShader = `#version 300 es
precision highp float;

in vec2 v_uv;

uniform float u_time;
uniform vec2 u_gridSize;

layout(location = 0) out vec4 o_character;
layout(location = 1) out vec4 o_primaryColor;
layout(location = 2) out vec4 o_secondaryColor;

// Perlin noise implementation
vec3 random3(vec3 c) {
    float j = 4096.0 * sin(dot(c, vec3(17.0, 59.4, 15.0)));
    vec3 r;
    r.z = fract(512.0 * j);
    j *= .125;
    r.x = fract(512.0 * j);
    j *= .125;
    r.y = fract(512.0 * j);
    return r - 0.5;
}

float simplex3d(vec3 p) {
    const float F3 = 0.3333333;
    const float G3 = 0.1666667;
    
    vec3 s = floor(p + dot(p, vec3(F3)));
    vec3 x = p - s + dot(s, vec3(G3));
    
    vec3 e = step(vec3(0.0), x - x.yzx);
    vec3 i1 = e * (1.0 - e.zxy);
    vec3 i2 = 1.0 - e.zxy * (1.0 - e);
    
    vec3 x1 = x - i1 + G3;
    vec3 x2 = x - i2 + 2.0 * G3;
    vec3 x3 = x - 1.0 + 3.0 * G3;
    
    vec4 w, d;
    
    w.x = dot(x, x);
    w.y = dot(x1, x1);
    w.z = dot(x2, x2);
    w.w = dot(x3, x3);
    
    w = max(0.6 - w, 0.0);
    
    d.x = dot(random3(s), x);
    d.y = dot(random3(s + i1), x1);
    d.z = dot(random3(s + i2), x2);
    d.w = dot(random3(s + 1.0), x3);
    
    w *= w;
    w *= w;
    d *= w;
    
    return dot(d, vec4(52.0));
}

float fbm(vec3 p) {
    float f = 0.0;
    f += 0.5000 * simplex3d(p); p *= 2.0;
    f += 0.2500 * simplex3d(p); p *= 2.0;
    f += 0.1250 * simplex3d(p); p *= 2.0;
    f += 0.0625 * simplex3d(p);
    return f;
}

void main() {
    // Convert UV to grid coordinates
    vec2 gridPos = v_uv * u_gridSize;
    
    // Create traveling noise
    vec3 noisePos = vec3(gridPos * 0.05, u_time * 0.02);
    
    // Add horizontal drift
    noisePos.x += u_time * 0.01;
    
    float noise = fbm(noisePos);
    noise = noise * 0.5 + 0.5; // Normalize to 0-1
    
    // Create dynamic character mapping based on noise intensity
    float charValue = noise;
    if (noise < 0.2) {
        charValue = 0.1; 
    } else if (noise < 0.4) {
        charValue = 0.3; 
    } else if (noise < 0.6) {
        charValue = 0.5; 
    } else if (noise < 0.8) {
        charValue = 0.7; 
    } else {
        charValue = 0.9;
    }
    
    // Create color gradient based on noise
    vec3 color1 = vec3(0.2, 0.6, 1.0); // Blue
    vec3 color2 = vec3(1.0, 0.8, 0.2); // Orange
    vec3 finalColor = mix(color1, color2, noise);
    
    // Apply inversion when noise intensity is high (> 0.5)
    float invertFlag = step(0.5, noise);
    
    // Pack transform flags (invert, flipX, flipY) into 3 bits
    int invertBit = int(invertFlag);
    int flipXBit = 0; // No horizontal flip
    int flipYBit = 0; // No vertical flip
    float packedFlags = float(invertBit | (flipXBit << 1) | (flipYBit << 2)) / 255.0;
    
    // Rotation value (0-1 range, 0 = no rotation)
    float rotation = 0.0;
    
    // Output to MRT attachments (3 render targets)
    // Character attachment: R/G = glyph index, B = packed flags, A = rotation
    o_character = vec4(charValue, 0.0, packedFlags, rotation);
    o_primaryColor = vec4(finalColor, 1.0);
    o_secondaryColor = vec4(0.0, 0.0, 0.1, 1.0); // Dark blue background
}`;

const tm = textmode.create({
    width: window.innerWidth,
    height: window.innerHeight,
    fontSize: 16,
    frameRate: 60
});

let noiseShader;

tm.setup(async () => {
    // Create the noise shader
    noiseShader = await tm.createFilterShader(perlinNoiseShader);
});

tm.draw(() => {
    // Clear background
    tm.background(0, 0, 20, 255);
    
    // Use the custom noise shader
    tm.shader(noiseShader);
    
    // Set uniforms
    tm.setUniforms({
        u_time: tm.frameCount * 0.16,
        u_gridSize: [tm.grid.cols, tm.grid.rows]
    });
    
    tm.rect(tm.grid.cols, tm.grid.rows);
});

tm.windowResized(() => {
    tm.resizeCanvas(window.innerWidth, window.innerHeight);
});
:::
