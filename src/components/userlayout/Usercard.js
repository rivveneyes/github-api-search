import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const PersonCard = ({ person: { login, avatar_url, html_url } }) => {
  return (
    <div style={{ margin: "auto" }}>
      <img style={imgStyles} src={avatar_url} alt="img of person"></img>
      <h1>{login}</h1>
      <div>
        <Link to={`/user/${login}`}>See More</Link>
      </div>
    </div>
  );
};
const imgStyles = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
};

PersonCard.propTypes = {
  person: PropTypes.object.isRequired,
};

export default PersonCard;
