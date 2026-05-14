---
title: Event Handling
description: Handle mouse, keyboard, touch, gesture, and gamepad input in textmode.js.
---

# Event handling

`textmode.js` includes a unified input system for mouse, keyboard, touch, gesture, and gamepad input. You can use the familiar single-callback helpers such as `mousePressed()` and `keyReleased()`, or the newer shared event API with `on()`, `off()`, and `once()`.

## Two ways to register input

There are two event styles in the library:

- **Legacy single-callback methods** such as `mousePressed()`, `touchStarted()`, or `gamepadConnected()`
- **Shared multi-listener methods**: `on()`, `off()`, and `once()`

The single-callback helpers are convenient when you only need one handler for a given event. The shared event API is better when you want multiple listeners or explicit teardown.

### Shared event API

```js
const t = textmode.create({ width: 800, height: 600 });

const disposeMove = t.on('mouseMoved', (data) => {
  console.log('mouse moved to', data.position.x, data.position.y);
});

t.once('keyPressed', (data) => {
  console.log('first key press:', data.key);
});

function onPress(data) {
  console.log('mouse pressed at', data.position);
}

t.on('mousePressed', onPress);

// Later:
t.off('mousePressed', onPress);
disposeMove();
```

## Event overview

`textmode.js` exposes the following input event names:

### Keyboard

- `keyPressed`
- `keyTyped`
- `keyReleased`

### Mouse

- `mouseClicked`
- `doubleClicked`
- `mousePressed`
- `mouseReleased`
- `mouseMoved`
- `mouseDragged`
- `mouseScrolled`

### Touch lifecycle

- `touchStarted`
- `touchMoved`
- `touchEnded`
- `touchCancelled`

### Touch gestures

- `tap`
- `doubleTap`
- `longPress`
- `swipe`
- `pinch`
- `rotateGesture`

### Gamepad

- `gamepadConnected`
- `gamepadDisconnected`
- `gamepadButtonPressed`
- `gamepadButtonReleased`
- `gamepadAxisChanged`

## Mouse input

Mouse coordinates in `textmode.js` use the same **center-based grid coordinates** as the drawing API:

- `(0, 0)` is the center of the grid
- negative X is left, positive X is right
- negative Y is up, positive Y is down

When the mouse is outside the grid, `x` and `y` are set to `Number.NEGATIVE_INFINITY`.

### Polling mouse state

Use these properties inside `draw()`:

- `t.mouse`
- `t.pmouse`
- `t.mouseIsPressed`
- `t.movedX`
- `t.movedY`

```js
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
  t.background(0);

  if (!Number.isFinite(t.mouse.x) || !Number.isFinite(t.mouse.y)) {
    return;
  }

  t.push();
  t.translate(t.mouse.x, t.mouse.y);
  t.char('@');
  t.charColor(255, 120, 80);
  t.point();
  t.pop();
});
```

### Mouse events

Mouse callbacks receive:

- `position`
- `previousPosition`
- `button` for click and press events
- `delta` for wheel events
- `originalEvent`

```js
const t = textmode.create({ width: 800, height: 600 });
const trail = [];

t.mouseDragged((data) => {
  if (!Number.isFinite(data.position.x) || !Number.isFinite(data.position.y)) return;
  trail.push({ x: data.position.x, y: data.position.y, age: 0 });
});

t.draw(() => {
  t.background(0);

  for (let i = trail.length - 1; i >= 0; i--) {
    const p = trail[i];
    p.age++;

    if (p.age > 20) {
      trail.splice(i, 1);
      continue;
    }

    const brightness = Math.round(255 * (1 - p.age / 20));

    t.push();
    t.translate(p.x, p.y);
    t.char('*');
    t.charColor(brightness, brightness, 255);
    t.point();
    t.pop();
  }
});
```

### Cursor and pointer lock

Mouse input also includes:

- `t.cursor(...)`
- `t.requestPointerLock()`
- `t.exitPointerLock()`

Pointer lock is useful when you want relative mouse movement through `t.movedX` and `t.movedY`, for example in camera controls or first-person navigation.

## Keyboard input

Keyboard callbacks receive:

- `key`
- `keyCode`
- `ctrlKey`
- `shiftKey`
- `altKey`
- `metaKey`
- `isPressed`
- `originalEvent`

### Keyboard events

- `keyPressed` fires once when a key goes down
- `keyTyped` fires for printable characters
- `keyReleased` fires when a key goes up

### Polling keyboard state

Use these helpers when you want continuous key state:

- `t.isKeyPressed(key)`
- `t.lastKeyPressed`
- `t.lastKeyReleased`
- `t.pressedKeys`
- `t.modifierState`

