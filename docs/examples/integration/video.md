::: details video {closed}

::: sandbox {template=static}

```html index.html [readonly]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>textmode | Video Example</title>

    <style>
      body {
        margin: 0;
        padding: 4px;
        font-family: 'Courier New', monospace;
        background: #000;
        color: #fff;
        font-size: 12px;
      }

      .container {
        height: 100vh;
        display: flex;
        flex-direction: column;
      }

      .video-container {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 0;
      }

      video {
        width: 100%;
        max-width: 400px;
        height: auto;
        max-height: 60vh;
        object-fit: contain;
      }

      .controls {
        display: flex;
        gap: 8px;
        justify-content: center;
        margin: 8px 0;
      }

      button {
        background: #111;
        color: #0f0;
        border: 1px solid #333;
        padding: 6px 12px;
        cursor: pointer;
        font-family: inherit;
        font-size: 11px;
        text-transform: uppercase;
        flex: 1;
        min-width: 80px;
        max-width: 120px;
      }

      button:hover {
        border-color: #0f0;
        background: #222;
      }
    </style>

    <!-- Import textmode.js -->
    <script src="https://cdn.jsdelivr.net/npm/textmode.js@latest/dist/textmode.umd.js"></script>
  </head>

  <body>
    <div class="container">
      <div class="video-container">
        <video id="myVideo" controls width="400" crossorigin="anonymous">
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
          <p>Your browser doesn't support HTML video.</p>
        </video>
      </div>

      <div class="controls">
        <button id="playBtn">Play</button>
        <button id="pauseBtn">Pause</button>
      </div>
    </div>

    <script src="demo.js"></script>
  </body>
</html>
```

```js demo.js [active]
/**
 * @name [textmode.js] Video Example
 * @description Real-time video-to-ASCII conversion using textmode.js
 * @author humanbydefinition
 * @link https://github.com/humanbydefinition/textmode.js
 */

class VideoTextmodeDemo {
    constructor() {
        this.textmodifier = null;
        this.video = null;
        this.isTextmodeVisible = true;
        
        this.init();
    }

    async init() {
        this.setupVideoElement();
        await this.setupTextmode();
        this.setupControls();
    }

    setupVideoElement() {
        this.video = document.getElementById('myVideo');
    }

    async setupTextmode() {
        // Initialize textmode.js with the video element
        this.textmodifier = textmode.create({
            fontSize: 8,
            canvas: this.video,
            overlay: true
        });

        this.textmodifier.setup(() => {
            // Configure overlay settings
            this.textmodifier.overlay
                .characters(" .:-=+*#%@")           // Character set for brightness mapping
                .cellColorMode("fixed")             // Use fixed cell color
                .cellColor(0, 0, 0)                 // Black cell background
                .charColorMode("sampled")           // Sample character color from image
                .background(0, 0, 0, 255);        // Black background for transparent pixels
        });

        this.textmodifier.draw(() => {
            this.textmodifier.background(0);
            this.textmodifier.image(this.textmodifier.overlay, this.textmodifier.grid.cols, this.textmodifier.grid.rows);
        });
    }

    setupControls() {
        document.getElementById('playBtn').addEventListener('click', () => {
            this.video?.play();
        });

        document.getElementById('pauseBtn').addEventListener('click', () => {
            this.video?.pause();
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new VideoTextmodeDemo();
});
```

:::