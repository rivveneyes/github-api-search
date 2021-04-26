import React, { Component } from "react";
import PropTypes from "prop-types";
export class Searchbar extends Component {
  state = {
    search: "",
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onSubmit(e) {
    e.preventDefault();
    if (this.state.search === "") {
      this.props.setAlert("please enter something", "light");
    } else {
      this.props.searchUsers(this.state.search);
      this.setState({ search: "" });
    }
  }
  render() {
    const { showClear, clearUsers } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            type="text"
            name="text"
            placeholder="Search Users"
            value={this.state.search}
            onChange={(e) => {
              this.setState({ search: e.target.value });
            }}
          />
          <input type="submit" value="Search" />
        </form>
        {showClear && <button onClick={clearUsers}>Clear</button>}
      </div>
    );
  }
}

export default Searchbar;
