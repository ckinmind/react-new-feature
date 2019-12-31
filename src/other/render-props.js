import React, { useState, useEffect } from 'react'

const imgSrc = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576329325585&di=548405300aa198e26a9da212149ff572&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180718%2F4f4dde573c314ff18397cde919fa15ec.jpeg'


class Mouse extends React.Component {
  constructor(props) {
    super(props)
    this.handleMouseMove = this.handleMouseMove.bind(this)

    this.state = {
      x: 0,
      y: 0,
      isMove: false
    }
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    return (
      <div
        onMouseMove={this.handleMouseMove}
        onMouseEnter={() => this.setState({isMove: true})}
        onMouseLeave={() => this.setState({isMove: false})}
        style={{...this.props.style}}
      >
        <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
        {
          this.props.children(this.state)
        }
      </div>
    )
  }
}


function MouseHooks(props) {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [isMove, setIsMove] = useState(false)

  return (
    <div
      onMouseMove={(event) => {
        setX(event.clientX)
        setY(event.clientY)
      }}
      onMouseEnter={() => setIsMove(true)}
      onMouseLeave={() => setIsMove(false)}
      style={{...props.style}}
    >
      {/* ...但我们如何渲染 <p> 以外的东西? */}
      <p>The current mouse position is ({x}, {y})</p>
      {
        props.children({x, y, isMove})
      }
    </div>
  )
}


class Container extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div role="containers:Hoc">
        <h2>Render prop</h2>
        <div style={{display: 'flex'}}>
          <Mouse style={{width: '400px', height: '400px', backgroundColor: 'pink'}}>
            {
              props => {
                return (
                  <img
                    src={imgSrc}
                    style={{ position: 'absolute', left: props.x + 20, top: props.y + 20, width: '30px', height: '30px', display: props.isMove ? 'block' : 'none' }}
                  />
                )
              }
            }
          </Mouse>

          <MouseHooks style={{width: '400px', height: '400px', backgroundColor: 'purple', color: 'white', marginLeft: '20px'}}>
            {
              props => {
                return (
                  <div style={{ position: 'absolute', left: props.x, top: props.y, display: props.isMove ? 'block' : 'none' }}>
                    牛逼
                  </div>
                )
              }
            }
          </MouseHooks>
        </div>
      </div>
    )
  }
}

export default Container
