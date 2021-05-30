import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Users from "./components/userlayout/Users";
import User from "./components/userlayout/User";
import Searchbar from "./components/userlayout/Searchbar";
import Alert from "./components/userlayout/Alert";
import About from "./components/pages/About";
// import axios from "axios";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/Alertstate";
import "./App.css";
const App = () => {
  

  return (
    <GithubState>
      <AlertState>
        <Router>
          <Navbar />
          <div className="container-app">
            {alert && <Alert />}
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Searchbar />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};
export default App;
