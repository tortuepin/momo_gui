import React, { Component } from "react";
import { Slider } from './slide.js';


export class SliderView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("sliderView")
    console.log(this.props.contents)
    return (
      <Slider contents={this.props.contents} />
    );
  }
}
