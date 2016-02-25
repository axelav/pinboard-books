import React from 'react'
import { Link } from 'react-router'
import { years } from '../../lib/bookmarks'

export default (props) => {
  return (
    <ul className='year-list'>
      {years.map((year) => {
        let url = '/year/' + year
        return (
          <li key={year}>
            <Link to={url}>{year}</Link>
          </li>
        )
      })}
    </ul>
  )
}
