---
layout: doc
editLink: true
title: TextmodePluginContext
description: Host-provided context passed to plugins when they are installed on a Textmodifier instance.
category: Interfaces
api: true
namespace: plugins
kind: Interface
lastModified: 2026-05-19
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
let counters = {
	preSetup: 0,
	postSetup: 0,
	preDraw: 0,
	postDraw: 0,
	preRender: 0,
	postRender: 0,
	disposed: 0,
	uninstalled: 0,
};

const hookPlugin = {
	name: 'hook-plugin',
	install(_textmodifier, context) {
		context.registerPreSetupHook(() => {
			counters.preSetup += 1;
		});
		context.registerPostSetupHook(() => {
			counters.postSetup += 1;
		});
		context.registerPreDrawHook(() => {
			counters.preDraw += 1;
		});
		context.registerPostDrawHook(() => {
			counters.postDraw += 1;
		});
		context.registerLayerDisposedHook(() => {
			counters.disposed += 1;
		});
		context.registerLayerPreRenderHook(() => {
			counters.preRender += 1;
		});
		context.registerLayerPostRenderHook(() => {
			counters.postRender += 1;
		});
	},
	uninstall() {
		counters.uninstalled += 1;
	},
};

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
	plugins: [hookPlugin],
});

const layer = t.layers.add({ fontSize: 16, blendMode: 'screen' });

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	t.background(5, 7, 18);
	label('plugin lifecycle + hooks', -8, [255, 225, 140]);
	label(`setup ${counters.preSetup}/${counters.postSetup}`, -4);
	label(`draw ${counters.preDraw}/${counters.postDraw}`, 0);
	label(`render ${counters.preRender}/${counters.postRender}`, 4);
	label(`disposed ${counters.disposed}  uninstall ${counters.uninstalled}`, 8, [120, 205, 255]);
	label('click to destroy textmode', 12, [255, 180, 120]);
});

layer.draw(() => {
	t.clear();
	t.push();
	t.rotateZ(t.frameCount * 1.2);
	t.charColor(120, 205, 255);
	t.rect(18, 8);
	t.pop();
});

t.mouseClicked(() => {
	if (counters.uninstalled > 0) {
		return;
	}

	t.destroy();
	document.body.innerHTML =
		'<div style="padding: 24px; color: #e4e4e7; background: #09090b; min-height: 100vh;">plugin.uninstall() ran after destroy()</div>';
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
let counters = {
	preSetup: 0,
	postSetup: 0,
	preDraw: 0,
	postDraw: 0,
	preRender: 0,
	postRender: 0,
	disposed: 0,
	uninstalled: 0,
};

const hookPlugin = {
	name: 'hook-plugin',
	install(_textmodifier, context) {
		context.registerPreSetupHook(() => {
			counters.preSetup += 1;
		});
		context.registerPostSetupHook(() => {
			counters.postSetup += 1;
		});
		context.registerPreDrawHook(() => {
			counters.preDraw += 1;
		});
		context.registerPostDrawHook(() => {
			counters.postDraw += 1;
		});
		context.registerLayerDisposedHook(() => {
			counters.disposed += 1;
		});
		context.registerLayerPreRenderHook(() => {
			counters.preRender += 1;
		});
		context.registerLayerPostRenderHook(() => {
			counters.postRender += 1;
		});
	},
	uninstall() {
		counters.uninstalled += 1;
	},
};

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
	plugins: [hookPlugin],
});

const layer = t.layers.add({ fontSize: 16, blendMode: 'screen' });

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	t.background(5, 7, 18);
	label('plugin lifecycle + hooks', -8, [255, 225, 140]);
	label(`setup ${counters.preSetup}/${counters.postSetup}`, -4);
	label(`draw ${counters.preDraw}/${counters.postDraw}`, 0);
	label(`render ${counters.preRender}/${counters.postRender}`, 4);
	label(`disposed ${counters.disposed}  uninstall ${counters.uninstalled}`, 8, [120, 205, 255]);
	label('click to destroy textmode', 12, [255, 180, 120]);
});

