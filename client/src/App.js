import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <br />
        <Header />
        <Wrapper>
          <Switch>
            <Route exact path="/" component={Saved} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/search" component={Search} />
            <Route component={NoMatch} />
          </Switch>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
