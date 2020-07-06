const isObject = val => val !== null && typeof val === 'object' && !Array.isArray(val)

module.exports = {
  isObject
}
