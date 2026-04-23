---
layout: doc
editLink: true
title: ExportOverlayController
description: Controller for managing the export overlay UI visibility at runtime.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-04-23
isInterface: true
---

[textmode.export.js](../index.md) / ExportOverlayController

# Interface: ExportOverlayController

Controller for managing the export overlay UI visibility at runtime.

## Methods

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
