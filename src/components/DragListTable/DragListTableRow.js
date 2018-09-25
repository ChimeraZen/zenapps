import React from 'react'
import { DragListTableContext } from './'

export const DragListTableRow = (props) => {
  const rowClass = props.isHeader ? "listHeader " : "",
        classname = props.className ? rowClass + props.className : rowClass
  
  return (
    <DragListTableContext.Consumer>
      {context => 
        <li 
          data-id={props.id} 
          data-type="item"
          className={"listRow " + classname} 
          draggable
          onDragStart={context.functions.dragStart}
          onDragEnd={context.functions.dragEnd}
        >
          {props.children}
        </li>
      }
    </DragListTableContext.Consumer>
  )
}

export default DragListTableRow
