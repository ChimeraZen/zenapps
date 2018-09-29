import React from 'react'
import './styles.css'

const GridListItem = (props) => {
  const classNames = props.className ? "grid-list-item " + props.className : "grid-list-item"
  return (
    <li className={classNames}>
      {props.children}
    </li>
  )
}

export default GridListItem