## render props
- 术语 “render prop” 是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术
- 具有 render prop 的组件接受一个函数，该函数返回一个 React 元素并调用它而不是实现自己的渲染逻辑
- render prop 是一个用于告知组件需要渲染什么内容的函数 prop
- 关于 render prop 一个有趣的事情是你可以使用带有 render prop 的常规组件来实现大多数高阶组件 (HOC)
