<template>
  <teleport to="body">
    <div v-if="modelValue" class="popup-overlay" @click.self="close">
      <div class="popup-inner">
        <img src="/img/popup.png" alt="popup" class="popup-img" />

        <button class="popup-close" @click="close">
          Đóng
        </button>
      </div>
    </div>
  </teleport>
</template>

<script setup>
defineProps({
  modelValue: Boolean
})

const emit = defineEmits(["update:modelValue"])

const close = () => {
  emit("update:modelValue", false)
  document.body.style.overflow = ""
}
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.72);
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  overflow: hidden;
}

.popup-inner {
  position: relative;
  width: min(92vw, 520px);
  max-height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 92vh;
  object-fit: contain;
  animation: popupZoom 0.25s ease;
}

.popup-close {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 54px;
  height: 54px;
  border: none;
  border-radius: 50%;
  background: #ff2d2d;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  z-index: 2;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.28);
}

@keyframes popupZoom {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 767px) {
  .popup-overlay {
    padding: 12px;
  }

  .popup-inner {
    width: min(96vw, 430px);
    max-height: 88vh;
  }

  .popup-img {
    width: 100%;
    max-height: 88vh;
  }

  .popup-close {
    top: 6px;
    right: 6px;
    width: 50px;
    height: 50px;
    font-size: 15px;
  }
}
</style>