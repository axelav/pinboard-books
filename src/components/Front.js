import React from 'react'

export default function (props) {
  return (
    <div className='front'>
      <h2>{props.user.title}: {props.year}</h2>
    </div>
  )
}
