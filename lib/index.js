const math = require('./math')
const regExp = require('./regExp')
const amount = require('./amount')
const page = require('./page')
const other = require('./other')
const type = require('./type')

const tools = {
  ...math,
  ...regExp,
  ...amount,
  ...page,
  ...other,
  ...type
}

module.exports = tools
module.exports.default = tools
