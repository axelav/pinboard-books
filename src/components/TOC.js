import React from 'react'
import MONTHS from 'months'

export default function (props) {
  return (
    <div className='toc'>
      <h2>Contents</h2>
      <ul className='contents'>
        {props.months.map((x) => {
          return (
            <li>
              <a href={'#' + MONTHS[x].toLowerCase()}>{MONTHS[x]}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
