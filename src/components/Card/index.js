import React from 'react'
import './styles.css'

export default class Card extends React.Component {
  render() {
    const classnames = this.props.className ? this.props.className + " zen-card" : "zen-card"
    return (
      <div className={classnames}>
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