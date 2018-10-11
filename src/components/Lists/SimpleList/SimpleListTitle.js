// Config
import React from 'react'

const SimpleListTitle = (props) => {
  const classNames = props.className ? "simple-list-title " + props.className : "simple-list-title"
  return (
    <h3 className={classNames}>
      {props.children}
    </h3>
  )
}

export default SimpleListTitle
