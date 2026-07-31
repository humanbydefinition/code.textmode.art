---
layout: doc
editLink: true
title: TextmodePlugin
description: A plugin interface for extending the functionality of a Textmodifier instance.
category: Interfaces
api: true
namespace: plugins
kind: Interface
lastModified: 2026-07-31
isInterface: true
---

[textmode.js](../../../index.md) / [plugins](../index.md) / TextmodePlugin

# Interface: TextmodePlugin

A plugin interface for extending the functionality of a [Textmodifier](../../../classes/Textmodifier.md) instance.

Create plugins by implementing this interface.


## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="property-name"></a> `name` | `string` | Unique name for the plugin. |
| <a id="property-version"></a> `version?` | `string` | Version string for the plugin. |

## Methods

### install()

```ts
install(textmodifier, context): void | Promise<void>;
```

Called when the plugin is installed on a [Textmodifier](../../../classes/Textmodifier.md) instance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `textmodifier` | [`Textmodifier`](../../../classes/Textmodifier.md) | The Textmodifier instance the plugin is being installed on. |
| `context` | [`TextmodePluginContext`](TextmodePluginContext.md) | A host-provided context exposing the Textmodifier runtime and plugin hook registration methods. |

#### Returns

`void` \| `Promise`\<`void`\>

#### Example

```javascript
let isInstalled = false;
let coreEnergy = 0;

const quantumPlugin = {
	name: 'quantum-core',
	install(textmodifier) {
		isInstalled = true;
		coreEnergy = 1.0;
	},
};

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
	plugins: [quantumPlugin],
});

const labelLayer = t.layers.add();

t.draw(() => {
	t.background(6, 8, 22);
	const cols = t.grid.cols;
	const rows = t.grid.rows;
	const left = -Math.floor((cols - 1) / 2);
	const right = left + cols - 1;
	const top = -Math.floor(rows / 2);
	const bottom = top + rows - 1;
	const tm = t.frameCount * 0.05;

	for (let y = top; y <= bottom; y++) {
		for (let x = left; x <= right; x++) {
			const dist = Math.hypot(x, y);
			const angle = Math.atan2(y, x);
			const spiral = Math.sin(dist * 0.3 - angle * 3 + tm * 2);
			const norm = (spiral + 1) * 0.5;

			const charKey = dist < 3 ? '@' : dist < 8 ? '#' : norm > 0.6 ? '*' : norm > 0.3 ? '+' : '.';

			t.push();
			t.translate(x, y);
			t.charColor(
				isInstalled ? Math.floor(100 + norm * 155) : 80,
				isInstalled ? Math.floor(180 + norm * 75) : 80,
				isInstalled ? Math.floor(255 - dist * 8) : 80
			);
			t.cellColor(
				isInstalled ? Math.floor(8 + norm * 16) : 4,
				isInstalled ? Math.floor(14 + norm * 20) : 4,
				isInstalled ? Math.floor(32 + norm * 24) : 8
			);
			t.char(charKey);
			t.point();
			t.pop();
		}
	}
});

labelLayer.draw(() => {
	t.clear();
	const left = -Math.floor(t.grid.cols / 2);
	const top = -Math.floor(t.grid.rows / 2);
	let y = top + 3;
	const x = left + 3;

	t.push();
	t.printAlign('left', 'top');
	t.charColor(120, 240, 180);
	t.print('PLUGINS.TEXTMODEPLUGIN.INSTALL', x, y++);
	t.charColor(70, 100, 140);
	t.print('------------------------------------', x, y++);
	t.charColor(140, 210, 255);
	t.print('CONCEPT: NEURAL MATRIX CORE IGNITION', x, y++);
	t.charColor(140, 160, 190);
	t.print('install(t, context) initializes state', x, y++);
	t.print('during textmode instance creation.', x, y++);
	t.charColor(70, 100, 140);
	t.print('------------------------------------', x, y++);
	t.charColor(140, 255, 200);
	t.print(`PLUGIN INSTALLED: ${isInstalled}`, x, y++);
	t.print(`CORE ENERGY: ${(coreEnergy * 100).toFixed(0)}%`, x, y++);
	t.pop();
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


***

### uninstall()?

```ts
optional uninstall(textmodifier, context): void | Promise<void>;
```

Called when the plugin is uninstalled from a [Textmodifier](../../../classes/Textmodifier.md) instance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `textmodifier` | [`Textmodifier`](../../../classes/Textmodifier.md) | The Textmodifier instance the plugin is being uninstalled from. |
| `context` | [`TextmodePluginContext`](TextmodePluginContext.md) | A host-provided context exposing the Textmodifier runtime and plugin hook registration methods. |

#### Returns

`void` \| `Promise`\<`void`\>

#### Example

```javascript
let uninstalled = false;

const myPlugin = {
	name: 'uninstall-plugin',
	install(textmodifier, context) {},
	uninstall(textmodifier, context) {
		uninstalled = true;
	},
};

const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
	plugins: [myPlugin],
});

const labelLayer = t.layers.add();

t.draw(() => {
	t.background(6, 8, 20);
});

t.mouseClicked(() => {
	if (uninstalled) return;
	t.destroy();
	document.body.innerHTML =
		'<div style="padding: 24px; color: #e4e4e7; background: #09090b; min-height: 100vh;">plugin.uninstall() executed successfully.</div>';
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

	drawText('PLUGINS.UNINSTALL', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: PLUGIN CLEANUP HOOK', x, y++, 100, 220, 255);
	drawText('Executes when the sketch is destroyed.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(uninstalled ? 'Status: Cleaned Up' : 'Status: Active (Click to uninstall)', x, y++, 140, 190, 255);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

