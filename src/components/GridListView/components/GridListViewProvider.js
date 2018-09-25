import React, { Component } from 'react'

export const GridListViewContext = React.createContext()

export default class GridListViewProvider extends Component {
	render() {
  	return(
    	<GridListViewContext.Provider value={{state: this.props.state}}>
        {this.props.children}
      </GridListViewContext.Provider>
    )
  }
}
