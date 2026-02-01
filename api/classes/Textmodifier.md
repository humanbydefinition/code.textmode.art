---
layout: doc
editLink: true
title: Textmodifier
description: Manages textmode rendering on a [`HTMLCanvasElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement) and provides methods for drawing, f...
category: Classes
api: true
kind: Class
lastModified: 2026-02-01
hasConstructor: false
---

[textmode.js](../index.md) / Textmodifier

# Class: Textmodifier

Manages textmode rendering on a [`HTMLCanvasElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement) and provides methods for drawing,
font management, event handling, layer management, animation control, and more. The heart of the `textmode.js` library.

If the `Textmodifier` instance is created without a canvas parameter,
it creates a new `HTMLCanvasElement` to draw on using the `textmode.js` drawing API.
If a canvas is provided, it will use that canvas instead.

## Extends

- `(Anonymous class)`\<`this`\>.`IRenderingMixin`.`IAnimationMixin`.`IMouseMixin`.`ITouchMixin`.`IKeyboardMixin`

## Implements

- `ITextmodifier`

## Accessors

### canvas

#### Get Signature

```ts
get canvas(): HTMLCanvasElement;
```

Get the textmodifier canvas containing the rendered output.

##### Returns

`HTMLCanvasElement`

#### Implementation of

```ts
ITextmodifier.canvas
```

***

### conversions

#### Get Signature

```ts
get conversions(): TextmodeConversionManager;
```

Access the conversion manager for this Textmodifier instance.

Use this to register custom conversion strategies that can be used
when converting images/videos/canvases into textmode representations.

##### Returns

[`TextmodeConversionManager`](../namespaces/conversion/classes/TextmodeConversionManager.md)

#### Implementation of

```ts
ITextmodifier.conversions
```

***

### filters

#### Get Signature

```ts
get filters(): TextmodeFilterManager;
```

Access the filter manager for this Textmodifier instance.

Use this to register custom filters that can be applied both globally
(via [filter](#filter)) and on individual layers (via [TextmodeLayer.filter](../namespaces/layering/classes/TextmodeLayer.md#filter)).

##### Example

```ts
// Register a custom filter once
await t.filters.register('vignette', vignetteShader, {
    u_intensity: ['intensity', 0.5]
});

t.draw(() => {
    t.background(0);
    t.char('A');
    t.rect(10, 10);

    // Apply filter globally to final output
    t.filter('vignette', { intensity: 0.8 });

    // Or apply to a specific layer
    t.layers.base.filter('vignette', 0.5);
});
```

##### Returns

[`TextmodeFilterManager`](../namespaces/filters/classes/TextmodeFilterManager.md)

#### Implementation of

```ts
ITextmodifier.filters
```

***

### font

#### Get Signature

```ts
get font(): TextmodeFont;
```

Get the current font object used for rendering the base layer.

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const font = t.font;
  const count = font.characters.length;
  const info = `FONT CHARS: ${count}`;

  // Visualize the character set count as a bar
  const barWidth = Math.min(Math.ceil(count / 10), t.grid.cols - 4);

  t.char('░');
  t.charColor(100, 100, 100);
  t.rect(barWidth + 2, 5);

  t.char('█');
  t.charColor(0, 150, 255);
  t.rect(barWidth, 3);

  // Label
  for (let i = 0; i < info.length; i++) {
    t.push();
    t.translate(i - info.length / 2, 0);
    t.char(info[i]);
    t.cellColor(0);
    t.charColor(255);
    t.point();
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Returns

[`TextmodeFont`](../namespaces/loadables/classes/TextmodeFont.md)

#### Implementation of

```ts
ITextmodifier.font
```

***

### frameCount

#### Get Signature

```ts
get frameCount(): number;
```

Get the current frame count.

The frame count starts at 0, but is incremented at the beginning of each draw cycle.
This means that inside the first call to `draw()`, `frameCount` is 1.

This value is useful for timing-based animations, patterns, and state changes.

##### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
  t.background(0);

  // Use frameCount to rotate a shape over time
  t.translate(0, 0);
  t.rotateZ(t.frameCount * 2);
  t.char('X');
  t.rect(10, 10);

  // Create a blinking effect
  if (t.frameCount % 60 < 30) {
    t.translate(15, 0);
    t.char('O');
    t.rect(5, 5);
  }
});
```

##### Returns

`number`

The number of frames rendered since the sketch started.

#### Set Signature

```ts
set frameCount(value): void;
```

Set the current frame count.

Modifying the frame count can be used to reset animations or jump to a specific
point in time-based patterns.

##### Example

```javascript
const t = textmode.create();

t.keyPressed((data) => {
  // Reset animation when SPACE is pressed
  if (data.key === ' ') {
    t.frameCount = 0;
  }
});
```

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | The new frame count value. |

##### Returns

`void`

#### Implementation of

```ts
ITextmodifier.frameCount
```

***

### grid

#### Get Signature

```ts
get grid(): undefined | TextmodeGrid;
```

Get the grid whose layer is currently being drawn to.
If called outside of a layers draw callback, returns the base layer's grid.

If no grid is set (e.g., before user setup()), returns `undefined`.

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);
  const { cols, rows } = t.grid;
  const time = t.frameCount * 0.05;

  // Iterate through the grid to create a field of waving characters
  // We use centered coordinates (from -cols/2 to cols/2)
  for (let y = -Math.floor(rows / 2); y < Math.floor(rows / 2); y++) {
    for (let x = -Math.floor(cols / 2); x < Math.floor(cols / 2); x++) {
      // Calculate distance from center for a ripple effect
      const dist = Math.sqrt(x * x + y * y);
      const ripple = Math.sin(dist * 0.4 - time);

      // Map ripple value to character and color
      const charIdx = Math.floor((ripple + 1) * 2); // 0 to 4
      const glyph = ['.', ':', '-', '=', '#'][charIdx] || '#';

      t.push();
      t.translate(x + 0.5, y + 0.5);
      t.char(glyph);
      t.charColor(100 + ripple * 155, 150 + ripple * 50, 255);
      t.point();
      t.pop();
    }
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Returns

`undefined` \| [`TextmodeGrid`](TextmodeGrid.md)

#### Implementation of

```ts
ITextmodifier.grid
```

***

### height

#### Get Signature

```ts
get height(): number;
```

Get the height of the canvas in pixels.

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const h = t.height;
  const info = `HEIGHT: ${h}px`;

  // Draw vertical arrows pointing to edges
  const arrowLen = Math.floor(t.grid.rows / 2) - 3;

  // Top arrow
  for(let i=0; i<arrowLen; i++) {
     t.push();
     t.translate(0, -arrowLen + i);
     t.char(i === 0 ? '╩' : '|');
     t.charColor(100, 255, 100);
     t.point();
     t.pop();
  }

  // Bottom arrow
  for(let i=0; i<arrowLen; i++) {
     t.push();
     t.translate(0, arrowLen - i);
     t.char(i === 0 ? '╚' : '|');
     t.charColor(100, 255, 100);
     t.point();
     t.pop();
  }

  // Label
  for (let i = 0; i < info.length; i++) {
    t.push();
    t.translate(i - info.length / 2, 0);
    t.char(info[i]);
    t.charColor(255);
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
ITextmodifier.height
```

***

### isDisposed

#### Get Signature

```ts
get isDisposed(): boolean;
```

Check if the instance has been disposed/destroyed.

##### Returns

`boolean`

#### Implementation of

```ts
ITextmodifier.isDisposed
```

***

### isRenderingFrame

#### Get Signature

```ts
get isRenderingFrame(): boolean;
```

Check if rendering is currently in progress for this frame.

##### Returns

`boolean`

#### Implementation of

```ts
ITextmodifier.isRenderingFrame
```

***

### lastKeyPressed

#### Get Signature

```ts
get lastKeyPressed(): null | string;
```

Get the last key that was pressed.

Returns the key string of the last pressed key, or null if no key has been pressed.

##### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
  t.background(0);

  const lastKey = t.lastKeyPressed;
  if (lastKey) {
    // Display the last pressed key
    t.char(lastKey);
    t.charColor(255, 255, 255);
    t.point();
  }
});
```

##### Returns

`null` \| `string`

#### Implementation of

```ts
ITextmodifier.lastKeyPressed
```

***

### lastKeyReleased

#### Get Signature

```ts
get lastKeyReleased(): null | string;
```

Get the last key that was released.

Returns the key string of the last released key, or null if no key has been released.

##### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
  t.background(0);

  const lastKey = t.lastKeyReleased;
  if (lastKey) {
    // Display the last released key
    t.char(lastKey);
    t.charColor(128, 128, 128);
    t.point();
  }
});
```

##### Returns

`null` \| `string`

#### Implementation of

```ts
ITextmodifier.lastKeyReleased
```

***

### layers

#### Get Signature

```ts
get layers(): TextmodeLayerManager;
```

Access the layer manager for this Textmodifier instance.

Use this to create and manage multiple layers within the textmode rendering context.
Each layer has its own grid, font, draw callback, and filters.

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

// Create a second layer on top of the base layer
const topLayer = t.layers.add();

t.draw(() => {
  // 1. Draw background on base layer
  t.background(0);

  // Rotating pattern in background
  t.push();
  t.rotateZ(t.frameCount);
  t.char('▼');
  t.charColor(50, 100, 150);
  t.rect(40, 40);
  t.pop();
});

