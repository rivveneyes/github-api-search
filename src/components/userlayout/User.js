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

export default User;
