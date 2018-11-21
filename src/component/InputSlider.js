
import React, { Component } from "react";

export class InputSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration : this.props.duration
    }
    this.change = this.change.bind(this)
  }

  change(e) {
    const val = e.target.value
    this.props.changeDuration(val)
    this.setState({duration : val})
  }

  render() {
    return (
      <div>
       <input
        type="text"
        onInput={(e)=>{this.setState({duration:e.target.value})}}
        value={this.state.duration}
        onChange={this.change}
        />
      </div>
    );
  }
}
