import React, {Component} from 'react'
import ReactDOM, {createPortal} from 'react-dom'


class CreateRefExample extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      createRefMessage: '',
    }
  }

  handleSubmit = (e) => {
    this.setState({
      createRefMessage: this.input.current.value,
    })
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Name:<input type="text" ref={this.input} /> </label>
        <input type="submit" value="Submit" />
        <span>输入的内容是: {this.state.createRefMessage}</span>
      </form>
  );
  }
}


export default CreateRefExample
