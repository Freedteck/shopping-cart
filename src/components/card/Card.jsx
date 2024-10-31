import { MinusIcon, PlusIcon } from "lucide-react";
import styles from "./Card.module.css";
import Button from "../button/Button";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

const Card = ({ data }) => {
  const { cartItems, setCartItems } = useOutletContext();
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    if (value === 10) return;
    setValue((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    if (value === 0) return;
    setValue((prevValue) => prevValue - 1);
  };

  const handleInput = (e) => {
    const inputvalue = parseInt(e.target.value);
    if (inputvalue < 1 || isNaN(value)) {
      setValue(0);
    } else if (inputvalue > 10) {
      setValue(10);
    } else {
      setValue(parseInt(e.target.value));
    }
  };

  const handleAddToCart = () => {
    const { id, image, title, price } = data;
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      const updatedItems = cartItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count + value,
          };
        }
        return item;
      });
      setCartItems(updatedItems);
    } else {
      setCartItems((prevItems) => [
        ...prevItems,
        {
          id,
          image,
          title,
          price,
          count: value,
        },
      ]);
    }

    setValue(0);
  };

  return (
    <div className={styles.card}>
      <div
        className={styles.cardImg}
        style={{
          backgroundImage: data.image
            ? `url(${data.image})`
            : `url(https://via.placeholder.com/150)`,
        }}
      ></div>
      <div className={styles.cardText}>
        <h3>{data.title}</h3>
        <p>
          <b>${data.price}</b>
        </p>
        <div className={styles.row}>
          <div className={styles.counter}>
            <button disabled={value === 0}>
              <MinusIcon onClick={handleDecrement} />
            </button>
            <input
              type="number"
              name="count"
              placeholder="1"
              value={value}
              onChange={(e) => handleInput(e)}
            />
            <button disabled={value === 10}>
              <PlusIcon onClick={handleIncrement} />
            </button>
          </div>
          <Button
            label="Add to Cart"
            disabled={value === 0}
            onClick={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
