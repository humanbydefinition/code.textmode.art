<template>
    <section class="testimonials">
        <!-- Hidden measurement container - renders all cards to calculate max height -->
        <div ref="measurementContainer" class="testimonials__measurement" aria-hidden="true">
            <div v-for="testimonial in testimonialsList" :key="`measure-${testimonial.id}`" class="testimonials__measure-card">
                <div class="testimonials__card">
                    <div class="testimonials__quote-icon">
                        <UiIcon name="ph:quotes-duotone" size="xl" />
                    </div>
                    <blockquote class="testimonials__quote">
                        {{ testimonial.quote }}
                    </blockquote>
                    <div class="testimonials__author">
                        <div class="testimonials__avatar-wrapper">
                            <div class="testimonials__avatar testimonials__avatar--placeholder">
                                <UiIcon name="ph:user-duotone" size="lg" />
                            </div>
                        </div>
                        <div class="testimonials__author-info">
                            <div class="testimonials__author-name">{{ testimonial.author }}</div>
                            <div class="testimonials__author-role">{{ testimonial.role }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Section Header -->
        <div class="testimonials__header">
            <h2 class="testimonials__title">What developers say</h2>
            <p class="testimonials__subtitle">
                Join the conversation and share your experience with textmode.js.
            </p>
        </div>

        <!-- Slider Container -->
        <div class="testimonials__slider-wrapper">
            <!-- Navigation Button - Previous -->
            <button class="testimonials__nav testimonials__nav--prev" @click="goToPrevious" :disabled="isTransitioning"
                aria-label="Previous testimonial">
                <UiIcon name="ph:caret-left-bold" size="lg" />
            </button>

            <!-- Slider Track -->
            <div class="testimonials__slider" ref="sliderRef" :style="sliderStyle">
                <TransitionGroup :name="transitionName" tag="div" class="testimonials__track">
                    <div v-for="testimonial in visibleTestimonials" :key="testimonial.id" class="testimonials__slide">
                        <div class="testimonials__card">
                            <!-- Quote Icon -->
                            <div class="testimonials__quote-icon">
                                <UiIcon name="ph:quotes-duotone" size="xl" />
                            </div>

                            <!-- Quote Text -->
                            <blockquote class="testimonials__quote">
                                {{ testimonial.quote }}
                            </blockquote>

                            <!-- Author Info -->
                            <div class="testimonials__author">
                                <div class="testimonials__avatar-wrapper">
                                    <img v-if="testimonial.avatarUrl" :src="testimonial.avatarUrl"
                                        :alt="`${testimonial.author}'s avatar`" class="testimonials__avatar" />
                                    <div v-else class="testimonials__avatar testimonials__avatar--placeholder">
                                        <UiIcon name="ph:user-duotone" size="lg" />
                                    </div>
                                </div>
                                <div class="testimonials__author-info">
                                    <div class="testimonials__author-name">
                                        <a v-if="testimonial.link" :href="testimonial.link" target="_blank"
                                            rel="noopener noreferrer" class="testimonials__author-link">
                                            {{ testimonial.author }}
                                            <UiIcon name="ph:arrow-square-out" size="xs" />
                                        </a>
                                        <span v-else>{{ testimonial.author }}</span>
                                    </div>
                                    <div class="testimonials__author-role">{{ testimonial.role }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TransitionGroup>
            </div>

            <!-- Navigation Button - Next -->
            <button class="testimonials__nav testimonials__nav--next" @click="goToNext" :disabled="isTransitioning"
                aria-label="Next testimonial">
                <UiIcon name="ph:caret-right-bold" size="lg" />
            </button>
        </div>

        <!-- Pagination Dots -->
        <div class="testimonials__dots">
            <button v-for="(_, index) in testimonialsList" :key="index" class="testimonials__dot"
                :class="{ 'testimonials__dot--active': index === currentIndex }" @click="goToIndex(index)"
                :aria-label="`Go to testimonial ${index + 1}`" />
        </div>

        <!-- CTA -->
        <div class="testimonials__cta">
            <div class="testimonials__cta-content">
                <UiIcon name="ph:megaphone-duotone" size="lg" class="testimonials__cta-icon" />
                <div class="testimonials__cta-text">
                    <strong>Built something with textmode.js?</strong>
                    <span>Share it on social media or write a blog post - tag <code>#textmodejs</code> and we might feature you!</span>
                </div>
            </div>
            <div class="testimonials__cta-buttons">
                <a href="https://x.com/intent/tweet?text=Check%20out%20what%20I%20built%20with%20%23textmodejs%20-%20&url=https://code.textmode.art" target="_blank"
                    rel="noopener noreferrer" class="testimonials__cta-button testimonials__cta-button--primary">
                    <UiIcon name="ri:twitter-x-fill" size="sm" />
                    Post on X
                </a>
                <a href="https://bsky.app/intent/compose?text=Check%20out%20what%20I%20built%20with%20%23textmodejs%20-%20https://code.textmode.art" target="_blank"
                    rel="noopener noreferrer" class="testimonials__cta-button testimonials__cta-button--secondary">
                    <UiIcon name="ri:bluesky-fill" size="sm" />
                    Bluesky
                </a>
                <a href="https://www.reddit.com/submit?title=Check%20out%20what%20I%20built%20with%20textmode.js!" target="_blank"
                    rel="noopener noreferrer" class="testimonials__cta-button testimonials__cta-button--secondary">
                    <UiIcon name="mdi:reddit" size="sm" />
                    Reddit
                </a>
                <a href="https://mastodon.social/share?text=Check%20out%20what%20I%20built%20with%20%23textmodejs%20-%20https://code.textmode.art" target="_blank"
                    rel="noopener noreferrer" class="testimonials__cta-button testimonials__cta-button--secondary">
                    <UiIcon name="mdi:mastodon" size="sm" />
                    Mastodon
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { UiIcon } from '../ui'
import testimonialsData from '../../../data/testimonials.json'

defineOptions({ name: 'Testimonials' })

// Types
interface TestimonialData {
    quote: string
    author: string
    role: string
    githubUsername: string | null
    avatarUrl: string | null
    link: string | null
    source: string | null
    featured: boolean
}

interface Testimonial extends TestimonialData {
    id: string
}

// State
const currentIndex = ref(0)
const isTransitioning = ref(false)
const transitionName = ref<'slide-left' | 'slide-right'>('slide-right')
const autoplayInterval = ref<ReturnType<typeof setInterval> | null>(null)
const sliderRef = ref<HTMLElement | null>(null)

// Dynamic height calculation
const calculatedHeight = ref<number | null>(null)
const measurementContainer = ref<HTMLElement | null>(null)

// Pause autoplay on hover
const isPaused = ref(false)

// Process testimonials data
const testimonialsList = computed<Testimonial[]>(() => {
    return Object.entries(testimonialsData)
        .filter(([_, data]) => (data as TestimonialData).featured)
        .map(([id, data]) => {
            const testimonial = data as TestimonialData
            return {
                ...testimonial,
                id,
                // Generate GitHub avatar URL if username is provided
                avatarUrl: testimonial.githubUsername
                    ? `https://github.com/${testimonial.githubUsername}.png?size=128`
                    : testimonial.avatarUrl
            }
        })
})

// Current visible testimonials (for transition)
const visibleTestimonials = computed(() => {
    return [testimonialsList.value[currentIndex.value]]
})

// Computed style for slider height
const sliderStyle = computed(() => {
    if (calculatedHeight.value) {
        return { height: `${calculatedHeight.value}px` }
    }
    return { minHeight: '220px' }
})

// Measure all cards and find the maximum height
async function calculateMaxHeight() {
    await nextTick()
    
    if (!measurementContainer.value) return
    
    let maxHeight = 0
    const cards = measurementContainer.value.querySelectorAll('.testimonials__measure-card')
    
    cards.forEach((card) => {
        const height = (card as HTMLElement).offsetHeight
        if (height > maxHeight) {
            maxHeight = height
        }
    })
    
    // Add a small buffer for safety
    calculatedHeight.value = maxHeight > 0 ? maxHeight : null
}

// Navigation functions
function goToNext() {
    if (isTransitioning.value) return
    transitionName.value = 'slide-left'
    isTransitioning.value = true
    currentIndex.value = (currentIndex.value + 1) % testimonialsList.value.length
    setTimeout(() => {
        isTransitioning.value = false
    }, 500)
}

function goToPrevious() {
    if (isTransitioning.value) return
    transitionName.value = 'slide-right'
    isTransitioning.value = true
    currentIndex.value =
        currentIndex.value === 0 ? testimonialsList.value.length - 1 : currentIndex.value - 1
    setTimeout(() => {
        isTransitioning.value = false
    }, 500)
}

function goToIndex(index: number) {
    if (isTransitioning.value || index === currentIndex.value) return
    transitionName.value = index > currentIndex.value ? 'slide-left' : 'slide-right'
    isTransitioning.value = true
    currentIndex.value = index
    setTimeout(() => {
        isTransitioning.value = false
    }, 500)
}

// Autoplay functionality
function startAutoplay() {
    if (autoplayInterval.value) return
    autoplayInterval.value = setInterval(() => {
        if (!isPaused.value) {
            goToNext()
        }
    }, 5000) // Change slide every 5 seconds
}

function stopAutoplay() {
    if (autoplayInterval.value) {
        clearInterval(autoplayInterval.value)
        autoplayInterval.value = null
    }
}

// Pause on hover
function handleMouseEnter() {
    isPaused.value = true
}

function handleMouseLeave() {
    isPaused.value = false
}

// Handle window resize
function handleResize() {
    calculateMaxHeight()
}

// Lifecycle
onMounted(async () => {
    // Calculate heights first
    await calculateMaxHeight()
    
    // Start autoplay
    startAutoplay()
    
    // Add hover listeners
    if (sliderRef.value) {
        sliderRef.value.addEventListener('mouseenter', handleMouseEnter)
        sliderRef.value.addEventListener('mouseleave', handleMouseLeave)
    }
    
    // Recalculate on resize
    window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
    stopAutoplay()
    window.removeEventListener('resize', handleResize)
    if (sliderRef.value) {
        sliderRef.value.removeEventListener('mouseenter', handleMouseEnter)
        sliderRef.value.removeEventListener('mouseleave', handleMouseLeave)
    }
})
</script>

<style scoped>
.testimonials {
    margin: 3rem 0;
    padding: 0;
}

/* Hidden measurement container - used to calculate max height */
.testimonials__measurement {
    position: absolute;
    visibility: hidden;
    pointer-events: none;
    width: 100%;
    left: 0;
    top: 0;
    z-index: -1;
}

.testimonials__measure-card {
    padding: 0 3.5rem; /* Account for nav button space */
}

/* Header */
.testimonials__header {
    margin-bottom: 2rem;
}

.testimonials__title {
    font-size: 1.65rem;
    font-weight: 700;
    color: var(--vp-c-text-1);
    margin: 0 0 0.75rem;
    line-height: 1.3;
    border-top: none;
    padding-top: 0;
}

.testimonials__subtitle {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--vp-c-text-2);
    margin: 0;
}

/* Slider Wrapper */
.testimonials__slider-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

/* Navigation Buttons */
.testimonials__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-border);
    border-radius: 50%;
    color: var(--vp-c-text-2);
    cursor: pointer;
    transition: all 0.2s ease;
    flex-shrink: 0;
    z-index: 2;
}