topLayer.draw(() => {
  // 2. Draw HUD/Text on top layer
  t.clear()

  const time = t.frameCount * 0.05;
  const x = Math.sin(time) * 10;

  t.char('æ');
  t.charColor(255, 200, 0);
  t.cellColor(0, 0, 0, 0); // Transparent cell background
  t.translate(x, 0);
  t.point();
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Returns

[`TextmodeLayerManager`](../namespaces/layering/classes/TextmodeLayerManager.md)

#### Implementation of

```ts
ITextmodifier.layers
```

***

### loading

#### Get Signature

```ts
get loading(): LoadingScreenManager;
```

Provides access to the loading screen manager to control boot-time loading UX.

##### Example

```javascript
const t = textmode.create({ width: 800, height: 600, loadingScreen: { message: 'loading...' } });

t.setup(async () => {
  // Initialize two loading phases
  const phase1 = t.loading.addPhase('Loading assets');
  const phase2 = t.loading.addPhase('Initializing game');

  // Start the first phase and simulate asset loading
  await phase1.track(async () => {
    for (let i = 0; i <= 5; i++) {
      phase1.report(i / 5);
      // Small delay - increases visibility of the loading animation
      await new Promise((r) => setTimeout(r, 200));
    }
  });

  // Start the second phase and simulate initialization
  await phase2.track(async () => {
    for (let i = 0; i <= 5; i++) {
      phase2.report(i / 5);
      await new Promise((r) => setTimeout(r, 150));
    }
  });

  // Optionally set a final message before the screen transitions away
  t.loading.message('Ready - enjoy!');
});
```

##### Returns

[`LoadingScreenManager`](../namespaces/loading/classes/LoadingScreenManager.md)

#### Implementation of

```ts
ITextmodifier.loading
```

***

### millis

#### Get Signature

```ts
get millis(): number;
```

Get the number of milliseconds since the sketch started running.

`millis` keeps track of how long a sketch has been running in milliseconds
(thousandths of a second). This information is often helpful for timing events
and animations.

Time tracking begins before the code in [setup](#setup) runs. If loading screen is
enabled, `millis` begins tracking as soon as the loading screen starts.

This property is connected to [secs](#secs) - setting one will affect the other.

##### Examples

```javascript
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
  t.background(0);

  // Calculate a heartbeat pulse every 1000ms
  const pulse = (t.millis % 1000) / 1000;

  // Ease out effect: rapid expansion then fade
  // This uses time to drive animation state
  const scale = 1 + Math.sin(pulse * Math.PI) * 0.5;
  const alpha = 255 * (1 - pulse);

  t.char('•');
  t.charColor(255, 50, 50, alpha);

  // Draw pulsing heart at center
  t.rect(10 * scale, 10 * scale);
});
```

```javascript
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
  t.background(0);

  // Use millis for smooth animation
  const time = t.millis / 1000;
  const x = Math.sin(time) * 20 + 40;

  t.char('O', Math.floor(x), 10);
});
```

```javascript
// Press SPACE to reset the animation timer.

const t = textmode.create({ width: 800, height: 600 });

t.keyPressed((data) => {
  if (data.key === ' ') {
    // Reset the timer to 0
    t.millis = 0;
  }
});

t.draw(() => {
  t.background(0);

  // Create a visual timer bar that fills up every 3 seconds
  const duration = 3000;
  const elapsed = t.millis;
  const progress = (elapsed % duration) / duration;

  // Draw bar background
  const barWidth = 40;
  const barHeight = 4;
  const w = barWidth * progress;

  // Draw empty background (centered)
  t.charColor(64);
  t.rect(barWidth, barHeight);

  // Draw filling bar
  // Calculate center for the filled portion to align it to the left
  t.push();
  t.translate(-barWidth / 2 + w / 2, 0);
  t.char('=');
  t.charColor(100, 200, 255);
  t.rect(w, barHeight);
  t.pop();

  // Draw numeric timer above
  t.push();
  t.translate(0, -5);
  t.charColor(255);
  // Show seconds with 1 decimal place
  const timeString = (elapsed / 1000).toFixed(1) + 's';

  // Simple manual text drawing
  for(let i=0; i<timeString.length; i++) {
    t.push();
    t.translate(i, 0);
    t.char(timeString[i]);
    t.point();
    t.pop();
  }
  t.pop();

  t.pop();
});
```

##### Returns

`number`

Number of milliseconds since starting the sketch.

#### Set Signature

```ts
set millis(value): void;
```

Set the elapsed milliseconds by adjusting the internal start time.

This allows seeking/scrubbing in animations. Setting `millis` will also
affect the value returned by [secs](#secs) since they are connected.

##### Example

```javascript
// Hold SPACE and move mouse to scrub time.

const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  // Manual Time Scrubbing
  if (t.isKeyPressed(' ')) {
    // Map mouse position to time (0 to 10 seconds)
    // Mouse X is center-based (-cols/2 to +cols/2)
    const progress = (t.mouse.x + t.grid.cols / 2) / t.grid.cols;
    t.millis = Math.max(0, progress * 10000);
    t.cursor('ew-resize');
  } else {
    t.cursor('default');
  }

  const time = t.millis;

  // Draw a spiral that unwinds with time
  const count = 256;
  const maxRadius = Math.min(t.grid.cols, t.grid.rows) * 0.4;

  for (let i = 0; i < count; i++) {
    const pct = i / count;
    // Angle rotates with time
    const angle = i * 0.5 + time * 0.002;
    const r = pct * maxRadius;

    const x = Math.cos(angle) * r;
    const y = Math.sin(angle) * r;

    t.push();
    t.translate(x, y);

    // Color pulse based on time and index
    const hue = (time * 0.1 + i * 5) % 255;
    t.charColor(hue, 255 - hue, 200);

    t.char(i % 3 === 0 ? 'O' : '.');
    t.point();
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | The new elapsed time in milliseconds |

##### Returns

`void`

#### Implementation of

```ts
ITextmodifier.millis
```

***

### modifierState

#### Get Signature

```ts
get modifierState(): object;
```

Get current modifier key states.

Returns an object with boolean properties for each modifier key.

##### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
    t.background(0);
    const mods = t.modifierState;

    // Change behavior based on modifier keys
    if (mods.shift) {
        // Draw in caps or with different behavior
        t.char('S');
        t.charColor(255, 255, 0);
        t.point();
    }

    if (mods.ctrl) {
        // Control key is pressed
        t.translate(2, 0);
        t.char('C');
        t.charColor(0, 255, 255);
        t.point();
    }
});
```

##### Returns

| Name | Type | Description |
| ------ | ------ | ------ |
| `alt` | `boolean` | Whether the Alt key is currently pressed |
| `ctrl` | `boolean` | Whether the Ctrl key is currently pressed |
| `meta` | `boolean` | Whether the Meta key *(Command on Mac, Windows key on Windows)* is currently pressed |
| `shift` | `boolean` | Whether the Shift key is currently pressed |

#### Implementation of

```ts
ITextmodifier.modifierState
```

***

### mouse

#### Get Signature

```ts
get mouse(): MousePosition;
```

Get the current mouse position in center-based grid coordinates.

Returns the mouse position as grid cell coordinates where `(0, 0)` is the center cell.
This matches the drawing coordinate system, so coordinates can be used directly with `translate()`.

If the mouse is outside the grid or the instance is not ready,
it returns `{ x: Number.NEGATIVE_INFINITY, y: Number.NEGATIVE_INFINITY }`.

##### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
    t.background(0);

    // Mouse coordinates are center-based, matching the drawing system
    if (t.mouse.x !== Number.NEGATIVE_INFINITY) {
        t.translate(t.mouse.x, t.mouse.y);
        t.char('*');
        t.charColor(255, 0, 0);
        t.cellColor(100);
        t.point();
    }
});
```

##### Returns

[`MousePosition`](../namespaces/input/namespaces/mouse/interfaces/MousePosition.md)

#### Implementation of

```ts
ITextmodifier.mouse
```

***

### overlay

#### Get Signature

```ts
get overlay(): 
  | undefined
  | TextmodeImage;
```

If in overlay mode, returns the [TextmodeImage](../namespaces/loadables/classes/TextmodeImage.md) instance capturing the target canvas/video content,
allowing further configuration of the conversion parameters.

##### Example

```js
// Create the textmode instance using the p5 canvas as input overlay
const t = textmode.create({ fontSize: 16, canvas: p.canvas, overlay: true });

// Configure overlay conversion once fonts and grid are ready
t.setup(() => {
  t.overlay
    .characters(' .:-=+*#%@')        // Character set for brightness mapping
    .cellColorMode('fixed')          // Use fixed background cell color
    .cellColor(0, 0, 0)              // Black background for each cell
    .charColorMode('sampled')        // Sample the character color from the image
    .background(0, 0, 0, 255);       // Black fallback for transparent pixels
});

// In the draw loop, pass the overlay into the text grid
t.draw(() => {
  t.clear();
  t.image(t.overlay, t.grid.cols, t.grid.rows);
});
```

##### Returns

  \| `undefined`
  \| [`TextmodeImage`](../namespaces/loadables/classes/TextmodeImage.md)

#### Implementation of

```ts
ITextmodifier.overlay
```

***

### pressedKeys

#### Get Signature

```ts
get pressedKeys(): string[];
```

Get all currently pressed keys.

Returns an array of key strings that are currently being held down.

##### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
    t.background(0);

    const pressed = t.pressedKeys;

    // Display all currently pressed keys
    pressed.forEach((key, index) => {
        t.push();
        t.char(key[0] || '?'); // Show first character of key name
        t.charColor(255, 200, 100);
        t.translate(index, 0);
        t.point();
        t.pop();
    });
});
```

##### Returns

`string`[]

#### Implementation of

```ts
ITextmodifier.pressedKeys
```

***

### secs

#### Get Signature

```ts
get secs(): number;
```

Get the number of seconds since the sketch started running.

`secs` is a convenience property that returns the elapsed time in seconds
instead of milliseconds. Equivalent to `millis / 1000`.

Time tracking begins before the code in [setup](#setup) runs. If loading screen is
enabled, `secs` begins tracking as soon as the loading screen starts.

This property is connected to [millis](#millis) - setting one will affect the other.

##### Examples

```javascript
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
  t.background(0);

  // Use secs to drive a smooth sine wave animation
  const time = t.secs;
  const x = Math.sin(time * 2) * 20;
  const y = Math.cos(time * 3) * 10;

  t.translate(x, y);
  t.char('O');
  t.charColor(255, 100, 100);
  t.rect(3, 3);
});
```

```javascript
const t = textmode.create({ width: 800, height: 600 });

// Press SPACE to jump forward in time
t.keyPressed((e) => {
  if (e.key === ' ') {
    t.secs += 2; // Jump 2 seconds ahead
  }
});

t.draw(() => {
  t.background(0);

  // Animation driven by t.secs
  const time = t.secs;

  // Calculate position based on time (wrapping loop)
  const loopDuration = 5; // seconds
  const progress = (time % loopDuration) / loopDuration;

  // Move from left to right (-cols/2 to +cols/2)
  const x = (progress - 0.5) * t.grid.cols;

  t.translate(x, 0);
  t.char('>');
  t.charColor(50, 255, 100);
  t.rect(4, 4);
});
```

##### Returns

`number`

Number of seconds since starting the sketch.

#### Set Signature

```ts
set secs(value): void;
```

Set the elapsed seconds by adjusting the internal start time.

This allows seeking/scrubbing in animations. Setting `secs` will also
affect the value returned by [millis](#millis) since they are connected.

##### Example

```javascript
// Hold SPACE and drag to manipulate time.

const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  // Interaction: Scrub time
  if (t.isKeyPressed(' ')) {
    // Map mouse position to a 5-second window
    const progress = (t.mouse.x + t.grid.cols / 2) / t.grid.cols;
    t.secs = Math.max(0, progress * 5);
    t.cursor('grabbing');
  } else {
    t.cursor('default');
  }

  const time = t.secs;
  const length = Math.min(t.grid.rows, t.grid.cols) * 0.35;
  // Pendulum physics (approximate)
  const angle = Math.sin(time * 3) * Math.PI * 0.3;

  const bobX = Math.sin(angle) * length;
  const bobY = Math.cos(angle) * length;

  // Draw String
  t.charColor(80);
  t.char('.');
  t.line(0, 0, bobX, bobY);

  // Draw "Echoes" of the past
  for (let i = 1; i <= 4; i++) {
    const lag = i * 0.08;
    const echoAngle = Math.sin((time - lag) * 3) * Math.PI * 0.3;
    const ex = Math.sin(echoAngle) * length;
    const ey = Math.cos(echoAngle) * length;

    t.push();
    t.translate(ex, ey);
    t.charColor(50, 100, 255, 100 - i * 20);
    t.char('o');
    t.ellipse(6 - i, 6 - i);
    t.pop();
  }

  // Draw Main Bob
  t.push();
  t.translate(bobX, bobY);
  // Hot color when moving fast (center), cool when slow (edges)
  const speed = Math.abs(Math.cos(time * 3));
  t.charColor(255, 100 + speed * 155, 50);
  t.char('O');
  t.ellipse(8, 8);
  t.pop();
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | The new elapsed time in seconds |

##### Returns

`void`

#### Implementation of

```ts
ITextmodifier.secs
```

***

### touches

#### Get Signature

```ts
get touches(): TouchPosition[];
```

Get the currently active touches in grid coordinates.

Returns a copy of each touch, including grid position, client coordinates, and pressure when
available. Use this inside a draw loop to react to active multi-touch scenarios.

##### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
  t.background(0);

  // Visualize all active touches
  for (const touch of t.touches) {
    t.push();
    // touch.x and touch.y are already center-relative
    t.translate(touch.x, touch.y);

    const pulse = 1 + Math.sin(t.frameCount * 0.2) * 0.5;
    const radius = (touch.pressure || 0.5) * 20 * pulse;

    // Draw glowing ring
    t.char('○');
    t.charColor(255, 100, 150);
    t.ellipse(radius, radius);

    // Draw center point with ID digit
    t.char((touch.id % 9 + 1).toString());
    t.charColor(255);
    t.point();

    t.pop();
  }

  // Hint text if no touches
  if (t.touches.length === 0) {
    t.char('?');
    t.charColor(80);
    t.point();
  }
});
```

##### Returns

[`TouchPosition`](../namespaces/input/namespaces/touch/interfaces/TouchPosition.md)[]

#### Implementation of

```ts
ITextmodifier.touches
```

***

### width

#### Get Signature

```ts
get width(): number;
```

Get the width of the canvas in pixels.

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const w = t.width;
  const info = `WIDTH: ${w}px`;

  // Draw arrows pointing to edges
  const arrowLen = Math.floor(t.grid.cols / 2) - 4;

  // Left arrow
  for(let i=0; i<arrowLen; i++) {
     t.push();
     t.translate(-arrowLen + i, 0);
     t.char(i === 0 ? '<' : '-');
     t.charColor(255, 100, 100);
     t.point();
     t.pop();
  }

  // Right arrow
  for(let i=0; i<arrowLen; i++) {
     t.push();
     t.translate(arrowLen - i, 0);
     t.char(i === 0 ? '>' : '-');
     t.charColor(255, 100, 100);
     t.point();
     t.pop();
  }

  // Label
  for (let i = 0; i < info.length; i++) {
    t.push();
    t.translate(i - info.length / 2, 0);
    t.char(info[i]);
    t.charColor(255);
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
ITextmodifier.width
```

## Methods

### arc()

```ts
arc(
   width, 
   height, 
   startAngle, 
   endAngle): void;
```

Draw an arc with the current settings.
Position is controlled via [translate](#translate), [push](#push), and [pop](#pop).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `width` | `number` | Width of the arc in grid cells |
| `height` | `number` | Height of the arc in grid cells |
| `startAngle` | `number` | Starting angle in degrees |
| `endAngle` | `number` | Ending angle in degrees |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 8 });

t.draw(() => {
  t.background(10, 15, 25); // Deep space blue

  const time = t.frameCount * 0.02;
  const arcCount = 32;
  const baseSize = Math.min(t.grid.cols, t.grid.rows);

  for (let i = 0; i < arcCount; i++) {
    const phase = i / arcCount;
    const size = baseSize * (0.3 + 0.7 * Math.sin(time + phase * Math.PI));
    const startAngle = (time * 50 + i * 45) % 360;
    const sweep = 45 + 90 * (0.5 + 0.5 * Math.cos(time * 0.7 + i));

    t.push();
    t.rotateZ(i * (360 / arcCount) + time * 20);

    // Color shifting
    const r = 100 + 155 * Math.sin(time + phase);
    const g = 150 + 105 * Math.cos(time * 0.5 + phase);
    const b = 200 + 55 * Math.sin(time * 0.8);

    t.charColor(r, g, b);
    t.char(['+', '•', '·', '░'][i % 4]);
    t.lineWeight(2 + i % 3);

    t.arc(size, size, startAngle, startAngle + sweep);
    t.pop();
  }

  // Center core
  t.char('@');
  t.charColor(255, 255, 200);
  t.rotateZ(-time * 100);
  t.rect(2, 2);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.arc
```

***

### background()

#### Call Signature

```ts
background(): TextmodeColor;
```

Get the current background color.

##### Returns

[`TextmodeColor`](TextmodeColor.md)

The current background color as a [TextmodeColor](TextmodeColor.md).

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  // Set dynamic background
  t.background(
    127 + 127 * Math.sin(t.frameCount * 0.01),
    50,
    127 + 127 * Math.cos(t.frameCount * 0.01)
  );

  // Retrieve it to create a contrasting shape color
  const bg = t.background();
  t.charColor(255 - bg.r, 255 - bg.g, 255 - bg.b);

  t.char('☼');
  t.rect(10, 10);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Implementation of

```ts
ITextmodifier.background
```

#### Call Signature

```ts
background(gray, alpha?): void;
```

Set the background color using a grayscale value.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gray` | `number` | Grayscale value (0-255) |
| `alpha?` | `number` | Optional alpha value (0-255) |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  // Pulsing grayscale background
  const gray = 127 + 127 * Math.sin(t.frameCount * 0.05);
  t.background(gray);

  t.charColor(255 - gray); // Inverse color for text
  t.cellColor(0, 0, 0, 0); // Transparent cell background
  t.char('+');
  t.rect(20, 20);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Implementation of

```ts
ITextmodifier.background
```

#### Call Signature

```ts
background(
   r, 
   g, 
   b, 
   a?): void;
```

Set the background color using RGB(A) values.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | `number` | Red component (0-255) |
| `g` | `number` | Green component (0-255) |
| `b` | `number` | Blue component (0-255) |
| `a?` | `number` | Optional alpha component (0-255) |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  // Colorful background based on time
  t.background(
    100 + 100 * Math.sin(t.frameCount * 0.03),
    100 + 100 * Math.sin(t.frameCount * 0.04),
    100 + 100 * Math.sin(t.frameCount * 0.05)
  );

  t.char('B');
  t.charColor(255);
  t.rect(10, 10);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Implementation of

```ts
ITextmodifier.background
```

#### Call Signature

```ts
background(value): void;
```

Set the background color using a CSS string or TextmodeColor object.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| [`TextmodeColor`](TextmodeColor.md) | Hex string, `rgb()`/`rgba()` string, or an existing color object |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  // Switch between hex string and color object
  if (Math.floor(t.frameCount / 60) % 2 === 0) {
    t.background('#220044');
  } else {
    const col = t.color(0, 100, 50);
    t.background(col);
  }

  t.char('#');
  t.charColor(255);
  t.rect(15, 15);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Implementation of

```ts
ITextmodifier.background
```

***

### bezierCurve()

```ts
bezierCurve(
   x1, 
   y1, 
   cp1x, 
   cp1y, 
   cp2x, 
   cp2y, 
   x2, 
   y2): void;
```

Draw a smooth cubic bezier curve between two points with two control points.
The curve thickness is controlled by the current [lineWeight](#lineweight) setting.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x1` | `number` | Start point X coordinate in grid cells |
| `y1` | `number` | Start point Y coordinate in grid cells |
| `cp1x` | `number` | First control point X coordinate in grid cells |
| `cp1y` | `number` | First control point Y coordinate in grid cells |
| `cp2x` | `number` | Second control point X coordinate in grid cells |
| `cp2y` | `number` | Second control point Y coordinate in grid cells |
| `x2` | `number` | End point X coordinate in grid cells |
| `y2` | `number` | End point Y coordinate in grid cells |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(5, 5, 10);

  const time = t.frameCount * 0.015;
  const petals = 8;
  const size = Math.min(t.grid.cols, t.grid.rows) * 0.35;

  t.lineWeight(1);

  for (let i = 0; i < petals; i++) {
    t.push();
    const angle = (i / petals) * 360 + t.frameCount * 0.2;
    t.rotateZ(angle);

    // Dynamic control points based on time
    const cp1 = size * (0.5 + 0.3 * Math.sin(time + i));
    const cp2 = size * (0.5 + 0.3 * Math.cos(time + i * 0.5));

    // Ethereal colors
    t.charColor(100 + 100 * Math.sin(time + i), 100, 255);
    t.char(['~', '≈', '∫'][i % 3]);

    t.bezierCurve(
      0, 0,            // Anchor 1
      cp1, -cp2,       // Control 1
      cp1, cp2,        // Control 2
      size, 0          // Anchor 2
    );
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.bezierCurve
```

***

### cellColor()

#### Call Signature

```ts
cellColor(): TextmodeColor;
```

Get the current cell background color.

##### Returns

[`TextmodeColor`](TextmodeColor.md)

The current cell color as a [TextmodeColor](TextmodeColor.md).

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  // Set cell color based on position
  const x = Math.sin(t.frameCount * 0.05) * 10;
  if (x > 0) t.cellColor(50, 0, 0);
  else t.cellColor(0, 0, 50);

  // Query the current cell color to set the character color
  const cell = t.cellColor();
  t.charColor(255 - cell.r, 255 - cell.g, 255 - cell.b);

  t.char('.');
  t.translate(x, 0);
  t.rect(10, 10);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Implementation of

```ts
ITextmodifier.cellColor
```

#### Call Signature

```ts
cellColor(gray, alpha?): void;
```

Set the cell background color using a grayscale value.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gray` | `number` | Grayscale value (0-255) |
| `alpha?` | `number` | Optional alpha value (0-255) |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);
  t.charColor(255);
  t.char(' ');

  // Vary cell brightness
  const brightness = 127 + 127 * Math.sin(t.frameCount * 0.1);
  t.cellColor(brightness);
  t.rect(10, 10);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Implementation of

```ts
ITextmodifier.cellColor
```

#### Call Signature

```ts
cellColor(
   r, 
   g, 
   b, 
   a?): void;
```

Set the cell background color using RGB(A) values.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | `number` | Red component (0-255) |
| `g` | `number` | Green component (0-255) |
| `b` | `number` | Blue component (0-255) |
| `a?` | `number` | Optional alpha component (0-255) |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);
  t.charColor(0, 0, 0);
  t.char('/');

  // Cyan cell background
  t.cellColor(0, 255, 255);
  t.rect(10, 10);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Implementation of

```ts
ITextmodifier.cellColor
```

#### Call Signature

```ts
cellColor(value): void;
```

Set the cell background color using a CSS string or TextmodeColor object.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| [`TextmodeColor`](TextmodeColor.md) | Hex string, `rgb()`/`rgba()` string, or an existing color object |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);
  t.char('@');

  // Use hex for cell background
  t.cellColor('#ff4400');
  t.rect(10, 10);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Implementation of

```ts
ITextmodifier.cellColor
```

***

### char()

#### Call Signature

```ts
char(character): void;
```

Set the character to be used for subsequent rendering operations.
Accepts a single character string or a character index in the current font.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `character` | `string` \| `number` | The character string or font character index to set for rendering |

##### Returns

`void`

##### Example

```javascript
// Swapping characters over time
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  // Cycle through character indices
  const charIndex = Math.floor(t.frameCount / 10) % t.font.characters.length;
  t.char(charIndex);

  t.charColor(0, 255, 150);
  t.rotateZ(t.frameCount * 2);
  t.rect(15, 15);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Implementation of

```ts
ITextmodifier.char
```

#### Call Signature

```ts
char(): string;
```

Get the current character string used for rendering.

##### Returns

`string`

The current character string.

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const chars = ['A', 'B', 'C'];
  const index = Math.floor(t.frameCount / 30) % chars.length;
  t.char(chars[index]);

  // Query the current character to decide the color
  const current = t.char();

  if (current === 'A') t.charColor(255, 100, 100);
  else if (current === 'B') t.charColor(100, 255, 100);
  else t.charColor(100, 100, 255);

  t.rect(10, 10);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Implementation of

```ts
ITextmodifier.char
```

***

### charColor()

#### Call Signature

```ts
charColor(): TextmodeColor;
```

Get the current character color.

##### Returns

[`TextmodeColor`](TextmodeColor.md)

The current character color as a [TextmodeColor](TextmodeColor.md).

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  // Set a dynamic base color
  t.charColor(
    127 + 127 * Math.sin(t.frameCount * 0.05),
    127 + 127 * Math.cos(t.frameCount * 0.05),
    200
  );

  // Draw base shape
  t.char('A');
  t.rect(10, 10);

  // Query the color we just set
  const col = t.charColor();

  // Create a complementary color (inverse) for the second shape
  t.push();
  t.translate(15, 0);
  t.charColor(255 - col.r, 255 - col.g, 255 - col.b);
  t.char('B');
  t.rect(10, 10);
  t.pop();
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Implementation of

```ts
ITextmodifier.charColor
```

#### Call Signature

```ts
charColor(gray, alpha?): void;
```

Set the character color using a grayscale value.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gray` | `number` | Grayscale value (0-255) |
| `alpha?` | `number` | Optional alpha value (0-255) |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);
  // Fade character color in and out
  const alpha = 127 + 127 * Math.sin(t.frameCount * 0.1);
  t.charColor(255, alpha);
  t.char('A');
  t.rect(10, 10);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Implementation of

```ts
ITextmodifier.charColor
```

#### Call Signature

```ts
charColor(
   r, 
   g, 
   b, 
   a?): void;
```

Set the character color using RGB(A) values.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | `number` | Red component (0-255) |
| `g` | `number` | Green component (0-255) |
| `b` | `number` | Blue component (0-255) |
| `a?` | `number` | Optional alpha component (0-255) |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);
  // Cycle through colors
  t.charColor(
    Math.sin(t.frameCount * 0.05) * 127 + 128,
    Math.sin(t.frameCount * 0.05 + 2) * 127 + 128,
    Math.sin(t.frameCount * 0.05 + 4) * 127 + 128
  );
  t.char('=');
  t.rect(10, 10);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Implementation of

```ts
ITextmodifier.charColor
```

#### Call Signature

```ts
charColor(value): void;
```

Set the character color using a CSS string or TextmodeColor object.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| [`TextmodeColor`](TextmodeColor.md) | Hex string, `rgb()`/`rgba()` string, or an existing color object |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);
  // Use hex color
  t.charColor('#FFD700'); // Gold
  t.char('$');
  t.rect(10, 10);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Implementation of

```ts
ITextmodifier.charColor
```

***

### charRotation()

```ts
charRotation(degrees?): number | void;
```

Set the character rotation angle for subsequent character rendering, or get current angle.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `degrees?` | `number` | The rotation angle in degrees (optional) |

#### Returns

`number` \| `void`

The current rotation angle in degrees if called without arguments

#### Example

```javascript
// Rotating characters independently of geometry
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const count = 64;
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const x = Math.cos(angle) * 20;
    const y = Math.sin(angle) * 20;

    t.push();
    t.translate(x, y);

    // Rotate the character itself
    t.charRotation(t.frameCount * 5 + i * 30);

    t.charColor(255, 200, 100);
    t.char('+');
    t.point();
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.charRotation
```

***

### clear()

```ts
clear(): void;
```

Clear the layer currently drawing to.

Used to clear the layer at the start of its drawing cycle.

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
 width: 800,
 height: 600,
})

