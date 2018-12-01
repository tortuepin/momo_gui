import React, { Component } from "react";
import "styles/SettingMenu.css"
import { InputSlider } from "component/InputSlider"

export class SettingMenu extends Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this)
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
            changeDuration={(x) => {this.props.setDuration(x)}}
          />
        </p>
        <p onClick={this.props.startShow} class="play">{p_str}</p>
        <p onClick={this.back} class="back">Back</p>
        <p> {this.props.num}/{this.props.contents_num}</p>
      </div>
    );
  }
}
