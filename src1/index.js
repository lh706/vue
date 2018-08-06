import Vue from './instance/index'
import initGlobalApi from './global-api/index'

initGlobalApi(Vue)

window._Vue = Vue
