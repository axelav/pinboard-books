import React from 'react'

export default (props) => {
  let currentYear = (new Date()).getFullYear()

  return (
    <div className='colophon'>
      <p>&copy; {props.startYear}&mdash;{currentYear} {props.user.fullname}</p>
      <br />
      <span>Data extracted from https://pinboard.in/u:{props.user.username}</span>
    </div>
  )
}
