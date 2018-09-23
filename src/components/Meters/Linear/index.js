import React from 'react'
import './styles.css'

export default class LinearMeter extends React.Component {
  state = {
    barWidth: 0,
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer, 10)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  timer = () => {
    if(this.state.barWidth < this.props.percent) {
      const barWidth = this.state.barWidth + 1
      this.setState({
        barWidth: barWidth
      })
    }
  }

  render() {
    const style = {
      width: this.state.barWidth + "%",
    }
    
    return (
      <div className="linear-meter">
        <div className="linear-meter-header">
          <h4>{this.props.title}</h4>
          <span>{this.state.barWidth + "%"}</span>
        </div>
        <div className="linear-meter-bar">
          <span style={style}></span>
        </div>
      </div>
    )
  }
}
