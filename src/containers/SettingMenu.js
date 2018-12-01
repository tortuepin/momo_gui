import React, { Component } from "react";
import "styles/SettingMenu.css"
import { InputSlider } from "component/InputSlider"

export class SettingMenu extends Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this)
    this.play = this.play.bind(this)
    this.stop = this.stop.bind(this)
  }

  play(){
    console.log("play")
    this.setState({playFlag : 1})
    this.props.startShow(this.props.duration)
  }
  stop(){
    console.log("stop")
    this.setState({playFlag : -1})
    this.props.startShow(0)
  }

  back(){
    console.log("back")
    this.props.changePage("index")
  }
  
  render() {
    let p_str=""
    if(this.props.playFlag < 0){
      p_str = "play"
    }else{
      p_str = "stop"
    }
    return (
      <div class="float-button">
        <p class="plus">+</p>
        <p>
          <InputSlider
            duration={this.props.duration}
            changeDuration={(x) => {this.setDuration({duration : x})}}
          />
        </p>
        <p onClick={this.props.startShow} class="play">{p_str}</p>
        <p onClick={this.back} class="back">Back</p>
        <p> {this.props.num}/{this.props.contents_num}</p>
      </div>
    );
  }
}
