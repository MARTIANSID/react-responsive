import React, { ReactFragment, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect,Router } from "react-router-dom";
import "./App.css";
import Home from "./components/home"

function App() {
  return (
    <div className="app">
      
        <BrowserRouter>
          <Switch>
            <Route path="/search"> <h1>Search Page</h1></Route>
            <Route path='/' component={Home}></Route>
          </Switch>
        </BrowserRouter>
      
    </div>
  );
}
export default App;
