<template>
  <button class="btn" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  width: 100%;
  background:
    linear-gradient(90deg, #e6f7f5, #f8fcfc) padding-box,
    linear-gradient(90deg, #aacedb, #bee2e0) border-box;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 9px 20px;
  cursor: pointer;
  color: #000;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  display: inline-block;
}

.btn:hover {
  background: #36a8a0;
  color: #fff;
}
</style>
