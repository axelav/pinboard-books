import React from 'react'
import groupBy from 'lodash.groupBy'
import MONTHS from 'months'

import Day from './Day'

export default function (props) {
  return (
    <div className='months'>
      {Object.keys(props.bookmarksByMonth).map((monthKey) => {
        let month = props.bookmarksByMonth[monthKey]
        let monthName = MONTHS[(month[0].datetime).getMonth()]
        let bookmarksByDay = groupBy(month, (x) => {
          return new Date(x.datetime).getDate()
        })
        return (
          <div id={monthName.toLowerCase()} className='month'>
            <h2>{monthName}</h2>
            {Object.keys(bookmarksByDay).map((dayKey) => {
              let day = bookmarksByDay[dayKey]
              return (
                <Day day={day} />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
