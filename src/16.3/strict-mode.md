## StrictMode
- StrictMode 是一个用来突出显示应用程序中潜在问题的工具。与 Fragment 一样，StrictMode 不会渲染任何可见的 UI。它为其后代元素触发额外的检查和警告
- StrictMode严格模式检查仅在开发模式下运行；它们不会影响生产构建
- StrictMode 目前有助于
  - 识别不安全的生命周期
  - 关于使用过时字符串 ref API 的警告
  - 关于使用废弃的 findDOMNode 方法的警告
  - 检测意外的副作用
  - 检测过时的 context API
