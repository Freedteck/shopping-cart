import { Copy } from "lucide-react";
import Button from "../button/Button";
import PropTypes from "prop-types";
import styles from "./TransferForm.module.css";

const TransferForm = ({ total }) => {
  return (
    <fieldset className={styles.form}>
      <div className={styles.transfer}>
        <span>Transfer USD{total.toFixed(2)} to:</span>
        <div className={styles.account}>
          <h4>Zenith Bank</h4>
          <p className={styles.number}>
            2215817192{" "}
            <span>
              <Copy size={20} absoluteStrokeWidth />
            </span>
          </p>
        </div>
        <p className={styles.expiry}>
          Expires in <span>10:00</span> minutes
        </p>
      </div>
      <Button label="Confirm Payment" type="primary" />
    </fieldset>
  );
};

TransferForm.propTypes = {
  total: PropTypes.number,
};

export default TransferForm;
