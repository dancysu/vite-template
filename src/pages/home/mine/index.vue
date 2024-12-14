<template>
  <div>
    <p>Count: {{ store.count }}</p>
    <p class="text">Double Count: {{ store.doubleCount }}</p>
    <el-button @click="store.increment">Increment</el-button>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '../../../pinia/stores/counter'

// 使用 Pinia store
const store = useCounterStore()
</script>

<style lang="scss" scoped>
.text {
  color: $color;
}
</style>
