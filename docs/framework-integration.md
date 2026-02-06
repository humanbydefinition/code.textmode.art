---
title: Framework Integration
description: Integrate textmode.js with existing frameworks like p5.js, Three.js, and Hydra. Learn how to use overlay mode to convert any canvas or video to ASCII art.
---

# Framework integration

`textmode.js` is designed to be framework-agnostic and can seamlessly integrate with existing web-based graphics frameworks and media elements. The overlay mode allows you to transform any canvas or video content into textmode graphics in real-time while preserving all textmode.js functionality for additional drawing operations.

## Overlay mode

Overlay mode enables `textmode.js` to act as a filter layer on top of existing visual content. When activated, it automatically captures the content from a target element and converts it to textmode graphics using a configurable brightness conversion process, similar to how images are processed.

### How overlay mode works

1. **Target element**: Specify a canvas or video element as the source
2. **Automatic capture**: `textmode.js` applies a canvas on top of the target element that is automatically resized and repositioned to match the source, capturing its visual content
3. **Real-time conversion**: Content is converted to textmode using brightness analysis
4. **Additional drawing**: All standard textmode.js drawing functions remain available

### Basic overlay setup

```js
// Target an existing canvas element
const existingCanvas = document.getElementById('myCanvas');

// Create textmode.js overlay
const t = textmode.create({
    canvas: existingCanvas,
    overlay: true,
    fontSize: 16
});

t.draw(() => {
    t.clear();
    t.image(t.overlay, t.grid.cols, t.grid.rows);

    t.char('+');
    t.charColor(255, 255, 0);
    t.point(); // Add a marker on top of the converted content
});
```

The above code initializes `textmode.js` in overlay mode on an existing canvas element. The `t.overlay` property provides access to the automatically converted content as a [`TextmodeImage`](/api/textmode.js/namespaces/loadables/classes/TextmodeImage), which can be drawn using standard textmode.js functions.

## Conversion customization

When using overlay mode, the source content is automatically converted to a [`TextmodeImage`](/api/textmode.js/namespaces/loadables/classes/TextmodeImage) that can be accessed and customized via the [`overlay`](/api/textmode.js/classes/Textmodifier#overlay) property.
### Basic customization

```js
const t = textmode.create({
    canvas: sourceElement,
    overlay: true,
    fontSize: 8
});

t.setup(() => {
    // Customize the overlay conversion parameters
    t.overlay.characters(" .:-=+*#%@"); // Set character set for brightness mapping
    t.overlay.charColorMode("sampled"); // Character color mode: "sampled" or "fixed"
    t.overlay.cellColorMode("fixed");   // Cell color mode: "sampled" or "fixed"
    t.overlay.charColor(255, 255, 255); // Set 'fixed' character color
    t.overlay.cellColor(0, 0, 0);       // Set 'fixed' cell color
    t.overlay.flipX(false);             // Flip all rendered characters horizontally
    t.overlay.flipY(false);             // Flip all rendered characters vertically
    t.overlay.invert(false);            // Swap character and cell colors
    t.overlay.charRotation(0);          // Rotate characters in degrees
});
```

## Examples

<!--@include: ./examples/integration/p5js.md-->
<!--@include: ./examples/integration/hydra-synth.md-->
<!--@include: ./examples/integration/threejs.md-->
<!--@include: ./examples/integration/webcam.md-->
<!--@include: ./examples/integration/video.md-->

## Summary

Framework integration with overlay mode opens up endless possibilities for applying textmode aesthetics to existing content. Whether you're converting p5.js sketches, Three.js scenes, or video content, `textmode.js` seamlessly integrates while preserving all its drawing capabilities for additional content.
