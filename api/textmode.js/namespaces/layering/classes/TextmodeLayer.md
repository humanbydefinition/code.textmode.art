---
layout: doc
editLink: true
title: TextmodeLayer
description: A single layer within a multi-layered textmode rendering context.
category: Classes
api: true
namespace: layering
kind: Class
lastModified: 2026-02-06
hasConstructor: false
---

[textmode.js](../../../index.md) / [layering](../index.md) / TextmodeLayer

# Class: TextmodeLayer

A single layer within a multi-layered textmode rendering context.

Layers are composited together using various blend modes
to create complex visual effects. Each layer can be independently
manipulated in terms of visibility, [opacity](#opacity), [blendMode](#blendmode), [offset](#offset), rotation, [TextmodeGrid](../../../classes/TextmodeGrid.md), and [TextmodeFont](../../loadables/classes/TextmodeFont.md).

You can draw on each layer by providing a draw callback function,
like you would with the base layer's [Textmodifier.draw](../../../classes/Textmodifier.md#draw) method.

Plugins can extend TextmodeLayer with additional methods using the plugin API's
`extendLayer` function. For example, the `textmode-synth` plugin adds a `.synth()`
method for hydra-like procedural generation.

## Implements

- `ITextmodeLayer`

## Accessors

### asciiFramebuffer

#### Get Signature

```ts
get asciiFramebuffer(): 
  | undefined
  | TextmodeFramebuffer;
```

Get the framebuffer containing the rendered textmode output for this layer.

##### Returns

  \| `undefined`
  \| [`TextmodeFramebuffer`](../../../classes/TextmodeFramebuffer.md)

#### Implementation of

```ts
ITextmodeLayer.asciiFramebuffer
```

***

### drawFramebuffer

#### Get Signature

```ts
get drawFramebuffer(): 
  | undefined
  | TextmodeFramebuffer;
```

Returns the draw framebuffer for this layer.
If the layer is not yet initialized, returns undefined.

##### Returns

  \| `undefined`
  \| [`TextmodeFramebuffer`](../../../classes/TextmodeFramebuffer.md)

#### Implementation of

```ts
ITextmodeLayer.drawFramebuffer
```

***

### font

#### Get Signature

```ts
get font(): TextmodeFont;
```

The font used by this layer.

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });
const layer = t.layers.add({ fontSize: 32, blendMode: 'additive' });

t.draw(() => {
  t.background(0);
  t.char('#');
  t.charColor(255, 100, 150);
  t.rect(t.grid.cols, t.grid.rows);
});

