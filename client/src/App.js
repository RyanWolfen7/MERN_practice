import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar.js"
import CreateTodo from "./components/CreateTodo.js";
import EditTodo from "./components/EditTodo.js";
import TodosList from "./components/TodosList.js";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <NavBar />
          <br/>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
