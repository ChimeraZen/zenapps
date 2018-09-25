import React, { Component } from 'react'

import './css/GridView.css'

import { GridListViewContext } from './GridListViewProvider'

export default class GridView extends Component {
	constructor(props) {
  	super(props)
    this.state = {
    	isLoaded: false
    }
  }
  
	componentDidMount() {
    setTimeout(() => {
      this.setState({
      	isLoaded: true
      })
    },100)
  }
  
	render() {
    return (
      <div className={this.state.isLoaded ? "grid-list-view grid" : "grid-list-view grid loading"}>
        <GridListViewContext.Consumer>
          {(context) => (
            context.state.content.items.map(item => {
              return <div key={item.title} className="grid-item">
                <h3>{item.title}</h3>
                <p>{item.parent}</p>
              </div>
            })
          )}
        </GridListViewContext.Consumer>
      </div>
    )
  }
}
