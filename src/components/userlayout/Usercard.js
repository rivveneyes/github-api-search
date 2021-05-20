import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const PersonCard = ({ person: { login, avatar_url, html_url } }) => {
  return (
    <div className="person-card">
      <img src={avatar_url} alt="img of person"></img>
      <h1>{login}</h1>
      <div>
        <hr />
        <Link to={`/user/${login}`}>See More</Link>
      </div>
    </div>
  );
};

PersonCard.propTypes = {
  person: PropTypes.object.isRequired,
};

export default PersonCard;
