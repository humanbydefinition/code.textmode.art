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

<TextmodeApiSandbox profile="textmode.js" encoded-files="W3siaW5mbyI6Imh0bWwgaW5kZXguaHRtbCBbaGlkZGVuXSBbcmVhZG9ubHldIiwiY29kZSI6IjwhRE9DVFlQRSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI-XG4gIDxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8-XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8dGl0bGU-VGV4dG1vZGVWaWRlbzwvdGl0bGU-XG4gICAgPHN0eWxlPlxuICAgICAgaHRtbCxcbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICB9XG5cbiAgICAgIGNhbnZhcyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIDwvc3R5bGU-XG4gICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS90ZXh0bW9kZS5qc0AwLjE2LjAtYmV0YS4xL2Rpc3QvdGV4dG1vZGUudW1kLmpzXCI-PC9zY3JpcHQ-XG4gIDwvaGVhZD5cbiAgPGJvZHk-XG4gICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCIgc3JjPVwic2tldGNoLmpzXCI-PC9zY3JpcHQ-XG4gIDwvYm9keT5cbjwvaHRtbD4ifSx7ImluZm8iOiJqcyBza2V0Y2guanMgW2FjdGl2ZV0iLCJjb2RlIjoiY29uc3QgVklERU9fVVJMID0gJ2h0dHBzOi8vaW50ZXJhY3RpdmUtZXhhbXBsZXMubWRuLm1vemlsbGEubmV0L21lZGlhL2NjMC12aWRlb3MvZmxvd2VyLm1wNCc7XG5jb25zdCB0ID0gdGV4dG1vZGUuY3JlYXRlKHtcblx0cGl4ZWxEZW5zaXR5OiAxLFxuXHR3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG5cdGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuXHRmb250U2l6ZTogMTYsXG59KTtcblxuY29uc3QgbGFiZWxMYXllciA9IHQubGF5ZXJzLmFkZCgpO1xubGV0IHZpZGVvID0gbnVsbDtcblxudC5zZXR1cChhc3luYyAoKSA9PiB7XG5cdHZpZGVvID0gYXdhaXQgdC5sb2FkVmlkZW8oVklERU9fVVJMKTtcblx0dmlkZW8uY2hhcmFjdGVycygnIC46LT0rKiMlQCcpO1xuXHR2aWRlby52b2x1bWUoMCk7XG5cdGF3YWl0IHZpZGVvLnBsYXkoKTtcblx0dmlkZW8ubG9vcCgpO1xufSk7XG5cbnQuZHJhdygoKSA9PiB7XG5cdHQuYmFja2dyb3VuZCg2LCAxMiwgMTApO1xuXHRpZiAodmlkZW8pIHtcblx0XHR0LmltYWdlKHZpZGVvKTtcblx0fVxufSk7XG5cbmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIHgsIHksIHIgPSAyMjAsIGcgPSAyMzAsIGIgPSAyNTUpIHtcblx0dC5wdXNoKCk7XG5cdHQucHJpbnRBbGlnbignbGVmdCcsICd0b3AnKTtcblx0dC5jaGFyQ29sb3IociwgZywgYik7XG5cdHQucHJpbnQodGV4dCwgeCwgeSk7XG5cdHQucG9wKCk7XG59XG5cbmxhYmVsTGF5ZXIuZHJhdygoKSA9PiB7XG5cdHQuY2xlYXIoKTtcblx0Y29uc3QgbGVmdCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5jb2xzIC8gMik7XG5cdGNvbnN0IHRvcCA9IC1NYXRoLmZsb29yKHQuZ3JpZC5yb3dzIC8gMik7XG5cdGxldCB5ID0gdG9wICsgMztcblx0Y29uc3QgeCA9IGxlZnQgKyAzO1xuXG5cdGRyYXdUZXh0KCdURVhUTU9ERVZJREVPLkNSRUFUSU9OJywgeCwgeSsrLCAxMDAsIDI1NSwgMTQwKTtcblx0ZHJhd1RleHQoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHgsIHkrKywgODAsIDEwMCwgMTUwKTtcblx0ZHJhd1RleHQoJ0NPTkNFUFQ6IFZJREVPIExPQURJTkcgJiBQTEFZQkFDSycsIHgsIHkrKywgMTAwLCAyMjAsIDI1NSk7XG5cdGRyYXdUZXh0KCdEZW1vbnN0cmF0ZXMgbG9hZFZpZGVvIEFQSS4nLCB4LCB5KyssIDE0MCwgMTYwLCAxOTApO1xuXHRkcmF3VGV4dCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgeCwgeSsrLCA4MCwgMTAwLCAxNTApO1xuXHRkcmF3VGV4dCh2aWRlbyA_ICdTVEFUVVM6IFZJREVPIExPQURFRCBBTkQgUExBWUlORycgOiAnU1RBVFVTOiBMT0FESU5HIFZJREVPLi4uJywgeCwgeSsrLCAyNTUsIDIxMCwgOTApO1xufSk7XG5cbnQud2luZG93UmVzaXplZCgoKSA9PiB7XG5cdHQucmVzaXplQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xufSk7In1d" />

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
