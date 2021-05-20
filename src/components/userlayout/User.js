import React, { useEffect, Fragment, useContext } from "react";
import Spinner from "../Spinner";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";
const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, repos, getUserRepos } = githubContext;

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
    login,
    html_url,
    public_repos,
    hireable,
  } = user;
  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link className="back-button" to="/">
        Back
      </Link>
      <div>
        <div className="about-person-container">
          <div className="repo-card">
            <img src={avatar_url} alt={`img of person named ${name}`} />
            <h1>{name}</h1>
            <p> login: {login}</p>
            <a href={html_url}>Go To Github Profile</a>
          </div>
          <div className="repo-info-card">
            Hireable:
            {<input type="checkbox" checked={hireable} disabled="disabled" />}
            {location && <p>Location:{location}</p>}
            <hr />
            {bio && (
              <Fragment>
                <h3>BIO</h3>
                <span>{bio}</span>
              </Fragment>
            )}
            <p> Number of public repos:{public_repos}</p>
          </div>
        </div>
      </div>
      <h2 className="repos-header">REPOS</h2>
      <div className="repos-grid">
        <Repos repos={repos} />
      </div>
    </Fragment>
  );
};

export default User;
