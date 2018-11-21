import React, { Component } from "react";
import { SlideImage } from "component/image"

export class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num : 0
    }
    this.contents_num = this.props.contents.length
  }

  render_one(src) {
    return (<SlideImage src={src}/>)
  }

  next_image() {
    if ( this.state.num+1 < this.contents_num ){
      this.setState({num : this.state.num + 1})
    }
  }
  prev_image() {
    if ( this.state.num > 0 ){
      this.setState({num : this.state.num - 1})
    }
  }

  onKeyDown(e) {
    if (e.key === "ArrowLeft") {
      this.prev_image()
    }
    else if (e.key === "Enter") {
      this.next_image()
    }
    else{
      this.next_image()
    }
  }

  onClick(e) {
    this.next_image();
  }

  render() {
    return (
      <div onClick={(e) => this.onClick(e)} onKeyDown={(e) => this.onKeyDown(e)} tabIndex="-1">
        {this.render_one(this.props.contents[this.state.num])}
      </div>
    );
  }
}
