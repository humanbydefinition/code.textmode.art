---
layout: doc
editLink: true
title: TextmodeFont
description: Manages the font used for rendering characters via TextmodeLayer.loadFont.
category: Classes
api: true
namespace: loadables
kind: Class
lastModified: 2026-02-06
hasConstructor: false
---

[textmode.js](../../../index.md) / [loadables](../index.md) / TextmodeFont

# Class: TextmodeFont

Manages the font used for rendering characters via [TextmodeLayer.loadFont](../../layering/classes/TextmodeLayer.md#loadfont).

This class coordinates font loading, character extraction, texture atlas creation,
and provides character information.

Each [TextmodeLayer](../../layering/classes/TextmodeLayer.md) has its own instance of this class to allow for
layer-specific font configurations.

## Example

```javascript
const t = textmode.create({ width: 800, height: 600 });

t.setup(async () => {
  // Load a custom font
  const font = await t.loadFont('./fonts/retro.ttf', false);

  // Get info about the loaded font
  console.log(`Loaded ${font.characters.length} characters`);
  console.log(`Max glyph size: ${font.maxGlyphDimensions.width}x${font.maxGlyphDimensions.height}`);

  // Use it on a specific layer
  const layer = t.layers.add();
  await layer.loadFont(font);
});
```

## Extends

- `Disposable`

## Accessors

### characterMap

#### Get Signature

```ts
get characterMap(): Map<string, TextmodeCharacter>;
```

Returns the character map for O(1) lookups.

##### Returns

`Map`\<`string`, [`TextmodeCharacter`](../type-aliases/TextmodeCharacter.md)\>

***

### characters

#### Get Signature

```ts
get characters(): TextmodeCharacter[];
```

Returns the array of [TextmodeCharacter](../type-aliases/TextmodeCharacter.md) objects in the font.

##### Example

```javascript
// Interactive Character Map
const t = textmode.create({ width: window.innerWidth, height: window.innerHeight });

t.draw(() => {
  t.background(10, 10, 20);

  const chars = t.font.characters;
  const cols = 32;
  const rows = Math.ceil(chars.length / cols);

  // Center the grid in the viewport
  const startX = -(cols) / 2;
  const startY = -(rows) / 2;

  // Calculate mouse position in "map space"
  const mx = Math.floor(t.mouse.x - startX);
  const my = Math.floor(t.mouse.y - startY);

  for (let i = 0; i < chars.length; i++) {
    const x = i % cols;
    const y = Math.floor(i / cols);
    const isHovered = mx === x && my === y;

    t.push();
    t.translate(startX + x, startY + y);

    // Highlight hovered character
    if (isHovered) {
      t.cellColor(50, 100, 200);
      t.charColor(255);
      t.translateZ(5); // Pop out
    } else {
      // Gradient based on index
      const hue = (i / chars.length) * 255;
      t.charColor(hue, 150, 255 - hue);
    }

    t.char(chars[i].character);
    t.point();
    t.pop();
  }
});

t.windowResized(() => {
  t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

##### Returns

[`TextmodeCharacter`](../type-aliases/TextmodeCharacter.md)[]

***

### fontFramebuffer

#### Get Signature

```ts
get fontFramebuffer(): TextmodeFramebuffer;
```

Returns the WebGL framebuffer containing the font texture atlas.

##### Returns

[`TextmodeFramebuffer`](../../../classes/TextmodeFramebuffer.md)

***

### fontSize

#### Get Signature

```ts
get fontSize(): number;
```

Returns the font size used for the texture atlas.

##### Returns

`number`

***

### maxGlyphDimensions

#### Get Signature

```ts
get maxGlyphDimensions(): object;
```

Returns the maximum dimensions of a glyph in the font in pixels.

##### Returns

`object`

| Name | Type |
| ------ | ------ |
| `height` | `number` |
| `width` | `number` |

***

### textureColumns

#### Get Signature

```ts
get textureColumns(): number;
```

Returns the number of columns in the texture atlas.

##### Returns

`number`

***

### textureRows

#### Get Signature

```ts
get textureRows(): number;
```

Returns the number of rows in the texture atlas.

##### Returns

`number`

## Methods

### dispose()

```ts
dispose(): void;
```

Dispose of all resources used by this font manager.

#### Returns

`void`

#### Overrides

```ts
Disposable.dispose
```
