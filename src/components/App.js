import React from "react";
import { Route, Switch } from "react-router-dom";
import Generator from "./Generator";
import Landing from "./Landing";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/Generator" component={Generator} />
      </Switch>
    );
  }
}
export default App;
