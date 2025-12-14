<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = withDefaults(defineProps<{
  phrases?: string[]
  interval?: number
  charDelay?: number
  showCursor?: boolean
}>(), {
  phrases: () => [
    'A retro game revival',
    'A live performance',
    'A generative masterpiece',
    'An interactive installation',
    'A nostalgic demo scene',
    'A hypnotic animation',
    'An ASCII art generator',
    'A terminal adventure',
    'A digital artifact',
    'A creative experiment',
    'A pen plotter drawing',
  ],
  interval: 3500,
  charDelay: 40,
  showCursor: false
})

const currentPhraseIndex = ref(0)
const displayedChars = ref<string[]>([])
const isFlipping = ref<boolean[]>([])
const maxLength = computed(() => Math.max(...props.phrases.map(p => p.length)))

// Compute visible length - find last non-space character index + 1
const visibleLength = computed(() => {
  for (let i = displayedChars.value.length - 1; i >= 0; i--) {
    if (displayedChars.value[i] !== ' ') {
      return i + 1
    }
  }
  return 0
})

// Get visible characters preserving internal spaces
const visibleChars = computed(() => {
  return displayedChars.value.slice(0, visibleLength.value)
})

// Characters to cycle through during flip (textmode-themed)
const flipChars = '░▒▓█▀▄■□●○◆◇★☆@#$%&*+=~'

let intervalId: number | null = null
let charTimeouts: number[] = []

const initializeDisplay = () => {
  const phrase = props.phrases[currentPhraseIndex.value]
  displayedChars.value = phrase.padEnd(maxLength.value, ' ').split('')
  isFlipping.value = new Array(maxLength.value).fill(false)
}

const flipToNextPhrase = () => {
  // Clear any pending timeouts
  charTimeouts.forEach(t => clearTimeout(t))
  charTimeouts = []

  const nextIndex = (currentPhraseIndex.value + 1) % props.phrases.length
  const nextPhrase = props.phrases[nextIndex].padEnd(maxLength.value, ' ')
  const currentPhrase = displayedChars.value.join('')

  // Start flipping each character with a staggered delay
  for (let i = 0; i < maxLength.value; i++) {
    if (nextPhrase[i] !== currentPhrase[i]) {
      isFlipping.value[i] = true
      
      // Random flips before settling on final character
      const flipCount = 3 + Math.floor(Math.random() * 4)
      let flipStep = 0

      const doFlip = () => {
        if (flipStep < flipCount) {
          // Show random character during flip
          displayedChars.value[i] = flipChars[Math.floor(Math.random() * flipChars.length)]
          flipStep++
          charTimeouts.push(window.setTimeout(doFlip, 50 + Math.random() * 30))
        } else {
          // Settle on final character
          displayedChars.value[i] = nextPhrase[i]
          isFlipping.value[i] = false
        }
      }

      // Stagger the start of each character's flip
      charTimeouts.push(window.setTimeout(doFlip, i * props.charDelay))
    }
  }

  currentPhraseIndex.value = nextIndex
}

onMounted(() => {
  initializeDisplay()
  intervalId = window.setInterval(flipToNextPhrase, props.interval)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
  charTimeouts.forEach(t => clearTimeout(t))
})
</script>

<template>
  <span class="split-flap">
    <span
      v-for="(char, index) in visibleChars"
      :key="index"
      class="split-flap-char"
      :class="{ flipping: isFlipping[index], space: char === ' ' }"
    >{{ char === ' ' ? '\u00A0' : char }}</span>
    <span v-if="showCursor" class="cursor"></span>
  </span>
</template>

<style scoped>
.split-flap {
  display: inline-flex;
  align-items: center;
  font-family: var(--textmode-font, 'JetBrains Mono', 'Courier New', monospace);
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.split-flap-char {
  transition: color 0.1s ease;
}

.split-flap-char.flipping {
  color: var(--vp-c-brand-1);
}

.cursor {
  display: inline-block;
  width: 0.6em;
  height: 1.25em;
  background: var(--vp-c-brand-1);
  animation: blink 1s step-end infinite;
  margin-left: 3px;
  border-radius: 2px;
  flex-shrink: 0;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@media (max-width: 768px) {
  .cursor {
    display: none;
  }
}
</style>