layer.draw(() => {
	t.clear();
	t.push();
	t.rotateZ(t.frameCount * 1.2);
	t.charColor(120, 205, 255);
	t.rect(18, 8);
	t.pop();
});

t.mouseClicked(() => {
	if (counters.uninstalled > 0) {
		return;
	}

	t.destroy();
	document.body.innerHTML =
		'<div style="padding: 24px; color: #e4e4e7; background: #09090b; min-height: 100vh;">plugin.uninstall() ran after destroy()</div>';
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
let counters = {
	preSetup: 0,
	postSetup: 0,
	preDraw: 0,
	postDraw: 0,
	preRender: 0,
	postRender: 0,
	disposed: 0,
	uninstalled: 0,
};

const hookPlugin = {
	name: 'hook-plugin',
	install(_textmodifier, context) {
		context.registerPreSetupHook(() => {
			counters.preSetup += 1;
		});
		context.registerPostSetupHook(() => {
			counters.postSetup += 1;
		});
		context.registerPreDrawHook(() => {
			counters.preDraw += 1;
		});
		context.registerPostDrawHook(() => {
			counters.postDraw += 1;
		});
		context.registerLayerDisposedHook(() => {
			counters.disposed += 1;
		});
		context.registerLayerPreRenderHook(() => {
			counters.preRender += 1;
		});
		context.registerLayerPostRenderHook(() => {
			counters.postRender += 1;
		});
	},
	uninstall() {
		counters.uninstalled += 1;
	},
};

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
	plugins: [hookPlugin],
});

const layer = t.layers.add({ fontSize: 16, blendMode: 'screen' });

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	t.background(5, 7, 18);
	label('plugin lifecycle + hooks', -8, [255, 225, 140]);
	label(`setup ${counters.preSetup}/${counters.postSetup}`, -4);
	label(`draw ${counters.preDraw}/${counters.postDraw}`, 0);
	label(`render ${counters.preRender}/${counters.postRender}`, 4);
	label(`disposed ${counters.disposed}  uninstall ${counters.uninstalled}`, 8, [120, 205, 255]);
	label('click to destroy textmode', 12, [255, 180, 120]);
});

layer.draw(() => {
	t.clear();
	t.push();
	t.rotateZ(t.frameCount * 1.2);
	t.charColor(120, 205, 255);
	t.rect(18, 8);
	t.pop();
});

t.mouseClicked(() => {
	if (counters.uninstalled > 0) {
		return;
	}

	t.destroy();
	document.body.innerHTML =
		'<div style="padding: 24px; color: #e4e4e7; background: #09090b; min-height: 100vh;">plugin.uninstall() ran after destroy()</div>';
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
let counters = {
	preSetup: 0,
	postSetup: 0,
	preDraw: 0,
	postDraw: 0,
	preRender: 0,
	postRender: 0,
	disposed: 0,
	uninstalled: 0,
};

const hookPlugin = {
	name: 'hook-plugin',
	install(_textmodifier, context) {
		context.registerPreSetupHook(() => {
			counters.preSetup += 1;
		});
		context.registerPostSetupHook(() => {
			counters.postSetup += 1;
		});
		context.registerPreDrawHook(() => {
			counters.preDraw += 1;
		});
		context.registerPostDrawHook(() => {
			counters.postDraw += 1;
		});
		context.registerLayerDisposedHook(() => {
			counters.disposed += 1;
		});
		context.registerLayerPreRenderHook(() => {
			counters.preRender += 1;
		});
		context.registerLayerPostRenderHook(() => {
			counters.postRender += 1;
		});
	},
	uninstall() {
		counters.uninstalled += 1;
	},
};

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
	plugins: [hookPlugin],
});

const layer = t.layers.add({ fontSize: 16, blendMode: 'screen' });

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	t.background(5, 7, 18);
	label('plugin lifecycle + hooks', -8, [255, 225, 140]);
	label(`setup ${counters.preSetup}/${counters.postSetup}`, -4);
	label(`draw ${counters.preDraw}/${counters.postDraw}`, 0);
	label(`render ${counters.preRender}/${counters.postRender}`, 4);
	label(`disposed ${counters.disposed}  uninstall ${counters.uninstalled}`, 8, [120, 205, 255]);
	label('click to destroy textmode', 12, [255, 180, 120]);
});

