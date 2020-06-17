const _ = require('lodash')
const util = require('../utils')

const pow = _.curry((num, pows) => Math.pow(num, pows))

const multiply = _.curry((a, b) => a * b)

const precisionMultiply = _.curry((a, b) => _.flow([multiply, toPrecision])(a, b))

const divide = _.curry((a, b) => a / b)

const precisionDivide = _.curry((a, b) => _.flow([divide, toPrecision])(a, b))

const getFloatLength = num => (`${num}`.split('.')[1] || '').length

const magnification = _.curry((times, num) => precisionMultiply(num, pow(10, times)))

/**
 * 在数字的值超出指定位数时将其转换为指数计数法
 * @function
 * @author YinWenwu
 * @date 2020-05-25
 * @param {Number} num 需要转换的数值
 * @param {1~21} precision=12 指定位数
 * @returns {Number}
 */
const toPrecision = _.curry((num, precision = 12) => Number(num.toPrecision(precision)))

/**
 * 将数值按银行家舍入法转换为指定位数的小数
 * @function
 * @author YinWenwu
 * @date 2020-05-25
 * @param {Number} num 需要转换的数值
 * @param {Number} fixed=2 小数位数，默认保留两位小数
 * @returns {String}
 */
const toFixed = _.curry((num, fixed = 2) => toPrecision(num).toFixed(fixed))

/**
 * 将数值按四舍五入转换为指定位数的小数
 * @function
 * @author YinWenwu
 * @date 2020-05-25
 * @param {Number} num 需要转换的数值
 * @param {Number} round=2 小数位数，默认保留两位小数
 * @returns {String}
 */
const round = _.curry((num, rounds = 2) => {
  const res = Math.round(toPrecision(num) * pow(10)(rounds)) / pow(10)(rounds)
  const [int, float = ''] = res.toString().split('.')
  return `${int}.${float.padEnd(rounds, 0)}`
})

/**
 * 两数相加
 * @function
 * @author YinWenwu
 * @date 2020-05-25
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
const add = _.curry((a, b) => a + b)

/**
 * 两数相加后转换为指数计数法
 * @function
 * @author YinWenwu
 * @date 2020-05-25
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
const precisionAdd = _.curry((a, b) => {
  const toMagnification = magnification(_.max([getFloatLength(a), getFloatLength(b)]))
  return precisionDivide(_.flow([add, toPrecision])(toMagnification(a), toMagnification(b)), toMagnification(1))
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
const sub = _.curry((a, b) => a - b)

/**
 * 两数相减后转换为指数计数法
 * @function
 * @author YinWenwu
 * @date 2020-05-25
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
const precisionSub = _.curry((a, b) => {
  const toMagnification = magnification(_.max([getFloatLength(a), getFloatLength(b)]))
  return precisionDivide(_.flow([sub, toPrecision])(toMagnification(a), toMagnification(b)), toMagnification(1))
})

// addAllItems :: Array -> Number
const addAllItems = util.reduce(add)

const precisionAddAllItems = util.reduce(precisionAdd)

const minusAllItems = util.reduce(sub)

const precisionMinusAllItems = util.reduce(precisionSub)

const multiplyAllItems = util.reduce(multiply)

const precisionMultiplyAllItems = util.reduce(precisionMultiply)

const divideAllItems = util.reduce(divide)

const precisionDivideAllItems = util.reduce(precisionDivide)

/**
 * 对传入的全部参数求和
 * @function
 * @author YinWenwu
 * @date 2020-05-25
 * @param {Array} params
 * @returns {Number}
 */
const sum = (...numbers) => addAllItems(numbers)

/**
 * 对传入的全部参数求和后转换为指数计数法
 * @function
 * @author YinWenwu
 * @date 2020-05-25
 * @param {Array} params
 * @returns {Number}
 */
const precisionSum = (...numbers) => precisionAddAllItems(numbers)

const minus = (...numbers) => minusAllItems(numbers)

const precisionMinus = (...numbers) => precisionMinusAllItems(numbers)

const times = (...numbers) => multiplyAllItems(numbers)

const precisionTimes = (...numbers) => precisionMultiplyAllItems(numbers)

const divides = (...numbers) => divideAllItems(numbers)

const precisionDivides = (...numbers) => precisionDivideAllItems(numbers)

module.exports = {
  add,
  precisionAdd,
  sub,
  precisionSub,
  multiply,
  precisionMultiply,
  divide,
  precisionDivide,
  sum,
  precisionSum,
  minus,
  precisionMinus,
  times,
  precisionTimes,
  divides,
  precisionDivides,
  round,
  toFixed,
  toPrecision
}