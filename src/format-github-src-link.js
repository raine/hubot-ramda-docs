const { pipe } = require('ramda')

const formatGithubSrcLink = (name, sig) => 
  [sig, `https://github.com/ramda/ramda/blob/master/src/${name}.js`]

module.exports = formatGithubSrcLink
