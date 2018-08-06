(function () {
  'use strict'

  function initMixin (v) {
    console.info('initMixin', v)
    v.prototype._init = function () {
      console.info('_init')
    }
  }

  function stateMixin () {
    console.info('stateMixin')
  }

  function renderMixin () {
    console.info('renderMixin')
  }

  function Vue (options) {
    this._init(options)
  }

  initMixin(Vue)
  stateMixin(Vue)
  renderMixin(Vue)

  function initGlobalApi (v) {
    console.info('initGlobalApi')
  }

  initGlobalApi(Vue)

  window._Vue = Vue
}())
// # sourceMappingURL=bundle.js.map
