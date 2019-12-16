import React, {Component} from 'react'

function StrictModeExample() {
  return (
    <div>
      <Header />

      <React.StrictMode>
        <div>
          <ComponentOne />
          <ComponentTwo />
        </div>
      </React.StrictMode>
      <p>查看控制台可以翻到stringRef的使用警告(开发模式下)，当前严格模式不会对 Header 和 Footer 组件运行严格模式检查。但是，ComponentOne 和 ComponentTwo 以及它们的所有后代元素都将进行检查</p>
      <Footer />

    </div>
  )
}

function Header() {
  return <div>this is header</div>
}

const Footer = () => <div>this is footer</div>

class ComponentOne extends Component{
  render() {
    return (
      <div ref="testRef">this is ComponentOne</div>
    )
  }
}

class ComponentTwo extends Component{

  render() {
    return (
      <div>this is ComponentTwo</div>
    )
  }
}


export default StrictModeExample
