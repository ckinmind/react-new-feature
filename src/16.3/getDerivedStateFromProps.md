## getDerivedStateFromProps
- `static getDerivedStateFromProps(props, state)`
- getDerivedStateFromProps 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容
- 请注意，不管原因是什么，都会在每次渲染前触发此方法。这与 UNSAFE_componentWillReceiveProps 形成对比，后者仅在父组件重新渲染时触发，而不是在内部调用 setState 时
- 组件本身的state发生了变化，导致子组件发生了re-render，这个生命周期函数依然会被调用
- getDerivedStateFromProps是一个静态函数，也就是这个函数不能通过this访问到class的属性，也并不推荐直接访问属性。而是应该通过参数提供的nextProps以及prevState来进行判断，根据新传入的props来映射到state
- 备注：16.4之前的版本setState并不会触发getDerivedStateFromProps的调用，但是之后的改了，会触发
- 大多数情况下，我们是不应该使用getDerivedStateFromProps的，我们总能找到更加更加合适且可靠的方式去维护状态
- getDerivedStateFromProps 的作用就是为了让 props 能更新到组件内部 state 中。所以它可能的使用场景有两个
  - 无条件的根据 prop 来更新内部 state，也就是只要有传入 prop 值， 就更新 state
  - 只有 prop 值和 state 值不同时才更新 state 值
- getDerivedStateFromProps 方法使用的注意点
  - 在使用此生命周期时，要注意把传入的 prop 值和之前传入的 prop 进行比较
  - 因为这个生命周期是静态方法，同时要保持它是纯函数，不要产生副作用  


#### 场景
- **场景一：prop和state同时控制一个状态改变**
  - 当数据源同时来自prop和state时，会产生数据混乱的问题，此时，我们应当尽可能将数据交由父组件管理，完全由prop来改变状态，这就是所谓的完全受控组件
- **场景二：prop未发生变化，但是state需要重置**
  - 通过更新key来重新创建新的组件来达到重置的目的

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
