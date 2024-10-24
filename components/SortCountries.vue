<template>
  <div>
    <JmSelect
      :modelValue="modelValue"
      :options="options"
      placeholder="Sort by"
      prepend-icon="ic-sort-down"
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
    { label: 'name ASC', value: 'name-asc' },
    { label: 'name DESC', value: 'name-desc' },
    { label: 'population ASC', value: 'population-asc' },
    { label: 'population DESC', value: 'population-desc' },
  ]

  if (props.modelValue) {
    options.unshift({ label: 'none', value: '' })
  }

  return options
})
</script>
