::: details three.js

::: sandbox {template=static}

```html index.html [readonly]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>textmode | Three.js</title>

    <style>
      body {
        margin: 0;
        padding: 0;
      }

      canvas {
        display: block;
      }
    </style>
  </head>

  <body>
    <script type="module" src="sketch.js"></script>
  </body>
</html>
```

```js sketch.js [active]
/**
 * @name [textmode.js] Three.js Example
 * @description A simple example of using textmode.js with Three.js.
 * @author humanbydefinition
 * @link https://github.com/humanbydefinition/textmode.js
 * 
 * This example demonstrates how to use textmode.js with Three.js.
 */

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.178.0/build/three.module.js';
import { textmode } from 'https://cdn.jsdelivr.net/npm/textmode.js@latest/dist/textmode.esm.js';

let tm;
let scene, camera, renderer, cube;
let frameCount = 0;

async function setup() {
  // Create scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  
  // Create camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 3;
  
  // Create renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  // Add directional light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(0, 0, 1);
  scene.add(directionalLight);
  
  // Add ambient light for some base illumination
  const ambientLight = new THREE.AmbientLight(0x404040, 0.2);
  scene.add(ambientLight);
  
  // Create stick-like box geometry
  const geometry = new THREE.BoxGeometry(8, 1, 1);
  const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  
  // Initialize textmode.js with the Three.js canvas
  tm = textmode.create({ fontSize: 16, canvas: renderer.domElement, overlay: true });

  tm.setup(() => {
    // Configure overlay settings
    tm.overlay
        .characters(" .:-=+*#%@")           // Character set for brightness mapping
        .cellColorMode("fixed")             // Use fixed cell color
        .cellColor(0, 0, 0)                 // Black cell background
        .charColorMode("sampled")           // Sample character color from image
        .background(0, 0, 0, 255);        // Black background for transparent pixels
  });

  tm.draw(() => {
    tm.clear();
    tm.image(tm.overlay, 0, 0, tm.grid.cols, tm.grid.rows);
 });
  
  // Start animation
  animate();
}

// Animation loop
function animate() {
  frameCount++;
  
  // Rotate the cube
  cube.rotation.x = frameCount * -0.05;
  cube.rotation.z = frameCount * -0.02;
  
  // Render the scene
  renderer.render(scene, camera);
  
  requestAnimationFrame(animate);
}

// Handle window resize
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize);

// Initialize everything
setup();
```

:::
