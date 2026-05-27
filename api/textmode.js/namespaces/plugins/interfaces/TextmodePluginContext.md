---
layout: doc
editLink: true
title: TextmodePluginContext
description: Host-provided context passed to plugins when they are installed on a Textmodifier instance.
category: Interfaces
api: true
namespace: plugins
kind: Interface
lastModified: 2026-05-27
isInterface: true
---

[textmode.js](../../../index.md) / [plugins](../index.md) / TextmodePluginContext

# Interface: TextmodePluginContext

Host-provided context passed to plugins when they are installed on a [Textmodifier](../../../classes/Textmodifier.md) instance.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-asciiframebuffer"></a> `asciiFramebuffer` | [`TextmodeFramebuffer`](../../../classes/TextmodeFramebuffer.md) | The framebuffer containing the ASCII representation (from base layer).<br/> This framebuffer only has a single render target. |
| <a id="property-canvas"></a> `canvas` | [`TextmodeCanvasHandle`](TextmodeCanvasHandle.md) | A stable handle for the canvas used by the Textmodifier instance. |
| <a id="property-drawframebuffer"></a> `drawFramebuffer` | [`TextmodeFramebuffer`](../../../classes/TextmodeFramebuffer.md) | The framebuffer the user draws to with 3 render targets (from base layer). |
| <a id="property-font"></a> `font` | \| [`TextmodeFont`](../../fonts/classes/TextmodeFont.md) \| [`TextmodeTileset`](../../fonts/classes/TextmodeTileset.md) | The active glyph source used by the Textmodifier instance (from base layer). |
| <a id="property-glyphatlas"></a> `glyphAtlas` | `TextmodeGlyphAtlas` | Backend-neutral glyph atlas used by the Textmodifier instance (from base layer). |
| <a id="property-grid"></a> `grid` | [`TextmodeGrid`](../../../classes/TextmodeGrid.md) | The grid used by the Textmodifier instance (from base layer). |
| <a id="property-layermanager"></a> `layerManager` | [`TextmodeLayerManager`](../../layering/classes/TextmodeLayerManager.md) | The layer manager for accessing and managing all layers. |
| <a id="property-renderer"></a> `renderer` | `GLRenderer` | The WebGL renderer used by the Textmodifier instance. |

## Methods

### extendLayer()

```ts
extendLayer<TArgs, TReturn>(methodName, implementation): void;
```

Extend TextmodeLayer instances with a new method.
The method will be available on all existing and future layer instances.

#### Type Parameters

| Type Parameter |
| ------ |
| `TArgs` *extends* `unknown`[] |
| `TReturn` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `methodName` | `string` | The name of the method to add. |
| `implementation` | (`this`, ...`args`) => `TReturn` | The implementation function. `this` will be bound to the TextmodeLayer instance. |

#### Returns

`void`

#### Example

```ts
api.extendLayer('synth', function(source: SynthSource) {
  // `this` is the TextmodeLayer instance
  this.setPluginState('synth', { source, compiled: compile(source) });
});
```

***

### extendSource()

```ts
extendSource<TArgs, TReturn>(methodName, implementation): void;
```

Extend TextmodeSource instances with a new method.
The method will be available on image, video, texture, and overlay sources.

#### Type Parameters

| Type Parameter |
| ------ |
| `TArgs` *extends* `unknown`[] |
| `TReturn` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `methodName` | `string` | The name of the method to add. |
| `implementation` | (`this`, ...`args`) => `TReturn` | The implementation function. `this` will be bound to the TextmodeSource instance. |

#### Returns

`void`

#### Example

```ts
api.extendSource('edgeDetection', function() {
  // `this` is the TextmodeSource instance
  return this.conversionMode('edge');
});
```

***

### registerLayerDisposedHook()

```ts
registerLayerDisposedHook(callback): () => void;
```

Register a callback to be invoked when a layer is about to be disposed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`LayerLifecycleHook`](../type-aliases/LayerLifecycleHook.md) | The callback to invoke with the layer being disposed. |

#### Returns

A function to unregister the hook.

() => `void`

#### Example