.testimonials__nav:hover:not(:disabled) {
    background: var(--vp-c-bg-elv);
    border-color: var(--vp-c-brand-1);
    color: var(--vp-c-brand-1);
    transform: scale(1.05);
}

.testimonials__nav:active:not(:disabled) {
    transform: scale(0.95);
}

.testimonials__nav:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Slider */
.testimonials__slider {
    flex: 1;
    overflow: hidden;
    position: relative;
}

.testimonials__track {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
}

.testimonials__slide {
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    display: flex;
}

/* Slide Transitions */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
    width: 100%;
}

.slide-left-enter-from {
    opacity: 0;
    transform: translateX(100%);
}

.slide-left-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}

.slide-right-enter-from {
    opacity: 0;
    transform: translateX(-100%);
}

.slide-right-leave-to {
    opacity: 0;
    transform: translateX(100%);
}

/* Card */
.testimonials__card {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 200px;
    padding: 2.5rem 2rem 2rem;
    background: linear-gradient(135deg, var(--vp-c-bg-soft) 0%, var(--vp-c-bg-elv) 100%);
    border: 1px solid var(--vp-c-border);
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
    transition: all 0.3s ease;
}

.testimonials__card:hover {
    border-color: var(--vp-c-brand-dimm);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

/* Quote Icon */
.testimonials__quote-icon {
    position: absolute;
    top: 1rem;
    left: 1.5rem;
    color: var(--vp-c-brand-1);
    opacity: 0.2;
}

/* Quote */
.testimonials__quote {
    flex: 1;
    font-size: 1.0625rem;
    line-height: 1.7;
    color: var(--vp-c-text-1);
    margin: 0 0 1.5rem;
    font-style: italic;
    position: relative;
    z-index: 1;
}

/* Author - anchored to bottom */
.testimonials__author {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: auto;
}

.testimonials__avatar-wrapper {
    flex-shrink: 0;
}

.testimonials__avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--vp-c-border);
}

