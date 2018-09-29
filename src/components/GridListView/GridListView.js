import React from 'react'
import './styles.css'

class GridListView extends React.Component {
  state = {
    isListView: true
  }

  handleViewChange = (e) => {
    const isListView = e.target.getAttribute('data-type') === 'list' ? true : false

    this.setState({
      isListView: isListView
    })
  }
  
  render() {
    const classNames = this.props.className ? "grid-list-view " + this.props.className : "grid-list-view"
    const gridListHeader = []
    const gridListItems = []

    React.Children.forEach(this.props.children, child => {
      if(child.type.name === "GridListHeader") {
        const header = React.cloneElement(child, {
          key: "header",
          isListView: this.state.isListView,
          handleViewChange: this.handleViewChange
        })
        gridListHeader.push(header)
      } else if(child.type.name === "GridListItem") {
        gridListItems.push(child)
      }
    })

    return (
      <div className={classNames}>
        {gridListHeader}
        <ul className={this.state.isListView ? "list" : "grid"}>
          {gridListItems}
        </ul>
      </div>
    )
  }
}

export default GridListView