```javascript
let disposedCount = 0;
let layerToDispose = null;

const hookPlugin = {
	name: 'layer-disposed-hook-plugin',
	install(textmodifier, context) {
		context.registerLayerDisposedHook(() => {
			disposedCount += 1;
		});
	},
};

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
	plugins: [hookPlugin],
});

const labelLayer = t.layers.add();

t.setup(() => {
	layerToDispose = t.layers.add({ fontSize: 16 });
});

t.draw(() => {
	t.background(6, 8, 20);
});

t.mouseClicked(() => {
	if (!layerToDispose) return;
	layerToDispose.dispose();
	layerToDispose = null;
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('PLUGINS.REGISTERLAYERDISPOSEDHOOK', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: LAYER DISPOSED HOOK', x, y++, 100, 220, 255);
	drawText('Runs when a layer is disposed.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`DISPOSED COUNT : ${disposedCount}`, x, y++, 140, 190, 255);
	drawText(
		layerToDispose ? 'Click to dispose layer.' : 'Layer has been disposed successfully.',
		x,
		y++,
		180,
		255,
		180
	);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### registerLayerPostRenderHook()

```ts
registerLayerPostRenderHook(callback): () => void;
```

Register a callback to be invoked after each layer's render cycle.
This happens after the user draw callback but before ASCII conversion.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`LayerRenderHook`](../type-aliases/LayerRenderHook.md) | The callback to invoke with the layer and render context. |

#### Returns

A function to unregister the hook.

() => `void`

#### Example

```javascript
let postRenderCount = 0;

const hookPlugin = {
	name: 'layer-post-render-hook-plugin',
	install(textmodifier, context) {
		context.registerLayerPostRenderHook(() => {
			postRenderCount += 1;
		});
	},
};

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
	plugins: [hookPlugin],
});

const labelLayer = t.layers.add();

