const _ = require('lodash')

// map :: (Function, Array) -> Array
const map = _.curry((fn, arr) => {
  if (typeof fn !== 'function') {
    throw new TypeError(`${fn} is not a function`)
  }
  return _.map(arr, fn)
})

// map :: (Function, Array, *) -> *
const reduce = _.curry((fn, arr) => {
  if (typeof fn !== 'function') {
    throw new TypeError(`${fn} is not a function`)
  }
  return _.reduce(arr, fn)
})

module.exports = {
  map,
  reduce
}
