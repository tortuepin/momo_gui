import React, { Component } from "react";
import * as api from 'services/api'
import SplitPane from 'react-split-pane'
import 'styles/splitPane.css'


export class PagesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading : false,
      site : this.props.site,
      pages : []
    }

    this.successFetch = this.successFetch.bind(this)
  }

  componentDidMount(){
  }

  componentWillReceiveProps(nextProps){
    this.fetchPages(nextProps.site)
  }

  successFetch(res){
    this.setState({isLoading : false})
    this.setState({sites : res['contents']})
  }

  fetchPages(site){
    this.setState({pages : [api.fetchPages(site)]})
  }

  render() {
    console.log("render page")
    if(this.state.pages.length === 0){
      return (<h1> select site </h1>)
    }
    if(this.state.isLoading){
      return( <h1> isloading </h1>)
    }else{
      return (
        <div>
          {this.state.pages.map( (site, i) => {
            return <a>{site}</a>
          })}
        </div>
      );
    }
  }
}
