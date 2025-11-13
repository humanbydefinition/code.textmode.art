# Event handling

`textmode.js` provides comprehensive event handling capabilities for touch, mouse, and keyboard interactions, enabling you to create interactive textmode applications and games. The event system is designed to be familiar to developers coming from p5.js or similar creative coding frameworks.

## Mouse events

Mouse interaction in `textmode.js` is handled through a grid-based coordinate system. Mouse positions are automatically converted from pixel coordinates to grid cell coordinates.

### Mouse position

The mouse position is available as grid coordinates (column, row) where the top-left corner is `(0, 0)`. When the mouse is outside the grid area, the coordinates are `(-1, -1)`.

```javascript
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
    const mousePos = t.mouse;
    
    if (mousePos.x !== -1 && mousePos.y !== -1) {
        // Mouse is over the grid
        t.char('*');
        t.charColor(255, 0, 0);
        t.point(mousePos.x, mousePos.y);
    }
});
```

### Mouse click events

Handle mouse clicks with the [`mouseClicked()`](/api/classes/Textmodifier#mouseclicked) method:

```javascript
t.mouseClicked((data) => {
    console.log(`Clicked at grid position: ${data.position.x}, ${data.position.y}`);
    console.log(`Button: ${data.button}`); // 0=left, 1=middle, 2=right
});
```

### Mouse press and release

Track mouse button states with [`mousePressed()`](/api/classes/Textmodifier#mousepressed) and [`mouseReleased()`](/api/classes/Textmodifier#mousereleased):

```javascript
let isDragging = false;

t.mousePressed((data) => {
    isDragging = true;
    console.log(`Mouse pressed at: ${data.position.x}, ${data.position.y}`);
});

t.mouseReleased((data) => {
    isDragging = false;
    console.log(`Mouse released at: ${data.position.x}, ${data.position.y}`);
});
```

### Mouse movement

Respond to mouse movement with [`mouseMoved()`](/api/classes/Textmodifier#mousemoved):

```javascript
t.mouseMoved((data) => {
    if (data.position.x !== -1 && data.position.y !== -1) {
        console.log(`Mouse moved to: ${data.position.x}, ${data.position.y}`);
        console.log(`Previous position: ${data.previousPosition.x}, ${data.previousPosition.y}`);
    }
});
```

### Mouse scroll events

Handle mouse wheel scrolling with [`mouseScrolled()`](/api/classes/Textmodifier#mousescrolled):

```javascript
let zoomLevel = 1;

t.mouseScrolled((data) => {
    console.log(`Mouse scrolled at: ${data.position.x}, ${data.position.y}`);
    console.log(`Scroll delta: ${data.delta?.x}, ${data.delta?.y}`);
    
    // Zoom in/out based on scroll direction
    if (data.delta && data.delta.y > 0) {
        zoomLevel += 0.1;
    } else if (data.delta && data.delta.y < 0) {
        zoomLevel = Math.max(0.1, zoomLevel - 0.1);
    }
});
```

### Mouse cursor control

Change the canvas cursor with [`cursor()`](/api/classes/Textmodifier#cursor):

```javascript
// Show crosshair when drawing
t.mousePressed(() => {
    t.cursor('crosshair');
});

// Reset to default when released
t.mouseReleased(() => {
    t.cursor();
});

// Use custom cursors while hovering over interactive regions
const hotspot = { x: 10, y: 5, w: 8, h: 4 };

t.mouseMoved((data) => {
    const { x, y } = data.position;
    const inside = x >= hotspot.x && x < hotspot.x + hotspot.w &&
                    y >= hotspot.y && y < hotspot.y + hotspot.h;

    t.cursor(inside ? 'pointer' : 'default');
});
```

### Mouse event data

All mouse event callbacks receive a `MouseEventData` object containing:

- `position`: Current mouse position in grid coordinates
- `previousPosition`: Previous mouse position in grid coordinates
- `button`: Mouse button that triggered the event (for click events)
  - `0`: Left button
  - `1`: Middle button (wheel)
  - `2`: Right button
- `delta`: Scroll delta for wheel events `{ x: number, y: number }`
- `originalEvent`: The original DOM mouse event

## Touch events

Touch interaction in `textmode.js` mirrors the mouse APIs while supporting multi-touch and high-level gesture recognition. All touch positions are converted into grid coordinates, so you can work with the same column/row values used elsewhere in the drawing API.

### Touch tracking

Use [`t.touches`](/api/classes/Textmodifier#touches) to access the currently active touches each frame:

```javascript
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
    t.background(0);

    for (const touch of t.touches) {
        if (touch.x !== -1 && touch.y !== -1) {
            t.char('●');
            t.charColor(255, 128, 128);
            t.point(touch.x, touch.y);
        }
    }
});
```

### Touch start, move, end, and cancel

Register callbacks with [`touchStarted()`](/api/classes/Textmodifier#touchstarted), [`touchMoved()`](/api/classes/Textmodifier#touchmoved), [`touchEnded()`](/api/classes/Textmodifier#touchended), and [`touchCancelled()`](/api/classes/Textmodifier#touchcancelled) to react to raw touch events:

```javascript
const activeTouches = new Map();

t.touchStarted((data) => {
    activeTouches.set(data.touch.id, data.touch);
});

t.touchMoved((data) => {
    activeTouches.set(data.touch.id, data.touch);
});

t.touchEnded((data) => {
    activeTouches.delete(data.touch.id);
});

t.touchCancelled((data) => {
    activeTouches.delete(data.touch.id);
});
```

The `TouchEventData` object exposes:

- `touch`: The touch point that triggered the callback
- `previousTouch`: The previous position (if available)
- `touches`: The current active touches projected into grid space
- `previousTouches`: Active touches snapshot from the previous event
- `changedTouches`: Touches included in the DOM event
- `deltaTime`: Time elapsed since the last update for this touch (ms)
- `originalEvent`: The original DOM `TouchEvent`

### Gesture callbacks

High-level gestures provide convenient abstractions for common behaviours:

- [`tap()`](/api/classes/Textmodifier#tap) detects single taps
- [`doubleTap()`](/api/classes/Textmodifier#doubletap) detects double taps
- [`longPress()`](/api/classes/Textmodifier#longpress) fires when a finger stays in place
- [`swipe()`](/api/classes/Textmodifier#swipe) reports direction, distance, and velocity
- [`pinch()`](/api/classes/Textmodifier#pinch) delivers scale and delta scale for two-finger zoom
- [`rotateGesture()`](/api/classes/Textmodifier#rotategesture) tracks two-finger rotations

```javascript
t.tap((data) => {
    console.log(`Tapped at ${data.touch.x}, ${data.touch.y}`);
});

t.swipe((data) => {
    console.log(`Swipe ${data.direction} spanning ${Math.round(data.distance)}px`);
});

t.pinch((data) => {
    console.log(`Pinch scale: ${data.scale.toFixed(2)} (Δ${data.deltaScale.toFixed(3)})`);
});

t.rotateGesture((data) => {
    console.log(`Rotated ${Math.round(data.deltaRotation)}° around ${data.center.x}, ${data.center.y}`);
});
```

Each gesture callback receives its own typed data structure (`TouchTapEventData`, `TouchSwipeEventData`, etc.) containing gesture-specific metadata alongside the original DOM event.

## Keyboard events

Keyboard interaction provides both real-time key state checking and event-driven callbacks for key presses and releases.

### Key state checking

Use [`isKeyPressed()`](/api/classes/Textmodifier#iskeypressed) to check if a key is currently being held down:

```javascript
let playerX = 0;
let playerY = 0;

t.draw(() => {
    t.background(0);
    
    // Check for arrow keys to move a character
    if (t.isKeyPressed('ArrowUp')) {
        playerY = Math.max(0, playerY - 1);
    }
    if (t.isKeyPressed('ArrowDown')) {
        playerY = Math.min(t.grid.rows - 1, playerY + 1);
    }
    if (t.isKeyPressed('ArrowLeft')) {
        playerX = Math.max(0, playerX - 1);
    }
    if (t.isKeyPressed('ArrowRight')) {
        playerX = Math.min(t.grid.cols - 1, playerX + 1);
    }
    
    // Draw player character
    t.char('@');
    t.charColor(255, 255, 0);
    t.point(playerX, playerY);
});
```

### Key press events

Handle individual key presses with [`keyPressed()`](/api/classes/Textmodifier#keypressed):

```javascript
t.keyPressed((data) => {
    console.log(`Key pressed: ${data.key}`);
    
    if (data.key === 'Enter') {
        console.log('Enter key was pressed!');
        // Trigger some action
    }
    
    if (data.ctrlKey && data.key === 's') {
        console.log('Ctrl+S was pressed!');
        // Save functionality
    }
    
    if (data.key === ' ') {
        console.log('Spacebar pressed!');
        // Jump or shoot
    }
});
```

### Key release events

Handle key releases with [`keyReleased()`](/api/classes/Textmodifier#keyreleased):

```javascript
t.keyReleased((data) => {
    console.log(`Key released: ${data.key}`);
    
    if (data.key === ' ') {
        console.log('Spacebar was released!');
        // Stop jumping or shooting
    }
});
```

### Special keys

The keyboard system handles special keys with normalized names:

```javascript
// Arrow keys
if (t.isKeyPressed('ArrowUp')) { /* ... */ }
if (t.isKeyPressed('ArrowDown')) { /* ... */ }
if (t.isKeyPressed('ArrowLeft')) { /* ... */ }
if (t.isKeyPressed('ArrowRight')) { /* ... */ }

// Function keys
if (t.isKeyPressed('F1')) { /* ... */ }
if (t.isKeyPressed('F12')) { /* ... */ }

// Control keys
if (t.isKeyPressed('Enter')) { /* ... */ }
if (t.isKeyPressed('Escape')) { /* ... */ }
if (t.isKeyPressed('Tab')) { /* ... */ }
if (t.isKeyPressed('Backspace')) { /* ... */ }
if (t.isKeyPressed('Delete')) { /* ... */ }
if (t.isKeyPressed('Space')) { /* ... */ }

// Modifier keys
if (t.isKeyPressed('Shift')) { /* ... */ }
if (t.isKeyPressed('Control')) { /* ... */ }
if (t.isKeyPressed('Alt')) { /* ... */ }
if (t.isKeyPressed('Meta')) { /* ... */ }
```

### Modifier keys

Check for modifier key combinations:

```javascript
t.keyPressed((data) => {
    if (data.ctrlKey && data.key === 'c') {
        console.log('Copy command');
    }
    
    if (data.shiftKey && data.key === 'Enter') {
        console.log('Shift+Enter pressed');
    }
    
    if (data.altKey && data.key === 'F4') {
        console.log('Alt+F4 pressed');
    }
    
    if (data.metaKey && data.key === 's') {
        console.log('Cmd/Win+S pressed');
    }
});
```

### Last key tracking

Access the most recently pressed or released keys:

```javascript
t.draw(() => {
    const lastPressed = t.lastKeyPressed;
    const lastReleased = t.lastKeyReleased;
    
    if (lastPressed) {
        // Display the last pressed key
        t.char(lastPressed);
        t.charColor(255, 255, 255);
        t.point(10, 10);
    }
    
    if (lastReleased) {
        // Display the last released key
        t.char(lastReleased);
        t.charColor(128, 128, 128);
        t.point(20, 10);
    }
});
```

### Keyboard Event Data

All keyboard event callbacks receive a `KeyboardEventData` object containing:

- `key`: The key that was pressed/released (e.g., 'a', 'Enter', 'ArrowLeft')
- `keyCode`: The key code for compatibility
- `ctrlKey`: Whether Ctrl key is held down
- `shiftKey`: Whether Shift key is held down
- `altKey`: Whether Alt key is held down
- `metaKey`: Whether Meta key (Windows/Cmd) is held down
- `isPressed`: Whether this key is currently being held down
- `originalEvent`: The original DOM keyboard event

## Summary

The event handling system in `textmode.js` provides a robust foundation for creating interactive applications. By combining touch, mouse, and keyboard events with the grid-based coordinate system, you can create engaging textmode experiences ranging from simple drawing tools to complex games.

:::info Next steps
-> For basic drawing concepts, refer to the [Fundamentals](/docs/fundamentals) section.

-> For advanced features like images and framebuffers, refer to the [Advanced features](/docs/advanced) section.

-> For working with custom fonts, refer to the [Fonts](/docs/fonts) section.

-> To apply events in other canvases and media, see [Framework integration](/docs/framework-integration).

-> Want hands-on demos? Explore the [Examples](/docs/examples).
:::