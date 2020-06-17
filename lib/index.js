const math = require('./math')
const regExp = require('./regExp')
const amount = require('./amount')
const page = require('./page')

const tools = {
  ...math,
  ...regExp,
  ...amount,
  ...page
}

module.exports = tools
module.exports.default = tools
