import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import CartItem from "../../components/cartItem/CartItem";
import styles from "./Checkout.module.css";
import { Form, useOutletContext } from "react-router-dom";

export async function action() {
  console.log("checkout");
  return "Checkout";
}

const Checkout = () => {
  const { cartItems, setCartItems } = useOutletContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cartItems.length) {
      const totalPrice = cartItems.reduce((previous, current) => {
        return previous + current.price * current.count;
      }, 0);

      setTotal(totalPrice);
    }
  }, [cartItems]);

  const removeItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    const totalPrice = updatedItems.reduce((previous, current) => {
      return previous + current.price * current.count;
    }, 0);
    setTotal(totalPrice);
  };

  return (
    <div className={styles.container}>
      <h1>Checkout</h1>
      <div className={styles.checkout}>
        <section className={`${styles.section} ${styles.left}`}>
          <h3>Payment</h3>
          <div className={styles.methods}>
            Pay With:
            <div>
              <input type="radio" name="method" id="card" defaultChecked />
              <label htmlFor="card">Card</label>

              <input type="radio" name="method" id="bank" />
              <label htmlFor="bank">Bank</label>

              <input type="radio" name="method" id="transfer" />
              <label htmlFor="transfer">Transfer</label>
            </div>
          </div>
          <Form method="post" className={styles.form}>
            <label>
              Card Number
              <input
                type="text"
                name="card-number"
                placeholder="1234  5678  9101  1121"
                required
              />
            </label>
            <label>
              Expiry Date
              <input type="date" name="date" required />
            </label>
            <label>
              CVV
              <input type="number" name="cvv" placeholder="123" required />
            </label>
            <Button label={`Pay $${total.toFixed(2)}`} type="primary" />
          </Form>
        </section>

        <section className={`${styles.section} ${styles.right}`}>
          <h3>Order Summary</h3>

          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
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
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default Checkout;
