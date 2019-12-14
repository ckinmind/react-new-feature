import React, {Component} from 'react'


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


export default CreateRefExample
