## Error Boundaries
- 什么是"error boundary"呢？“error boundary”就是一种能够捕获它的子组件树所产生的错误的React组件
- `Error boundary`不能捕获以下类型的错误
  - 发生在事件处理器里面的（自己定义try catch）
  - 异步代码。例如 setTimeout，或者requestAnimationFrame的callbacks
  - 服务端渲染
  - `<Error boundary>`本身抛出的错误
- 假设，你需要在事件处理器中捕获一个错误，你可以使用常规的try/catch语句  
  
```js
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
```
