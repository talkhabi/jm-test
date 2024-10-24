<template>
  <NuxtLink :to="to" class="jm-link-btn" :class="`jm-link-btn--${size}`">
    <i v-if="icon" :class="icon" class="jm-link-btn__icon" />
    <slot>{{ label }}</slot>
  </NuxtLink>
</template>

<script setup lang="ts">
type Size = 'sm' | 'md'

const props = defineProps({
  to: String,
  icon: String,
  label: String,
  size: {
    type: String as () => Size,
    default: 'md',
    validator: (value: string) => ['sm', 'md'].includes(value)
  }
})
</script>

<style lang="scss" scoped>
.jm-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 0 34px;

  height: 40px;
  border-radius: 4px;
  color: var(--text-primary);
  background-color: var(--button-bg);
  box-shadow: 0 0 4px -1px var(--shadow-color);

  &__icon {
    font-size: 22px;
    margin-left: -10px;
  }

  &--sm {
    height: 26px;
    padding: 0 24px;
    font-size: 14px;
  }
}
</style>
