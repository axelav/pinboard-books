import React from 'react'

import userConfig from '../../conf/user'
import bookmarksByYear, { years } from '../../lib/bookmarks'

export default function (props) {
  let year = props.params.year
  let data = {
    year: year,
    startYear: years[0],
    volume: year - years[0] + 1,
    user: userConfig,
    count: bookmarksByYear[year].length,
    bookmarks: bookmarksByYear[year]
  }
  return (
    <div>
      <div>{data.year}</div>
    </div>
  )
}



// var h = require('hyperscript')
// var groupBy = require('lodash.groupby')

// var Front = require('./Front')
// var Colophon = require('./Colophon')
// var Cover = require('./Cover')
// var TOCList = require('./TOCList')
// var Months = require('./Months')

// module.exports = Year

// function Year (data) {
//   var bookmarksByMonth = groupBy(data.bookmarks, function (x) {
//     return new Date(x.datetime).getMonth()
//   })
//   return h('div.year',
//     Front(data),
//     Colophon(data),
//     Cover(data),
//     TOCList(bookmarksByMonth),
//     Months(bookmarksByMonth)
//   )

//   // TODO: create tag index
// }
