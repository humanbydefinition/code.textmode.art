---
layout: doc
editLink: true
title: TextmodeVideo
description: Video source for textmode rendering.
category: Classes
api: true
namespace: media
kind: Class
lastModified: 2026-06-07
hasConstructor: false
---

[textmode.js](../../../index.md) / [media](../index.md) / TextmodeVideo

# Class: TextmodeVideo

Video source for textmode rendering.

Create one with [Textmodifier.loadVideo](../../../classes/Textmodifier/methods/loadVideo.md), draw it with [Textmodifier.image](../../../classes/Textmodifier/methods/image.md),
control playback with video methods, and configure conversion through inherited
chainable methods.

## Example

<TextmodeApiSandbox profile="textmode.js" language="javascript" title="TextmodeVideo" encoded-code="Y29uc3QgVklERU9fVVJMID0gJ2h0dHBzOi8vaW50ZXJhY3RpdmUtZXhhbXBsZXMubWRuLm1vemlsbGEubmV0L21lZGlhL2NjMC12aWRlb3MvZmxvd2VyLm1wNCc7CmNvbnN0IHQgPSB0ZXh0bW9kZS5jcmVhdGUoewoJcGl4ZWxEZW5zaXR5OiAxLAoJd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLAoJaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsCglmb250U2l6ZTogMTYsCn0pOwoKY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpOwpsZXQgdmlkZW8gPSBudWxsOwoKdC5zZXR1cChhc3luYyAoKSA9PiB7Cgl2aWRlbyA9IGF3YWl0IHQubG9hZFZpZGVvKFZJREVPX1VSTCk7Cgl2aWRlby5jaGFyYWN0ZXJzKCcgLjotPSsqIyVAJyk7Cgl2aWRlby52b2x1bWUoMCk7Cglhd2FpdCB2aWRlby5wbGF5KCk7Cgl2aWRlby5sb29wKCk7Cn0pOwoKdC5kcmF3KCgpID0-IHsKCXQuYmFja2dyb3VuZCg2LCAxMiwgMTApOwoJaWYgKHZpZGVvKSB7CgkJdC5pbWFnZSh2aWRlbyk7Cgl9Cn0pOwoKZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgeCwgeSwgciA9IDIyMCwgZyA9IDIzMCwgYiA9IDI1NSkgewoJdC5wdXNoKCk7Cgl0LnByaW50QWxpZ24oJ2xlZnQnLCAndG9wJyk7Cgl0LmNoYXJDb2xvcihyLCBnLCBiKTsKCXQucHJpbnQodGV4dCwgeCwgeSk7Cgl0LnBvcCgpOwp9CgpsYWJlbExheWVyLmRyYXcoKCkgPT4gewoJdC5jbGVhcigpOwoJY29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7Cgljb25zdCB0b3AgPSAtTWF0aC5mbG9vcih0LmdyaWQucm93cyAvIDIpOwoJbGV0IHkgPSB0b3AgKyAzOwoJY29uc3QgeCA9IGxlZnQgKyAzOwoKCWRyYXdUZXh0KCdURVhUTU9ERVZJREVPLkNSRUFUSU9OJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTsKCWRyYXdUZXh0KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB4LCB5KyssIDgwLCAxMDAsIDE1MCk7CglkcmF3VGV4dCgnQ09OQ0VQVDogVklERU8gTE9BRElORyAmIFBMQVlCQUNLJywgeCwgeSsrLCAxMDAsIDIyMCwgMjU1KTsKCWRyYXdUZXh0KCdEZW1vbnN0cmF0ZXMgbG9hZFZpZGVvIEFQSS4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApOwoJZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTsKCWRyYXdUZXh0KHZpZGVvID8gJ1NUQVRVUzogVklERU8gTE9BREVEIEFORCBQTEFZSU5HJyA6ICdTVEFUVVM6IExPQURJTkcgVklERU8uLi4nLCB4LCB5KyssIDI1NSwgMjEwLCA5MCk7Cn0pOwoKdC53aW5kb3dSZXNpemVkKCgpID0-IHsKCXQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpOwp9KTs" />

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
