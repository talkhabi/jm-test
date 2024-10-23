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

const props = defineProps({
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const onChange = (option: string) => {
  emit('update:modelValue', option)
}

const options = computed(() => {
  const options = [
    { label: 'Africa', value: 'Africa' },
    { label: 'Americas', value: 'Americas' },
    { label: 'Asia', value: 'Asia' },
    { label: 'Europe', value: 'Europe' },
    { label: 'Oceania', value: 'Oceania' },
  ]

  if (props.modelValue) {
    options.unshift({ label: 'all', value: '' })
  }

  return options
})
</script>

<style lang="scss" scoped></style>
