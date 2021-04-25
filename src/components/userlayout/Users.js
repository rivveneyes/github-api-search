import React from "react";
import PersonCard from "./Usercard";
import Spinner from "./Spinner";
const Users = ({ users, loading }) => {
  return loading ? (
    <Spinner />
  ) : (
    <div>
      {users.map((person) => {
        return <PersonCard key={person.id} person={person} />;
      })}
    </div>
  );
};

export default Users;
