
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News  from './components/News';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
 pageSize=5;
 state = {
  progress:0
 }
 setProgress = (progress) => {
  this.setState({progress: progress})
 }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        />
        <Switch>
          <Route exact path="/"><News setProgress={this.setProgress} key="GENERAL" pageSize={this.pageSize} country="in" category="GENERAL"/></Route>
          <Route exact path="/BUSINESS"><News setProgress={this.setProgress} key="BUSINESS" pageSize={this.pageSize} country="in" category="BUSINESS"/></Route>
          <Route exact path="/ENTERTAINMENT"><News setProgress={this.setProgress} key="ENTERTAINMENT" pageSize={this.pageSize} country="in" category="ENTERTAINMENT"/></Route>
          <Route exact path="/GENERAL"><News setProgress={this.setProgress} key="GENERAL" pageSize={this.pageSize} country="in" category="GENERAL"/></Route>
          <Route exact path="/HEALTH"><News setProgress={this.setProgress} key="HEALTH" pageSize={this.pageSize} country="in" category="HEALTH"/></Route>
          <Route exact path="/SCIENCE"><News setProgress={this.setProgress} key="SCIENCE" pageSize={this.pageSize} country="in" category="SCIENCE"/></Route>
          <Route exact path="/SPORTS"><News setProgress={this.setProgress} key="SPORTS" pageSize={this.pageSize} country="in" category="SPORTS"/></Route>
          <Route exact path="/TECHNOLOGY"><News setProgress={this.setProgress} key="TECHNOLOGY" pageSize={this.pageSize} country="in" category="TECHNOLOGY"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}
