import React from 'react'

export class SubMenu extends React.Component {
  render() {    
    return(
      <ul className="sub-menu">
        {this.props.children}
      </ul>
    )
  }
}

export default SubMenu