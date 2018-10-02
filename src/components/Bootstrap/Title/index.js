import React from 'react'

import './styles.css'

export const Title = (props) => {
  const classNames = ["title"]
  
  props.withPadding && classNames.push("with-padding")
  props.className && classNames.push(props.className)
  
  switch(props.type) {
    case "primary":
      return (
        <h1 className={classNames.join(" ")}>
          {props.children}
        </h1>
      )
      
    case "simple":
      return (
        <h3 className={classNames.join(" ")}>
          {props.children}
        </h3>
      )
      
    default:
      break
      
  }
}

export default Title