.testimonials__avatar--placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--vp-c-bg-soft);
    color: var(--vp-c-text-3);
}

.testimonials__author-info {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
}

.testimonials__author-name {
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--vp-c-text-1);
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.testimonials__author-link {
    color: var(--vp-c-text-1);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    transition: color 0.2s ease;
}

.testimonials__author-link:hover {
    color: var(--vp-c-brand-1);
}

.testimonials__author-role {
    font-size: 0.8125rem;
    color: var(--vp-c-text-2);
}

/* Dots Pagination */
.testimonials__dots {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
}

.testimonials__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--vp-c-border);
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0;
}

.testimonials__dot:hover {
    background: var(--vp-c-text-3);
    transform: scale(1.2);
}

.testimonials__dot--active {
    background: var(--vp-c-brand-1);
    width: 24px;
    border-radius: 4px;
}

/* CTA */
.testimonials__cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 1.25rem 1.5rem;
    background: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-border);
    border-radius: 12px;
    transition: all 0.2s ease;
}

.testimonials__cta:hover {
    border-color: var(--vp-c-brand-dimm);
}

.testimonials__cta-content {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1;
}

.testimonials__cta-icon {
    color: var(--vp-c-brand-1);
    flex-shrink: 0;
}

.testimonials__cta-text {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    font-size: 0.875rem;
    line-height: 1.5;
}

