## Hooks
- Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性
- Hook 是完全可选的。 你无需重写任何已有代码就可以在一些组件中尝试 Hook。但是如果你不想，你不必现在就去学习或使用 Hook
- 100% 向后兼容的。 Hook 不包含任何破坏性改动
- Hook 不会影响你对 React 概念的理解。 恰恰相反，Hook 为已知的 React 概念提供了更直接的 API：props， state，context，refs 以及生命周期
- 最重要的是，Hook 和现有代码可以同时工作，你可以渐进式地使用他们
- Hook 使用了 JavaScript 的闭包机制，而不用在 JavaScript 已经提供了解决方案的情况下，还引入特定的 React AP
- **Hook 使用规则**
  - 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用
  - 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中）

#### 添加Hooks的动机
- 在组件之间复用状态逻辑很难
  - 你可以使用 Hook 从组件中提取状态逻辑，使得这些逻辑可以单独测试并复用
  - Hook 使你在无需修改组件结构的情况下复用状态逻辑。 这使得在组件间或社区内共享 Hook 变得更便捷
- 复杂组件变得难以理解
  - 为了解决这个问题，Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据），而并非强制按照生命周期划分。你还可以使用 reducer 来管理组件的内部状态，使其更加可预测
- 难以理解的 class
  - Hook 使你在非 class 的情况下可以使用更多的 React 特性    
    
#### 什么是Hooks
- Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数
- Hook 不能在 class 组件中使用 —— 这使得你不使用 class 也能使用 React
- 我们不推荐把你已有的组件全部重写，但是你可以在新组件里开始使用 Hook

#### Hooks
- **State Hook**
  - useState
    - 通过在函数组件里调用它来给组件添加一些内部 state
    - useState 会返回一对值：当前状态和一个让你更新它的函数，
    - 它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并
- **Effect Hook**
  - useEffect
    - useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力
    - 它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API
    - 当你调用 useEffect 时，就是在告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数
    - 由于副作用函数是在组件内声明的，所以它们可以访问到组件的 props 和 state
    - 默认情况下，React 会在每次渲染后调用副作用函数 —— 包括第一次渲染的时候
    - 副作用函数还可以通过返回一个函数来指定如何“清除”副作用(意思是在useEffect返回的函数会在当前函数式组件销毁的时候执行)
    - 跟 useState 一样，你可以在组件中多次使用 useEffect
    - 通过使用 Hook，你可以把组件内相关的副作用组织在一起（例如创建订阅及取消订阅），而不要把它们拆分到不同的生命周期函数里
    - Effect 进行性能优化, useEffect 的第二个可选参数即可
    - 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。这并不属于特殊情况 —— 它依然遵循依赖数组的工作方式
- **自定义 Hook**
  - 自定义 Hook 更像是一种约定而不是功能
  - 如果函数的名字以 “use” 开头并调用其他 Hook，我们就说这是一个自定义 Hook。 useSomething 的命名约定可以让我们的 linter 插件在使用 Hook 的代码中找到 bug
  - 你可以创建涵盖各种场景的自定义 Hook，如表单处理、动画、订阅声明、计时器，甚至可能还有更多我们没想到的场景
  - 自定义 Hook 必须以 “use” 开头吗——必须如此
  - 在两个组件中使用相同的 Hook 会共享 state 吗——不会
  - 自定义 Hook 如何获取独立的 state？—— 每次调用 Hook，它都会获取独立的 state
  - 自定义 Hook 解决了以前在 React 组件中无法灵活共享逻辑的问题
- **其他 Hook**
  - useContext
    - 不使用组件嵌套就可以订阅 React 的 Context
  - useReducer
    - 通过 reducer 来管理组件本地的复杂 state     

#### Hooks 索引
- **useState**: 返回一个 state，以及更新 state 的函数
- **useEffect**: 该 Hook 接收一个包含命令式、且可能有副作用代码的函数
- **useContext**: 接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值
- **useReducer**: 如果你熟悉 Redux 的话，就已经知道它如何工作了
- **useCallback**: 返回一个 memoized 回调函数,把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新。当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染, useCallback(fn, deps) 相当于 useMemo(() => fn, deps)
- **useMemo**: 返回一个 memoized 值, 把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算
- **useRef**: useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变
- **useImperativeHandle**: useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值, useImperativeHandle 应当与 forwardRef 一起使用
- **useLayoutEffect**: 其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新
- **useDebugValue**: useDebugValue 可用于在 React 开发者工具中显示自定义 hook 的标签
