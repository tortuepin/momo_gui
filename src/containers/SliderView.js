import React, { Component } from "react";
import { Slider } from './slide.js';
import { wait } from 'utils'


export class SliderView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    if(this.props.contents.length > 0){
      this.props.contents.forEach((image) => {
        const img = new Image();
        img.src = image
        wait(100)
      })
    }
  }

  render() {
    return (
      <Slider contents={this.props.contents} />
    );
  }
}
