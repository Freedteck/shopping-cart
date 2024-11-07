
import Button from "../button/Button";
import PropTypes from "prop-types";
import styles from "./BankForm.module.css";
import { useState } from "react";

const BankForm = ({ total }) => {
  const [bank, setBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const handleSelectedBank = (e) => {
    setBank(e.target.value);
  };
  return (
    <fieldset className={styles.form}>
      <label>
        <select
          name="banks"
          value={bank}
          required
          onChange={handleSelectedBank}
        >
          <option value="" disabled>
            Choose your bank
          </option>
          <option value="chase">Chase</option>
          <option value="boa">Bank of America</option>
          <option value="wellsfargo">Wells Fargo</option>
          <option value="citi">Citi Bank</option>
        </select>
      </label>
      {bank && (
        <label>
          Enter your account number
          <input
            type="text"
            name="account-number"
            placeholder="1234567890"
            minLength={10}
            required
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </label>
      )}
      <Button
        label={`Pay $${total.toFixed(2)}`}
        type="primary"
        disabled={accountNumber.length < 10 || !bank}
      />
    </fieldset>
  );
};

BankForm.propTypes = {
  total: PropTypes.number,
};

export default BankForm;
