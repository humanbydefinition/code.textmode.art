# Advanced features

This section covers advanced features of `textmode.js` that enable more sophisticated graphics and rendering techniques, including working with images, offscreen rendering, and using `textmode.js` as an overlay in other canvas-based frameworks.

## Working with images

`textmode.js` supports loading and displaying image files as textmode graphics. Images are automatically converted to character-based representations using an adjustable brightness conversion process.

### Loading images

Use the [`loadImage()`](/api/classes/Textmodifier#loadimage) method to load image files:

```javascript
const myImage;

t.setup(async () => {
    myImage = await t.loadImage('path/to/image.png');
    // Image is now ready to use
});
```

Supported formats include PNG, JPEG, WebP, and other formats supported by the browser.

### Drawing images

Once loaded, images can be drawn to the canvas using the [`image()`](/api/classes/Textmodifier#image) method:

```javascript
t.draw(() => {
    // Draw image at the top-left corner, scaled to 40x20 cells
    t.image(myImage, 0, 0, 40, 20);
});
```

### Image conversion process

Images are currently converted to textmode using brightness mapping. Each pixel's brightness is calculated and mapped to a character from a specified character set. You can customize the conversion process through the following methods, directly applied to the [`TextmodeImage`](/api/classes/TextmodeImage) instance that is returned by `loadImage()`:

```javascript
// Control image conversion parameters
myImage.characters(" .:-=+*#%@"); // Set character set for brightness mapping
myImage.charColorMode("sampled"); // Character color mode: "sampled" or "fixed"
myImage.cellColorMode("fixed"); // Cell color mode: "sampled" or "fixed"
myImage.charColor(255, 255, 255); // Set 'fixed' character color
myImage.cellColor(0, 0, 0);       // Set 'fixed' cell color
myImage.flipX(true);    // Flip all rendered characters horizontally
myImage.flipY(true);    // Flip all rendered characters vertically
myImage.invert(true); // Swap character and cell colors
myImage.charRotation(90); // Rotate characters in degrees
```

## Framebuffers and offscreen rendering

Framebuffers allow you to render graphics offscreen and then use them as textures or images. This enables complex multi-pass rendering effects and better performance optimization.

### Creating framebuffers

Create a framebuffer with specified dimensions:

```javascript
t.setup(() => {
    const offscreenBuffer = t.createFramebuffer({ width: 80, height: 25 });
});
```

### Rendering to framebuffers

Use [`begin()`](/api/classes/TextmodeFramebuffer#begin) and [`end()`](/api/classes/TextmodeFramebuffer#end) to redirect rendering:

```javascript
t.draw(() => {
    // Render to offscreen buffer
    offscreenBuffer.begin();
    
    // All drawing operations now render to the framebuffer
    t.background(0, 0, 0);
    t.char('*');
    t.charColor(255, 255, 0);
    t.ellipse(40, 12, 20, 10);
    
    // Return to main canvas
    offscreenBuffer.end();
    
    // Draw the framebuffer contents as an image
    t.image(offscreenBuffer, 0, 0);
});
```

## Advanced shader techniques

// documentation todo, but you can do complex stuff like multi-stage shaders and feedback loops utilizing framebuffers. <(°_°)>

## Summary

These advanced features unlock the full potential of `textmode.js` for creating sophisticated graphics and optimized applications. By combining images, framebuffers, and advanced shaders, you can create complex visual effects while maintaining excellent performance.

:::info Next steps
-> For basic drawing concepts, refer to the [Fundamentals](/docs/fundamentals) section.

-> For working with custom fonts, refer to the [Fonts](/docs/fonts) section.

-> For exporting your creations, refer to the [Exporting](/docs/exporting) section.
:::