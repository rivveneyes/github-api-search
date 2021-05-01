import React, { useEffect, Fragment } from "react";
import Spinner from "../Spinner";
import Repos from "../repos/Repos";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const User = ({ user, match, getUser, getUserRepos, loading, repos }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    // login,
    html_url,
    // followers,
    // following,
    // public_repos,
    // public_gists,
    hireable,
  } = user;
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
};
User.propTypes = {
  getUser: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  getUserRepos: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};
export default User;
