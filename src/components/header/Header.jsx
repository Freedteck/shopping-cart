import { Search, ShoppingCart } from "lucide-react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.navHeader}>
      <h1>Lodgety</h1>
      <nav className={styles.navLinks}>
        <ul className={styles.navLinks}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
        </ul>
        <ShoppingCart size={24} />
      </nav>

      <div className={styles.actions}>
        <Search size={24} />
        <a href="#" className={styles.login}>
          Signup / Login
        </a>
      </div>
    </header>
  );
};

export default Header;
