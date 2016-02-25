import React from 'react'

export default (props) => {
  let tags = props.bookmark.tags.filter((tag) => tag.length > 0)

  return (
    <li className='bookmark'>
      <h4 className='title'>{props.bookmark.description}</h4>
      <a href={props.bookmark.href}>{props.bookmark.href}</a>
      <div className='extended'>{props.bookmark.extended}</div>
      {(tags.length > 0) &&
        <ul className='tags'>
          {tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      }
    </li>
  )
}
