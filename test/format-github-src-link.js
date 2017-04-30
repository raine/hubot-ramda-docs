const { apply, pipe } = require('ramda')
const assert = require('assert')
const { mdLink, mdLinkSlack } = require('../src/markdown');
const formatGithubSrcLink = require('../src/format-github-src-link')

describe('formatGithubSrcLink', () => {
  it('formats a link', () => {
    assert.equal(pipe(formatGithubSrcLink, apply(mdLink))('prop', 'Ⓢ'),
        '[Ⓢ](https://github.com/ramda/ramda/blob/master/src/prop.js)');
  })
  it('formats a link for slack', () => {
    assert.equal(pipe(formatGithubSrcLink, apply(mdLinkSlack))('prop', 'Ⓢ'),
        '<https://github.com/ramda/ramda/blob/master/src/prop.js|Ⓢ>');
  })
})
