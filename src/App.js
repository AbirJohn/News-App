import "./App.css";

import React, { Component } from "react";
import Navbar from "./comonents/Navbar";
import News from "./comonents/News";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default class App extends Component {


pagesize = 5;
apikey = process.env.RECAT_APP_NEWS_API


  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"><News key="business" pagesize={9} country ="in"  category ="business" /></Route>
          <Route exact path="/business"><News key="business"   pagesize={9} apikey={this.apikey} country ="in"  category ="business" /></Route>
          <Route exact path="/entertainment"><News key="entertainment"   pagesize={9} apikey={this.apikey} country ="in"  category ="entertainment" /></Route>
          <Route exact path="/general"><News key="general"   pagesize={9} apikey={this.apikey} country ="in"  category ="general" /></Route>
          <Route exact path="/health"><News key="health"   pagesize={9} apikey={this.apikey} country ="in"  category ="health" /></Route>
          <Route exact path="/science"><News key="science"   pagesize={9} apikey={this.apikey} country ="in"  category ="science" /></Route>
          <Route exact path="/sports"><News key="sports"   pagesize={9} apikey={this.apikey} country ="in"  category ="sports" /></Route>
          <Route exact path="/technology"><News key="technology"   pagesize={9} apikey={this.apikey} country ="in"  category ="technology" /></Route>
        </Switch>
        </Router>
      </div>
    );
  }
}
