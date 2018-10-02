import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

export const Column = (props) => {
  const classNames = []
  
  props.withPadding && classNames.push("with-padding")
  props.className && classNames.push(props.className)
  
  switch(props.type) {
    case "small":
      classNames.unshift("small-column")
      return (
        <div className={classNames.join(" ")}>
          {props.children}
        </div>
      )
      
    case "medium":
      classNames.unshift("medium-column")
      return (
        <div className={classNames.join(" ")}>
          {props.children}
        </div>
      )
      
    case "large":
      classNames.unshift("large-column")
      return (
        <div className={classNames.join(" ")}>
          {props.children}
        </div>
      )
      
    default:
      break
      
  }
}

Column.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Column