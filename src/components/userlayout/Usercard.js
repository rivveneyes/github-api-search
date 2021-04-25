import PropTypes from "prop-types";
const PersonCard = ({ person: { login, avatar_url, html_url } }) => {
  return (
    <div>
      <img src={avatar_url} alt=""></img>
      <h1>{login}</h1>
      <div>
        <a href={html_url}>See More</a>
      </div>
    </div>
  );
};

PersonCard.propTypes = {
  person: PropTypes.object.isRequired,
};

export default PersonCard;
