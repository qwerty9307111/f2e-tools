const util = require('../utils/index')
const checkType = require('./type')
const math = require('./math')

const number2Amount = util.curry((num, temp = '0,0', nullFormat = 'N/A', zeroFormat = 'N/A') => {
  if (num === null || num === undefined || num === '') { return nullFormat }
  if (!Number(num)) { return zeroFormat }
  const frontCurrency = temp.match(/(.*?)0/)[1] // 模板字符串中的前置币种符号
  const backCurrency = temp.match(/.*0(.*)/)[1] // 模板字符串中的后置币种符号
  const FEscape = frontCurrency ? '\\' : '' // 存在前置币种符号时，构建正则需加上转义符
  const BEscape = backCurrency ? '\\' : '' // 存在后置币种符号时，构建正则需加上转义符
  const amountStr = temp.match(new RegExp(`${FEscape}${frontCurrency}(.*)${BEscape}${backCurrency}`))[1] // 前后币种符之间的金额模板字符串
  const { length: floatLength } = amountStr.split('.')[1] || ''
  const [int, float = ''] = num.toString().split('.')
  const floatNum = math.round(float / Math.pow(10, float.length), floatLength)
  const separator = temp.match(/0(.*?)0/)[1]
  const intString = `${int}`.replace(/(\d)(?=(?:\d{3})+$)/g, '$1' + separator).replace(/-/g, '') // 将整数部分逢三一断
  const floatString = floatLength ? '.' + floatNum.split('.')[1] : ''
  return `${int < 0 ? '-' : ''}${frontCurrency}${intString}${floatString} ${backCurrency.trimStart()}`.trimEnd()
})

const amount2Number = amount => {
  const amountStr = `${amount}`
  if (!/\d/.test(amountStr)) { return null }
  const strBeforePoint = amountStr.split('.')[0]
  const strAfterPoint = amountStr.includes('.') ? amountStr.match(/.*\.(.*)/)[1] : ''
  const matchRes = {
    int: strBeforePoint.match(/\d/g),
    float: strAfterPoint.match(/\d/g)
  }
  const int = matchRes.int && matchRes.int.join('')
  const float = matchRes.float && matchRes.float.join('')
  return Number(`${amountStr.includes('-') ? '-' : ''}${int}${float ? '.' + float : ''}`)
}

const number2Percentage = number => math.precisionMultiply(number, 100) + '%'

const percentage2Number = percentage => math.precisionDivide(Number.parseFloat(percentage), 100)

const int2Chinese = (num, option = { case: 'upper' }) => {
  let number = parseFloat(num)
  if (!Number.isFinite(number)) { return num }

  const CN_UPPER_NUMS = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  const CN_LOWER_NUMS = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  const CN_NUMS = option.case === 'lower' ? CN_LOWER_NUMS : CN_UPPER_NUMS
  const CN_UPPER_INT_BASIC_UNIT = ['', '拾', '佰', '仟']
  const CN_LOWER_INT_BASIC_UNIT = ['', '十', '百', '千']
  const CN_INT_BASIC_UNIT = option.case === 'lower' ? CN_LOWER_INT_BASIC_UNIT : CN_UPPER_INT_BASIC_UNIT
  const CN_INT_UNITS = ['', '万', '亿', '兆']
  const NEGATIVE = '负'

  let cnStr = '' // 输出的中文字符串
  if (number === 0) {
    cnStr = CN_NUMS[0]
    return cnStr
  }

  const IS_NEGATIVE = number < 0

  if (IS_NEGATIVE) { number = 0 - number }

  let integerNum // 金额整数部分
  let parts // 分离金额后用的数组，预定义
  number = number.toString()
  if (number.indexOf('.') === -1) {
    integerNum = number
  } else {
    parts = number.split('.')
    integerNum = parts[0]
  }
  if (parseInt(integerNum, 10) > 0) { // 获取整型部分转换
    let zeroCount = 0
    const INT_LEN = integerNum.length
    for (let i = 0; i < INT_LEN; i++) {
      const N = integerNum.substr(i, 1)
      const P = INT_LEN - i - 1
      const Q = P / 4
      const M = P % 4
      if (N === '0') {
        zeroCount++
      } else {
        if (zeroCount > 0) {
          cnStr += CN_NUMS[0]
        }
        zeroCount = 0 // 归零
        cnStr += CN_NUMS[parseInt(N, 10)] + CN_INT_BASIC_UNIT[M]
      }
      if (M === 0 && zeroCount < 4) {
        cnStr += CN_INT_UNITS[Q]
      }
    }
    // 整型部分处理完毕
  }
  if (cnStr === '') {
    cnStr += CN_NUMS[0]
  }
  return IS_NEGATIVE ? NEGATIVE + cnStr : cnStr
}

const float2Chinese = (num, option = { case: 'upper', type: 'number' }) => {
  let number = parseFloat(num)
  if (!Number.isFinite(number)) { return '' }

  const CN_UPPER_NUMS = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  const CN_LOWER_NUMS = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  const CN_NUMS = option.case === 'lower' ? CN_LOWER_NUMS : CN_UPPER_NUMS
  const CN_DEC_UNITS = ['角', '分', '毫', '厘']

  let cnStr = '' // 输出的中文字符串
  if (number === 0) { return CN_NUMS[0] }

  let decimalNum // 小数部分
  let parts // 分离后用的数组，预定义
  number = number.toString()
  if (number.indexOf('.') === -1) {
    decimalNum = ''
  } else {
    parts = number.split('.')
    decimalNum = option.type === 'money' ? parts[1].substr(0, 4) : parts[1]
  }
  if (decimalNum) { // 小数部分
    const decLen = decimalNum.length
    for (let i = 0; i < decLen; i++) {
      const N = decimalNum.substr(i, 1)
      if (option.type === 'money') {
        if (N !== '0') {
          cnStr += CN_NUMS[Number(N)] + CN_DEC_UNITS[i]
        }
      } else {
        cnStr += CN_NUMS[Number(N)]
      }
    }
  }
  return cnStr
}

const number2ChineseWithOption = util.curry((option, amount) => {
  if (!checkType.isObject(option)) { throw new Error('param "option" type error') }
  const MAX_NUM = 999999999999999.9 // 最大处理的数字
  if (amount >= MAX_NUM) { return amount }
  const CN_INT_LAST = option.type === 'money' ? '元' : '点'
  const CN_INTEGER = '整'
  const INT_PART = int2Chinese(amount, option)
  const FLOAT_PART = float2Chinese(amount, option)
  if (FLOAT_PART) {
    return INT_PART + CN_INT_LAST + FLOAT_PART
  }
  return INT_PART + (option.type === 'money' ? CN_INT_LAST + CN_INTEGER : '')
})

const amount2Chinese = number2ChineseWithOption({ type: 'money', case: 'upper' })
const number2Chinese = number2ChineseWithOption({ type: 'number', case: 'upper' })

module.exports = {
  number2Amount,
  amount2Number,
  number2Percentage,
  percentage2Number,
  amount2Chinese,
  number2Chinese,
  number2ChineseWithOption
}
