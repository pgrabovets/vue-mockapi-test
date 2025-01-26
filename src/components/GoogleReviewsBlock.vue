<script setup lang="ts">
import { ref, onMounted } from 'vue'
import PrimaryButton from './ui/PrimaryButton.vue'
import SecondaryButton from './ui/SecondaryButton.vue'
import StarFull from './ui/StarFull.vue'
import GoogleLogo from './ui/GoogleLogo.vue'
import { fetchReviews } from '@/api/mockapi'

const loading = ref(true)
const averageRate = ref(0)
const reviewsNumber = ref(0)
const starNumber = ref(4)
const error = ref(false)
const isApiError = ref(false)

onMounted(() => {
  fetchReviews()
    .then((res) => {
      reviewsNumber.value = res.length
      const rate = res.reduce((accum, value) => {
        return accum + value.rating
      }, 0)
      averageRate.value = Math.round((rate / res.length / 20) * 10) / 10
      starNumber.value = Math.round(rate / res.length / 20)
      loading.value = false
    })
    .catch(() => {
      isApiError.value = true
    })
})

const handleWriteClick = () => {
  error.value = true
}
</script>

<template>
  <div v-if="!isApiError" class="google-review-block">
    <div class="left-block">
      <div class="client-reviews">
        <GoogleLogo />
        <p class="client-reviews-text">Відгуки наших клієнтів у Google</p>
      </div>
      <div class="score-block">
        <template v-if="!loading">
          <div class="score-number">{{ averageRate }}</div>
          <div class="flex items-center">
            <StarFull v-for="n in starNumber" :key="n"></StarFull>
          </div>
          <div class="reviews-number">{{ reviewsNumber }} відгуки</div>
        </template>
      </div>
    </div>
    <div class="right-block">
      <a href="https://www.google.com.ua/" target="_blank">
        <PrimaryButton>Переглянути</PrimaryButton>
      </a>
      <SecondaryButton @click="handleWriteClick">Написати</SecondaryButton>
    </div>
  </div>
  <div v-else class="error-message">Network Error</div>
  <div v-if="error" class="error-message">Error message</div>
</template>

<style scoped>
.google-review-block {
  width: 100%;
  display: flex;
  gap: 20px;
  padding: 30px;
  justify-content: space-between;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.left-block {
  display: flex;
  gap: 60px;
}

.right-block {
  display: flex;
  align-items: center;
  gap: 10px;
}

.client-reviews {
  display: flex;
  align-items: center;
  gap: 20px;
}

.client-reviews-text {
  color: #394155;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
}

.score-block {
  display: flex;
  align-items: center;
  gap: 20px;
}

.score-number {
  font-size: 36px;
  font-weight: 500;
  line-height: 44px;
  color: #394155;
}

.reviews-number {
  color: #798595;
  font-size: 14px;
  font-weight: 400;
}

.error-message {
  color: #f00;
  margin: 8px 0;
}

@media (max-width: 1199px) {
  .left-block {
    flex-direction: column;
    gap: 10px;
  }
}

@media (max-width: 780px) {
  .google-review-block {
    flex-direction: column;
  }
}
</style>