layer.draw(() => {
  t.clear();

  // Access the font object from the layer
  const font = layer.font;
  const chars = font.characters;

  // Display the first 64 characters of the font in a spiral
  const count = Math.min(chars.length, 64);
  const time = t.frameCount * 0.05;

  for(let i=0; i<count; i++) {
     const angle = i * 0.5 + time;
     const radius = i * 0.6 + 2;

     const x = Math.cos(angle) * radius;
     const y = Math.sin(angle) * radius * 0.5;

     t.push();
     t.translate(Math.round(x), Math.round(y));
     t.char(chars[i].character);
     // Color based on character index
     t.charColor(100 + i*2, 200 - i, 150 + i);
     t.point();
     t.pop();
  }

  // Display font info
  const info = `FONT SIZE: ${font.fontSize}`;
  t.charColor(255);
  for(let i=0; i<info.length; i++) {
     t.push();
     t.translate(i - info.length/2, -10);
     t.char(info[i]);
     t.point();
     t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Returns

[`TextmodeFont`](../../loadables/classes/TextmodeFont.md)

#### Implementation of

```ts
ITextmodeLayer.font
```

***

### grid

#### Get Signature

```ts
get grid(): undefined | TextmodeGrid;
```

Get the grid associated with this layer.

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 32 });
const rainLayer = t.layers.add({ fontSize: 16, blendMode: 'screen' });

t.draw(() => {
  // Base Layer: The "Construct" (Low Res, Abstract)
  t.background(0);
  const time = t.frameCount * 0.02;

  // Rotating abstract structure
  const points = [[-1,-1], [1,-1], [1,1], [-1,1]];
  points.forEach(([px, py]) => {
     const rotX = px * Math.cos(time) - py * Math.sin(time);
     const rotY = px * Math.sin(time) + py * Math.cos(time);
     t.push();
     t.translate(rotX * 6, rotY * 6);
     t.char('■');
     t.charColor(40);
     t.point();
     t.pop();
  });
});

rainLayer.draw(() => {
  t.clear();
  const g = rainLayer.grid; // Access layer-specific grid

  // Digital Rain Effect on the high-res layer grid
  // We loop using the layer's grid dimensions (g.cols), not the global t.grid
  for (let x = -g.cols/2; x < g.cols/2; x+=2) {
     // Deterministic randomness for rain columns
     const speed = 0.5 + Math.abs(Math.sin(x * 132.1)) * 0.5;
     const offset = Math.abs(Math.cos(x * 54.3)) * g.rows;
     const y = Math.floor(((t.frameCount * speed + offset) % g.rows) - g.rows/2);

     t.push();
     t.translate(x, y);

     // Head of the drop
     t.char(String.fromCharCode(0x30A0 + Math.random() * 96));
     t.charColor(150, 255, 200);
     t.point();

     // Trail
     for(let j=1; j<5; j++) {
        t.translate(0, -1);
        t.charColor(0, 255 - j*50, 100 - j*20);
        t.char(j % 2 ? ':' : '.');
        t.point();
     }
     t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Returns

`undefined` \| [`TextmodeGrid`](../../../classes/TextmodeGrid.md)

#### Implementation of

```ts
ITextmodeLayer.grid
```

***

### height

#### Get Signature

```ts
get height(): number;
```

Returns the height of the final ASCII framebuffer in pixels.
If the layer is not yet initialized, returns 0.

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });
const waveLayer = t.layers.add({ blendMode: 'lighten' });

t.draw(() => {
  t.background(0);
  // Background Grid Dots
  t.charColor(30);
  t.char('|');
  for (let x = -t.grid.cols/2; x < t.grid.cols/2; x+=4) {
      for (let y = -t.grid.rows/2; y < t.grid.rows/2; y+=4) {
          t.push();
          t.translate(x, y);
          t.point();
          t.pop();
      }
  }
});

waveLayer.draw(() => {
  t.clear();
  const h = waveLayer.height; // Property being demonstrated

  // Draw an oscilloscope waveform scaled to the layer height
  const time = t.frameCount * 0.1;
  const amplitude = (h / t.grid.cellHeight) * 0.4; // Use 40% of layer height

  for (let x = -t.grid.cols/2; x < t.grid.cols/2; x++) {
      // Combine multiple sine waves for a rich signal
      const yNorm = Math.sin(x * 0.1 + time) * 0.5 + Math.sin(x * 0.3 - time * 2) * 0.25;
      const y = Math.round(yNorm * amplitude);

      // Color based on height (heat map)
      const intensity = Math.abs(yNorm);
      t.push();
      t.translate(x, y);
      t.char('-'); // Waveform line
      t.charColor(255 * intensity, 100, 255 * (1-intensity));
      t.point();

      // Echo/Shadow effect
      if (x % 2 === 0) {
          t.translate(0, -Math.sign(y));
          t.char('.');
          t.charColor(100, 100, 100);
          t.point();
      }
      t.pop();
  }

  // Display Height Value in top-left
  const label = `MAX_AMP: ${h}px`;
  t.charColor(255);
  for(let i=0; i<label.length; i++) {
     t.push();
     t.translate(i - t.grid.cols/2 + 2, -t.grid.rows/2 + 1);
     t.char(label[i]);
     t.point();
     t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Returns

`number`

#### Implementation of

```ts
ITextmodeLayer.height
```

***

### texture

#### Get Signature

```ts
get texture(): undefined | WebGLTexture;
```

Returns the WebGL texture of the final ASCII framebuffer.
If the layer is not yet initialized, returns undefined.

##### Returns

`undefined` \| `WebGLTexture`

#### Implementation of

```ts
ITextmodeLayer.texture
```

***

### width

#### Get Signature

```ts
get width(): number;
```

Returns the width of the final ASCII framebuffer in pixels.
If the layer is not yet initialized, returns 0.

##### Returns

`number`

#### Implementation of

```ts
ITextmodeLayer.width
```

## Methods

### blendMode()

```ts
blendMode(mode?): 
  | void
  | TextmodeLayerBlendMode;
```

Set or get the layer's blend mode for compositing with layers below.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mode?` | [`TextmodeLayerBlendMode`](../type-aliases/TextmodeLayerBlendMode.md) | The blend mode to set. |

#### Returns

  \| `void`
  \| [`TextmodeLayerBlendMode`](../type-aliases/TextmodeLayerBlendMode.md)

The current blend mode if no parameter is provided.

**Available blend modes:**
- `'normal'` - Standard alpha compositing
- `'additive'` - Adds colors together (great for glow/energy effects)
- `'multiply'` - Darkens by multiplying colors
- `'screen'` - Lightens; inverse of multiply
- `'subtract'` - Subtracts layer from base
- `'darken'` - Takes minimum of each channel
- `'lighten'` - Takes maximum of each channel
- `'overlay'` - Combines multiply/screen for contrast
- `'softLight'` - Subtle contrast enhancement
- `'hardLight'` - Intense overlay effect
- `'colorDodge'` - Brightens base by blend color
- `'colorBurn'` - Darkens base by blend color
- `'difference'` - Absolute difference; creates inverted effects
- `'exclusion'` - Softer difference effect

#### Example

```javascript
const t = textmode.create();

// Create 5 layers with different blend modes
const blendModes = ['additive', 'screen', 'overlay', 'difference', 'multiply'];
const colors = [[255, 80, 150], [80, 180, 255], [255, 200, 80], [150, 255, 120], [200, 120, 255]];
const layers = blendModes.map(mode => t.layers.add({ blendMode: mode, opacity: 0.85 }));

t.draw(() => {
    const time = t.frameCount * 0.2;
    t.background(12, 8, 20, 255);

    layers.forEach((layer, i) => {
        layer.draw(() => {
            t.charColor(...colors[i], 255);

            // Draw spiral of characters
            for (let j = 0; j < 30; j++) {
                const angle = j * 0.2 + time * (i % 2 ? 1 : -1);
                const radius = 3 + j * 0.4 + Math.sin(time + j) * 2;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius * 0.6;

                t.char('#*+=-.'[j % 6]);
                t.translate(Math.round(x), Math.round(y));
                t.rect(1, 1);
            }
        });

        // Offset each layer
        layer.offset(Math.sin(time * 0.6 + i) * 6, Math.cos(time * 0.3 + i) * 4);
    });
});
```

#### Implementation of

```ts
ITextmodeLayer.blendMode
```

***

### deletePluginState()

```ts
deletePluginState(pluginName): boolean;
```

Delete plugin-specific state from this layer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pluginName` | `string` | Unique identifier for the plugin. |

#### Returns

`boolean`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });
const layer = t.layers.add();

t.mousePressed(() => {
  // Reset the 'boom' state when mouse is clicked
  if (layer.hasPluginState('boom')) {
    layer.deletePluginState('boom');
  }
});

layer.draw(() => {
  t.clear();

  if (!layer.hasPluginState('boom')) {
    layer.setPluginState('boom', { frame: 0 });
  }

  const state = layer.getPluginState('boom');
  if (state) {
    state.frame++;
    const radius = state.frame;
    if (radius > 10) return; // Explosion finished

    // Draw explosion ring
    for(let i=0; i<12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius * 0.5;

      t.push();
      t.translate(Math.round(x), Math.round(y));
      t.char('*');
      t.charColor(255, 100 + radius * 10, 0);
      t.point();
      t.pop();
    }
  }
});

t.draw(() => {
  t.background(0);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodeLayer.deletePluginState
```

***

### draw()

```ts
draw(callback): void;
```

Define this layer's draw callback. The callback is executed each frame
and should contain all drawing commands for this layer.

Inside the callback, use `t` (your `Textmodifier` instance) to access drawing
methods like `char()`, `charColor()`, `translate()`, and `rect()`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` | The function to call when drawing this layer. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create();

// Create layers with different blend modes
const glowLayer = t.layers.add({ blendMode: 'additive', opacity: 0.7 });
const particleLayer = t.layers.add({ blendMode: 'screen', opacity: 0.5 });

// Base layer: animated background with subtle wave pattern
t.draw(() => {
  const time = t.frameCount * 0.02;
  t.background(8, 12, 24);

  // Draw undulating grid pattern
  for (let y = -t.grid.rows / 2; y < t.grid.rows / 2; y++) {
    for (let x = -t.grid.cols / 2; x < t.grid.cols / 2; x++) {
      const wave = Math.sin(x * 0.3 + time) * Math.cos(y * 0.3 + time * 0.7);
      const brightness = 20 + wave * 15;

      t.push();
      t.charColor(brightness, brightness + 5, brightness + 15);
      t.char(wave > 0.3 ? '+' : wave > -0.3 ? '·' : '.');
      t.translate(x, y);
      t.point();
      t.pop();
    }
  }
});

// Glow layer: pulsing orbital ring
glowLayer.draw(() => {
  t.clear();
  const time = t.frameCount * 0.03;
  const ringCount = 24;

  for (let i = 0; i < ringCount; i++) {
    const angle = (i / ringCount) * Math.PI * 2 + time;
    const pulse = Math.sin(time * 2 + i * 0.5) * 0.5 + 0.5;
    const radius = 8 + Math.sin(time * 1.5) * 2;

    t.push();
    t.charColor(255, 180 + pulse * 75, 80 + pulse * 100);
    t.char('#*+=-'[i % 5]);
    t.translate(Math.round(Math.cos(angle) * radius), Math.round(Math.sin(angle) * radius * 0.6));
    t.point();
    t.pop();
  }
});

// Particle layer: floating sparkles
particleLayer.draw(() => {
  t.clear();
  const time = t.frameCount * 0.015;

  for (let i = 0; i < 12; i++) {
    const seed = i * 137.5; // Golden angle for distribution
    const x = Math.sin(seed + time) * (6 + i * 0.8);
    const y = Math.cos(seed * 1.3 + time * 0.8) * (4 + i * 0.5);
    const flicker = Math.sin(time * 4 + i) * 0.5 + 0.5;

    t.push();
    t.charColor(200 + flicker * 55, 220, 255);
    t.char('*');
    t.translate(Math.round(x), Math.round(y));
    t.point();
    t.pop();
  }
});
```

#### Implementation of

```ts
ITextmodeLayer.draw
```

***

### filter()

#### Call Signature

```ts
filter<T>(name, params?): void;
```

Apply a post-processing filter to this layer's rendered output.

Filters are applied after ASCII conversion in the order they are called.
Call this method within your layer's draw callback to apply effects.

**Built-in filters:**
- `'invert'` - Inverts all colors
- `'grayscale'` - Converts to grayscale (param: amount 0-1, default 1)
- `'sepia'` - Applies sepia tone (param: amount 0-1, default 1)
- `'threshold'` - Black/white threshold (param: threshold 0-1, default 0.5)

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`BuiltInFilterName`](../../filters/type-aliases/BuiltInFilterName.md) |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `T` | The name of the filter to apply (built-in or custom registered filter) |
| `params?` | [`BuiltInFilterParams`](../../filters/interfaces/BuiltInFilterParams.md)\[`T`\] | Optional parameters for the filter |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create();

// Create a layer with filters applied
const effectLayer = t.layers.add({ blendMode: 'normal', opacity: 1.0 });

t.draw(() => {
  // Base layer: draw a simple pattern
  t.background(20, 20, 40);
  t.charColor(255, 200, 100);
  t.char('#');
  t.rect(t.grid.cols, t.grid.rows);
});

effectLayer.draw(() => {
  t.clear();
  t.charColor(100, 150, 255);
  t.char('*');
  t.rect(10, 10);

  // Apply filters in sequence
  if (t.frameCount % 120 < 60) {
    effectLayer.filter('invert');
  }
  effectLayer.filter('grayscale', Math.sin(t.frameCount * 0.05) * 0.5 + 0.5);
});
```

##### Implementation of

```ts
ITextmodeLayer.filter
```

#### Call Signature

```ts
filter<TParams>(name, params?): void;
```

Apply a custom filter registered via `t.layers.filters.register()`.

##### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TParams` | `unknown` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the custom filter |
| `params?` | `TParams` | Optional parameters for the custom filter |

##### Returns

`void`

##### Implementation of

```ts
ITextmodeLayer.filter
```

***

### fontSize()

```ts
fontSize(size?): number | void;
```

Get or set the font size for this layer.

Changing the font size will re-initialize the layer's grid based on the new character dimensions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `size?` | `number` | The font size to set. |

#### Returns

`number` \| `void`

The current font size if called without arguments.

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600, fontSize: 16 });

// Add a high-resolution layer (small font) for details
const detailLayer = t.layers.add({ fontSize: 8 });

t.draw(() => {
  t.background(0);
  t.charColor(100);
  t.char('X');
  t.rect(10, 10);
});

detailLayer.draw(() => {
  // Render fine details on the high-res layer
  t.clear();
  t.charColor(255, 200, 100);
  t.char('.');
  const time = t.frameCount * 0.05;
  for(let i=0; i<50; i++) {
     t.push();
     t.translate(Math.cos(time+i)*30, Math.sin(time+i)*20);
     t.point();
     t.pop();
  }
});
```

#### Implementation of

```ts
ITextmodeLayer.fontSize
```

***

### getPluginState()

```ts
getPluginState<T>(pluginName): undefined | T;
```

Retrieve plugin-specific state stored on this layer.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pluginName` | `string` | Unique identifier for the plugin. |

#### Returns

`undefined` \| `T`

The stored state object, or undefined if not set.

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });
const layer = t.layers.add();

