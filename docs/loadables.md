# Images and videos

This section covers how to work with images and videos in `textmode.js`. Both are automatically converted to character-based representations using an adjustable brightness conversion process, allowing you to create dynamic ASCII art from visual media.

## Working with images

`textmode.js` supports loading and displaying image files as textmode graphics. Images are automatically converted to character-based representations that can be rendered on the textmode canvas.

### Loading images

Use the [`loadImage()`](/api/classes/Textmodifier#loadimage) method to load image files. This method returns a Promise that resolves to a [`TextmodeImage`](/api/textmode.js/namespaces/loadables/classes/TextmodeImage) instance:

```javascript
const t = textmode.create({ width: 800, height: 600 });

let myImage;

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
    if (myImage) {
        // Draw image at full grid size
        t.image(myImage);
        
        // Or draw with specific dimensions
        // t.image(myImage, 40, 20);
    }
});
```

### Customizing image conversion

The [`TextmodeImage`](/api/textmode.js/namespaces/loadables/classes/TextmodeImage) instance returned by `loadImage()` provides several methods to customize how the image is converted to textmode graphics:

```javascript
t.setup(async () => {
    myImage = await t.loadImage('path/to/image.png');
    
    // Set character set for brightness mapping
    // Characters are ordered from darkest to brightest
    myImage.characters(" .:-=+*#%@");
    
    // Control character color mode
    myImage.charColorMode("sampled"); // "sampled" or "fixed"
    
    // Control cell background color mode
    myImage.cellColorMode("fixed"); // "sampled" or "fixed"
    
    // Set fixed character color (when charColorMode is "fixed")
    myImage.charColor(255, 255, 255);
    
    // Set fixed cell background color (when cellColorMode is "fixed")
    myImage.cellColor(0, 0, 0);
    
    // Flip characters horizontally
    myImage.flipX(true);
    
    // Flip characters vertically
    myImage.flipY(true);
    
    // Swap character and cell colors
    myImage.invert(true);
    
    // Rotate characters (in degrees)
    myImage.charRotation(90);
});
```

### Image conversion modes

The conversion process maps each pixel's brightness to a character from your chosen character set. You have fine control over the color sampling:

- **`charColorMode("sampled")`**: Character colors are sampled from the original image pixels
- **`charColorMode("fixed")`**: All characters use the color set by `charColor()`
- **`cellColorMode("sampled")`**: Cell backgrounds are sampled from the original image
- **`cellColorMode("fixed")`**: All cell backgrounds use the color set by `cellColor()`

## Working with videos

Videos work similarly to images but with additional playback controls. Video frames are converted to textmode graphics in real-time, creating animated ASCII art.

### Loading videos

Use the [`loadVideo()`](/api/classes/Textmodifier#loadvideo) method to load video files. This returns a Promise that resolves to a [`TextmodeVideo`](/api/textmode.js/namespaces/loadables/classes/TextmodeVideo) instance:

```javascript
const t = textmode.create({ width: 800, height: 600 });

let myVideo;

t.setup(async () => {
    myVideo = await t.loadVideo('path/to/video.mp4');
    
    // Start playback
    myVideo.play();
    
    // Enable looping
    myVideo.loop();
});
```

### Video playback control

The [`TextmodeVideo`](/api/textmode.js/namespaces/loadables/classes/TextmodeVideo) class provides standard video playback methods:

```javascript
// Play the video
myVideo.play();

// Pause the video
myVideo.pause();

// Enable/disable looping
myVideo.loop(); // Enable looping
myVideo.noLoop(); // Disable looping

// Set playback speed (1.0 = normal speed)
myVideo.speed(0.5); // Half speed
myVideo.speed(2.0); // Double speed

// Jump to a specific time (in seconds)
myVideo.time(5.0);

// Get current playback time
const currentTime = myVideo.time();

// Get video duration
const duration = myVideo.duration();
```

### Drawing videos

Videos are drawn the same way as images using the [`image()`](/api/classes/Textmodifier#image) method:

```javascript
t.draw(() => {
    if (myVideo) {
        // Draw video at full grid size
        t.image(myVideo);
        
        // Or draw with specific dimensions
        // t.image(myVideo, 60, 40);
    }
});
```

### Customizing video conversion

Just like images, videos support the same conversion customization methods:

```javascript
t.setup(async () => {
    myVideo = await t.loadVideo('path/to/video.mp4');
    
    // Customize character set
    myVideo.characters(" .:-=+*#%@");
    
    // Set color modes
    myVideo.charColorMode("sampled");
    myVideo.cellColorMode("fixed");
    myVideo.cellColor(0, 0, 0);
    
    // Apply transformations
    myVideo.flipX(false);
    myVideo.flipY(false);
    myVideo.invert(false);
    myVideo.charRotation(0);
    
    // Start playback
    myVideo.play();
    myVideo.loop();
});
```

### Preloading video frames

For smoother playback and better performance, you can preload video frames:

```javascript
t.setup(async () => {
    myVideo = await t.loadVideo('path/to/video.mp4', {
        frameRate: 30, // Preload at 30 fps
        onProgress: (progress) => {
            console.log(`Preloading: ${(progress * 100).toFixed(1)}%`);
        },
        onComplete: () => {
            console.log('Preloading complete!');
            myVideo.play();
            myVideo.loop();
        },
        onError: (error) => {
            console.error('Preload error:', error);
        }
    });
});
```

## Combining images and videos with transformations

Both images and videos can be transformed using the standard textmode.js transformation methods:

```javascript
t.draw(() => {
    if (myImage) {
        // Rotate the image
        t.push();
        t.rotateZ(t.frameCount * 2);
        t.image(myImage, 40, 30);
        t.pop();
    }
    
    if (myVideo) {
        // Scale and position the video
        t.push();
        t.translate(20, 10);
        t.image(myVideo, 30, 20);
        t.pop();
    }
});
```

## Performance considerations

- **Image loading**: Images are loaded asynchronously. Always use them within the `setup()` callback or check if they're loaded before drawing.
- **Video performance**: Real-time video conversion is computationally intensive. Consider using smaller grid dimensions or lower frame rates for better performance.
- **Character sets**: Shorter character sets (fewer characters) generally process faster than longer ones.
- **Preloading**: For videos that need to play smoothly, use the preloading options to cache frames in advance.

## Summary

Images and videos provide powerful ways to integrate visual media into your textmode.js creations. By adjusting the conversion parameters and combining them with transformations, you can create unique ASCII art effects from any visual source.

:::info Next steps
-> For advanced rendering techniques including framebuffers and shaders, refer to the [Advanced features](/docs/advanced) section.

-> For working with custom fonts, refer to the [Fonts](/docs/fonts) section.

-> For exporting your creations, refer to the [Exporting](/docs/exporting) section.
:::
