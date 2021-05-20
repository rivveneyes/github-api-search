import React, { useContext } from "react";
import PersonCard from "./Usercard";
import Spinner from "../Spinner";
import GithubContext from "../../context/github/githubContext";
const Users = () => {
  const githubContext = useContext(GithubContext);

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
