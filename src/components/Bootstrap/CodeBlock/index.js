// Config
import React from 'react'

// Styles
import './styles.css'

export default class CodeBlock extends React.Component {
  componentDidMount() {
    const lines = React.Children.map(this.props.children, child => {
      return child.split("\n")
    })
    
    this.setState({ lines })
  }
  
  render() {
    const classNames = ["code-block"]
    
    !this.props.noPadding && classNames.push("with-padding")
    this.props.className && classNames.push(this.props.className)
    
    return this.state !== null && 
      <div className={classNames.join(" ")}>
        {this.state.lines.map((line, i) => {
          return <div key={"line-item-" + i} className="line-item">
            <span className="line-number">{i}</span>
            <span className="line-text">
              {line}
            </span>
          </div>
        }
        )}
      </div>
  }
}
