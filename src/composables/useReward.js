import { computed, ref } from 'vue'

const STORAGE_KEY = 'reward_selected_product_id'

export function useReward(products) {
  const selectedRewardId = ref(
    localStorage.getItem(STORAGE_KEY)
      ? Number(localStorage.getItem(STORAGE_KEY))
      : null
  )

  const popupVisible = ref(false)
  const selectedProduct = ref(null)

  const hasClaimedReward = computed(() => selectedRewardId.value !== null)

  function claimReward(productId) {
    if (hasClaimedReward.value) return

    const product = products.find((item) => item.id === productId)
    if (!product) return

    selectedRewardId.value = productId
    selectedProduct.value = product
    popupVisible.value = true

    localStorage.setItem(STORAGE_KEY, String(productId))
  }

  function closePopup() {
    popupVisible.value = false
  }

  return {
    selectedRewardId,
    selectedProduct,
    popupVisible,
    hasClaimedReward,
    claimReward,
    closePopup,
  }
}