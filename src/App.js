import { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Users from "./components/userlayout/Users";
import User from "./components/userlayout/User";
import Searchbar from "./components/userlayout/Searchbar";
import Alert from "./components/userlayout/Alert";
import About from "./components/pages/About";
import axios from "axios";
class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };

  async componentDidMount() {
    this.setState({
      loading: true,
    });
    const response = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secert=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({
      users: response.data,
      loading: false,
    });
  }

  searchUsers = async (text) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secert=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({
      users: response.data.items,
      loading: false,
    });
  };
  // Get single user

  getUser = async (userName) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secert=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({
      user: response.data,
      loading: false,
    });
  };
  //pull users repos
  getUserRepos = async (userName) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secert=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({
      repos: response.data,
      loading: false,
    });
  };

  //clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };
  //Alert

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 3500);
  };

  render() {
    const { users, user, loading, repos } = this.state;
    return (
      <Router>
        <Navbar />
        <div>
          {this.state.alert && <Alert alert={this.state.alert} />}
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Searchbar
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
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
                  getUserRepos={this.getUserRepos}
                  getUser={this.getUser}
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
  }
}

export default App;
