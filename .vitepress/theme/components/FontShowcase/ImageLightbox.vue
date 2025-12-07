<template>
  <Teleport to="body">
    <Transition name="lightbox-fade">
      <div
        v-if="isOpen"
        class="lightbox-overlay"
        @click="onOverlayClick"
        @keydown.esc="close"
        @keydown.left="previous"
        @keydown.right="next"
        tabindex="0"
        role="dialog"
        aria-modal="true"
        :aria-label="`${fontName} font preview gallery`"
      >
        <button
          class="lightbox-close"
          @click="close"
          aria-label="Close gallery"
          title="Close (Esc)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div class="lightbox-content" @click="onContentClick" @touchend="onContentTouchEnd">
          <button
            v-if="images.length > 1"
            class="lightbox-nav lightbox-nav--prev"
            @click="previous"
            :disabled="currentIndex === 0"
            aria-label="Previous image"
            title="Previous (←)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div class="lightbox-image-container">
            <Transition :name="`image-slide-${slideDirection}`" mode="out-in">
              <img
                :key="currentImage"
                :src="currentImage"
                :alt="`${fontName} preview ${currentIndex + 1} of ${images.length}`"
                class="lightbox-image"
                @click.stop
              />
            </Transition>
          </div>

          <button
            v-if="images.length > 1"
            class="lightbox-nav lightbox-nav--next"
            @click="next"
            :disabled="currentIndex === images.length - 1"
            aria-label="Next image"
            title="Next (→)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div v-if="images.length > 1" class="lightbox-counter">
          {{ currentIndex + 1 }} / {{ images.length }}
        </div>

        <div class="lightbox-title">
          {{ fontName }}
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted, onUnmounted } from 'vue'

interface Props {
  isOpen: boolean
  currentIndex: number
  images: string[]
  fontName: string
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
  currentIndex: 0,
  images: () => [],
  fontName: ''
})

const emit = defineEmits<{
  close: []
  updateIndex: [index: number]
}>()

const currentImage = computed(() => props.images[props.currentIndex] || '')
const slideDirection = ref<'forward' | 'backward'>('forward')

const onContentClick = (event: MouseEvent | TouchEvent) => {
  const target = event.target as HTMLElement
  if (!target) return

  const isInteractive = target.closest('.lightbox-image, .lightbox-nav, .lightbox-close, .lightbox-title, .lightbox-counter')
  if (isInteractive) return

  close()
}

const onContentTouchEnd = (event: TouchEvent) => {
  if (!isLightboxReady) return
  const target = event.target as HTMLElement
  if (!target) return

  const isInteractive = target.closest('.lightbox-image, .lightbox-nav, .lightbox-close, .lightbox-title, .lightbox-counter')
  if (isInteractive) return

  const touch = event.changedTouches[0]
  const touchEndX = touch.screenX
  const touchEndY = touch.screenY
  const deltaX = Math.abs(touchEndX - touchStartX)
  const deltaY = Math.abs(touchEndY - touchStartY)
  const timeDiff = Date.now() - touchStartTime

  const isTap = deltaX < 10 && deltaY < 10 && timeDiff < 300
  if (isTap) {
    close()
  }
}

const close = () => {
  emit('close')
}

const next = () => {
  if (props.currentIndex < props.images.length - 1) {
    slideDirection.value = 'forward'
    emit('updateIndex', props.currentIndex + 1)
  }
}

const previous = () => {
  if (props.currentIndex > 0) {
    slideDirection.value = 'backward'
    emit('updateIndex', props.currentIndex - 1)
  }
}

const onOverlayClick = (event: MouseEvent) => {
  if ((event.target as HTMLElement).classList.contains('lightbox-overlay')) {
    close()
  }
}

// Handle touch gestures for mobile
let touchStartX = 0
let touchStartY = 0
let touchEndX = 0
let touchEndY = 0
let touchStartTime = 0
let isLightboxReady = false

const handleTouchStart = (event: TouchEvent) => {
  if (!isLightboxReady) return
  touchStartX = event.changedTouches[0].screenX
  touchStartY = event.changedTouches[0].screenY
  touchStartTime = Date.now()
}

