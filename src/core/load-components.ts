import type { App } from 'vue'
import GRadioGroup from '../components/GRadioGroup/index.vue'

/**
 * 加载组件
 * @param {App} app
 */
export function loadComponents(app: App) {
  const modules = import.meta.globEager('../pages/components/**/index.vue')
  ;[GRadioGroup].forEach(component => app.component(component.name, component))
  Object.keys(modules).forEach(key => {
    // @ts-ignore
    const component = modules[key].default
    console.log('-> component', component)
    app.component(component.name, component)
  })
}
