// Config
import React from 'react'

export class DropListItem extends React.Component {
  state = {
    isOpen: false
  }
  
  handleCollapse = () => {
    const isOpen = this.state.isOpen ? false : true
    this.setState({ isOpen: isOpen })
  }
  
  render() {
    const collapsibleClass = this.state.isOpen ? "fas fa-chevron-down collapse-icon rotate-180" : "fas fa-chevron-down collapse-icon",
          title = this.props.title ? this.props.title : null
    
    switch(this.props.type) {
      case "droppable":
        const isOpen = this.state.isOpen ? " open" : ""
        return (
          <li className={"collapsible-item" + isOpen} title={title}>
            <div className="droplist-item-content">
              {React.Children.map(this.props.children, child => child.type.name !== "DropList" ? child : null)}
              <i className={collapsibleClass} onClick={this.handleCollapse}></i>
            </div>
            
            <div className="sub-list">
              {React.Children.map(this.props.children, child => child.type.name === "DropList" ? child : null)}
            </div>
          </li>
        )
        
      default:
        return (
          <li title={title}>
            <div className="droplist-item-content">
              {this.props.children}
            </div>
          </li>
        )
    }
  }
}

export default DropListItem
