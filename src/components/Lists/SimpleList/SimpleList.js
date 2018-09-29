import React from 'react'
import './styles.css'

const SimpleList = (props) => {
  const classNames = props.className ? "simple-list " + props.className : "simple-list"
  const title = props.title ? <h3>{props.title}</h3> : null
  return (
    <ul className={classNames}>
      {title}
      {props.children}
    </ul>
  )
}

export default SimpleList