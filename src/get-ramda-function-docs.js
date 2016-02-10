const Task = require('data.task')
const { equals, find, toLower, useWith, where } = require('ramda')
const superagent = require('superagent')

const equalsCaseInsens = useWith(equals, [ toLower, toLower ])

//    fetchRamdaDocs :: () -> Future Error [Object]
const fetchRamdaDocs = () =>
  new Task((reject, resolve) =>
    superagent
      .get('http://raine.github.io/ramda-json-docs/latest.json')
      .end((err, res) => err ? reject(err) : resolve(res.body)))

//    getRamdaFunctionDocs :: String -> Future Error Object
const getRamdaFunctionDocs = (str) =>
  fetchRamdaDocs()
    .chain(docs => {
      return new Task((reject, resolve) => {
        const fnObj = find(where({ name: equalsCaseInsens(str) }), docs)
        if (fnObj) resolve(fnObj)
        else       reject(new Error('No such function ' + str))
      })
    })

module.exports = getRamdaFunctionDocs
