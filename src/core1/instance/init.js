import { initProxy } from './proxy'
import { initState } from './state'
import { initRender } from './render'
import { initEvents } from './events'
import { initProvide, initInjections } from './inject'
import { mergeOptions } from '../../core/util';
import { initLifecycle, callHook } from './lifecycle'

export function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    const vm = this

    // 合并optins
    vm.$options = mergeOptions(
      resolveConstructorOptions(vm.constructor),
      options || {},
      vm
    )
    
    initProxy(vm)

    vm._self = vm
    initLifecycle(vm)
    initEvents(vm)
    initRender(vm)
    callHook(vm, 'beforeCreate')
    initInjections(vm) // resolve injections before data/props
    initState(vm)
    initProvide(vm) // resolve provide after data/props
    callHook(vm, 'created')
    
    if (vm.$options.el) {
      vm.$mount(vm.options.el)
    }

  }
}

function resolveConstructorOptions () {}