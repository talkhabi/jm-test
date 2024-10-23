<template>
  <div>
    <JmInput
      :model-value="modelValue"
      prepend-icon="ic-search"
      placeholder="Search for a country ..."
      @update:modelValue="onInput"
    />
  </div>
</template>

<script setup lang="ts">
const UPDATE_THRESHOLD = 500 // ms

import JmInput from "@/components/ui/JmInput.vue";

defineProps({
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const changeTimeout = ref<ReturnType<typeof setTimeout>>()

const onInput = (value: string) => {
  clearTimeout(changeTimeout.value)

  changeTimeout.value = setTimeout(() => {
    emit('update:modelValue', value)
  }, UPDATE_THRESHOLD)
}
</script>

<style lang="scss" scoped></style>
