## Context
- 如果要Context发挥作用，需要用到两种组件，一个是Context生产者(Provider)，通常是一个父节点，另外是一个Context的消费者(Consumer)，通常是一个或者多个子节点。所以Context的使用基于生产者消费者模式
- 实际上，除了实例的context属性(this.context)，React组件还有很多个地方可以直接访问父组件提供的Context
  - `constructor(props, context)`
  - `componentWillReceiveProps(nextProps, nextContext)`
  - `shouldComponentUpdate(nextProps, nextState, nextContext)`
  - `componetWillUpdate(nextProps, nextState, nextContext)`
- context类似于全局变量做法，会让组件失去独立性、复用起来更困难，不能滥用、但本身它一定有适合使用的场景，具体看情况使用  
- 从一个在组件树中嵌套很深的组件中更新 context 是很有必要的。在这种场景下，你可以通过 context 传递一个函数，使得 consumers 组件更新 context
- **注意事项** 
  - 当 provider 的父组件进行重渲染时，可能会在 consumers 组件中触发意外的渲染。举个例子，当每一次 Provider 重渲染时，因为 value 属性总是被赋值为新的对象，为了防止这种情况，将 value 状态提升到父节点的 state 里
  - Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据
  - Context 主要应用场景在于很多不同层级的组件需要访问同样一些的数据。请谨慎使用，因为这会使得组件的复用性变差
  - 如果你只是想避免层层传递一些属性，组件组合（component composition）有时候是一个比 context 更好的解决方案
   

#### **contextType**
- contextType 只能在类组件中使用
- 可在组件Class中赋值Context对象，使得在组件中可以直接使用对应Context的值；但需要订阅多个Context时此方法不可用，此方法只能订阅一个Context
- contextType 可以简化 context 的使用，不使用 consumer 也可以共享变量
- 如果你正在使用实验性的 public class fields 语法，你可以使用 static 这个类属性来初始化你的 contextType

```js
class MyClass extends React.Component {
  componentDidMount() {
    let value = this.context;
    /* 在组件挂载完成后，使用 MyContext 组件的值来执行一些有副作用的操作 */
  }
  componentDidUpdate() {
    let value = this.context;
    /* ... */
  }
  componentWillUnmount() {
    let value = this.context;
    /* ... */
  }
  render() {
    let value = this.context;
    /* 基于 MyContext 组件的值进行渲染 */
  }
}
MyClass.contextType = MyContext;

//-------------- 或者 -----------

class MyClass extends React.Component {
  static contextType = MyContext;
  render() {
    let value = this.context;
    /* 基于这个值进行渲染工作 */
  }
}

/
```

