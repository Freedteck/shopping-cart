import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ label = "Click Me!", type = "primary" }) => {
  return <button className={styles[type]}>{label}</button>;
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