layer.draw(() => {
	t.clear();
	t.push();
	t.rotateZ(t.frameCount * 1.2);
	t.charColor(120, 205, 255);
	t.rect(18, 8);
	t.pop();
});

t.mouseClicked(() => {
	if (counters.uninstalled > 0) {
		return;
	}

	t.destroy();
	document.body.innerHTML =
		'<div style="padding: 24px; color: #e4e4e7; background: #09090b; min-height: 100vh;">plugin.uninstall() ran after destroy()</div>';
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
let counters = {
	preSetup: 0,
	postSetup: 0,
	preDraw: 0,
	postDraw: 0,
	preRender: 0,
	postRender: 0,
	disposed: 0,
	uninstalled: 0,
};

const hookPlugin = {
	name: 'hook-plugin',
	install(_textmodifier, context) {
		context.registerPreSetupHook(() => {
			counters.preSetup += 1;
		});
		context.registerPostSetupHook(() => {
			counters.postSetup += 1;
		});
		context.registerPreDrawHook(() => {
			counters.preDraw += 1;
		});
		context.registerPostDrawHook(() => {
			counters.postDraw += 1;
		});
		context.registerLayerDisposedHook(() => {
			counters.disposed += 1;
		});
		context.registerLayerPreRenderHook(() => {
			counters.preRender += 1;
		});
		context.registerLayerPostRenderHook(() => {
			counters.postRender += 1;
		});
	},
	uninstall() {
		counters.uninstalled += 1;
	},
};

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
	plugins: [hookPlugin],
});

const layer = t.layers.add({ fontSize: 16, blendMode: 'screen' });

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	t.background(5, 7, 18);
	label('plugin lifecycle + hooks', -8, [255, 225, 140]);
	label(`setup ${counters.preSetup}/${counters.postSetup}`, -4);
	label(`draw ${counters.preDraw}/${counters.postDraw}`, 0);
	label(`render ${counters.preRender}/${counters.postRender}`, 4);
	label(`disposed ${counters.disposed}  uninstall ${counters.uninstalled}`, 8, [120, 205, 255]);
	label('click to destroy textmode', 12, [255, 180, 120]);
});

layer.draw(() => {
	t.clear();
	t.push();
	t.rotateZ(t.frameCount * 1.2);
	t.charColor(120, 205, 255);
	t.rect(18, 8);
	t.pop();
});

t.mouseClicked(() => {
	if (counters.uninstalled > 0) {
		return;
	}

	t.destroy();
	document.body.innerHTML =
		'<div style="padding: 24px; color: #e4e4e7; background: #09090b; min-height: 100vh;">plugin.uninstall() ran after destroy()</div>';
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
let counters = {
	preSetup: 0,
	postSetup: 0,
	preDraw: 0,
	postDraw: 0,
	preRender: 0,
	postRender: 0,
	disposed: 0,
	uninstalled: 0,
};

const hookPlugin = {
	name: 'hook-plugin',
	install(_textmodifier, context) {
		context.registerPreSetupHook(() => {
			counters.preSetup += 1;
		});
		context.registerPostSetupHook(() => {
			counters.postSetup += 1;
		});
		context.registerPreDrawHook(() => {
			counters.preDraw += 1;
		});
		context.registerPostDrawHook(() => {
			counters.postDraw += 1;
		});
		context.registerLayerDisposedHook(() => {
			counters.disposed += 1;
		});
		context.registerLayerPreRenderHook(() => {
			counters.preRender += 1;
		});
		context.registerLayerPostRenderHook(() => {
			counters.postRender += 1;
		});
	},
	uninstall() {
		counters.uninstalled += 1;
	},
};

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
	plugins: [hookPlugin],
});

