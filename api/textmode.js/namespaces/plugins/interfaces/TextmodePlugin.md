---
layout: doc
editLink: true
title: TextmodePlugin
description: A plugin interface for extending the functionality of a Textmodifier instance.
category: Interfaces
api: true
namespace: plugins
kind: Interface
lastModified: 2026-05-27
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
let installed = false;
let installTime = '';

const myPlugin = {
	name: 'install-plugin',
	install(textmodifier, context) {
		installed = true;
		installTime = new Date().toLocaleTimeString();
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

	drawText('PLUGINS.INSTALL', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: PLUGIN INITIALIZATION HOOK', x, y++, 100, 220, 255);
	drawText('Runs on textmode instance creation.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(`INSTALLED : ${installed}`, x, y++, 140, 190, 255);
	drawText(`TRIGGERED : ${installTime}`, x, y++, 140, 190, 255);
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