t.draw(() => {
	t.background(6, 8, 20);
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('PLUGINS.REGISTERLAYERPOSTRENDERHOOK', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: LAYER POST-RENDER HOOK', x, y++, 100, 220, 255);
	drawText('Runs after drawing framebuffers.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`INVOCATIONS : ${postRenderCount}`, x, y++, 140, 190, 255);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### registerLayerPreRenderHook()

```ts
registerLayerPreRenderHook(callback): () => void;
```

Register a callback to be invoked before each layer's render cycle.
This happens after the layer's visibility check but before any drawing operations.
Useful for rendering content to the layer's framebuffer before user draw callbacks.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`LayerRenderHook`](../type-aliases/LayerRenderHook.md) | The callback to invoke with the layer and render context. |

#### Returns

A function to unregister the hook.

() => `void`

#### Example

```javascript
let preRenderCount = 0;

const hookPlugin = {
	name: 'layer-pre-render-hook-plugin',
	install(textmodifier, context) {
		context.registerLayerPreRenderHook(() => {
			preRenderCount += 1;
		});
	},
};

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
	plugins: [hookPlugin],
});

const labelLayer = t.layers.add();

t.draw(() => {
	t.background(6, 8, 20);
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('PLUGINS.REGISTERLAYERPRERENDERHOOK', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: LAYER PRE-RENDER HOOK', x, y++, 100, 220, 255);
	drawText('Runs before drawing framebuffers.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`INVOCATIONS : ${preRenderCount}`, x, y++, 140, 190, 255);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### registerPostDrawHook()

```ts
registerPostDrawHook(callback): () => void;
```

Register a callback to be invoked after each draw cycle.
Happens outside of the draw framebuffer being bound after the final result is drawn to the screen.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | [`TextmodePluginHook`](../type-aliases/TextmodePluginHook.md) |

#### Returns

A function to unregister the hook.

() => `void`

#### Example

```javascript
let postDrawCounter = 0;

const hookPlugin = {
	name: 'post-draw-hook-plugin',
	install(textmodifier, context) {
		context.registerPostDrawHook(() => {
			postDrawCounter += 1;
		});
	},
};

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
	plugins: [hookPlugin],
});

const labelLayer = t.layers.add();

t.draw(() => {
	t.background(6, 8, 20);
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('PLUGINS.REGISTERPOSTDRAWHOOK', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: POST-DRAW LIFECYCLE HOOK', x, y++, 100, 220, 255);
	drawText('Runs each frame after user draw().', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`INVOCATIONS : ${postDrawCounter}`, x, y++, 140, 190, 255);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### registerPostSetupHook()

```ts
registerPostSetupHook(callback): () => void;
```

Register a callback to be invoked after the user's setup callback completes.
This happens after user code in `setup()` has finished executing,
but before the loading screen finishes and the main render loop begins.
Useful for plugins that need to finalize initialization after user setup.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`SetupLifecycleHook`](../type-aliases/SetupLifecycleHook.md) | The callback to invoke after setup. |

#### Returns

A function to unregister the hook.

() => `void`

#### Example

```javascript
let postSetupCounter = 0;

const hookPlugin = {
	name: 'post-setup-hook-plugin',
	install(textmodifier, context) {
		context.registerPostSetupHook(() => {
			postSetupCounter += 1;
		});
	},
};

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
	plugins: [hookPlugin],
});

const labelLayer = t.layers.add();

t.draw(() => {
	t.background(6, 8, 20);
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('PLUGINS.REGISTERPOSTSETUPHOOK', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: POST-SETUP LIFECYCLE HOOK', x, y++, 100, 220, 255);
	drawText('Runs immediately after user setup.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`INVOCATIONS : ${postSetupCounter}`, x, y++, 140, 190, 255);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### registerPreDrawHook()

```ts
registerPreDrawHook(callback): () => void;
```

Register a callback to be invoked before each draw cycle.
Happens just before any framebuffer

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | [`TextmodePluginHook`](../type-aliases/TextmodePluginHook.md) |

#### Returns

A function to unregister the hook.

() => `void`

#### Example

```javascript
let preDrawCounter = 0;

const hookPlugin = {
	name: 'pre-draw-hook-plugin',
	install(textmodifier, context) {
		context.registerPreDrawHook(() => {
			preDrawCounter += 1;
		});
	},
};

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
	plugins: [hookPlugin],
});

const labelLayer = t.layers.add();

t.draw(() => {
	t.background(6, 8, 20);
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('PLUGINS.REGISTERPREDRAWHOOK', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: PRE-DRAW LIFECYCLE HOOK', x, y++, 100, 220, 255);
	drawText('Runs each frame before user draw().', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`INVOCATIONS : ${preDrawCounter}`, x, y++, 140, 190, 255);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### registerPreSetupHook()

```ts
registerPreSetupHook(callback): () => void;
```

Register a callback to be invoked before the user's setup callback runs.
This happens after the Textmodifier and all layers are fully initialized,
but before user code in `setup()` executes.
Useful for plugins that need to prepare resources or state before user setup.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`SetupLifecycleHook`](../type-aliases/SetupLifecycleHook.md) | The callback to invoke before setup. |

#### Returns

A function to unregister the hook.

() => `void`

#### Example

```javascript
let preSetupCounter = 0;

const hookPlugin = {
	name: 'pre-setup-hook-plugin',
	install(textmodifier, context) {
		context.registerPreSetupHook(() => {
			preSetupCounter += 1;
		});
	},
};

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
	plugins: [hookPlugin],
});

const labelLayer = t.layers.add();

t.draw(() => {
	t.background(6, 8, 20);
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('PLUGINS.REGISTERPRESETUPHOOK', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: PRE-SETUP LIFECYCLE HOOK', x, y++, 100, 220, 255);
	drawText('Runs after install, before setup.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`INVOCATIONS : ${preSetupCounter}`, x, y++, 140, 190, 255);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### removeLayerExtension()

```ts
removeLayerExtension(methodName): void;
```

Remove a method extension from TextmodeLayer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `methodName` | `string` | The name of the method to remove. |

#### Returns

`void`

#### Example

```javascript
let removePulse = null;
let extensionRemoved = false;

const extensionPlugin = {
	name: 'extension-plugin',
	install(_textmodifier, context) {
		context.extendLayer('pulse', function (amount = 1) {
			this.setPluginState('pulse', { amount });
		});

		removePulse = () => {
			context.removeLayerExtension('pulse');
			extensionRemoved = true;
		};
	},
};

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
	plugins: [extensionPlugin],
});

const layer = t.layers.add({ fontSize: 16 });
const labelLayer = t.layers.add();

t.setup(() => {
	layer.pulse(0.6);
});

t.draw(() => {
	t.background(5, 7, 18);
});

layer.draw(() => {
	t.clear();
	const state = layer.getPluginState('pulse');
	const amount = state?.amount ?? 0;

	t.push();
	t.char('#');
	t.rotateZ(t.frameCount * (1 + amount));
	t.charColor(255, 180, 120);
	t.rect(14, 8);
	t.pop();
});

t.mouseClicked(() => {
	if (!removePulse || extensionRemoved) {
		return;
	}
	removePulse();
});

function drawText(text, x, y, r = 220, g = 230, b = 255) {
	t.push();
	t.translate(x, y);
	t.charColor(r, g, b);
	for (let i = 0; i < text.length; i++) {
		t.char(text[i]);
		t.point();
		t.translate(1, 0);
	}
	t.pop();
}

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	drawText('PLUGINS.REMOVELAYEREXTENSION', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: REMOVE LAYER EXTENSIONS', x, y++, 100, 220, 255);
	const statusMsg = extensionRemoved ? 'pulse() was removed.' : 'pulse() is available on layer.';
	drawText(statusMsg, x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	const clickMsg = extensionRemoved ? 'pulse() removed successfully.' : 'Click to remove pulse() extension.';
	drawText(clickMsg, x, y++, 120, 205, 255);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

***

### removeSourceExtension()

```ts
removeSourceExtension(methodName): void;
```

Remove a method extension from TextmodeSource.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `methodName` | `string` | The name of the method to remove. |

#### Returns

`void`

#### Example

```ts
api.removeSourceExtension('edgeDetection');
```
