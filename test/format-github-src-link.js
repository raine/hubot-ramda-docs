const assert = require('assert')
const formatGithubSrcLink = require('../src/format-github-src-link')

describe('formatGithubSrcLink', () => {
  it('formats a link', () => {
    assert.equal(formatGithubSrcLink('prop'),
                 '[Ⓢ](https://github.com/ramda/ramda/blob/master/src/prop.js)')
  })
})
