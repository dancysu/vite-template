<template>
  <div class="layout">
    <sidebar> </sidebar>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts" setup>
import sidebar from './components/sidebar/index.vue'
</script>

<style lang="scss" scoped>
.layout {
  width: 256px;
  height: 100vh;
  display: flex;
}
</style>
