import React, { Component } from "react";
import * as api from 'services/api'
import SplitPane from 'react-split-pane'
import 'styles/splitPane.css'


export class PagesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading : false,
      pages : [],
      page : 1
    }

    this.successFetch = this.successFetch.bind(this)
    this.pageClick = this.pageClick.bind(this)
    this.pager = this.pager.bind(this)
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

  fetchPages(site, page=null){
    this.setState({isLoading : true})
    api.fetchPages(site, page).then(this.successFetch)
  }

  pageClick(page){
    this.props.setPage(page)
  }

  thumbClick(page){
    
  }

  pager(p){
    if(p > 0){
      this.setState({page: p})
      this.fetchPages(this.props.site, p)
    }
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
          <Pager pager={this.pager} page={this.state.page}/>
        </div>
      );
    }
  }
}

function Pager(props){
  return(
    <div>
    <button onClick={() => {props.pager(props.page-1)}}> 前ページ </button>
    <button onClick={() => {props.pager(props.page+1)}}> 次ページ </button>
    </div>
  )
}

function Page(props){
  return(
  <ul>
    <a onClick={() => {props.thumbClick(props.page)}}>
      <img src={props.page.img} height="400px"/>
    </a>
    <a onClick={() => {props.pageClick(props.page)}}>
      <h3>{props.page.title}</h3>
    </a>
    <p>{props.page.desc}</p>
    <hr/>
  </ul>
  )
}
