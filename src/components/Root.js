import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Welcome from "./Welcome";
import GameBoard from "./GameBoard";

const Root = () => {
  return (
    <HashRouter>
      <div>
        <main>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/game" component={GameBoard} />
          </Switch>
        </main>
      </div>
    </HashRouter>
  );
};

export default Root;
