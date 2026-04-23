---
layout: doc
editLink: true
title: TextmodeExportAPI
description: Runtime export helpers that createExportPlugin attaches to the Textmodifier instance.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-04-23
isInterface: true
---

[textmode.export.js](../index.md) / TextmodeExportAPI

# Interface: TextmodeExportAPI

Runtime export helpers that `createExportPlugin` attaches to the `Textmodifier` instance.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="exportoverlay"></a> `exportOverlay` | [`ExportOverlayController`](ExportOverlayController.md) | Controller for managing the export overlay UI visibility at runtime. |

## Methods

### saveCanvas()

```ts
saveCanvas(options?): Promise<void>;
```

Saves the current canvas content to an image file *(`'png'` by default)*.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`ImageExportOptions`](../type-aliases/ImageExportOptions.md) | Export options. |

#### Returns

`Promise`\<`void`\>

#### Example

```ts
await t.saveCanvas({ format: 'png', filename: 'frame-001' });
```

***

### copyCanvas()

```ts
copyCanvas(options?): Promise<void>;
```

Copies the current canvas to the user's clipboard as an image.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`ImageExportOptions`](../type-aliases/ImageExportOptions.md) | Export options. |

#### Returns

`Promise`\<`void`\>

#### Example

```ts
await t.copyCanvas({ format: 'png' });
```

***

### saveSVG()

```ts
saveSVG(options?): void;
```

Downloads the current frame as an SVG file.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`SVGExportOptions`](../type-aliases/SVGExportOptions.md) | Export options. |

#### Returns

`void`

#### Example

```ts
t.saveSVG({ filename: 'poster', includeBackgroundRectangles: true });
```

***

### saveStrings()

```ts
saveStrings(options?): void;
```

Downloads the current text content as a plain-text file.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`TXTExportOptions`](../type-aliases/TXTExportOptions.md) | Export options. |

#### Returns

`void`

#### Example

```ts
t.saveStrings({ filename: 'frame', preserveTrailingSpaces: true });
```

***

### toSVG()

```ts
toSVG(options?): string;
```

Generates the SVG markup for the current frame.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`SVGExportOptions`](../type-aliases/SVGExportOptions.md) | Export options. |

#### Returns

`string`

The SVG content representing the artwork.

#### Example

```ts
const svg = t.toSVG({ drawMode: 'stroke', strokeWidth: 1.5 });
```

***

### toString()

```ts
toString(options?): string;
```

Produces the current text content as a string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`TXTExportOptions`](../type-aliases/TXTExportOptions.md) | Export options. |

#### Returns

`string`

The textual representation of the artwork.

#### Example

```ts
const text = t.toString({ preserveTrailingSpaces: false });
```

***

### saveGIF()

```ts
saveGIF(options?): Promise<void>;
```

Records an animated GIF and saves it to disk.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`GIFExportOptions`](../type-aliases/GIFExportOptions.md) | Export options. |

#### Returns

`Promise`\<`void`\>

#### Example

```ts
await t.saveGIF({ frameCount: 120, frameRate: 30, filename: 'loop' });
```

***

### saveWEBM()

```ts
saveWEBM(options?): Promise<void>;
```

Captures a WEBM video and saves it to disk.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`VideoExportOptions`](../type-aliases/VideoExportOptions.md) | Export options. |

#### Returns

`Promise`\<`void`\>

#### Example

```ts
await t.saveWEBM({ frameCount: 240, frameRate: 60, filename: 'capture' });
```
