import React from 'react'
import { DragListTableContext } from './'

export const DragListTableColumn = (props) => {
  const classname = props.className ? props.className : ""
  
  return props.isHeader
    ? <DragListTableContext.Consumer>
        {context => 
          <h3 
              data-id={props.id}
              data-type="header"
              className={"listColumn " + classname}
              draggable
              onDragStart={context.functions.dragStart}
              onDragEnd={context.functions.dragEnd}
          >
            {props.children}
          </h3>
        }
      </DragListTableContext.Consumer>
  
    : <span className={"listColumn " + classname} data-type="item">
        {props.children}
      </span>
}

export default DragListTableColumn
