---
layout: doc
editLink: true
title: TextmodePlugin
description: A plugin interface for extending the functionality of a Textmodifier instance.
category: Interfaces
api: true
namespace: plugins
kind: Interface
lastModified: 2026-04-23
isInterface: true
---

[textmode.js](../../../index.md) / [plugins](../index.md) / TextmodePlugin

# Interface: TextmodePlugin

A plugin interface for extending the functionality of a [Textmodifier](../../../classes/Textmodifier.md) instance.

Create plugins by implementing this interface.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | Unique name for the plugin. |
| <a id="version"></a> `version?` | `string` | Version string for the plugin. |

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
	document.body.innerHTML = '<div style="padding: 24px; color: #e4e4e7; background: #09090b; min-height: 100vh;">plugin.uninstall() ran after destroy()</div>';
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
  </div>
</div>

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
	document.body.innerHTML = '<div style="padding: 24px; color: #e4e4e7; background: #09090b; min-height: 100vh;">plugin.uninstall() ran after destroy()</div>';
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```
<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:nowrap;min-width:0;">
  <img src="https://github.com/codex.png" alt="codex avatar" width="72" height="72" style="border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,0.35);" />
  <div style="display:flex;flex-direction:column;gap:0.2rem;min-width:0;">
    <span style="display:inline-flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;"><strong><a href="https://github.com/codex" target="_blank" rel="noopener noreferrer">@codex</a></strong><span style="font-size:0.85em;font-weight:400;line-height:1.4;color:rgba(160,160,170,0.95);"><em>{ai-generated}</em></span></span>
    <span style="font-size:0.95em;line-height:1.4;color:rgba(160,160,170,0.95);">Replace it with your own sketch, claim the credit, and climb the <a href="/docs/leaderboard">leaderboard</a>.</span>
  </div>
</div>
