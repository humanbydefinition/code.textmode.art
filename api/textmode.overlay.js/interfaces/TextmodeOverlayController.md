---
layout: doc
editLink: false
title: TextmodeOverlayController
description: Controls the sampled target and DOM alignment for one textmode.js instance.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-08-24
isInterface: true
---

[textmode.overlay.js](../index.md) / TextmodeOverlayController

# Interface: TextmodeOverlayController

Controls the sampled target and DOM alignment for one textmode.js instance.

The controller never owns the output canvas. Clearing or uninstalling the plugin
restores the canvas to its original DOM location and inline styles.


## Controller state

The current sampled target, its configurable texture source, and output visibility state.

### source

```ts
readonly source: TextmodeTexture | undefined;
```

The configurable texture created from [target](#property-target).


***

### target

```ts
readonly target: 
  | TextmodeOverlayTarget
  | undefined;
```

The currently sampled canvas or video.


## Target binding

Attach a target to sample and release it to restore the output canvas.

### clearTarget()

```ts
clearTarget(): void;
```

Stop sampling and restore the output canvas.

#### Returns

`void`

#### Example

```ts
t.overlay.clearTarget();
```


***

### setTarget()

```ts
setTarget(target): TextmodeTexture;
```

Sample a target and align the textmode output canvas above it.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | [`TextmodeOverlayTarget`](../type-aliases/TextmodeOverlayTarget.md) | Canvas or video to sample. |

#### Returns

`TextmodeTexture`

The configurable texture source.

#### Example

```ts
const source = t.overlay.setTarget(canvas);
source.characters(' .:-=+*#%@');
```


## Visibility

Show, hide, and toggle only the output canvas while sampling continues.

### hide()

```ts
hide(): void;
```

Hide only the output canvas. Sampling and sketch execution continue.

#### Returns

`void`

#### Example

```ts
t.overlay.hide();
```


***

### isVisible()

```ts
isVisible(): boolean;
```

Report the controller's intended output visibility.

#### Returns

`boolean`

Whether the output canvas is shown.

#### Example

```ts
if (t.overlay.isVisible()) t.overlay.hide();
```


***

### show()

```ts
show(): void;
```

Show the output canvas and request a fresh geometry synchronization.

#### Returns

`void`

#### Example

```ts
t.overlay.show();
```


***

### toggle()

```ts
toggle(): void;
```

Toggle output-canvas visibility.

#### Returns

`void`

#### Example

```ts
t.overlay.toggle();
```

