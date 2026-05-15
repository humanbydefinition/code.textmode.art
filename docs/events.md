---
title: Event Handling
description: Handle mouse, keyboard, touch, gesture, and gamepad input in textmode.js.
---

# Event handling

`textmode.js` includes a unified input system for mouse, keyboard, touch, gesture, and gamepad input. You can use the familiar single-callback helpers such as [`mousePressed()`](/api/textmode.js/classes/Textmodifier#mousepressed) and [`keyReleased()`](/api/textmode.js/classes/Textmodifier#keyreleased), or the newer shared event API with [`on()`](/api/textmode.js/classes/Textmodifier#on), [`off()`](/api/textmode.js/classes/Textmodifier#off), and [`once()`](/api/textmode.js/classes/Textmodifier#once).

## Two ways to register input

There are two event styles in the library:

- **Legacy single-callback methods** such as [`mousePressed()`](/api/textmode.js/classes/Textmodifier#mousepressed), [`touchStarted()`](/api/textmode.js/classes/Textmodifier#touchstarted), or [`gamepadConnected()`](/api/textmode.js/classes/Textmodifier#gamepadconnected)
- **Shared multi-listener methods**: [`on()`](/api/textmode.js/classes/Textmodifier#on), [`off()`](/api/textmode.js/classes/Textmodifier#off), and [`once()`](/api/textmode.js/classes/Textmodifier#once)

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

- [`keyPressed()`](/api/textmode.js/classes/Textmodifier#keypressed)
- [`keyTyped()`](/api/textmode.js/classes/Textmodifier#keytyped)
- [`keyReleased()`](/api/textmode.js/classes/Textmodifier#keyreleased)

### Mouse

- [`mouseClicked()`](/api/textmode.js/classes/Textmodifier#mouseclicked)
- [`doubleClicked()`](/api/textmode.js/classes/Textmodifier#doubleclicked)
- [`mousePressed()`](/api/textmode.js/classes/Textmodifier#mousepressed)
- [`mouseReleased()`](/api/textmode.js/classes/Textmodifier#mousereleased)
- [`mouseMoved()`](/api/textmode.js/classes/Textmodifier#mousemoved)
- [`mouseDragged()`](/api/textmode.js/classes/Textmodifier#mousedragged)
- [`mouseScrolled()`](/api/textmode.js/classes/Textmodifier#mousescrolled)

### Touch lifecycle

- [`touchStarted()`](/api/textmode.js/classes/Textmodifier#touchstarted)
- [`touchMoved()`](/api/textmode.js/classes/Textmodifier#touchmoved)
- [`touchEnded()`](/api/textmode.js/classes/Textmodifier#touchended)
- [`touchCancelled()`](/api/textmode.js/classes/Textmodifier#touchcancelled)

### Touch gestures

- [`tap()`](/api/textmode.js/classes/Textmodifier#tap)
- [`doubleTap()`](/api/textmode.js/classes/Textmodifier#doubletap)
- [`longPress()`](/api/textmode.js/classes/Textmodifier#longpress)
- [`swipe()`](/api/textmode.js/classes/Textmodifier#swipe)
- [`pinch()`](/api/textmode.js/classes/Textmodifier#pinch)
- [`rotateGesture()`](/api/textmode.js/classes/Textmodifier#rotategesture)

### Gamepad

- [`gamepadConnected()`](/api/textmode.js/classes/Textmodifier#gamepadconnected)
- [`gamepadDisconnected()`](/api/textmode.js/classes/Textmodifier#gamepaddisconnected)
- [`gamepadButtonPressed()`](/api/textmode.js/classes/Textmodifier#gamepadbuttonpressed)
- [`gamepadButtonReleased()`](/api/textmode.js/classes/Textmodifier#gamepadbuttonreleased)
- [`gamepadAxisChanged()`](/api/textmode.js/classes/Textmodifier#gamepadaxischanged)

## Mouse input

Mouse coordinates in `textmode.js` use the same **center-based grid coordinates** as the drawing API:

- `(0, 0)` is the center of the grid
- negative X is left, positive X is right
- negative Y is up, positive Y is down

When the mouse is outside the grid, `x` and `y` are set to `Number.NEGATIVE_INFINITY`.

### Polling mouse state

Use these properties inside `draw()`:

- [`t.mouse`](/api/textmode.js/classes/Textmodifier#mouse)
- [`t.pmouse`](/api/textmode.js/classes/Textmodifier#pmouse)
- [`t.mouseIsPressed`](/api/textmode.js/classes/Textmodifier#mouseispressed)
- [`t.movedX`](/api/textmode.js/classes/Textmodifier#movedx)
- [`t.movedY`](/api/textmode.js/classes/Textmodifier#movedy)

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

- [`t.cursor(...)`](/api/textmode.js/classes/Textmodifier#cursor)
- [`t.requestPointerLock()`](/api/textmode.js/classes/Textmodifier#requestpointerlock)
- [`t.exitPointerLock()`](/api/textmode.js/classes/Textmodifier#exitpointerlock)

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

- [`t.isKeyPressed(key)`](/api/textmode.js/classes/Textmodifier#iskeypressed)
- [`t.lastKeyPressed`](/api/textmode.js/classes/Textmodifier#lastkeypressed)
- [`t.lastKeyReleased`](/api/textmode.js/classes/Textmodifier#lastkeyreleased)
- [`t.pressedKeys`](/api/textmode.js/classes/Textmodifier#pressedkeys)
- [`t.modifierState`](/api/textmode.js/classes/Textmodifier#modifierstate)

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

The current active touches are also available through [`t.touches`](/api/textmode.js/classes/Textmodifier#touches).

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

- [`tap()`](/api/textmode.js/classes/Textmodifier#tap)
- [`doubleTap()`](/api/textmode.js/classes/Textmodifier#doubletap)
- [`longPress()`](/api/textmode.js/classes/Textmodifier#longpress)
- [`swipe()`](/api/textmode.js/classes/Textmodifier#swipe)
- [`pinch()`](/api/textmode.js/classes/Textmodifier#pinch)
- [`rotateGesture()`](/api/textmode.js/classes/Textmodifier#rotategesture)

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

- [`gamepadConnected()`](/api/textmode.js/classes/Textmodifier#gamepadconnected)
- [`gamepadDisconnected()`](/api/textmode.js/classes/Textmodifier#gamepaddisconnected)
- [`gamepadButtonPressed()`](/api/textmode.js/classes/Textmodifier#gamepadbuttonpressed)
- [`gamepadButtonReleased()`](/api/textmode.js/classes/Textmodifier#gamepadbuttonreleased)
- [`gamepadAxisChanged()`](/api/textmode.js/classes/Textmodifier#gamepadaxischanged)

Gamepad event payloads include:

- `gamepad` for connection events
- `gamepad`, `buttonIndex`, `button`, `previousButton`, and optional `standardButtonName` for button events
- `gamepad`, `axisIndex`, `value`, `previousValue`, `delta`, and optional `standardAxisName` for axis events

### Polling gamepad state

For continuous control, poll:

- [`t.gamepads`](/api/textmode.js/classes/Textmodifier#gamepads)
- [`t.gamepad(index)`](/api/textmode.js/classes/Textmodifier#gamepad)

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

[`gamepadAxisChanged()`](/api/textmode.js/classes/Textmodifier#gamepadaxischanged) is derived from per-frame polling, so for analog sticks and triggers, polling [`t.gamepads`](/api/textmode.js/classes/Textmodifier#gamepads) inside `draw()` is usually the simplest approach.

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
- [`input`](/api/textmode.js/namespaces/input/)
- [`input.keyboard`](/api/textmode.js/namespaces/input/namespaces/keyboard/)
- [`input.mouse`](/api/textmode.js/namespaces/input/namespaces/mouse/)
- [`input.touch`](/api/textmode.js/namespaces/input/namespaces/touch/)
- [`input.gamepad`](/api/textmode.js/namespaces/input/namespaces/gamepad/)
