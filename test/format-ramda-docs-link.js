const assert = require('assert')
const formatRamdaDocsLink = require('../src/format-ramda-docs-link')

describe('formatRamdaDocsLink', () => {
  it('formats a link', () => {
    assert.equal(formatRamdaDocsLink('prop', 's -> {s: a} -> a | Undefined'),
                 '[`R.prop ∷ s → {s: a} → a | Undefined`](http://ramdajs.com/docs/#prop)')
  })
})
