import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Development
import { hot } from "react-hot-loader";

const App: React.FC<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Sample />
        </Route>
      </Switch>
    </Router>
  );
};

function Sample(): JSX.Element {
  return (
    <div className="bg-gray-100 min-w-full min-h-screen flex flex-col justify-center items-center window-drag">
      <div className="bg-white rounded shadow flex flex-col justify-center items-center p-10">
        <p>MAIN_WINDOW_RENDERER</p>
      </div>
    </div>
  );
}

export default hot(module)(App);