const handleTouchEnd = (event: TouchEvent) => {
  if (!isLightboxReady) return
  touchEndX = event.changedTouches[0].screenX
  touchEndY = event.changedTouches[0].screenY
  handleSwipe()
}

const handleSwipe = () => {
  const swipeThreshold = 50
  const diffX = touchStartX - touchEndX
  const diffY = Math.abs(touchStartY - touchEndY)
  const timeDiff = Date.now() - touchStartTime

  // Only trigger if:
  // 1. Horizontal movement exceeds threshold
  // 2. Vertical movement is minimal (not scrolling)
  // 3. Touch started after lightbox was ready
  if (Math.abs(diffX) > swipeThreshold && diffY < 30 && timeDiff < 1000) {
    if (diffX > 0) {
      next() // Swipe left - next image
    } else {
      previous() // Swipe right - previous image
    }
  }
}

// Prevent body scroll when lightbox is open
watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
    isLightboxReady = false
    // Delay enabling touch gestures to prevent interference with opening tap
    setTimeout(() => {
      isLightboxReady = true
    }, 300)
    document.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('touchend', handleTouchEnd, { passive: true })
  } else {
    document.body.style.overflow = ''
    isLightboxReady = false
    document.removeEventListener('touchstart', handleTouchStart)
    document.removeEventListener('touchend', handleTouchEnd)
  }
})

onUnmounted(() => {
  document.body.style.overflow = ''
  document.removeEventListener('touchstart', handleTouchStart)
  document.removeEventListener('touchend', handleTouchEnd)
})
</script>

<style scoped>
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.92);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  outline: none;
}

.lightbox-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  height: 100%;
  max-height: calc(100vh - 140px);
  padding: 0 80px;
}

.lightbox-image-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 180px);
}

.lightbox-image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  user-select: none;
}

.lightbox-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: all 0.2s;
  z-index: 10;
  backdrop-filter: blur(10px);
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.lightbox-close:active {
  transform: scale(0.95);
}

.lightbox-nav {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: all 0.2s;
  z-index: 10;
  backdrop-filter: blur(10px);
}

.lightbox-nav:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.lightbox-nav:active:not(:disabled) {
  transform: scale(0.95);
}

.lightbox-nav:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.lightbox-nav--prev {
  left: 2rem;
}

.lightbox-nav--next {
  right: 2rem;
}

.lightbox-counter {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  z-index: 10;
}

.lightbox-title {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  z-index: 10;
}

/* Transitions */
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}

/* Forward transition (next image) */
.image-slide-forward-enter-active {
  transition: all 0.3s ease-out;
}

.image-slide-forward-leave-active {
  transition: all 0.3s ease-in;
}

.image-slide-forward-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.image-slide-forward-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

/* Backward transition (previous image) */
.image-slide-backward-enter-active {
  transition: all 0.3s ease-out;
}

.image-slide-backward-leave-active {
  transition: all 0.3s ease-in;
}

.image-slide-backward-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

.image-slide-backward-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

/* Mobile responsive */
@media (max-width: 768px) {
  .lightbox-content {
    max-height: calc(100vh - 120px);
    padding: 0 60px;
  }

  .lightbox-image-container {
    max-height: calc(100vh - 160px);
  }

  .lightbox-close {
    top: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
  }

  .lightbox-nav {
    width: 48px;
    height: 48px;
  }

  .lightbox-nav--prev {
    left: 0.5rem;
  }

  .lightbox-nav--next {
    right: 0.5rem;
  }

  .lightbox-counter {
    bottom: 1rem;
    font-size: 0.85rem;
    padding: 0.4rem 0.8rem;
  }

  .lightbox-title {
    top: 1rem;
    left: 1rem;
    font-size: 1rem;
    padding: 0.6rem 1rem;
  }
}

@media (max-width: 480px) {
  .lightbox-content {
    padding: 0 50px;
  }

  .lightbox-image-container {
    max-height: calc(100vh - 140px);
  }
}
</style>
