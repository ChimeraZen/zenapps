import React from 'react'

const SimpleListItem = (props) => {
  const classNames = props.className ? "simple-list-item " + props.className : "simple-list-item"
  return (
    <li className={classNames}>
      {props.children}
    </li>
  )
}

export default SimpleListItem