const checkPrototype = val => Object.prototype.toString.call(val)

const protoTypes = {
  string: '[object String]',
  number: '[object Number]',
  bigInt: '[object BigInt]',
  boolean: '[object Boolean]',
  undefined: '[object Undefined]',
  symbol: '[object Symbol]',
  function: '[object Function]',
  array: '[object Array]',
  object: '[object Object]',
  null: '[object Null]',
  map: '[object Map]',
  set: '[object Set]',
  promise: '[object Promise]',
  async: '[object AsyncFunction]',
  date: '[object Date]'
}

const isString = val => checkPrototype(val) === protoTypes.string

const isNumber = val => checkPrototype(val) === protoTypes.number

const isNaN = val => isNumber(val) && val.toString() === 'NaN'

const isFinite = val => isNumber(val) && !isNaN(val) && val !== Infinity && val !== -Infinity

const isInteger = val => isFinite(val) && `${val}`.indexOf('.') < 0

const isBigInt = val => checkPrototype(val) === protoTypes.bigInt

const isFloat = val => isFinite(val) && !isInteger(val)

const isBoolean = val => checkPrototype(val) === protoTypes.boolean

const isUndefined = val => checkPrototype(val) === protoTypes.undefined

const isSymbol = val => checkPrototype(val) === protoTypes.symbol

const isFunction = val => checkPrototype(val) === protoTypes.function

const isArray = val => checkPrototype(val) === protoTypes.array

const isObject = val => checkPrototype(val) === protoTypes.object

const isNull = val => checkPrototype(val) === protoTypes.null

const isHTML = val => val instanceof HTMLElement

const isMap = val => checkPrototype(val) === protoTypes.map

const isSet = val => checkPrototype(val) === protoTypes.set

const isPromise = val => checkPrototype(val) === protoTypes.promise

const isAsync = val => checkPrototype(val) === protoTypes.async

const isDate = val => checkPrototype(val) === protoTypes.date

const isEmpty = val => (isArray(val) && val.length === 0) || (isObject(val) && Object.keys(val).length === 0) || ((isMap(val) || isSet(val)) && val.size === 0) || isNull(val)

export default {
  isString,
  isNumber,
  isNaN,
  isFinite,
  isInteger,
  isBigInt,
  isFloat,
  isBoolean,
  isUndefined,
  isSymbol,
  isFunction,
  isObject,
  isArray,
  isNull,
  isHTML,
  isMap,
  isSet,
  isEmpty,
  isPromise,
  isAsync,
  isDate
}
