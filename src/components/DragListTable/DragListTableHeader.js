import React from 'react'
import { DragListTableContext } from './'

const DragListTableHeader = (props) => {
  const classname = props.className ? props.className : ""
  
  
  return (
    <DragListTableContext.Consumer>
      {context => 
        <li 
          data-id={props.id}
          data-type="header"
          className={"listRow " + classname}
        >
          { // Iterate through children and apply isHeader to DragListTableColumn items
            React.Children.map(props.children, child => {
              return React.cloneElement(child, {
                isHeader: true
              })   
            })
          }
        </li>
      }
    </DragListTableContext.Consumer>
  )
}

export default DragListTableHeader
