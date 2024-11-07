import { useEffect, useState } from "react";
import CartItem from "../../components/cartItem/CartItem";
import styles from "./Checkout.module.css";
import {
  Form,
  useActionData,
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import CardForm from "../../components/cardForm/CardForm";
import BankForm from "../../components/BankForm/BankForm";
import TransferForm from "../../components/transferForm/TransferForm";
import ConfirmationModal from "../../components/confirmationModal/ConfirmationModal";

const Checkout = () => {
  const { cartItems, setCartItems } = useOutletContext();
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const checkOutAction = useActionData();
  const navigate = useNavigate();

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

  const clearCart = () => {
    setCartItems([]);
    setTotal(0);
    navigate("/");
  };

  const handlePaymentMethod = (e) => {
    setPaymentMethod(e.target.id);
  };

  return (
    <div className={styles.container}>
      <h1>Checkout</h1>
      <div className={styles.checkout}>
        <Form method="post" className={`${styles.section} ${styles.left}`}>
          <h3>Payment</h3>
          <div className={styles.methods}>
            Pay With:
            <div>
              <input
                type="radio"
                name="method"
                id="card"
                value={paymentMethod}
                checked={paymentMethod === "card"}
                onChange={handlePaymentMethod}
              />
              <label htmlFor="card">Card</label>

              <input
                type="radio"
                name="method"
                id="bank"
                value={paymentMethod}
                checked={paymentMethod === "bank"}
                onChange={handlePaymentMethod}
              />
              <label htmlFor="bank">Bank</label>

              <input
                type="radio"
                name="method"
                id="transfer"
                value={paymentMethod}
                checked={paymentMethod === "transfer"}
                onChange={handlePaymentMethod}
              />
              <label htmlFor="transfer">Transfer</label>
            </div>
          </div>
          {paymentMethod === "card" && <CardForm total={total} />}
          {paymentMethod === "bank" && <BankForm total={total} />}
          {paymentMethod === "transfer" && <TransferForm total={total} />}
        </Form>

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
      {checkOutAction?.success && (
        <ConfirmationModal total={total} handleContinueShopping={clearCart} />
      )}
    </div>
  );
};

export default Checkout;
