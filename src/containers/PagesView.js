import React, { Component } from "react";
import * as api from 'services/api'
import SplitPane from 'react-split-pane'
import 'styles/splitPane.css'


export class PagesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading : false,
      pages : []
    }

    this.successFetch = this.successFetch.bind(this)
    this.pageClick = this.pageClick.bind(this)
  }

  componentDidMount(){
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.site != this.props.site){
      this.fetchPages(nextProps.site)
    }
  }

  successFetch(res){
    this.setState({isLoading : false})
    this.setState({pages : res})
  }

  fetchPages(site){
    this.setState({isLoading : true})
    api.fetchPages(site).then(this.successFetch)
  }

  pageClick(page){
    this.props.setPage(page)
  }

  thumbClick(page){
    
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
            return <Page page={page}
                         pageClick={this.pageClick}
                         thumbClick={this.thumbClick}/>
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
    <a onClick={() => {props.thumbClick(props.page.link)}}>
      <img src={props.page.img}/>
    </a>
    <a onClick={() => {props.pageClick(props.page.link)}}>
      <h3>{props.page.title}</h3>
    </a>
    <p>{props.page.desc}</p>
    <hr/>
  </ul>
  )
}
