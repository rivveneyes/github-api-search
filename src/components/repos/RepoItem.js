import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  return (
    <h3>
      <a href={repo.html_url}>{repo.name}</a>
    </h3>
  );
};

RepoItem.proptype = {
  repo: PropTypes.object.isRequired,
};
export default RepoItem;
