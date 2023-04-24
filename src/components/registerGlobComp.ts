import type { App } from 'vue'
import { Button } from './Button'
import { Input, Layout } from 'ant-design-vue'

export function registerGlobComp(app: App<Element>) {
  app.use(Input).use(Button).use(Layout)
}