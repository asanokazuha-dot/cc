<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  product: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits(['close'])

function closePopup() {
  emit('close')
}
</script>

<template>
  <div
    v-if="show"
    id="popup"
    class="popup show"
    @click.self="closePopup"
  >
    <div class="popup-content popup-reward">
      <div class="popup-top">
        <div class="popup-top-title">CON CƯNG</div>
      </div>

      <div class="popup-body">
        <div class="popup-product-box">
          <img
            id="reward-img"
            :src="product?.img || ''"
            :alt="product?.name || ''"
          />
        </div>

        <div id="reward-name" class="popup-reward-name">
          {{ product?.name || '' }}
        </div>

        <div class="popup-divider"></div>

        <div class="popup-note">
          Chúc mừng ba mẹ đã nhận quà!
        </div>

        <div class="popup-instruction">
          Chụp ảnh và gửi cho QUẢN LÝ để được nhận quà
        </div>

        <div class="popup-btn" @click="closePopup">
           {{ product?.price || '' }}
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.reward-section {
    background: #fff;
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 20px;
    font-family:
}

.reward-section-title {
    margin: 0 0 20px;
    font-size: 20px;
    font-weight: 700;
    color: #333;
}

.reward-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 24px 20px;
    align-items: start;
}

.reward-grid::before,
.reward-grid::after {
    content: none !important;
    display: none !important;
}

.reward-card {
    width: 100%;
    min-width: 0;
    display: flex;
    flex-direction: column;
}

.reward-card-image {
    width: 100%;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}

.reward-card-image img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
}

.reward-card-name {
    min-height: 48px;
    margin: 0 0 6px;
    font-size: 14px;
    line-height: 24px;
    color: #333;
    word-break: break-word;
}

.reward-card-price {
    min-height: 30px;
    margin: 0 0 10px;
    font-size: 18px;
    line-height: 18px;
    font-weight: 700;
    color: #202020;
}

.reward-card-action,
.reward-card-done {
    min-height: 40px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
}

.reward-card-action {
    background: #ff4d57;
    color: #fff;
    cursor: pointer;
    user-select: none;
}

.reward-card-done {
    background: #ff6b6b;
    color: #fff;
}

/* Tablet */
@media (max-width: 1199px) {
    .reward-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
}

/* Mobile ngang / tablet nhỏ */
@media (max-width: 991px) {
    .reward-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

/* Mobile */
@media (max-width: 767px) {
    .reward-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
    }
}
.popup {
    position: fixed;
    inset: 0;
    z-index: 99999;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: rgba(49, 0, 20, 0.55);
}

.popup.show {
    display: flex;
}

.popup-reward {
    width: min(320px, 100%);
    padding: 0;
    border-radius: 34px;
    overflow: hidden;
    background: #f5f5f5;
    text-align: center;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.28);
    animation: popupFadeIn 0.25s ease;
    font-family: "Helvetica Neue", sans-serif;
}

.popup-top {
    position: relative;
    background: linear-gradient(180deg, #f02a84 0%, #d91f74 100%);
    color: #fff;
    padding: 26px 18px 40px;
    border-bottom-left-radius: 50% 18px;
    border-bottom-right-radius: 50% 18px;
}

.popup-top-title {
    font-size: 28px;
    font-weight: 900;
    line-height: 1;
    letter-spacing: -0.5px;
    text-transform: uppercase;
    font-style: italic;
}

.popup-deco {
    position: absolute;
    top: 18px;
    font-size: 16px;
    line-height: 1;
}

.popup-deco-left {
    left: 22px;
}

.popup-deco-right {
    right: 22px;
}

.popup-body {
    padding: 22px 22px 28px;
}

.popup-product-box {
    width: 126px;
    height: 126px;
    margin: 0 auto 16px;
    border-radius: 18px;
    background: #f7e8ef;
    border: 2px solid #efd8e1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}

.popup-product-box img,
#reward-img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    margin: 0 auto;
}

.popup-subtitle {
    color: #f25da0;
    font-size: 14px;
    font-weight: 800;
    line-height: 1.3;
    text-transform: uppercase;
    margin-bottom: 6px;
    letter-spacing: 0.4px;
}

.popup-reward-name,
#reward-name {
    color: #dd1d74;
    font-size: 22px;
    font-weight: 900;
    line-height: 1.05;
    text-transform: uppercase;
    margin: 0 auto 18px;
    max-width: 240px;
    word-break: break-word;
}

.popup-divider {
    height: 1px;
    background: #f0d6df;
    margin: 0 10px 18px;
}

.popup-note {
    background: #f8eaf0;
    border-radius: 18px;
    padding: 18px 14px;
    color: #d93b81;
    font-size: 16px;
    font-style: italic;
    font-weight: 700;
    line-height: 1.45;
    margin-bottom: 18px;
}

.popup-instruction {
    border: 2px solid #f1e1a8;
    background: #fffaf0;
    border-radius: 16px;
    padding: 14px 12px;
    color: #e18cb0;
    font-size: 14px;
    font-weight: 800;
    line-height: 1.35;
    text-transform: uppercase;
    margin-bottom: 22px;
}

.popup-btn {
    background: linear-gradient(180deg, #f02a84 0%, #cf176c 100%);
    color: #fff;
    border-radius: 18px;
    padding: 16px 14px;
    font-size: 17px;
    font-weight: 900;
    line-height: 1.2;
    text-transform: uppercase;
    box-shadow: 0 5px 0 #a90f56;
}

#fireworks {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    z-index: 99998;
    pointer-events: none;
    display: none;
}

#fireworks.show {
    display: block;
}

@keyframes popupFadeIn {
    from {
        opacity: 0;
        transform: scale(0.92);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@media (max-width: 480px) {
    .popup {
        padding: 10px;
    }

    .popup-reward {
        width: min(320px, 100%);
        border-radius: 30px;
    }

    .popup-top-title {
        font-size: 24px;
    }

    .popup-reward-name,
    #reward-name {
        font-size: 24px;
    }

    .popup-note {
        font-size: 15px;
    }

    .popup-btn {
        font-size: 15px;
    }
}
</style>