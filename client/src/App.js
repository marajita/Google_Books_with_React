import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedBooks from "./pages/SavedBooks";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import SearchBooks from "./pages/SearchBooks";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* <Route exact path="/" component={Books} /> */}
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/savedbooks" component={SavedBooks} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
