import React, {PureComponent, Component} from 'react'

class TestWithNormal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('没做优化的组件(TestWithNormal)：componentDidUpdate')
  }

  render() {
    return (
      <div>
        {this.state.count }
        <button onClick = {() => this.setState({count: 1})}> Click Me </button>
        <div>未做任何优化，重复点击触发重新render</div>
      </div>
    )
  }
}

class TestWithShould extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('做了shouldComponentUpdate优化的组件(TestWithShould)：componentDidUpdate')
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.count !== nextState.count
  }

  render() {
    return (
      <div>
        {this.state.count }
        <button onClick = {() => this.setState({count: 1})}> Click Me </button>
        <div>优化: 增加shouldComponentUpdate判断，重复点击不触发重新render</div>
      </div>
    )
  }
}

class TestWithPure extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('优化的组件(TestWithShould)：componentDidUpdate')
  }

  render() {
    return (
      <div>
        {this.state.count }
        <button onClick = {() => this.setState({count: 1})}> Click Me </button>
        <div>优化: 转化为PureComponent，重复点击不触发重新render</div>
      </div>
    )
  }
}

const TestFunc = (props) => {
  console.log('转化为函数式组件：更新情况')
  return <span>{props.count}</span>
}

class TestWithFunc extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }
  render () {
    return (
      <div>
        <TestFunc count={this.state.count} />
        <button onClick = {() => this.setState({count: 1})}> Click Me </button>
        <div>优化: 转化为函数式组件，重复点击仍然会触发重新render</div>
      </div>
    )
  }
}

const MemoTestFunc = React.memo(TestFunc)
class MemoTestWithFunc extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }
  render () {
    return (
      <div>
        <MemoTestFunc count={this.state.count} />
        <button onClick = {() => this.setState({count: 1})}> Click Me </button>
        <div>优化: 用React.memo包裹函数式组件，重复点击不会触发重新render</div>
      </div>
    )
  }
}


class Container extends Component {
  render() {
    return (
      <div>
        <TestWithNormal />
        <hr/>
        <TestWithShould />
        <hr/>
        <TestWithPure />
        <hr/>
        <TestWithFunc />
        <hr/>
        <MemoTestWithFunc />
      </div>
    )
  }
}





export default Container