```js
const t = textmode.create({ width: 800, height: 600 });
let x = 0;
let y = 0;

t.draw(() => {
  t.background(0);

  if (t.isKeyPressed('ArrowLeft')) x -= 1;
  if (t.isKeyPressed('ArrowRight')) x += 1;
  if (t.isKeyPressed('ArrowUp')) y -= 1;
  if (t.isKeyPressed('ArrowDown')) y += 1;

  t.push();
  t.translate(x, y);
  t.char('#');
  t.charColor(255, 255, 0);
  t.point();
  t.pop();
});
```

## Touch input

Touch coordinates also use center-based grid coordinates. For per-touch data, each touch includes:

- `id`
- `x` and `y`
- `clientX` and `clientY`
- optional `pressure`, `radiusX`, `radiusY`, and `rotationAngle`

### Touch lifecycle events

The lifecycle events are:

- `touchStarted`
- `touchMoved`
- `touchEnded`
- `touchCancelled`

Touch lifecycle callbacks receive:

- `touch`
- `previousTouch`
- `touches`
- `previousTouches`
- `changedTouches`
- `deltaTime`
- `originalEvent`

The current active touches are also available through `t.touches`.

```js
const t = textmode.create({ width: 800, height: 600 });

t.draw(() => {
  t.background(0);

  for (const touch of t.touches) {
    if (!Number.isFinite(touch.x) || !Number.isFinite(touch.y)) continue;

    t.push();
    t.translate(touch.x, touch.y);
    t.char('●');
    t.charColor(0, 220, 255);
    t.point();
    t.pop();
  }
});
```

## Touch gestures

`textmode.js` includes built-in gesture recognition:

- `tap`
- `doubleTap`
- `longPress`
- `swipe`
- `pinch`
- `rotateGesture`

### Gesture payloads

- `tap` and `doubleTap` include `touch` and `taps`
- `longPress` includes `touch` and `duration`
- `swipe` includes `touch`, `direction`, `distance`, and `velocity`
- `pinch` includes `touches`, `scale`, `deltaScale`, and `center`
- `rotateGesture` includes `touches`, `rotation`, `deltaRotation`, and `center`

```js
const t = textmode.create({ width: 800, height: 600 });
let scale = 1;

t.pinch((data) => {
  scale *= data.deltaScale;
  scale = Math.max(0.5, Math.min(3, scale));
});

t.draw(() => {
  t.background(0);

  t.push();
  t.scale(scale, scale);
  t.char('X');
  t.charColor(255, 255, 255);
  t.point();
  t.pop();
});
```

## Gamepad input

`textmode.js` includes built-in browser Gamepad API support.

### Gamepad events

Gamepad callbacks are useful for connection changes and discrete button or axis transitions:

- `gamepadConnected`
- `gamepadDisconnected`
- `gamepadButtonPressed`
- `gamepadButtonReleased`
- `gamepadAxisChanged`

Gamepad event payloads include:

- `gamepad` for connection events
- `gamepad`, `buttonIndex`, `button`, `previousButton`, and optional `standardButtonName` for button events
- `gamepad`, `axisIndex`, `value`, `previousValue`, `delta`, and optional `standardAxisName` for axis events

### Polling gamepad state

For continuous control, poll:

- `t.gamepads`
- `t.gamepad(index)`

`t.gamepads` returns a compact list of connected controllers without sparse holes. For standard-mapped controllers, each snapshot may also expose `standard.leftStick`, `standard.rightStick`, `standard.faceButtons`, `standard.shoulders`, `standard.center`, and `standard.dpad`.

```js
const t = textmode.create({ width: 800, height: 600 });
let x = 0;
let y = 0;

t.gamepadConnected((data) => {
  console.log('connected:', data.gamepad.id);
});

t.draw(() => {
  t.background(0);

  const gp = t.gamepads[0];
  const stick = gp?.standard?.leftStick;

  if (stick) {
    x += stick.x * 0.5;
    y += stick.y * 0.5;
  }

  t.push();
  t.translate(Math.round(x), Math.round(y));
  t.char('█');
  t.charColor(80, 255, 120);
  t.point();
  t.pop();
});
```

`gamepadAxisChanged()` is derived from per-frame polling, so for analog sticks and triggers, polling `t.gamepads` inside `draw()` is usually the simplest approach.

## Choosing an approach

Use **event callbacks** when you care about edges or transitions:

- clicks
- taps
- button presses
- gamepad connect and disconnect

Use **polling** inside `draw()` when you care about continuous state:

- held keys
- current mouse position
- active touches
- analog stick movement

In practice, interactive sketches often use both.

## Related APIs

- [`Textmodifier`](/api/textmode.js/classes/Textmodifier)
- [`input`](/api/textmode.js/namespaces/input/index.md)
- [`input.keyboard`](/api/textmode.js/namespaces/input/namespaces/keyboard/index.md)
- [`input.mouse`](/api/textmode.js/namespaces/input/namespaces/mouse/index.md)
- [`input.touch`](/api/textmode.js/namespaces/input/namespaces/touch/index.md)
- [`input.gamepad`](/api/textmode.js/namespaces/input/namespaces/gamepad/index.md)
