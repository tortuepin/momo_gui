import React, { Component } from "react";
import * as api from 'services/api'
import SplitPane from 'react-split-pane'
import 'styles/splitPane.css'
import { SitesView } from 'containers/SitesView'
import { PagesView } from 'containers/PagesView'



export class IndexView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading : false,
      selectedSite : ""
    }

    this.successFetch = this.successFetch.bind(this)
    this.setSelectedSite = this.setSelectedSite.bind(this)
  }

  setSelectedSite(site){
    this.setState({selectedSite : site})
  }

  successFetch(res){
    this.setState({isLoading : false})
    this.props.setContents(res['contents'])
  }

  fetchContents(){
    this.setState({isLoading : true})
    api.fetchContents().then(this.successFetch)
  }

  render() {
    if(this.state.isLoading){
      return( <h1> isloading </h1>)
    }else{
      return (
        <SplitPane split="vertical" defaultSize="20%">
          <div>
            <SitesView setSite={this.setSelectedSite}/>
          </div>
          <SplitPane split="vertical" defaultSize="80%">
            <div overflow='auto' height='50pt'>
              <PagesView site={this.state.selectedSite}/>
            </div>
            <div>
              <SplitPane split="horizontal" defaultSize="80%">
                <div>
                  <button onClick={() =>{this.props.changePage('slider')}}>
                    uooooo
                  </button>
                  <button onClick={() =>{this.fetchContents()}}>
                    fetchContents
                  </button>
                </div>
              </SplitPane>
            </div>
          </SplitPane>
        </SplitPane>
      );
    }
  }
}
