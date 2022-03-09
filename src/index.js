import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Todo from "./components/Todo";
import Teams from "./components/Teams";
import Members from "./components/Members";
import TeamDetail from "./components/TeamDetail";

import "./style.css";

const App = () => (
  <div className="app">
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Members</Link>
          </li>
          <li>
            <Link to="/teams">Teams</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/" component={Members} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/teams/:id" component={TeamDetail} />
          <Route exactpath="/todo" component={Todo} />
        </Switch>
      </div>
    </Router>
  </div>
);

render(<App />, document.getElementById("root"));
