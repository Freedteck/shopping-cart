import { MinusIcon, PlusIcon } from "lucide-react";
import styles from "./Card.module.css";
import Button from "../button/Button";
import PropTypes from "prop-types";

const Card = ({ data }) => {
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
            <button>
              <PlusIcon />
            </button>
            <input type="number" name="count" placeholder="1" />
            <button>
              <MinusIcon />
            </button>
          </div>
          <Button label="Add to Cart" />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
