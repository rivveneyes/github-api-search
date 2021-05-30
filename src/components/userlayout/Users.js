import React, { useContext, useEffect } from "react";
import PersonCard from "./Usercard";
import Spinner from "../Spinner";
import GithubContext from "../../context/github/githubContext";
const Users = () => {
  const githubContext = useContext(GithubContext);

  useEffect(() => {
    githubContext.searchUsers("A");
    //eslint-disable-next-line
  }, []);

  const { loading, users } = githubContext;
  return loading ? (
    <Spinner />
  ) : (
    <div className="persons-display">
      {users.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </div>
  );
};

export default Users;
