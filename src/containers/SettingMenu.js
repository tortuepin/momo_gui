import React, { Component } from "react";
import "styles/SettingMenu.css"

export class SettingMenu extends Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this)
    this.play = this.play.bind(this)
    this.stop = this.stop.bind(this)
    this.state = {
      playFlag : -1
    }
  }

  play(){
    console.log("play")
    this.setState({playFlag : 1})
    this.props.startShow(1000)
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
    console.log(this.state.playFlag)
    let p_str=""
    let p_func
    if(this.state.playFlag < 0){
      p_str = "play"
      p_func = this.play
    }else{
      p_str = "stop"
      p_func = this.stop
    }
    return (
      <div class="float-button">
        <p class="plus">+</p>
        <p onClick={p_func} class="play">{p_str}</p>
        <p onClick={this.back} class="back">Back</p>
      </div>
    );
  }
}
