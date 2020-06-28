const math = require('./math')
const regExp = require('./regExp')
const amount = require('./amount')
const page = require('./page')
const other = require('./other')

const tools = {
  ...math,
  ...regExp,
  ...amount,
  ...page,
  ...other
}

module.exports = tools
module.exports.default = tools
