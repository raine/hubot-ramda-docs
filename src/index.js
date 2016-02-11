// Description:
//   docs

const getRamdaFunctionDocs = require('./get-ramda-function-docs')
const formatRamdaDocsLink = require('./format-ramda-docs-link')
const formatGithubSrcLink = require('./format-github-src-link')
const { join } = require('ramda')

const unwords = join(' ')
const mention = (user) => `@${user}`

module.exports = (bot) =>
  bot.hear(/^`?R\.([a-z]+)`?(?: @(\w[\w-]+))?\s?$/i, (res) => {
    const [_, fnName, user] = res.match

    getRamdaFunctionDocs(fnName)
      .fork(err => res.reply(err),
            fnDoc =>
              res.reply(unwords([
                (user ? mention(user) : ''),
                formatRamdaDocsLink(fnDoc.name, fnDoc.sig),
                formatGithubSrcLink(fnDoc.name)
              ])))
  })
