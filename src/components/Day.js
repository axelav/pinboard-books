import React from 'react'
import formatDate from '../../lib/format-dates'

import Bookmark from './Bookmark'

export default (props) => {
  let date = formatDate(props.day[0].datetime)
  return (
    <div className='day'>
      <h3>{date}</h3>
      <ul>
        {props.day.map((bookmark) => {
          return <Bookmark key={bookmark.hash} bookmark={bookmark} />
        })}
      </ul>
    </div>
  )
}
