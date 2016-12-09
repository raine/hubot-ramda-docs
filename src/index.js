// Description:
//   docs

const getRamdaFunctionDocs = require('./get-ramda-function-docs')
const formatRamdaDocsLink = require('./format-ramda-docs-link')
const formatGithubSrcLink = require('./format-github-src-link')
const {mdLink, mdLinkSlack } = require('./markdown')
const {apply, pipe, join, trim} = require('ramda')

const unwords = join(' ')
const mention = (user) => `@${user}`

module.exports = (bot) =>
  bot.hear(/^`?R\.([a-z]+)`?(?: @(\w[\w-]+))?\s?$/i, (res) => {
    const [_, fnName, user] = res.match

    if (bot.adapterName === "slack") {
      const mdLinkFn = mdLinkSlack;
    } else {
      const mdLinkFn = mdLink;
    }

    getRamdaFunctionDocs(fnName)
      .fork(err => res.reply(err),
            fnDoc =>
              res.reply(trim(unwords([
                (user ? mention(user) : ''),
                pipe(formatRamdaDocsLink(fnDoc.name, fnDoc.sig), apply(mdLinkFn)),
                pipe(formatGithubSrcLink(fnDoc.name), mdLinkFn('Ⓢ'))
              ]))))
  })
