<template>
  <div class="textmode-hero-container" ref="containerRef">
    <canvas
      ref="canvasRef"
      class="textmode-hero-canvas"
      aria-hidden="true"
    />
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import type { SketchInstance } from '../sketches/hero-wave/types'

const DEFAULT_WIDTH = 800
const DEFAULT_HEIGHT = 400

const containerRef = ref<HTMLElement>()
const canvasRef = ref<HTMLCanvasElement>()

let sketchInstance: SketchInstance | null = null
let resizeObserver: ResizeObserver | null = null
let resizeFrame = 0
let isUnmounted = false

function getCanvasSize() {
  const container = containerRef.value
  if (!container) {
    return { width: DEFAULT_WIDTH, height: DEFAULT_HEIGHT }
  }

  const rect = container.getBoundingClientRect()

  return {
    width: Math.max(1, Math.floor(rect.width || container.clientWidth || DEFAULT_WIDTH)),
    height: Math.max(1, Math.floor(rect.height || container.clientHeight || DEFAULT_HEIGHT))
  }
}

function resizeSketch() {
  if (!sketchInstance?.resize) return

  cancelAnimationFrame(resizeFrame)
  resizeFrame = requestAnimationFrame(() => {
    const { width, height } = getCanvasSize()
    sketchInstance?.resize?.(width, height)
  })
}

onMounted(async () => {
  isUnmounted = false
  await nextTick()

  const canvas = canvasRef.value
  const container = containerRef.value
  if (!canvas || !container) return

  try {
    const { createHeroWaveSketch } = await import('../sketches/hero-wave/')
    if (isUnmounted || !canvas.isConnected) return

    const { width, height } = getCanvasSize()
    canvas.width = width
    canvas.height = height
    sketchInstance = createHeroWaveSketch(canvas, width, height)

    resizeObserver = new ResizeObserver(resizeSketch)
    resizeObserver.observe(container)
  } catch (error) {
    console.error('TextmodeHero: Failed to initialize sketch', error)
  }
})

onBeforeUnmount(() => {
  isUnmounted = true
  cancelAnimationFrame(resizeFrame)
  resizeObserver?.disconnect()
  resizeObserver = null
  sketchInstance?.destroy?.()
  sketchInstance = null
})
</script>
