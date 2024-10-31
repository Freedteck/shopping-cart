import { Search, ShoppingCart } from "lucide-react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Cart from "../../routes/cart/Cart";

const Header = ({ cartItems, setCartItems }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (cartItems) setCount(cartItems.length);
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [cartItems]);

  const handleShowCart = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <header
      className={`${styles.navHeader} ${
        isScrolled ? styles.navHeaderScroll : ""
      }`}
    >
      <h1>Lodgety</h1>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="shop"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Shop
            </NavLink>
          </li>
          <li></li>
        </ul>
      </nav>

      <div className={styles.actions}>
        <div className={styles.cart}>
          <span className={styles.badge}>{count}</span>
          <ShoppingCart size={24} onClick={handleShowCart} />
        </div>
        <Search size={24} />
        <Button label="Sign In" type="secondary" />
      </div>
      {showCart && (
        <div className={styles.cartBox}>
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  count: PropTypes.number,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      count: PropTypes.number,
    })
  ),
  setCartItems: PropTypes.func,
};

export default Header;
