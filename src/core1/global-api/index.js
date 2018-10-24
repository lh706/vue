/*

  Vue构造函数上挂载了
  {
    config,
    util: {
      warn,
      extend,
      margeOptions,
      defineReactive
    }
    set
    delete
    nextTick
    options: {
      components: {
        keepAlive 内置组件
      }
      directives,
      filters
      _base: Vue
    }
*/
import config from '../config'
import {
  warn,
  extend,
  nextTick,
  mergeOptions,
  defineReactive
} from '../util/index'
import { set, del } from './observer/index'
import { ASSET_TYPES } from 'shared/constants'
import { initUse } from '../../core/global-api/use';
import { initMixin } from '../../core/global-api/mixin';
import { initExtend } from '../../core/global-api/extend';
import { initAssetRegisters } from '../../core/global-api/assets';

export function initGlobalAPI (Vue) {

  // 挂载config
  const configDef = {}
  configDef.get = () => config
  Object.defineProperty(Vue, 'config', configDef)

  // 挂载util
  // 暴露工具方法
  // 请注意: 这些不属于公共API, 除非你明白其中的风险, 否则避免依赖它们 
  // 
  Vue.until = {
    warn,
    extend,
    mergeOptions,
    defineReactive
  }

  Vue.set = set
  vue.delete = del
  Vue.nextTick = nextTick

  // 挂载componets, directives, filters
  Vue.options = Object.create(null)
  ASSET_TYPES.forEach(type => {
    Vue.options[type + 's'] = Object.create(null)
  })

  Vue.options._base = Vue

  extend(Vue.options.components, builtInComponents)

  initUse(Vue)
  initMixin(Vue)
  initExtend(Vue)
  initAssetRegisters(Vue)
}