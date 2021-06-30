import React from "react";
import { Fade } from "react-awesome-reveal";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./styles/App.css";
import { Header, Footer } from "./components";
import { HomeScreen } from "./screens";
import * as ROUTES from "./constants/routes";
import { login, logout, selectUser } from "./features/userSlice";

const App = () => {
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
};

export default App;
