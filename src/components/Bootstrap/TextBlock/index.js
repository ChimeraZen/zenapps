// Config
import React from 'react'

// Styles
import './styles.css'

export const TextBlock = (props) => {
  const classNames = ["text-block"]
  
  
  props.lightText && classNames.push("light-text")
  props.darkText && classNames.push("dark-text")
  props.withPadding && classNames.push("with-padding")
  props.className && classNames.push(props.className)
  
  return (
    <div className={classNames.join(" ")}>
      {props.children}
    </div>
  )
}

export default TextBlock