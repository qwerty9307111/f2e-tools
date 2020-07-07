const hideMiddlePhoneNumber = (phoneNumber, replaceStr = '*') => {
  if (Number(phoneNumber) && String(phoneNumber).length === 11) {
    return `${phoneNumber}`.replace(/^(\d{3})\d{4}(\d{4})$/, `$1${new Array(4).fill(replaceStr).join('')}$2`)
  }
  return phoneNumber
}

const hideFrontPhoneNumber = (phoneNumber, replaceStr = '') => {
  if (Number(phoneNumber) && String(phoneNumber).length === 11) {
    return `${phoneNumber}`.replace(/^\d{7}(\d{4})$/, `${new Array(7).fill(replaceStr).join('')}$1`)
  }
  return phoneNumber
}

const outOfNumber = (number, maxNumber = 99) => Number.isFinite(Number(number)) && Number(number) > Number(maxNumber) ? `${maxNumber}+` : number

module.exports = {
  hideMiddlePhoneNumber,
  hideFrontPhoneNumber,
  outOfNumber
}
