import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Footer } from "./components";
import { HomeScreen } from "./screens";
import * as ROUTES from "./constants/routes";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME}>
            <Header />
            <HomeScreen />
            <Fade>
              <Footer />
            </Fade>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
