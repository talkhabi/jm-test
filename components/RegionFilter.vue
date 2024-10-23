<template>
  <div>
    <JmSelect
      :modelValue="modelValue"
      :options="options"
      placeholder="Filter by Region"
      @update:modelValue="onChange"
    />
  </div>
</template>

<script setup lang="ts">
import JmSelect from "@/components/ui/JmSelect.vue";

defineProps({
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const onChange = (option: string) => {
  emit('update:modelValue', option)
}

const options = [
  { label: 'Africa', value: 'Africa' },
  { label: 'Americas', value: 'Americas' },
  { label: 'Asia', value: 'Asia' },
  { label: 'Europe', value: 'Europe' },
  { label: 'Oceania', value: 'Oceania' },
]
</script>

<style lang="scss" scoped></style>
