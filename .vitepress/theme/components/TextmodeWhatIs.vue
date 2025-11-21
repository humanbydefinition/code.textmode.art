<template>
    <div class="textmode-what-is-wrapper">
        <div class="textmode-what-is-container">
            <div class="textmode-what-is-content" ref="contentRef">
                <slot></slot>
            </div>
            <div class="textmode-what-is-sketch" ref="containerRef">
                <canvas ref="canvasRef" class="textmode-sketch-canvas" v-show="isClient"></canvas>
                <div class="textmode-sketch-fallback" v-show="!isClient">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const containerRef = ref<HTMLElement>()
const canvasRef = ref<HTMLCanvasElement>()
const contentRef = ref<HTMLElement>()
let sketchInstance: any = null
let resizeObserver: ResizeObserver | null = null
let resizeTimeout: number | null = null
const isClient = ref(false)

const updateCanvasSize = () => {
    // Debounce resize calls to prevent rapid consecutive resizes
    if (resizeTimeout !== null) {
        window.clearTimeout(resizeTimeout)
    }

    resizeTimeout = window.setTimeout(() => {
        const canvas = canvasRef.value
        const container = containerRef.value
        const content = contentRef.value

        if (!canvas || !container || !sketchInstance) return

        const width = container.clientWidth || 500

        // Check if we're in single-column mode (mobile)
        const isMobile = window.innerWidth <= 768
        let height: number

        if (isMobile) {
            // In single column mode, cap at 400px
            height = Math.min(400, container.clientHeight || 400)
        } else {
            // In two-column mode, match content height
            height = content ? content.clientHeight : container.clientHeight || 400
        }

        // Use the sketch's resize method which handles grid reinitialization
        if (sketchInstance?.resize) {
            sketchInstance.resize(width, height)
        }

        resizeTimeout = null
    }, 100) // 100ms debounce
}

onMounted(async () => {
    isClient.value = true
    await nextTick()

    const canvas = canvasRef.value
    const container = containerRef.value
    const content = contentRef.value

    if (!canvas || !container) {
        console.warn('TextmodeWhatIs: Canvas or container ref not found')
        return
    }

    try {
        // Get initial dimensions
        const width = container.clientWidth || 500
        const isMobile = window.innerWidth <= 768
        const height = isMobile
            ? Math.min(400, container.clientHeight || 400)
            : (content ? content.clientHeight : container.clientHeight || 400)

        // Dynamically import the sketch module (only runs on client)
        const { createHeroWaveSketch } = await import('../sketches/hero-wave')

        if (!createHeroWaveSketch) {
            console.error('TextmodeWhatIs: createHeroWaveSketch function not found in module')
            return
        }

        canvas.width = width
        canvas.height = height

        sketchInstance = createHeroWaveSketch(canvas, width, height, { mode: 'background' })

        // Set up ResizeObserver to watch content height changes
        if (content) {
            resizeObserver = new ResizeObserver(() => {
                updateCanvasSize()
            })
            resizeObserver.observe(content)
        }

        // Also listen to window resize for responsive breakpoint changes
        window.addEventListener('resize', updateCanvasSize)
    } catch (error) {
        console.error('TextmodeWhatIs: Failed to initialize sketch', error)
    }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateCanvasSize)
  if (sketchInstance?.tm?.remove) {
    sketchInstance.tm.remove()
  }
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
    display: block;
}

.textmode-sketch-fallback {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--vp-c-text-2);
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
