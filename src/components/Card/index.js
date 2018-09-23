import React from 'react'
import './styles.css'

export default class Card extends React.Component {
  render() {
    return (
      <div className="zen-card">
        {this.props.title &&
          <div className="header">
            <h3>{this.props.title}</h3>
            <div className="accent-bar"></div>
          </div>
        }
        {this.props.children}
      </div>
    )
  }
}