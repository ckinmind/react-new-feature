## getDerivedStateFromError
- `static getDerivedStateFromError(error)`
- 此生命周期会在后代组件抛出错误后被调用。 它将抛出的错误作为参数，并返回一个值以更新 state
- 在发布Error Boundaries的时候，React提供了一个新的生命周期方法componentDidCatch，在捕获到错误的时候会触发，你可以在里面修改state以显示错误提醒的UI，或者将错误信息发送给服务端进行log用于后期分析。但是这里有个问题，就是在捕获到错误的瞬间，React会在这次渲染周期中将这个组件渲染为null，这就有可能导致他的父组件设置他上面的ref获得null而导致一些问题，所以现在提供了这个方法
- 这个方法跟getDerivedStateFromProps类似，唯一的区别是他只有在出现错误的时候才触发，他相对于componentDidCatch的优势是在当前的渲染周期中就可以修改state，以在当前渲染就可以出现错误的UI，而不需要一个null的中间态
- 而这个方法的出现，也意味着以后出现错误的时候，修改state应该放在这里去做，而后续收集错误信息之类的放到componentDidCatch里面
- 如果 class 组件定义了生命周期方法 static getDerivedStateFromError() 或 componentDidCatch() 中的任何一个（或两者），它就成为了 Error boundaries  
  
