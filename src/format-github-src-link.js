const { mdLink } = require('./markdown')
const { pipe } = require('ramda')

const formatGithubSrcUrl = (name) => 
  `https://github.com/ramda/ramda/blob/master/src/${name}.js`

const formatGithubSrcLink = pipe(formatGithubSrcUrl, mdLink('🔍'))

module.exports = formatGithubSrcLink
