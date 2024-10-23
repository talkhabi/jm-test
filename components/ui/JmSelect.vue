<template>
  <div class="jm-select" tabindex="0" @blur="close">
    <div class="jm-select__input" @click="toggleIsOpen">
      <span>{{ selectedOption?.label ?? placeholder }}</span>
      <i class="ic-angle-down" />
    </div>

    <div v-if="isOpen" class="jm-select__dropdown">
      <div
        v-for="option in options"
        :key="option.value"
        class="jm-select__dropdown-item"
        @click="onOptionClick(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Option {
  label: string
  value: string | number
}

const props = defineProps({
  options: Array as PropType<Option[]>,
  modelValue: String,
  placeholder: String,
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)

const selectedOption = computed(() => {
  return props.options?.find(op => op.value === props.modelValue)
})

const onOptionClick = (option: Option) => {
  emit('update:modelValue', option.value)
  close()
}

const close = () => isOpen.value = false

const toggleIsOpen = () => isOpen.value = !isOpen.value

</script>

<style lang="scss" scoped>
.jm-select {
  position: relative;
  color: var(--text-primary);
  min-width: 200px;

  &__input {
    height: var(--input-height);
    line-height: var(--input-height);
    width: 100%;
    min-width: unset;
    font-size: 14px;
    padding-left: 24px;
    padding-right: 18px;
    border-radius: 4px;
    background-color: var(--input-bg);
    box-shadow: 0 0 4px -1px var(--shadow-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    cursor: pointer;
  }

  &__dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 4px;
    padding: 10px 0;
    min-width: 100%;
    border-radius: 4px;
    background-color: var(--input-bg);
    box-shadow: 0 0 4px -1px var(--shadow-color);
  }

  &__dropdown-item {
    padding: 5px 24px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      background-color: var(--secondary-bg);
    }
  }
}

</style>
