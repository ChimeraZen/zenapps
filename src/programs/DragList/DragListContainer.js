import React from 'react'

export const DragListContainer = (props) => {
  return (
    <ul onDragOver={props.dragOver}>
      {props.children}
    </ul>
  )
}

export default DragListContainer
