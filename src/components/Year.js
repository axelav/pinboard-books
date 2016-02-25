import React from 'react'

import userConfig from '../../conf/user'
import bookmarksByYear, { years } from '../../lib/bookmarks'
import groupBy from 'lodash.groupBy'

import Front from './Front'
import Colophon from './Colophon'
import Cover from './Cover'
import TOC from './TOC'
import Months from './Months'

export default (props) => {
  let selectedYear = props.params.year
  // TODO: this?
  // let startYear = years[0]
  // let volume = selectedYear - years[0] + 1
  // let bookmarks = bookmarksByYear[selectedYear]
  //

  let data = {
    startYear: years[0],
    volume: selectedYear - years[0] + 1,
    // TODO: user -> author
    user: userConfig,
    bookmarks: bookmarksByYear[selectedYear]
  }

  // TODO: add Bookmarks component that is parent of TOC & Months
  // calc monthly bookmarks & months there
  // <Bookmarks bookmarks={bookmarksByYear} />
  //   <TOC months={selectedMonths} />
  //   <Months bookmarks={bookmarksByMonth} />
  // </Bookmarks>
  let bookmarksByMonth = groupBy(data.bookmarks, (x) => new Date(x.datetime).getMonth())
  let selectedMonths = Object.keys(bookmarksByMonth)

  return (
    <div className='year'>
      <Front year={selectedYear} user={userConfig} />
      <Colophon year={selectedYear} startYear={data.startYear} user={userConfig}/>
      <Cover year={selectedYear} volume={data.volume} user={userConfig} />
      <TOC months={selectedMonths} />
      <Months bookmarksByMonth={bookmarksByMonth} />
    </div>
  )
}
// TODO: create tag index
