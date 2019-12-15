import React from 'react'

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  render() {
    const { number } = this.state;
    return (
      <div>
        <Child number={number} />
        <button onClick={this.handleClick}>父组件的点击更新</button>
      </div>
    );
  }
}

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.number,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.number !== state.number) {
      return { number: props.number }
    }
    // 没有变化就返回null
    return null
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    })
  }

  render() {
    const { number } = this.state;
    return (
      <div style={{border: '1px solid #000', padding: 5}}>
        <div>number is: {number}</div>
        <button onClick={this.handleClick}>子组件自身的点击更新</button>
      </div>
    )
  }
}

export default Parent
