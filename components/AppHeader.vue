<template>
  <header class="header">
    <JmContainer class="header__container">
      <h1 class="header__title">Where in the world?</h1>

      <button class="header__toggle-dark-mode" @click="toggleDarkMode">
        <Transition name="slide-up">
          <div v-if="isDark">
            <i class="ic-light-mode" />
            <span>Light Mode</span>
          </div>
          <div v-else>
            <i class="ic-dark-mode" />
            <span>Dark Mode</span>
          </div>
        </Transition>


      </button>
    </JmContainer>
  </header>
</template>

<script setup lang="ts">
import JmContainer from "@/components/ui/JmContainer";
import { useDarkMode } from "@/composables/useDarkMode";

const { isDark, toggleDarkMode } = useDarkMode()

</script>

<style lang="scss" scoped>
.header {
  padding: 24px 0;
  box-shadow: 4px 0 4px var(--shadow-color);
  background-color: var(--primary-bg);
  transition: background-color 0.3s ease;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    font-size: 24px;
    margin: 0;
  }

  &__toggle-dark-mode {
    background: none;
    border: none;
    color: inherit;
    outline: none;
    padding: 0;
    font-size: 1rem;
    overflow: hidden;
    width: 112px;
    height: 24px;
    white-space: nowrap;

    i {
      margin-right: 8px;
      font-size: 24px;
      display: inline-block;
    }
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(100%);
}
.slide-up-leave-to {
  position: absolute;
  opacity: 0;
  transform: translateY(-100%);
}
</style>
