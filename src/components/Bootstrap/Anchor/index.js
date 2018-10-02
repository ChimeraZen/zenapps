import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

export const Anchor = (props) => {
  const classNames = []
  
  props.withPadding && classNames.push("with-padding")
  props.className && classNames.push(props.className)
  
  return (
    <a href={props.href} className={classNames.join(" ")}>
      {props.children}
    </a>
  )
}

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
}

export default Anchor