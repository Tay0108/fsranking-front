import React from "react";
import "./App.css";
import "normalize.css";
import { Ranking } from "./views/Ranking/Ranking";
import { Players } from "./views/Players/Players";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/players">
            <Players />
          </Route>
          <Route path="/">
            <Ranking />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
