<template>
  <div>
    <NuxtLink :to="`/country/${country?.name?.common}`">{{ country?.name?.common }}</NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps({
  country: Object,
})
</script>