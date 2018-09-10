import React from 'react'
import DragListContext from './DragListContext'

export const DragListItem = (props) => {
  return (
    <DragListContext.Consumer>
      { // Retrieve the functions from DragListContext to establish a connection to DragList
        context => 
          <li data-id={props.id} 
              className="listItem" 
              draggable="true" 
              onDragEnd={context.functions.dragEnd} 
              onDragStart={context.functions.dragStart}
          >
            { // Iterate through children and apply listColumn styles and className prop to items
              React.Children.map(props.children, child => {
                const classname = child.props.className ? child.props.className : ""
                return React.cloneElement(child, {
                  className: "listColumn " + classname
                })   
              })
            }
          </li>
      }
    </DragListContext.Consumer>
  )
}

export default DragListItem
