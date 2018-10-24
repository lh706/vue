// core是与平台无关的代码

import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'

// Vue函数上挂载方法
initGlobalAPI(Vue)

export default Vue
