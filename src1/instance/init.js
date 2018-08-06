export function initMixin (v) {
  console.info('initMixin', v)
  v.prototype._init = function () {
    console.info('_init')
  }
}
