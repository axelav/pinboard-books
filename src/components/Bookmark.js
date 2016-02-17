
var h = require('hyperscript')
var map = require('lodash.map')
// FIXME: doesn't work; how to insert arbitrary html into hyperscript?
var parser = require('html2hscript')

module.exports = Bookmark

function Bookmark (data) {

  if (data.href === 'http://www.theawl.com/2015/10/a-poem-by-sina-queyras') {
    var hs
    parser(data.extended, function (e, hs) { console.log(hs) })
  }

  return h('li.bookmark',
    h('h4.title', data.description),
    h('a.href', {href: data.href}, data.href),
    h('div.extended', data.extended),
    h('ul.tags',
      map(data.tags, function (x) {
        return h('li', x)
      })
    )
  )
}
