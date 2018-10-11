// Config
import React from 'react'

// Styles
import './styles.css'

export const SideBarMenu = (props) => 
  <div className="sidebar-menu">
    <ul>
      {props.children}
    </ul>
  </div>

export default SideBarMenu
