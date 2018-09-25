import React from 'react'

import { GridListViewContext } from './GridListViewProvider'

import ListView from './ListView'
import GridView from './GridView'

const GridListItems = () => {
  return (
    <GridListViewContext.Consumer>
      {(context) => (
        <React.Fragment>
          {context.state.listOptions.isListView
            ? <ListView />
            :	<GridView />
          }
        </React.Fragment>
      )}
    </GridListViewContext.Consumer>
  )
}

export default GridListItems
