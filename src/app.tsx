import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Forms from "./component/forms/forms";
import Twitter from "./component/twitter/twitter";
import Todo from "./component/todo/todo";

const App = () => (
  <BrowserRouter>
    <div>
      <Link to="/">Home</Link>
    </div>
    <div>
      <Link to="/forms">forms</Link>
    </div>
    <div>
      <Link to="/twitter">Twitter</Link>
    </div>
    <div>
      <Link to="/todo">ToDo List</Link>
    </div>
    <Switch>
      <Route path="/forms" component={Forms} />
      <Route path="/twitter" component={Twitter} />
      <Route path="/todo" component={Todo} />
    </Switch>
  </BrowserRouter>
);

export default App;
