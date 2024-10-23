<template>
  <div>
    <NuxtLink :to="`/country/${country?.name.common}`">{{ country?.name.common }}</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type {Country} from "@/types/country";
import type {PropType} from "vue";

defineProps({
  country: Object as PropType<Country>,
})
</script>
