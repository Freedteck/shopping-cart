import { CheckCircle2 } from "lucide-react";
import styles from "./ConfirmationModal.module.css";
import Button from "../button/Button";
import PropTypes from "prop-types";

const ConfirmationModal = ({ total, handleContinueShopping }) => {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <div className={styles.success}>
          <CheckCircle2 size={70} absoluteStrokeWidth />
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <h3>Payment Successful</h3>
            <p>Thank you for shopping with us. We hope you enjoy your order!</p>
          </div>

          <div className={styles.info}>
            <p>
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>
          </div>

          <div className={styles.total}>
            <p>Order Total</p>
            <p className={styles.price}>${total.toFixed(2)}</p>
          </div>
          <Button
            label="Continue Shopping"
            type="primary"
            onClick={handleContinueShopping}
          />
        </div>
      </div>
    </div>
  );
};

ConfirmationModal.propTypes = {
  total: PropTypes.number,
  handleContinueShopping: PropTypes.func,
};

export default ConfirmationModal;
