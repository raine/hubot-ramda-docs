const { mdLink } = require('./markdown')
const { pipe } = require('ramda')

const formatGithubSrcUrl = (name) => 
  `https://github.com/ramda/ramda/blob/master/source/${name}.js`

const formatGithubSrcLink = pipe(formatGithubSrcUrl, mdLink('Ⓢ'))

module.exports = formatGithubSrcLink
