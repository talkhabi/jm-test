<template>
  <AppHeader />
  <main class="app-main">
    <NuxtPage />
  </main>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
</script>

<style lang="scss" scoped>
.app-main {
  padding: 48px 0;
}
</style>
