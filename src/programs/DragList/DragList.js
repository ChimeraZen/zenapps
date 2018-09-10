import React from 'react'

// Components
import DragListContext from './DragListContext'
import DragListContainer from './DragListContainer'

// Styles
import './styles.css'
import { Paper } from '@material-ui/core'

const placeholder = document.createElement("li")
placeholder.className = "placeholder listItem"

export default class DragList extends React.Component {
  componentDidMount() {
    const items = this.props.children,
          functions = {
            dragEnd: this.dragEnd,
            dragStart: this.dragStart
          }
    
    this.setState({
      functions,
      items
    })
  }

  dragStart = (e) => {
    // Grab the data-id of the dragged item and set it to the state
    this.dragged = e.currentTarget
    const dragStart = Number(this.dragged.dataset.id)
    this.setState({ dragStart: dragStart })
  }
  
  dragEnd = (e) => {
    e.preventDefault()
    const target = e.target.tagName === "LI" ? e.target : e.target.parentNode,
          data = this.state.items,
          from = this.state.dragStart,
          to = this.state.dragOver
    
    // Show the original dragged and remove placeholder
    this.dragged.removeAttribute("style")
    target.parentNode.removeChild(placeholder)
    
    // Redorder items
    data.splice(to, 0, data.splice(from, 1)[0])
    
    // Apply new indexes to children
    const items = React.Children.map(data, (child, i) => {
      return React.cloneElement(child, {
        id: i 
      })
    })
    
    this.setState({ 
      items: items
    })
  }
  
  dragOver = (e) => {
    e.preventDefault()
    const target = e.target.tagName === "LI" ? e.target : e.target.parentNode,
          dragOver = Number(target.dataset.id),
          oldDragOver = this.state.dragOver
    
    // Do nothing if still over the same item
    if(dragOver !== oldDragOver) {
      
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
    return (
      this.state !== null && 
        <DragListContext.Provider value={this.state}>
          <Paper className="draggableList" elevation={0} square={true}>
            <DragListContainer dragOver={this.dragOver}>
              {this.state.items}
            </DragListContainer>
          </Paper>
        </DragListContext.Provider>
    )
  }
}