t.draw(() => {
 // Clear the canvas
 t.clear();
});
```

#### Implementation of

```ts
ITextmodifier.clear
```

***

### color()

#### Call Signature

```ts
color(gray, alpha?): TextmodeColor;
```

Create a reusable color object from a grayscale value.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gray` | `number` | Grayscale value (0-255) |
| `alpha?` | `number` | Optional alpha value (0-255) |

##### Returns

[`TextmodeColor`](TextmodeColor.md)

A TextmodeColor instance

##### Example

```javascript
// Dynamic color creation
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const count = 10;
  for (let i = 0; i < count; i++) {
    // Create a reusable color for each slice
    const brightness = (i / (count - 1)) * 255;
    const col = t.color(brightness);

    t.push();
    t.translate((i - (count - 1) / 2) * 5, 0);
    t.charColor(col);
    t.char('█');
    t.rect(4, 30);
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Implementation of

```ts
ITextmodifier.color
```

#### Call Signature

```ts
color(
   r, 
   g, 
   b, 
   a?): TextmodeColor;
```

Create a reusable color object from RGB(A) values.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | `number` | Red component (0-255) |
| `g` | `number` | Green component (0-255) |
| `b` | `number` | Blue component (0-255) |
| `a?` | `number` | Optional alpha component (0-255) |

##### Returns

[`TextmodeColor`](TextmodeColor.md)

A TextmodeColor instance

##### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

// Create reusable colors
const red = t.color(255, 50, 50);
const blue = t.color(50, 100, 255);
// Semi-transparent yellow
const yellow = t.color(255, 255, 0, 150);

t.draw(() => {
  t.background(20);

  // Draw overlapping circles to show mixing
  const x = Math.sin(t.frameCount * 0.05) * 10;

  t.char('O');

  t.push();
  t.translate(-8 + x, 0);
  t.charColor(red);
  t.ellipse(16, 16);
  t.pop();

  t.push();
  t.translate(8 - x, 0);
  t.charColor(blue);
  t.ellipse(16, 16);
  t.pop();

  // Center shape
  t.charColor(yellow);
  t.ellipse(12, 12);
});
```

##### Implementation of

```ts
ITextmodifier.color
```

#### Call Signature

```ts
color(value): TextmodeColor;
```

Create a reusable color object from a CSS string or existing TextmodeColor.

Accepts hex strings (e.g. `'#FF0000'`) and `rgb()`/`rgba()` strings.
**Note:** Named CSS colors (e.g., `'red'`, `'blue'`) are **not** supported.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| [`TextmodeColor`](TextmodeColor.md) | Hex string, `rgb()`/`rgba()` string, or an existing color object |

##### Returns

[`TextmodeColor`](TextmodeColor.md)

A TextmodeColor instance

##### Example

```javascript
const dusk = t.color('#203040');
const copy = t.color(dusk);
```

##### Implementation of

```ts
ITextmodifier.color
```

***

### createFilterShader()

```ts
createFilterShader(fragmentSource): Promise<TextmodeShader>;
```

Create a custom filter shader from fragment shader source code or a file path.
The fragment shader automatically receives the standard vertex shader inputs
and must output to the 3 MRT attachments (character/transform, primary color, secondary color).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fragmentSource` | `string` | The fragment shader source code or a file path (e.g., './shader.frag') |

#### Returns

`Promise`\<[`TextmodeShader`](TextmodeShader.md)\>

A Promise that resolves to a compiled shader ready for use with [shader](#shader)

#### Example

```javascript
const t = textmode.create({
  width: 800,
  height: 600,
})

let waveShader;

t.setup(async () => {
  // Load shader from file
  waveShader = await t.createFilterShader('./shader.frag');

  // Or create from inline source
  // waveShader = await t.createFilterShader(`#version 300 es
  //   precision highp float;
  //
  //   in vec2 v_uv;
  //   in vec3 v_character;
  //   in vec4 v_primaryColor;
  //   in vec4 v_secondaryColor;
  //
  //   uniform float u_time;
  //
  //   layout(location = 0) out vec4 o_character;
  //   layout(location = 1) out vec4 o_primaryColor;
  //   layout(location = 2) out vec4 o_secondaryColor;
  //
  //   void main() {
  //     // Shader code here
  //   }
  // `);
});

t.draw(() => {
  if (waveShader) {
    t.shader(waveShader);
    t.setUniform('u_time', t.frameCount * 0.003);
    t.rect(t.grid.cols, t.grid.rows);
  }
});
```

#### Implementation of

```ts
ITextmodifier.createFilterShader
```

***

### createFramebuffer()

```ts
createFramebuffer(options): TextmodeFramebuffer;
```

Create a new framebuffer for offscreen rendering.

The framebuffer uses the same MRT structure as the main rendering pipeline.
By default it allocates 3 attachments (character + color data).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`TextmodeFramebufferOptions`](../type-aliases/TextmodeFramebufferOptions.md) | Configuration options for the framebuffer. |

#### Returns

[`TextmodeFramebuffer`](TextmodeFramebuffer.md)

A new Framebuffer instance.

#### Example

```javascript
const t = textmode.create({
  width: 800,
  height: 600,
});

// Create a framebuffer with 50x30 grid cells
const fb = t.createFramebuffer({
  width: 50,
  height: 30
});

t.draw(() => {
  // Render to framebuffer
  fb.begin();
  t.background(255, 0, 0);
  t.charColor(255);
  t.char('A');
  t.rect(20, 10);
  fb.end();

  // Render framebuffer to main canvas
  t.background(0);
  t.rotateZ(t.frameCount * 2);
  t.image(fb);
});
```

#### Implementation of

```ts
ITextmodifier.createFramebuffer
```

***

### createShader()

```ts
createShader(vertexSource, fragmentSource): Promise<TextmodeShader>;
```

Create a shader from vertex and fragment source code or file paths.
Accepts inline shader source or file paths (e.g. './shader.frag', './shader.vert', '.frag', '.vert').

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vertexSource` | `string` | The vertex shader source code or a file path |
| `fragmentSource` | `string` | The fragment shader source code or a file path |

#### Returns

`Promise`\<[`TextmodeShader`](TextmodeShader.md)\>

A Promise that resolves to a compiled shader

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

let customShader;

t.setup(async () => {
  // Define a vertex shader that passes through position and UVs
  const vert = `#version 300 es
    in vec4 a_position;
    in vec2 a_uv;
    out vec2 v_uv;
    void main() {
      gl_Position = a_position;
      v_uv = a_uv;
    }
  `;

  // Define a fragment shader that outputs a solid color
  // Note: Must match the MRT output layout of the textmode pipeline
  const frag = `#version 300 es
    precision highp float;
    in vec2 v_uv;
    layout(location = 0) out vec4 o_character;
    layout(location = 1) out vec4 o_primaryColor;
    layout(location = 2) out vec4 o_secondaryColor;

    void main() {
       // Output character data (RG=char index/value)
       o_character = vec4(0.1, 0.0, 0.0, 0.0);
       // Output primary color (Red)
       o_primaryColor = vec4(1.0, 0.0, 0.0, 1.0);
       // Output secondary color (Transparent)
       o_secondaryColor = vec4(0.0);
    }
  `;

  customShader = await t.createShader(vert, frag);
});

t.draw(() => {
  if (customShader) {
    t.shader(customShader);
    t.rect(10, 10);
  }
});
```

#### Implementation of

```ts
ITextmodifier.createShader
```

***

### createTexture()

```ts
createTexture(source): TextmodeTexture;
```

Create a texture from an external canvas or video element for integration with other WebGL libraries.

This method enables seamless integration with libraries like three.js, p5.js, Babylon.js,
hydra-synth, or any library that renders to a canvas element.

The texture automatically updates each frame to capture the latest content from the source.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | `HTMLCanvasElement` \| `HTMLVideoElement` | Canvas or video element from an external library |

#### Returns

[`TextmodeTexture`](../namespaces/loadables/classes/TextmodeTexture.md)

A TextmodeTexture that can be drawn with image()

#### Examples

```js
// === Three.js Integration ===
const threeRenderer = new THREE.WebGLRenderer();
// ... setup three.js scene ...

const t = textmode.create({ width: 800, height: 600 });

let tex;

t.setup(() => {
    // Create texture from three.js canvas - auto-updates every frame
    tex = t.createTexture(threeRenderer.domElement);
    tex.characters(" .:-=+*#%@")
       .charColorMode("sampled")
       .cellColorMode("fixed")
       .cellColor(0);
});

