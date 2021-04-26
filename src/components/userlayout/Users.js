import React from "react";
import PersonCard from "./Usercard";
import Spinner from "../Spinner";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
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

Users.prototype = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
