const LOCAL_KEY = 'form-generator-config'

export function useFormLocalStorage<T>(config: T) {
  const formConfig = ref(config)
  useEventListener('beforeunload', () => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(formConfig.value))
  })

  useEventListener('load', () => {
    const data = localStorage.getItem(LOCAL_KEY)
    if (data) {
      formConfig.value = JSON.parse(data)
      formConfig.value.currentItem = null
    }
  })
  return formConfig
}
