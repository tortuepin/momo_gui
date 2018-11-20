import React, { Component } from "react";
import * as api from 'services/api'
import SplitPane from 'react-split-pane'
import 'styles/splitPane.css'
import { SitesView } from 'containers/SitesView'
import { PagesView } from 'containers/PagesView'
import { CandidatesView } from 'containers/CandidatesView'
import 'styles/IndexView.css'



export class IndexView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading : false,
      selectedSite : "",
      selectedPage : ""
    }

    this.setSelectedSite = this.setSelectedSite.bind(this)
    this.setSelectedPage = this.setSelectedPage.bind(this)
    this.setUrls = this.setUrls.bind(this)
  }

  setSelectedSite(site){
    this.setState({selectedSite : site})
  }

  setSelectedPage(page){
    this.setState({selectedPage : page})
  }

  setUrls(res){
    this.props.setContents(res)
  }

  render() {
    console.log("indexview")
    console.log("state")
    console.log(this.state)
    if(this.state.isLoading){
      return( <h1> isloading </h1>)
    }else{
      return (
            <div>
              <div className="left-pane">
                <SitesView setSite={this.setSelectedSite}/>
              </div>
              <div className="center-pane">
                <PagesView site={this.state.selectedSite}
                           setPage={this.setSelectedPage}/>
              </div>
              <div className="right-pane">
                <div className="top-pane">
                  <CandidatesView page={this.state.selectedPage}
                                  setUrls={this.setUrls}/>
                </div>
                <div className="under-pane">
                  <button onClick={() =>{this.props.changePage('slider')}}>
                    Go to SlideShow
                  </button>
                </div>
              </div>
            </div>
      );
    }
  }
}
