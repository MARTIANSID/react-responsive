import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Service from "./components/service";
import Navbar from "./components/navbar";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/service" exact component={Service} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
