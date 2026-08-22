---
layout: doc
editLink: false
title: TextmodeOptions
description: Options when creating a Textmodifier instance via textmode.create.
category: Type Aliases
api: true
kind: TypeAlias
lastModified: 2026-08-22
---

[textmode.js](../index.md) / TextmodeOptions

# Type Alias: TextmodeOptions

```ts
type TextmodeOptions = object;
```

Options when creating a [Textmodifier](../classes/Textmodifier.md) instance via [textmode.create](../classes/textmode/methods/create.md).


## Properties

### canvas?

```ts
optional canvas?: HTMLCanvasElement;
```

Existing [HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)
to use instead of letting `textmode.js` create a canvas.


***

### fontSize?

```ts
optional fontSize?: number;
```

The font size to use for text rendering. Defaults to 16.


***

### fontSource?

```ts
optional fontSource?: string;
```

URL or path to a custom font file *(.otf, .ttf, or .woff)*.


***

### frameRate?

```ts
optional frameRate?: number;
```

Maximum frames per second for auto rendering. Defaults to 60.


***

### gl?

```ts
optional gl?: WebGL2RenderingContext;
```

Use an external WebGL2 context instead of creating a new one.
Useful for integrating with three.js, Babylon.js, hydra-synth, or other WebGL libraries
that share the same canvas.


***

### height?

```ts
optional height?: number;
```

The height of the canvas when creating a new canvas. Defaults to 600.


***

### loadingScreen?

```ts
optional loadingScreen?: LoadingScreenOptions;
```

Configure the built-in loading screen experience.


***

### pixelDensity?

```ts
optional pixelDensity?: number;
```

Pixel density multiplier for HiDPI/Retina displays. Defaults to `1`.

For internally-created canvases, the backing store size is set to
`width * pixelDensity × height * pixelDensity` while the CSS display
size stays at `width × height`.

Has no effect when using an externally-supplied `gl` or `canvas`.


***

### plugins?

```ts
optional plugins?: TextmodePlugin[];
```

List of plugins to install when the Textmodifier instance is created.


***

### seed?

```ts
optional seed?: string | number;
```

Seed used by the instance-scoped random generator.

Set this when a sketch should produce the same random sequence each time it runs.


***

### width?

```ts
optional width?: number;
```

The width of the canvas when creating a new canvas. Defaults to 800.

