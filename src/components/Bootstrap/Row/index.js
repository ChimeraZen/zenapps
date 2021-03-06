// Config
import React from 'react'

// Styles
import './styles.css'

export const Row = (props) => {
  const classNames = ["row"]
  
  props.withWrap && classNames.push("with-wrap")
  props.withPadding && classNames.push("with-padding")
  props.className && classNames.push(props.className)
  
  return (
    <div className={classNames.join(" ")}>
      {props.children}
    </div>
  )
}

export default Row