const layer = t.layers.add({ fontSize: 16, blendMode: 'screen' });

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	t.background(5, 7, 18);
	label('plugin lifecycle + hooks', -8, [255, 225, 140]);
	label(`setup ${counters.preSetup}/${counters.postSetup}`, -4);
	label(`draw ${counters.preDraw}/${counters.postDraw}`, 0);
	label(`render ${counters.preRender}/${counters.postRender}`, 4);
	label(`disposed ${counters.disposed}  uninstall ${counters.uninstalled}`, 8, [120, 205, 255]);
	label('click to destroy textmode', 12, [255, 180, 120]);
});

layer.draw(() => {
	t.clear();
	t.push();
	t.rotateZ(t.frameCount * 1.2);
	t.charColor(120, 205, 255);
	t.rect(18, 8);
	t.pop();
});

t.mouseClicked(() => {
	if (counters.uninstalled > 0) {
		return;
	}

	t.destroy();
	document.body.innerHTML =
		'<div style="padding: 24px; color: #e4e4e7; background: #09090b; min-height: 100vh;">plugin.uninstall() ran after destroy()</div>';
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
let counters = {
	preSetup: 0,
	postSetup: 0,
	preDraw: 0,
	postDraw: 0,
	preRender: 0,
	postRender: 0,
	disposed: 0,
	uninstalled: 0,
};

const hookPlugin = {
	name: 'hook-plugin',
	install(_textmodifier, context) {
		context.registerPreSetupHook(() => {
			counters.preSetup += 1;
		});
		context.registerPostSetupHook(() => {
			counters.postSetup += 1;
		});
		context.registerPreDrawHook(() => {
			counters.preDraw += 1;
		});
		context.registerPostDrawHook(() => {
			counters.postDraw += 1;
		});
		context.registerLayerDisposedHook(() => {
			counters.disposed += 1;
		});
		context.registerLayerPreRenderHook(() => {
			counters.preRender += 1;
		});
		context.registerLayerPostRenderHook(() => {
			counters.postRender += 1;
		});
	},
	uninstall() {
		counters.uninstalled += 1;
	},
};

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
	plugins: [hookPlugin],
});

const layer = t.layers.add({ fontSize: 16, blendMode: 'screen' });

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.draw(() => {
	t.background(5, 7, 18);
	label('plugin lifecycle + hooks', -8, [255, 225, 140]);
	label(`setup ${counters.preSetup}/${counters.postSetup}`, -4);
	label(`draw ${counters.preDraw}/${counters.postDraw}`, 0);
	label(`render ${counters.preRender}/${counters.postRender}`, 4);
	label(`disposed ${counters.disposed}  uninstall ${counters.uninstalled}`, 8, [120, 205, 255]);
	label('click to destroy textmode', 12, [255, 180, 120]);
});

layer.draw(() => {
	t.clear();
	t.push();
	t.rotateZ(t.frameCount * 1.2);
	t.charColor(120, 205, 255);
	t.rect(18, 8);
	t.pop();
});

t.mouseClicked(() => {
	if (counters.uninstalled > 0) {
		return;
	}

	t.destroy();
	document.body.innerHTML =
		'<div style="padding: 24px; color: #e4e4e7; background: #09090b; min-height: 100vh;">plugin.uninstall() ran after destroy()</div>';
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

function label(text, y, color = [220, 220, 220]) {
	t.push();
	t.translate(-Math.floor(text.length / 2), y);
	t.charColor(color[0], color[1], color[2]);

	for (let i = 0; i < text.length; i++) {
		t.push();
		t.translate(i, 0);
		t.char(text[i]);
		t.point();
		t.pop();
	}

	t.pop();
}

t.setup(() => {
	layer.pulse(0.6);
});

t.draw(() => {
	t.background(5, 7, 18);
	label('removeLayerExtension()', -6, [255, 225, 140]);
	label(extensionRemoved ? 'pulse() removed from layers' : 'pulse() available on every layer', -2);
	label('click to remove extension', 2, [120, 205, 255]);
});

layer.draw(() => {
	t.clear();
	const state = layer.getPluginState('pulse');
	const amount = state?.amount ?? 0;

	t.push();
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
