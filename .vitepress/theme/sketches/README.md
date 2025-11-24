# Sketches Directory

This directory contains standalone textmode.js sketches that can be used throughout the VitePress documentation site.

## Structure

Each sketch is a TypeScript module that exports:
- A creation function (e.g., `createHeroWaveSketch`)
- A `SketchInstance` interface with a `destroy()` method for cleanup

## Adding a New Sketch

1. Create a new `.ts` file (or folder with an `index.ts`) in this directory
2. Import textmode.js from the CDN:
   ```typescript
   import { textmode } from 'https://cdn.jsdelivr.net/npm/textmode.js@0.4.0/+esm'
   ```
3. Export your sketch creation function:
   ```typescript
   export function createMySketch(canvas: HTMLCanvasElement, width: number, height: number): SketchInstance {
     const tm = textmode.create({
       canvas,
       width,
       height,
       fontSize: 16,
       frameRate: 60
     })

     tm.setup(() => {
       // Your setup code
     })

     tm.draw(() => {
       // Your draw loop
     })

     return {
       destroy: () => {
         if (typeof tm.destroy === 'function') {
           tm.destroy()
         }
       }
     }
   }
   ```

4. Import and use in a Vue component:
   ```typescript
  const { createMySketch } = await import('../sketches/my-sketch')
   const instance = createMySketch(canvas, width, height)
   ```

## Benefits

- **Separation of concerns**: Sketch logic is separate from Vue component logic
- **Reusability**: Sketches can be used in multiple components
- **Maintainability**: Each sketch is in its own file with clear responsibilities
- **Type safety**: TypeScript provides autocomplete and error checking
- **ESM imports**: Uses modern JavaScript modules with CDN imports

## Example Sketches

- `hero-wave/` - Animated wave pattern with glowing text (used on landing page)
