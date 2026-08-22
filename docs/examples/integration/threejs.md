---
title: Three.js Integration
description: Combine Three.js 3D rendering with textmode.js to create real-time ASCII art from WebGL 3D scenes.
---

::: details three.js

::: textmode-sandbox {template=static}

```html index.html [readonly]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>textmode | Three.js</title>

    <style>
      html,
      body {
        width: 100%;
        height: 100%;
        margin: 0;
        overflow: hidden;
      }

      canvas {
        display: block;
        width: 100%;
        height: 100%;
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
import { OverlayPlugin } from 'https://cdn.jsdelivr.net/npm/textmode.overlay.js@latest/dist/textmode.overlay.esm.js';

let tm;
let scene, camera, renderer, orbitalRig, core;
const rings = [];

async function setup() {
  // Create scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x01030a);
  
  // Create camera
  camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.set(0, 0, 5.6);
  
  // Preserve the host frame so textmode.js can sample it independently.
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    preserveDrawingBuffer: true,
  });
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.35;
  document.body.appendChild(renderer.domElement);
  resizeRendererToDisplaySize();
  
  scene.add(new THREE.AmbientLight(0x203050, 1.4));

  const keyLight = new THREE.PointLight(0x62e8ff, 34, 18);
  keyLight.position.set(4, 3, 5);
  scene.add(keyLight);

  const fillLight = new THREE.PointLight(0xff4fa3, 28, 16);
  fillLight.position.set(-4, -2, 3);
  scene.add(fillLight);

  orbitalRig = new THREE.Group();
  const ringGeometry = new THREE.TorusGeometry(1.7, 0.2, 18, 96);
  const ringColors = [0x62e8ff, 0xff4fa3, 0xffd166];
  const ringRotations = [
    [0.35, 0.15, 0],
    [1.05, 0.5, 0.75],
    [-0.65, 0.9, -0.45],
  ];

  ringColors.forEach((color, index) => {
    const ring = new THREE.Mesh(
      ringGeometry,
      new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.28,
        metalness: 0.25,
        roughness: 0.3,
      }),
    );
    ring.rotation.set(...ringRotations[index]);
    rings.push(ring);
    orbitalRig.add(ring);
  });

  core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.95, 1),
    new THREE.MeshStandardMaterial({
      color: 0xf4f0ff,
      emissive: 0x201636,
      emissiveIntensity: 0.35,
      flatShading: true,
      metalness: 0.15,
      roughness: 0.32,
    }),
  );
  orbitalRig.add(core);
  scene.add(orbitalRig);
  
  // Initialize textmode.js with the Three.js canvas
  tm = textmode.create({ fontSize: 16, plugins: [OverlayPlugin] });

  const source = tm.overlay.setTarget(renderer.domElement);

  tm.setup(() => {
    // Configure overlay settings
    source
        .characters(" .:-=+*#%@")           // Character set for brightness mapping
        .cellColorMode("fixed")             // Use fixed cell color
        .cellColor(0, 0, 0)                 // Black cell background
        .charColorMode("sampled")           // Sample character color from image
        .background(0, 0, 0, 255);        // Black background for transparent pixels
  });

  tm.draw(() => {
    tm.background(0);
    tm.image(source, tm.grid.cols, tm.grid.rows);
 });
  
  // Three.js and textmode.js keep independent animation loops.
  renderer.setAnimationLoop(animate);
}

// Animation loop
function animate(timestamp) {
  const time = timestamp * 0.001;

  resizeRendererToDisplaySize();

  orbitalRig.rotation.x = -0.22 + Math.sin(time * 0.4) * 0.08;
  orbitalRig.rotation.y = time * 0.22;
  rings[0].rotation.z = time * 0.12;
  rings[1].rotation.z = 0.75 - time * 0.1;
  rings[2].rotation.x = -0.65 + Math.sin(time * 0.25) * 0.12;
  rings[2].rotation.z = -0.45 + time * 0.08;
  core.rotation.x = time * 0.32;
  core.rotation.y = -time * 0.38;
  
  // Render the scene
  renderer.render(scene, camera);
}

function resizeRendererToDisplaySize() {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needsResize = canvas.width !== width || canvas.height !== height;

  if (needsResize) {
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
}

// Initialize everything
setup();
```

:::
