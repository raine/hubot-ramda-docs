const { mdPre } = require('./markdown')
const DOCS_URL = 'http://ramdajs.com/docs/'

const formatRamdaDocsLink = (name, sig) => 
  [mdPre(`R.${name} ∷ ${sig.replace(/->/g, '→')}`), `${DOCS_URL}#${name}`]

module.exports = formatRamdaDocsLink
