import React from 'react'
import { Link } from 'react-router'
import { years } from '../../lib/bookmarks'

export default function (props) {
  return (
    <ul className='year-list'>
      {years.map((x) => {
        let url = '/year/' + x
        return (
          <li key={x}>
            <Link to={url}>{x}</Link>
          </li>
        )
      })}
    </ul>
  )
}
