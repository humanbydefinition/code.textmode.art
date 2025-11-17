# Installation

Getting started with `textmode.js` is straightforward! This guide will walk you through the installation process for different environments and provide you with everything you need to begin creating ASCII art in the browser.

## Try it online first

Before installing anything locally, you can try `textmode.js` directly in your browser using our dedicated web editor:

🌐 **[editor.textmode.art](https://editor.textmode.art)**

The web editor is specifically designed for `textmode.js` and provides:
- ✨ **Zero setup required** - Start coding immediately
- 🚀 **Live preview** - See your creations in real-time  
- 💾 **Save & share** - Export your sketches and share with others
- 📚 **Built-in examples** - Learn from interactive examples
- 🔧 **Full API access** - All `textmode.js` features available

The web editor is perfect for learning, prototyping, or creating quick experiments without any local setup!

## Prerequisites

To get started with `textmode.js`, you'll need:
- A **modern web browser** with `WebGL2` support *(Chrome, Firefox, Safari, Edge, etc.)*
- A [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) in your project *(optional, otherwise the library will create one for you)*
- [Node.js 16+](https://nodejs.org/) and `npm` *(optional, for ESM installation)*

:::warning
`textmode.js` is currently fully dependent on `WebGL2`. Ensure your target browsers support it. You can check compatibility on [caniuse.com](https://caniuse.com/webgl2).
:::

## Importing `textmode.js`

### UMD

To use `textmode.js` in a UMD environment, download the latest `umd` build from the [**GitHub releases page**](https://github.com/humanbydefinition/textmode.js/releases/) or import it directly from a CDN like [**jsDelivr**](https://www.jsdelivr.com/package/npm/textmode.js). The library is distributed as a single JavaScript file, which you can include in your project by adding the following script tag to your HTML file:

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
    <title>textmode.js sketch</title>

    <!-- Import textmode.js from CDN -->
    <script src="https://cdn.jsdelivr.net/npm/textmode.js@latest/dist/textmode.umd.js"></script>
</head>
<body>
    <script src="sketch.js"></script>
</body>
</html>
```

```javascript
// sketch.js
const t = textmode.create({
    width: window.innerWidth,
    height: window.innerHeight,
    fontSize: 16,
    frameRate: 60
});

t.setup(() => {
    // Optional setup code here (e.g., load fonts/shaders, initialize variables that access 't')
});

t.draw(() => {
    t.background(32); // Dark gray background

    t.char('A');
    t.charColor(255, 0, 0); // Cover the top-left quarter of the grid with a rectangle of red 'A's
    t.rect(t.grid.cols / 2, t.grid.rows / 2);

    // ...add your drawing code here!
});

t.windowResized(() => {
    t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

### ESM

To use `textmode.js` in an ESM environment, you can install it via `npm`:

```bash
npm install textmode.js
```

Then, you can import it in your JavaScript or TypeScript files:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>textmode.js sketch</title>
</head>
<body>
    <script type="module" src="./sketch.js"></script>
</body>
</html>
```

```javascript
// sketch.js

// Import textmode.js
import { textmode } from 'textmode.js';

const t = textmode.create({
    width: window.innerWidth,
    height: window.innerHeight,
    fontSize: 16,
    frameRate: 60
});

t.setup(() => {
    // Optional setup code here (e.g., load fonts/shaders, initialize variables that access 't')
});

t.draw(() => {
    t.background(32); // Dark gray background

    t.char('A');
    t.charColor(255, 0, 0); // Cover the top-left quarter of the grid with a rectangle of red 'A's
    t.rect(t.grid.cols / 2, t.grid.rows / 2);

    // ...add your drawing code here!
});

t.windowResized(() => {
    t.resizeCanvas(window.innerWidth, window.innerHeight);
});
```

---

:::info Next steps
-> Continue with the [Fundamentals](/docs/fundamentals) to learn the basics.

-> Browse [Examples](/docs/examples) to see it in action.

-> Experiment online in the [Web Editor](https://editor.textmode.art).

-> Need types and full signatures? Open the [API Reference](/api/).
:::