<template>
  <div class="jm-input">
    <div class="jm-input__prepend">
      <slot name="prepend" />
      <i v-if="prependIcon" :class="prependIcon" />
    </div>

    <input
      class="jm-input__input"
      :value="modelValue"
      :placeholder="placeholder"
      @input="onInput"
    />

    <div class="jm-input__append">
      <slot name="append" />
      <i v-if="appendIcon" :class="appendIcon" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  appendIcon: String,
  prependIcon: String,
  modelValue: String,
  placeholder: String,
})

const emit = defineEmits(['update:modelValue'])

const onInput = (event: InputEvent) => {
  emit('update:modelValue', event.target?.value)
}
</script>

<style lang="scss" scoped>
.jm-input {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 0 30px;
  border-radius: 4px;
  color: var(--text-secondary);
  background-color: var(--input-bg);
  box-shadow: 0 0 4px -1px var(--shadow-color);

  &__input {
    border: none;
    padding: 10px 0;
    margin: 0;
    outline: none;
    height: var(--input-height);
    line-height: var(--input-height);
    width: 100%;
    min-width: unset;
    font-size: 14px;
  }

  &__prepend {
    font-size: 20px;
    &:empty {
      display: none;
    }
  }

  &__append {
    font-size: 20px;
    &:empty {
      display: none;
    }
  }
}

</style>
