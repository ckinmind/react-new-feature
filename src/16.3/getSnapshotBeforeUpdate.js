import React, {Component} from 'react'

class MessageLog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
    this.logRef = React.createRef()
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.addMessage(), 500)
  }

  componentWillUnmount() {
    window.clearInterval(this.timerID)
  }

  addMessage() {
    let {messages} = this.state
    if (messages.length < 1000) {
      const newMessage = `${new Date().toString()} message ${messages.length}`
      messages = [...messages, newMessage]
      this.setState({messages})
    }
  }

  // Take the `snapshot` of the DOM before update
  getSnapshotBeforeUpdate(prevProps, prevState) {
    const { current } = this.logRef
    const isScrolledToBottom = current.scrollTop + current.offsetHeight >= current.scrollHeight
    return {isScrolledToBottom}
  }

  // Recieve the snapshot and check if the user is scrolled to the bottom of the log
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { isScrolledToBottom } = snapshot;
    if (isScrolledToBottom) {
      this.logRef.current.scrollTop = this.logRef.current.scrollHeight
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>Message Log</h1>
        <div ref={this.logRef} className="log" style={{height: 200, overflow: 'scroll', border: '1px solid black'}}>
          <ul>
            {this.state.messages.map((msg, i) => {
              return <li key={i}>{msg}</li>
            })}
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default MessageLog
