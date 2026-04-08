<template>
    <div :class="wrapperClass" @mouseenter="stopAutoSlide" @mouseleave="startAutoSlide" @touchstart="onTouchStart"
        @touchmove="onTouchMove" @touchend="onTouchEnd">
        <div class="slides" :style="sliderStyle">
            <img v-for="(slide, index) in slides" :key="index" :src="slide" class="slide" alt="" />
        </div>

        <div class="slider-dots">
            <button v-for="(_, index) in slides" :key="index" class="dot" :class="{ active: index === current }"
                :data-index="index" @click="goToSlide(index)"></button>
        </div>
    </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
    slides: {
        type: Array,
        default: () => [],
    },
    wrapperClass: {
        type: String,
        default: 'banner-slider',
    },
})

const current = ref(0)
let autoSlide = null
let startX = 0
let endX = 0

const sliderStyle = computed(() => ({
    transform: `translateX(-${current.value * 100}%)`,
}))

function goToSlide(index) {
    const total = props.slides.length
    if (!total) return

    let nextIndex = index
    if (nextIndex >= total) nextIndex = 0
    if (nextIndex < 0) nextIndex = total - 1

    current.value = nextIndex
}

function nextSlide() {
    goToSlide(current.value + 1)
}

function startAutoSlide() {
    stopAutoSlide()
    autoSlide = setInterval(nextSlide, 5000)
}

function stopAutoSlide() {
    if (autoSlide) {
        clearInterval(autoSlide)
        autoSlide = null
    }
}

function onTouchStart(e) {
    startX = e.touches[0].clientX
    stopAutoSlide()
}

function onTouchMove(e) {
    endX = e.touches[0].clientX
}

function onTouchEnd() {
    const diff = startX - endX

    if (diff > 50) goToSlide(current.value + 1)
    else if (diff < -50) goToSlide(current.value - 1)

    startAutoSlide()
}

onMounted(() => {
    startAutoSlide()
})

onBeforeUnmount(() => {
    stopAutoSlide()
})
</script>