// Initialize a shared state object on the layer
layer.setPluginState('anim', { angle: 0, speed: 0.05 });

layer.draw(() => {
  t.clear();

  // Retrieve the typed state
  const state = layer.getPluginState('anim');

  if (state) {
    state.angle += state.speed;

    const r = 8;
    const x = Math.cos(state.angle) * r;
    const y = Math.sin(state.angle) * r;

    t.push();
    t.translate(Math.round(x), Math.round(y));
    t.char('O');
    t.charColor(255, 200, 0);
    t.point();
    t.pop();
  }
});

t.draw(() => {
  t.background(0);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodeLayer.getPluginState
```

***

### hasPluginState()

```ts
hasPluginState(pluginName): boolean;
```

Check if plugin-specific state exists on this layer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pluginName` | `string` | Unique identifier for the plugin. |

#### Returns

`boolean`

True if state exists, false otherwise.

#### Implementation of

```ts
ITextmodeLayer.hasPluginState
```

***

### hide()

```ts
hide(): void;
```

Hide this layer from rendering.

#### Returns

`void`

#### Example

```js
const t = textmode.create();
const layer = t.layers.add();

// Hide the layer when mouse is pressed
t.mousePressed(() => {
  layer.hide();
});
```

#### Implementation of

```ts
ITextmodeLayer.hide
```

***

### loadFont()

```ts
loadFont(fontSource): Promise<TextmodeFont>;
```

Load a font into this layer from a URL/path or reuse an existing [TextmodeFont](../../loadables/classes/TextmodeFont.md) instance.
Creates a new font instance for this layer and loads the font data when a string source is provided.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fontSource` | `string` \| [`TextmodeFont`](../../loadables/classes/TextmodeFont.md) | The URL or path to the font file. |

#### Returns

`Promise`\<[`TextmodeFont`](../../loadables/classes/TextmodeFont.md)\>

The loaded TextmodeFont instance.

#### Example

```js
const layer = t.layers.add();

t.setup(async () => {
  // Load a custom font for this layer
  await layer.loadFont('./fonts/custom.ttf');
});
```

#### Implementation of

```ts
ITextmodeLayer.loadFont
```

***

### offset()

```ts
offset(x?, y?): 
  | void
  | {
  x: number;
  y: number;
};
```

Set or get the layer's offset in pixels.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `x?` | `number` | `undefined` | The x offset in pixels. |
| `y?` | `number` | `0` | The y offset in pixels. |

#### Returns

  \| `void`
  \| \{
  `x`: `number`;
  `y`: `number`;
\}

The current offset if no parameters are provided.

#### Example

```javascript
const t = textmode.create();

const LAYER_COUNT = 32;
const LABEL = 'textmode.js';

// Create trailing layers
const layers = Array.from({ length: LAYER_COUNT }, () =>
  t.layers.add({ blendMode: 'normal', opacity: 1.0 })
);

// Snake segments for smooth trailing effect
const segments = Array.from({ length: LAYER_COUNT + 1 }, () => ({ x: 0, y: 0 }));

// Helper to draw text label centered
const drawLabel = (color) => {
  t.charColor(...color);
  t.cellColor(0, 0, 0, 0);
  [...LABEL].forEach((char, i) => {
    t.push();
    t.char(char);
    t.translate(i - Math.floor(LABEL.length / 2), 0);
    t.rect(1, 1);
    t.pop();
  });
};

// Set up layer draw callbacks
layers.forEach((layer, index) => {
  layer.draw(() => {
    t.background(0, 0, 0, 0);
    const brightness = 255 - (index / LAYER_COUNT) * 180;
    drawLabel([brightness, brightness * 0.8, 255]);
  });
});

t.draw(() => {
  t.background(20, 20, 40);
  t.clear();

  // Compute head position (circular motion)
  const time = t.frameCount * 0.06;
  const head = {
    x: Math.cos(time) * 24,
    y: Math.sin(time * 0.7) * 12
  };

  // Update snake segments with elastic follow
  segments[0] = head;
  for (let i = 1; i < segments.length; i++) {
    const prev = segments[i - 1];
    segments[i].x += (prev.x - segments[i].x) * 0.3;
    segments[i].y += (prev.y - segments[i].y) * 0.3;
  }

  // Draw head on base layer
  t.layers.base.offset(Math.round(head.x), Math.round(head.y));
  drawLabel([255, 200, 100]);

  // Offset each trailing layer to its segment position
  layers.forEach((layer, index) => {
    const seg = segments[index + 1];
    layer.offset(Math.round(seg.x), Math.round(seg.y));
  });
});
```

#### Implementation of

```ts
ITextmodeLayer.offset
```

***

### opacity()

```ts
opacity(opacity?): number | void;
```

Define or retrieve the layer's opacity.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opacity?` | `number` | The opacity value to set (between 0 and 1). |

#### Returns

`number` \| `void`

The current opacity if no parameter is provided.

#### Example

```js
const t = textmode.create();
const fadeLayer = t.layers.add();

t.draw(() => {
  // Fade layer in and out over time
  const opacity = 0.5 + 0.5 * Math.sin(t.frameCount * 0.05);
  fadeLayer.opacity(opacity);
});
```

#### Implementation of

```ts
ITextmodeLayer.opacity
```

***

### rotateZ()

```ts
rotateZ(z?): number | void;
```

Set or get the layer's rotation in degrees around its center.

The rotation is applied during compositing around the center of the layer's
rectangular bounds. The rotation origin remains at the center even when
an offset is applied.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `z?` | `number` | The rotation angle in degrees. Positive values rotate clockwise. |

#### Returns

`number` \| `void`

The current rotation in degrees if no parameter is provided.

#### Example

```javascript
const t = textmode.create();

const rotatingLayer = t.layers.add({ blendMode: 'difference', opacity: 1.0 });

rotatingLayer.draw(() => {
  t.clear();
  t.charColor(255, 200, 100);
  t.char('#');
  t.rect(10, 5);
});

t.draw(() => {
  t.background(20, 20, 40);

  // Rotate the layer over time
  rotatingLayer.rotateZ(t.frameCount * 2);

  t.charColor(100, 200, 255);
  t.char('-');
  t.rect(t.grid.cols, t.grid.rows);
});
```

#### Implementation of

```ts
ITextmodeLayer.rotateZ
```

***

### setPluginState()

```ts
setPluginState<T>(pluginName, state): void;
```

Store plugin-specific state on this layer.
Plugins can use this to attach their own data to layer instances.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pluginName` | `string` | Unique identifier for the plugin. |
| `state` | `T` | The state object to store. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

const layers = [];

t.setup(() => {
  // Create layers with independent state
  for(let i=0; i<64; i++) {
    const layer = t.layers.add();

    // Store physics state directly on the layer
    layer.setPluginState('my-physics', {
      x: 0,
      y: 0,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      color: t.color(Math.random()*255, 200, 255)
    });

    layer.draw(() => {
    t.clear();

    // Retrieve state
    const state = layer.getPluginState('my-physics');

    // Update physics
    state.x += state.vx;
    state.y += state.vy;

    // Bounce off edges
    if (Math.abs(state.x) > t.grid.cols/2) state.vx *= -1;
    if (Math.abs(state.y) > t.grid.rows/2) state.vy *= -1;

    t.push();
    t.translate(state.x, state.y);
    t.char('O');
    t.charColor(state.color);
    t.point();
    t.pop();
  });
  }
});

t.draw(() => {
  t.background(0);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodeLayer.setPluginState
```

***

### show()

```ts
show(): void;
```

Show this layer for rendering.

#### Returns

`void`

#### Example

```js
const t = textmode.create();
const hiddenLayer = t.layers.add({ visible: false });

// Show the layer after 2 seconds
t.draw(() => {
  if (t.secs > 2) {
    hiddenLayer.show();
  }
});
```

#### Implementation of

```ts
ITextmodeLayer.show
```
