---
layout: doc
editLink: true
title: registerPostSetupHook
description: Register a callback to be invoked after the user's setup callback completes. This happens after user code in setup() has finished executing, but before the l...
category: Methods
api: true
owner: TextmodePluginContext
namespace: plugins
kind: Method
lastModified: 2026-07-31
---

[textmode.js](../../../../../index.md) / [plugins](../../../index.md) / [TextmodePluginContext](../../TextmodePluginContext.md) / registerPostSetupHook

# Method: registerPostSetupHook()

```ts
registerPostSetupHook(callback): () => void;
```

Register a callback to be invoked after the user's setup callback completes.
This happens after user code in `setup()` has finished executing,
but before the loading screen finishes and the main render loop begins.
Useful for plugins that need to finalize initialization after user setup.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`SetupLifecycleHook`](../../../type-aliases/SetupLifecycleHook.md) | The callback to invoke after setup. |

## Returns

A function to unregister the hook.

() => `void`

## Example

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
	t.printAlign('left', 'top');
	t.charColor(r, g, b);
	t.print(text, x, y);
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

