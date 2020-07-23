/* global globalThis */
import tools from './lib/index.js'

let exportTool = tools

const proxyFn = (target, key, receiver, targetKey) => {
  if (key.indexOf(targetKey) >= 0 && key !== targetKey) {
    const lastStr = key.split(targetKey + '_')[1] || ''
    const [startIndex, endIndex] = lastStr.split('_')
    return target[targetKey][startIndex][endIndex]
  }
  return target[key]
}
const that = (typeof globalThis === 'object' && globalThis) ||
(typeof window === 'object' && window) ||
(typeof global === 'object' && global) ||
(typeof self === 'object' && self) ||
this
if (that.Proxy) {
  exportTool = new Proxy(tools, {
    get (target, key, receiver) {
      if (key.indexOf('REGEXP_PASS_COMPLEX_') >= 0) {
        return proxyFn(target, key, receiver, 'REGEXP_PASS_COMPLEX')
      }
      if (key.indexOf('REGEXP_PASS_MODERATE_') >= 0) {
        return proxyFn(target, key, receiver, 'REGEXP_PASS_MODERATE')
      }
      return target[key]
    }
  })
}

export default exportTool