.testimonials__cta-text strong {
    color: var(--vp-c-text-1);
    font-weight: 600;
}

.testimonials__cta-text span {
    color: var(--vp-c-text-2);
}

.testimonials__cta-text code {
    font-family: var(--textmode-font);
    font-size: 0.8125rem;
    background: var(--vp-c-brand-soft);
    color: var(--vp-c-brand-1);
    padding: 0.125rem 0.375rem;
    border-radius: 4px;
}

.testimonials__cta-buttons {
    display: flex;
    gap: 0.5rem;
    flex-shrink: 0;
}

.testimonials__cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1rem;
    font-family: var(--textmode-font);
    font-size: 0.8125rem;
    font-weight: 500;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.2s ease;
    white-space: nowrap;
}

.testimonials__cta-button--primary {
    background: #000;
    color: white;
    border: 1px solid #000;
}

.html.dark .testimonials__cta-button--primary {
    background: #fff;
    color: #000;
    border-color: #fff;
}

.testimonials__cta-button--primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px -2px rgba(0, 0, 0, 0.3);
}

.testimonials__cta-button--secondary {
    background: var(--vp-c-bg);
    color: var(--vp-c-text-1);
    border: 1px solid var(--vp-c-border);
}

.testimonials__cta-button--secondary:hover {
    border-color: #0085ff;
    color: #0085ff;
    transform: translateY(-1px);
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .testimonials__header {
        margin-bottom: 2rem;
    }

    .testimonials__title {
        font-size: 1.5rem;
    }

    .testimonials__slider-wrapper {
        gap: 0.5rem;
    }

    .testimonials__nav {
        width: 36px;
        height: 36px;
    }

    .testimonials__slider {
        min-height: 260px;
    }

    .testimonials__track {
        min-height: 260px;
    }

    .testimonials__card {
        padding: 2rem 1.5rem 1.5rem;
    }

    .testimonials__quote {
        font-size: 1rem;
    }

    .testimonials__cta {
        flex-direction: column;
        align-items: stretch;
        gap: 1rem;
    }

    .testimonials__cta-content {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
    }

    .testimonials__cta-buttons {
        flex-direction: column;
        width: 100%;
    }

    .testimonials__cta-button {
        justify-content: center;
        width: 100%;
    }
}

@media (max-width: 480px) {
    .testimonials__nav {
        display: none;
    }

    .testimonials__slider-wrapper {
        gap: 0;
    }
}
</style>
