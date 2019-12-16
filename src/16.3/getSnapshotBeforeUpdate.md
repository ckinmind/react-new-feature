## getSnapshotBeforeUpdate
- `getSnapshotBeforeUpdate(prevProps, prevState)`
- 这个方法在render之后，componentDidUpdate之前调用，有两个参数prevProps和prevState，表示之前的属性和之前的state，这个函数有一个返回值，会作为第三个参数传给componentDidUpdate
- getSnapshotBeforeUpdate() 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递给 componentDidUpdate()
- getSnapshotBeforeUpdate 中读取到的 DOM 元素状态是可以保证与 componentDidUpdate 中一致的

#### 使用场景
- 调整滚动位置（如示例所示）

#### 新的生命周期
- **Mounting(加载阶段)**
  - constructor
  - getDerivedStateFromProps
  - render
  - componentDidMount
- **Updating(更新阶段)**
  - getDerivedStateFromProps
  - shouldComponentUpdate
  - render
  - getSnapshotBeforeUpdate
  - componentDidUpdate
- **Unmounting(卸载阶段)**
  - componentWillUnmount  
