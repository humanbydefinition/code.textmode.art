---
layout: doc
editLink: true
title: TextmodeVideo
description: Video source for textmode rendering.
category: Classes
api: true
namespace: media
kind: Class
lastModified: 2026-07-31
hasConstructor: false
---

[textmode.js](../../../index.md) / [media](../index.md) / TextmodeVideo

# Class: TextmodeVideo

Video source for textmode rendering.

Create one with [Textmodifier.loadVideo](../../../classes/Textmodifier/methods/loadVideo.md), draw it with [Textmodifier.image](../../../classes/Textmodifier/methods/image.md),
control playback with video methods, and configure conversion through inherited
chainable methods.

## Example

```javascript
const VIDEO_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const t = textmode.create({
	width: window.innerWidth,
	height: window.innerHeight,
	fontSize: 16,
});

const labelLayer = t.layers.add();
let video = null;

t.setup(async () => {
	video = await t.loadVideo(VIDEO_URL);
	video.characters(' .:-=+*#%@');
	video.volume(0);
	await video.play();
	video.loop();
});

t.draw(() => {
	t.background(6, 12, 10);
	if (video) {
		t.image(video);
	}
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

	drawText('TEXTMODEVIDEO.CREATION', x, y++, 100, 255, 140);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText('CONCEPT: VIDEO LOADING & PLAYBACK', x, y++, 100, 220, 255);
	drawText('Demonstrates loadVideo API.', x, y++, 140, 160, 190);
	drawText('------------------------------------', x, y++, 80, 100, 150);
	drawText(video ? 'STATUS: VIDEO LOADED AND PLAYING' : 'STATUS: LOADING VIDEO...', x, y++, 255, 210, 90);
});

t.windowResized(() => {
	t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```


## Extends

- [`TextmodeTexture`](TextmodeTexture.md)

## Accessors

| Accessor | Description |
| ------ | ------ |
| [currentTime](TextmodeVideo/accessors/currentTime.md) | Current playback time in seconds. |
| [duration](TextmodeVideo/accessors/duration.md) | Total video duration in seconds. |
| [height](TextmodeVideo/accessors/height.md) | Ideal draw height in grid cells. |
| [isPlaying](TextmodeVideo/accessors/isPlaying.md) | Whether the video is currently playing. |
| [originalHeight](TextmodeVideo/accessors/originalHeight.md) | Original source height in pixels. |
| [originalWidth](TextmodeVideo/accessors/originalWidth.md) | Original source width in pixels. |
| [source](TextmodeVideo/accessors/source.md) | Source element this texture captures. |
| [texture](TextmodeVideo/accessors/texture.md) | WebGL texture backing this source. |
| [videoElement](TextmodeVideo/accessors/videoElement.md) | Underlying HTML video element. |
| [width](TextmodeVideo/accessors/width.md) | Ideal draw width in grid cells. |

## Methods

| Method | Description |
| ------ | ------ |
| [background](TextmodeVideo/methods/background.md) | Set the background color used for transparent pixels. |
| [brightnessRange](TextmodeVideo/methods/brightnessRange.md) | Capture only source pixels whose brightness is inside the inclusive byte range. |
| [cellColor](TextmodeVideo/methods/cellColor.md) | Set the cell color used when [cellColorMode](TextmodeSource/methods/cellColorMode.md) is `'fixed'`. |
| [cellColorMode](TextmodeVideo/methods/cellColorMode.md) | Set whether cell color is sampled from the source or fixed. |
| [characters](TextmodeVideo/methods/characters.md) | Set the characters used for brightness mapping. |
| [charColor](TextmodeVideo/methods/charColor.md) | Set the character color used when [charColorMode](TextmodeSource/methods/charColorMode.md) is `'fixed'`. |
| [charColorMode](TextmodeVideo/methods/charColorMode.md) | Set whether character color is sampled from the source or fixed. |
| [charRotation](TextmodeVideo/methods/charRotation.md) | Rotate generated characters. |
| [clearConversions](TextmodeVideo/methods/clearConversions.md) | Clear this source's conversion stack and return to single-mode conversion. |
| [conversionMode](TextmodeVideo/methods/conversionMode.md) | Select the conversion mode for this source. |
| [conversions](TextmodeVideo/methods/conversions.md) | Set an ordered conversion stack for this source. |
| [dispose](TextmodeVideo/methods/dispose.md) | Dispose the video source and release the backing media element. |
| [flipX](TextmodeVideo/methods/flipX.md) | Flip the source horizontally. |
| [flipY](TextmodeVideo/methods/flipY.md) | Flip the source vertically. |
| [invert](TextmodeVideo/methods/invert.md) | Enable or disable source color inversion. |
| [loop](TextmodeVideo/methods/loop.md) | Set whether the video loops. |
| [pause](TextmodeVideo/methods/pause.md) | Pause video playback. |
| [play](TextmodeVideo/methods/play.md) | Start video playback. |
| [speed](TextmodeVideo/methods/speed.md) | Set playback speed. |
| [stop](TextmodeVideo/methods/stop.md) | Stop the video and seek to the beginning. |
| [time](TextmodeVideo/methods/time.md) | Seek to a playback time. |
| [volume](TextmodeVideo/methods/volume.md) | Set playback volume. |
