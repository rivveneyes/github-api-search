import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import ReducerGithub from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_REPOS,
  GET_USERS,
} from "../types";
let githubClientId;
let githubClientSeceret;
if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSeceret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSeceret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
  const initalState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(ReducerGithub, initalState);

  //Search Users
  const searchUsers = async (text) => {
    setLoading();
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secert=${githubClientSeceret}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
    });
  };
  // Get Single User
  const getUser = async (userName) => {
    setLoading();
    const response = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${githubClientId}&client_secert=${githubClientSeceret}`
    );

    dispatch({
      type: GET_USERS,
      payload: response.data,
    });
  };

  //Get Repos
  const getUserRepos = async (userName) => {
    setLoading();
    const response = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secert=${githubClientSeceret}`
    );
    dispatch({
      type: GET_REPOS,
      payload: response.data,
    });
  };

  //Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
