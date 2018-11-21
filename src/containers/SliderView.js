import React, { Component } from "react";
import { Slider } from './slide.js';
import { wait } from 'utils'


export class SliderView extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount(){
    if(this.props.contents.length > 0){
      for(let image of this.props.contents){
        await wait(1000)
        const img = new Image()
        img.src = image
      }
    }
  }

  render() {
    return (
      <Slider contents={this.props.contents}
              changePage={(u) => {this.props.changePage(u) }}/>
    );
  }
}
