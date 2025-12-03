# Exporting

Once you've created your ASCII art with `textmode.js`, you'll likely want to save or share it. Since `textmode.js` [v0.4.0](https://github.com/humanbydefinition/textmode.js/releases/tag/0.4.0), the library no longer includes built-in export functions directly, but instead offers them through an official add-on library [`textmode.export.js`](https://github.com/humanbydefinition/textmode.export.js).

Make sure to install `textmode.export.js` alongside `textmode.js` in your project to access the export features. An installation guide can be found in the [textmode.export.js README](https://github.com/humanbydefinition/textmode.export.js#installation).

Besides exporting programmatically, `textmode.export.js` also offers a handy overlay UI for quick exports directly from the canvas. This is especially useful for testing and sharing your creations without writing any additional code.

Prefer to keep everything in code? Pass `overlay: false` to `createExportPlugin` when you install the plugin to skip the overlay UI.

## Overview

`textmode.export.js` currently supports exporting your ASCII art in five main formats:

- **📄 TXT** - Plain text format for sharing and displaying in terminals
- **🎨 SVG** - Scalable vector graphics for web, print and plotting
- **🖼️ Images** - PNG, JPG, and WebP for general sharing
- **🎞️ Animated GIFs** - Simple animations in GIF format
- **📹 Video** - High-quality video export in WebM format

## Text export

Text export generates pure ASCII/text content that can be displayed in any text editor, terminal, or shared as plain text.

### Basic usage

```js
// Get ASCII content as a string
const textContent = textmodifier.toString();
console.log(textContent);

// Save directly to a TXT file
textmodifier.saveStrings({
    filename: 'my_ascii_art'
});
```

### Advanced options

```js
// Generate with custom options
const textContent = textmodifier.toString({
    preserveTrailingSpaces: true,
    emptyCharacter: '·'
});

// Save with options
textmodifier.saveStrings({
    filename: 'detailed_ascii_art',
    preserveTrailingSpaces: false,
    emptyCharacter: ' '
});
```

### Text export options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `filename` | `string` | auto-generated | Filename for the exported file *(without extension)* |
| `preserveTrailingSpaces` | `boolean` | `false` | Keep trailing spaces on each line |
| `emptyCharacter` | `string` | `' '` | Character to use for empty cells |

::: tip Some use cases
- Sharing ASCII art on social media or forums
- Displaying in terminals or console applications
- Creating retro-style documentation
- Generating content for text-based games
:::

## SVG export

SVG export creates scalable vector graphics that maintain crisp quality at any size, and can be customized further easily using tools like Adobe Illustrator or Inkscape.

### Basic usage

```js
// Generate SVG content as a string
const svgContent = textmodifier.toSVG();

// Use the SVG content (e.g., display in DOM)
document.getElementById('svg-container').innerHTML = svgContent;

// Save directly to an SVG file
textmodifier.saveSVG({
    filename: 'my_ascii_art'
});
```

### Advanced configuration

```js
// Generate with custom styling
const svgContent = textmodifier.toSVG({
    includeBackgroundRectangles: true,
    drawMode: 'stroke',
    strokeWidth: 2.0,
});

// Save with settings
textmodifier.saveSVG({
    filename: 'professional_ascii',
    includeBackgroundRectangles: false, // No cell background rectangles
    drawMode: 'fill',
});
```

### SVG export options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `filename` | `string` | auto-generated | Filename for the exported file (without extension) |
| `includeBackgroundRectangles` | `boolean` | `true` | Include cell background rectangles |
| `drawMode` | `'fill' \| 'stroke'` | `'fill'` | Character rendering mode |
| `strokeWidth` | `number` | `1.0` | Stroke width when using `'stroke'` mode |

::: tip Some use cases
- Web integration where scalability is important
- Print media requiring crisp text
- Creating icons or logos from ASCII art
:::

## Image export

Image export creates raster images in popular formats, perfect for sharing on social media, embedding in documents, or general use.

### Basic usage

```js
// Save as PNG (default)
textmodifier.saveCanvas();

// Save in different formats
textmodifier.saveCanvas({
    filename: 'high_quality',
    format: 'webp'
});
textmodifier.saveCanvas({
    filename: 'compatible',
    format: 'jpg'
});
```

### High-quality export

```js
// Export high-resolution image
textmodifier.saveCanvas({
    filename: 'hires_ascii',
    format: 'png',
    scale: 3.0, // 3x larger
});

textmodifier.saveCanvas({
    filename: 'web_optimized',
    format: 'webp',
    scale: 1.5,
});

textmodifier.saveCanvas({
    filename: 'print_ready',
    format: 'png',
    scale: 5.0,
});
```

### Image export options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `filename` | `string` | auto-generated | Filename for the exported file (without extension) |
| `format` | `'png' \| 'jpg' \| 'webp'` | `'png'` | Image format |
| `scale` | `number` | `1.0` | Scale factor for output size |

### Format comparison

| Format | Transparency | File Size | Quality | Best For |
|--------|-------------|-----------|---------|----------|
| **PNG** | ✅ Yes | Large | Lossless | High quality, transparency needed |
| **JPG** | ❌ No | Small | Lossy | Web sharing, smaller files |
| **WebP** | ✅ Yes | Smallest | Lossy/Lossless | Modern web, best compression |

::: tip Some use cases
- Social media sharing
- Embedding in documents or presentations
- When vector formats aren't supported
- Creating thumbnails or previews
:::

## GIF export

GIF export captures a sequence of frames from your sketch and encodes them into an animated GIF.

### Basic usage

```js
// Record a short looping GIF
textmodifier.saveGIF({
    filename: 'animated_ascii',
    frameCount: 180,
    frameRate: 30,
});
```

### Progress and customization

```js
textmodifier.saveGIF({
    filename: 'hires_loop',
    scale: 2.0,          // Upscale output
    repeat: 0,           // Loop forever
    onProgress(progress) {
        console.log(`GIF status: ${progress.state}`, progress);
    },
});
```

### GIF export options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `filename` | `string` | auto-generated | Filename for the exported file *(without extension)* |
| `frameCount` | `number` | `300` | Total number of frames to capture |
| `frameRate` | `number` | `60` | Frames captured per second |
| `scale` | `number` | `1.0` | Scale factor for the rendered frames |
| `repeat` | `number` | `0` | Loop count (`0` = loop forever) |
| `onProgress` | (`progress: GIFExportProgress`) => `void` | - | Progress callback fired during recording |

::: tip Some use cases
- Sharing animated ASCII art on social media
- Creating looping backgrounds or stickers
- Previewing timeline-based animations without video tooling
:::

## Video export

Video export records a WebM video with higher fidelity and optional alpha support - ideal when you need smooth playback or post-production editing.

### Basic usage

```js
// Capture a quick demo video
textmodifier.saveWEBM({
    filename: 'demo_capture',
    frameCount: 240,
    frameRate: 60,
});
```

### Advanced configuration

```js
textmodifier.saveWEBM({
    filename: 'presentation',
    quality: 0.85,           // Balance quality vs. size
    transparent: true,       // Try to keep alpha (experimental)
    onProgress(progress) {
        if (progress.state === 'encoding') {
            console.log('Encoding video…');
        }
    },
});
```

### Video export options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `filename` | `string` | auto-generated | Filename for the exported file *(without extension)* |
| `frameCount` | `number` | `300` | Total number of frames to capture |
| `frameRate` | `number` | `60` | Frames captured per second |
| `quality` | `number` | `1.0` | Encoder quality (`0.0`–`1.0`) |
| `transparent` | `boolean` | `false` | Preserve alpha during recording *(experimental)* |
| `onProgress` | (`progress: VideoExportProgress`) => `void` | — | Progress callback fired during capture/encoding |

::: tip Some use cases
- Demo reels and long-form captures
- Integrating with video editors for compositing
- Capturing footage with transparency for overlays
:::

Ready to share your creations with the world? Start exporting your ASCII masterpieces! 🎨
