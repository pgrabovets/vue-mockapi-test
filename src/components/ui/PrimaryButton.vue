<template>
  <button class="btn" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  width: 100%;
  background: linear-gradient(90deg, #3cb9a0, #1786ac);
  border-radius: 8px;
  padding: 10px 20px;
  border: 0;
  cursor: pointer;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
}

.btn:hover {
  background: #36a8a0;
}
</style>
