import PropTypes from "prop-types";

const Button = ({ btnType, text, onClick }) => {
  return (
    <button
      className={btnType ? `btn btn-${btnType}` : `btn`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  btnType: "btn-primary",
};

Button.propTypes = {
  btnType: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
