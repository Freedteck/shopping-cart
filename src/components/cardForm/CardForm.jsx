import Button from "../button/Button";
import styles from "./CardForm.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

const CardForm = ({ total }) => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleCardDetails = (e) => {
    setCardDetails({
      ...cardDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <fieldset className={styles.form}>
      <label>
        Card Number
        <input
          type="text"
          name="cardNumber"
          placeholder="1234  5678  9101  1121"
          required
          value={cardDetails.cardNumber}
          onChange={handleCardDetails}
        />
      </label>
      <label>
        Expiry Date
        <input
          type="date"
          name="expiryDate"
          required
          value={cardDetails.expiryDate}
          onChange={handleCardDetails}
        />
      </label>
      <label>
        CVV
        <input
          type="number"
          name="cvv"
          placeholder="123"
          required
          value={cardDetails.cvv}
          onChange={handleCardDetails}
        />
      </label>
      <Button
        label={`Pay $${total.toFixed(2)}`}
        type="primary"
        disabled={
          !cardDetails.cardNumber || !cardDetails.expiryDate || !cardDetails.cvv
        }
      />
    </fieldset>
  );
};

CardForm.propTypes = {
  total: PropTypes.number,
};

export default CardForm;
