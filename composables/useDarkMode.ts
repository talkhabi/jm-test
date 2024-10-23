import { ref, watchEffect } from 'vue'

export function useDarkMode() {
  const isDark = ref(
    typeof localStorage !== 'undefined' && localStorage.getItem('dark_mode') === 'true'
  )

  watchEffect(() => {
    if (typeof localStorage !== 'undefined') {
      document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
      localStorage.setItem('dark_mode', isDark.value.toString())
    }
  })

  const toggleDarkMode = () => {
    isDark.value = !isDark.value
  }

  return {
    isDark,
    toggleDarkMode,
  }
}