t.draw(() => {
    // Render three.js scene first
    threeRenderer.render(scene, camera);

    // Then render as textmode
    t.background(0);
    t.image(tex);
});
```

```js
// === hydra-synth Integration ===
const hydraInstance = new HydraSynth({ width: 800, height: 600 });
hydraInstance.synth.osc(10, 0.1).out();

let tex;

t.setup(() => {
    tex = t.createTexture(hydraInstance.canvas);
    tex.characters(" .:-=+*#%@");
});

t.draw(() => {
    t.image(tex);
});
```

#### Implementation of

```ts
ITextmodifier.createTexture
```

***

### cursor()

```ts
cursor(cursor?): void;
```

Set the mouse cursor for the textmode canvas.

Provide any valid CSS cursor value (e.g. 'default', 'pointer', 'crosshair', 'move', 'text', 'grab', 'grabbing',
'none', 'zoom-in', 'zoom-out', 'ns-resize', 'ew-resize', 'nwse-resize', 'nesw-resize', etc.),
or a CSS `url(...)` cursor. Call with no argument or an empty string to reset to default.

See MDN for all options: https://developer.mozilla.org/en-US/docs/Web/CSS/cursor

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `cursor?` | `string` |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });
const target = { width: 30, height: 15 };

t.draw(() => {
  t.background(0);
  t.charColor(255); // keep char visible
  t.char('*');
  t.rect(target.width, target.height);

  // Rectangle is centered at (0, 0) which is grid center
  // Mouse coordinates are also center-based, so we can compare directly
  const halfRectWidth = target.width / 2;
  const halfRectHeight = target.height / 2;

  const hovering =
    t.mouse.x !== Number.NEGATIVE_INFINITY &&
    t.mouse.x >= -halfRectWidth && t.mouse.x < halfRectWidth &&
    t.mouse.y >= -halfRectHeight && t.mouse.y < halfRectHeight;

  t.cursor(hovering ? 'pointer' : 'default');
});
```

#### Implementation of

```ts
ITextmodifier.cursor
```

***

### deltaTime()

```ts
deltaTime(): number;
```

Returns the time in milliseconds between the current frame and the previous frame.

`deltaTime()` is useful for creating frame-rate-independent animations. By multiplying
velocities and movements by `deltaTime()`, animations will run at consistent speeds
regardless of the actual frame rate.

#### Returns

`number`

Time elapsed between current and previous frame in milliseconds.

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

let x = 0;
const speed = 0.05; // 0.05 grid units per millisecond

t.draw(() => {
  t.background(0);

  // Update position based on elapsed time for consistent speed
  x += speed * t.deltaTime();

  // Wrap around screen
  if (x > t.grid.cols) x = -10;

  // Draw moving object
  t.translate(x, t.grid.rows / 2);
  t.char('>');
  t.charColor(255, 100, 50);
  t.rect(4, 2);
});
```

#### Implementation of

```ts
ITextmodifier.deltaTime
```

***

### destroy()

```ts
destroy(): void;
```

Completely destroy this Textmodifier instance and free all associated resources.

After calling this method, the instance should not be used and will be eligible for garbage collection.

#### Returns

`void`

#### Example

```js
// Create a textmodifier instance
const textmodifier = textmode.create();

// ...

// When done, completely clean up
textmodifier.destroy();

// Instance is now safely disposed and ready for garbage collection
```

#### Implementation of

```ts
ITextmodifier.destroy
```

***

### doubleTap()

```ts
doubleTap(callback): void;
```

Register a callback for double tap gestures.

Double taps reuse the same [TouchTapEventData](../namespaces/input/namespaces/touch/interfaces/TouchTapEventData.md) as taps with `taps` set to `2`. This
helper lets you supply a dedicated handler when you want to treat double taps differently.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchTapHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchTapHandler.md) | The function to call when a double tap is detected. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

let pulse = 0;
let activeColor = t.color(100, 200, 255);

t.doubleTap((data) => {
  // Trigger visual feedback at the tap location
  pulse = 20;
  // Randomize color
  activeColor = t.color(Math.random() * 255, 200, Math.random() * 255);
});

t.draw(() => {
  t.background(0);

  // Animate pulse
  if (pulse > 0) pulse--;

  // Draw central interactive box
  t.char('▓');
  t.charColor(activeColor);

  const size = 15 + pulse;
  t.rect(size, size);

  // Draw visual echo if pulsing
  if (pulse > 0) {
    t.push();
    t.char('░');
    t.charColor(255, 255, 255, pulse * 12);
    t.rect(size + 5, size + 5);
    t.pop();
  }
});
```

#### Implementation of

```ts
ITextmodifier.doubleTap
```

***

### draw()

```ts
draw(callback): void;
```

Set a draw callback function for the base layer.

This callback function is where all drawing commands should be placed for textmode rendering on the main layer.

