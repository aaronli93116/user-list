import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Edit from "./components/Edit";
import AddOne from "./components/Create";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/edituser/:userId" component={Edit} />
          <Route path="/addOne" component={AddOne} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
