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
    <div style={personStyle}>
      {users.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </div>
  );
};

const personStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
