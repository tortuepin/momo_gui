import React from 'react'
import ReactDOM, { render } from 'react-dom'

class SlideImage extends React.Component {
  constructor(props) {
    super(props);
  }

  getImageWidth() {

  }
  getWindowWidth() { 
    return window.innerWidth
  }

  getWindowHeight() { 
    //return  window.parent.screen.availHeight - window.parent.screenTop
    return window.innerHeight
  }

  render() {
    return <img src={this.props.src}  height={this.getWindowHeight()+"pt"}/>
  }
}

export { SlideImage }
