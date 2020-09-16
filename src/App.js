import React from "react";
import "./App.css";
import "normalize.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Ranking } from "./views/Ranking/Ranking";
import { Players } from "./views/Players/Players";
import { Player } from "./views/Player/Player";
import { Tournaments } from "./views/Tournaments/Tournaments";
import { Tournament } from "./views/Tournament/Tournament";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/players" component={Players} />
          <Route path="/player/:id" component={Player} />
          <Route path="/tournaments" component={Tournaments} />
          <Route path="/tournament/:id" component={Tournament} />
          <Route path="/" component={Ranking} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
