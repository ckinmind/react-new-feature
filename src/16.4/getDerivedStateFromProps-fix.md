## getDerivedStateFromProps Fix
- React这次更新修复了getDerivedStateFromProps这个生命周期的触发节点， 在之前， 它触发的方式和旧生命周期getDerivedStateFromProps类似， 都是在被父组件re-render的时候才会触发，并且本组件的setState的调用也不会触发
  这种方式在之前同步渲染的时候是没有问题的， 但是为了支持新的还未启用的fiber异步渲染机制， 现在， getDerivedStateFromProps在组件每一次render的时候都会触发，也就是说无论是来自父组件的re-render, 还是组件自身的setState， 都会触发getDerivedStateFromProps这个生命周期