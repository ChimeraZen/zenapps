import React, { Component } from 'react'

import './css/ListView.css'

import { GridListViewContext } from './GridListViewProvider'

export default class ListView extends Component {
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
      <GridListViewContext.Consumer>
        {(context) => (
          <React.Fragment>
            <ul className={this.state.isLoaded ? "grid-list-view list" : "grid-list-view list loading"}>
              <li>
                {Object.keys(context.state.content.items[0]).map(key => {
                  const length = Object.keys(context.state.content.items[0]).length
                  const style = {
                    width: 'calc(100% * (1/'+ length +'))'
                  }
                  return (
                    <p key={key} style={style}>{key}</p>
                  )
                })}
              </li>
              {context.state.content.items.map(item => {
                return (
                  <li key={item.title}>
                    {Object.keys(item).map(index => {
                      const length = Object.keys(item).length
                      const style = {
                        width: 'calc(100% * (1/'+ length +'))'
                      }
                      console.log(style)
                      return (
                        <p key={item[index]} style={style}>{item[index]}</p>
                      )
                    })}
                  </li>
                )
              })}
            </ul>
          </React.Fragment>
        )}
      </GridListViewContext.Consumer>
    )
  }
}
