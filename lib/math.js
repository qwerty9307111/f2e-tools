import util from '../utils/index.js'

const pow = util.curry((num, pows) => Math.pow(num, pows))

const multiply = util.curry((a, b) => a * b)

const precisionMultiply = util.curry((a, b) => util.flow([multiply, toPrecision])(a, b))

const divide = util.curry((a, b) => a / b)

const precisionDivide = util.curry((a, b) => util.flow([divide, toPrecision])(a, b))

const getFloatLength = num => (`${num}`.split('.')[1] || '').length

const magnification = util.curry((times, num) => precisionMultiply(num, pow(10, times)))

/**
 * 在数字的值超出指定位数时将其转换为指数计数法
 * @function
 * @author YinWenwu
 * @date 2020-05-25
 * @param {Number} num 需要转换的数值
 * @param {1~21} precision=12 指定位数
 * @returns {Number}
 */
const toPrecision = (num, precision = 12) => Number(num.toPrecision(precision))

/**
 * 将数值按四舍五入转换为指定位数的小数
 * @function
 * @author YinWenwu
 * @date 2020-05-25
 * @param {Number} num 需要转换的数值
 * @param {Number} round=2 小数位数，默认保留两位小数
 * @returns {String}
 */
const round = (num, rounds = 2) => {
  const times = pow(10, rounds)
  return precisionDivide(Math.round(precisionMultiply(num, times)), times)
}

/**
 * 两数相加
 * @function
 * @author YinWenwu
 * @date 2020-05-25
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
const add = util.curry((a, b) => a + b)

/**
 * 两数相加后转换为指数计数法
 * @function
 * @author YinWenwu
 * @date 2020-05-25
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
const precisionAdd = util.curry((a, b) => {
  const toMagnification = magnification(Math.max(getFloatLength(a), getFloatLength(b)))
  return precisionDivide(util.flow([add, toPrecision])(toMagnification(a), toMagnification(b)), toMagnification(1))
})

/**
 * 两数相减
 * @function
 * @author YinWenwu
 * @date 2020-05-25
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
const sub = util.curry((a, b) => a - b)

/**
 * 两数相减后转换为指数计数法
 * @function
 * @author YinWenwu
 * @date 2020-05-25
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
const precisionSub = util.curry((a, b) => {
  const toMagnification = magnification(Math.max(getFloatLength(a), getFloatLength(b)))
  return precisionDivide(util.flow([sub, toPrecision])(toMagnification(a), toMagnification(b)), toMagnification(1))
})

// const addAllItems = arr => arr.reduce(add)

const precisionAddAllItems = arr => arr.reduce(precisionAdd)

// const minusAllItems = arr => arr.reduce(sub)

const precisionMinusAllItems = arr => arr.reduce(precisionSub)

// const multiplyAllItems = arr => arr.reduce(multiply)

const precisionMultiplyAllItems = arr => arr.reduce(precisionMultiply)

// const divideAllItems = arr => arr.reduce(divide)

const precisionDivideAllItems = arr => arr.reduce(precisionDivide)

// const sum = (...numbers) => addAllItems(numbers)

/**
 * 对传入的全部参数求和后转换为指数计数法
 * @function
 * @author YinWenwu
 * @date 2020-05-25
 * @param {Array} params
 * @returns {Number}
 */
const precisionSum = (...numbers) => precisionAddAllItems(numbers)

// const minus = (...numbers) => minusAllItems(numbers)

const precisionMinus = (...numbers) => precisionMinusAllItems(numbers)

// const times = (...numbers) => multiplyAllItems(numbers)

const precisionTimes = (...numbers) => precisionMultiplyAllItems(numbers)

// const divides = (...numbers) => divideAllItems(numbers)

const precisionDivides = (...numbers) => precisionDivideAllItems(numbers)

export default {
  add: precisionSum,
  addition: precisionAdd,
  subtract: precisionMinus,
  subtraction: precisionSub,
  multiplication: precisionMultiply,
  multiply: precisionTimes,
  division: precisionDivide,
  divide: precisionDivides,
  round
}
