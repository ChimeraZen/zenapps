// Config
import React from 'react'

// Styles
import './styles.css'

export const Column = (props) => {
  const classNames = ["column"]
  
  props.fullWidth && classNames.push("full-width")
  props.withPadding && classNames.push("with-padding")
  props.className && classNames.push(props.className)
  
  switch(props.type) {
    case "small":
      return (
        <div className="small-column">
          <div className={classNames.join(" ")}>
            {props.children}
          </div>
        </div>
      )
      
    case "medium":
      return (
        <div className="medium-column">
          <div className={classNames.join(" ")}>
            {props.children}
          </div>
        </div>
      )
      
    case "large":
      return (
        <div className="large-column">
          <div className={classNames.join(" ")}>
            {props.children}
          </div>
        </div>
      )
      
    case "full":
      return (
        <div className="full-column">
          <div className={classNames.join(" ")}>
            {props.children}
          </div>
        </div>
      )
      
    default:
      return (
        <div className="column">
          <div className={classNames.join(" ")}>
            {props.children}
          </div>
        </div>
      )
  }
}

export default Column
