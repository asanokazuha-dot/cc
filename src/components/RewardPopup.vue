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
            <img src="../assets/box/header.png" alt="CON CUNG" class="popup-top-img">
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


        <div class="popup-btn-wrapper">
            <img src="../assets/box/gift-left.png" class="gift gift-left" />
  
            <div class="popup-btn">
                Hoàn Thành Đủ 4 Hoạt Động Khảo Sát Nhận Quà Hoàn Toàn Miễn Phí
            </div>
  
            <img src="../assets/box/gift-left.png" class="gift gift-right" />
        </div>
      </div>
    </div>

  </div>
</template>
<style scoped>
:global(*) {
  box-sizing: border-box;
}

:global(body) {
  margin: 0;
  font-family: "Inter", "Segoe UI", Roboto, Arial, sans-serif;
  background:
    radial-gradient(circle at top left, rgba(255, 111, 145, 0.18), transparent 28%),
    radial-gradient(circle at top right, rgba(255, 188, 66, 0.18), transparent 22%),
    linear-gradient(180deg, #fff7fb 0%, #fffaf3 100%);
  color: #243042;
}

/* ===== Reward section ===== */
.reward-section {
  position: relative;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 105, 145, 0.12);
  border-radius: 28px;
  padding: 28px;
  margin-bottom: 24px;
  box-shadow:
    0 18px 50px rgba(255, 77, 117, 0.08),
    0 6px 16px rgba(27, 39, 94, 0.05);
  overflow: hidden;
}

.reward-section::before {
  content: "";
  position: absolute;
  top: -80px;
  right: -80px;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 76, 118, 0.16), transparent 70%);
  pointer-events: none;
}

.reward-section-title {
  margin: 0 0 24px;
  font-size: 28px;
  line-height: 1.2;
  font-weight: 800;
  color: #d91f74;
  text-align: center;
  letter-spacing: -0.4px;
}

/* ===== Grid ===== */
.reward-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 22px;
  align-items: stretch;
}

.reward-grid::before,
.reward-grid::after {
  content: none !important;
  display: none !important;
}

/* ===== Card ===== */
.reward-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: linear-gradient(180deg, #ffffff 0%, #fff8fb 100%);
  border: 1px solid rgba(255, 105, 145, 0.14);
  border-radius: 24px;
  padding: 18px;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  box-shadow: 0 10px 24px rgba(25, 35, 80, 0.06);
}

.reward-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 34px rgba(217, 31, 116, 0.14);
  border-color: rgba(217, 31, 116, 0.26);
}

.reward-card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 24px;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    rgba(255,255,255,0.35) 0%,
    rgba(255,255,255,0) 30%
  );
}

/* ===== Image ===== */
.reward-card-image {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 20px;
  background: linear-gradient(180deg, #fff0f6 0%, #fff8ef 100%);
  border: 1px solid rgba(255, 128, 167, 0.16);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  margin-bottom: 16px;
  overflow: hidden;
}

.reward-card-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.reward-card:hover .reward-card-image img {
  transform: scale(1.05);
}

/* ===== Text ===== */
.reward-card-name {
  min-height: 48px;
  margin: 0 0 8px;
  font-size: 15px;
  line-height: 1.45;
  font-weight: 600;
  color: #243042;
  text-align: center;
  word-break: break-word;
}

.reward-card-price {
  min-height: 32px;
  margin: 0 0 14px;
  font-size: 22px;
  line-height: 1.2;
  font-weight: 800;
  color: #e63973;
  text-align: center;
}

/* ===== Button ===== */
.reward-card-action,
.reward-card-done {
  min-height: 46px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  font-size: 14px;
  font-weight: 800;
  text-align: center;
  transition: all 0.25s ease;
}

.reward-card-action {
  background: linear-gradient(135deg, #ff4d79 0%, #d91f74 100%);
  color: #fff;
  cursor: pointer;
  user-select: none;
  box-shadow: 0 10px 18px rgba(217, 31, 116, 0.24);
}

.reward-card-action:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 24px rgba(217, 31, 116, 0.3);
}

.reward-card-done {
  background: linear-gradient(135deg, #ffb347 0%, #ff7f50 100%);
  color: #fff;
  box-shadow: 0 8px 16px rgba(255, 145, 56, 0.22);
}

/* ===== Popup overlay ===== */
.popup {
  position: fixed;
  inset: 0;
  z-index: 999999;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 18px;
  background: rgba(38, 18, 47, 0.55);
  backdrop-filter: blur(6px);
}

.popup.show {
  display: flex;
}

/* ===== Popup box ===== */
.popup-reward {
  width: min(400px, 100%);
  padding: 0;
  border-radius: 32px;
  overflow: hidden;
  background: linear-gradient(180deg, #fff 0%, #fff7fb 100%);
  text-align: center;
  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.2),
    0 8px 24px rgba(217, 31, 116, 0.12);
  animation: popupFadeIn 0.28s ease;
  border: 1px solid rgba(255, 255, 255, 0.55);
}
.popup-content.popup-reward {
  width: min(400px, 100%);
  padding: 0 !important;
  margin: 0;
  border-radius: 30px;
  overflow: hidden;
  background: #ffeef2; /* hồng siêu nhạt */
  text-align: center;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.28);
}

.popup-top {
  width: 100%;
  margin: 0;
  padding: 0;
  line-height: 0;
  overflow: hidden;
}

.popup-top-img {
  display: block;
  width: 100%;
  max-width: 100%;
  height: 200px; /* chỉnh theo ý bạn */
  object-fit: cover;
  border-radius: 0;
}
.popup-top::before,
.popup-top::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,0.14);
}

