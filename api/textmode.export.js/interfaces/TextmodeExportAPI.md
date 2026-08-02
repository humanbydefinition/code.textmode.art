---
layout: doc
editLink: true
title: TextmodeExportAPI
description: Runtime export helpers that ExportPlugin attaches to the Textmodifier instance.
category: Interfaces
api: true
kind: Interface
ecosystem: textmode.js
lastModified: 2026-08-01
isInterface: true
---

[textmode.export.js](../index.md) / TextmodeExportAPI

# Interface: TextmodeExportAPI

Runtime export helpers that `ExportPlugin` attaches to the `Textmodifier` instance.

## Example

```javascript
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
	plugins: [ExportPlugin],
});

const RAMP = ' .:-=+*#%@';
const energyLayer = t.layers.add({ opacity: 0.9, blendMode: t.BLEND_SCREEN });
const annotationLayer = t.layers.add({ opacity: 0.95, blendMode: t.BLEND_NORMAL });
const labelLayer = t.layers.add();
t.exportOverlay.setDefaults({ format: 'json', json: { target: 'all', pretty: true } });
t.exportOverlay.show();
t.exportOverlay.setPosition({
	offsetX: Math.max(8, window.innerWidth - 280),
	offsetY: Math.max(8, window.innerHeight - 310),
});

function drawText(text, x, y, color = '#a9b7d0') {
	t.push();
	t.printAlign('left', 'top');
	t.charColor(color);
	t.print(text, x, y);
	t.pop();
}

t.draw(() => {
	t.background('#070b12');
	const halfW = Math.floor(t.grid.cols / 2);
	const halfH = Math.floor(t.grid.rows / 2);
	for (let y = -halfH; y <= halfH; y++) {
		for (let x = -halfW; x <= halfW; x++) {
			const ridge = Math.sin(x * 0.17) * 3 + Math.sin(x * 0.07 + 1) * 4;
			const depth = (y - ridge + halfH * 0.32) / (halfH * 1.1);
			const contour = 0.5 + 0.5 * Math.sin((y - ridge) * 0.72);
			const value = depth > 0 ? Math.min(1, 0.3 + depth * 0.45 + contour * 0.25) : 0;
			if (value < 0.2) continue;
			t.push();
			t.translate(x, y, 0);
			t.char(RAMP[Math.min(RAMP.length - 1, Math.floor(value * RAMP.length))]);
			t.charColor(value > 0.72 ? '#a9b8c9' : '#53657f');
			t.cellColor('#111b29');
			t.point();
			t.pop();
		}
	}
});

energyLayer.draw(() => {
	t.background(0, 0, 0, 0);
	const time = t.frameCount * 0.04;
	for (let x = -Math.floor(energyLayer.grid.cols / 2); x < energyLayer.grid.cols / 2; x += 2) {
		const y = Math.sin(x * 0.25 + time) * 3 - 1;
		t.push();
		t.translate(x, y, 0);
		t.char(x % 6 === 0 ? '*' : '~');
		t.charColor(x % 6 === 0 ? '#ffe082' : '#54e6c1');
		t.cellColor(0, 0, 0, 0);
		t.point();
		t.pop();
	}
});

annotationLayer.draw(() => {
	t.background(0, 0, 0, 0);
	t.charColor('#e8efff');
	t.printAlign('center', 'center');
	t.print('BASE', -Math.min(Math.floor(annotationLayer.grid.cols / 2) - 5, 15), 6);
	t.charColor('#ffd166');
	t.print('ENERGY', Math.min(Math.floor(annotationLayer.grid.cols / 2) - 5, 15), 6);
});

window.inspectStackJSON = () => t.toJSON({ target: 'all' });
window.inspectEnergySVG = () => t.toSVG({ layer: energyLayer, drawMode: 'stroke' });
window.inspectAnnotationsTXT = () => t.toString({ layer: annotationLayer });

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	const x = left + 3;
	let y = top + 3;
	drawText('EXPORTPLUGIN.LAYERTARGETS', x, y++, '#64f2c2');
	drawText('------------------------------------', x, y++, '#345273');
	drawText('CONCEPT: LAYERED OUTPUT', x, y++, '#8fcae8');
	drawText('JSON can save the whole stack.', x, y++);
	drawText('SVG and TXT can target one layer.', x, y++);
	drawText('------------------------------------', x, y++, '#345273');
	drawText('TARGET: ALL LAYERS', x, y, '#ffd166');
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-exportoverlay"></a> `exportOverlay` | [`ExportOverlayController`](ExportOverlayController.md) | Controller for managing the export overlay UI visibility at runtime. |

## Methods

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

### saveJSON()

```ts
saveJSON(options?): void;
```

Downloads the selected layer or layer stack as a JSON file.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`JSONExportOptions`](../type-aliases/JSONExportOptions.md) | Export options. |

#### Returns

`void`

#### Example

```ts
t.saveJSON({ filename: 'frame', layer: t.layers.base, pretty: true });
t.saveJSON({ filename: 'stack', target: 'all' });
```


***

### saveStrings()

```ts
saveStrings(options?): void;
```

Downloads the selected layer's text content as a plain-text file.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`TXTExportOptions`](../type-aliases/TXTExportOptions.md) | Export options. |

#### Returns

`void`

#### Example

```ts
t.saveStrings({ filename: 'frame', layer: t.layers.base, preserveTrailingSpaces: true });
```


***

### saveSVG()

```ts
saveSVG(options?): void;
```

Downloads the selected layer as an SVG file.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`SVGExportOptions`](../type-aliases/SVGExportOptions.md) | Export options. |

#### Returns

`void`

#### Example

```ts
t.saveSVG({ filename: 'poster', layer: t.layers.base, includeBackgroundRectangles: true });
```


***

### saveVideo()

```ts
saveVideo(options?): Promise<void>;
```

Captures a video and saves it to disk *(`'mp4'` by default)*.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`VideoExportOptions`](../type-aliases/VideoExportOptions.md) | Export options. |

#### Returns

`Promise`\<`void`\>

#### Example

```ts
await t.saveVideo({ frameCount: 240, frameRate: 60, filename: 'capture' });
await t.saveVideo({
    format: 'webm',
    bitrate: 'high',
    bitrateMode: 'variable',
    latencyMode: 'quality',
    keyFrameInterval: 2,
    frameCount: 240,
    filename: 'capture',
});
```


***

### toGIFBlob()

```ts
toGIFBlob(options?): Promise<Blob>;
```

Generates an animated GIF blob without downloading it.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`GIFExportOptions`](../type-aliases/GIFExportOptions.md) |

#### Returns

`Promise`\<`Blob`\>

#### Example

```ts
const blob = await t.toGIFBlob({ frameCount: 90, frameRate: 30 });
```


***

### toImageBlob()

```ts
toImageBlob(options?): Promise<Blob>;
```

Generates the current canvas as an image blob without downloading it.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`ImageExportOptions`](../type-aliases/ImageExportOptions.md) |

#### Returns

`Promise`\<`Blob`\>

#### Example

```ts
const blob = await t.toImageBlob({ format: 'webp', scale: 2 });
```


***

### toJSON()

```ts
toJSON(options?): TextmodeDocumentJSON;
```

Produces the selected layer or layer stack as structured JSON data.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`JSONExportOptions`](../type-aliases/JSONExportOptions.md) | Export options. |

#### Returns

[`TextmodeDocumentJSON`](../type-aliases/TextmodeDocumentJSON.md)

The JSON document representing the selected layer or layer stack.

#### Example

```ts
const layer = t.toJSON({ layer: t.layers.base, colorMode: 'hex', includeMetadata: true });
const stack = t.toJSON({ target: 'all' });
```


***

### toJSONString()

```ts
toJSONString(options?): string;
```

Produces the selected layer or layer stack as a JSON string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`JSONExportOptions`](../type-aliases/JSONExportOptions.md) | Export options. |

#### Returns

`string`

Serialized JSON string for the selected layer or layer stack.

#### Example

```ts
const json = t.toJSONString({ layer: t.layers.base, pretty: false, colorMode: 'hex' });
const stackJson = t.toJSONString({ target: 'all' });
```


***

### toString()

```ts
toString(options?): string;
```

Produces the selected layer's text content as a string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`TXTExportOptions`](../type-aliases/TXTExportOptions.md) | Export options. |

#### Returns

`string`

The textual representation of the artwork.

#### Example

```ts
const text = t.toString({ layer: t.layers.base, preserveTrailingSpaces: false });
```


***

### toSVG()

```ts
toSVG(options?): string;
```

Generates SVG markup for the selected layer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`SVGExportOptions`](../type-aliases/SVGExportOptions.md) | Export options. |

#### Returns

`string`

The SVG content representing the artwork.

#### Example

```ts
const svg = t.toSVG({ layer: t.layers.base, drawMode: 'stroke', strokeWidth: 1.5 });
```


***

### toVideoBlob()

```ts
toVideoBlob(options?): Promise<Blob>;
```

Generates a video blob without downloading it.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`VideoExportOptions`](../type-aliases/VideoExportOptions.md) |

#### Returns

`Promise`\<`Blob`\>

#### Example

```ts
const blob = await t.toVideoBlob({ format: 'webm', frameCount: 120, frameRate: 30 });
```

