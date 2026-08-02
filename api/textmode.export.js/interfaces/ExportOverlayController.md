---
layout: doc
editLink: true
title: ExportOverlayController
description: Controller for managing the export overlay UI visibility at runtime.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-08-01
isInterface: true
---

[textmode.export.js](../index.md) / ExportOverlayController

# Interface: ExportOverlayController

Controller for managing the export overlay UI visibility at runtime.


## Methods

### getDefaults()

```ts
getDefaults(): Readonly<ExportDefaults>;
```

Read the current effective defaults for every format.

The returned object reflects the library's curated defaults merged
with any runtime overrides applied via [setDefaults](#setdefaults).

#### Returns

`Readonly`\<[`ExportDefaults`](../type-aliases/ExportDefaults.md)\>

The current per-format defaults.

#### Example

```ts
const defaults = t.exportOverlay.getDefaults();
console.log(defaults.image.scale); // 1 (or whatever was set)
```


***

### getPosition()

```ts
getPosition(): Readonly<ExportOverlayPosition>;
```

Reads the current export overlay placement.

#### Returns

`Readonly`\<[`ExportOverlayPosition`](ExportOverlayPosition.md)\>

The current canvas-relative overlay placement state.

#### Example

```ts
const position = t.exportOverlay.getPosition();
console.log(position.mode, position.offsetX, position.offsetY);
```


***

### hide()

```ts
hide(): void;
```

Hides the export overlay UI.

#### Returns

`void`

#### Example

```ts
t.exportOverlay.hide();
```


***

### isVisible()

```ts
isVisible(): boolean;
```

Checks if the export overlay is currently visible.

#### Returns

`boolean`

#### Example

```ts
const visible = t.exportOverlay.isVisible();
```


***

### resetDefaults()

```ts
resetDefaults(format?): void;
```

Restore one or all formats to the library's curated defaults.

If a format is specified, only that format is reset; otherwise all
formats are restored.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `format?` | keyof ExportDefaults | Optional format to reset. Omit to reset all. |

#### Returns

`void`

#### Example

```ts
// Reset image defaults
t.exportOverlay.resetDefaults('image');

// Reset the overlay's selected default export format
t.exportOverlay.resetDefaults('format');

// Reset all formats
t.exportOverlay.resetDefaults();
```


***

### resetPosition()

```ts
resetPosition(): void;
```

Restores the export overlay to its default canvas-relative placement and
clears any remembered placement.

#### Returns

`void`

#### Example

```ts
t.exportOverlay.resetPosition();
```


***

### setDefaults()

```ts
setDefaults(patch): void;
```

Override the curated overlay defaults at runtime.

Merges the supplied patch into the internal defaults store. Per-format
option patches are pushed into mounted blades; top-level `format` updates
the overlay's selected export format immediately.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `patch` | [`ExportDefaultsPatch`](../type-aliases/ExportDefaultsPatch.md) | Partial defaults to merge per format. |

#### Returns

`void`

#### Example

```ts
// Select image export by default, set image scale to 2×, and GIF to 30 fps
t.exportOverlay.setDefaults({ format: 'image', image: { scale: 2 }, gif: { frameRate: 30 } });
```


***

### setPosition()

```ts
setPosition(position): void;
```

Moves the export overlay to a custom canvas-relative placement and
remembers that placement for future sessions on the same origin.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `position` | [`ExportOverlayPositionInput`](ExportOverlayPositionInput.md) | Canvas-relative overlay offsets in CSS pixels. |

#### Returns

`void`

#### Example

```ts
t.exportOverlay.setPosition({ offsetX: 24, offsetY: 24 });
```


***

### show()

```ts
show(): void;
```

Shows the export overlay UI.

#### Returns

`void`

#### Example

```ts
t.exportOverlay.show();
```


***

### toggle()

```ts
toggle(): void;
```

Toggles the export overlay UI visibility.

#### Returns

`void`

#### Example

```ts
t.exportOverlay.toggle();
```

