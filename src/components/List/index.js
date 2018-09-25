import React from 'react'

// Styles
import './styles.css'
import {  AppBar,
          //CircularProgress,
          Button,
          Paper } from '@material-ui/core'

import {  Add,
          Delete,
          Save }from '@material-ui/icons/'

const placeholder = document.createElement("li")
placeholder.className = "placeholder listItem"

class List extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    this.setState({ ...this.props })
  }

  dragStart = (e) => {
    this.dragged = e.currentTarget
    const dragStart = Number(this.dragged.dataset.id)
    
    this.setState({ dragStart: dragStart })
  }
  
  dragEnd = (e) => {
    e.preventDefault()
    const target = e.target.tagName === "LI" ? e.target : e.target.parentNode
    const data = this.state.items
    const from = this.state.dragStart
    const to = this.state.dragOver
    
    this.dragged.removeAttribute("style")
    target.parentNode.removeChild(placeholder)
    
    data.splice(to, 0, data.splice(from, 1)[0])
    
    this.setState({ 
      items: data,
      dragStart: -1,
      dragOver: -1
    })
  }
  
  dragOver = (e) => {
    e.preventDefault()
    const target = e.target.tagName === "LI" ? e.target : e.target.parentNode
    const dragOver = Number(target.dataset.id)
    const oldDragOver = this.state.dragOver
    
    if(dragOver !== oldDragOver) {
      this.dragged.style.display = "none"
      placeholder.dataset.id = (oldDragOver > dragOver && this.state.dragStart === 0 && dragOver === 1) ? 0 : dragOver

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
  
  getHeader = (array) => {
    const headers = []
    array.map(item => Object.keys(item).map(key => headers.indexOf(key) === -1 && headers.push(key)))
    
    return (
      <li className="listHeader">
        {headers.map((header, i) => <h3 key={header + i} className="listColumn">{header}</h3>)}
      </li>
    )
  }
  
  getItems = (array) => {
    const items = array.map((item, i) => (
      <li 
        data-id={i}
        key={"item" + i}
        className="listItem"
        draggable='true'
        onDragEnd={this.dragEnd}
        onDragStart={this.dragStart}
      >
        <input className="listColumn" data-id={i} name="title" onChange={this.handleChange} value={item.title} />
        <input className="listColumn" data-id={i} name="route" onChange={this.handleChange} value={item.route} />
      </li>
    ))
    
    return items
  }
  
  handleChange = (e) => {
    const id = Number(e.target.dataset.id)
    const name = e.target.name
    const value = e.target.value
    const items = this.state.items
    
    items[id][name] = value
    
    this.setState({
      items
    })
  }
  
  handleDelete = () => {
    const checked = this.state.checked
    const items = this.state.items
    
    checked.forEach(i => items.splice(i, 1))
    this.setState({ items: items })
  }
  
  handleNew = () => {
    const items = this.state.items
    const newItem = { route: "", title: "" }
    
    items.push(newItem)
    
    this.setState({
      items
    })
  }
  
  handleSave = () => {
    const name = this.props.name
    this.props.onSave(name, this.state.items)
  }
  
  render() {
    const header = this.state.items && this.getHeader(this.state.items)
    const items = this.state.items && this.getItems(this.state.items)
    
    if(items) {
      return (
        <Paper className="draggableList" elevation={0} square={true}>
          <AppBar position="static" color="default" elevation={0} className="appBar">
            <Button 
              className="newButton" 
              variant="contained" 
              size="small" 
              onClick={this.handleNew}
            >
              <Add />
            </Button>
            
            <Button 
              className="saveButton" 
              variant="contained" 
              size="small" 
              onClick={this.handleSave}
            >
              <Save />
            </Button>
            
            <Button 
              className="deleteButton" 
              variant="contained" 
              color="default" 
              size="small" 
              onClick={this.handleDelete}
            >
              <Delete />
            </Button>
          </AppBar>
          <ul onDragOver={this.dragOver}>
            {header}
            {items}
          </ul>
        </Paper>
      )
    } else {
      return null
    }
  }
}

export default List
