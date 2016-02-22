import React from 'react'

export default (props) => {
  return (
    <li className='bookmark'>
      <h4 className='title'>{props.bookmark.description}</h4>
      <a href={props.bookmark.href}>{props.bookmark.href}</a>
      <div className='extended'>{props.bookmark.extended}</div>
      <ul className='tags'>
        {props.bookmark.tags.map((tag) => <li>{tag}</li>)}
      </ul>
    </li>
  )
}
