import React, { Component } from "react";
import * as api from 'services/api'
import SplitPane from 'react-split-pane'
import 'styles/splitPane.css'


export class CandidatesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading : false,
      candidates : []
    }

    this.successFetch = this.successFetch.bind(this)
  }

  componentDidMount(){
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.page != this.props.page){
      console.log("receive")
      this.fetchUrls(nextProps.page)
    }
  }

  successFetch(res){
    this.setState({isLoading : false})
    const can = this.state.candidates.concat(res['urls'])
    this.setState({candidates : can})
    this.props.setUrls(this.state.candidates)
  }

  fetchUrls(page){
    this.setState({isLoading : true})
    api.fetchCandidates(page).then(this.successFetch)
  }

  render() {
    console.log("render candidates")
    console.log(this.state)
    console.log(this.props.page)
    if(this.state.candidates.length === 0){
      return (<h1> select page </h1>)
    }
    if(this.state.isLoading){
      return( <h1> isloading </h1>)
    }else{
      return (
        <div>
        <ul>
        {this.state.candidates.map( (can, i) => {
          return <Candidate can={can}/>
        })}
        </ul>
        </div>
      );
    }
  }
}

function Candidate(props){
  return (<li> {props.can} </li>)
}
