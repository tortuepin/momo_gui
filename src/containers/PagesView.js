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
    console.log(res)
    this.setState({isLoading : false})
    this.setState({pages : res})
  }

  fetchPages(site){
    this.setState({isLoading : true})
    api.fetchPages(site).then(this.successFetch)
  }

  render() {
    if(this.state.pages.length === 0){
      return (<h1> select site </h1>)
    }
    if(this.state.isLoading){
      return( <h1> isloading </h1>)
    }else{
      return (
        <div>
          <ul>
          {this.state.pages.map( (page, i) => {
            return <Page page={page}/>
          })}
          </ul>
        </div>
      );
    }
  }
}


function Page(props){
  return(
  <ul>
    <a><img src={props.page.img}/></a>
    <a>
      <h3>{props.page.title}</h3>
    </a>
    <p>{props.page.desc}</p>
    <hr/>
  </ul>
  )
}
