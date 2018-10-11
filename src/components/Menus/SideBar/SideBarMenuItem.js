// Config
import React from 'react'

export class SideBarMenuItem extends React.Component {
  state = {
    isOpen: false
  }
  
  handleCollapse = () => {
    const isOpen = this.state.isOpen ? false : true
    this.setState({ isOpen })
  }
  
  render() {
    switch(this.props.type) {
      case "collapsible":
        const listItemClass = this.state.isOpen ? "sidebar-menu-item open" : "sidebar-menu-item",
              collapsibleClass = this.state.isOpen ? "fas fa-chevron-down rotate-180" : "fas fa-chevron-down",
              subMenu = React.Children.map(this.props.children, child => {
                if(child.type.name === "SubMenu") {
                  return React.cloneElement(child, {
                    isOpen: this.state.isOpen
                  })
                }
              })
        
        return (
          <li className={listItemClass}>
            {React.Children.map(this.props.children, child => child.type.name !== "SubMenu" ? child : "")}
            <i className={collapsibleClass} onClick={this.handleCollapse}></i>
            {subMenu}
          </li>
        )

      default:
        return <li className="sidebar-menu-item">{this.props.children}</li>
    }
  }
}

export default SideBarMenuItem