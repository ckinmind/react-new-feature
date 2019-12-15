import React, {createContext} from 'react'

// 创建Context的唯一方法
const ThemeContext = createContext()
const SizeContext = createContext()


class App extends React.Component {
  state = {
    theme: 'red',
    size: 'small'
  }
  render () {
    const {theme, size} = this.state
    return (
      // 使用 Context.Provider 包裹后续组件，value 指定值
      <ThemeContext.Provider value={theme}>
        {/* 当出现多个Context的时候，只需要将Context.Provider 嵌套即可 */}
        <SizeContext.Provider value={size}>
          {/* 当Context的Provider值更改时，Consumer 的值必须重新渲染 */}
          <button onClick={() => {this.setState({ theme: 'yellow', size: 'big'})}}>按钮</button>
          <Middle></Middle>
        </SizeContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

class Middle extends React.Component {
  render () {
    return <Bottom />
  }
}

class Bottom extends React.Component {
  // 申明静态变量、contextType 将 context 直接赋值于 contextType
  static contextType = ThemeContext

  render () {
    // 在 render 函数中 可以直接 访问 this.context 获取共享变量、这样就可以不使用 consumer
    const theme = this.context
    return (
      // Context.Consumer Consumer消费者使用Context得值
      // 但子组件不能是其他组件，必须渲染一个函数，函数的参数就是Context得值
      // 当出现 多个Consumer的时候，进行嵌套，每个Consumer 的子组件必须是一个函数，即可
      <div>
        <h1>ThemeContext的值为 <span style={{color: theme}}>{theme}</span> </h1>
      </div>
    )
  }
}

export default App

