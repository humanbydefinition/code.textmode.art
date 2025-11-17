::: details webcam {closed}

::: sandbox {template=static}

```html index.html [readonly]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>textmode.js | Webcam Example</title>

    <style>
      body {
        margin: 0;
        padding: 0;
        background: #000;
        overflow: hidden;
        font-family: monospace;
      }

      #webcam-container {
        position: relative;
        width: 100vw;
        height: 100vh;
      }

      #webcam {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
      }

      #error-message {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        background: rgba(255, 0, 0, 0.8);
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        display: none;
        z-index: 10;
      }

      #permission-message {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        background: rgba(0, 0, 255, 0.8);
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        z-index: 10;
      }
    </style>

    <!-- Import textmode.js -->
    <script src="https://unpkg.com/textmode.js@0.6.0-beta.2/dist/textmode.umd.js"></script>
  </head>

  <body>
    <div id="webcam-container">
      <video id="webcam" autoplay muted playsinline></video>
      <div id="permission-message">
        <h3>Webcam Access Required</h3>
        <p>This example needs access to your webcam to demonstrate real-time textmode conversion.</p>
        <p>Please allow camera access when prompted.</p>
      </div>
      <div id="error-message">
        <h3>Camera Error</h3>
        <p id="error-text">Unable to access webcam</p>
      </div>
    </div>
    <script src="sketch.js"></script>
  </body>
</html>
```

```js sketch.js [active]
/**
 * @name [textmode.js] Webcam integration example
 * @description Real-time textmode conversion of webcam feed.
 * @author humanbydefinition
 * @link https://github.com/humanbydefinition/textmode.js
 */

let tm;
let video;

async function initWebcam() {
    const permissionMessage = document.getElementById('permission-message');
    const errorMessage = document.getElementById('error-message');
    const errorText = document.getElementById('error-text');
    
    try {
        // Get webcam stream
        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { 
                width: { ideal: 1280 },
                height: { ideal: 720 },
                facingMode: 'user'
            } 
        });
        
        video = document.getElementById('webcam');
        video.srcObject = stream;
        
        // Wait for video to be ready
        await new Promise((resolve) => {
            video.onloadedmetadata = () => {
                video.play();
                resolve();
            };
        });
        
        // Hide permission message
        permissionMessage.style.display = 'none';
        
        // Initialize textmode.js overlay on webcam
        tm = textmode.create({
            canvas: video,
            overlay: true,
            fontSize: 8
        });

        tm.setup(() => {
            // Configure overlay settings for webcam
            tm.overlay
                .characters(" .:-=+*#%@")           // Character set for brightness mapping
                .cellColorMode("fixed")             // Use fixed cell color
                .cellColor(0, 0, 0, 0)              // Transparent cell background
                .charColorMode("sampled")           // Sample character color from video
                .background(0, 0, 0, 255);          // Black background
        });

        tm.draw(() => {
            // Clear background
            tm.background(0, 0, 0, 255);
            
            // Draw the converted webcam feed
            tm.image(tm.overlay, tm.grid.cols, tm.grid.rows);
        });
        
    } catch (err) {
        console.error('Error accessing webcam:', err);
        
        // Hide permission message and show error
        permissionMessage.style.display = 'none';
        errorMessage.style.display = 'block';
        
        // Customize error message based on error type
        if (err.name === 'NotAllowedError') {
            errorText.textContent = 'Camera access denied. Please refresh and allow camera access.';
        } else if (err.name === 'NotFoundError') {
            errorText.textContent = 'No camera found. Please connect a camera and refresh.';
        } else if (err.name === 'NotSupportedError') {
            errorText.textContent = 'Camera not supported in this browser.';
        } else {
            errorText.textContent = `Camera error: ${err.message}`;
        }
    }
}

// Handle window resize
function handleResize() {
    if (tm) {
        // textmode.js will automatically handle the resize
        tm.resize();
    }
}

// Initialize when page loads
window.addEventListener('load', initWebcam);
window.addEventListener('resize', handleResize);

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (video && video.srcObject) {
        const tracks = video.srcObject.getTracks();
        tracks.forEach(track => track.stop());
    }
});
```

:::