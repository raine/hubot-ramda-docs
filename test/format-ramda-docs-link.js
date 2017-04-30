const assert = require('assert')
const formatRamdaDocsLink = require('../src/format-ramda-docs-link')
const { apply, pipe } = require("ramda");
const { mdLinkSlack, mdLink } = require('../src/markdown');

describe('formatRamdaDocsLink', () => {
  it('formats a link', () => {
    assert.equal(pipe(formatRamdaDocsLink, apply(mdLink))('prop', 's -> {s: a} -> a | Undefined'),
        '[`R.prop ∷ s → {s: a} → a | Undefined`](http://ramdajs.com/docs/#prop)')
  })
  it('formats a link for slack', () => {
    assert.equal(pipe(formatRamdaDocsLink, apply(mdLinkSlack))('prop', 's -> {s: a} -> a | Undefined'),
        '<http://ramdajs.com/docs/#prop|`R.prop ∷ s → {s: a} → a | Undefined`>');
  })
})
