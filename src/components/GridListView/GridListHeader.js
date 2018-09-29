import React from 'react'
import './styles.css'

const GridListHeader = (props) => {
  const classNames = props.className ? "grid-list-header " + props.className : "grid-list-header"
  return (
    <div className={classNames}>
      <h3>{props.children}</h3>
      <div className="grid-list-options">
        <i className={!props.isListView ? "fas fa-th-large active" : "fas fa-th-large"} data-type="grid" onClick={props.handleViewChange}></i>
        <i className={props.isListView ? "fas fa-th-list active" : "fas fa-th-list"} data-type="list" onClick={props.handleViewChange}></i>
      </div>
    </div>
  )
}

export default GridListHeader