.popup-top::before {
  width: 160px;
  height: 160px;
  top: -90px;
  right: -30px;
}

.popup-top::after {
  width: 120px;
  height: 120px;
  bottom: -65px;
  left: -30px;
}

.popup-top-title {
  position: relative;
  font-size: 30px;
  font-weight: 900;
  line-height: 1;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.popup-body {
  padding: 24px 24px 28px;
  margin-top: -28px;
  position: relative;
  z-index: 2;
}

.popup-product-box {
  width: 144px;
  height: 144px;
  margin: 0 auto 18px;
  border-radius: 24px;
  background: linear-gradient(180deg, #fff7fa 0%, #fff4eb 100%);
  border: 1px solid rgba(255, 105, 145, 0.14);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  box-shadow: 0 14px 30px rgba(217, 31, 116, 0.08);
}

.popup-product-box img,
#reward-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin: 0 auto;
  border-radius: 14px;
}

.popup-reward-name,
#reward-name {
  color: #d91f74;
  font-size: 24px;
  font-weight: 900;
  line-height: 1.2;
  margin: 0 auto 18px;
  max-width: 280px;
  word-break: break-word;
}

.popup-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, #f2bfd3, transparent);
  margin: 0 8px 18px;
}

.popup-note {
  background: linear-gradient(180deg, #fff0f6 0%, #fff8fb 100%);
  border: 1px solid rgba(255, 105, 145, 0.12);
  border-radius: 18px;
  padding: 16px 14px;
  color: #c81c69;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 16px;
}

.popup-instruction {
  border: 1px dashed #ffc36d;
  background: #fffaf1;
  border-radius: 18px;
  padding: 14px 12px;
  color: #a46d16;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 20px;
}

.popup-btn {
  background: linear-gradient(135deg, #ff4d79 0%, #d91f74 100%);
  color: #fff;
  border-radius: 18px;
  padding: 16px 14px;
  font-size: 16px;
  font-weight: 900;
  line-height: 1.35;
  box-shadow: 0 12px 22px rgba(217, 31, 116, 0.22);
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
    transform: translateY(16px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* ===== Responsive ===== */
@media (max-width: 1199px) {
  .reward-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 991px) {
  .reward-section {
    padding: 22px;
  }

  .reward-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .reward-section {
    padding: 18px 14px;
    border-radius: 22px;
  }

  .reward-section-title {
    font-size: 22px;
    margin-bottom: 18px;
  }

  .reward-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  .reward-card {
    border-radius: 18px;
    padding: 14px;
  }

  .reward-card-name {
    font-size: 14px;
    min-height: 42px;
  }

  .reward-card-price {
    font-size: 18px;
  }

  .popup {
    padding: 10px;
  }

  .popup-reward {
    width: min(360px, 100%);
    border-radius: 24px;
  }

  .popup-top-title {
    font-size: 24px;
  }

  .popup-reward-name,
  #reward-name {
    font-size: 20px;
  }

  .popup-note,
  .popup-instruction,
  .popup-btn {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .reward-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .reward-card-image {
    padding: 10px;
    border-radius: 16px;
  }

  .reward-card-action,
  .reward-card-done {
    min-height: 42px;
    font-size: 13px;
  }
}
/* gift chung */
.gift {
  position: absolute;
  width: 110px;
  pointer-events: none;
}

/* bên trái */
.gift-left {
  left: 0px;
  bottom: -25px;
  transform: rotate(-15deg);
}

/* bên phải */
.gift-right {
  right: 0px;
  bottom: -25px;
  transform: rotate(15deg);
}

.gift {
  animation: floatGift 2.5s ease-in-out infinite;
}

.gift-right {
  animation-delay: 1s;
}

@keyframes floatGift {
  0%, 100% {
    transform: translateY(0) rotate(-10deg);
  }
  50% {
    transform: translateY(-6px) rotate(5deg);
  }
}
</style>