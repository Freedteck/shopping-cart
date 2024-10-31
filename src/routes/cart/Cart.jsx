import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import CartItem from "../../components/cartItem/CartItem";
import styles from "./Cart.module.css";
import PropTypes from "prop-types";

const Cart = ({ cartItems, setCartItems }) => {
  const [total, setTotal] = useState(0);

  const removeItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    const totalPrice = updatedItems.reduce((previous, current) => {
      return previous + current.price * current.count;
    }, 0);
    setTotal(totalPrice);
  };

  useEffect(() => {
    if (cartItems.length) {
      const totalPrice = cartItems.reduce((previous, current) => {
        return previous + current.price * current.count;
      }, 0);

      setTotal(totalPrice);
    }
  }, [cartItems]);
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Your Cart ({cartItems.length})</h3>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          removeItem={() => removeItem(item.id)}
        />
      ))}
      <div className={styles.total}>
        <h4>Total</h4>
        <p>${total.toFixed(2)}</p>
      </div>
      <Button label="Checkout" disabled={cartItems.length === 0} />
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      count: PropTypes.number,
    })
  ).isRequired,
  setCartItems: PropTypes.func.isRequired,
};

export default Cart;
