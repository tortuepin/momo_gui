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
    return window.innerHeight
  }


  render() {
    return <img src={this.props.src} width={this.getWindowHeight()}></img>
  }
}

export { Image }

