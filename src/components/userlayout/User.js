import React, { Component, Fragment } from "react";
import Spinner from "../Spinner";
import Repos from "../repos/Repos";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class User extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes = {
    getUser: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool,
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading, repos } = this.props;
    if (loading) return <Spinner />;
    return (
      <Fragment>
        <Link to="/">Back-Test</Link>
        Hireable:{" "}
        {<input type="checkbox" checked={hireable} disabled="disabled" />}
        <div>
          <div>
            <img src={avatar_url} alt={`img of person named ${name}`} />
            <h1>{name}</h1>
            <p>Location:{location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>BIO</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url}>Go To Github Profile</a>
          </div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
}

export default User;
