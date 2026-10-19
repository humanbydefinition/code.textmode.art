<template>
  <section class="textmode-hero-container" ref="containerRef" aria-labelledby="textmode-hero-title">
    <canvas
      ref="canvasRef"
      class="textmode-hero-canvas"
      aria-hidden="true"
    />
    <div class="textmode-hero-labels">
      <h1 id="textmode-hero-title" class="textmode-hero-title">{{ frontmatter.hero.name }}</h1>
      <p class="textmode-hero-description">{{ frontmatter.hero.tagline }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import type { SketchInstance } from '../sketches/hero-wave/types'

const { frontmatter } = useData()

const DEFAULT_WIDTH = 800
const DEFAULT_HEIGHT = 400

const containerRef = ref<HTMLElement>()
const canvasRef = ref<HTMLCanvasElement>()

let sketchInstance: SketchInstance | null = null
let resizeObserver: ResizeObserver | null = null
let resizeFrame = 0
let isUnmounted = false
let rendererReady = false
let inView = false
let visibilityObserver: IntersectionObserver | null = null
let motion: MediaQueryList | null = null

function syncPlayback() {
  if (!rendererReady) return
  if (inView && !document.hidden && !motion?.matches) sketchInstance?.tm?.loop?.()
  else sketchInstance?.tm?.noLoop?.()
}

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
    // Paint the HTML labels before starting the decorative WebGL renderer.
    await document.fonts.ready
    await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())))
    if (isUnmounted) return
    const { createHeroWaveSketch } = await import('../sketches/hero-wave/')
    if (isUnmounted || !canvas.isConnected) return

    const { width, height } = getCanvasSize()
    canvas.width = width
    canvas.height = height
    sketchInstance = createHeroWaveSketch(canvas, width, height, {
      mode: 'background',
      onReady: () => { rendererReady = true; syncPlayback() }
    })

    motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    motion.addEventListener('change', syncPlayback)
    document.addEventListener('visibilitychange', syncPlayback)
    visibilityObserver = new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting
      syncPlayback()
    })
    visibilityObserver.observe(container)

    resizeObserver = new ResizeObserver(resizeSketch)
    resizeObserver.observe(container)
  } catch (error) {
    console.error('TextmodeHero: Failed to initialize sketch', error)
  }
})

onBeforeUnmount(() => {
  isUnmounted = true
  visibilityObserver?.disconnect()
  motion?.removeEventListener('change', syncPlayback)
  document.removeEventListener('visibilitychange', syncPlayback)
  cancelAnimationFrame(resizeFrame)
  resizeObserver?.disconnect()
  resizeObserver = null
  sketchInstance?.destroy?.()
  sketchInstance = null
})
</script>

<style scoped>
.textmode-hero-labels {
  position: relative;
  z-index: 1;
  width: min(100%, 68ch);
  padding: 24px;
  font-family: 'Bescii Mono', var(--textmode-font);
  font-synthesis: none;
  text-align: left;
}
.textmode-hero-title {
  display: table;
  width: fit-content;
  margin: 0;
  padding: 8px 12px;
  border: 3px solid #009fca;
  border-bottom: 0;
  background: #1b1b1f;
  color: #29d8ff;
  font-family: inherit;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0;
}
.textmode-hero-description {
  width: fit-content;
  max-width: 100%;
  margin: 0;
  padding: 10px 12px;
  border: 3px solid #009fca;
  background: #1b1b1f;
  color: #82d3dc;
  font-size: 20px;
  line-height: 1.4;
  overflow-wrap: break-word;
}
@media (max-width: 640px) {
  .textmode-hero-labels { padding: 16px; }
  .textmode-hero-title { font-size: 24px; }
  .textmode-hero-description { font-size: 18px; }
}
@media (max-width: 480px) {
  .textmode-hero-title { font-size: 20px; }
  .textmode-hero-description { font-size: 16px; }
}
</style>
