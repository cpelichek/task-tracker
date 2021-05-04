import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onToggleAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        btnType={showAdd ? "warning" : "success"}
        text={showAdd ? "Close" : "Add"}
        onClick={onToggleAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
