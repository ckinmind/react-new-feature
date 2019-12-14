import React, {Component} from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {error: null, errorInfo: null }
  }

  componentDidCatch(error, errorInfo) {
    // 捕获子组件的错误并且展示错误
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
      </div>
      )
    }
    return this.props.children
  }
}


class BuggyCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {counter: 0}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(({counter}) => ({
      counter: counter + 1
    }))
  }

  render() {
    if (this.state.counter === 5) {
      // 主动制造一个错误测试
      throw new Error('I crashed!')
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>
  }
}

function ErrorBoundaryExample() {
  return (
    <div>
    <p> <b> 点击数字计数器, 当计数到5会报错. 这个过程模拟了组件中发生错误的场景 </b> </p>
    <hr />
    <ErrorBoundary>
      <p>这两个计数器在同一个Error Boundary里, 当一个发生错误, Error Boundary会整个替换这两个计数器</p>
      <BuggyCounter />
      <BuggyCounter />
    </ErrorBoundary>
    <hr />

    <p>这两个计数器分别在两个个Error Boundary里, 当一个发生错误, 不会影响另一个</p>
    <ErrorBoundary>
      <BuggyCounter />
    </ErrorBoundary>
    <ErrorBoundary>
      <BuggyCounter />
    </ErrorBoundary>
  </div>
  )
}



export default ErrorBoundaryExample
