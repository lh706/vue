import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'

function Vue (options) {
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
renderMixin(Vue)

export default Vue
