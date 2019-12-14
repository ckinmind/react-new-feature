## Portal
- `ReactDOM.createPortals(child, container)`
  - 这个方法需要两个参数，第一个参数是需要挂载的组件实例，而第二个参数则是要挂载到的DOM节点
  - 一般来说第一个参数可能传递的是需要挂载的 this.props.children
- 这个 API 是用来将部分内容分离式地 render 到指定的 DOM 节点上
- 不同于使用 ReactDom.render 新创建一个 DOM tree 的方式，对于要通过 createPortal() “分离”出去的内容，其间的数据传递，生命周期，甚至事件冒泡，依然存在于原本的抽象组件树结构当中
- 应用场景：当父组件有 overflow: hidden 或 z-index 样式，但你需要子组件能够在视觉上 “跳出(break out)” 其容器。例如，对话框、hovercards以及提示框。所以一般react组件里的模态框，就是这样实现的
- 特点：事件冒泡（事件冒泡和普通react子节点一样，是因为portal仍然存在于React tree中，而不用考虑其在真是DOM tree中的位置）

```js
class Modal extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    document.body.appendChild(this.container);
  }

  componentWillUnmount() {
    document.body.removeChild(this.container);
  }

  render() {
    const {title = '', visible = false} = this.props

    return ReactDOM.createPortal(
      <div className="dt-modal">
        <div className="dt-modal-mask" style={{display: visible ? '' : 'none' }}></div>
        <div className="dt-modal-wrap" style={{display: visible ? null : 'none'}}>
          <div className="dt-modal">
            <div className="dt-modal-header">{this.props.title}</div>
            <div className="dt-modal-content">{this.props.children}</div>
            <div className="dt-modal-footer">{this.props.footer}</div>
          </div>
        </div>
      </div>,
      this.container
    )
  }
}
```