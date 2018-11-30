import React, { Component } from "react";
import * as api from 'services/api'
import SplitPane from 'react-split-pane'
import 'styles/splitPane.css'


export class SitesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading : false,
      sites : []
    }

    this.successFetch = this.successFetch.bind(this)
  }

  componentDidMount(){
    this.fetchSites()
  }

  successFetch(res){
    this.setState({isLoading : false})
    this.setState({sites : res['contents']})
  }

  fetchSites(){
    this.setState({isLoading : true})
    api.fetchSites().then(this.successFetch)
  }

  render() {
    console.log(this.props)
    if(this.state.isLoading){
      return( <h1> isloading </h1>)
    }else{
      return (
        <div>
          {this.state.sites.map( (site, i) => {
            return <p><a onClick={() => {this.props.setSite(site)}}>{site}</a></p>
          })}
        </div>
      );
    }
  }
}
