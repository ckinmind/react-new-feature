## forwardRef
- 引用传递（Ref forwading）是一种通过组件向子组件自动传递 引用ref 的技术
- Ref转发是一个可选特性，其允许某些组件接收 ref，并将其向下传递（换句话说，“转发”它）给子组件
- 对于应用者的大多数组件来说没什么作用。但是对于有些重复使用的组件，可能有用。例如某些input组件，需要控制其focus，本来是可以使用ref来控制，但是因为该input已被包裹在组件中，这时就需要使用Ref forward来透过组件获得该input的引用
- `React.forwardRef((props, ref)`
  - 核心方法是React.forwardRef,该方法接受一个有额外ref参数的react组件函数，不调用该方法，普通的组件函数是不会获得该参数的
  - `React.forwardRef((props, ref)` 第二个参数 ref 只在使用 React.forwardRef 定义组件时存在。常规函数和 class 组件不接收 ref 参数，且 props 中也不存在 ref
- Ref 转发不仅限于 DOM 组件，你也可以转发 refs 到 class 组件实例中
- forwardRef一般会配合createRef使用


```js
const FocusInput = forwardRef((props, ref) => (
  <input type="text" ref={ref} />
))

class ForwardRefExample extends Component{
  constructor(props) {
    super(props);
    this.ref = createRef();
  }

  componentDidMount() {
    const {current} = this.ref
    current.focus()
  }

  render() {
    return (
      <div>
        <p>ForwardRef, 父组件DidMount之后自动让子组件的input获取焦点</p>
        <FocusInput ref={this.ref} />
      </div>
    )
  }
}
```
