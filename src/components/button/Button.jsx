import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({
  label = "Click Me!",
  type = "primary",
  disabled = false,
  onClick,
}) => {
  return (
    <button className={styles[type]} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
