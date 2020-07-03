import React from "react";
import "./App.css";
import "normalize.css";
import { Ranking } from "./views/Ranking/Ranking";
import { Players } from "./views/Players/Players";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Tournaments } from "./views/Tournaments/Tournaments";
import { Player } from "./views/Player/Player";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/players" component={Players} />
          <Route path="/player/:id" component={Player} />
          <Route path="/tournaments" component={Tournaments} />
          <Route path="/" component={Ranking} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
