import React from 'react'
import { render } from 'react-dom'

class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  getWindowWidth() { 
    return window.innerWidth
  }
  getWindowHeight() { 
    return  window.parent.screen.availHeight - window.parent.screenTop
  }


  render() {
    console.log(this.getWindowHeight())
    //return <div><img src={this.props.src} width={this.getWindowHeight()}></img></div>
    return <img src={this.props.src}  height={this.getWindowHeight()+"pt"}/>//width={this.getWindowWidth()+"pt"}></img>
  }
}

export { Image }

