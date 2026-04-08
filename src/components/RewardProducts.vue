<template>
    <div id="reward-product-list">
        <div v-for="product in products" :key="product.id" class="reward-card">
            <div class="reward-card-image">
                <img :src="product.img" :alt="product.name" />
            </div>

            <div class="reward-card-name">{{ product.name }}</div>

            <div class="reward-card-price" :style="{ display: showPrice(product) ? 'block' : 'none' }">
                {{ product.price }}
            </div>

            <template v-if="!hasClaimedReward">
                <div class="reward-card-action" @click="claimReward(product.id)">
                    Nhận quà
                </div>
            </template>

            <template v-else>
                <div v-if="selectedRewardId === product.id" class="reward-card-done">
                    ✅ Đã nhận
                </div>

                <div v-else class="reward-card-action" style="visibility: hidden">
                    Nhận quà
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
defineProps({
    products: {
        type: Array,
        required: true,
    },
    selectedRewardId: {
        type: Number,
        default: null,
    },
    hasClaimedReward: {
        type: Boolean,
        default: false,
    },
})

const emit = defineEmits(['claim'])

function claimReward(productId) {
    emit('claim', productId)
}

function showPrice(product) {
    return product.id !== null && product.id !== undefined
}
</script>