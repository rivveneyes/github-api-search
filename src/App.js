import { Component } from "react";
import "./App.css";
import Users from "./components/userlayout/Users";
import axios from "axios";
class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({
      loading: true,
    });
    const response = await axios.get("https://api.github.com/users");
    this.setState({
      users: response.data,
      loading: false,
    });
  }

  render() {
    return <Users loading={this.state.loading} users={this.state.users} />;
  }
}

export default App;
