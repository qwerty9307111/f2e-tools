import checkType from './type.js'

const getPrefix = val => {
  const matchFront = `${val}`.match(/^\+?86[ -]?|^\+?0[ -]?|^\+?17951[ -]?|^\+?12593[ -]?/)
  let prefix = ''
  if (matchFront) prefix = matchFront[0]
  return [prefix, `${val}`.replace(prefix, '')]
}

const hideMiddlePhoneNumber = (phoneNumber, replaceStr = '*') => {
  const [prefix, str] = getPrefix(phoneNumber)
  const len = `${str}`.length
  if (!Number(str) || len <= 7) return phoneNumber
  const regExp = new RegExp(`^(\\d{3})\\d{${len - 3 - 4}}(\\d{4})$`)
  return prefix + `${str}`.replace(regExp, `$1${new Array(len - 3 - 4).fill(replaceStr).join('')}$2`)
}

const hideFrontNumber = (targetNumber, replaceStr = '') => {
  const [prefix, str] = getPrefix(targetNumber)
  const len = `${str}`.length
  if (len <= 4 || !Number(str)) return targetNumber
  const replaceLength = len - 4
  const regExp = new RegExp(`^\\d{${replaceLength}}(\\d{4})$`)
  return (replaceStr && prefix) + `${str}`.replace(regExp, `${new Array(replaceLength).fill(replaceStr).join('')}$1`)
}

const outOfNumber = (number, maxNumber = 99) => checkType.isFinite(Number(number)) && Number(number) > Number(maxNumber) ? `${maxNumber}+` : number

export default {
  hideMiddlePhoneNumber,
  hideFrontNumber,
  outOfNumber
}
