# Images and videos

This section covers how to work with images and videos in `textmode.js`. Both are automatically converted to character-based representations using an adjustable brightness conversion process, allowing you to create dynamic ASCII art from visual media.

## Working with images

`textmode.js` supports loading and displaying image files as textmode graphics. Images are automatically converted to character-based representations that can be rendered on the textmode canvas.

### Loading images

Use the [`loadImage()`](/api/classes/Textmodifier#loadimage) method to load image files. This method returns a Promise that resolves to a [`TextmodeImage`](/api/namespaces/loadables/classes/TextmodeImage) instance:

```js
import { textmode } from 'textmode.js'

const t = textmode.create({ width: 800, height: 600 });

let myImage;

t.setup(async () => {
    myImage = await t.loadImage('https://upload.wikimedia.org/wikipedia/commons/0/07/El_Gouna_Turtle_House_R01.jpg');
    myImage.characters(' .:-=+*#%@');
    myImage.invert(true);
});

t.draw(() => {
    t.background(220);
    t.image(myImage);
});
```

Supported formats include PNG, JPEG, WebP, and other formats supported by the browser.

### Drawing images

Once loaded, images can be drawn to the canvas using the [`image()`](/api/classes/Textmodifier#image) method:

```js
t.draw(() => {
    // Draw image at full grid size
    t.image(myImage);
    
    // Or draw with specific dimensions
    // t.image(image, 40, 20);
});
```

### Customizing image conversion

The [`TextmodeImage`](/api/namespaces/loadables/classes/TextmodeImage) instance returned by `loadImage()` provides several methods to customize how the image is converted to textmode graphics:

```js
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

Use the [`loadVideo()`](/api/classes/Textmodifier#loadvideo) method to load video files. This returns a Promise that resolves to a [`TextmodeVideo`](/api/namespaces/loadables/classes/TextmodeVideo) instance:

```js
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

The [`TextmodeVideo`](/api/namespaces/loadables/classes/TextmodeVideo) class provides standard video playback methods:

```js
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

```js
t.draw(() => {
    // Draw video at full grid size
    t.image(myVideo);
    
    // Or draw with specific dimensions
    // t.image(myVideo, 60, 40);
});
```

### Customizing video conversion

Just like images, videos support the same conversion customization methods:

```js
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

For canvas video capturing purposes, you may want to preload the video to allow for synchronous playback without frame drops while recording. Use the `loadVideo()` options to set a target frame rate and optionally provide progress callbacks:

```js
t.setup(async () => {
    myVideo = await t.loadVideo('path/to/video.mp4', {
        frameRate: 30, // Preload at 30 fps
        onProgress: (progress) => {
            console.log(`Preloading: ${(progress * 100).toFixed(1)}%`);
        },
        onComplete: () => {
            console.log('Preloading complete!');
        },
        onError: (error) => {
            console.error('Preload error:', error);
        }
    });
});

t.draw(() => {
    t.background(0);
    t.image(myVideo.frame(t.frameCount));
});

```

## Combining images and videos with transformations

Both images and videos can be transformed using the standard textmode.js transformation methods:

```js
t.draw(() => {
    // Rotate the image
    t.push();
    t.rotateZ(t.frameCount * 2);
    t.image(image, 40, 30);
    t.pop();

    // Scale and position the video
    t.push();
    t.translate(20, 10);
    t.image(myVideo, 30, 20);
    t.pop();
});
```

## Summary

Images and videos provide powerful ways to integrate visual media into your textmode.js creations. By adjusting the conversion parameters and combining them with transformations, you can create unique ASCII art effects from any visual source.