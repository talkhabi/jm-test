<template>
  <div class="data-status-wrapper">
    <div v-if="status === 'pending'" class="data-status-wrapper__body">
      Loading...
    </div>

    <div v-else-if="status === 'error'" class="data-status-wrapper__body">
      <p>Oops an error occurred!</p>

      <button v-if="refresh" @click="refresh">RETRY</button>
    </div>

    <div v-else-if="hasData">
      <slot />
    </div>

    <div v-else class="data-status-wrapper__body">
      No item to show!
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

<style lang="scss" scoped>
.data-status-wrapper {
  &__body {
    color: var(--text-secondary);
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    padding: 100px;
  }
}
</style>
