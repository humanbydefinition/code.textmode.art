<template>
    <div class="textmode-what-is-wrapper">
        <div class="textmode-what-is-container">
            <div class="textmode-what-is-content" ref="contentRef">
                <slot></slot>
            </div>
            <div class="textmode-what-is-sketch" ref="containerRef">
                <canvas ref="canvasRef" class="textmode-sketch-canvas" aria-hidden="true"></canvas>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import type { SketchInstance } from '../sketches/hero-wave/types'

const containerRef = ref<HTMLElement>()
const canvasRef = ref<HTMLCanvasElement>()
const contentRef = ref<HTMLElement>()
let sketchInstance: SketchInstance | null = null
let resizeObserver: ResizeObserver | null = null
let visibilityObserver: IntersectionObserver | null = null
let resizeTimeout: number | null = null
let isUnmounted = false

const getSketchSize = () => {
    const container = containerRef.value
    const content = contentRef.value
    if (!container) {
        return { width: 500, height: 400 }
    }

    const containerRect = container.getBoundingClientRect()
    const width = Math.max(1, Math.floor(containerRect.width || container.clientWidth || 500))
    const isMobile = window.innerWidth <= 768

    if (isMobile) {
        return {
            width,
            height: Math.max(300, Math.min(400, Math.floor(containerRect.height || container.clientHeight || 360)))
        }
    }

    const contentRect = content?.getBoundingClientRect()
    const contentHeight = contentRect?.height || content?.clientHeight || containerRect.height || 400

    return {
        width,
        height: Math.max(320, Math.floor(contentHeight))
    }
}

const updateCanvasSize = () => {
    // Debounce resize calls to prevent rapid consecutive resizes
    if (resizeTimeout !== null) {
        window.clearTimeout(resizeTimeout)
    }

    resizeTimeout = window.setTimeout(() => {
        if (!sketchInstance) {
            resizeTimeout = null
            return
        }

        const { width, height } = getSketchSize()
        sketchInstance.resize?.(width, height)

        resizeTimeout = null
    }, 100) // 100ms debounce
}

const initSketch = async () => {
    if (sketchInstance || isUnmounted) return

    await nextTick()

    const canvas = canvasRef.value
    const container = containerRef.value
    const content = contentRef.value

    if (!canvas || !container) {
        console.warn('TextmodeWhatIs: Canvas or container ref not found')
        return
    }

    try {
        const { width, height } = getSketchSize()

        // Dynamically import the sketch module (only runs on client)
        const { createHeroWaveSketch } = await import('../sketches/hero-wave/')
        if (isUnmounted || !canvas.isConnected) return

        canvas.width = width
        canvas.height = height

        sketchInstance = createHeroWaveSketch(canvas, width, height, { mode: 'background' })

        // Set up ResizeObserver to watch content height changes
        resizeObserver = new ResizeObserver(() => {
            updateCanvasSize()
        })
        resizeObserver.observe(container)
        if (content) {
            resizeObserver.observe(content)
        }

        // Also listen to window resize for responsive breakpoint changes
        window.addEventListener('resize', updateCanvasSize)
    } catch (error) {
        console.error('TextmodeWhatIs: Failed to initialize sketch', error)
    }
}

onMounted(async () => {
    isUnmounted = false
    await nextTick()

    const container = containerRef.value
    if (!container) return

    visibilityObserver = new IntersectionObserver((entries) => {
        if (!entries.some(entry => entry.isIntersecting)) return

        visibilityObserver?.disconnect()
        visibilityObserver = null
        initSketch()
    }, {
        rootMargin: '240px 0px'
    })

    visibilityObserver.observe(container)
})

onBeforeUnmount(() => {
  isUnmounted = true
  window.removeEventListener('resize', updateCanvasSize)
  if (resizeTimeout !== null) {
    window.clearTimeout(resizeTimeout)
    resizeTimeout = null
  }
  visibilityObserver?.disconnect()
  visibilityObserver = null
  resizeObserver?.disconnect()
  resizeObserver = null
  sketchInstance?.destroy?.()
  sketchInstance = null
})
</script>

<style scoped>
.textmode-what-is-wrapper {
    margin: 0rem 0;
    width: 100%;
}

.textmode-what-is-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

.textmode-what-is-content {
    padding-right: 1rem;
    min-width: 0;
}

.textmode-what-is-content :deep(pre) {
    max-width: 100%;
    overflow-x: auto;
    box-sizing: border-box;
    margin-bottom: 1.5rem;
}

.textmode-what-is-content :deep(pre code) {
    display: block;
    width: 100%;
}

.textmode-what-is-sketch {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    overflow: hidden;
    background: linear-gradient(135deg, var(--vp-c-bg-soft) 0%, var(--vp-c-bg) 100%);

}

.textmode-sketch-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
}

/* Mobile responsive */
@media (max-width: 768px) {
    .textmode-what-is-container {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .textmode-what-is-content {
        padding-right: 0;
    }

    .textmode-what-is-sketch {
        max-height: 400px;
        min-height: 300px;
        /* Remove order: -1 so sketch appears below content */
    }
}

/* Tablet responsive */
@media (max-width: 960px) and (min-width: 769px) {
    .textmode-what-is-container {
        gap: 2rem;
    }
}
</style>
