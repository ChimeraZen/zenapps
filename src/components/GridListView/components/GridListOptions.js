import React from 'react'

import './css/GridListOptions.css'

import { GridListViewContext } from './GridListViewProvider'

 const GridListOptions = () => {
  return (
    <div className="grid-list-options">
      <GridListViewContext.Consumer>
        {(context) => (
          <React.Fragment>
            <i className={!context.state.listOptions.isListView ? "fas fa-th-large active" : "fas fa-th-large"} data-type="grid" onClick={context.state.listOptions.handleViewChange}></i>
            <i className={context.state.listOptions.isListView ? "fas fa-th-list active" : "fas fa-th-list"} data-type="list" onClick={context.state.listOptions.handleViewChange}></i>
          </React.Fragment>
        )}
      </GridListViewContext.Consumer>
    </div>
  )
}

export default GridListOptions
