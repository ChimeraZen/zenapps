import React from 'react'

import './styles.css'

export const Paragraph = (props) => {
  const classNames = ["paragraph"]
  
  !props.noPadding && classNames.push("with-padding")
  props.className && classNames.push(props.className)
  
  return (
    <p className={classNames.join(" ")}>
      {props.children}
    </p>
  )
}

export default Paragraph