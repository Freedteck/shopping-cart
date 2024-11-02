import PropTypes from "prop-types";
import styles from "./CartItem.module.css";
import { XCircle } from "lucide-react";

const CartItem = ({ item, removeItem }) => {
  return (
    <div className={styles.item}>
      <img src={item.image} alt={item.title} />
      <div className={styles.details}>
        <h4>{item.title}</h4>
        <div className={styles.price}>
          <p className={styles.quantity}>{item.count}X</p>
          <p className={styles.amount}>@ ${item.price}</p>
          <p className={styles.total}>
            ${(item.count * item.price).toFixed(2)}
          </p>
        </div>
      </div>
      <div className={styles.remove} onClick={removeItem}>
        <XCircle size="24" absoluteStrokeWidth />
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default CartItem;
