import React, { Component } from "react";
import { SlideImage } from "component/image"
import { SettingMenu } from "containers/SettingMenu"

export class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num : 0,
      play : 0
    }
    this.contents_num = this.props.contents.length
    this.startShow = this.startShow.bind(this)
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

  play(time) {
    return new Promise(resolve => {
      setTimeout(resolve, time)
    })
    .then(() => {
      if(this.state.play > 0){
        this.next_image()
      }
    })
  }

  startShow(time){
    this.setState({play : time})
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

  componentDidMount() {
  }

  render() {
    if(this.state.play > 0){
      this.play(this.state.play)
    }
    return (
      <div>
        <div onClick={(e) => this.onClick(e)} onKeyDown={(e) => this.onKeyDown(e)} tabIndex="-1">
          {this.render_one(this.props.contents[this.state.num])}
        </div>
        <SettingMenu changePage={(u) => { this.props.changePage(u) }}
                     startShow={(t) => { this.startShow(t) }}
                     num={this.state.num}
                     contents_num={this.contents_num}/>
      </div>
    );
  }
}
