import React, { Component } from "react";
import { SlideImage } from "component/image"
import { SettingMenu } from "containers/SettingMenu"

export class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num : 0,
      play : 0,
      isPlay : 0,
      duration : 1000,
      playFlag : -1
    }
    this.contents_num = this.props.contents.length
    this.startShow = this.startShow.bind(this)
    this.setDuration = this.setDuration.bind(this)
  }

  setDuration(time){
    this.setState({duration:time})
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
    console.log("play!!")
    return new Promise(resolve => {
      setTimeout(resolve, time)
    })
    .then(() => {
      if(this.state.play > 0){
        this.setState({isPlay : 0})
        this.next_image()
      }
    })
  }

  startShow(time){
    if(this.state.playFlag < 0){
      this.setState({play : time, playFlag : 1})
    }else{
      this.setState({play : 0, playFlag : -1, isPlay : 0})
    }
  }

  onKeyDown(e) {
    if (e.key === "ArrowLeft") {
      this.prev_image()
    }
    else if (e.key === "Enter") {
      this.next_image()
    }
    else if (e.key=== " "){
      console.log("space")
      this.startShow(this.state.duration)
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
    console.log(this.state)
    if(this.state.isPlay == 0 && this.state.play > 0){
      this.setState({isPlay : 1})
      this.play(this.state.play)
    }
    return (
        <div onClick={(e) => this.onClick(e)} onKeyDown={(e) => this.onKeyDown(e)} tabIndex="-1">
          {this.render_one(this.props.contents[this.state.num])}
          <SettingMenu changePage={(u) => { this.props.changePage(u) }}
                       startShow={() => { this.startShow(this.state.duration) }}
                       num={this.state.num + 1}
                       contents_num={this.contents_num}
                       duration={this.state.duration}
                       setDuration={this.setDuration}
                       playFlag={this.state.playFlag}/>
      </div>
    );
  }
}
