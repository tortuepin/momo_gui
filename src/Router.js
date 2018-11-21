import React, { Component } from "react";
import { render } from 'react-dom'
import { Slider } from 'containers/slide.js'
import { SliderView } from 'containers/SliderView'
import { IndexView } from 'containers/IndexView'


export class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uri : 'index',
      site : '',
      pages : [],
      contents : []
    }
  }

  changePage(uri){
    this.setState({uri : uri})
  }

  setSite(site){
    this.setState({site : site})
  }
  setPages(pages){
    this.setState({pages : pages})
  }
  setContents(contents){
    this.setState({contents : contents})
  }


  router() {
    switch(this.state.uri){
      case 'slider':
        return(<SliderView contents={this.state.contents}
                changePage={(u) => { this.changePage(u); }}
                />)
      default:
        return(<IndexView
                changePage={(u) => { this.changePage(u); }}
                setContents={(c) => { this.setContents(c); }}
               />)
    }
  }

  render() {
    return(this.router())
  }
}
