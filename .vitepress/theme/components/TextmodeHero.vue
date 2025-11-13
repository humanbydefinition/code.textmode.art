<template>
  <div class="textmode-hero-wrapper">
    <div class="textmode-hero-container" ref="containerRef">
      <canvas
        ref="canvasRef"
        class="textmode-hero-canvas"
        v-show="isClient"
      ></canvas>

      <div
        class="textmode-hero-fallback textmode-hero-fallback-content"
        v-show="!isClient"
      >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const containerRef = ref<HTMLElement>()
const canvasRef = ref<HTMLCanvasElement>()
let sketchInstance: any = null
const isClient = ref(false)

onMounted(async () => {
  isClient.value = true
  await nextTick()

  const canvas = canvasRef.value
  const container = containerRef.value
  
  if (!canvas || !container) {
    console.warn('TextmodeHero: Canvas or container ref not found')
    return
  }

  try {
    // Get dimensions with fallback values
    const width = container.clientWidth || 800
    const height = container.clientHeight || 400

    // Dynamically import the sketch module (only runs on client)
    const { createHeroWaveSketch } = await import('../sketches/hero-wave')
    
    if (!createHeroWaveSketch) {
      console.error('TextmodeHero: createHeroWaveSketch function not found in module')
      return
    }
    
    canvas.width = width
    canvas.height = height
    
    sketchInstance = createHeroWaveSketch(canvas, width, height)
  } catch (error) {
    console.error('TextmodeHero: Failed to initialize sketch', error)
  }
})

onBeforeUnmount(() => {
  if (sketchInstance?.tm?.remove) {
    sketchInstance.tm.remove()
  }
  sketchInstance = null
})
</script>
