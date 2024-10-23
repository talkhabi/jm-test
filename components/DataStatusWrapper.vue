<template>
  <div class="error-handler">
    <div v-if="status === 'pending'">
      Loading...
    </div>

    <div v-else-if="status === 'error'">
      ERROR

      <button v-if="refresh" @click="refresh">RETRY</button>
    </div>

    <div v-else-if="hasData">
      <slot />
    </div>

    <div v-else>
      NO DATA
    </div>
  </div>
</template>

<script setup lang="ts">


defineProps({
  hasData: Boolean,
  error: Object,
  status: String,
  refresh: Function,
})

</script>
