## createRef
- **使用场景**
  - 管理焦点（如文本选择）或处理表单数据： Refs 将管理文本框当前焦点选中，或文本框其它属性
  - 媒体播放： 基于 React 的音乐或视频播放器可以利用 Refs 来管理其当前状态（播放/暂停），或管理播放进度等。这些更新不需要进行状态管理
  - 触发强制动画： 如果要在元素上触发过强制动画时，可以使用 Refs 来执行此操作
- Refs有三种实现
  - 使用React.createRef()创建（`this.textRef = React.createRef();`）
  - 回调 Refs （`<input ref={node => this.textRef = node} />`）  
  - 通过stringRef实现(严格模式使用stringRef会报警告, 不推荐)

```js
class CreateRefExample extends Component {
  constructor(props) {
    super(props);
    this.nameRef = React.createRef()

    this.state = {
      nameRefMessage: '',
      ageRefMessage: '',
    }
  }

  handleSubmit = (e) => {
    this.setState({
      nameRefMessage: this.nameRef.current.value,
    })
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label> Name:<input type="text" ref={this.nameRef} /> </label>
          <input type="submit" value="Submit" />
          <span>输入的名字是: {this.state.nameRefMessage}</span>
        </div>
      </form>
  );
  }
}
```
