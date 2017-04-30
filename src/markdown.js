const { curry } = require('ramda')

const wrap = curry((x, s) => x + s + x)
exports.mdLink = curry((text, url) => `[${text}](${url})`)
exports.mdLinkSlack = curry((text, url) => `<${url}|${text}>`)
exports.mdBold = wrap('**')
exports.mdStrike = wrap('~~')
exports.mdPre = wrap('`')
