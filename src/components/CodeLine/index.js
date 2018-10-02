import React from 'react'

import './styles.css'

export const CodeLine = (props) => 
  <span className="code-line">
    {props.children}
  </span>

export default CodeLine