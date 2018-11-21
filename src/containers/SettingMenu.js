import React, { Component } from "react";
import "styles/SettingMenu.css"

export class SettingMenu extends Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this)
  }

  play(){
    console.log("play")
  }

  back(){
    console.log("back")
    this.props.changePage("index")
  }
  
  render() {
    console.log("uuu")
    return (
      <div class="float-button">
        <p class="plus">+</p>
        <p onClick={this.play} class="play">Play</p>
        <p onClick={this.back} class="back">Back</p>
      </div>
    );
  }
}
