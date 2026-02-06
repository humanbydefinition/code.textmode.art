---
title: TextmodeExportAPI
description: Runtime export helpers that createExportPlugin attaches to the Textmodifier instance.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-02-06
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
