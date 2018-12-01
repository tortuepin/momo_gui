import React, { Component } from "react";
import * as api from 'services/api'
import SplitPane from 'react-split-pane'
import 'styles/splitPane.css'


export class CandidatesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading : false,
      candidates : [],
      titles : []
    }

    this.successFetch = this.successFetch.bind(this)
  }

  componentDidMount(){
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.page.link != this.props.page.link){
      console.log(this.props.page)
      this.fetchUrls(nextProps.page.link)
    }
  }

  successFetch(res){
    this.setState({isLoading : false})
    const can = this.state.candidates.concat(res['urls'])
    this.setState({candidates : can})
    const t = this.state.titles.concat(this.props.page.title)
    this.setState({titles : t})
    this.props.setUrls(this.state.candidates)
  }

  fetchUrls(page){
    this.setState({isLoading : true})
    api.fetchCandidates(page).then(this.successFetch)
  }

  render() {
    if(this.state.candidates.length === 0){
      return (<h1> select page </h1>)
    }
    if(this.state.isLoading){
      return( <h1> isloading </h1>)
    }else{
      return (
        <div>
        <ul>
        {this.state.titles.map( (t, i) => {
          return <Titles title={t}/>
        })}
        </ul>
        </div>
      );
    }
  }
}

function Titles(props){
  return (<li> {props.title} </li>)
}
function Candidate(props){
  return (<li> {props.can} </li>)
}
