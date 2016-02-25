import React from 'react'
import MONTHS from 'months'

export default (props) => {
  return (
    <div className='toc'>
      <h2>Contents</h2>
      <ul className='contents'>
        {props.months.map((month) => {
          return (
            <li key={month}>
              <a href={'#' + MONTHS[month].toLowerCase()}>{MONTHS[month]}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
