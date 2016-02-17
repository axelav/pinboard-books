import React from 'react'

export default function (props) {
  return (
    <div className="toc">
      <h2>Contents</h2>
      <ul class="contents">
        {}
      </ul>
    </div>
  )
  
}





var h = require('hyperscript')
var map = require('lodash.map')
var keys = require('lodash.keys')

var TOCListItem = require('./TOCListItem')

module.exports = TOCList

function TOCList (data) {
  return h('div.toc',
    h('h2', 'Contents'),
    h('ul.contents',
      map(keys(data), function (x) {
        return TOCListItem(x)
      })
    )
  )
}





var h = require('hyperscript')
var months = require('months')

module.exports = TOCListItem

function TOCListItem (data) {
  return h('li',
    h('a', {href: '#' + months[data].toLowerCase()}, months[data])
  )
}
