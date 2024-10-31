import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import style from "./Root.module.css";
import { useState } from "react";

const Root = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className={style.root}>
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      <div className={style.children}>
        <Outlet context={{ cartItems, setCartItems }} />
      </div>
    </div>
  );
};

export default Root;
