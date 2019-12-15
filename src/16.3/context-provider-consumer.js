import React from 'react'

// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（括号内的是默认值，当Consumer找不到Provider时将使用默认值）。
const ThemeContext = React.createContext({color: 'black', border: '5px solid red'})

class App extends React.Component {

  state = {
    color: 'blue',
    border: '5px solid #000'
  }

  handleClick = () => {
    this.setState({
      color: 'pink',
      border: '5px solid green'
    })
  }

  render() {
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
    // 如果这里不使用ThemeContext.Provider包裹则则会使用默认颜色red, 即使使用了ThemeContext.Provider但是不指定value, 也不会时defaultValue生效，即不会显示红色
    return (
      <ThemeContext.Provider value={this.state}>
        <Toolbar />
        <button onClick={this.handleClick}>改变主题</button>
      </ThemeContext.Provider>
    )
  }
}

// 中间的组件
function Toolbar() {
  return (
    <div>
      <ColorBox />
    </div>
  )
}

class ColorBox extends React.Component {

  render() {
    // 这里还用到了render props
    return (
      <ThemeContext.Consumer>
        {
          ({color, border}) => <div style={{background: color, width: 200, height: 200, border: border}} />
        }
      </ThemeContext.Consumer>
    )
  }
}

export default App
