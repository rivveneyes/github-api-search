import { useState, Fragment, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Users from "./components/userlayout/Users";
import User from "./components/userlayout/User";
import Searchbar from "./components/userlayout/Searchbar";
import Alert from "./components/userlayout/Alert";
import About from "./components/pages/About";
import axios from "axios";
const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlter] = useState(null);

  useEffect(() => {
    initalLoad();
  }, []);

  async function initalLoad() {
    setLoading(true);
    const response = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secert=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUsers(response.data);
    setLoading(false);
  }
  const searchUsers = async (text) => {
    setLoading(true);
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secert=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(response.data.items);
    setLoading(false);
  };
  // Get single user

  const getUser = async (userName) => {
    setLoading(true);
    const response = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secert=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setLoading(false);
    setUser(response.data);
  };
  //pull users repos
  const getUserRepos = async (userName) => {
    setLoading(true);
    const response = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secert=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setRepos(response.data);
    setLoading(false);
  };

  //clear users from state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };
  //Alert

  const setAlert = (msg, type) => {
    setAlter({ msg, type });

    setTimeout(() => setAlter(null), 3500);
  };

  return (
    <Router>
      <Navbar />
      <div>
        {alert && <Alert alert={alert} />}
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Fragment>
                <Searchbar
                  searchUsers={searchUsers}
                  clearUsers={clearUsers}
                  showClear={users.length > 0 ? true : false}
                  setAlert={setAlert}
                />
                <Users loading={loading} users={users} />
              </Fragment>
            )}
          />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/user/:login"
            render={(props) => (
              <User
                {...props}
                getUserRepos={getUserRepos}
                getUser={getUser}
                user={user}
                repos={repos}
                loading={loading}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