If multiple layers are added via [Textmodifier.layers](#layers), each layer has its own draw callback set via [TextmodeLayer.draw](../namespaces/layering/classes/TextmodeLayer.md#draw).
This allows for complex multi-layered compositions with independent rendering logic per layer.

Calling this method is equivalent to setting the draw callback on the base layer,
while the direct layer callback has precedence if both are set.
```js
textmodifier.layers.base.draw(callback);
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` | The function to call before each render |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  // Create a dynamic, shifting pattern
  const time = t.frameCount * 0.05;

  for (let i = 0; i < 20; i++) {
    const angle = time + i * 0.3;
    const radius = 10 + i;

    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    t.push();
    t.translate(x, y);
    t.rotateZ(angle);

    // Color gradient from center out
    t.charColor(255 - i * 10, 100 + i * 5, 200);
    t.char(['+', 'x', 'o'][i % 3]);

    t.rect(2, 2);
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.draw
```

***

### ellipse()

```ts
ellipse(width?, height?): void;
```

Draw an ellipse with the current settings.
Position is controlled via [translate](#translate), [push](#push), and [pop](#pop).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `width?` | `number` | Width of the ellipse in grid cells (defaults to 1) |
| `height?` | `number` | Height of the ellipse in grid cells (defaults to 1) |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight, fontSize: 8 });

t.draw(() => {
  t.background(5, 5, 15);

  const time = t.frameCount * 0.02;
  const orbitCount = 12;
  const baseSize = Math.min(t.grid.cols, t.grid.rows);

  // Draw a series of harmonically rotating orbital rings
  for (let i = 0; i < orbitCount; i++) {
    const phase = i / orbitCount;

    t.push();
    // Complex 3D rotation based on index and time
    t.rotateX(time * 23 + i * 15);
    t.rotateY(time * 31 + i * 25);
    t.rotateZ(time * 17 + i * 35);

    // Color shifts through a cool-to-warm spectrum
    const hue = (phase * 360 + time * 50) % 360;
    t.charColor(150 + 105 * Math.sin(time + phase * 6), 100, 255);

    // Select character based on "depth" or index for texture variety
    t.char(['░', '▒', '▓', '█', '•', '·'][i % 6]);
    t.lineWeight(1 + (i % 3));

    const s = baseSize * (0.4 + 0.6 * Math.sin(time * 0.5 + phase * Math.PI));
    t.ellipse(s, s * 0.7);
    t.pop();
  }

  // Pulsing central star
  t.push();
  t.char('☼');
  t.charColor(255, 255, 200);
  t.rotateZ(-time * 100);
  const pulse = 2 + Math.sin(time * 8) * 0.5;
  t.ellipse(pulse, pulse);
  t.pop();
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.ellipse
```

***

### fill()

#### Call Signature

```ts
fill(): TextmodeColor;
```

Alias for [cellColor](#cellcolor). Get the current fill (cell background) color.

##### Returns

[`TextmodeColor`](TextmodeColor.md)

The current cell color as a [TextmodeColor](TextmodeColor.md).

##### Implementation of

```ts
ITextmodifier.fill
```

#### Call Signature

```ts
fill(gray, alpha?): void;
```

Alias for [cellColor](#cellcolor). Set the fill (cell background) color using a grayscale value.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gray` | `number` | Grayscale value (0-255) |
| `alpha?` | `number` | Optional alpha value (0-255) |

##### Returns

`void`

##### Implementation of

```ts
ITextmodifier.fill
```

#### Call Signature

```ts
fill(
   r, 
   g, 
   b, 
   a?): void;
```

Alias for [cellColor](#cellcolor). Set the fill (cell background) color using RGB(A) values.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | `number` | Red component (0-255) |
| `g` | `number` | Green component (0-255) |
| `b` | `number` | Blue component (0-255) |
| `a?` | `number` | Optional alpha component (0-255) |

##### Returns

`void`

##### Implementation of

```ts
ITextmodifier.fill
```

#### Call Signature

```ts
fill(value): void;
```

Alias for [cellColor](#cellcolor). Set the fill (cell background) color using a CSS string or TextmodeColor object.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| [`TextmodeColor`](TextmodeColor.md) | Hex string, `rgb()`/`rgba()` string, or an existing color object |

##### Returns

`void`

##### Implementation of

```ts
ITextmodifier.fill
```

***

### filter()

#### Call Signature

```ts
filter<T>(name, params?): void;
```

Apply a filter to the final composited output.

Filters are applied after all layers are composited but before
the result is presented to the canvas. Multiple filters can be
queued per frame and will be applied in order.

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`BuiltInFilterName`](../namespaces/filters/type-aliases/BuiltInFilterName.md) |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `T` | The name of the filter to apply (built-in or custom) |
| `params?` | [`BuiltInFilterParams`](../namespaces/filters/interfaces/BuiltInFilterParams.md)\[`T`\] | Optional parameters for the filter |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  // Draw overlapping shapes with gradient colors
  const time = t.frameCount * 0.02;
  const count = 12;

  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2 + time;
    const r = 15 + 5 * Math.sin(time * 3 + i);

    t.push();
    t.translate(Math.cos(angle) * r, Math.sin(angle) * r);
    t.rotateZ(angle * 50);

    // Soft colors
    t.charColor(
      127 + 127 * Math.sin(i),
      127 + 127 * Math.cos(i),
      200
    );
    t.char(['@', '%', '#', '*'][i % 4]);
    t.rect(12, 12);
    t.pop();
  }

  // Apply filters to alter the composition

  // Dynamic threshold: creates a "cutout" look that evolves
  const thresh = 0.4 + 0.2 * Math.sin(time * 2);
  t.filter('threshold', thresh);

  // Invert colors every second for a strobe effect
  if (Math.floor(time) % 2 === 0) {
    t.filter('invert');
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Implementation of

```ts
ITextmodifier.filter
```

#### Call Signature

```ts
filter<TParams>(name, params?): void;
```

##### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TParams` | `unknown` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `params?` | `TParams` |

##### Returns

`void`

##### Implementation of

```ts
ITextmodifier.filter
```

***

### flipX()

```ts
flipX(toggle?): boolean | void;
```

Toggle horizontal flipping for subsequent character rendering, or get current state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `toggle?` | `boolean` | Whether to flip horizontally (optional) |

#### Returns

`boolean` \| `void`

The current flip state if called without arguments

#### Example

```javascript
// Using flipX for symmetry
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const count = 10;
  for (let i = 0; i < count; i++) {
    const phase = i / count;
    const y = (phase - 0.5) * t.grid.rows * 0.8;
    const x = Math.sin(t.frameCount * 0.05 + i) * 10;

    // Draw original
    t.push();
    t.translate(x, y);
    t.char('R');
    t.charColor(255);
    t.point();
    t.pop();

    // Draw mirrored
    t.push();
    t.translate(-x, y);
    t.flipX(true);
    t.char('R');
    t.charColor(255, 100, 100);
    t.point();
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.flipX
```

***

### flipY()

```ts
flipY(toggle?): boolean | void;
```

Toggle vertical flipping for subsequent character rendering, or get current state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `toggle?` | `boolean` | Whether to flip vertically (optional) |

#### Returns

`boolean` \| `void`

The current flip state if called without arguments

#### Example

```javascript
// Using flipY for vertical reflection
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0, 10, 20);

  const count = 32;
  for (let i = 0; i < count; i++) {
    const x = (i / (count - 1) - 0.5) * t.grid.cols * 0.7;
    const y = -10 + Math.sin(t.frameCount * 0.05 + i) * 2;

    // Draw original (Sky)
    t.push();
    t.translate(x, y);
    t.char('^');
    t.charColor(200, 200, 255);
    t.point();
    t.pop();

    // Draw reflected (Water)
    t.push();
    t.translate(x, -y);
    t.flipY(true);
    t.char('^');
    // Dimmer and bluer for reflection
    t.charColor(50, 100, 200, 150);
    t.point();
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.flipY
```

***

### fontSize()

```ts
fontSize(size?): number | void;
```

Get or set the font size used for rendering.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `size?` | `number` | The font size to set. |

#### Returns

`number` \| `void`

The current font size if called without arguments.

#### Example

```javascript
// Create a Textmodifier instance
const t = textmode.create();

t.setup(() => {
 // Set the font size to 32
 t.fontSize(32);

 // Get the current font size
 console.log(t.fontSize()); // 32
});

t.draw(() => {
 t.background(0);
 t.char('A');
 t.rect(5, 5);
});
```

#### Implementation of

```ts
ITextmodifier.fontSize
```

***

### frameRate()

```ts
frameRate(fps?): number | void;
```

Set the target frame rate. If called without arguments, returns the current measured frame rate.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fps?` | `number` | The maximum frames per second for rendering (optional). |

#### Returns

`number` \| `void`

#### Example

```javascript
// Click to toggle between slow-mo (10fps) and turbo (60fps).

const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.mouseClicked(() => {
  // Toggle speed
  const current = t.frameRate();
  t.frameRate(current < 30 ? 60 : 10);
});

// Drops state
const drops = Array(50).fill(0).map(() => ({
  x: 0, y: 0, speed: 0, len: 0
}));

// Reset a drop
const resetDrop = (d) => {
  d.x = (Math.random() - 0.5) * t.grid.cols;
  d.y = -t.grid.rows/2 - Math.random() * 20;
  d.speed = 0.5 + Math.random();
  d.len = 5 + Math.floor(Math.random() * 10);
};

t.setup(() => {
  drops.forEach(resetDrop);
});

t.draw(() => {
  t.background(0);

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for(const d of drops) {
    d.y += d.speed;
    if (d.y > t.grid.rows/2) resetDrop(d);

    for(let i=0; i<d.len; i++) {
      t.push();
      t.translate(d.x, d.y - i);

      // Head is white, tail is green fading out
      if (i == 0) t.charColor(200, 255, 200);
      else t.charColor(0, 255, 70, 255 - (i/d.len)*255);

      // Random character change
      const charIdx = Math.floor(Math.random() * chars.length);
      t.char(chars[charIdx]);
      t.point();
      t.pop();
    }
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.frameRate
```

***

### image()

```ts
image(
   source, 
   width?, 
   height?): void;
```

Draw a TextmodeFramebuffer, TextmodeImage, TextmodeVideo, or TextmodeTexture to the current render target.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | \| [`TextmodeFramebuffer`](TextmodeFramebuffer.md) \| [`TextmodeImage`](../namespaces/loadables/classes/TextmodeImage.md) \| [`TextmodeTexture`](../namespaces/loadables/classes/TextmodeTexture.md) \| [`TextmodeVideo`](../namespaces/loadables/classes/TextmodeVideo.md) | The TextmodeFramebuffer, TextmodeImage, TextmodeVideo, or TextmodeTexture to render |
| `width?` | `number` | Width in grid cells to potentially scale the content (defaults to ideal fit, respecting aspect ratio) |
| `height?` | `number` | Height in grid cells to potentially scale the content (defaults to ideal fit, respecting aspect ratio) |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({
  width: 800,
  height: 600,
});

const fb = t.createFramebuffer({width: 30, height: 20});

t.draw(() => {
  // Draw something to the framebuffer
  fb.begin();
  t.clear();
  t.charColor(255, 0, 0);
  t.char('A');
  t.rect(20, 10);
  fb.end();

  // Clear main canvas and render framebuffer content
  t.background(0);

  // Render at original size
  t.image(fb);

  // Render scaled version
  // t.image(fb, 60, 40);
});
```

#### Implementation of

```ts
ITextmodifier.image
```

***

### inputGrid()

```ts
inputGrid(target?): void | TextmodeGrid | "topmost";
```

Get or set the grid used for mouse and touch input coordinate mapping.

By default, input coordinates are mapped to the topmost visible layer's grid,
which changes dynamically as layers are shown/hidden. Use this method to lock
input mapping to a specific grid or layer, or to return to responsive mode.

When called without arguments, returns the current input grid mode:<br/>
- `'topmost'` if using responsive mode (default)<br/>
- The specific `TextmodeGrid` if locked

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target?` | [`TextmodeGrid`](TextmodeGrid.md) \| `"topmost"` |

#### Returns

`void` \| [`TextmodeGrid`](TextmodeGrid.md) \| `"topmost"`

#### Example

```js
const t = textmode.create();

// Add a UI layer on top
const uiLayer = t.layers.add({ fontSize: 16 });

t.setup(() => {
  // Lock input to the base layer's grid for game controls
  // even though the UI layer is rendered on top
  t.inputGrid(t.layers.base.grid);
});

t.draw(() => {
  // Mouse positions now always use base layer's grid
  console.log(`Mouse: ${t.mouse.x}, ${t.mouse.y}`);
});

// Switch back to responsive mode
// t.inputGrid('topmost');

// Or check current mode
// const current = t.inputGrid(); // 'topmost' or the locked grid
```

#### Implementation of

```ts
ITextmodifier.inputGrid
```

***

### invert()

```ts
invert(toggle?): boolean | void;
```

Toggle color inversion for subsequent character rendering, or get current state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `toggle?` | `boolean` | Whether to invert colors (optional) |

#### Returns

`boolean` \| `void`

The current inversion state if called without arguments

#### Example

```javascript
// Swapping foreground and background
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const count = 15;
  for (let i = 0; i < count; i++) {
    t.push();
    t.translate((i - (count - 1) / 2) * 6, 0);

    // Toggle inversion based on position and time
    const shouldInvert = (i + Math.floor(t.frameCount / 30)) % 2 === 0;
    t.invert(shouldInvert);

    t.charColor(255, 100, 100);
    t.cellColor(0, 50, 100);
    t.char('█');
    t.rect(5, 20);
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.invert
```

***

### isKeyPressed()

```ts
isKeyPressed(key): boolean;
```

Check if a specific key is currently being pressed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key to check (e.g., 'a', 'Enter', 'ArrowLeft') |

#### Returns

`boolean`

true if the key is currently pressed, false otherwise

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

let playerX = 0;
let playerY = 0;

t.draw(() => {
  t.background(0);

  // Check for arrow keys to move a character
  if (t.isKeyPressed('ArrowUp')) {
    playerY -= 1;
  }
  if (t.isKeyPressed('ArrowDown')) {
    playerY += 1;
  }
  if (t.isKeyPressed('ArrowLeft')) {
    playerX -= 1;
  }
  if (t.isKeyPressed('ArrowRight')) {
    playerX += 1;
  }

  // Draw player character
  t.char('@');
  t.charColor(255, 255, 0);
  t.translate(playerX, playerY);
  t.point();
});
```

#### Implementation of

```ts
ITextmodifier.isKeyPressed
```

***

### isLooping()

```ts
isLooping(): boolean;
```

Check whether the textmodifier is currently running the automatic render loop.

#### Returns

`boolean`

True if the render loop is currently active, false otherwise.

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

// Toggle loop on mouse click
t.mousePressed(() => {
  if (t.isLooping()) {
    t.noLoop();
    // Manually trigger one more frame to show "PAUSED"
    t.redraw();
  } else {
    t.loop();
  }
});

t.draw(() => {
  t.background(0);

  const isRunning = t.isLooping();

  // Shapes are centered by default (origin is 0,0)

  if (isRunning) {
    // Rotate while running
    t.rotateZ(t.frameCount * 5);
    t.charColor(0, 255, 100);
    t.char('►');
  } else {
    // Static when paused (using last frameCount)
    t.rotateZ(t.frameCount * 5);
    t.charColor(255, 100, 100);
    t.char('║');
  }

  t.rect(10, 10);
});
```

#### Implementation of

```ts
ITextmodifier.isLooping
```

***

### keyPressed()

```ts
keyPressed(callback): void;
```

Set a callback function that will be called when a key is pressed down.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`KeyboardEventHandler`](../namespaces/input/namespaces/keyboard/type-aliases/KeyboardEventHandler.md) | The function to call when a key is pressed |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

let lastKey = '?';
let pulse = 0;

// Update some visual state when a key is pressed
t.keyPressed((data) => {
  lastKey = data.key;
  pulse = 6; // make the next frames brighter
});

t.draw(() => {
  t.background(0);

  // Fade brightness back down each frame
  const glow = Math.max(0, pulse--);
  const brightness = 120 + glow * 20;
  t.charColor(brightness, brightness, 0);

  // Show the last pressed key at the center of the grid
  t.push();
  t.char(lastKey.length ? lastKey[0] : '?');
  t.point();
  t.pop();
});
```

#### Implementation of

```ts
ITextmodifier.keyPressed
```

***

### keyReleased()

```ts
keyReleased(callback): void;
```

Set a callback function that will be called when a key is released.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`KeyboardEventHandler`](../namespaces/input/namespaces/keyboard/type-aliases/KeyboardEventHandler.md) | The function to call when a key is released |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

let lastRelease = '?';
let fade = 0;

// Capture the most recent key release and trigger a pulse
t.keyReleased((data) => {
  lastRelease = data.key;
  fade = 10;
});

t.draw(() => {
  t.background(0);

  // Dim the glow over time
  const glow = Math.max(0, fade--);
  const color = 80 + glow * 17;
  t.charColor(color, color, 255);

  t.char(lastRelease.length ? lastRelease[0] : '?');
  t.point();
});
```

#### Implementation of

```ts
ITextmodifier.keyReleased
```

***

### line()

```ts
line(
   x1, 
   y1, 
   x2, 
   y2): void;
```

Draw a line from point (x1, y1) to point (x2, y2) with the settings.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x1` | `number` | X-coordinate of the line start point in grid cells |
| `y1` | `number` | Y-coordinate of the line start point in grid cells |
| `x2` | `number` | X-coordinate of the line end point in grid cells |
| `y2` | `number` | Y-coordinate of the line end point in grid cells |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(10, 10, 20);

  const time = t.frameCount * 0.01;
  const lineCount = 24;
  const radius = Math.min(t.grid.cols, t.grid.rows) * 0.4;

  t.lineWeight(2);

  // Spinning web of lines
  for (let i = 0; i < lineCount; i++) {
    const phase1 = (i / lineCount) * Math.PI * 2;
    const phase2 = phase1 + Math.PI + Math.sin(time) * Math.PI;

    // Points on two different rotating circles
    const x1 = Math.cos(phase1 + time) * radius;
    const y1 = Math.sin(phase1 * 2 + time * 1.5) * radius * 0.5;

    const x2 = Math.cos(phase2 - time * 0.7) * radius * 0.8;
    const y2 = Math.sin(phase2 * 1.5 - time) * radius;

    // Emergent color based on line index
    const r = 127 + 127 * Math.sin(phase1 + time);
    const g = 127 + 127 * Math.cos(phase1 * 0.5 + time);
    t.charColor(r, g, 255);

	   t.char(['+', '-', '|', '/'][i % 4]);

    t.line(x1, y1, x2, y2);
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.line
```

***

### lineWeight()

```ts
lineWeight(weight?): number | void;
```

Set or get the line weight (thickness).

If called with a value, sets the line weight for subsequent drawing operations.
If called without arguments, returns the current line weight.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `weight?` | `number` | The line weight (thickness) to set. |

#### Returns

`number` \| `void`

The current line weight if called without arguments.

#### Example

```javascript
// Dynamic line thickness
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background('#050810');

  const layers = 6;
  const spacing = 4;

  for (let i = 0; i < layers; i++) {
    const phase = t.frameCount * 0.03 + i * 0.8;
    const pulse = 1 + 4 * (0.5 + 0.5 * Math.sin(phase));
    const wobble = Math.sin(phase * 1.6) * 5;

    t.lineWeight(Math.round(pulse));
    t.charColor(160 + i * 12, 200, 255);
    t.char(['-', '+', '×'][i % 3]);

    const y = (i - (layers - 1) / 2) * spacing;
    t.line(-20, y + wobble, 20, y - wobble);
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.lineWeight
```

***

### loadFont()

```ts
loadFont(fontSource, setActive): Promise<TextmodeFont>;
```

Load a font, optionally setting it as the base layer's active font.

Accepts either a URL string to load a new font, or an existing [TextmodeFont](../namespaces/loadables/classes/TextmodeFont.md)
instance to reuse it.

If `setActive` is true (default), the font is set as the base layer's font.
If `setActive` is false, the font is loaded/initialized and returned without modifying the layer.

The returned font can be reused on other layers via [TextmodeLayer.loadFont](../namespaces/layering/classes/TextmodeLayer.md#loadfont).

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `fontSource` | \| `string` \| [`TextmodeFont`](../namespaces/loadables/classes/TextmodeFont.md) | `undefined` | The URL of the font to load, or an existing TextmodeFont instance. |
| `setActive` | `boolean` | `true` | Whether to set the font as the base layer's active font. Defaults to `true`. |

#### Returns

`Promise`\<[`TextmodeFont`](../namespaces/loadables/classes/TextmodeFont.md)\>

The loaded TextmodeFont instance.

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.setup(async () => {
  // Load a custom font and set it as active immediately
  // Note: This automatically recalculates grid dimensions!
  // await t.loadFont('https://example.com/fonts/my-font.ttf');

  // You can also preload fonts without activating them:
  // const pixelFont = await t.loadFont('./fonts/pixel.ttf', false);

  // And then apply them to specific layers later:
  // t.layers.base.loadFont(pixelFont);
});

t.draw(() => {
  t.background(0);
  t.charColor(255);

  const text = "TYPE";
  // Center text
  const centerX = -text.length / 2;

  for (let i = 0; i < text.length; i++) {
    t.push();
    t.translate(centerX + i + 0.5, 0);
    t.char(text[i]);
    // Pulsing effect
    t.charColor(150 + 100 * Math.sin(t.frameCount * 0.1 + i), 200, 255);
    t.rect(1, 1);
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.loadFont
```

***

### loadImage()

```ts
loadImage(src): Promise<TextmodeImage>;
```

Load an image and return a TextmodeImage that can be drawn with image().

The loaded image can be rendered to the canvas using the [image](#image) method.
This function returns a Promise that resolves when the image has loaded.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `src` | `string` | URL of the image file |

#### Returns

`Promise`\<[`TextmodeImage`](../namespaces/loadables/classes/TextmodeImage.md)\>

A Promise that resolves to a TextmodeImage object

#### Example

```javascript
// Loading and rendering external assets
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let img;

t.setup(async () => {
  // Remote image URL
  const url = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80';
  img = await t.loadImage(url);

  // Configure character mapping for the image
  img.characters(" .:-=+*#%@");
});

t.draw(() => {
  t.background(0);
  if (img) {
    // Pulse image scale and rotation
    const scale = 1 + Math.sin(t.frameCount * 0.05) * 0.1;
    t.rotateZ(Math.sin(t.frameCount * 0.02) * 5);
    t.image(img, t.grid.cols * scale, t.grid.rows * scale);
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.loadImage
```

***

### loadVideo()

```ts
loadVideo(src): Promise<TextmodeVideo>;
```

Load a video and return a TextmodeVideo that can be drawn with image().

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `src` | `string` | URL of the video file |

#### Returns

`Promise`\<[`TextmodeVideo`](../namespaces/loadables/classes/TextmodeVideo.md)\>

#### Example

```javascript
// Video to ASCII conversion
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let video;

t.setup(async () => {
  const url = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
  video = await t.loadVideo(url);

  // Configure video playback
  video.play();
  video.loop();

  // Set ASCII density characters
  video.characters(" .:-=+*#%@");
});

t.draw(() => {
  t.background(0);
  if (video) {
    // Rotate and draw the video
    t.rotateY(t.frameCount);
    t.image(video, 40, 30);
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.loadVideo
```

***

### longPress()

```ts
longPress(callback): void;
```

Register a callback for long press gestures.

A long press is emitted when the user keeps a finger on the canvas without moving beyond the
configured tolerance. The event includes the press duration in milliseconds.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchLongPressHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchLongPressHandler.md) | The function to call when a long press gesture is detected. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

const bursts = [];

t.longPress((data) => {
  // Spawn an expanding energy burst at the long press location
  bursts.push({
    x: data.touch.x,
    y: data.touch.y,
    life: 0
  });
});

t.draw(() => {
  t.background(0);

  // Animate bursts
  for (let i = bursts.length - 1; i >= 0; i--) {
    const b = bursts[i];
    b.life += 1;

    t.push();
    t.translate(b.x, b.y);
    t.rotateZ(b.life * 5);

    const size = b.life * 1.5;
    const alpha = Math.max(0, 255 - b.life * 4);

    t.char('☼');
    t.charColor(255, 200, 100, alpha);
    t.rect(size, size);
    t.pop();

    if (b.life > 60) bursts.splice(i, 1);
  }

  if (bursts.length === 0) {
    t.charColor(100);
    t.char('?');
    t.rect(1, 1);
  }
});
```

#### Implementation of

```ts
ITextmodifier.longPress
```

***

### loop()

```ts
loop(): void;
```

Resume the rendering loop if it was stopped by [noLoop](#noloop).

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

// Toggle loop on SPACE
t.keyPressed((data) => {
  if (data.key === ' ') {
    if (t.isLooping()) {
      t.noLoop();
    } else {
      t.loop();
    }
  }
});

t.draw(() => {
  t.background(0);
  t.char('A');
  t.charColor(255, 255, 255);
  t.rotateZ(t.frameCount * 2);
  t.rect(16, 16);
});
```

#### Implementation of

```ts
ITextmodifier.loop
```

***

### mouseClicked()

```ts
mouseClicked(callback): void;
```

Set a callback function that will be called when the mouse is clicked.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`MouseEventHandler`](../namespaces/input/namespaces/mouse/type-aliases/MouseEventHandler.md) | The function to call when the mouse is clicked |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

const echoes = [];

t.mouseClicked((data) => {
  if (data.position.x === Number.NEGATIVE_INFINITY) return;
  // Add a new sonar echo at the clicked position (center-based coords)
  echoes.push({ x: data.position.x, y: data.position.y, age: 0 });
});

t.draw(() => {
  t.background(0);

  // Render all active echoes
  for (let i = 0; i < echoes.length; i++) {
    const e = echoes[i];
    e.age += 1;
    const maxAge = 60;

    if (e.age > maxAge) {
      echoes.splice(i, 1);
      continue;
    }

    t.push();
    t.translate(e.x, e.y);

    const progress = e.age / maxAge;
    const radius = progress * 30;
    const alpha = 255 * (1 - progress);

    t.charColor(100, 200, 255, alpha);
    t.char('○');
    t.ellipse(radius, radius);

    // Inner after-shock
    if (progress > 0.2) {
      t.charColor(50, 100, 255, alpha * 0.5);
      t.char('·');
      t.ellipse(radius * 0.6, radius * 0.6);
    }
    t.pop();
  }

  // Crosshair at mouse
  if (t.mouse.x !== Number.NEGATIVE_INFINITY) {
    t.push();
    t.translate(t.mouse.x, t.mouse.y);
    t.char('+');
    t.charColor(255);
    t.point();
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.mouseClicked
```

***

### mouseMoved()

```ts
mouseMoved(callback): void;
```

Set a callback function that will be called when the mouse moves.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`MouseEventHandler`](../namespaces/input/namespaces/mouse/type-aliases/MouseEventHandler.md) | The function to call when the mouse moves |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

const trail = [];
let prev = null;

t.mouseMoved((data) => {
  if (data.position.x === Number.NEGATIVE_INFINITY) return;

  const x = data.position.x;
  const y = data.position.y;

  // Calculate velocity
  const dx = prev ? x - prev.x : 0;
  const dy = prev ? y - prev.y : 0;
  prev = { x, y };

  // Spawn particle with inertia
  trail.push({
    x: x, y: y,
    vx: dx * 0.2 + (Math.random() - 0.5),
    vy: dy * 0.2 + (Math.random() - 0.5),
    life: 1.0,
    char: ['+', '*', '.', '·'][Math.floor(Math.random() * 4)]
  });
});

t.draw(() => {
  t.background(0);

  for (let i = trail.length - 1; i >= 0; i--) {
    const p = trail[i];
    p.x += p.vx;
    p.y += p.vy;
    p.life -= 0.02;

    if (p.life <= 0) {
      trail.splice(i, 1);
      continue;
    }

    t.push();
    t.translate(p.x, p.y);
    // Color shifts from hot to cool based on life
    t.charColor(255 * p.life, 100 + 155 * (1-p.life), 255);
    t.char(p.char);
    t.point();
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.mouseMoved
```

***

### mousePressed()

```ts
mousePressed(callback): void;
```

Set a callback function that will be called when the mouse is pressed down.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`MouseEventHandler`](../namespaces/input/namespaces/mouse/type-aliases/MouseEventHandler.md) | The function to call when the mouse is pressed |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let isPressing = false;
const particles = [];

t.mousePressed(() => isPressing = true);
t.mouseReleased(() => isPressing = false);

t.draw(() => {
  t.background(0);

  // Emit particles while mouse is held
  if (isPressing && t.mouse.x !== Number.NEGATIVE_INFINITY) {
    for(let k=0; k<5; k++) { // Spawn rate
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.5 + 0.2;
      particles.push({
        x: t.mouse.x,
        y: t.mouse.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1.0
      });
    }
  }

  // Update and draw
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.life -= 0.02;

    if (p.life <= 0) {
      particles.splice(i, 1);
      continue;
    }

    t.push();
    t.translate(p.x, p.y);
    const chars = ['.', 'o', '*', '@'];
    t.char(chars[Math.floor(p.life * 3.99)]);
    t.charColor(255, p.life * 255, 100); // Yellow to Red fade
    t.point();
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.mousePressed
```

***

### mouseReleased()

```ts
mouseReleased(callback): void;
```

Set a callback function that will be called when the mouse is released.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`MouseEventHandler`](../namespaces/input/namespaces/mouse/type-aliases/MouseEventHandler.md) | The function to call when the mouse is released |

#### Returns

`void`

#### Example

```javascript
// Drag to draw lines that fade over time.

const t = textmode.create({ width: 800, height: 600 });

const lines = [];
let dragStart = null;

t.mousePressed((data) => {
  if (data.position.x === Number.NEGATIVE_INFINITY) return;
  // Coordinates are already center-based
  dragStart = { x: data.position.x, y: data.position.y };
});

t.mouseReleased((data) => {
  if (!dragStart || data.position.x === Number.NEGATIVE_INFINITY) return;
  const cx = data.position.x;
  const cy = data.position.y;

  // Calculate line center and local endpoints
  const centerX = (dragStart.x + cx) / 2;
  const centerY = (dragStart.y + cy) / 2;
  const dx = cx - dragStart.x;
  const dy = cy - dragStart.y;

  lines.push({
    cx: centerX, cy: centerY,
    dx: dx, dy: dy,
    age: 0, maxAge: 30
  });
  dragStart = null;
});

t.draw(() => {
  t.background(0);

  // Draw stored lines with fade
  for (let i = lines.length - 1; i >= 0; i--) {
    const ln = lines[i];
    ln.age++;

    if (ln.age >= ln.maxAge) {
      lines.splice(i, 1);
      continue;
    }

    const life = 1 - (ln.age / ln.maxAge);
    const brightness = Math.round(150 * life);

    t.push();
    t.charColor(brightness, brightness, 255);
    t.char('-');
    t.lineWeight(2);
    t.translate(ln.cx, ln.cy);
    t.line(-ln.dx / 2, -ln.dy / 2, ln.dx / 2, ln.dy / 2);
    t.pop();
  }

  // Draw current drag line (mouse coords are center-based)
  if (dragStart && t.mouse.x !== Number.NEGATIVE_INFINITY) {
    const cx = t.mouse.x;
    const cy = t.mouse.y;
    const centerX = (dragStart.x + cx) / 2;
    const centerY = (dragStart.y + cy) / 2;
    const dx = cx - dragStart.x;
    const dy = cy - dragStart.y;

    t.push();
    t.charColor(255, 200, 0);
    t.char('o');
    t.lineWeight(2);
    t.translate(centerX, centerY);
    t.line(-dx / 2, -dy / 2, dx / 2, dy / 2);
    t.pop();
  }
});
```

#### Implementation of

```ts
ITextmodifier.mouseReleased
```

***

### mouseScrolled()

```ts
mouseScrolled(callback): void;
```

Set a callback function that will be called when the mouse wheel is scrolled.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`MouseEventHandler`](../namespaces/input/namespaces/mouse/type-aliases/MouseEventHandler.md) | The function to call when the mouse wheel is scrolled |

#### Returns

`void`

#### Example

```javascript
// Scroll to create expanding rings.

const t = textmode.create({ width: 800, height: 600 });

const rings = [];

t.mouseScrolled((data) => {
  if (data.position.x === Number.NEGATIVE_INFINITY) return;

  // Coordinates are already center-based
  const cx = data.position.x;
  const cy = data.position.y;

  // Use scroll delta to determine ring intensity and direction
  const scrollSpeed = 2;
  const intensity = Math.min(scrollSpeed * 30, 255);
  const scrollDown = (data.delta?.y || 0) > 0;

  rings.push({
    x: cx,
    y: cy,
    radius: 1,
    maxRadius: 5 + scrollSpeed * 0.5,
    color: intensity,
    scrollDown: scrollDown,
    age: 0,
    maxAge: 20
  });
});

t.draw(() => {
  t.background(0);

  // Update and draw rings
  for (let i = rings.length - 1; i >= 0; i--) {
    const r = rings[i];
    r.age++;
    r.radius += (r.maxRadius - r.radius) * 0.15;

    if (r.age >= r.maxAge) {
      rings.splice(i, 1);
      continue;
    }

    const life = 1 - (r.age / r.maxAge);
    const brightness = Math.round(r.color * life);

    t.push();
    // Blue for scroll down, orange for scroll up
    if (r.scrollDown) {
      t.charColor(brightness * 0.5, brightness * 0.8, 255);
    } else {
      t.charColor(255, brightness * 0.6, brightness * 0.3);
    }
    t.translate(r.x, r.y);

    // Draw ring
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 6) {
      const ox = Math.round(Math.cos(a) * r.radius);
      const oy = Math.round(Math.sin(a) * r.radius);
      t.push();
      t.translate(ox, oy);
      t.char('o');
      t.point();
      t.pop();
    }
    t.pop();
  }
});
```

#### Implementation of

```ts
ITextmodifier.mouseScrolled
```

***

### noLoop()

```ts
noLoop(): void;
```

Stop the automatic rendering loop.

This method pauses the render loop without, allowing
it to be resumed later with [loop](#loop). This is useful for temporarily pausing
animation while maintaining the ability to continue it.

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

// Toggle loop on SPACE
t.keyPressed((data) => {
  if (data.key === ' ') {
    if (t.isLooping()) {
      t.noLoop();
    } else {
      t.loop();
    }
  }
});

t.draw(() => {
  t.background(0);
  t.char('A');
  t.charColor(255, 255, 255);
  t.rotateZ(t.frameCount * 2);
  t.rect(16, 16);
});
```

#### Implementation of

```ts
ITextmodifier.noLoop
```

***

### ortho()

```ts
ortho(): void;
```

Enables orthographic projection for subsequent shape rendering operations.

By default, textmode uses a perspective projection. Calling this method switches to an
orthographic projection, where objects maintain their size regardless of depth (Z position).

The projection mode is reset to perspective at the beginning of each frame.

#### Returns

`void`

#### Example

```javascript
// Orthographic projection vs Depth
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  // Enable orthographic mode - Z depth no longer affects scale
  t.ortho();

  const count = 12;
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2 + t.frameCount * 0.02;
    const x = Math.cos(angle) * 20;
    const y = Math.sin(angle) * 20;
    const z = Math.sin(t.frameCount * 0.05 + i) * 50;

    t.push();
    t.translate(x, y, z);
    t.charColor(200, 255, 100);
    t.char('█');
    t.rect(5, 5); // Rect stays same size despite oscillating Z
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.ortho
```

***

### pinch()

```ts
pinch(callback): void;
```

Register a callback for pinch gestures, receiving scale deltas.

Pinch gestures involve two touch points. The callback receives the current scale relative to
the initial distance and the change since the previous update, enabling zoom interactions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchPinchHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchPinchHandler.md) | The function to call when a pinch gesture is detected. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

let currentScale = 1.0;

// Handle pinch gestures to zoom
t.pinch((data) => {
  // Limit scale between 0.5x and 5x
  currentScale = Math.max(0.5, Math.min(5.0, data.scale));
});

t.draw(() => {
  t.background(0);

  // Draw a shape scaled by the pinch gesture
  const size = 20 * currentScale;

  t.char('▒');
  t.charColor(255, 100 + currentScale * 20, 150);
  t.rect(size, size);
});
```

#### Implementation of

```ts
ITextmodifier.pinch
```

***

### point()

```ts
point(): void;
```

Draw a 1x1 rectangle with the current settings.

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(10, 10, 20);

  const time = t.frameCount * 0.05;
  const radius = Math.min(t.grid.cols, t.grid.rows) * 0.35;

  // Draw a rhythmic particle trail using point()
  for (let i = 0; i < 30; i++) {
    const angle = time - i * 0.1;
    const r = radius * (0.8 + 0.4 * Math.sin(time * 0.3 + i * 0.2));
    const x = Math.cos(angle) * r;
    const y = Math.sin(angle) * r;

    const life = 1 - i / 30;
    t.push();
    t.translate(x, y);
    t.char(['*', '·', '•', '°'][i % 4]);
    t.charColor(255 * life, 150 * life, 255);
    t.point();
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.point
```

***

### pop()

```ts
pop(): void;
```

Restore the most recently saved rendering state from the state stack.
Use with [push](#push) to isolate style changes within a block.

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
  t.background(0);

  // Draw three rotating shapes with isolated transformations and colors
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

#### Implementation of

```ts
ITextmodifier.pop
```

***

### push()

```ts
push(): void;
```

Save the current rendering state to the state stack.
Use with [pop](#pop) to isolate style changes within a block.

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
  t.background(0);

  // Draw three rotating shapes with isolated transformations and colors
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

#### Implementation of

```ts
ITextmodifier.push
```

***

### rect()

```ts
rect(width?, height?): void;
```

Draw a rectangle with the current settings.
Position is controlled via [translate](#translate), [push](#push), and [pop](#pop).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `width?` | `number` | Width of the rectangle in grid cells (defaults to 1) |
| `height?` | `number` | Height of the rectangle in grid cells (defaults to 1) |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const time = t.frameCount * 0.5;
  const squareCount = 64;
  const maxSize = Math.max(t.grid.cols, t.grid.rows) * 1.5;

  // Draw squares from back to front for a depth effect
  for (let i = squareCount; i > 0; i--) {
    const progress = i / squareCount;
    const size = maxSize * Math.pow(progress, 1.5);
    const rotation = time + i * 15;

    t.push();
    t.rotateZ(rotation);

    // Dynamic coloring based on "depth"
    const brightness = Math.round(255 * (1 - progress));
    t.charColor(brightness, Math.round(brightness * 0.5), 255);
    t.char(['░', '▒', '▓', '█'][i % 4]);

    t.rect(size, size);
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.rect
```

***

### redraw()

```ts
redraw(n?): void;
```

Execute the render function a specified number of times.

This method is useful when the render loop has been stopped with [noLoop](#noloop),
allowing you to trigger rendering on demand.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `n?` | `number` | The number of times to execute the render function. Defaults to 1. |

#### Returns

`void`

#### Example

```javascript
// Press SPACE to manually trigger single frames while loop is paused.

const t = textmode.create({ width: 800, height: 600 });

let rotation = 0;

t.keyPressed((data) => {
  if (data.key === ' ') {
    rotation += 15; // Increment rotation
    t.redraw(); // Manually trigger one frame
  }
});

t.draw(() => {
  if(t.frameCount === 1) {
    t.noLoop();
  }

  t.background(0);

  t.push();
  t.char('A');
  t.charColor(100, 200, 255);
  t.rotateZ(rotation);
  t.rect(13, 13);
  t.pop();

  // Show instruction text
  t.push();
  t.translate(-5, -10);
  t.charColor(150);
  const msg = 'PRESS SPACE';
  [...msg].forEach((char, i) => {
    t.push();
    t.translate(i, 0);
    t.char(char);
    t.point();
    t.pop();
  });
  t.pop();
});
```

#### Implementation of

```ts
ITextmodifier.redraw
```

***

### resetShader()

```ts
resetShader(): void;
```

Reset the current shader to the default solid color shader.

This clears both the active shader and any accumulated uniforms set via [setUniform](#setuniform).
Equivalent to calling `shader(null)`.

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let portalShader;

t.setup(async() => {
  portalShader = await t.createFilterShader(`#version 300 es
    precision highp float;
    in vec2 v_uv;
    uniform float u_time;
    layout(location = 0) out vec4 o_char;
    layout(location = 1) out vec4 o_prim;
    layout(location = 2) out vec4 o_sec;

    void main() {
      vec2 p = v_uv * 2.0 - 1.0;
      float r = length(p);
      float a = atan(p.y, p.x);

      // Characters: slow/spatial pattern (avoid rapid flickering)
      float charPattern = floor(r * 8.0) / 8.0 + sin(a * 6.0 + u_time * 0.3) * 0.1;
      o_char = vec4(charPattern, 0.0, 0.0, 1.0);

      // Colors: can animate rapidly for smooth visual effect
      float wave = sin(r * 20.0 - u_time * 5.0 + sin(a * 10.0));
      o_prim = vec4(0.5 + 0.5 * cos(u_time + r * 2.0), 0.2 + wave * 0.3, 0.8, 1.0);
      o_sec = vec4(0.0);
    }
  `);
});

t.draw(() => {
  t.background(0);

  if (portalShader) {
    t.shader(portalShader);
    t.setUniform('u_time', t.frameCount * 0.02);

    // Draw the portal background
    t.rect(t.grid.cols, t.grid.rows);
  }

  // Reset to default shader for foreground objects
  t.resetShader();

  // Draw floating objects in front of the portal
  const count = 8;
  for (let i = 0; i < count; i++) {
    const angle = t.frameCount * 0.05 + (i / count) * Math.PI * 2;
    const x = Math.cos(angle) * 15;
    const y = Math.sin(angle) * 15;

    t.push();
    t.translate(x, y);
    t.rotateZ(angle * 2);
    t.char('♦');
    t.charColor(255, 200, 100);
    t.rect(5, 5);
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.resetShader
```

***

### resizeCanvas()

```ts
resizeCanvas(width, height): void;
```

Resize the canvas and adjust all related components accordingly.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `width` | `number` | The new width of the canvas. |
| `height` | `number` | The new height of the canvas. |

#### Returns

`void`

#### Example

```javascript
// Create a standalone textmodifier instance
const t = textmode.create({
  width: window.innerWidth,
  height: window.innerHeight,
});

// Draw callback to update content
t.draw(() => {
 // Set background color
 t.background(128);
 t.char('A');
 t.rotateZ(t.frameCount * 2);
 t.rect(16, 16);
});

// Set up window resize callback
t.windowResized(() => {
  // Resize the canvas to match window size
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.resizeCanvas
```

***

### rotate()

```ts
rotate(
   degreesX?, 
   degreesY?, 
   degreesZ?): void;
```

Sets the rotation angles for subsequent shape rendering operations.

All geometries rotate around the center of the shape.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `degreesX?` | `number` | The rotation angle in degrees around the X-axis (optional, defaults to 0) |
| `degreesY?` | `number` | The rotation angle in degrees around the Y-axis (optional, defaults to 0) |
| `degreesZ?` | `number` | The rotation angle in degrees around the Z-axis (optional, defaults to 0) |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
  t.background(0);

  // Draw three rectangles rotating in 3D space with different axes
  for (let i = 0; i < 3; i++) {
    t.push();
    t.translate(i * 15 - 15, 0, 0);

    const angle = t.frameCount * (1.5 + i * 0.5);
    // Each shape rotates around different combinations of axes
    t.rotate(angle * 0.7, angle * 0.5, angle);

    t.char(['T', 'X', 'T'][i]);
    t.charColor(100 + i * 60, 200 - i * 40, 255);
    t.rect(10, 10);
    t.pop();
  }
});
```

#### Implementation of

```ts
ITextmodifier.rotate
```

***

### rotateGesture()

```ts
rotateGesture(callback): void;
```

Register a callback for rotate gestures, receiving rotation deltas in degrees.

Rotation callbacks provide the cumulative rotation and delta rotation since the last update,
along with the gesture centre in grid coordinates. Ideal for dial-like interactions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchRotateHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchRotateHandler.md) | The function to call when a rotation gesture is detected. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

let rotation = 0;

t.rotateGesture((data) => {
  // Accumulate the delta rotation (in degrees)
  rotation += data.deltaRotation;
});

t.draw(() => {
  t.background(0);

  // Rotate the coordinate system by the accumulated angle
  t.rotateZ(rotation);

  // Draw a "dial" or "gear" shape
  t.char('☼');
  t.charColor(100, 255, 200);
  t.rect(20, 20);

  // Add a marker to make rotation obvious
  t.push();
  t.translate(15, 0); // Offset from center
  t.char('•');
  t.charColor(255, 100, 100);
  t.rect(5, 5);
  t.pop();
});
```

#### Implementation of

```ts
ITextmodifier.rotateGesture
```

***

### rotateX()

```ts
rotateX(degrees?): number | void;
```

Sets the X-axis rotation angle for subsequent shape rendering operations, or gets the current angle.

All geometries rotate around the center of the shape.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `degrees?` | `number` | The rotation angle in degrees around the X-axis. If not provided, returns the current accumulated rotation. |

#### Returns

`number` \| `void`

The current X-axis rotation in degrees if called without arguments.

#### Example

```javascript
// A field of oscillating slabs
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const cols = 5;
  const rows = 5;
  const spacing = 12;

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      t.push();
      // Position in grid
      t.translate((x - (cols - 1) / 2) * spacing, (y - (rows - 1) / 2) * spacing);

      // Rotation with phase shift based on position
      const angle = t.frameCount * 4 + (x + y) * 20;
      t.rotateX(angle);

      // Aesthetic coloring based on rotation phase
      const intensity = Math.sin(angle * Math.PI / 180);
      const brightness = 127 + 127 * intensity;

      t.charColor(brightness, 150, 255 - brightness);
      t.char(Math.abs(intensity) > 0.5 ? '█' : '▒');

      t.rect(10, 8);
      t.pop();
    }
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.rotateX
```

***

### rotateY()

```ts
rotateY(degrees?): number | void;
```

Sets the Y-axis rotation angle for subsequent shape rendering operations, or gets the current angle.

All geometries rotate around the center of the shape.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `degrees?` | `number` | The rotation angle in degrees around the Y-axis. If not provided, returns the current accumulated rotation. |

#### Returns

`number` \| `void`

The current Y-axis rotation in degrees if called without arguments.

#### Example

```javascript
// A vertical stack of spinning glyphs
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const count = 15;
  const spacing = 4;

  for (let i = 0; i < count; i++) {
    const phase = i / count;
    const angle = t.frameCount * 3 + i * 20;

    t.push();
    // Stack vertically
    t.translate(0, (i - (count - 1) / 2) * spacing);

    // Rotate around Y axis (vertical spin)
    t.rotateY(angle);

    // Dynamic character selection based on "side" of rotation
    const side = Math.cos(angle * Math.PI / 180);
    t.char(side > 0 ? '▓' : '░');

    // Cyberpunk color palette
    t.charColor(100, 255, 200);
    if (Math.abs(side) < 0.2) t.charColor(255, 255, 255); // Flash on edge

    t.rect(20, 3);
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.rotateY
```

***

### rotateZ()

```ts
rotateZ(degrees?): number | void;
```

Sets the Z-axis rotation angle for subsequent shape rendering operations, or gets the current angle.

All geometries rotate around the center of the shape.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `degrees?` | `number` | The rotation angle in degrees around the Z-axis. If not provided, returns the current accumulated rotation. |

#### Returns

`number` \| `void`

The current Z-axis rotation in degrees if called without arguments.

#### Example

```javascript
// Layered rotation and symmetry
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(10, 5, 20);

  const layers = 8;
  const time = t.frameCount;

  for (let i = 0; i < layers; i++) {
    const progress = i / layers;
    const angle = time * (1 + progress) + i * 45;

    t.push();
    // Rotate around Z axis (flat spin)
    t.rotateZ(angle);

    // Dynamic size and character
    const size = 30 - i * 3;
    t.char(['.', '=', '+', '!', '?'][i % 5]);

    // Neon color gradient
    t.charColor(255, 100 + i * 20, 200 - i * 10);

    t.rect(size, size);
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.rotateZ
```

***

### setUniform()

```ts
setUniform(name, value): void;
```

Set a uniform value for the current custom shader.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the uniform variable |
| `value` | `UniformValue` | The value to set |

#### Returns

`void`

#### Example

```javascript
// Passing CPU values to Shaders
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let pulseShader;
t.setup(async () => {
  pulseShader = await t.createFilterShader(`#version 300 es
    precision highp float;
    in vec2 v_uv;
    uniform float u_time;
    layout(location = 0) out vec4 o_char;
    layout(location = 1) out vec4 o_col;
    layout(location = 2) out vec4 o_bg;
    void main() {
      float p = 0.5 + 0.5 * sin(u_time + v_uv.x);
      o_char = vec4(p, 0.0, 0.0, 1.0);
      o_col = vec4(v_uv, 1.0, 1.0);
      o_bg = vec4(0.0, 0.0, 0.0, 1.0);
    }
  `);
});

t.draw(() => {
  t.background(0);
  if (pulseShader) {
    t.shader(pulseShader);
    // Sync CPU state to GPU uniform
    t.setUniform('u_time', t.frameCount * 0.001);
    t.rect(t.grid.cols, t.grid.rows);
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.setUniform
```

***

### setUniforms()

```ts
setUniforms(uniforms): void;
```

Set multiple uniform values for the current custom shader.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `uniforms` | `Record`\<`string`, `UniformValue`\> | Object containing uniform name-value pairs |

#### Returns

`void`

#### Example

```javascript
// Bulk uniform updates
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let ripple;
t.setup(async () => {
  ripple = await t.createFilterShader(`#version 300 es
    precision highp float;
    in vec2 v_uv;
    uniform float u_time; uniform vec2 u_mouse;
    layout(location = 0) out vec4 o_c;
    layout(location = 1) out vec4 o_p;
    layout(location = 2) out vec4 o_s;
    void main() {
      float d = length(v_uv - u_mouse);
      float w = 0.5 + 0.5 * sin(d * 20.0 - u_time);
      o_c = vec4(w, 0.0, 0.0, 1.0);
      o_p = vec4(0.2, 0.5, 1.0, 1.0);
      o_s = vec4(0.0);
    }
  `);
});

t.draw(() => {
  t.background(0);
  if (ripple) {
    t.shader(ripple);
    t.setUniforms({
      u_time: t.frameCount * 0.05,
      u_mouse: [t.mouse.x, t.mouse.y]
    });
    t.rect(t.grid.cols, t.grid.rows);
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.setUniforms
```

***

### setup()

```ts
setup(callback): Promise<void>;
```

Set a setup callback function that will be executed once when initialization is complete.

This callback is called after font loading and grid initialization, allowing access to
properties like `textmodifier.grid.cols` for calculating layout or setup variables.

The callback can be asynchronous (return a Promise).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` \| `Promise`\<`void`\> | The function to call when setup is complete |

#### Returns

`Promise`\<`void`\>

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

let fb;

t.setup(async () => {
  // Pre-allocate resources
  fb = t.createFramebuffer({ width: 20, height: 20 });

  // Render static content to framebuffer once
  fb.begin();
  t.background(50, 0, 0);
  t.charColor(255, 200, 0);
  t.char('=');
  t.rect(20, 20);
  fb.end();
});

t.draw(() => {
  t.background(0);

  // Draw the pre-rendered content multiple times
  for(let i = 0; i < 5; i++) {
    t.push();
    t.translate(Math.sin(t.frameCount * 0.02 + i) * 20, i * 2);
    t.image(fb);
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.setup
```

***

### shader()

```ts
shader(shader): void;
```

Set a custom shader for subsequent rendering operations.

The shader persists until explicitly reset via [resetShader](#resetshader) or by calling `shader(null)`.
This behavior matches p5.js, allowing multiple draw calls with the same shader.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `shader` | `null` \| [`TextmodeShader`](TextmodeShader.md) | The custom shader to use, or `null` to reset to the default shader. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

let glitchShader;

t.setup(async() => {
    glitchShader = await t.createFilterShader(`#version 300 es
  precision highp float;
  in vec2 v_uv;
  uniform float u_intensity;
  layout(location = 0) out vec4 o_character;
  layout(location = 1) out vec4 o_primaryColor;
  layout(location = 2) out vec4 o_secondaryColor;

  void main() {
    vec2 offset = vec2(sin(v_uv.y * 50.0) * u_intensity, 0.0);
    float pattern = fract(v_uv.x * 20.0 + offset.x);
    vec3 color = vec3(pattern, 1.0 - pattern, 0.5);
    o_character = vec4(pattern, 0.0, 0.0, 0.0);
    o_primaryColor = vec4(color, 1.0);
    o_secondaryColor = vec4(color * 0.5, 1.0);
  }
`);
});

t.draw(() => {
    t.shader(glitchShader);
    t.setUniform('u_intensity', Math.sin(t.frameCount * 0.1) * 0.02);

    // Draw multiple shapes with the same shader
    t.translate(10, 10);
    t.rect(20, 20);
    t.translate(25, 0);
    t.rect(20, 20);

    t.resetShader(); // Reset to default when done
});
```

#### Implementation of

```ts
ITextmodifier.shader
```

***

### stroke()

#### Call Signature

```ts
stroke(): TextmodeColor;
```

Alias for [charColor](#charcolor). Get the current stroke (character) color.

##### Returns

[`TextmodeColor`](TextmodeColor.md)

The current character color as a [TextmodeColor](TextmodeColor.md).

##### Implementation of

```ts
ITextmodifier.stroke
```

#### Call Signature

```ts
stroke(gray, alpha?): void;
```

Alias for [charColor](#charcolor). Set the stroke (character) color using a grayscale value.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gray` | `number` | Grayscale value (0-255) |
| `alpha?` | `number` | Optional alpha value (0-255) |

##### Returns

`void`

##### Implementation of

```ts
ITextmodifier.stroke
```

#### Call Signature

```ts
stroke(
   r, 
   g, 
   b, 
   a?): void;
```

Alias for [charColor](#charcolor). Set the stroke (character) color using RGB(A) values.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `r` | `number` | Red component (0-255) |
| `g` | `number` | Green component (0-255) |
| `b` | `number` | Blue component (0-255) |
| `a?` | `number` | Optional alpha component (0-255) |

##### Returns

`void`

##### Implementation of

```ts
ITextmodifier.stroke
```

#### Call Signature

```ts
stroke(value): void;
```

Alias for [charColor](#charcolor). Set the stroke (character) color using a CSS string or TextmodeColor object.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| [`TextmodeColor`](TextmodeColor.md) | Hex string, `rgb()`/`rgba()` string, or an existing color object |

##### Returns

`void`

##### Implementation of

```ts
ITextmodifier.stroke
```

***

### swipe()

```ts
swipe(callback): void;
```

Register a callback for swipe gestures.

Swipes provide the dominant direction (`up`, `down`, `left`, `right`), travelled distance, and
velocity in CSS pixels per millisecond. Useful for panning, flicks, or quick shortcuts.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchSwipeHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchSwipeHandler.md) | The function to call when a swipe gesture is detected. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

let arrow = '•';
let r = 128, g = 128, b = 128;

t.swipe((data) => {
  // Update visual state based on swipe direction
  switch (data.direction) {
    case 'up':    arrow = '▲'; r = 255; g = 100; b = 100; break;
    case 'down':  arrow = '▼'; r = 100; g = 255; b = 100; break;
    case 'left':  arrow = '◀'; r = 100; g = 100; b = 255; break;
    case 'right': arrow = '▶'; r = 255; g = 255; b = 100; break;
  }
});

t.draw(() => {
  t.background(0);

  // Pulse effect
  const size = 8 + Math.sin(t.frameCount * 0.1) * 2;

  // Draw the direction indicator
  t.char(arrow);
  t.charColor(r, g, b);
  t.rect(size, size);
});
```

#### Implementation of

```ts
ITextmodifier.swipe
```

***

### tap()

```ts
tap(callback): void;
```

Register a callback for tap gestures.

A tap is fired when the user quickly touches and releases the canvas without travelling far.
Use [TouchTapEventData.taps](../namespaces/input/namespaces/touch/interfaces/TouchTapEventData.md#taps) to determine whether the gesture is a single or multi tap.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchTapHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchTapHandler.md) | The function to call when a tap gesture is detected. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

const markers = [];

// Add a temporary marker where the user taps
t.tap((data) => {
  markers.push({
    x: data.touch.x,
    y: data.touch.y,
    life: 60
  });
});

t.draw(() => {
  t.background(0);

  // Draw markers at their tapped positions
  for (let i = markers.length - 1; i >= 0; i--) {
    const m = markers[i];

    t.push();
    // Coordinates are already relative to center!
    t.translate(m.x, m.y);

    const alpha = (m.life / 60) * 255;
    t.char('X');
    t.charColor(255, 100, 100, alpha);
    t.rect(3, 3);
    t.pop();

    m.life--;
    if (m.life <= 0) markers.splice(i, 1);
  }

  if (markers.length === 0) {
     t.charColor(100);
     t.char('?');
     t.rect(1, 1);
  }
});
```

#### Implementation of

```ts
ITextmodifier.tap
```

***

### targetFrameRate()

```ts
targetFrameRate(fps?): number | void;
```

Set or get the target frame rate limit.

Works similarly to [frameRate](#framerate), but gets the target frame rate instead of the current measured frame rate.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fps?` | `number` | Optional new target frame rate. If not provided, returns current target frame rate. |

#### Returns

`number` \| `void`

Current target frame rate when getting, void when setting

#### Example

```javascript
// Target FPS oscillates, warping time perception.

const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  // Oscillate target FPS between 5 and 60
  const fps = 32.5 + Math.sin(Date.now() * 0.001) * 27.5;
  t.targetFrameRate(fps);

  // Pulsating Orb
  const pulse = Math.sin(t.frameCount * 0.1) * 10 + 15;

  t.charColor(255, 100, 200);
  t.char('O');
  t.ellipse(pulse, pulse);

  t.charColor(255);
  t.char('·');
  t.ellipse(pulse * 0.7, pulse * 0.7);

  // Visual indicator of current target
  const barWidth = fps;
  t.push();
  t.translate(0, t.grid.rows/2 - 2);
  t.charColor(0, 255, 100);
  t.char('|');
  t.rect(barWidth, 1);
  t.pop();
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.targetFrameRate
```

***

### touchCancelled()

```ts
touchCancelled(callback): void;
```

Set a callback function that will be called when a touch is cancelled by the browser.

Cancellation can occur when the browser takes ownership for scrolling or if the gesture
leaves the window. Treat this as an aborted touch and clean up any in-progress state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchEventHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchEventHandler.md) | The function to call when a touch is cancelled. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

let msg = 'OK';
let colorIntensity = 100;

t.touchStarted(() => { msg = 'TOUCH'; colorIntensity = 200; });
t.touchEnded(() => { msg = 'OK'; colorIntensity = 100; });

// Cancellation happens when browser interrupts (e.g. alt-tab)
t.touchCancelled((data) => {
  msg = 'CANCEL';
  colorIntensity = 0; // Red
});

t.draw(() => {
  t.background(0);

  // Draw status indicator
  t.char(msg.charAt(0));
  t.charColor(255, colorIntensity, colorIntensity);
  t.rotateZ(t.frameCount * 0.1);
  t.rect(15, 15);

  // Reset if cancelled after a while
  if (msg === 'CANCEL' && t.frameCount % 60 === 0) {
      msg = 'OK';
      colorIntensity = 100;
  }
});
```

#### Implementation of

```ts
ITextmodifier.touchCancelled
```

***

### touchEnded()

```ts
touchEnded(callback): void;
```

Set a callback function that will be called when a touch ends normally.

This fires after the finger leaves the canvas surface and the browser raises a `touchend`
event. Use it to finalise state such as drawing strokes or completing gestures.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchEventHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchEventHandler.md) | The function to call when a touch ends. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

const ghosts = [];

t.touchEnded((data) => {
  // Record where touch ended to show a fading "ghost"
  ghosts.push({
    x: data.touch.x,
    y: data.touch.y,
    alpha: 255
  });
});

t.draw(() => {
  t.background(0);

  // Draw and update ghosts
  for (let i = ghosts.length - 1; i >= 0; i--) {
    const g = ghosts[i];

    t.push();
    t.translate(g.x, g.y);
    t.char('○');
    t.charColor(255, 100, 100, g.alpha);
    t.ellipse(10, 10);
    t.pop();

    g.alpha -= 10;
    if (g.alpha <= 0) ghosts.splice(i, 1);
  }

  if (ghosts.length === 0) {
    t.charColor(100);
    t.char('?');
    t.rect(1, 1);
  }
});
```

#### Implementation of

```ts
ITextmodifier.touchEnded
```

***

### touchMoved()

```ts
touchMoved(callback): void;
```

Set a callback function that will be called when a touch point moves across the canvas.

The provided callback is invoked continuously while the browser reports move events. Use the
`previousTouch` and `deltaTime` fields to derive velocity or gesture behaviour.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchEventHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchEventHandler.md) | The function to call when a touch moves. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

// Position of our draggable object
let posX = 0;
let posY = 0;

t.touchMoved((data) => {
  const { touch, previousTouch } = data;

  // If we have history, calculate the delta and move the object
  if (previousTouch) {
    posX += touch.x - previousTouch.x;
    posY += touch.y - previousTouch.y;
  }
});

t.draw(() => {
  t.background(0);

  // Draw the object at its current position
  t.push();
  t.translate(posX, posY);

  // Visual flair: color changes based on position
  const r = Math.abs(Math.sin(posX * 0.05)) * 255;
  const b = Math.abs(Math.cos(posY * 0.05)) * 255;
  t.charColor(r, 200, b);

  t.char('◈');
  t.rect(8, 8);
  t.pop();
});
```

#### Implementation of

```ts
ITextmodifier.touchMoved
```

***

### touchStarted()

```ts
touchStarted(callback): void;
```

Set a callback function that will be called when a touch point begins.

The callback receives [TouchEventData](../namespaces/input/namespaces/touch/interfaces/TouchEventData.md) containing the touch that triggered the event,
all active touches, and the original DOM event. Use this to react when the user places one or
more fingers on the canvas.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`TouchEventHandler`](../namespaces/input/namespaces/touch/type-aliases/TouchEventHandler.md) | The function to call when a touch starts. |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

const ripples = [];

t.touchStarted((data) => {
  // Spawn a ripple at touch location with random color
  ripples.push({
    x: data.touch.x,
    y: data.touch.y,
    r: Math.random() * 255,
    g: Math.random() * 255,
    b: Math.random() * 255,
    startFrame: t.frameCount
  });
});

t.draw(() => {
  t.background(0);

  // Update and draw ripples
  for (let i = ripples.length - 1; i >= 0; i--) {
    const ripple = ripples[i];
    const age = t.frameCount - ripple.startFrame;
    const size = age * 0.5;
    const alpha = Math.max(0, 255 - age * 4);

    if (alpha <= 0) {
      ripples.splice(i, 1);
      continue;
    }

    t.push();
    t.translate(ripple.x, ripple.y);
    t.char('O');
    t.charColor(ripple.r, ripple.g, ripple.b, alpha);
    t.ellipse(size, size);
    t.pop();
  }
});
```

#### Implementation of

```ts
ITextmodifier.touchStarted
```

***

### translate()

```ts
translate(
   x?, 
   y?, 
   z?): void;
```

Sets the translation offsets for subsequent shape rendering operations.

All geometries are displaced by the specified amounts. Similar to p5.js translate().

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x?` | `number` | Translation along the X-axis in grid cells (optional, defaults to 0) |
| `y?` | `number` | Translation along the Y-axis in grid cells (optional, defaults to 0) |
| `z?` | `number` | Translation along the Z-axis in grid cells (optional, defaults to 0) |

#### Returns

`void`

#### Example

```javascript
// Rhythmic translation field
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const count = 32;
  const time = t.frameCount * 0.05;

  for (let i = 0; i < count; i++) {
    const phase = i / count;
    const x = (phase - 0.5) * t.grid.cols * 0.8;
    const y = Math.sin(time + phase * 10) * 15;

    t.push();
    // Displace glyph in space
    t.translate(x, y, Math.cos(time + phase * 5) * 10);

    t.charColor(100, 155 + y * 5, 255);
    t.char('≈');
    t.point();
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.translate
```

***

### translateX()

#### Call Signature

```ts
translateX(): number;
```

Gets the current accumulated X-axis translation offset.

##### Returns

`number`

The current X-axis translation in grid cells.

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  t.push();
  // Move based on sine wave
  t.translateX(Math.sin(t.frameCount * 0.05) * 20);

  // Use the actual position to determine rotation speed
  const x = t.translateX();
  t.rotateZ(t.frameCount + x);

  t.charColor(150 + x * 5, 200, 255);
  t.char('X');
  t.rect(10, 10);
  t.pop();
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Implementation of

```ts
ITextmodifier.translateX
```

#### Call Signature

```ts
translateX(pixels): void;
```

Sets the X-axis translation offset for subsequent shape rendering operations.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pixels` | `number` | The translation offset in grid cells along the X-axis. |

##### Returns

`void`

##### Example

```javascript
// Horizontal oscillation field
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0, 10, 0);

  const count = 64;
  for (let i = 0; i < count; i++) {
    t.push();
    // Vertical position
    t.translateY((i - (count - 1) / 2));

    // Oscillating horizontal position
    const x = Math.sin(t.frameCount * 0.04 + i * 0.5) * 25;
    t.translateX(x);

    t.charColor(0, 255, 100);
    t.char('█');
    t.rect(4, 2);
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Implementation of

```ts
ITextmodifier.translateX
```

***

### translateY()

#### Call Signature

```ts
translateY(): number;
```

Gets the current accumulated Y-axis translation offset.

##### Returns

`number`

The current Y-axis translation in grid cells.

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  const yPos = Math.sin(t.frameCount * 0.03) * 15;

  t.push();
  t.translateY(yPos);

  // Visualize the Y coordinate
  const currentY = t.translateY();
  if (currentY > 0) t.char('▲');
  else t.char('▼');

  t.charColor(255, 255 - Math.abs(currentY) * 10, 100);
  t.rect(8, 8);
  t.pop();
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Implementation of

```ts
ITextmodifier.translateY
```

#### Call Signature

```ts
translateY(pixels): void;
```

Sets the Y-axis translation offset for subsequent shape rendering operations.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pixels` | `number` | The translation offset in grid cells along the Y-axis. |

##### Returns

`void`

##### Example

```javascript
// Cascading vertical motion
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0, 0, 10);

  const drops = 128;
  for (let i = 0; i < drops; i++) {
    t.push();
    // Horizontal position
    t.translateX((i - (drops - 1) / 2) * 8);

    // Vertical fall with wrapping
    const speed = 1 + (i % 3) * 0.5;
    const y = (t.frameCount * speed + i * 20) % (t.grid.rows + 10) - (t.grid.rows + 10) / 2;
    t.translateY(y);

    t.charColor(100, 200, 255);
    t.char('|');
    t.point();
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Implementation of

```ts
ITextmodifier.translateY
```

***

### translateZ()

#### Call Signature

```ts
translateZ(): number;
```

Gets the current accumulated Z-axis translation offset.

##### Returns

`number`

The current Z-axis translation in grid cells.

##### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);

  t.push();
  t.translateZ(Math.sin(t.frameCount * 0.05) * 50);

  const depth = t.translateZ();

  // Fade out as it goes further back (manual fog effect)
  const alpha = 50 + (depth + 50) * 2;
  t.charColor(255, 255, 255, alpha);

  t.char('Z');
  t.rect(10, 10);
  t.pop();
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Implementation of

```ts
ITextmodifier.translateZ
```

#### Call Signature

```ts
translateZ(pixels): void;
```

Sets the Z-axis translation offset for subsequent shape rendering operations.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pixels` | `number` | The translation offset in grid cells along the Z-axis. |

##### Returns

`void`

##### Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
  t.background(0);
  t.char('O');
  t.charColor(180, 120, 255);
  t.translateZ(Math.sin(t.frameCount * 0.05) * 20); // Pulse in/out
  t.rect(12, 12);
});
```

##### Implementation of

```ts
ITextmodifier.translateZ
```

***

### triangle()

```ts
triangle(
   x1, 
   y1, 
   x2, 
   y2, 
   x3, 
   y3): void;
```

Draw a triangle with the current settings.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x1` | `number` | X-coordinate of the first vertex in grid cells |
| `y1` | `number` | Y-coordinate of the first vertex in grid cells |
| `x2` | `number` | X-coordinate of the second vertex in grid cells |
| `y2` | `number` | Y-coordinate of the second vertex in grid cells |
| `x3` | `number` | X-coordinate of the third vertex in grid cells |
| `y3` | `number` | Y-coordinate of the third vertex in grid cells |

#### Returns

`void`

#### Example

```javascript
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(5, 5, 10);

  const time = t.frameCount * 0.02;
  const count = 12;
  const radius = Math.min(t.grid.cols, t.grid.rows) * 0.35;

  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const pulse = 0.5 + 0.5 * Math.sin(time + i * 0.5);

    // Coordinate rotation for a kaleidoscopic effect
    const x = Math.cos(angle + time * 0.5) * radius * pulse;
    const y = Math.sin(angle + time * 0.5) * radius * pulse;

    t.push();
    t.translate(x, y);
    t.rotateZ(i * 30 + time * 100);

    // Aesthetic color gradient
    t.charColor(150 + pulse * 105, 100, 255 - pulse * 100);
    t.char(['/', '\\', '|', '-'][i % 4]);
    t.lineWeight(1 + Math.floor(pulse * 3));

    const s = 4 + pulse * 8;
    t.triangle(
      0, -s,           // Top vertex
      -s, s * 0.7,     // Bottom left
      s, s * 0.7       // Bottom right
    );
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.triangle
```

***

### windowResized()

```ts
windowResized(callback): void;
```

Set a callback function that will be called when the window is resized.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | () => `void` | The function to call when the window is resized. |

#### Returns

`void`

#### Example

```javascript
// Create a standalone textmodifier instance
const t = textmode.create({
  width: window.innerWidth,
  height: window.innerHeight,
});

// Draw callback to update content
t.draw(() => {
 // Set background color
 t.background(128);
 t.char('A');
 t.rotateZ(t.frameCount * 2);
 t.rect(16, 16);
});

// Set up window resize callback
t.windowResized(() => {
  // Resize the canvas to match window size
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

#### Implementation of

```ts
ITextmodifier.windowResized
```
