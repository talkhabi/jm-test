import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export function useQuerySync<T>(
  key: string,
  defaultValue: T
) {
  const route = useRoute()
  const router = useRouter()

  const value = ref<T>(
    (route.query[key] as any) || defaultValue
  )

  watch(value, (newValue) => {
    router.replace({
      query: {
        ...route.query,
        [key]: newValue || undefined
      }
    })
  })

  return value
}
