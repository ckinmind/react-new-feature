import React, { Component, createRef, forwardRef } from 'react';

const FocusInput = forwardRef((props, ref) => (
  <input type="text" ref={ref} />
))

class ForwardRefExample extends Component{
  constructor(props) {
    super(props);
    this.ref = createRef();
  }

  componentDidMount() {
    const {current} = this.ref;
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

export default ForwardRefExample
