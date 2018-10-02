import React from 'react'

import './styles.css'

export const Row = (props) => {
  const classNames = ["row"]
  
  props.withPadding && classNames.push("with-padding")
  props.withWrap && classNames.push("with-wrap")
  props.className && classNames.push(props.className)
  
  return (
    <div className={classNames.join(" ")}>
      {props.children}
    </div>
  )
}

export default Row