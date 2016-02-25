import React from 'react'

export default (props) => {
  return (
    <div className='cover'>
      <h1>{props.user.title}: {props.year}</h1>
      <h2>{props.user.fullname}</h2>
      <h3>Volume {props.volume}</h3>
    </div>
  )
}
