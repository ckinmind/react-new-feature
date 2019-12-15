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
   
#### **Context.Provider**
- 每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化
- Provider 接收一个 value 属性，传递给消费组件。一个 Provider 可以和多个消费组件有对应关系。多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据
- 当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染。Provider 及其内部 consumer 组件都不受制于 shouldComponentUpdate 函数，因此当 consumer 组件在其祖先组件退出更新的情况下也能更新

####  **Context.Consumer**
- Consumer接收当前的context值，传递给Consumer的value值等同于往上组件树离这个context最近的Provider提供的value值
- Consumer向上找不到Provider的时会默认取创建Context的时候传入的默认值
- Consumer中的渲染子元素是基于render props

#### **contextType**
- contextType 只能在类组件中使用
- 可在组件Class中赋值Context对象，使得在组件中可以直接使用对应Context的值；但需要订阅多个Context时此方法不可用，此方法只能订阅一个Context
- contextType 可以简化 context 的使用，不使用 consumer 也可以共享变量
- 如果你正在使用实验性的 public class fields 语法，你可以使用 static 这个类属性来初始化你的 contextType

#### **Context.displayName**
- context 对象接受一个名为 displayName 的 property，类型为字符串。React DevTools 使用该字符串来确定 context 要显示的内容
- 示例，下述组件在 DevTools 中将显示为 MyDisplayName

```js
const MyContext = React.createContext(/* some value */);
MyContext.displayName = 'MyDisplayName';

<MyContext.Provider> //  在DevTools中显示"MyDisplayName.Provider"
<MyContext.Consumer> //  在DevTools中"MyDisplayName.Consumer" 
```
