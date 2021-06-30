import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./styles/App.css";
import { Header, Footer } from "./components";
import {
  HomeScreen,
  FeaturedScreen,
  LoginScreen,
  MenuScreen,
  SignupScreen,
} from "./screens";
import * as ROUTES from "./constants/routes";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./libs/firebase";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //warn => user signin
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        //warn => user signout
        dispatch(logout());
      }
    });
  }, [dispatch]);

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

          <Route exact path="/account/signin">
            {user ? <Redirect to="/menu" /> : <LoginScreen />}
          </Route>
          <Route exact path="/account/create">
            {user ? <Redirect to="/menu" /> : <SignupScreen />}
          </Route>
          <Route exact path="/menu">
            {!user ? (
              <Redirect to="/account/signin" />
            ) : (
              <>
                <Header menuPage />
                <MenuScreen />
              </>
            )}
          </Route>
          <Route exact path="/menu/featured">
            <Header />
            <FeaturedScreen />
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
