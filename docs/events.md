# Event handling

`textmode.js` provides comprehensive event handling capabilities for touch, mouse, and keyboard interactions, enabling you to create interactive textmode applications and games. The event system is designed to be familiar to developers coming from p5.js or similar creative coding frameworks.

## Mouse events

Mouse interaction in `textmode.js` is handled through a grid-based coordinate system. Mouse positions are automatically converted from pixel coordinates to grid cell coordinates with a top-left origin `(0, 0)`. When drawing, you'll typically convert these to center-based coordinates for use with `translate()`.

### Mouse position

The mouse position is available as grid coordinates (column, row) where the top-left corner is `(0, 0)`. When the mouse is outside the grid area, the coordinates are `(-1, -1)`.

```javascript
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
    t.background(0);
    
    if (t.mouse.x !== -1 && t.mouse.y !== -1) {
        // Convert mouse position from top-left origin to center-based origin
        const centerX = Math.round(t.mouse.x - (t.grid.cols - 1) / 2);
        const centerY = Math.round(t.mouse.y - (t.grid.rows - 1) / 2);
        
        t.push();
        t.translate(centerX, centerY);
        t.char('*');
        t.charColor(255, 0, 0);
        t.point();
        t.pop();
    }
});
```

### Mouse click events

Handle mouse clicks with the [`mouseClicked()`](/api/classes/Textmodifier#mouseclicked) method:

```javascript
const t = textmode.create({ width: 800, height: 600 });

const ripples = [];

t.mouseClicked((data) => {
    // Convert top-left grid coords to center-based coords
    const centerX = Math.round(data.position.x - (t.grid.cols - 1) / 2);
    const centerY = Math.round(data.position.y - (t.grid.rows - 1) / 2);
    
    ripples.push({ x: centerX, y: centerY, age: 0, maxAge: 20 });
});

t.draw(() => {
    t.background(0);
    
    for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.age++;
        const life = r.age / r.maxAge;
        const radius = 1 + life * 7;
        const intensity = Math.round(255 * (1 - life));
        
        t.charColor(intensity, intensity, 255);
        
        t.push();
        t.translate(r.x, r.y);
        
        for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
            const ox = Math.round(Math.cos(a) * radius);
            const oy = Math.round(Math.sin(a) * radius);
            t.push();
            t.translate(ox, oy);
            t.char('*');
            t.point();
            t.pop();
        }
        
        t.pop();
        
        if (r.age > r.maxAge) {
            ripples.splice(i, 1);
        }
    }
});
```

### Mouse press and release

Track mouse button states with [`mousePressed()`](/api/classes/Textmodifier#mousepressed) and [`mouseReleased()`](/api/classes/Textmodifier#mousereleased):

```javascript
const t = textmode.create({ width: 800, height: 600 });

const particles = [];
let pressing = false;

t.mousePressed((data) => {
    if (data.position.x === -1 || data.position.y === -1) return;
    pressing = true;
});

t.mouseReleased(() => {
    pressing = false;
});

t.draw(() => {
    t.background(0);
    
    // Spawn particles while pressing
    if (pressing && t.mouse.x !== -1) {
        const cx = Math.round(t.mouse.x - (t.grid.cols - 1) / 2);
        const cy = Math.round(t.mouse.y - (t.grid.rows - 1) / 2);
        
        for (let i = 0; i < 3; i++) {
            particles.push({
                x: cx, y: cy,
                vx: (Math.random() - 0.5) * 0.8,
                vy: Math.random() * -0.5 - 0.2,
                age: 0, maxAge: 30 + Math.random() * 20
            });
        }
    }
    
    // Update and draw particles
    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.age++;
        p.vy += 0.08; // gravity
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.age >= p.maxAge) {
            particles.splice(i, 1);
            continue;
        }
        
        const life = 1 - (p.age / p.maxAge);
        const brightness = Math.round(255 * life);
        
        t.push();
        t.charColor(brightness, brightness * 0.7, 100);
        t.translate(Math.round(p.x), Math.round(p.y));
        t.char(life > 0.5 ? 'o' : '.');
        t.point();
        t.pop();
    }
});
```

### Mouse movement

Respond to mouse movement with [`mouseMoved()`](/api/classes/Textmodifier#mousemoved):

```javascript
const t = textmode.create({ width: 800, height: 600 });

const trail = [];
let lastMouse = null;

t.mouseMoved((data) => {
    if (data.position.x === -1 || data.position.y === -1) return;
    
    // Convert to center-based coords
    const cx = Math.round(data.position.x - (t.grid.cols - 1) / 2);
    const cy = Math.round(data.position.y - (t.grid.rows - 1) / 2);
    
    // Spawn multiple particles based on movement speed
    const dx = lastMouse ? cx - lastMouse.x : 0;
    const dy = lastMouse ? cy - lastMouse.y : 0;
    const speed = Math.sqrt(dx * dx + dy * dy);
    const count = Math.max(1, Math.ceil(speed * 1.5));
    
    for (let i = 0; i < count; i++) {
        trail.push({ x: cx, y: cy, age: 0, maxAge: 15 + Math.random() * 10 });
    }
    
    lastMouse = { x: cx, y: cy };
});

t.draw(() => {
    t.background(0);
    
    for (let i = trail.length - 1; i >= 0; i--) {
        const p = trail[i];
        p.age++;
        
        if (p.age >= p.maxAge) {
            trail.splice(i, 1);
            continue;
        }
        
        const life = 1 - (p.age / p.maxAge);
        const brightness = Math.round(255 * life);
        const chars = ['.', '*', 'o', '@'];
        const idx = Math.floor(life * chars.length);
        
        t.push();
        t.charColor(brightness, brightness * 0.6, 255);
        t.translate(p.x, p.y);
        t.char(chars[Math.min(idx, chars.length - 1)]);
        t.point();
        t.pop();
    }
});
```

### Mouse scroll events

Handle mouse wheel scrolling with [`mouseScrolled()`](/api/classes/Textmodifier#mousescrolled):

```javascript
const t = textmode.create({ width: 800, height: 600 });

const rings = [];

t.mouseScrolled((data) => {
    if (data.position.x === -1 || data.position.y === -1) return;
    
    const cx = Math.round(data.position.x - (t.grid.cols - 1) / 2);
    const cy = Math.round(data.position.y - (t.grid.rows - 1) / 2);
    
    const scrollDown = (data.delta?.y || 0) > 0;
    
    rings.push({
        x: cx, y: cy,
        radius: 1, maxRadius: 8,
        scrollDown: scrollDown,
        age: 0, maxAge: 20
    });
});

t.draw(() => {
    t.background(0);
    
    for (let i = rings.length - 1; i >= 0; i--) {
        const r = rings[i];
        r.age++;
        r.radius += (r.maxRadius - r.radius) * 0.15;
        
        if (r.age >= r.maxAge) {
            rings.splice(i, 1);
            continue;
        }
        
        const life = 1 - (r.age / r.maxAge);
        const brightness = Math.round(255 * life);
        
        t.push();
        if (r.scrollDown) {
            t.charColor(brightness * 0.5, brightness * 0.8, 255);
        } else {
            t.charColor(255, brightness * 0.6, brightness * 0.3);
        }
        t.translate(r.x, r.y);
        
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

### Mouse cursor control

Change the canvas cursor with [`cursor()`](/api/classes/Textmodifier#cursor):

```javascript
const t = textmode.create({ width: 800, height: 600 });

const target = { width: 30, height: 15 };

t.draw(() => {
    t.background(0);
    t.charColor(255);
    t.char('*');
    t.rect(target.width, target.height);
    
    // Rectangle is centered at (0, 0) which is grid center
    const centerX = t.grid.cols / 2;
    const centerY = t.grid.rows / 2;
    
    const halfRectWidth = target.width / 2;
    const halfRectHeight = target.height / 2;
    
    const rectLeft = centerX - halfRectWidth;
    const rectRight = centerX + halfRectWidth;
    const rectTop = centerY - halfRectHeight;
    const rectBottom = centerY + halfRectHeight;
    
    const hovering = t.mouse.x >= rectLeft && t.mouse.x < rectRight &&
                     t.mouse.y >= rectTop && t.mouse.y < rectBottom;
    
    t.cursor(hovering ? 'pointer' : 'default');
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

:::warning
The touch-related code examples are currently outdated and will be updated soon.
:::

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
            t.point();
        }
    }
});
```

### Touch start, move, end, and cancel

Register callbacks with [`touchStarted()`](/api/classes/Textmodifier#touchstarted), [`touchMoved()`](/api/classes/Textmodifier#touchmoved), [`touchEnded()`](/api/classes/Textmodifier#touchended), and [`touchCancelled()`](/api/classes/Textmodifier#touchcancelled) to react to raw touch events:

```js
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

```js
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

### Key press events

Handle individual key presses with [`keyPressed()`](/api/classes/Textmodifier#keypressed):

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

### Key release events

Handle key releases with [`keyReleased()`](/api/classes/Textmodifier#keyreleased):

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

### Special keys

The keyboard system handles special keys with normalized names:

```js
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

```js
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
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
    t.background(0);
    
    const lastPressed = t.lastKeyPressed;
    const lastReleased = t.lastKeyReleased;
    
    if (lastPressed) {
        // Display the last pressed key
        t.push();
        t.char(lastPressed);
        t.charColor(255, 255, 255);
        t.translate(-5, 0);
        t.point();
        t.pop();
    }
    
    if (lastReleased) {
        // Display the last released key
        t.push();
        t.char(lastReleased);
        t.charColor(128, 128, 128);
        t.translate(5, 0);
        t.point();
        t.pop();
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