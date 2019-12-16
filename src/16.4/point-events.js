import React, { Component } from 'react'
import './point-events.css'

class App extends Component {
  render() {
    return (
      <div className="pe-app">
        <header className="pe-app-header">
          <h1 className="pe-app-title">Welcome to React sample of Point Events</h1>
        </header>
        <div className="pe-app-intro">
          <DragItem />
        </div>
      </div>
    );
  }
}

const CIRCLE_DIAMETER = 110

class DragItem extends React.Component {
  state = {
    gotCapture: false,
    circleLeft: 500,
    circleTop: 100,
  }
  isDragging = false
  previousLeft = 0
  previousTop = 0

  onDown = e => {
    this.isDragging = true
    e.target.setPointerCapture(e.pointerId)
    this.getDelta(e)
  }

  onMove = e => {
    if (!this.isDragging) {
      return
    }
    const {left, top} = this.getDelta(e)

    this.setState(({circleLeft, circleTop}) => ({
      circleLeft: circleLeft + left,
      circleTop: circleTop + top,
    }))
  }

  onUp = e => (this.isDragging = false)
  onGotCapture = e => this.setState({gotCapture: true})
  onLostCapture = e =>
    this.setState({gotCapture: false})

  getDelta = e => {
    const left = e.pageX
    const top = e.pageY
    const delta = {
      left: left - this.previousLeft,
      top: top - this.previousTop,
    }
    this.previousLeft = left
    this.previousTop = top
    return delta
  }

  render() {
    const {gotCapture, circleLeft, circleTop} = this.state

    const boxStyle = {
      border: '2px solid #cccccc',
      margin: '10px 0 20px',
      minHeight: 400,
      width: '100%',
      position: 'relative',
    }

    const circleStyle = {
      width: CIRCLE_DIAMETER,
      height: CIRCLE_DIAMETER,
      borderRadius: CIRCLE_DIAMETER / 2,
      position: 'absolute',
      left: circleLeft,
      top: circleTop,
      backgroundColor: gotCapture ? 'red' : 'green',
      touchAction: 'none',
    }

    return (
      <div style={boxStyle}>
        <div
          style={circleStyle}
          onPointerDown={this.onDown}
          onPointerMove={this.onMove}
          onPointerUp={this.onUp}
          onPointerCancel={this.onUp}
          onGotPointerCapture={this.onGotCapture}
          onLostPointerCapture={this.onLostCapture}
        />
      </div>
    );
  }
}

export default App
