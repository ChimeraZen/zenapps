import React from 'react'

// Components
import { DragListTableContext } from './'

// Styles
import './styles.css'
import { Paper } from '@material-ui/core'

const placeholder = document.createElement("li")
placeholder.className = "placeholder listItem"

export default class DragListTable extends React.Component {
  componentDidMount() {
    // If the first item is an array, no header was supplied as a child
    const header = Array.isArray(this.props.children[0]) ? false : this.props.children[0],
          items = header ? this.props.children[1] : this.props.children[0],
          order = this.props.order ? this.props.order : null,
          functions = {
            dragEnd: this.dragEnd,
            dragStart: this.dragStart
          }
    
    // Need to rebuild header when header reordered
    // Header needs to be rebuilt before items
    
    this.setState({
      functions,
      header,
      items,
      order,
    })
  }

  dragStart = (e) => {
    // Grab the data-id and type of the dragged item and set it to the state
    this.dragged = e.currentTarget
    const dragStart = isNaN(this.dragged.dataset.id) ? this.dragged.dataset.id : Number(this.dragged.dataset.id),
          dragType = this.dragged.dataset.type
    
    this.setState({ dragStart: dragStart, dragType: dragType })
  }
  
  dragEnd = (e) => {
    e.preventDefault()
    const target = e.target.tagName === "LI" ? e.target : e.target.parentNode,
          isHeader = target.dataset.type === "header" ? true : false,
          data = isHeader ? this.state.order : this.state.items,
          from = this.state.dragStart,
          to = this.state.dragOver
    
    // Show the original dragged and remove placeholder
    this.dragged.removeAttribute("style")
    //target.parentNode.removeChild(placeholder)
    
    // Reorder items
    isHeader
      ? data.splice(data.indexOf(to), 0, data.splice(data.indexOf(from), 1)[0])
      : data.splice(to, 0, data.splice(from, 1)[0])
    
    // Apply new indexes to children and update state
    if(isHeader) {
      const items = React.Children.map(this.state.items, (child, i) => 
        React.Children.map(child.props.children, (subchild, ii) => 
          console.log(subchild.props.id)
        )
      )
      
      this.setState({ 
        order: data,
      })
    } else {
      const items = React.Children.map(data, (child, i) => {
        return React.cloneElement(child, {
          id: i 
        })
      })

      this.setState({ 
        items: items
      })
    }
  }
  
  dragOver = (e) => {
    e.preventDefault()
    const target = e.target,
          type = target.dataset.type,
          dragOver = target.dataset.id,
          oldDragOver = this.state.dragOver
    
    // Do nothing if still over the same item or not the same type as this.dragged
    if(dragOver !== oldDragOver && type === this.dragged.dataset.type) {

      // Hide the dragged item and give the placeholder the id of the item that's been dragged over
      this.dragged.style.display = "none"
      placeholder.dataset.id = (oldDragOver > dragOver && this.state.dragStart === 0 && dragOver === 1) ? 0 : dragOver

      // Determine the direction the item is moving in the list and insert the placeholder accordingly
      if(dragOver === this.state.items.length - 1) {
        target.parentNode.append(placeholder)
      } else if(oldDragOver < dragOver) {
        target.parentNode.insertBefore(placeholder, target.nextSibling)
      } else if(oldDragOver > dragOver) {
        target.parentNode.insertBefore(placeholder, target)
      }

      this.setState({ 
        oldDragOver: oldDragOver, 
        dragOver: dragOver
      })
    }
  }
  
  render() {
    return this.state !== null && 
      <DragListTableContext.Provider value={this.state}>
        <Paper elevation={0} square={true}>
          <ul className="dragListTable" onDragOver={this.dragOver}>
            {this.state.header}
            {this.state.items}
          </ul>
        </Paper>
      </DragListTableContext.Provider>
  }
}
