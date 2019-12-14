import React, {Component} from 'react'
import ReactDOM, {createPortal} from 'react-dom'
import './portal.css'


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


class PortalExample extends Component {

  state = {
    visible: false,
  }

  toggleModal = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  handleClose = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    const modalProps = {
      // 可以扩展很多功能，此处只做最基本的演示
      title: '这是modal标题',
      visible: this.state.visible,
      footer: (
        <button onClick={this.handleClose}>关闭</button>
      )
    }

    return (
      <div>
        <Modal {...modalProps}>
          modal 测试  
        </Modal>
        <button onClick={this.toggleModal}>显示/隐藏</button>
      </div>   
    )
  }

}

export default PortalExample