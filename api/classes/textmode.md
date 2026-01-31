[textmode.js](../index.md) / textmode

# Class: textmode

The main entry point for the `textmode.js` library.

Provides static methods for creating [Textmodifier](Textmodifier.md) instances and managing global settings.

## Example

```javascript
// Basic usage pattern
const t = textmode.create({
  width: window.innerWidth,
  height: window.innerHeight
});

t.draw(() => {
  t.background(0);
  t.charColor(255);
  t.char('T');
  t.rect(5, 5);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

## Accessors

### version

#### Get Signature

```ts
get static version(): string;
```

Returns the version of `textmode.js` being used.

##### Example

```javascript
// Display the library version in a retro terminal style
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

const v = `VERSION: ${textmode.version}`;

t.draw(() => {
  t.background(0, 20, 0); // CRT Dark Green

  t.push();
  t.translate(-v.length / 2, 0);
  t.charColor(0, 255, 0);

  for (let i = 0; i < v.length; i++) {
    t.push();
    t.translate(i, 0);
    t.char(v[i]);
    t.point();
    t.pop();
  }
  t.pop();
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Returns

`string`

The version string of the library.

## Methods

### create()

```ts
static create(opts): Textmodifier;
```

Create a new [Textmodifier](Textmodifier.md) instance with optional configuration.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | [`TextmodeOptions`](../type-aliases/TextmodeOptions.md) | Configuration options for the Textmodifier instance |

#### Returns

[`Textmodifier`](Textmodifier.md)

A new Textmodifier instance

#### Example

```javascript
// Initialize with custom font size and responsive canvas
const t = textmode.create({
  width: window.innerWidth,
  height: window.innerHeight,
  fontSize: 16
});

t.draw(() => {
  t.background(10, 15, 20);

  // Draw a field of rhythmic characters
  for (let x = -20; x <= 20; x += 5) {
    for (let y = -15; y <= 15; y += 5) {
      const dist = Math.sqrt(x*x + y*y);
      const offset = Math.sin(t.frameCount * 0.1 - dist * 0.5) * 2;

      t.push();
      t.translate(x, y + offset);
      t.charColor(255 - dist * 10, 150, 200);
      t.char(dist < 10 ? '█' : '░');
      t.point();
      t.pop();
    }
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### setErrorLevel()

```ts
static setErrorLevel(level): void;
```

Set the global error handling level for the library. This applies to all [Textmodifier](Textmodifier.md) instances present.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `level` | [`TextmodeErrorLevel`](../enumerations/TextmodeErrorLevel.md) | The error handling level to set. |

#### Returns

`void`

#### Example

```javascript
// Configuring error behavior
import { TextmodeErrorLevel } from 'textmode.js';

// Suppress non-critical warnings in production
textmode.setErrorLevel(TextmodeErrorLevel.WARNING);

const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(0);
  t.char('!');
  t.charColor(255, 255, 0);
  t.rect(10, 10);
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
